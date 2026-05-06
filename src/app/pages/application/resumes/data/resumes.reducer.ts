import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { createReducer, on } from '@ngrx/store';
import * as ResumesActions from '../data/resumes.actions';
import { ResumeGenerationResult } from '../../../../core/interfaces/resume-generation.interface';

export enum ResumesStatus {
  Init = 'init',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

export interface ResumesState extends EntityState<Resume> {
  resumes: Resume[];
  status: ResumesStatus;
  error: string | null;
  stale: boolean;
  loadedAt: string | null;
  // UI / AI
  formValue: any | null;
  generating: boolean;
  generatedResult: ResumeGenerationResult | null;
  saving: boolean;
  saveSucceeded: boolean;
  tailoring: boolean;
  tailorError: string | null;
  tailoredResumeId: string | null;
  downloadingResumeId: string | null;
  downloadError: string | null;
  exporting: boolean;
  exportError: string | null;
}

export const resumesAdapter: EntityAdapter<Resume> = createEntityAdapter<Resume>({
  selectId: (resume: Resume) => (resume.id ? resume.id : ''),
  sortComparer: (a: Resume, b: Resume) =>
    a.personalInfo.fullName.localeCompare(b.personalInfo.fullName),
});

export const { selectIds, selectEntities, selectAll, selectTotal } = resumesAdapter.getSelectors();

export const initialState: ResumesState = resumesAdapter.getInitialState({
  resumes: [],
  status: ResumesStatus.Init,
  error: null,
  stale: true,
  loadedAt: null,
  formValue: null,
  generating: false,
  generatedResult: null,
  saving: false,
  saveSucceeded: false,
  tailoring: false,
  tailorError: null,
  tailoredResumeId: null,
  downloadingResumeId: null,
  downloadError: null,
  exporting: false,
  exportError: null,
});


// REDUCER

export const resumesReducer = createReducer(
  initialState,

  on(ResumesActions.generateResume, (state) => ({
    ...state,
    generating: true,
    error: null,
    generatedResult: null,
  })),

  on(ResumesActions.generateResumeSuccess, (state, { result }) => ({
    ...state,
    generating: false,
    error: null,
    generatedResult: result,
  })),

  on(ResumesActions.generateResumeFailure, (state, { error }) => ({
    ...state,
    generating: false,
    error: error,
  })),

  on(ResumesActions.clearResumeGenerationResult, (state) => ({
    ...state,
    generatedResult: null,
  })),

  on(ResumesActions.deleteResume, (state) => ({
    ...state,
    error: null,
  })),

  on(ResumesActions.deleteResumeSuccess, (state, { resumeId }) =>
    resumesAdapter.removeOne(resumeId, {
      ...state,
      error: null,
    }),
  ),

  on(ResumesActions.loadResumes, (state) => ({
    ...state,
    status: ResumesStatus.Loading,
    error: null,
  })),

  on(ResumesActions.loadResumesSuccess, (state, { resumes }) =>
    resumesAdapter.setAll(resumes, {
      ...state,
      status: ResumesStatus.Loaded,
      error: null,
      stale: false,
      loadedAt: new Date().toISOString(),
    }),
  ),

  on(ResumesActions.loadResumesFailure, (state, { error }) => ({
    ...state,
    status: ResumesStatus.Error,
    error: error,
    stale: true,
  })),

  on(ResumesActions.saveResume, (state) => ({
    ...state,
    saving: true,
    saveSucceeded: false,
    error: null,
  })),

  on(ResumesActions.saveResumeSuccess, (state) => ({
    ...state,
    saving: false,
    saveSucceeded: true,
    error: null,
    stale: true,
  })),

  on(ResumesActions.saveResumeFailure, (state, { error }) => ({
    ...state,
    saving: false,
    saveSucceeded: false,
    error,
  })),

  on(ResumesActions.tailorResume, (state) => ({
    ...state,
    tailoring: true,
    tailorError: null,
    tailoredResumeId: null,
  })),

  on(ResumesActions.tailorResumeSuccess, (state, { tailoredResumeId }) => ({
    ...state,
    tailoring: false,
    tailorError: null,
    tailoredResumeId,
    stale: true,
  })),

  on(ResumesActions.tailorResumeFailure, (state, { error }) => ({
    ...state,
    tailoring: false,
    tailorError: error,
    tailoredResumeId: null,
  })),

  on(ResumesActions.downloadResume, (state, { resumeId }) => ({
    ...state,
    downloadingResumeId: resumeId,
    downloadError: null,
  })),

  on(ResumesActions.downloadResumeSuccess, (state) => ({
    ...state,
    downloadingResumeId: null,
    downloadError: null,
  })),

  on(ResumesActions.downloadResumeFailure, (state, { error }) => ({
    ...state,
    downloadingResumeId: null,
    downloadError: error,
  })),

  on(ResumesActions.exportResumeToPdf, (state) => ({
    ...state,
    exporting: true,
    exportError: null,
  })),

  on(ResumesActions.exportResumeToPdfSuccess, (state) => ({
    ...state,
    exporting: false,
    exportError: null,
  })),

  on(ResumesActions.exportResumeToPdfFailure, (state, { error }) => ({
    ...state,
    exporting: false,
    exportError: error,
  })),
);
