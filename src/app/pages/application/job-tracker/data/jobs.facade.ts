import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Job } from '../../../../core/interfaces/job.interface';
import * as JobsActions from './jobs.actions';
import {
  selectAll,
  selectAppliedJobs,
  selectInterviewingJobs,
  selectJobsError,
  selectJobsSaving,
  selectJobsStatus,
  selectOfferedJobs,
  selectRejectedJobs,
} from './jobs.selectors';

@Injectable({
  providedIn: 'root',
})
export class JobsFacade {
  private store = inject(Store);

  jobs$ = this.store.select(selectAll);
  appliedJobs$ = this.store.select(selectAppliedJobs);
  interviewingJobs$ = this.store.select(selectInterviewingJobs);
  offeredJobs$ = this.store.select(selectOfferedJobs);
  rejectedJobs$ = this.store.select(selectRejectedJobs);
  status$ = this.store.select(selectJobsStatus);
  saving$ = this.store.select(selectJobsSaving);
  error$ = this.store.select(selectJobsError);

  loadJobs() {
    this.store.dispatch(JobsActions.loadJobs());
  }

  addJob(job: Pick<Job, 'title' | 'company' | 'status' | 'dateApplied' | 'position'>) {
    this.store.dispatch(JobsActions.addJob({ job }));
  }

  moveJob(jobs: Array<{ id: string; status: Job['status']; position: number }>) {
    this.store.dispatch(JobsActions.moveJob({ jobs }));
  }

  updateJob(id: string, changes: Partial<Job>) {
    this.store.dispatch(JobsActions.updateJob({ id, changes }));
  }

  deleteJob(id: string) {
    this.store.dispatch(JobsActions.deleteJob({ id }));
  }

  clearState() {
    this.store.dispatch(JobsActions.clearJobsState());
  }
}
