import { Component, Input, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Resume } from '../../../../../core/interfaces/resumes.interface';
import { ResumesFacade } from '../../data/resumes.facade';
import { EntitlementsService } from '../../../../../core/services/entitlements.service';
import { ResumeAccessPolicyService } from '../../../../../core/services/resume-access-policy.service';
import { ResumeUpgradeService } from '../../../../../core/services/resume-upgrade.service';
import { getTemplateLabel } from '../../data/resume-template-catalog';

@Component({
  selector: 'app-resume-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './resume-card.html',
  styleUrl: './resume-card.scss',
})
export class ResumeCard {
  @Input() resume!: Resume;
  private resumesFacade = inject(ResumesFacade);
  private entitlementsService = inject(EntitlementsService);
  private resumeAccessPolicy = inject(ResumeAccessPolicyService);
  private resumeUpgrade = inject(ResumeUpgradeService);
  private user = toSignal(this.entitlementsService.user$, { initialValue: null });
  private downloadingResumeId = toSignal(this.resumesFacade.downloadingResumeId$, { initialValue: null });

  get displayName() {
    return this.resume.personalInfo.fullName || 'Untitled resume';
  }

  get sourceLabel() {
    return this.resume.meta.source === 'ai' ? 'AI created' : 'Manual';
  }

  get templateLabel() {
    return this.resume.templateId ? getTemplateLabel(this.resume.templateId) : null;
  }

  get hasTailoring() {
    return Boolean(this.resume.meta.tailoring);
  }

  get canDownloadResume() {
    return this.resumeAccessPolicy.canExportResume(this.user());
  }

  get isDownloading() {
    return this.downloadingResumeId() === this.resume.id;
  }

  downloadResume() {
    if (!this.resume.id || this.isDownloading) {
      return;
    }

    if (!this.canDownloadResume) {
      this.resumeUpgrade.startUpgrade({
        reason: 'download',
        returnTo: '/application/resumes',
        recommendedPlan: 'pro',
        message: this.resumeAccessPolicy.upgradeMessage('download'),
      });
      return;
    }

    this.resumesFacade.downloadResume(this.resume.id);
  }

  deleteResume() {
    this.resumesFacade.deleteResume(this.resume.id ? this.resume.id : '');
  }
}
