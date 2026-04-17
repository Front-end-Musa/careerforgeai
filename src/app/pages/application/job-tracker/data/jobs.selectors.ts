import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobStatus } from '../../../../core/interfaces/job.interface';
import { jobsAdapter, JobsState } from './jobs.reducer';

export const selectJobsFeature = createFeatureSelector<JobsState>('jobs');

export const { selectAll, selectEntities, selectIds, selectTotal } =
  jobsAdapter.getSelectors(selectJobsFeature);

export const selectJobsStatus = createSelector(selectJobsFeature, (state) => state.status);

export const selectJobsStale = createSelector(selectJobsFeature, (state) => state.stale);

export const selectJobsError = createSelector(selectJobsFeature, (state) => state.error);

export const selectJobsSaving = createSelector(selectJobsFeature, (state) => state.saving);

export const selectJobsByStatus = (status: JobStatus) =>
  createSelector(selectAll, (jobs) =>
    jobs
      .filter((job) => job.status === status)
      .sort((a, b) => a.position - b.position),
  );

export const selectAppliedJobs = selectJobsByStatus('applied');
export const selectInterviewingJobs = selectJobsByStatus('interviewing');
export const selectOfferedJobs = selectJobsByStatus('offered');
export const selectRejectedJobs = selectJobsByStatus('rejected');
