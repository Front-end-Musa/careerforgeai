import { createAction, props } from '@ngrx/store';
import { Resume } from '../../../../core/interfaces/resumes.interface';

export const createResume = createAction('[Resume] Create', props<{ resume: Resume }>());

export const createResumeSuccess = createAction(
  '[Resume] Create Success',
  props<{ resume: Resume }>()
);

export const createResumeFailure = createAction(
  '[Resume] Create Failure',
  props<{ error: string }>()
);

export const loadResumes = createAction('[Resume] Load All');

export const loadResumesSuccess = createAction(
  '[Resume] Load All Success',
  props<{ resumes: Resume[] }>()
);

export const loadResumesFailure = createAction(
  '[Resume] Load All Failure',
  props<{ error: string }>()
);

export const updateResume = createAction(
  '[Resume] Update',
  props<{ resumeId: string; changes: Partial<Resume> }>()
);

export const updateResumeSuccess = createAction(
  '[Resume] Update Success',
  props<{ resumeId: string; changes: Partial<Resume> }>()
);

export const updateResumeFailure = createAction(
  '[Resume] Update Failure',
  props<{ error: string }>()
);
