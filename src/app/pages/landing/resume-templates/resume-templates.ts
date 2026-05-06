import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RESUME_PREVIEW_DEMO } from '../../application/resumes/data/resume-preview-demo';
import {
  RESUME_TEMPLATES,
  ResumeTemplateOption,
} from '../../application/resumes/data/resume-template-catalog';
import { ResumePreview } from '../../application/resumes/resume-preview/resume-preview';

type TemplateFilter = 'All' | 'Free' | 'Pro' | 'Premium';

@Component({
  selector: 'app-resume-templates',
  imports: [CommonModule, ResumePreview],
  templateUrl: './resume-templates.html',
  styleUrl: './resume-templates.scss',
})
export class ResumeTemplates {
  readonly filters: TemplateFilter[] = ['All', 'Free', 'Pro', 'Premium'];
  activeFilter: TemplateFilter = 'All';

  readonly templates = RESUME_TEMPLATES.map((template) => ({
    ...template,
    tierLabel: this.toTierLabel(template.requiredPlan),
  }));
  readonly demoResume = RESUME_PREVIEW_DEMO;

  get visibleTemplates() {
    if (this.activeFilter === 'All') {
      return this.templates;
    }

    return this.templates.filter((template) => template.tierLabel === this.activeFilter);
  }

  setFilter(filter: TemplateFilter): void {
    this.activeFilter = filter;
  }

  getPreviewStyle(template: ResumeTemplateOption) {
    return {
      '--preview-scale': template.preview.landingScale.toString(),
      '--preview-width': `${template.preview.landingWidthPercent}%`,
    };
  }

  private toTierLabel(plan: string): Exclude<TemplateFilter, 'All'> {
    if (plan === 'premium') {
      return 'Premium';
    }

    if (plan === 'pro') {
      return 'Pro';
    }

    return 'Free';
  }
}
