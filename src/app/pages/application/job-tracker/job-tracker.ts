import { Component, computed, inject, OnInit, signal, Signal, ViewChild, ViewEncapsulation, WritableSignal } from '@angular/core';
import { DirName } from '../dir-name/dir-name';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { AddJobModal } from './add-job-modal/add-job-modal';
import { Job, JobStatus } from '../../../core/interfaces/job.interface';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { toSignal } from '@angular/core/rxjs-interop';
import { JobsFacade } from './data/jobs.facade';
import { ClickOutsideDirective } from '../../../lib/directives/click-outside.directive';
import { MatDialog } from '@angular/material/dialog';
import { JobCard } from './job-card/job-card';

@Component({
  selector: 'app-job-tracker',
  imports: [DirName, DatePipe, DragDropModule, CommonModule, ClickOutsideDirective, JobCard],
  templateUrl: './job-tracker.html',
  styleUrl: './job-tracker.scss',
  encapsulation: ViewEncapsulation.None,
})
export class JobTracker implements OnInit {
  htmlContent!: SafeHtml;
  private dialog = inject(MatDialog);
  private jobsFacade = inject(JobsFacade);

  jobs = toSignal(this.jobsFacade.jobs$, { initialValue: [] as Job[] });
  appliedJobs: Signal<Job[]> = computed(() =>
    this.jobs().filter((job) => job.status === 'applied'),
  );
  interviewingJobs: Signal<Job[]> = computed(() =>
    this.jobs().filter((job) => job.status === 'interviewing'),
  );
  offerJobs: Signal<Job[]> = computed(() => this.jobs().filter((job) => job.status === 'offered'));
  rejectedJobs: Signal<Job[]> = computed(() =>
    this.jobs().filter((job) => job.status === 'rejected'),
  );

  constructor(private sanitizer: DomSanitizer) {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(
      `<button class="add-job-btn" type="button" aria-label="Add Job">
        <span class="btn-icon">+</span>
        Add Job
      </button>`,
    );
  }

  @ViewChild('actionsMenu') actionsMenu!: any;

  openAddJobModal() {
    const dialogRef = this.dialog.open(AddJobModal, {
      data: { modalMode: 'add' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      if (result.action === 'save') {
        this.handleJobAdded(result.data);
      }
    });
  }

  handleJobAdded(newJob: Partial<Job>) {
    const status = (newJob.status || 'applied') as JobStatus;
    const groupedJobs = this.jobs().filter((job) => job.status === status);
    const jobPayload = {
      title: newJob.title || 'Untitled',
      company: newJob.company || '',
      status,
      dateApplied: newJob.dateApplied || new Date().toISOString(),
      position: groupedJobs.length,
    };

    this.jobsFacade.addJob(jobPayload);
  }

  drop(event: CdkDragDrop<Job[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      const movedJob = event.container.data[event.currentIndex];
      movedJob.status = this.getStatusFromId(event.container.id);
    }

    this.jobsFacade.moveJob(this.getAllPositionUpdates(this.getReorderedJobs(event)));
  }

  private getStatusFromId(id: string): JobStatus {
    if (id.includes('applied')) return 'applied';
    if (id.includes('interviewing')) return 'interviewing';
    if (id.includes('offered')) return 'offered';
    if (id.includes('rejected')) return 'rejected';
    return 'applied';
  }

  private getReorderedJobs(event: CdkDragDrop<Job[]>) {
    const touchedJobs = [...event.previousContainer.data, ...event.container.data];
    const touchedIds = new Set(touchedJobs.map((job) => job.id));
    const untouchedJobs = this.jobs().filter((job) => !touchedIds.has(job.id));
    const merged = [...touchedJobs, ...untouchedJobs];
    const uniqueById = new Map<string, Job>();

    for (const job of merged) {
      if (!job.id) {
        continue;
      }
      uniqueById.set(job.id, job);
    }

    return Array.from(uniqueById.values());
  }

  private getAllPositionUpdates(jobs: Job[]) {
    const grouped: Record<JobStatus, Job[]> = {
      applied: [],
      interviewing: [],
      offered: [],
      rejected: [],
    };

    for (const job of jobs) {
      grouped[job.status].push(job);
    }

    const updates: Array<{ id: string; status: JobStatus; position: number }> = [];
    for (const status of Object.keys(grouped) as JobStatus[]) {
      grouped[status].forEach((job, index) => {
        if (!job.id) {
          return;
        }

        updates.push({ id: job.id, status, position: index });
      });
    }

    return updates;
  }

  ngOnInit() {
    this.jobsFacade.loadJobs();
  }
}
