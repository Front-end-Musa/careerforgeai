import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  selector: 'app-premium-resume-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './premium-resume-renderer.html',
  styleUrl: './premium-resume-renderer.scss',
})
export class PremiumResumeRenderer {
  @Input({ required: true }) resume?: Partial<Resume>;
  @Input({ required: true }) template!: ResumeTemplateOption;
  @Input() renderContext: ResumeRenderContext = 'editor';

  readonly hasDescription = hasDescription;
  readonly joinValues = joinValues;
  readonly formatDateRange = formatDateRange;

  get visibleSections() {
    return getVisibleSections(this.resume);
  }

  get contactItems() {
    return getContactItems(this.resume);
  }

  get experienceEntries() {
    return getExperienceEntries(this.resume);
  }

  get educationEntries() {
    return getEducationEntries(this.resume);
  }

  get skillEntries() {
    return getSkillEntries(this.resume);
  }

  get skillColumns() {
    const columns: string[][] = [[], [], []];
    this.skillEntries.forEach((skill, index) => {
      columns[index % columns.length].push(skill);
    });

    return columns.filter((column) => column.length);
  }

  getSections(sectionTypes: string[]) {
    return this.visibleSections.filter((section) => sectionTypes.includes(section.type));
  }

  getSectionsExcluding(sectionTypes: string[]) {
    return this.visibleSections.filter((section) => !sectionTypes.includes(section.type));
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
