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
  selectJobsStale,
  selectOfferedJobs,
  selectRejectedJobs,
} from './jobs.selectors';
import { JobsStatus } from './jobs.reducer';
import { ActionTraceService } from '../../../../core/state/debug/action-trace.service';

@Injectable({
  providedIn: 'root',
})
export class JobsFacade {
  private store = inject(Store);
  private trace = inject(ActionTraceService);
  private status = this.store.selectSignal(selectJobsStatus);
  private stale = this.store.selectSignal(selectJobsStale);

  jobs$ = this.store.select(selectAll);
  appliedJobs$ = this.store.select(selectAppliedJobs);
  interviewingJobs$ = this.store.select(selectInterviewingJobs);
  offeredJobs$ = this.store.select(selectOfferedJobs);
  rejectedJobs$ = this.store.select(selectRejectedJobs);
  status$ = this.store.select(selectJobsStatus);
  saving$ = this.store.select(selectJobsSaving);
  error$ = this.store.select(selectJobsError);

  ensureLoaded(source = 'JobsFacade.ensureLoaded', force = false) {
    const status = this.status();
    if (!force && (status === JobsStatus.Loading || (status === JobsStatus.Loaded && !this.stale()))) {
      this.trace.traceSkip(JobsActions.loadJobs.type, source, 'jobs already loaded', {
        jobsStatus: status,
        jobsStale: this.stale(),
      });
      return;
    }

    const action = JobsActions.loadJobs();
    this.trace.traceDispatch(action, source, {
      force,
      jobsStatus: status,
      jobsStale: this.stale(),
    });
    this.store.dispatch(action);
  }

  addJob(job: Pick<Job, 'title' | 'company' | 'status' | 'dateApplied' | 'position'>) {
    const action = JobsActions.addJob({ job });
    this.trace.traceDispatch(action, 'JobsFacade.addJob');
    this.store.dispatch(action);
  }

  moveJob(jobs: Array<{ id: string; status: Job['status']; position: number }>) {
    const action = JobsActions.moveJob({ jobs });
    this.trace.traceDispatch(action, 'JobsFacade.moveJob');
    this.store.dispatch(action);
  }

  updateJob(id: string, changes: Partial<Job>) {
    const action = JobsActions.updateJob({ id, changes });
    this.trace.traceDispatch(action, 'JobsFacade.updateJob');
    this.store.dispatch(action);
  }

  deleteJob(id: string) {
    const action = JobsActions.deleteJob({ id });
    this.trace.traceDispatch(action, 'JobsFacade.deleteJob');
    this.store.dispatch(action);
  }

  clearState() {
    this.store.dispatch(JobsActions.clearJobsState());
  }
}
