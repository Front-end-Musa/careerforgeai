import { Component, computed, OnInit, Signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { DirName } from '../dir-name/dir-name';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { StorageService } from '../../../core/services/storage.service';
import { AddJobModal } from '../add-job-modal/add-job-modal';
import { Job } from '../../../core/interfaces/job.interface';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-job-tracker',
  imports: [DirName, DatePipe, AddJobModal, DragDropModule],
  templateUrl: './job-tracker.html',
  styleUrl: './job-tracker.scss',
  encapsulation: ViewEncapsulation.None,
})
export class JobTracker implements OnInit {
  htmlContent!: SafeHtml;
  jobs: Job[] = [];
  appliedJobs: Signal<Job[]> = computed(() => this.jobs.filter((j) => j.status === 'applied'));
  interviewingJobs: Signal<Job[]> = computed(() =>
    this.jobs.filter((j) => j.status === 'interviewing'),
  );
  offerJobs: Signal<Job[]> = computed(() => this.jobs.filter((j) => j.status === 'offer'));
  rejectedJobs: Signal<Job[]> = computed(() => this.jobs.filter((j) => j.status === 'rejected'));

  constructor(
    private sanitizer: DomSanitizer,
    private storage: StorageService,
  ) {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(
      `<button class="add-job-btn" type="button" aria-label="Add Job">
        <span class="btn-icon">+</span>
        Add Job
      </button>`,
    );
  }

  @ViewChild('addJobModal') addJobModal!: AddJobModal;

  openAddJobModal() {
    if (this.addJobModal) {
      this.addJobModal.openModal();
    }
  }

  handleJobAdded(newJob: any) {
    // normalize fields and add to list + persist
    const job = {
      title: newJob.jobTitle || newJob.title || 'Untitled',
      company: newJob.company || '',
      status: newJob.status || 'applied',
      dateApplied: newJob.appliedDate || new Date().toISOString(),
    } as Job;

    this.jobs = this.jobs || [];
    this.jobs.unshift(job);
    try {
      this.storage.set('jobs-track', JSON.stringify(this.jobs));
    } catch (err) {
      console.warn('Failed to persist jobs:', err);
    }
  }

  getJobsByStatus(status: string) {
    return this.jobs.filter((job) => job.status === status);
  }

  drop(event: CdkDragDrop<Signal<Job[]>>) {
    // Move visually
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data(), event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data(),
        event.container.data(),
        event.previousIndex,
        event.currentIndex,
      );

      // ✅ Update job status
      const movedJob = event.container.data()[event.currentIndex];
      movedJob.status = this.getStatusFromId(event.container.id);
    }

    // ✅ Rebuild from source of truth
    this.rebuildColumns();

    // ✅ Persist
    this.saveToStorage();
  }

  private rebuildColumns() {
    // this.appliedJobs()
    // this.interviewingJobs = this.getJobsByStatus('interviewing');
    // this.offerJobs = this.getJobsByStatus('offer');
    // this.rejectedJobs = this.getJobsByStatus('rejected');
  }

  private getStatusFromId(id: string): string {
    // Matches the #appliedList, #offerList, etc., from your HTML
    if (id.includes('applied')) return 'applied';
    if (id.includes('interviewing')) return 'interviewing';
    if (id.includes('offer')) return 'offer';
    if (id.includes('rejected')) return 'rejected';
    return 'applied';
  }
  private saveToStorage() {
    // If you use one big array 'this.jobs' as the source for all columns:
    this.storage.set('jobs-track', JSON.stringify(this.jobs));

    // NOTE: If your HTML uses separate arrays (e.g., [cdkDropListData]="appliedJobs"),
    // you must make sure those changes reflect back into 'this.jobs'
    // or save all individual arrays.
    console.log('Saved to storage:', this.jobs); // Check your console to see if this triggers
  }

  ngOnInit() {
    this.jobs = JSON.parse(this.storage.get('jobs-track') || '[]');
  }

  ngOnDestroy() {
    this.jobs = [];
  }
}
