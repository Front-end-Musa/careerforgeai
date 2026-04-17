import { createReducer, on } from '@ngrx/store';
import * as CoverLetterActions from './cover-letter.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { CoverLetter } from '../../../../core/interfaces/cover-letter.interface';

type stateStatus = 'init' | 'loading' | 'loaded' | 'error';

export interface CoverLetterState extends EntityState<CoverLetter> {
  coverLetters: CoverLetter[];
  status: stateStatus;
  error: string | null;
  stale: boolean;
  loadedAt: string | null;
  // UI / AI
  formValue: any | null;
  generating: boolean;
  generatedText?: string;
}

export const coverLettersAdapter = createEntityAdapter<CoverLetter>({
  selectId: (coverLetter: CoverLetter) => (coverLetter.id ? coverLetter.id : ''),
  sortComparer: (a: CoverLetter, b: CoverLetter) => a.createdAt.toMillis() - b.createdAt.toMillis(),
});

export const initialState: CoverLetterState = coverLettersAdapter.getInitialState({
  coverLetters: [],
  status: 'init',
  error: null,
  stale: true,
  loadedAt: null,
  formValue: null,
  generating: false,
});

// REDUCER

export const coverLetterReducer = createReducer(
    initialState,
    on(CoverLetterActions.loadAllCoverLetters, (state) => ({
        ...state,
        status: 'loading',
        error: null,
    })),
    on(CoverLetterActions.loadAllCoverLettersSuccess, (state, { coverLetters }) => ({
        ...state,
        status: 'loaded',
        error: null,
        stale: false,
        loadedAt: new Date().toISOString(),
        coverLetters: coverLetters,
    })),
    on(CoverLetterActions.loadAllCoverLettersFailure, (state, { error }) => ({
        ...state,
        status: 'error',
        error: error,
        stale: true,
    })),

    on(CoverLetterActions.deleteCoverLetter, (state) => ({
        ...state,
        error: null,
    })),
    on(CoverLetterActions.deleteCoverLetterSuccess, (state, { id }) => ({
        ...state,
        error: null,
        stale: true,
        coverLetters: state.coverLetters.filter((cl) => cl.id !== id),
    })),
    on(CoverLetterActions.deleteCoverLetterFailure, (state, { error }) => ({
        ...state,
        error: error,
    })),

    on(CoverLetterActions.generateCoverLetter, (state) => ({
        ...state,
        generating: true,
        error: null,
    })),
    on(CoverLetterActions.generateCoverLetterSuccess, (state, { coverLetter }) => ({
        ...state,
        generating: false,
        error: null,
        generatedText: coverLetter,
    })),
    on(CoverLetterActions.generateCoverLetterFailure, (state, { error }) => ({
        ...state,
        generating: false,
        error: error,
    })),
);
