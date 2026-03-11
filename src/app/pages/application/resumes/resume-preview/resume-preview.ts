import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Resume, ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';

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
}
