import { Component, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { AppUser } from '../../../core/interfaces/user.interface';
import { Job } from '../../../core/interfaces/job.interface';
import { Resume } from '../../../core/interfaces/resumes.interface';
import { AuthFacade } from '../../auth/data/auth.facade';
import { RouterLink } from '@angular/router';
import { ResumesFacade } from '../resumes/data/resumes.facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { JobsFacade } from '../job-tracker/data/jobs.facade';
import { computed } from '@angular/core';
import { getPlanEntitlements } from '../../../core/utils/plan-entitlements';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  authFacade = inject(AuthFacade);
  resumesFacade = inject(ResumesFacade);
  jobsFacade = inject(JobsFacade);
  private destroyRef = inject(DestroyRef);

  user: WritableSignal<AppUser | null> = signal(null);
  resumes = signal<Resume[]>([]);
  applications = signal<Job[]>([]);
  interviews = signal<Job[]>([]);
  offers = signal<Job[]>([]);
  jobTrackerEnabled = computed(() =>
    getPlanEntitlements(this.user()?.plan ?? 'free').jobTrackerEnabled,
  );

  ngOnInit() {
    this.resumesFacade.loadResumes();
    this.jobsFacade.loadJobs();
    this.resumesFacade.resumes$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((resumes) => {
      this.resumes.set(resumes);
    });
    this.authFacade.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (user: AppUser | null) => {
        this.user.set(user);
      },
    });
    this.jobsFacade.jobs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((jobs) => {
      this.applications.set(jobs.filter((job) => job.status === 'applied'));
      this.interviews.set(jobs.filter((job) => job.status === 'interviewing'));
      this.offers.set(jobs.filter((job) => job.status === 'offered'));
    });
  }
}
