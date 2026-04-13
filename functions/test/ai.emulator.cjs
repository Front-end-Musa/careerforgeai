const test = require('node:test');
const assert = require('node:assert/strict');

const ai = require('../lib/ai.js');
const shared = require('../lib/shared.js');
const { getFirestore } = require('firebase-admin/firestore');

const emulatorOnly = process.env.FIRESTORE_EMULATOR_HOST ? test : test.skip;

function uniqueId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

emulatorOnly('[emulator] generateResume increments usage in Firestore on success', async (t) => {
  const db = getFirestore();
  const uid = uniqueId('resume-user');

  await db.collection('users').doc(uid).set({
    email: `${uid}@example.com`,
    plan: 'free',
    aiUsageCount: 0,
    aiUsageWindowKey: '2026-04',
  });

  t.mock.method(shared, 'getOpenAiClient', () => ({
    chat: {
      completions: {
        create: async () => ({
          choices: [{ message: { content: 'Improved resume text' } }],
        }),
      },
    },
  }));

  const result = await ai.generateResume.run({
    auth: { uid },
    data: { resumeText: 'Original resume' },
  });

  const snapshot = await db.collection('users').doc(uid).get();

  assert.deepEqual(result, { text: 'Improved resume text' });
  assert.equal(snapshot.data().aiUsageCount, 1);
});

emulatorOnly('[emulator] downloadResume reads seeded resume documents', async () => {
  const db = getFirestore();
  const uid = uniqueId('download-user');
  const resumeId = uniqueId('resume');

  await db.collection('resumes').doc(resumeId).set({
    userId: uid,
    personalInfo: { fullName: 'Resume Owner' },
    summary: 'Seeded resume content',
  });

  const result = await ai.downloadResume.run({
    auth: { uid },
    data: { resumeId },
  });

  assert.equal(result.fileName, `Resume_Owner-${resumeId}.json`);
  assert.match(result.content, /Seeded resume content/);
});
