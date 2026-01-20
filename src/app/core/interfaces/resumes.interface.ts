// ===== Stored Resume (DB-friendly) =====
export interface Resume {
  id: string;
  userId: string;

  personalInfo: PersonalInfo;
  summary: string;
  experience: ExperienceEntry[];
  education?: EducationEntry[];
  skills?: string[];
  projects?: ProjectEntry[];
  certifications?: string[];
  contact?: ContactInfo;

  tone: ResumeTone;

  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}

// Personal information
export interface PersonalInfo {
  fullName: string;
  title: string;
}

// Work experience
export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string; // YYYY-MM
  endDate?: string; // optional if currently employed
  description: string[];
}

// Education
export interface EducationEntry {
  school: string;
  degree: string;
  startDate: string; // YYYY-MM
  endDate: string;
  description?: string[];
}

// Projects
export interface ProjectEntry {
  name: string;
  description: string;
  link?: string;
}

// Contact
export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

// Resume template tone
export type ResumeTone = 'modern' | 'minimal' | 'creative';

// ===== AI-Generated Resume Content =====
// Simple structure AI can fill easily
export interface ResumeGeneratedContent {
  personalInfo?: PersonalInfo; // optional if AI generates it
  summary?: string; // optional if AI cannot generate
  experience?: string[]; // raw experience strings
  education?: EducationEntry[];
  skills?: string[];
  projects?: ProjectEntry[];
  certifications?: string[];
  contact?: ContactInfo;
}
