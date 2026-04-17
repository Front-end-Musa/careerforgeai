export type ResumeTemplateId =
  | 'basic'
  | 'ats-simple'
  | 'classic-one-column'
  | 'overleaf-compact'
  | 'overleaf-jake'
  | 'overleaf-academic'
  | 'overleaf-executive'
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
  skillGroups?: SkillGroups;

  projects?: ProjectEntry[];
  certifications?: CertificationSectionEntry[];
  languages?: LanguageSectionEntry[];
  awards?: AwardSectionEntry[];
  volunteerExperience?: VolunteerSectionEntry[];
  sections?: ResumeSection[];

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
  role?: string;
  description: string;
  link?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface SkillGroups {
  languages?: string[];
  tools?: string[];
}

export type ResumeSectionType =
  | 'personal'
  | 'summary'
  | 'experience'
  | 'education'
  | 'skills'
  | 'projects'
  | 'certifications'
  | 'languages'
  | 'awards'
  | 'volunteer'
  | 'custom';

export interface ResumeSectionBase {
  id: string;
  type: ResumeSectionType;
  title: string;
  enabled: boolean;
}

export interface PersonalResumeSection extends ResumeSectionBase {
  type: 'personal';
}

export interface SummaryResumeSection extends ResumeSectionBase {
  type: 'summary';
}

export interface ExperienceResumeSection extends ResumeSectionBase {
  type: 'experience';
}

export interface EducationResumeSection extends ResumeSectionBase {
  type: 'education';
}

export interface SkillsResumeSection extends ResumeSectionBase {
  type: 'skills';
}

export interface ProjectSectionEntry {
  name: string;
  role?: string;
  link?: string;
  description: string[];
}

export interface ProjectsResumeSection extends ResumeSectionBase {
  type: 'projects';
  entries: ProjectSectionEntry[];
}

export interface CertificationSectionEntry {
  name: string;
  issuer?: string;
  issueDate?: string;
  credentialLink?: string;
}

export interface CertificationsResumeSection extends ResumeSectionBase {
  type: 'certifications';
  entries: CertificationSectionEntry[];
}

export interface LanguageSectionEntry {
  language: string;
  proficiency?: string;
}

export interface LanguagesResumeSection extends ResumeSectionBase {
  type: 'languages';
  entries: LanguageSectionEntry[];
}

export interface AwardSectionEntry {
  title: string;
  issuer?: string;
  date?: string;
  description?: string[];
}

export interface AwardsResumeSection extends ResumeSectionBase {
  type: 'awards';
  entries: AwardSectionEntry[];
}

export interface VolunteerSectionEntry {
  organization: string;
  role?: string;
  startDate?: string;
  endDate?: string;
  description: string[];
}

export interface VolunteerResumeSection extends ResumeSectionBase {
  type: 'volunteer';
  entries: VolunteerSectionEntry[];
}

export interface CustomSectionEntry {
  title: string;
  subtitle?: string;
  date?: string;
  description?: string[];
  link?: string;
}

export interface CustomResumeSection extends ResumeSectionBase {
  type: 'custom';
  entries: CustomSectionEntry[];
}

export type ResumeSection =
  | PersonalResumeSection
  | SummaryResumeSection
  | ExperienceResumeSection
  | EducationResumeSection
  | SkillsResumeSection
  | ProjectsResumeSection
  | CertificationsResumeSection
  | LanguagesResumeSection
  | AwardsResumeSection
  | VolunteerResumeSection
  | CustomResumeSection;

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




