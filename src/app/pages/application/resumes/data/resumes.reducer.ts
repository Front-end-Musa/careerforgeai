import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { createReducer, on } from '@ngrx/store';
import * as ResumesActions from '../data/resumes.actions';

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
  // UI / AI
  formValue: any | null;
  generating: boolean;
  generatedText?: string;
  saving: boolean;
  saveSucceeded: boolean;
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
  formValue: null,
  generating: false,
  saving: false,
  saveSucceeded: false,
});


// REDUCER

export const resumesReducer = createReducer(
  initialState,

  on(ResumesActions.createResume, (state) => ({
    ...state,
    generating: true,
    error: null,
  })),

  on(ResumesActions.createResumeSuccess, (state, { resume }) => ({
    ...state,
    generating: false,
    error: null,
    generatedText: resume,
  })),

  on(ResumesActions.createResumeFailure, (state, { error }) => ({
    ...state,
    generating: false,
    error: error,
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

  on(ResumesActions.saveAIResultSuccess, (state) => ({
    ...state,
    error: null,
  })),

  on(ResumesActions.saveAIResultFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

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
    }),
  ),

  on(ResumesActions.loadResumesFailure, (state, { error }) => ({
    ...state,
    status: ResumesStatus.Error,
    error: error,
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
  })),

  on(ResumesActions.saveResumeFailure, (state, { error }) => ({
    ...state,
    saving: false,
    saveSucceeded: false,
    error,
  })),
);
