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
  stale: boolean;
  loadedAt: string | null;
}

export const jobsAdapter: EntityAdapter<Job> = createEntityAdapter<Job>({
  selectId: (job) => job.id ?? '',
  sortComparer: (a, b) => a.position - b.position,
});

export const initialState: JobsState = jobsAdapter.getInitialState({
  status: JobsStatus.Init,
  error: null,
  saving: false,
  stale: true,
  loadedAt: null,
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
      stale: false,
      loadedAt: new Date().toISOString(),
    }),
  ),
  on(JobsActions.loadJobsFailure, (state, { error }) => ({
    ...state,
    status: JobsStatus.Error,
    error,
    stale: true,
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
      stale: true,
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
  on(JobsActions.deleteJob, (state) => ({
    ...state,
    status: JobsStatus.Loading,
    error: null,
  })),
  on(JobsActions.deleteJobSuccess, (state, { id }) =>
    jobsAdapter.removeOne(id, {
      ...state,
      status: JobsStatus.Loaded,
      saving: false,
      error: null,
      stale: true,
    }),
  ),
  on(JobsActions.deleteJobFailure, (state, { error }) => ({
    ...state,
    status: JobsStatus.Error,
    saving: false,
    error,
  })),
);
