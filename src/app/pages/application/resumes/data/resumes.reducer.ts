import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { createReducer, on } from '@ngrx/store';
import * as ResumesActions from '../data/resumes.actions';

type stateStatus = 'init' | 'loading' | 'loaded' | 'error';

export interface ResumesState extends EntityState<Resume> {
  status: stateStatus;
  error: string | null;
  // UI / AI
  formValue: any | null;
  generating: boolean;
}

export const resumesAdapter: EntityAdapter<Resume> = createEntityAdapter<Resume>({
  selectId: (resume) => resume.id,
  sortComparer: false,
});

export const initialState: ResumesState = resumesAdapter.getInitialState({
  status: 'init',
  error: null,
  formValue: null,
  generating: false,
});

// REDUCER

export const resumesReducer = createReducer(
  initialState,

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
    })
  ),

  on(ResumesActions.loadResumesFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error
  }))
);
