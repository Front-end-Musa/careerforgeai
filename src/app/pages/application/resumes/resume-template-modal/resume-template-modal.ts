import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume, ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';
import { AppUser } from '../../../../core/interfaces/user.interface';
import { ResumeAccessPolicyService } from '../../../../core/services/resume-access-policy.service';
import { RESUME_TEMPLATES, getTemplateById, type PlanTier } from '../data/resume-template-catalog';
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

  demoResume: Partial<Resume> = {
    personalInfo: { fullName: 'Alex Morgan', jobTitle: 'Product Designer' },
    contact: { email: 'alex@email.com', phone: '+1 (555) 123-4567' },
    summary: 'Product designer focused on clean UX and measurable impact.',
    experience: [
      {
        company: 'Studio North',
        role: 'Lead Designer',
        startDate: '2022-03',
        endDate: 'Present',
        description: ['Built mobile-first design systems', 'Led 0 to 1 UX initiatives'],
      },
    ],
    education: [
      {
        school: 'State University',
        degree: 'BFA Design',
        startDate: '2018-09',
        endDate: '2022-05',
        description: [],
      },
    ],
    skills: ['Figma', 'Prototyping', 'User Research'],
  };

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

  private showUpsell(templateId: ResumeTemplateId) {
    if (!this.resumeAccessPolicy.canCreateResume(this.user, this.resumeCount)) {
      this.upsellMessage = 'Your free plan includes one saved resume. Upgrade to create another.';
      return;
    }

    this.upsellMessage = this.resumeAccessPolicy.upgradeMessage('template_lock', templateId);
  }
}




