const test = require('node:test');
const assert = require('node:assert/strict');
const { getCurrentWindowKey } = require('./helpers.cjs');

const ai = require('../lib/ai.js');
const shared = require('../lib/shared.js');
const firestore = require('firebase-admin/firestore');

function createUser(overrides = {}) {
  return {
    plan: 'free',
    aiUsageCount: 0,
    aiUsageWindowKey: getCurrentWindowKey(),
    ...overrides,
  };
}

test('validateGenerateCoverLetterData trims valid payloads', () => {
  const result = ai.validateGenerateCoverLetterData({
    resumeText: ' resume ',
    jobDescription: ' job ',
    companyName: ' company ',
    position: ' position ',
    tone: ' confident ',
  });

  assert.deepEqual(result, {
    resumeText: 'resume',
    jobDescription: 'job',
    companyName: 'company',
    position: 'position',
    tone: 'confident',
  });
});

test('validateGenerateCoverLetterData throws failed-precondition for missing resume text', () => {
  assert.throws(
    () =>
      ai.validateGenerateCoverLetterData({
        resumeText: '   ',
        jobDescription: 'job',
        companyName: 'company',
        position: 'position',
        tone: 'professional',
      }),
    (error) => {
      assert.equal(error.code, 'failed-precondition');
      assert.match(error.message, /Create or upload a resume/i);
      return true;
    },
  );
});

test('validateGenerateCoverLetterData throws invalid-argument for missing job details', () => {
  assert.throws(
    () =>
      ai.validateGenerateCoverLetterData({
        resumeText: 'resume',
        jobDescription: '   ',
        companyName: 'company',
        position: 'position',
        tone: 'professional',
      }),
    (error) => {
      assert.equal(error.code, 'invalid-argument');
      assert.match(error.message, /jobDescription is required/i);
      return true;
    },
  );
});

test('echo returns provided text and falls back when absent', async () => {
  const withText = await ai.echo.run({ data: { text: 'hello' } });
  const withoutText = await ai.echo.run({ data: {} });

  assert.deepEqual(withText, { text: 'hello' });
  assert.deepEqual(withoutText, { text: 'No text provided' });
});

test('generateResume rejects unauthenticated requests', async () => {
  await assert.rejects(
    () => ai.generateResume.run({ auth: null, data: { resumeText: 'resume' } }),
    (error) => {
      assert.equal(error.code, 'unauthenticated');
      return true;
    },
  );
});

test('generateResume rejects invalid payloads before provider calls', async () => {
  await assert.rejects(
    () => ai.generateResume.run({ auth: { uid: 'user-1' }, data: {} }),
    (error) => {
      assert.equal(error.code, 'invalid-argument');
      assert.match(error.message, /resumeText is required/i);
      return true;
    },
  );
});

test('generateResume rejects users who have exhausted quota', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({
    user: createUser({ aiUsageCount: 3 }),
  }));

  await assert.rejects(
    () => ai.generateResume.run({ auth: { uid: 'user-1' }, data: { resumeText: 'resume' } }),
    (error) => {
      assert.equal(error.code, 'resource-exhausted');
      return true;
    },
  );
});

test('generateResume maps provider auth failures to failed-precondition', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({ user: createUser() }));
  t.mock.method(shared, 'getOpenAiClient', () => ({
    chat: {
      completions: {
        create: async () => {
          throw { status: 401, message: 'bad api key' };
        },
      },
    },
  }));

  await assert.rejects(
    () => ai.generateResume.run({ auth: { uid: 'user-1' }, data: { resumeText: 'resume' } }),
    (error) => {
      assert.equal(error.code, 'failed-precondition');
      assert.match(error.message, /OPENAI_API_KEY/i);
      return true;
    },
  );
});

test('generateResume rejects empty provider responses', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({ user: createUser() }));
  t.mock.method(shared, 'getOpenAiClient', () => ({
    chat: {
      completions: {
        create: async () => ({
          choices: [{ message: { content: '   ' } }],
        }),
      },
    },
  }));

  await assert.rejects(
    () => ai.generateResume.run({ auth: { uid: 'user-1' }, data: { resumeText: 'resume' } }),
    (error) => {
      assert.equal(error.code, 'internal');
      assert.match(error.message, /No resume response from AI/i);
      return true;
    },
  );
});

test('generateCoverLetter returns provider text on success', async (t) => {
  let usageRecordedFor = null;

  t.mock.method(shared, 'getUserProfile', async () => ({ user: createUser() }));
  t.mock.method(shared, 'recordSuccessfulAiUsage', async (uid) => {
    usageRecordedFor = uid;
  });
  t.mock.method(shared, 'getOpenAiClient', () => ({
    chat: {
      completions: {
        create: async () => ({
          choices: [{ message: { content: 'Tailored cover letter' } }],
        }),
      },
    },
  }));

  const result = await ai.generateCoverLetter.run({
    auth: { uid: 'user-42' },
    data: {
      resumeText: 'Resume text',
      jobDescription: 'Job text',
      companyName: 'Acme',
      position: 'Engineer',
      tone: 'direct',
    },
  });

  assert.deepEqual(result, { text: 'Tailored cover letter' });
  assert.equal(usageRecordedFor, 'user-42');
});

