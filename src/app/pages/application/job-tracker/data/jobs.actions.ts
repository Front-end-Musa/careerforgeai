import { createAction, props } from '@ngrx/store';
import { Job, JobStatus } from '../../../../core/interfaces/job.interface';

export const loadJobs = createAction('[Jobs] Load');

export const loadJobsSuccess = createAction('[Jobs] Load Success', props<{ jobs: Job[] }>());

export const loadJobsFailure = createAction('[Jobs] Load Failure', props<{ error: string }>());

export const addJob = createAction(
  '[Jobs] Add',
  props<{ job: Pick<Job, 'title' | 'company' | 'status' | 'dateApplied' | 'position'> }>(),
);

export const addJobSuccess = createAction('[Jobs] Add Success', props<{ id: string }>());

export const addJobFailure = createAction('[Jobs] Add Failure', props<{ error: string }>());

export const moveJob = createAction(
  '[Jobs] Move',
  props<{ jobs: Array<{ id: string; status: JobStatus; position: number }> }>(),
);

export const moveJobSuccess = createAction('[Jobs] Move Success');

export const moveJobFailure = createAction('[Jobs] Move Failure', props<{ error: string }>());

export const updateJob = createAction(
  '[Jobs] Update',
  props<{ id: string; changes: Partial<Job> }>(),
);

export const updateJobSuccess = createAction('[Jobs] Update Success');

export const updateJobFailure = createAction('[Jobs] Update Failure', props<{ error: string }>());

export const deleteJob = createAction('[Jobs] Delete', props<{ id: string }>());

export const deleteJobSuccess = createAction('[Jobs] Delete Success');

export const deleteJobFailure = createAction('[Jobs] Delete Failure', props<{ error: string }>());

export const clearJobsState = createAction('[Jobs] Clear State');
