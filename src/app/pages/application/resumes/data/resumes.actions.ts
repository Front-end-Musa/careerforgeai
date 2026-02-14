import { createAction, props } from '@ngrx/store';
import { Resume } from '../../../../core/interfaces/resumes.interface';

export const createResume = createAction('[AI] Create', props<{ resumeText: string }>());

export const createResumeSuccess = createAction(
  '[AI] Create Success',
  props<{ resume: string }>()
);

export const createResumeFailure = createAction(
  '[AI] Create Failure',
  props<{ error: string }>()
);

export const saveAIResult = createAction(
  '[AI] Save Result',
  props<{ userId: string; result: Resume }>()
);

export const saveAIResultSuccess = createAction(
  '[AI] Save Result Success'
);

export const saveAIResultFailure = createAction(
  '[AI] Save Result Failure',
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

export const saveResume = createAction(
  '[Resume] Save',
  props<{ resume: Partial<Resume>; resumeId?: string | null }>()
);

export const saveResumeSuccess = createAction(
  '[Resume] Save Success',
  props<{ resumeId?: string }>()
);

export const saveResumeFailure = createAction(
  '[Resume] Save Failure',
  props<{ error: string }>()
);
