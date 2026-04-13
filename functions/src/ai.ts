import {getFirestore} from "firebase-admin/firestore";
import {onCall, HttpsError} from "firebase-functions/v2/https";
import {
  assertAiQuotaAvailable,
  assertCallablePayload,
  getOpenAiClient,
  getUserProfile,
  logCallableInvocation,
  logCallableSuccess,
  openaiSecret,
  recordSuccessfulAiUsage,
  requireAuthUid,
  requireTrimmedString,
  rethrowLoggedHttpsError,
} from "./shared.js";
import type {
  DownloadResumeRequest,
  DownloadResumeResponse,
  GenerateCoverLetterRequest,
  GenerateResumeRequest,
  GenerateTextResponse,
  TailorResumeRequest,
  TailorResumeResponse,
  TailorResumeInput,
} from "./types.js";

function requireAiTextResponse(responseText: string | null | undefined, message: string) {
  const trimmed = responseText?.trim();
  if (!trimmed) {
    throw new HttpsError("internal", message);
  }

  return trimmed;
}

function validateGenerateResumeData(data: unknown): GenerateResumeRequest {
  const payload = assertCallablePayload(data);
  return {
    resumeText: requireTrimmedString(payload.resumeText, "resumeText"),
  };
}

export function validateGenerateCoverLetterData(data: unknown): GenerateCoverLetterRequest {
  const payload = assertCallablePayload(data);
  return {
    resumeText: requireTrimmedString(payload.resumeText, "resumeText", {
      code: "failed-precondition",
      message: "Create or upload a resume before generating a cover letter.",
    }),
    jobDescription: requireTrimmedString(payload.jobDescription, "jobDescription"),
    companyName: requireTrimmedString(payload.companyName, "companyName"),
    position: requireTrimmedString(payload.position, "position"),
    tone: requireTrimmedString(payload.tone, "tone"),
  };
}

function validateTailorResumeData(data: unknown): TailorResumeRequest {
  const payload = assertCallablePayload(data);
  const resume = payload.resume;

  if (!resume || typeof resume !== "object" || Array.isArray(resume)) {
    throw new HttpsError("invalid-argument", "A valid resume payload is required.");
  }

  return {
    resume: resume as TailorResumeInput,
    companyName: requireTrimmedString(payload.companyName, "companyName"),
    position: requireTrimmedString(payload.position, "position"),
    jobDescription: requireTrimmedString(payload.jobDescription, "jobDescription"),
  };
}

function validateDownloadResumeData(data: unknown): DownloadResumeRequest {
  const payload = assertCallablePayload(data);
  return {
    resumeId: requireTrimmedString(payload.resumeId, "resumeId"),
  };
}

export const generateResume = onCall(
  {secrets: [openaiSecret], invoker: "public"},
  async (request): Promise<GenerateTextResponse> => {
    const uid = requireAuthUid(request.auth);
    const {resumeText} = validateGenerateResumeData(request.data);

    logCallableInvocation("generateResume", request.auth, {
      hasResumeText: Boolean(resumeText),
    });

    const {user} = await getUserProfile(uid);
    assertAiQuotaAvailable(user);

    try {
      const client = getOpenAiClient();
      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that helps users improve their resumes.",
          },
          {
            role: "user",
            content: resumeText,
          },
        ],
      });

      const responseText = requireAiTextResponse(
        completion.choices[0].message?.content,
        "No resume response from AI.",
      );
      await recordSuccessfulAiUsage(uid);
      logCallableSuccess("generateResume");

      return {
        text: responseText,
      };
    } catch (error) {
      rethrowLoggedHttpsError("generateResume", error, "Unable to generate resume.");
    }
  },
);

export const generateCoverLetter = onCall(
  {secrets: [openaiSecret], invoker: "public"},
  async (request): Promise<GenerateTextResponse> => {
    const uid = requireAuthUid(request.auth);
    const {resumeText, jobDescription, companyName, position, tone} =
      validateGenerateCoverLetterData(request.data);

    logCallableInvocation("generateCoverLetter", request.auth, {
      hasResumeText: Boolean(resumeText),
      hasJobDescription: Boolean(jobDescription),
      hasCompanyName: Boolean(companyName),
      hasPosition: Boolean(position),
      tone,
    });

    const {user} = await getUserProfile(uid);
    assertAiQuotaAvailable(user);

    try {
      const client = await getOpenAiClient();
      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        temperature: 0.4,
        messages: [
          {
            role: "system",
            content: [
              "You write concise, persuasive cover letters for job applications.",
              "Use the candidate's resume details and the target role context.",
              "Match the requested tone without sounding generic.",
              "Do not invent experience that is not supported by the resume.",
            ].join(" "),
          },
          {
            role: "user",
            content: [
              `Company: ${companyName}`,
              `Position: ${position}`,
              `Tone: ${tone}`,
              "Job description:",
              jobDescription,
              "",
              "Candidate resume:",
              resumeText,
            ].join("\n"),
          },
        ],
      });

      const responseText = requireAiTextResponse(
        completion.choices[0].message?.content,
        "No cover letter response from AI.",
      );
      await recordSuccessfulAiUsage(uid);
      logCallableSuccess("generateCoverLetter");

      return {
        text: responseText,
      };
    } catch (error) {
      rethrowLoggedHttpsError("generateCoverLetter", error, "Unable to generate cover letter.");
    }
  },
);

