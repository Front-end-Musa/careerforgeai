import {
  AwardSectionEntry,
  CertificationSectionEntry,
  CustomResumeSection,
  LanguageSectionEntry,
  ProjectSectionEntry,
  Resume,
  ResumeSection,
  ResumeSectionType,
  VolunteerSectionEntry,
} from '../interfaces/resumes.interface';

export const CORE_RESUME_SECTION_TYPES: ResumeSectionType[] = [
  'personal',
  'summary',
  'experience',
  'education',
  'skills',
];

export const OPTIONAL_RESUME_SECTION_TYPES: ResumeSectionType[] = [
  'projects',
  'certifications',
  'languages',
  'awards',
  'volunteer',
  'custom',
];

export const PRESET_RESUME_SECTION_TYPES: ResumeSectionType[] = OPTIONAL_RESUME_SECTION_TYPES.filter(
  (type) => type !== 'custom',
);

export const RESUME_SECTION_LABELS: Record<ResumeSectionType, string> = {
  personal: 'Personal Information',
  summary: 'Summary',
  experience: 'Work Experience',
  education: 'Education',
  skills: 'Skills',
  projects: 'Projects',
  certifications: 'Certifications',
  languages: 'Languages',
  awards: 'Awards',
  volunteer: 'Volunteer Experience',
  custom: 'Custom Section',
};

export function createSectionId(type: ResumeSectionType | 'entry') {
  const randomPart = Math.random().toString(36).slice(2, 8);
  const timePart = Date.now().toString(36).slice(-6);
  return `${type}-${timePart}${randomPart}`;
}

export function createLegacyResumeSections(resume: Partial<Resume>): ResumeSection[] {
  const sections: ResumeSection[] = CORE_RESUME_SECTION_TYPES.map((type) => ({
    id: createSectionId(type),
    type,
    title: RESUME_SECTION_LABELS[type],
    enabled: true,
  })) as ResumeSection[];

  const projects = (resume.projects ?? []).filter((entry) => hasProjectContent(entry));
  if (projects.length) {
    sections.push({
      id: createSectionId('projects'),
      type: 'projects',
      title: RESUME_SECTION_LABELS['projects'],
      enabled: true,
      entries: projects.map((entry) => ({
        name: entry.name ?? '',
        role: entry.role ?? '',
        link: entry.link ?? '',
        description: normalizeStringArray(entry.description),
      })),
    });
  }

  const certifications = (resume.certifications ?? []).filter((entry) =>
    Boolean(entry.name?.trim() || entry.issuer?.trim() || entry.issueDate?.trim()),
  );
  if (certifications.length) {
    sections.push({
      id: createSectionId('certifications'),
      type: 'certifications',
      title: RESUME_SECTION_LABELS['certifications'],
      enabled: true,
      entries: certifications.map((entry) => ({
        name: entry.name ?? '',
        issuer: entry.issuer ?? '',
        issueDate: entry.issueDate ?? '',
        credentialLink: entry.credentialLink ?? '',
      })),
    });
  }

  const languages = (resume.languages ?? []).filter((entry) => hasLanguageContent(entry));
  if (languages.length) {
    sections.push({
      id: createSectionId('languages'),
      type: 'languages',
      title: RESUME_SECTION_LABELS['languages'],
      enabled: true,
      entries: languages.map((entry) => ({
        language: entry.language ?? '',
        proficiency: entry.proficiency ?? '',
      })),
    });
  }

  const awards = (resume.awards ?? []).filter((entry) => hasAwardContent(entry));
  if (awards.length) {
    sections.push({
      id: createSectionId('awards'),
      type: 'awards',
      title: RESUME_SECTION_LABELS['awards'],
      enabled: true,
      entries: awards.map((entry) => ({
        title: entry.title ?? '',
        issuer: entry.issuer ?? '',
        date: entry.date ?? '',
        description: normalizeOptionalStringArray(entry.description),
      })),
    });
  }

  const volunteerExperience = (resume.volunteerExperience ?? []).filter((entry) =>
    hasVolunteerContent(entry),
  );
  if (volunteerExperience.length) {
    sections.push({
      id: createSectionId('volunteer'),
      type: 'volunteer',
      title: RESUME_SECTION_LABELS['volunteer'],
      enabled: true,
      entries: volunteerExperience.map((entry) => ({
        organization: entry.organization ?? '',
        role: entry.role ?? '',
        startDate: entry.startDate ?? '',
        endDate: entry.endDate ?? '',
        description: normalizeStringArray(entry.description),
      })),
    });
  }

  return sections;
}

export function normalizeResumeSections(resume: Partial<Resume>): ResumeSection[] {
  const sections = resume.sections?.length ? resume.sections : createLegacyResumeSections(resume);

  return sections.map((section) => {
    const title = section.title?.trim() || RESUME_SECTION_LABELS[section.type];
    const enabled = section.enabled !== false;

    if (section.type === 'custom') {
      return {
        ...section,
        title,
        enabled,
        entries: section.entries.map((entry) => ({
          title: entry.title ?? '',
          subtitle: entry.subtitle ?? '',
          date: entry.date ?? '',
          description: normalizeOptionalStringArray(entry.description),
          link: entry.link ?? '',
        })),
      } as CustomResumeSection;
    }

    if ('entries' in section) {
      return {
        ...section,
        title,
        enabled,
        entries: section.entries,
      } as ResumeSection;
    }

    return {
      ...section,
      title,
      enabled,
    } as ResumeSection;
  });
}

function hasProjectContent(
  entry: Partial<ProjectSectionEntry> | { name?: string; role?: string; link?: string; description?: string },
) {
  return Boolean(entry.name?.trim() || entry.role?.trim() || entry.link?.trim() || entry.description);
}

function hasLanguageContent(entry: Partial<LanguageSectionEntry>) {
  return Boolean(entry.language?.trim() || entry.proficiency?.trim());
}

function hasAwardContent(entry: Partial<AwardSectionEntry>) {
  return Boolean(entry.title?.trim() || entry.issuer?.trim() || entry.date?.trim() || entry.description?.length);
}

function hasVolunteerContent(entry: Partial<VolunteerSectionEntry>) {
  return Boolean(
    entry.organization?.trim() ||
      entry.role?.trim() ||
      entry.startDate?.trim() ||
      entry.endDate?.trim() ||
      entry.description?.length,
  );
}

function normalizeStringArray(input?: string[] | string) {
  if (Array.isArray(input)) {
    return input.map((entry) => entry.trim()).filter(Boolean);
  }

  return input
    ? input
        .split(/\n+|\u2022\s*|-+\s*/)
        .map((entry) => entry.trim())
        .filter(Boolean)
    : [];
}

function normalizeOptionalStringArray(input?: string[] | string) {
  const normalized = normalizeStringArray(input);
  return normalized.length ? normalized : undefined;
}
