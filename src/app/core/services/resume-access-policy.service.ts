import { Injectable } from '@angular/core';
import { AppUser } from '../interfaces/user.interface';
import { ResumeTemplateId } from '../interfaces/resumes.interface';
import { getTemplateById } from '../../pages/application/resumes/data/resume-template-catalog';

export type PlanTier = 'free' | 'pro' | 'premium';
export type SubscriptionStatus = 'none' | 'active' | 'past_due' | 'cancelled';
export type UpgradeReason = 'second_resume' | 'save' | 'download' | 'tailor' | 'template_lock';

@Injectable({ providedIn: 'root' })
export class ResumeAccessPolicyService {
  canUsePaidResumeFeatures(user: AppUser | null | undefined): boolean {
    if (!user) {
      return false;
    }

    const isPaidPlan = user.plan === 'pro' || user.plan === 'premium';
    return isPaidPlan && user.subscriptionStatus === 'active';
  }

  canKeepFreeDraft(user: AppUser | null | undefined, resumeCount: number): boolean {
    if (!user) {
      return false;
    }

    if (this.canUsePaidResumeFeatures(user)) {
      return true;
    }

    return user.plan === 'free' && resumeCount <= 1;
  }

  canCreateResume(user: AppUser | null | undefined, resumeCount: number): boolean {
    if (!user) {
      return false;
    }

    if (this.canUsePaidResumeFeatures(user)) {
      return true;
    }

    return user.plan === 'free' && resumeCount === 0;
  }

  canExportResume(user: AppUser | null | undefined): boolean {
    return this.canUsePaidResumeFeatures(user);
  }

  canSaveGeneratedResume(user: AppUser | null | undefined): boolean {
    return this.canUsePaidResumeFeatures(user);
  }

  canTailorResume(user: AppUser | null | undefined): boolean {
    return this.canUsePaidResumeFeatures(user);
  }

  canUseTemplate(
    user: AppUser | null | undefined,
    resumeCount: number,
    templateId: ResumeTemplateId,
  ): boolean {
    if (!user) {
      return false;
    }

    if (!this.canKeepFreeDraft(user, resumeCount)) {
      return false;
    }

    const template = getTemplateById(templateId);
    const userPlan = this.canUsePaidResumeFeatures(user) ? user.plan : 'free';
    return !this.isTemplatePlanLocked(userPlan, template.requiredPlan);
  }

  requiresUpgrade(
    reason: UpgradeReason,
    user: AppUser | null | undefined,
    resumeCount: number,
    templateId?: ResumeTemplateId,
  ): boolean {
    switch (reason) {
      case 'second_resume':
        return !this.canCreateResume(user, resumeCount);
      case 'save':
        return !this.canSaveGeneratedResume(user);
      case 'download':
        return !this.canExportResume(user);
      case 'tailor':
        return !this.canTailorResume(user);
      case 'template_lock':
        return templateId ? !this.canUseTemplate(user, resumeCount, templateId) : true;
      default:
        return true;
    }
  }

  upgradeMessage(reason: UpgradeReason, templateId?: ResumeTemplateId): string {
    if (reason === 'second_resume') {
      return 'Your free plan includes one saved resume. Upgrade to create another.';
    }

    if (reason === 'save') {
      return 'Saving AI-generated resumes is available on paid plans.';
    }

    if (reason === 'download') {
      return 'Resume downloads are available on paid plans.';
    }

    if (reason === 'tailor') {
      return 'AI tailoring is available on paid plans.';
    }

    if (reason === 'template_lock' && templateId) {
      const template = getTemplateById(templateId);
      return `Upgrade to ${template.requiredPlan === 'premium' ? 'Premium' : 'Pro'} to use the ${template.name} template.`;
    }

    return 'Upgrade your subscription to continue.';
  }

  private isTemplatePlanLocked(userPlan: PlanTier, requiredPlan: PlanTier): boolean {
    return this.planRank(userPlan) < this.planRank(requiredPlan);
  }

  private planRank(plan: PlanTier): number {
    if (plan === 'premium') {
      return 3;
    }

    if (plan === 'pro') {
      return 2;
    }

    return 1;
  }
}
