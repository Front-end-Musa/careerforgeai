import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume, ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';
import { ResumePreview } from '../resume-preview/resume-preview';

type PlanTier = 'free' | 'pro' | 'premium';

interface TemplateOption {
  id: ResumeTemplateId;
  name: string;
  description: string;
  requiredPlan: PlanTier;
}

@Component({
  selector: 'app-resume-template-modal',
  standalone: true,
  imports: [CommonModule, ResumePreview],
  templateUrl: './resume-template-modal.html',
  styleUrl: './resume-template-modal.scss',
})
export class ResumeTemplateModal {
  @Input() plan: PlanTier = 'free';
  @Input() selectedTemplateId: ResumeTemplateId | null = null;
  @Output() templateSelected = new EventEmitter<ResumeTemplateId>();
  @Output() closed = new EventEmitter<void>();

  isOpen = false;
  upsellMessage = '';

  templates: TemplateOption[] = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Clean, straightforward layout with clear sections.',
      requiredPlan: 'free',
    },
    {
      id: 'ats-simple',
      name: 'ATS-Friendly Simple',
      description: 'Optimized for ATS scanners with minimal styling.',
      requiredPlan: 'free',
    },
    {
      id: 'classic-one-column',
      name: 'Classic One-Column',
      description: 'Traditional single-column resume layout.',
      requiredPlan: 'free',
    },
    {
      id: 'pro-modern',
      name: 'Pro (Professional & Modern)',
      description: 'Modern two-column layout with strong hierarchy.',
      requiredPlan: 'pro',
    },
    {
      id: 'cascade',
      name: 'Cascade (Pro)',
      description: 'Elegant spacing and bold section flow.',
      requiredPlan: 'pro',
    },
    {
      id: 'cubic-pro',
      name: 'Cubic (Pro)',
      description: 'Geometric spacing with crisp block headings.',
      requiredPlan: 'pro',
    },
    {
      id: 'tech-savvy',
      name: 'Tech-Savvy',
      description: 'Sleek tech-forward layout with sharp accents.',
      requiredPlan: 'pro',
    },
    {
      id: 'modern-executive',
      name: 'Modern Executive',
      description: 'Executive-ready layout with confident styling.',
      requiredPlan: 'pro',
    },
    {
      id: 'premium-executive',
      name: 'Premium (Executive & High-End)',
      description: 'High-end executive formatting with luxury detail.',
      requiredPlan: 'premium',
    },
    {
      id: 'executive-edge',
      name: 'Executive Edge',
      description: 'Polished, premium layout for senior roles.',
      requiredPlan: 'premium',
    },
    {
      id: 'graphical-genius',
      name: 'Graphical Genius',
      description: 'Premium visual balance with refined typography.',
      requiredPlan: 'premium',
    },
    {
      id: 'elite-senior',
      name: 'Elite Senior',
      description: 'Senior-level polish with calm hierarchy.',
      requiredPlan: 'premium',
    },
    {
      id: 'metamorphic-masterpiece',
      name: 'Metamorphic Masterpiece',
      description: 'Luxury serif styling with layered sections.',
      requiredPlan: 'premium',
    },
  ];

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
      return;
    }

    this.selectedTemplateId = templateId;
    this.templateSelected.emit(templateId);
    this.closeModal();
  }

  isLocked(templateId: ResumeTemplateId) {
    const template = this.templates.find((item) => item.id === templateId);
    if (!template) {
      return true;
    }

    return this.planRank(this.plan) < this.planRank(template.requiredPlan);
  }

  requiredPlanLabel(templateId: ResumeTemplateId) {
    const template = this.templates.find((item) => item.id === templateId);
    return template?.requiredPlan ?? 'free';
  }

  private showUpsell(templateId: ResumeTemplateId) {
    const requiredPlan = this.requiredPlanLabel(templateId);
    if (requiredPlan === 'pro') {
      this.upsellMessage = 'Upgrade to Pro to unlock this template.';
      return;
    }

    if (requiredPlan === 'premium') {
      this.upsellMessage = 'Upgrade to Premium to unlock this template.';
      return;
    }

    this.upsellMessage = 'Upgrade your plan to unlock this template.';
  }

  private planRank(plan: PlanTier) {
    if (plan === 'premium') {
      return 3;
    }
    if (plan === 'pro') {
      return 2;
    }
    return 1;
  }
}




