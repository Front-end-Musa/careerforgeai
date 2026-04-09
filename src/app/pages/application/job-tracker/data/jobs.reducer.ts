import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Job } from '../../../../core/interfaces/job.interface';
import * as JobsActions from './jobs.actions';

export enum JobsStatus {
  Init = 'init',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

export interface JobsState extends EntityState<Job> {
  status: JobsStatus;
  error: string | null;
  saving: boolean;
}

export const jobsAdapter: EntityAdapter<Job> = createEntityAdapter<Job>({
  selectId: (job) => job.id ?? '',
  sortComparer: (a, b) => a.position - b.position,
});

export const initialState: JobsState = jobsAdapter.getInitialState({
  status: JobsStatus.Init,
  error: null,
  saving: false,
});

export const jobsReducer = createReducer(
  initialState,
  on(JobsActions.loadJobs, (state) => ({
    ...state,
    status: JobsStatus.Loading,
    error: null,
  })),
  on(JobsActions.loadJobsSuccess, (state, { jobs }) =>
    jobsAdapter.setAll(jobs, {
      ...state,
      status: JobsStatus.Loaded,
      error: null,
    }),
  ),
  on(JobsActions.loadJobsFailure, (state, { error }) => ({
    ...state,
    status: JobsStatus.Error,
    error,
  })),
  on(JobsActions.addJob, JobsActions.moveJob, JobsActions.updateJob, JobsActions.deleteJob, (state) => ({
    ...state,
    saving: true,
    error: null,
  })),
  on(
    JobsActions.addJobSuccess,
    JobsActions.moveJobSuccess,
    JobsActions.updateJobSuccess,
    JobsActions.deleteJobSuccess,
    (state) => ({
      ...state,
      saving: false,
      error: null,
    }),
  ),
  on(
    JobsActions.addJobFailure,
    JobsActions.moveJobFailure,
    JobsActions.updateJobFailure,
    JobsActions.deleteJobFailure,
    (state, { error }) => ({
      ...state,
      saving: false,
      error,
    }),
  ),
  on(JobsActions.clearJobsState, () => initialState),
);
