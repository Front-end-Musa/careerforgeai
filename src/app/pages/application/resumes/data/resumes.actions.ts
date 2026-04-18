import { createAction, props } from '@ngrx/store';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumeGenerationRequest, ResumeGenerationResult } from '../../../../core/interfaces/resume-generation.interface';

export const generateResume = createAction(
  '[AI] Generate Resume',
  props<{ request: ResumeGenerationRequest }>()
);

export const generateResumeSuccess = createAction(
  '[AI] Generate Resume Success',
  props<{ result: ResumeGenerationResult }>()
);

export const generateResumeFailure = createAction(
  '[AI] Generate Resume Failure',
  props<{ error: string }>()
);

export const clearResumeGenerationResult = createAction('[AI] Clear Resume Generation Result');

export const deleteResume = createAction(
  '[Resume] Delete',
  props<{ resumeId: string }>()
);

export const deleteResumeSuccess = createAction(
  '[Resume] Delete Success',
  props<{ resumeId: string }>()
);

export const deleteResumeFailure = createAction(
  '[Resume] Delete Failure',
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

export const tailorResume = createAction(
  '[Resume Tailor] Request',
  props<{
    resumeId: string;
    resume: Resume;
    companyName: string;
    position: string;
    jobDescription: string;
  }>()
);

export const tailorResumeSuccess = createAction(
  '[Resume Tailor] Success',
  props<{ resumeId: string; tailoredResume: Resume }>()
);

export const tailorResumeFailure = createAction(
  '[Resume Tailor] Failure',
  props<{ error: string }>()
);

export const exportResumeToPdf = createAction(
  '[Resume] Export To PDF',
  props<{ resumeId: string; formGroup: any }>()
);

export const exportResumeToPdfSuccess = createAction(
  '[Resume] Export To PDF Success'
);

export const exportResumeToPdfFailure = createAction(
  '[Resume] Export To PDF Failure',
  props<{ error: string }>()
);

export const downloadResume = createAction(
  '[Resume] Download',
  props<{ resumeId: string }>()
);

export const downloadResumeSuccess = createAction(
  '[Resume] Download Success',
  props<{
    resumeId: string;
    file: { fileName: string; contentType: string; content: string };
  }>()
);

export const downloadResumeFailure = createAction(
  '[Resume] Download Failure',
  props<{ resumeId: string; error: string }>()
);
