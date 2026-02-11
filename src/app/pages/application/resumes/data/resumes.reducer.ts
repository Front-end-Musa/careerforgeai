import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { createReducer, on } from '@ngrx/store';
import * as ResumesActions from '../data/resumes.actions';

type stateStatus = 'init' | 'loading' | 'loaded' | 'error';

export interface ResumesState extends EntityState<Resume> {
  resumes: Resume[];
  status: stateStatus;
  error: string | null;
  // UI / AI
  formValue: any | null;
  generating: boolean;
  generatedText?: string;
}

export const resumesAdapter: EntityAdapter<Resume> = createEntityAdapter<Resume>({
  selectId: (resume: Resume) => (resume.id ? resume.id : ''),
  sortComparer: (a: Resume, b: Resume) =>
    a.personalInfo.fullName.localeCompare(b.personalInfo.fullName),
});

export const { selectIds, selectEntities, selectAll, selectTotal } = resumesAdapter.getSelectors();

export const initialState: ResumesState = resumesAdapter.getInitialState({
  resumes: [],
  status: 'init',
  error: null,
  formValue: null,
  generating: false,
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
    status: 'loading',
    error: null,
  })),

  on(ResumesActions.loadResumesSuccess, (state, { resumes }) =>
    resumesAdapter.setAll(resumes, {
      ...state,
      status: 'loaded',
      error: null,
    }),
  ),

  on(ResumesActions.loadResumesFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error,
  })),
);
