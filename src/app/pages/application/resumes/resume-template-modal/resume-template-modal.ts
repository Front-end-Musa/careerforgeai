import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';
import { AppUser } from '../../../../core/interfaces/user.interface';
import { ResumeAccessPolicyService } from '../../../../core/services/resume-access-policy.service';
import { RESUME_PREVIEW_DEMO } from '../data/resume-preview-demo';
import {
  RESUME_TEMPLATES,
  getTemplateById,
  type PlanTier,
  type ResumeTemplateOption,
} from '../data/resume-template-catalog';
import { ResumePreview } from '../resume-preview/resume-preview';

@Component({
  selector: 'app-resume-template-modal',
  standalone: true,
  imports: [CommonModule, ResumePreview],
  templateUrl: './resume-template-modal.html',
  styleUrl: './resume-template-modal.scss',
})
export class ResumeTemplateModal {
  private resumeAccessPolicy = new ResumeAccessPolicyService();

  @Input() plan: PlanTier = 'free';
  @Input() user: AppUser | null = null;
  @Input() resumeCount = 0;
  @Input() selectedTemplateId: ResumeTemplateId | null = null;
  @Output() templateSelected = new EventEmitter<ResumeTemplateId>();
  @Output() upgradeRequested = new EventEmitter<ResumeTemplateId>();
  @Output() closed = new EventEmitter<void>();

  isOpen = false;
  upsellMessage = '';

  templates = [...RESUME_TEMPLATES];
  planSections: Array<{ plan: PlanTier; title: string; description: string }> = [
    {
      plan: 'free',
      title: 'Free Templates',
      description: 'Clean starter layouts available to every account.',
    },
    {
      plan: 'pro',
      title: 'Pro Templates',
      description: 'Sharper layouts for paid plans with stronger visual hierarchy.',
    },
    {
      plan: 'premium',
      title: 'Premium Templates',
      description: 'Executive layouts with the most polished presentation.',
    },
  ];

  demoResume = RESUME_PREVIEW_DEMO;

  openModal() {
    this.isOpen = true;
    this.upsellMessage = '';
  }

  closeModal() {
    this.isOpen = false;
    this.upsellMessage = '';
    this.closed.emit();
  }

  selectTemplate(templateId: ResumeTemplateId) {
    if (this.isLocked(templateId)) {
      this.showUpsell(templateId);
      this.upgradeRequested.emit(templateId);
      return;
    }

    this.selectedTemplateId = templateId;
    this.templateSelected.emit(templateId);
    this.closeModal();
  }

  isLocked(templateId: ResumeTemplateId) {
    return !this.resumeAccessPolicy.canUseTemplate(this.user, this.resumeCount, templateId);
  }

  requiredPlanLabel(templateId: ResumeTemplateId) {
    return getTemplateById(templateId).requiredPlan;
  }

  getTemplatesByPlan(plan: PlanTier) {
    return this.templates.filter((template) => template.requiredPlan === plan);
  }

  getPreviewStyle(template: ResumeTemplateOption) {
    return {
      '--preview-scale': template.preview.pickerScale.toString(),
      '--preview-width': `${template.preview.pickerWidthPercent}%`,
    };
  }

  private showUpsell(templateId: ResumeTemplateId) {
    if (!this.resumeAccessPolicy.canCreateResume(this.user, this.resumeCount)) {
      this.upsellMessage = 'Your free plan includes one saved resume. Upgrade to create another.';
      return;
    }

    this.upsellMessage = this.resumeAccessPolicy.upgradeMessage('template_lock', templateId);
  }
}
