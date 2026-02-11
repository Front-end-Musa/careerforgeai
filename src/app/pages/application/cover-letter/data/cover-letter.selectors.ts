import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ResumesState } from "../../resumes/data/resumes.reducer";
import { coverLettersAdapter } from "./cover-letter.reducer";

export const selectResumeFeature = createFeatureSelector<ResumesState>('resumes');

export const { selectAll, selectEntities, selectIds, selectTotal } = coverLettersAdapter.getSelectors();

export const selectCoverLettersStatus = createSelector(
    selectResumeFeature,
    (state: ResumesState) => state.status,
);

export const selectIsLoading = createSelector(
    selectResumeFeature,
    (state: any) => state.resumes?.status === 'loading',
);

export const selectCoverLettersError = createSelector(
    selectResumeFeature,
    (state: ResumesState) => state.error,
);

export const selectCoverLettersFormValue = createSelector(
    selectResumeFeature,
    (state: ResumesState) => state.formValue,
);

export const selectCoverLettersGenerating = createSelector(
    selectResumeFeature,
    (state: ResumesState) => state.generating,
);

export const selectCoverLettersById = (id: string) =>
    createSelector(selectEntities, (entities) => entities[id]);

export const selectGeneratedCoverLetterText = createSelector(
    selectResumeFeature,
    (state: ResumesState) => state.generatedText,
);