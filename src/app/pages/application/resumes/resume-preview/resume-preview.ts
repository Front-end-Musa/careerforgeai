import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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
  ResumeTemplateId,
  VolunteerSectionEntry,
} from '../../../../core/interfaces/resumes.interface';
import { normalizeResumeSections } from '../../../../core/utils/resume-sections.util';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './resume-preview.html',
  styleUrl: './resume-preview.scss',
})
export class ResumePreview {
  @Input() resume?: Partial<Resume>;
  @Input() templateId: ResumeTemplateId = 'basic';

  get layoutType(): 'classic' | 'modern' | 'minimal' {
    const mapping: Record<ResumeTemplateId, 'classic' | 'modern' | 'minimal'> = {
      'basic': 'classic',
      'ats-simple': 'classic',
      'classic-one-column': 'classic',
      'pro-modern': 'modern',
      'cascade': 'modern',
      'cubic-pro': 'modern',
      'tech-savvy': 'modern',
      'modern-executive': 'modern',
      'premium-executive': 'minimal',
      'executive-edge': 'minimal',
      'graphical-genius': 'minimal',
      'elite-senior': 'minimal',
      'metamorphic-masterpiece': 'minimal',
    };
    return mapping[this.templateId] ?? 'classic';
  }

  get visibleSections() {
    return normalizeResumeSections(this.resume ?? {}).filter((section) => {
      if (!section.enabled) {
        return false;
      }

      if (section.type === 'summary') {
        return Boolean(this.resume?.summary?.trim());
      }
      if (section.type === 'experience') {
        return Boolean(this.resume?.experience?.length);
      }
      if (section.type === 'education') {
        return Boolean(this.resume?.education?.length);
      }
      if (section.type === 'skills') {
        return Boolean(this.resume?.skills?.length);
      }
      if ('entries' in section) {
        return section.entries.length > 0;
      }

      return true;
    });
  }

  get contactItems() {
    return [
      this.resume?.contact?.email,
      this.resume?.contact?.phone,
      this.resume?.contact?.location,
      this.resume?.contact?.linkedin,
      this.resume?.contact?.github,
      this.resume?.contact?.website,
    ].filter((value): value is string => Boolean(value?.trim()));
  }

  getExperienceEntries() {
    return this.resume?.experience ?? [];
  }

  getEducationEntries() {
    return this.resume?.education ?? [];
  }

  getSkillEntries() {
    return this.resume?.skills ?? [];
  }

  getProjectEntries(section: ResumeSection) {
    return 'entries' in section ? (section.entries as ProjectSectionEntry[]) : [];
  }

  getCertificationEntries(section: ResumeSection) {
    return 'entries' in section ? (section.entries as CertificationSectionEntry[]) : [];
  }

  getLanguageEntries(section: ResumeSection) {
    return 'entries' in section ? (section.entries as LanguageSectionEntry[]) : [];
  }

  getAwardEntries(section: ResumeSection) {
    return 'entries' in section ? (section.entries as AwardSectionEntry[]) : [];
  }

  getVolunteerEntries(section: ResumeSection) {
    return 'entries' in section ? (section.entries as VolunteerSectionEntry[]) : [];
  }

  getCustomEntries(section: ResumeSection) {
    return 'entries' in section ? (section.entries as CustomSectionEntry[]) : [];
  }

  hasDescription(description?: string[]) {
    return Boolean(description?.length);
  }

  joinValues(values: Array<string | undefined>, separator = ' | ') {
    return values.filter((value): value is string => Boolean(value?.trim())).join(separator);
  }

  getItemSubtitle(entry: ExperienceEntry | EducationEntry | VolunteerSectionEntry | CustomSectionEntry) {
    if ('company' in entry) {
      return this.joinValues([entry.company, this.formatDateRange(entry.startDate, entry.endDate)]);
    }
    if ('school' in entry) {
      return this.joinValues([entry.school, this.formatDateRange(entry.startDate, entry.endDate)]);
    }
    if ('organization' in entry) {
      return this.joinValues([entry.organization, this.formatDateRange(entry.startDate, entry.endDate)]);
    }

    return this.joinValues([entry.subtitle, entry.date]);
  }

  formatDateRange(startDate?: string, endDate?: string) {
    return this.joinValues([startDate, endDate], ' - ');
  }

  hasSectionTitle(section: ResumeSection) {
    return section.type !== 'summary' || this.layoutType !== 'minimal';
  }
}