test('tailorResumeToJob rejects malformed resume payloads', async () => {
  await assert.rejects(
    () =>
      ai.tailorResumeToJob.run({
        auth: { uid: 'user-1' },
        data: {
          resume: [],
          companyName: 'Acme',
          position: 'Engineer',
          jobDescription: 'Build things',
        },
      }),
    (error) => {
      assert.equal(error.code, 'invalid-argument');
      assert.match(error.message, /valid resume payload/i);
      return true;
    },
  );
});

test('tailorResumeToJob converts malformed provider JSON into internal errors', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({ user: createUser() }));
  t.mock.method(shared, 'getOpenAiClient', () => ({
    chat: {
      completions: {
        create: async () => ({
          choices: [{ message: { content: 'not valid json' } }],
        }),
      },
    },
  }));

  await assert.rejects(
    () =>
      ai.tailorResumeToJob.run({
        auth: { uid: 'user-1' },
        data: {
          resume: {
            summary: 'Current summary',
            skills: ['Angular'],
            experience: [{ company: 'Acme', description: ['Built things'] }],
          },
          companyName: 'Acme',
          position: 'Engineer',
          jobDescription: 'Build things',
        },
      }),
    (error) => {
      assert.equal(error.code, 'internal');
      assert.match(error.message, /Unable to tailor resume/i);
      return true;
    },
  );
});

test('tailorResumeToJob preserves metadata and falls back for partial provider output', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({ user: createUser() }));
  t.mock.method(shared, 'recordSuccessfulAiUsage', async () => {});
  t.mock.method(shared, 'getOpenAiClient', () => ({
    chat: {
      completions: {
        create: async () => ({
          choices: [
            {
              message: {
                content: JSON.stringify({
                  summary: ' Better summary ',
                  skills: [' TypeScript ', ' ', 'Node.js'],
                  experienceDescriptions: [[' Improved bullet ']],
                }),
              },
            },
          ],
        }),
      },
    },
  }));

  const result = await ai.tailorResumeToJob.run({
    auth: { uid: 'user-1' },
    data: {
      resume: {
        summary: 'Original summary',
        skills: ['Angular'],
        experience: [
          {
            company: 'Acme',
            role: 'Engineer',
            description: ['Original bullet'],
          },
          {
            company: 'Beta',
            role: 'Developer',
            description: ['Preserved bullet'],
          },
        ],
        meta: {
          createdAt: '2026-01-01T00:00:00.000Z',
          source: 'manual',
          version: 2,
        },
      },
      companyName: 'Acme',
      position: 'Engineer',
      jobDescription: 'Build things',
    },
  });

  assert.equal(result.resume.summary, 'Better summary');
  assert.deepEqual(result.resume.skills, ['TypeScript', 'Node.js']);
  assert.deepEqual(result.resume.experience[0].description, ['Improved bullet']);
  assert.deepEqual(result.resume.experience[1].description, ['Preserved bullet']);
  assert.equal(result.resume.meta.createdAt, '2026-01-01T00:00:00.000Z');
  assert.equal(result.resume.meta.source, 'manual');
  assert.equal(result.resume.meta.version, 2);
  assert.equal(result.resume.meta.tailoring.companyName, 'Acme');
});

test('downloadResume enforces ownership', async (t) => {
  t.mock.method(firestore, 'getFirestore', () => ({
    collection: (name) => {
      assert.equal(name, 'resumes');
      return {
        doc: (id) => ({
          async get() {
            return {
              id,
              exists: true,
              data: () => ({
                userId: 'other-user',
                personalInfo: { fullName: 'Jane Doe' },
              }),
            };
          },
        }),
      };
    },
  }));

  await assert.rejects(
    () =>
      ai.downloadResume.run({
        auth: { uid: 'user-1' },
        data: { resumeId: 'resume-1' },
      }),
    (error) => {
      assert.equal(error.code, 'permission-denied');
      return true;
    },
  );
});

test('downloadResume sanitizes filenames and returns JSON payloads', async (t) => {
  t.mock.method(firestore, 'getFirestore', () => ({
    collection: () => ({
      doc: (id) => ({
        async get() {
          return {
            id,
            exists: true,
            data: () => ({
              userId: 'user-1',
              personalInfo: { fullName: 'Jane / Doe' },
              summary: 'Resume body',
            }),
          };
        },
      }),
    }),
  }));

  const result = await ai.downloadResume.run({
    auth: { uid: 'user-1' },
    data: { resumeId: 'resume-1' },
  });

  assert.equal(result.fileName, 'Jane_Doe-resume-1.json');
  assert.equal(result.contentType, 'application/json');
  assert.match(result.content, /"summary": "Resume body"/);
});
