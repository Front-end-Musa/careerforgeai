import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';
import { AppUser } from '../../../../core/interfaces/user.interface';
import { ResumeAccessPolicyService } from '../../../../core/services/resume-access-policy.service';
import { ResumeUpgradeService } from '../../../../core/services/resume-upgrade.service';
import { AuthFacade } from '../../../auth/data/auth.facade';
import { ResumesFacade } from '../data/resumes.facade';
import { ResumesCreate } from '../resumes-create/resumes-create';
import { ResumeTemplateModal } from '../resume-template-modal/resume-template-modal';

@Component({
  selector: 'app-resumes-edit',
  imports: [ResumesCreate, ResumeTemplateModal, AsyncPipe],
  templateUrl: './resumes-edit.html',
  styleUrl: './resumes-edit.scss',
})
export class ResumesEdit implements OnInit, AfterViewInit {
  @ViewChild('templateModal') templateModal?: ResumeTemplateModal;

  private route = inject(ActivatedRoute);
  private resumesFacade = inject(ResumesFacade);
  private authFacade = inject(AuthFacade);
  private destroyRef = inject(DestroyRef);
  private resumeAccessPolicy = inject(ResumeAccessPolicyService);
  private resumeUpgrade = inject(ResumeUpgradeService);

  resumeId = this.route.snapshot.paramMap.get('id') ?? '';
  selectedTemplateId: ResumeTemplateId | undefined;
  currentUser: AppUser | null = null;
  resumeCount = 0;
  plan$ = this.authFacade.user$.pipe(
    map((user) => (this.resumeAccessPolicy.canUsePaidResumeFeatures(user) ? user?.plan ?? 'free' : 'free')),
  );

  ngOnInit() {
    this.resumesFacade.loadResumes();
    combineLatest([this.authFacade.user$, this.resumesFacade.resumes$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([user, resumes]) => {
        this.currentUser = user;
        this.resumeCount = resumes.length;
      });
  }

  ngAfterViewInit() {
    if (!this.resumeId) {
      return;
    }

    this.resumesFacade
      .getResumeById(this.resumeId)
      .pipe(take(1))
      .subscribe((resume) => {
        this.selectedTemplateId = resume?.templateId;
      });
  }

  openTemplateModal() {
    this.templateModal?.openModal();
  }

  onTemplateSelected(templateId: ResumeTemplateId) {
    this.selectedTemplateId = templateId;
  }

  handleTemplateUpgrade(templateId: ResumeTemplateId) {
    this.resumeUpgrade.startUpgrade({
      reason: 'template_lock',
      returnTo: `/application/resumes/${this.resumeId}/edit`,
      recommendedPlan: this.templateRequiresPremium(templateId) ? 'premium' : 'pro',
      message: this.resumeAccessPolicy.upgradeMessage('template_lock', templateId),
    });
  }

  private templateRequiresPremium(templateId: ResumeTemplateId) {
    return [
      'premium-executive',
      'executive-edge',
      'graphical-genius',
      'elite-senior',
      'metamorphic-masterpiece',
    ].includes(templateId);
  }
}
