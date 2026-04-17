import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Resume } from '../../../../../core/interfaces/resumes.interface';
import {
  ResumeRenderContext,
  ResumeTemplateOption,
} from '../../data/resume-template-catalog';
import { buildLatexPreviewSource } from '../../data/resume-latex-preview';

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
    return this.latexSource.split('\n').slice(0, this.renderContext === 'picker' ? 12 : undefined);
  }

  get isHarshibarTemplate() {
    return this.template.id === 'overleaf-compact';
  }

  get isJakeTemplate() {
    return this.template.id === 'overleaf-jake';
  }

  get headingName() {
    return this.resume?.personalInfo?.fullName || 'Your Name';
  }

  get headingTitle() {
    return this.resume?.personalInfo?.jobTitle || 'Professional Title';
  }

  get harshibarContacts() {
    const contact = this.resume?.contact;

    return [
      contact?.phone ? { icon: '✆', value: contact.phone } : null,
      contact?.email ? { icon: '✉', value: contact.email } : null,
      contact?.linkedin ? { icon: 'in', value: contact.linkedin } : null,
      contact?.github ? { icon: 'gh', value: contact.github } : null,
      contact?.website ? { icon: '↗', value: contact.website } : null,
      contact?.location ? { icon: '⌂', value: contact.location } : null,
    ].filter((entry): entry is { icon: string; value: string } => Boolean(entry));
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

  get primarySkills() {
    return this.resume?.skills ?? [];
  }

  get languageSkills() {
    return this.resume?.skillGroups?.languages ?? [];
  }

  get toolSkills() {
    return this.resume?.skillGroups?.tools ?? [];
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
}
