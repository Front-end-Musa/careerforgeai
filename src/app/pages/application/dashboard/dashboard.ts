import { Component, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { AppUser } from '../../../core/interfaces/user.interface';
import { Job } from '../../../core/interfaces/job.interface';
import { Resume } from '../../../core/interfaces/resumes.interface';
import { AuthFacade } from '../../auth/data/auth.facade';
import { RouterLink } from '@angular/router';
import { ResumesFacade } from '../resumes/data/resumes.facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  authFacade = inject(AuthFacade);
  resumesFacade = inject(ResumesFacade);
  storage = inject(StorageService);
  private destroyRef = inject(DestroyRef);

  user: WritableSignal<AppUser | null> = signal(null);
  resumes = signal<Resume[]>([]);
  applications = signal<Job[]>([]);
  interviews = signal<Job[]>([]);
  offers = signal<Job[]>([]);

  ngOnInit() {
    this.resumesFacade.loadResumes();
    this.resumesFacade.resumes$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((resumes) => {
      this.resumes.set(resumes);
    });
    this.authFacade.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (user: AppUser | null) => {
        this.user.set(user);
      },
    });
    const jobTracks: Job[] = JSON.parse(this.storage.get('jobs-track')!);
    if (jobTracks != null) {
      this.applications.set(jobTracks.filter((job) => job.status === 'applied'));
      this.interviews.set(jobTracks.filter((job) => job.status === 'interviewing'));
      this.offers.set(jobTracks.filter((job) => job.status === 'offered'));
    }
  }
}
