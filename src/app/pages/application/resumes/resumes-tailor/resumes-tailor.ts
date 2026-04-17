import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { combineLatest, filter, map, skip, take } from 'rxjs';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { AppUser } from '../../../../core/interfaces/user.interface';
import { ResumeAccessPolicyService } from '../../../../core/services/resume-access-policy.service';
import { ResumeUpgradeService } from '../../../../core/services/resume-upgrade.service';
import { ResumesFacade } from '../data/resumes.facade';
import { AuthFacade } from '../../../auth/data/auth.facade';

@Component({
  selector: 'app-resumes-tailor',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
  ],
  templateUrl: './resumes-tailor.html',
  styleUrl: './resumes-tailor.scss',
})
export class ResumesTailor {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private resumesFacade = inject(ResumesFacade);
  private authFacade = inject(AuthFacade);
  private resumeAccessPolicy = inject(ResumeAccessPolicyService);
  private resumeUpgrade = inject(ResumeUpgradeService);

  readonly saving$ = this.resumesFacade.saving$;
  readonly tailoring$ = this.resumesFacade.tailoring$;
  readonly tailorError$ = this.resumesFacade.tailorError$;
  readonly submitting$ = combineLatest([this.saving$, this.tailoring$]).pipe(
    map(([saving, tailoring]) => saving || tailoring),
  );
  readonly resume = signal<Resume | null>(null);
  readonly applySuccess = signal(false);
  readonly currentUser = signal<AppUser | null>(null);
  readonly resumeCount = signal(0);

  readonly tailorForm = new FormGroup({
    companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    position: new FormControl('', [Validators.required, Validators.minLength(2)]),
    jobDescription: new FormControl('', [Validators.required, Validators.minLength(30)]),
  });

  constructor() {
    const resumeId = this.route.snapshot.paramMap.get('id');
    if (!resumeId) {
      this.router.navigate(['/application/resumes']);
      return;
    }

    this.resumesFacade
      .getResumeById(resumeId)
      .pipe(take(1))
      .subscribe((resume) => {
        if (!resume) {
          this.router.navigate(['/application/resumes']);
          return;
        }

        this.resume.set(resume);
      });

    this.resumesFacade.ensureLoaded('ResumesTailor.constructor');
    combineLatest([this.authFacade.user$, this.resumesFacade.resumes$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([user, resumes]) => {
        this.currentUser.set(user);
        this.resumeCount.set(resumes.length);
      });

    this.resumesFacade.saveSucceeded$
      .pipe(
        skip(1),
        filter((saved) => saved),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.applySuccess.set(true);
      });
  }

  applyTailoring() {
    const currentResume = this.resume();
    if (
      this.resumeAccessPolicy.requiresUpgrade(
        'tailor',
        this.currentUser(),
        this.resumeCount(),
      )
    ) {
      this.resumeUpgrade.startUpgrade({
        reason: 'tailor',
        returnTo: currentResume?.id
          ? `/application/resumes/${currentResume.id}/tailor`
          : '/application/resumes',
        recommendedPlan: 'pro',
        message: this.resumeAccessPolicy.upgradeMessage('tailor'),
      });
      return;
    }

    if (this.tailorForm.invalid) {
      this.tailorForm.markAllAsTouched();
      return;
    }

    if (!currentResume?.id) {
      return;
    }

    const formValue = this.tailorForm.getRawValue();
    this.applySuccess.set(false);

    this.resumesFacade.tailorResumeData(
      currentResume.id,
      currentResume,
      formValue.companyName ?? '',
      formValue.position ?? '',
      formValue.jobDescription ?? '',
    );
  }

  get canTailorResume() {
    return this.resumeAccessPolicy.canTailorResume(this.currentUser());
  }
}
