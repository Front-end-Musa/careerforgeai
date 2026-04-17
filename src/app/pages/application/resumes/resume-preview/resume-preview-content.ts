import {
  AwardSectionEntry,
  CertificationSectionEntry,
  CustomSectionEntry,
  EducationEntry,
  ExperienceEntry,
  LanguageSectionEntry,
  ProjectSectionEntry,
  Resume,
  ResumeSection,
  VolunteerSectionEntry,
} from '../../../../core/interfaces/resumes.interface';
import { normalizeResumeSections } from '../../../../core/utils/resume-sections.util';

export type ResumeEntryWithDescription =
  | ExperienceEntry
  | EducationEntry
  | ProjectSectionEntry
  | AwardSectionEntry
  | VolunteerSectionEntry
  | CustomSectionEntry;

export function getVisibleSections(resume?: Partial<Resume>): ResumeSection[] {
  return normalizeResumeSections(resume ?? {}).filter((section) => {
    if (!section.enabled) {
      return false;
    }

    if (section.type === 'summary') {
      return Boolean(resume?.summary?.trim());
    }
    if (section.type === 'experience') {
      return Boolean(resume?.experience?.length);
    }
    if (section.type === 'education') {
      return Boolean(resume?.education?.length);
    }
    if (section.type === 'skills') {
      return Boolean(resume?.skills?.length);
    }
    if ('entries' in section) {
      return section.entries.length > 0;
    }

    return true;
  });
}

export function getContactItems(resume?: Partial<Resume>): string[] {
  return [
    resume?.contact?.email,
    resume?.contact?.phone,
    resume?.contact?.location,
    resume?.contact?.linkedin,
    resume?.contact?.github,
    resume?.contact?.website,
  ].filter((value): value is string => Boolean(value?.trim()));
}

export function joinValues(values: Array<string | undefined>, separator = ' | ') {
  return values.filter((value): value is string => Boolean(value?.trim())).join(separator);
}

export function formatDateRange(startDate?: string, endDate?: string) {
  return joinValues([startDate, endDate], ' - ');
}

export function getItemSubtitle(
  entry: ExperienceEntry | EducationEntry | VolunteerSectionEntry | CustomSectionEntry,
) {
  if ('company' in entry) {
    return joinValues([entry.company, formatDateRange(entry.startDate, entry.endDate)]);
  }
  if ('school' in entry) {
    return joinValues([entry.school, formatDateRange(entry.startDate, entry.endDate)]);
  }
  if ('organization' in entry) {
    return joinValues([entry.organization, formatDateRange(entry.startDate, entry.endDate)]);
  }

  return joinValues([entry.subtitle, entry.date]);
}

export function hasDescription(description?: string[]) {
  return Boolean(description?.length);
}

export function getExperienceEntries(resume?: Partial<Resume>) {
  return resume?.experience ?? [];
}

export function getEducationEntries(resume?: Partial<Resume>) {
  return resume?.education ?? [];
}

export function getSkillEntries(resume?: Partial<Resume>) {
  return resume?.skills ?? [];
}

export function getProjectEntries(section: ResumeSection) {
  return 'entries' in section ? (section.entries as ProjectSectionEntry[]) : [];
}

export function getCertificationEntries(section: ResumeSection) {
  return 'entries' in section ? (section.entries as CertificationSectionEntry[]) : [];
}

export function getLanguageEntries(section: ResumeSection) {
  return 'entries' in section ? (section.entries as LanguageSectionEntry[]) : [];
}

export function getAwardEntries(section: ResumeSection) {
  return 'entries' in section ? (section.entries as AwardSectionEntry[]) : [];
}

export function getVolunteerEntries(section: ResumeSection) {
  return 'entries' in section ? (section.entries as VolunteerSectionEntry[]) : [];
}

export function getCustomEntries(section: ResumeSection) {
  return 'entries' in section ? (section.entries as CustomSectionEntry[]) : [];
}
