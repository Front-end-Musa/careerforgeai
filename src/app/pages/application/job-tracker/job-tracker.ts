import { Component, OnInit, ViewChild } from '@angular/core';
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
})
export class JobTracker implements OnInit {
  htmlContent!: SafeHtml;
  jobs: Job[] = [];
  appliedJobs: Job[] = [];
  interviewingJobs: Job[] = [];
  offerJobs: Job[] = [];
  rejectedJobs: Job[] = [];

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

      // 1. Find the moved job (it's now at the currentIndex in the new container)
      const movedJob = event.container.data[event.currentIndex];

      // 2. Update its status based on the container it dropped into
      // We use the #templateReference names you defined in HTML
      movedJob.status = this.getStatusFromId(event.container.id);
    }

    // 3. Persist the entire master list to localStorage
    this.saveToStorage();
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
    // Replace 'this.allJobs' with whatever your main array variable is named
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
  }

  ngOnInit() {
    this.jobs = JSON.parse(this.storage.get('jobs-track') || '[]');
    this.appliedJobs = this.getJobsByStatus('applied');
    this.interviewingJobs = this.getJobsByStatus('interviewing');
    this.offerJobs = this.getJobsByStatus('offer');
    this.rejectedJobs = this.getJobsByStatus('rejected');
  }
}
