import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Resume, ResumeTemplateId } from '../../../../../core/interfaces/resumes.interface';
import { ResumesFacade } from '../../data/resumes.facade';

@Component({
  selector: 'app-resume-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './resume-card.html',
  styleUrl: './resume-card.scss',
})
export class ResumeCard {
  @Input() resume!: Resume;
  private resumesFacade = inject(ResumesFacade);

  private readonly templateLabels: Record<ResumeTemplateId, string> = {
    basic: 'Basic',
    'ats-simple': 'ATS Simple',
    'classic-one-column': 'Classic',
    'pro-modern': 'Pro Modern',
    cascade: 'Cascade',
    'cubic-pro': 'Cubic Pro',
    'tech-savvy': 'Tech Savvy',
    'modern-executive': 'Modern Executive',
    'premium-executive': 'Premium Executive',
    'executive-edge': 'Executive Edge',
    'graphical-genius': 'Graphical Genius',
    'elite-senior': 'Elite Senior',
    'metamorphic-masterpiece': 'Metamorphic',
  };

  get displayName() {
    return this.resume.personalInfo.fullName || 'Untitled resume';
  }

  get sourceLabel() {
    return this.resume.meta.source === 'ai' ? 'AI created' : 'Manual';
  }

  get templateLabel() {
    return this.resume.templateId ? this.templateLabels[this.resume.templateId] : null;
  }

  get hasTailoring() {
    return Boolean(this.resume.meta.tailoring);
  }

  deleteResume() {
    this.resumesFacade.deleteResume(this.resume.id ? this.resume.id : '');
  }
}
