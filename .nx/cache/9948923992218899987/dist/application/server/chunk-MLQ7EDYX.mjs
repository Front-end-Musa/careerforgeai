import './polyfills.server.mjs';
import {
  createEntityAdapter
} from "./chunk-NFQVK2VL.mjs";
import {
  createAction,
  createReducer,
  on,
  props
} from "./chunk-CAWULYCF.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TB3YAHZW.mjs";

// src/app/pages/application/cover-letter/data/cover-letter.actions.ts
var loadAllCoverLetters = createAction("[Cover Letter] Get All Cover Letters");
var loadAllCoverLettersSuccess = createAction("[Cover Letter] Get All Cover Letters Success", props());
var loadAllCoverLettersFailure = createAction("[Cover Letter] Get All Cover Letters Failure", props());
var deleteCoverLetter = createAction("[Cover Letter] Delete Cover Letter", props());
var deleteCoverLetterSuccess = createAction("[Cover Letter] Delete Cover Letter Success", props());
var deleteCoverLetterFailure = createAction("[Cover Letter] Delete Cover Letter Failure", props());
var generateCoverLetter = createAction("[Cover Letter] Generate Cover Letter", props());
var generateCoverLetterSuccess = createAction("[Cover Letter] Generate Cover Letter Success", props());
var generateCoverLetterFailure = createAction("[Cover Letter] Generate Cover Letter Failure", props());

// src/app/pages/application/cover-letter/data/cover-letter.reducer.ts
var coverLettersAdapter = createEntityAdapter({
  selectId: (coverLetter) => coverLetter.id ? coverLetter.id : "",
  sortComparer: (a, b) => a.createdAt.toMillis() - b.createdAt.toMillis()
});
var initialState = coverLettersAdapter.getInitialState({
  coverLetters: [],
  status: "init",
  error: null,
  formValue: null,
  generating: false
});
var coverLetterReducer = createReducer(initialState, on(loadAllCoverLetters, (state) => __spreadProps(__spreadValues({}, state), {
  status: "loading",
  error: null
})), on(loadAllCoverLettersSuccess, (state, { coverLetters }) => __spreadProps(__spreadValues({}, state), {
  status: "loaded",
  error: null,
  coverLetters
})), on(loadAllCoverLettersFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  status: "error",
  error
})), on(deleteCoverLetter, (state) => __spreadProps(__spreadValues({}, state), {
  error: null
})), on(deleteCoverLetterSuccess, (state, { id }) => __spreadProps(__spreadValues({}, state), {
  error: null,
  coverLetters: state.coverLetters.filter((cl) => cl.id !== id)
})), on(deleteCoverLetterFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  error
})), on(generateCoverLetter, (state) => __spreadProps(__spreadValues({}, state), {
  generating: true,
  error: null
})), on(generateCoverLetterSuccess, (state, { coverLetter }) => __spreadProps(__spreadValues({}, state), {
  generating: false,
  error: null,
  generatedText: coverLetter
})), on(generateCoverLetterFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  generating: false,
  error
})));

export {
  loadAllCoverLetters,
  loadAllCoverLettersSuccess,
  loadAllCoverLettersFailure,
  deleteCoverLetter,
  generateCoverLetter,
  generateCoverLetterSuccess,
  generateCoverLetterFailure,
  coverLettersAdapter,
  coverLetterReducer
};
//# sourceMappingURL=chunk-MLQ7EDYX.mjs.map
