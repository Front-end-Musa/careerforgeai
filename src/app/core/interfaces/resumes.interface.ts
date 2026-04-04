export type ResumeTemplateId =
  | 'basic'
  | 'ats-simple'
  | 'classic-one-column'
  | 'pro-modern'
  | 'cascade'
  | 'cubic-pro'
  | 'tech-savvy'
  | 'modern-executive'
  | 'premium-executive'
  | 'executive-edge'
  | 'graphical-genius'
  | 'elite-senior'
  | 'metamorphic-masterpiece';

export interface Resume {
  id?: string; // Firestore doc id (optional in data, known in app)
  userId: string;

  personalInfo: PersonalInfo;
  summary: string;

  createdAt: string;

  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: string[];

  projects?: ProjectEntry[];
  certifications?: string[];

  contact: ContactInfo;

  templateId?: ResumeTemplateId;

  meta: ResumeMeta;
}

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string; // YYYY-MM
  endDate?: string; // YYYY-MM | "Present"
  description: string[]; // bullet points
}

export interface EducationEntry {
  school: string;
  degree: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM
  description?: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  link?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface ResumeMeta {
  createdAt: string; // ISO
  updatedAt: string; // ISO

  source: 'ai' | 'manual'; // how it was created
  version: number; // increment on major changes
  tailoring?: {
    source: 'job-description';
    companyName: string;
    position: string;
    tailoredAt: string;
  };
}

// Resume template tone
export type ResumeTone = 'modern' | 'minimal' | 'creative';




