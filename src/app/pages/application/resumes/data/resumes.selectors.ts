import { createFeatureSelector, createSelector } from '@ngrx/store';
import { resumesAdapter, ResumesState } from './resumes.reducer';

export const selectResumesFeature = createFeatureSelector<ResumesState>('resumes');

export const { selectIds, selectEntities, selectAll, selectTotal } = resumesAdapter.getSelectors();

export const selectResumesStatus = createSelector(
  selectResumesFeature,
  (state: ResumesState) => state.status,
);

export const selectIsLoading = createSelector(
  selectResumesFeature,
  (state: any) => state.resumes?.status === 'loading',
);

export const selectResumesError = createSelector(
  selectResumesFeature,
  (state: ResumesState) => state.error,
);

export const selectResumesFormValue = createSelector(
  selectResumesFeature,
  (state: ResumesState) => state.formValue,
);

export const selectResumesGenerating = createSelector(
  selectResumesFeature,
  (state: ResumesState) => state.generating,
);

export const selectResumeById = (id: string) =>
  createSelector(selectEntities, (entities) => entities[id]);

export const selectGeneratedResumeText = createSelector(
  selectResumesFeature,
  (state: ResumesState) => state.generatedText,
);

export const selectIsSaving = createSelector(
  selectResumesFeature,
  (state: ResumesState) => state.saving,
);

export const selectSaveSucceeded = createSelector(
  selectResumesFeature,
  (state: ResumesState) => state.saveSucceeded,
);

export const selectIsTailoring = createSelector(
  selectResumesFeature,
  (state: ResumesState) => state.tailoring,
);

export const selectTailorError = createSelector(
  selectResumesFeature,
  (state: ResumesState) => state.tailorError,
);
