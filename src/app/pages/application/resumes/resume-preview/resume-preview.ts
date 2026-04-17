import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Resume, ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';
import {
  ResumeRenderContext,
  getTemplateById,
} from '../data/resume-template-catalog';
import { ClassicResumeRenderer } from './classic-resume-renderer/classic-resume-renderer';
import { LatexResumeRenderer } from './latex-resume-renderer/latex-resume-renderer';
import { ModernResumeRenderer } from './modern-resume-renderer/modern-resume-renderer';
import { PremiumResumeRenderer } from './premium-resume-renderer/premium-resume-renderer';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [
    CommonModule,
    ClassicResumeRenderer,
    LatexResumeRenderer,
    ModernResumeRenderer,
    PremiumResumeRenderer,
  ],
  templateUrl: './resume-preview.html',
  styleUrl: './resume-preview.scss',
})
export class ResumePreview {
  @Input() resume?: Partial<Resume>;
  @Input() templateId: ResumeTemplateId = 'basic';
  @Input() renderContext: ResumeRenderContext = 'editor';

  get template() {
    return getTemplateById(this.templateId);
  }
}