export const tailorResumeToJob = onCall(
  {secrets: [openaiSecret], invoker: "public"},
  async (request): Promise<TailorResumeResponse> => {
    const uid = requireAuthUid(request.auth);
    const {resume, companyName, position, jobDescription} = validateTailorResumeData(
      request.data,
    );

    logCallableInvocation("tailorResumeToJob", request.auth, {
      hasSummary: Boolean(resume.summary),
      skillsCount: Array.isArray(resume.skills) ? resume.skills.length : 0,
      experienceCount: Array.isArray(resume.experience) ? resume.experience.length : 0,
      hasCompanyName: Boolean(companyName),
      hasPosition: Boolean(position),
      hasJobDescription: Boolean(jobDescription),
    });

    const {user} = await getUserProfile(uid);
    assertAiQuotaAvailable(user);

    try {
      const client = getOpenAiClient();
      const experience = Array.isArray(resume.experience) ? resume.experience : [];
      const skills = Array.isArray(resume.skills) ? resume.skills : [];

      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content: [
              "You are an expert resume tailoring assistant.",
              "Rewrite only these fields for better relevance to the target job:",
              "1) summary",
              "2) experience bullet descriptions",
              "3) skills list",
              "Do not invent employers, dates, degrees, or tools that are not supported by the resume/job description.",
              "Return valid JSON only.",
            ].join(" "),
          },
          {
            role: "user",
            content: JSON.stringify(
              {
                task: "Tailor this resume to the job while preserving identity/history fields.",
                targetJob: {
                  companyName,
                  position,
                  jobDescription,
                },
                resume: {
                  summary: resume.summary ?? "",
                  skills,
                  experience: experience.map((item) => ({
                    company: item.company ?? "",
                    role: item.role ?? "",
                    startDate: item.startDate ?? "",
                    endDate: item.endDate ?? "",
                    description: Array.isArray(item.description) ? item.description : [],
                  })),
                },
                outputSchema: {
                  summary: "string",
                  skills: ["string"],
                  experienceDescriptions: [["string"]],
                },
              },
              null,
              2,
            ),
          },
        ],
      });

      const responseText = requireAiTextResponse(
        completion.choices[0].message?.content,
        "No tailoring response from AI.",
      );

      const parsed = JSON.parse(responseText) as {
        summary?: unknown;
        skills?: unknown;
        experienceDescriptions?: unknown;
      };
      const summary =
        typeof parsed.summary === "string" ? parsed.summary.trim() : (resume.summary ?? "");
      const tailoredSkills = Array.isArray(parsed.skills) ?
        parsed.skills
          .filter((item): item is string => typeof item === "string")
          .map((item) => item.trim())
          .filter(Boolean) :
        skills;
      const descriptions = Array.isArray(parsed.experienceDescriptions) ?
        parsed.experienceDescriptions :
        [];

      const tailoredResume: TailorResumeInput = {
        ...resume,
        summary,
        skills: tailoredSkills,
        experience: experience.map((item, index) => {
          const rawDescriptions = descriptions[index];
          const nextDescriptions = Array.isArray(rawDescriptions) ?
            rawDescriptions
              .filter((desc): desc is string => typeof desc === "string")
              .map((desc) => desc.trim())
              .filter(Boolean) :
            (item.description ?? []);

          return {
            ...item,
            description: nextDescriptions,
          };
        }),
        meta: {
          createdAt: resume.meta?.createdAt ?? new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          source: resume.meta?.source === "ai" ? "ai" : "manual",
          version: resume.meta?.version ?? 1,
          tailoring: {
            source: "job-description",
            companyName,
            position,
            tailoredAt: new Date().toISOString(),
          },
        },
      };

      await recordSuccessfulAiUsage(uid);
      logCallableSuccess("tailorResumeToJob");
      return {resume: tailoredResume};
    } catch (error) {
      rethrowLoggedHttpsError("tailorResumeToJob", error, "Unable to tailor resume.");
    }
  },
);

export const downloadResume = onCall(
  {secrets: [], invoker: "public"},
  async (request): Promise<DownloadResumeResponse> => {
    const uid = requireAuthUid(request.auth);
    const {resumeId} = validateDownloadResumeData(request.data);
    logCallableInvocation("downloadResume", request.auth, {
      hasResumeId: Boolean(resumeId),
    });

    const db = getFirestore();
    const resumeRef = db.collection("resumes").doc(resumeId);
    const resumeSnapshot = await resumeRef.get();

    if (!resumeSnapshot.exists) {
      throw new HttpsError("not-found", "Resume not found.");
    }

    const resume = resumeSnapshot.data() as {
      userId?: string;
      personalInfo?: { fullName?: string };
    };
    if (resume.userId !== uid) {
      throw new HttpsError("permission-denied", "You do not have access to this resume.");
    }

    const safeName = (resume.personalInfo?.fullName || "resume")
      .replace(/[^a-zA-Z0-9_-]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 80);
    const response = {
      fileName: `${safeName || "resume"}-${resumeId}.json`,
      contentType: "application/json",
      content: JSON.stringify({id: resumeSnapshot.id, ...resumeSnapshot.data()}, null, 2),
    };
    logCallableSuccess("downloadResume");

    return response;
  },
);

export const echo = onCall(async (request): Promise<GenerateTextResponse> => {
  const payload =
    typeof request.data === "object" && request.data !== null ?
      (request.data as { text?: string }) :
      {};
  return {text: payload.text || "No text provided"};
});
