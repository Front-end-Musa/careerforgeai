import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Resume, ResumeSection } from '../../../../../core/interfaces/resumes.interface';
import { ResumeTemplateOption, ResumeRenderContext } from '../../data/resume-template-catalog';
import {
  formatDateRange,
  getAwardEntries,
  getCertificationEntries,
  getContactItems,
  getCustomEntries,
  getEducationEntries,
  getExperienceEntries,
  getItemSubtitle,
  getLanguageEntries,
  getProjectEntries,
  getSkillEntries,
  getVisibleSections,
  getVolunteerEntries,
  hasDescription,
  joinValues,
} from '../resume-preview-content';

@Component({
  selector: 'app-classic-resume-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classic-resume-renderer.html',
  styleUrl: './classic-resume-renderer.scss',
})
export class ClassicResumeRenderer {
  @Input({ required: true }) resume?: Partial<Resume>;
  @Input({ required: true }) template!: ResumeTemplateOption;
  @Input() renderContext: ResumeRenderContext = 'editor';

  readonly hasDescription = hasDescription;
  readonly joinValues = joinValues;
  readonly getItemSubtitle = getItemSubtitle;
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

  getVisibleSidebarSections() {
    return this.visibleSections.filter((section) => ['skills', 'languages', 'certifications'].includes(section.type));
  }

  getVisibleMainSections() {
    return this.visibleSections.filter((section) => !['skills', 'languages', 'certifications'].includes(section.type));
  }

  getSimpleOutlineSections() {
    const priority = ['summary', 'education', 'experience', 'awards', 'skills'];

    return [...this.visibleSections].sort((first, second) => {
      const firstIndex = priority.indexOf(first.type);
      const secondIndex = priority.indexOf(second.type);

      if (firstIndex === -1 && secondIndex === -1) {
        return 0;
      }
      if (firstIndex === -1) {
        return 1;
      }
      if (secondIndex === -1) {
        return -1;
      }

      return firstIndex - secondIndex;
    });
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

  isBasic() {
    return this.template.id === 'basic';
  }

  isAtsSimple() {
    return this.template.id === 'ats-simple';
  }

  isClassicOneColumn() {
    return this.template.id === 'classic-one-column';
  }
}
