import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Resume } from '../../../../../core/interfaces/resumes.interface';
import {
  ResumeRenderContext,
  ResumeTemplateOption,
} from '../../data/resume-template-catalog';
import { buildLatexPreviewSource } from '../../data/resume-latex-preview';

type ContactChip = {
  icon: string;
  value: string;
};

@Component({
  selector: 'app-latex-resume-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latex-resume-renderer.html',
  styleUrl: './latex-resume-renderer.scss',
})
export class LatexResumeRenderer {
  @Input() resume?: Partial<Resume>;
  @Input({ required: true }) template!: ResumeTemplateOption;
  @Input() renderContext: ResumeRenderContext = 'editor';

  get latexSource() {
    return buildLatexPreviewSource(this.template.id, this.resume);
  }

  get sourceLines() {
    return this.latexSource.split('\n').slice(0, this.renderContext === 'picker' ? 14 : undefined);
  }

  get isHarshibarTemplate() {
    return this.template.id === 'overleaf-compact';
  }

  get isJakeTemplate() {
    return this.template.id === 'overleaf-jake';
  }

  get isAcademicTemplate() {
    return this.template.id === 'overleaf-academic';
  }

  get isExecutiveTemplate() {
    return this.template.id === 'overleaf-executive';
  }

  get headingName() {
    return this.resume?.personalInfo?.fullName || 'Your Name';
  }

  get headingTitle() {
    return this.resume?.personalInfo?.jobTitle || 'Professional Title';
  }

  get summary() {
    return this.resume?.summary?.trim() || '';
  }

  get contactChips() {
    const contact = this.resume?.contact;

    return [
      contact?.phone ? { icon: 'tel', value: contact.phone } : null,
      contact?.email ? { icon: '@', value: contact.email } : null,
      contact?.linkedin ? { icon: 'in', value: contact.linkedin } : null,
      contact?.github ? { icon: 'gh', value: contact.github } : null,
      contact?.website ? { icon: 'web', value: contact.website } : null,
      contact?.location ? { icon: 'loc', value: contact.location } : null,
    ].filter((entry): entry is ContactChip => Boolean(entry));
  }

  get experienceEntries() {
    return this.resume?.experience ?? [];
  }

  get projectEntries() {
    return this.resume?.projects ?? [];
  }

  get educationEntries() {
    return this.resume?.education ?? [];
  }

  get certificationEntries() {
    return this.resume?.certifications ?? [];
  }

  get primarySkills() {
    return this.resume?.skills ?? [];
  }

  get certificationNames() {
    return this.certificationEntries.map((entry) => entry.name).filter(Boolean);
  }

  get languageSkills() {
    return this.resume?.skillGroups?.languages ?? [];
  }

  get toolSkills() {
    return this.resume?.skillGroups?.tools ?? [];
  }

  get executiveHighlights() {
    const bullets = this.experienceEntries
      .flatMap((entry) => entry.description ?? [])
      .map((entry) => entry.trim())
      .filter(Boolean);

    return bullets.slice(0, 3);
  }

  formatDateRange(startDate?: string, endDate?: string) {
    if (startDate && endDate) {
      return `${startDate} -- ${endDate}`;
    }

    return startDate || endDate || '';
  }

  hasBullets(description?: string[]) {
    return Boolean(description?.some((entry) => entry?.trim()));
  }

  getProjectBullets(description?: string[] | string) {
    if (Array.isArray(description)) {
      return description;
    }

    if (typeof description === 'string') {
      return description
        .split(/\n+/)
        .map((entry) => entry.trim())
        .filter(Boolean);
    }

    return [];
  }

  splitSkills(skills: string[], groupSize = 4) {
    const rows: string[][] = [];

    for (let index = 0; index < skills.length; index += groupSize) {
      rows.push(skills.slice(index, index + groupSize));
    }

    return rows;
  }
}
