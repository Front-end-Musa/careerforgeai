import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume, ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';
import { AppUser } from '../../../../core/interfaces/user.interface';
import { ResumeAccessPolicyService } from '../../../../core/services/resume-access-policy.service';
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

  demoResume: Partial<Resume> = {
    personalInfo: { fullName: 'Alex Morgan', jobTitle: 'Senior Product Designer' },
    contact: {
      email: 'alex@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/alexmorgan',
      website: 'alexmorgan.design',
    },
    summary:
      'Product designer focused on clean UX, cross-functional leadership, and measurable business outcomes across enterprise and consumer products.',
    experience: [
      {
        company: 'Studio North',
        role: 'Lead Designer',
        startDate: '2022-03',
        endDate: 'Present',
        description: [
          'Built mobile-first design systems used across 6 product teams',
          'Led 0 to 1 UX initiatives that improved activation by 21%',
        ],
      },
      {
        company: 'Metric Labs',
        role: 'Product Designer',
        startDate: '2019-06',
        endDate: '2022-02',
        description: [
          'Redesigned dashboard workflows for data-heavy enterprise customers',
          'Partnered with PM and engineering to ship experimentation-ready UI patterns',
        ],
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
    skills: ['Figma', 'Design Systems', 'Product Strategy', 'User Research', 'Prototyping', 'Accessibility'],
    sections: [
      { id: 'summary-demo', type: 'summary', title: 'Summary', enabled: true },
      { id: 'experience-demo', type: 'experience', title: 'Experience', enabled: true },
      { id: 'education-demo', type: 'education', title: 'Education', enabled: true },
      { id: 'skills-demo', type: 'skills', title: 'Skills', enabled: true },
      {
        id: 'projects-demo',
        type: 'projects',
        title: 'Projects',
        enabled: true,
        entries: [
          {
            name: 'Design System Atlas',
            role: 'Design Lead',
            link: 'atlas.design',
            description: ['Unified web and mobile patterns', 'Cut UI delivery time by 34%'],
          },
        ],
      },
      {
        id: 'certifications-demo',
        type: 'certifications',
        title: 'Certifications',
        enabled: true,
        entries: [{ name: 'NN/g UX Certification', issuer: 'NN/g', issueDate: '2024-02' }],
      },
      {
        id: 'languages-demo',
        type: 'languages',
        title: 'Languages',
        enabled: true,
        entries: [{ language: 'English', proficiency: 'Native' }, { language: 'Spanish', proficiency: 'Professional' }],
      },
      {
        id: 'awards-demo',
        type: 'awards',
        title: 'Awards',
        enabled: true,
        entries: [{ title: 'Design Excellence Award', issuer: 'Metric Labs', date: '2023' }],
      },
    ],
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
