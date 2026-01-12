import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResumesState } from './resumes.reducer';

export const selectResumesState = createFeatureSelector<ResumesState>('resumes');

export const selectAllResumes = createSelector(
    selectResumesState,
    (state) => state.resumes
);

export const selectResumesLoading = createSelector(selectResumesState, (state) => state.status === 'loading');

export const selectResumesError = createSelector(
    selectResumesState,
    (state) => state.error
);

export const selectResumeById = (id: string) =>
    createSelector(
        selectAllResumes,
        (resumes) => resumes?.find((resume: any) => resume.id === id)
    );