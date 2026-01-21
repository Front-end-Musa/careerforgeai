import { ResumeTone } from '../interfaces/resumes.interface';

export function buildResumePrompt(params: {
  formData: unknown;
  tone: ResumeTone;
  language: string;
}) {
  return `
Create resume content based on the following input data.

Resume tone: ${params.tone}
Language: ${params.language}

Rules:
- Use professional resume language
- Do NOT invent missing data
- If information is missing, omit the field
- Output must match the ResumeGeneratedContent schema exactly
- Return ONLY valid JSON

Input form data:
${JSON.stringify(params.formData, null, 2)}
`;
}