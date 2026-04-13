import { Component, DestroyRef, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { ResumeCard } from './resume-card/resume-card';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumesFacade } from '../data/resumes.facade';
import { Observable } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ResumesStatus } from '../data/resumes.reducer';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resumes-list',
  imports: [ResumeCard, ScrollingModule, AsyncPipe, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './resumes-list.html',
  styleUrl: './resumes-list.scss',
})
export class ResumesList implements OnInit {
  @Output() createRequested = new EventEmitter<void>();
  private resumesFacade = inject(ResumesFacade);
  private destroyRef = inject(DestroyRef);
  readonly itemSize = 168;
  resumesStatus = ResumesStatus;
  status$: Observable<ResumesStatus> = this.resumesFacade.status$;
  resumes = signal<Resume[]>([]);
  loading$: Observable<boolean> = this.resumesFacade.loading$;
  error$: Observable<string | null> = this.resumesFacade.error$;

  ngOnInit(): void {
    this.resumesFacade.loadResumes();
    this.resumesFacade.resumes$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((resumes: Resume[]) => {
        this.resumes.set(resumes ?? []);
      });
  }

  requestCreate() {
    this.createRequested.emit();
  }
}
