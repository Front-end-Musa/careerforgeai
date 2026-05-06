import { AfterViewInit, Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { combineLatest, filter, firstValueFrom, map } from 'rxjs';
import { Resume, ResumeTemplateId } from '../../../core/interfaces/resumes.interface';
import { AuthFacade } from '../../auth/data/auth.facade';
import { DirName } from '../dir-name/dir-name';
import { MatButton } from '@angular/material/button';
import { SafeHtml } from '@angular/platform-browser';
import { CreateListResumeSwitch } from '../../buttons/create-list-resume-switch/create-list-resume-switch';
import { ResumesCreate } from './resumes-create/resumes-create';
import { ResumesList } from './resumes-list/resumes-list';
import { ResumeTemplateModal } from './resume-template-modal/resume-template-modal';
import { ApplicationStorageFacade } from '../data/application-storage.facade';
import { ResumesFacade } from './data/resumes.facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppUser } from '../../../core/interfaces/user.interface';
import { ResumeAccessPolicyService } from '../../../core/services/resume-access-policy.service';
import { ResumeUpgradeService } from '../../../core/services/resume-upgrade.service';
import { BillingFacade } from '../../landing/pricing-plans/data/billing.facade';
import { getTemplateById } from './data/resume-template-catalog';

@Component({
  selector: 'app-resumes',
  imports: [DirName, CreateListResumeSwitch, ResumesCreate, ResumesList, ResumeTemplateModal, AsyncPipe],
  templateUrl: './resumes.html',
  styleUrl: './resumes.scss',
})
export class Resumes implements AfterViewInit {
  @ViewChild('templateModal') templateModal?: ResumeTemplateModal;

  private authFacade = inject(AuthFacade);
  private resumesFacade = inject(ResumesFacade);
  private destroyRef = inject(DestroyRef);
  private resumeAccessPolicy = inject(ResumeAccessPolicyService);
  private resumeUpgrade = inject(ResumeUpgradeService);
  private billingFacade = inject(BillingFacade);

  tones: string[] = ['Modern', 'Minimal', 'Creative'];
  resumes: Resume[] = [];
  viewMode: 'create' | 'list' = 'list';
  createSwitchHtml: SafeHtml;
  selectedTemplateId: ResumeTemplateId | undefined;
  currentUser: AppUser | null = null;
  resumeCount = 0;
  private entitlementsRefreshInFlight: Promise<boolean> | null = null;
  plan$ = this.authFacade.user$.pipe(
    map((user) => (this.resumeAccessPolicy.canUsePaidResumeFeatures(user) ? user?.plan ?? 'free' : 'free')),
  );

  constructor(private storageFacade: ApplicationStorageFacade) {
    this.createSwitchHtml = `
    <div class="list-create-switch">
      <button
        mat-button
        matButton="text"
        class="switch-btn"
        [class.active]="viewMode === 'list'"
        (click)="viewMode = 'list'"
      >
        <span class="material-symbols-outlined">view_list</span>
        List View
      </button>
      <button
        mat-button
        matButton="text"
        class="switch-btn"
        [class.active]="viewMode === 'create'"
        (click)="viewMode = 'create'"
      >
        <span class="material-symbols-outlined">add_circle</span>
        Create New
    </button>
  </div>`;
  }

  ngOnInit() {
    this.resumesFacade.ensureLoaded('Resumes.ngOnInit');
    combineLatest([this.authFacade.user$, this.resumesFacade.resumes$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([user, resumes]) => {
        this.currentUser = user;
        this.resumeCount = resumes.length;
      });

    void this.refreshEntitlementsForRecentUpgrade();

    this.storageFacade.set('resumes', JSON.stringify(this.resumes));
  }

  ngAfterViewInit() {
    if (this.viewMode === 'create' && !this.selectedTemplateId) {
      this.openTemplateModal();
    }
  }

  async handleViewModeChange(viewMode: string) {
    if (viewMode !== 'create' && viewMode !== 'list') {
      return;
    }

    if (viewMode === 'create') {
      await this.refreshEntitlementsForRecentUpgrade();
    }

    if (
      viewMode === 'create' &&
      this.resumeAccessPolicy.requiresUpgrade(
        'second_resume',
        this.currentUser,
        this.resumeCount,
      )
    ) {
      this.resumeUpgrade.startUpgrade({
        reason: 'second_resume',
        returnTo: '/application/resumes',
        recommendedPlan: 'pro',
        message: this.resumeAccessPolicy.upgradeMessage('second_resume'),
      });
      return;
    }

    this.viewMode = viewMode;
    if (this.viewMode === 'create' && !this.selectedTemplateId) {
      await this.openTemplateModal();
    }
  }

  async openTemplateModal() {
    await this.refreshEntitlementsForRecentUpgrade();
    this.templateModal?.openModal();
  }

  onTemplateSelected(templateId: ResumeTemplateId) {
    this.selectedTemplateId = templateId;
    this.viewMode = 'create';
  }

  handleTemplateUpgrade(templateId: ResumeTemplateId) {
    this.resumeUpgrade.startUpgrade({
      reason: 'template_lock',
      returnTo: '/application/resumes',
      recommendedPlan: this.templateRequiresPremium(templateId) ? 'premium' : 'pro',
      message: this.resumeAccessPolicy.upgradeMessage('template_lock', templateId),
    });
  }

  handleTemplateModalClosed() {
    if (!this.selectedTemplateId) {
      this.viewMode = 'list';
    }
  }

  handleResumeSaved() {
    this.selectedTemplateId = undefined;
    this.viewMode = 'list';
  }

  setViewMode() {
    this.viewMode = this.viewMode === 'list' ? 'create' : 'list';
  }

  private async refreshEntitlementsForRecentUpgrade() {
    const expectedPlan = this.resumeUpgrade.getExpectedPlanForEntitlementRetry();
    if (!expectedPlan || this.resumeAccessPolicy.canUsePaidResumeFeatures(this.currentUser)) {
      return false;
    }

    if (!this.entitlementsRefreshInFlight) {
      this.billingFacade.syncEntitlements();
      this.entitlementsRefreshInFlight = Promise.race([
        firstValueFrom(this.billingFacade.syncResult$.pipe(filter((result) => result !== null))),
        firstValueFrom(this.billingFacade.syncError$.pipe(filter((error) => !!error), map(() => null))),
      ])
        .then((result) => {
          if (!result) {
            return false;
          }

          if (result.subscriptionStatus === 'active' && (result.plan === 'pro' || result.plan === 'premium')) {
            this.resumeUpgrade.markRecentUpgrade(expectedPlan);
            this.resumeUpgrade.clearPendingPlan();
            return true;
          }

          return false;
        })
        .catch(() => false)
        .finally(() => {
          this.entitlementsRefreshInFlight = null;
        });
    }

    return this.entitlementsRefreshInFlight;
  }

  private templateRequiresPremium(templateId: ResumeTemplateId) {
    return getTemplateById(templateId).requiredPlan === 'premium';
  }
}


