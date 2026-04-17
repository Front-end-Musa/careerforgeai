import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coverLettersAdapter, CoverLetterState } from "./cover-letter.reducer";

export const selectCoverLetterFeature = createFeatureSelector<CoverLetterState>('coverLetters');

export const { selectAll, selectEntities, selectIds, selectTotal } = coverLettersAdapter.getSelectors();

export const selectCoverLettersStatus = createSelector(
    selectCoverLetterFeature,
    (state: CoverLetterState) => state.status,
);

export const selectCoverLettersStale = createSelector(
    selectCoverLetterFeature,
    (state: CoverLetterState) => state.stale,
);

export const selectIsLoading = createSelector(
    selectCoverLetterFeature,
    (state: CoverLetterState) => state.status === 'loading',
);

export const selectCoverLettersError = createSelector(
    selectCoverLetterFeature,
    (state: CoverLetterState) => state.error,
);

export const selectCoverLettersFormValue = createSelector(
    selectCoverLetterFeature,
    (state: CoverLetterState) => state.formValue,
);

export const selectCoverLettersGenerating = createSelector(
    selectCoverLetterFeature,
    (state: CoverLetterState) => state.generating,
);

export const selectCoverLettersById = (id: string) =>
    createSelector(selectEntities, (entities) => entities[id]);

export const selectGeneratedCoverLetterText = createSelector(
    selectCoverLetterFeature,
    (state: CoverLetterState) => state.generatedText ?? '',
);
