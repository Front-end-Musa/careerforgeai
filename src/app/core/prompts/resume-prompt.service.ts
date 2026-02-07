import { Resume, ResumeTone } from '../interfaces/resumes.interface';

export function createResumePrompt(
  formData: Resume,
  tone: ResumeTone,
  format: 'html' | 'json' = 'json',
): string {
  let basePrompt = `You are a professional resume writer.
Create a complete resume in strict ${format.toUpperCase()} format.
Use a ${tone} tone for the resume.
IMPORTANT: Do not invent information. 
Use only the information provided in the input. 
If a field is missing, leave it empty or use "Unknown". 
Do not hallucinate companies, dates, skills, projects, or certifications.

Create a complete resume in JSON format matching this interface:

{
  "personalInfo": { "fullName": string, "title": string },
  "summary": string,
  "experience": [ { "company": string, "role": string, "startDate": string, "endDate"?: string, "description": string[] } ],
  "education"?: [ { "school": string, "degree": string, "startDate": string, "endDate": string, "description"?: string[] } ],
  "skills"?: string[],
  "projects"?: [ { "name": string, "description": string, "link"?: string } ],
  "certifications"?: string[],
  "contact"?: { "email"?: string, "phone"?: string, "linkedin"?: string, "github"?: string },
  "tone": "modern" | "minimal" | "creative"
}

Resume input:`;

  // Add form data
  basePrompt += `
Full Name: ${formData.personalInfo.fullName}
Job Title: ${formData.personalInfo.jobTitle}
Email: ${formData.contact?.email || 'Unknown'}`;

  if (formData.experience) basePrompt += `\nExperience: ${formData.experience}`;
  if (formData.skills) basePrompt += `\nSkills: ${formData.skills}`;
  if (formData.education) basePrompt += `\nEducation: ${formData.education}`;
  if (formData.projects) basePrompt += `\nProjects: ${formData.projects}`;
  if (formData.certifications) basePrompt += `\nCertifications: ${formData.certifications}`;
  if (formData.contact) basePrompt += `\nContact: ${formData.contact}`;

  if (format === 'html') {
    basePrompt += `
Format the resume as professional HTML with proper sections (header, summary, experience, skills, etc.).
Use inline CSS for styling. The HTML should be ready to export.`;
  } else {
    basePrompt += `
Return only valid JSON matching the Resume interface.
Include all required fields, even if some are empty.`;
  }

  return basePrompt;
}
