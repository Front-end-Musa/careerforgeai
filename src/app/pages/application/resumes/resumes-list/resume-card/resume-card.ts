import { Component, Input, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { finalize, take } from 'rxjs';
import { Resume } from '../../../../../core/interfaces/resumes.interface';
import { ResumesFacade } from '../../data/resumes.facade';
import { ResumeService } from '../../../../../core/services/resume.service';
import { EntitlementsService } from '../../../../../core/services/entitlements.service';
import { ResumeAccessPolicyService } from '../../../../../core/services/resume-access-policy.service';
import { ResumeUpgradeService } from '../../../../../core/services/resume-upgrade.service';
import { NotificationsService } from '../../../../../core/services/notifications.service';
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
  private resumeService = inject(ResumeService);
  private entitlementsService = inject(EntitlementsService);
  private resumeAccessPolicy = inject(ResumeAccessPolicyService);
  private resumeUpgrade = inject(ResumeUpgradeService);
  private notifications = inject(NotificationsService);
  private user = toSignal(this.entitlementsService.user$, { initialValue: null });
  isDownloading = false;

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

    this.isDownloading = true;
    this.resumeService
      .downloadResume(this.resume.id)
      .pipe(
        take(1),
        finalize(() => {
          this.isDownloading = false;
        }),
      )
      .subscribe({
        next: ({ fileName, contentType, content }) => {
          if (typeof window === 'undefined') {
            return;
          }

          const blob = new Blob([content], { type: contentType });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = fileName;
          link.click();
          window.URL.revokeObjectURL(url);
        },
        error: () => {
          this.notifications.showError('Unable to download this resume right now.');
        },
      });
  }

  deleteResume() {
    this.resumesFacade.deleteResume(this.resume.id ? this.resume.id : '');
  }
}
