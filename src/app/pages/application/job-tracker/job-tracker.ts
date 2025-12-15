import { Component, OnInit, ViewChild } from '@angular/core';
import { DirName } from '../dir-name/dir-name';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { StorageService } from '../../../core/services/storage.service';
import { AddJobModal } from '../add-job-modal/add-job-modal';
import { Job } from '../../../core/interfaces/job.interface';

@Component({
  selector: 'app-job-tracker',
  imports: [DirName, DatePipe, AddJobModal],
  templateUrl: './job-tracker.html',
  styleUrl: './job-tracker.scss',
})
export class JobTracker implements OnInit {
  htmlContent!: SafeHtml;
  jobs: Job[] = [];

  constructor(private sanitizer: DomSanitizer, private storage: StorageService) {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(
      `<button class="add-job-btn" type="button" aria-label="Add Job">
        <span class="btn-icon">+</span>
        Add Job
      </button>`
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

  ngOnInit() {
    this.jobs = JSON.parse(this.storage.get('jobs-track') || '[]');
  }
}
