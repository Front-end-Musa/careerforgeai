export interface Resume {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  lastUpdated: string; // ISO date string
  score: number; // 0–100
  experienceYears: number;
  skills: string[];
  sections: ResumeSections;
  ats?: ATSScore;
}

export interface ResumeSections {
  summary: boolean;
  experience: boolean;
  education: boolean;
  projects: boolean;
  certifications: boolean;
}

export interface ATSScore {
  keywordMatch: number; // 0–100
  formatting: number; // 0–100
  readability: number; // 0–100
}
