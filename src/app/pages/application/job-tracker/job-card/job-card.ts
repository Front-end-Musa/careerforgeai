import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { Job } from '../../../../core/interfaces/job.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { AddJobModal } from '../add-job-modal/add-job-modal';
import { MatDialog } from '@angular/material/dialog';
import { JobsFacade } from '../data/jobs.facade';

@Component({
  selector: 'app-job-card',
  imports: [DatePipe, CommonModule],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss',
})
export class JobCard {
  @Input() job!: Job;
  private dialog = inject(MatDialog);
  private jobsFacade = inject(JobsFacade);
  showActions: WritableSignal<boolean> = signal<boolean>(false);

  toggleActions() {
    this.showActions.set(!this.showActions());
  }

  openEditJobModal(job: Job) {
    const dialogRef = this.dialog.open(AddJobModal, {
      data: { modalMode: 'edit', existingJob: job },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      if (result.action === 'save') {
        this.handleJobUpdated(result.data);
      }
    });
  }

  handleJobUpdated(updatedJob: Partial<Job> & { id: string }) {
    this.jobsFacade.updateJob(updatedJob.id, updatedJob);
  }

  deleteJob(job: Job) {
    if (job.id) {
      this.jobsFacade.deleteJob(job.id);
    }
  }
}
