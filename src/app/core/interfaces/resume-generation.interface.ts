import { ContactInfo, EducationEntry, ExperienceEntry, PersonalInfo, ResumeMeta } from './resumes.interface';

export type ResumeGenerationMode = 'full' | 'summary' | 'experience' | 'education';

export interface ResumeGenerationDraft {
  personalInfo?: Partial<PersonalInfo>;
  contact?: Partial<ContactInfo> & { location?: string };
  summary?: string;
  skills?: string[];
  experience?: Array<Partial<ExperienceEntry>>;
  education?: Array<Partial<EducationEntry>>;
  meta?: Partial<ResumeMeta>;
}

export interface ResumeGenerationRequest {
  mode: ResumeGenerationMode;
  resume: ResumeGenerationDraft;
  targetIndex?: number;
}

export type ResumeGenerationResult =
  | {
      mode: 'full';
      summary: string;
      skills: string[];
      experienceDescriptions: string[][];
      educationDescriptions: string[][];
      meta: Partial<ResumeMeta>;
    }
  | {
      mode: 'summary';
      summary: string;
    }
  | {
      mode: 'experience';
      targetIndex: number;
      description: string[];
    }
  | {
      mode: 'education';
      targetIndex: number;
      description: string[];
    };
