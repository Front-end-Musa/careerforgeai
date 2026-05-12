import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { Resume, ResumeSection } from '../../../../../core/interfaces/resumes.interface';
import { ResumeRenderContext, ResumeTemplateOption } from '../../data/resume-template-catalog';
import {
  formatDateRange,
  getAwardEntries,
  getCertificationEntries,
  getContactItems,
  getCustomEntries,
  getEducationEntries,
  getExperienceEntries,
  getLanguageEntries,
  getProjectEntries,
  getSkillEntries,
  getVisibleSections,
  getVolunteerEntries,
  hasDescription,
  joinValues,
} from '../resume-preview-content';

@Component({
  selector: 'app-modern-resume-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modern-resume-renderer.html',
  styleUrl: './modern-resume-renderer.scss',
})
export class ModernResumeRenderer implements OnChanges {
  @Input({ required: true }) resume?: Partial<Resume>;
  @Input({ required: true }) template!: ResumeTemplateOption;
  @Input() renderContext: ResumeRenderContext = 'editor';

  readonly hasDescription = hasDescription;
  readonly joinValues = joinValues;
  readonly formatDateRange = formatDateRange;

  visibleSections: ResumeSection[] = [];
  contactItems: string[] = [];
  experienceEntries = getExperienceEntries();
  educationEntries = getEducationEntries();
  skillEntries = getSkillEntries();
  normalizedSummary = '';
  mainSections: ResumeSection[] = [];
  sidebarSections: ResumeSection[] = [];

  ngOnChanges() {
    this.visibleSections = getVisibleSections(this.resume);
    this.contactItems = getContactItems(this.resume);
    this.experienceEntries = getExperienceEntries(this.resume);
    this.educationEntries = getEducationEntries(this.resume);
    this.skillEntries = getSkillEntries(this.resume);
    this.normalizedSummary = (this.resume?.summary ?? '')
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    this.mainSections = this.visibleSections.filter(
      (section) => !['personal', 'summary', 'skills', 'languages', 'certifications'].includes(section.type),
    );
    this.sidebarSections = this.visibleSections.filter((section) =>
      ['languages', 'certifications'].includes(section.type),
    );
  }

  getProjectEntries(section: ResumeSection) {
    return getProjectEntries(section);
  }

  getCertificationEntries(section: ResumeSection) {
    return getCertificationEntries(section);
  }

  getLanguageEntries(section: ResumeSection) {
    return getLanguageEntries(section);
  }

  getAwardEntries(section: ResumeSection) {
    return getAwardEntries(section);
  }

  getVolunteerEntries(section: ResumeSection) {
    return getVolunteerEntries(section);
  }

  getCustomEntries(section: ResumeSection) {
    return getCustomEntries(section);
  }
}
