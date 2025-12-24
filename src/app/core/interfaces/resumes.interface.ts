export interface Resume {
  id: string;

  userId: string;

  fullName: string;
  jobTitle: string;
  email: string;

  skills: string[];

  tone: ResumeTone;

  generatedContent: ResumeGeneratedContent;

  createdAt: string;
  updatedAt: string;
}

export type ResumeTone = 'modern' | 'minimal' | 'creative';

export interface ResumeGeneratedContent {
  summary: string;
  experience: string[];
}
