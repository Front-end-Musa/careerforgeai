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
  selector: 'app-premium-resume-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './premium-resume-renderer.html',
  styleUrl: './premium-resume-renderer.scss',
})
export class PremiumResumeRenderer implements OnChanges {
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
  skillColumns: string[][] = [];
  centeredSections: ResumeSection[] = [];
  premiumMainSections: ResumeSection[] = [];
  premiumSideSections: ResumeSection[] = [];

  ngOnChanges() {
    this.visibleSections = getVisibleSections(this.resume);
    this.contactItems = getContactItems(this.resume);
    this.experienceEntries = getExperienceEntries(this.resume);
    this.educationEntries = getEducationEntries(this.resume);
    this.skillEntries = getSkillEntries(this.resume);
    this.skillColumns = this.buildSkillColumns();
    this.centeredSections = this.visibleSections.filter(
      (section) => !['summary', 'skills'].includes(section.type),
    );
    this.premiumMainSections = this.visibleSections.filter(
      (section) => !['summary', 'skills', 'languages', 'certifications'].includes(section.type),
    );
    this.premiumSideSections = this.visibleSections.filter((section) =>
      ['languages', 'certifications'].includes(section.type),
    );
  }

  private buildSkillColumns() {
    const columns: string[][] = [[], [], []];
    this.skillEntries.forEach((skill, index) => {
      columns[index % columns.length].push(skill);
    });

    return columns.filter((column) => column.length);
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
