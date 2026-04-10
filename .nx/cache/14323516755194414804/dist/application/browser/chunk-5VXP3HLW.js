import {
  createEntityAdapter
} from "./chunk-TIJC3XQI.js";
import {
  createAction,
  createReducer,
  on,
  props
} from "./chunk-G2253GUZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// src/app/pages/application/resumes/data/resumes.actions.ts
var createResume = createAction("[AI] Create", props());
var createResumeSuccess = createAction("[AI] Create Success", props());
var createResumeFailure = createAction("[AI] Create Failure", props());
var deleteResume = createAction("[Resume] Delete", props());
var deleteResumeSuccess = createAction("[Resume] Delete Success", props());
var deleteResumeFailure = createAction("[Resume] Delete Failure", props());
var saveAIResult = createAction("[AI] Save Result", props());
var saveAIResultSuccess = createAction("[AI] Save Result Success");
var saveAIResultFailure = createAction("[AI] Save Result Failure", props());
var loadResumes = createAction("[Resume] Load All");
var loadResumesSuccess = createAction("[Resume] Load All Success", props());
var loadResumesFailure = createAction("[Resume] Load All Failure", props());
var updateResume = createAction("[Resume] Update", props());
var updateResumeSuccess = createAction("[Resume] Update Success", props());
var updateResumeFailure = createAction("[Resume] Update Failure", props());
var saveResume = createAction("[Resume] Save", props());
var saveResumeSuccess = createAction("[Resume] Save Success", props());
var saveResumeFailure = createAction("[Resume] Save Failure", props());
var tailorResume = createAction("[Resume Tailor] Request", props());
var tailorResumeSuccess = createAction("[Resume Tailor] Success", props());
var tailorResumeFailure = createAction("[Resume Tailor] Failure", props());
var exportResumeToPdf = createAction("[Resume] Export To PDF", props());
var exportResumeToPdfSuccess = createAction("[Resume] Export To PDF Success");
var exportResumeToPdfFailure = createAction("[Resume] Export To PDF Failure", props());

// src/app/pages/application/resumes/data/resumes.reducer.ts
var ResumesStatus;
(function(ResumesStatus2) {
  ResumesStatus2["Init"] = "init";
  ResumesStatus2["Loading"] = "loading";
  ResumesStatus2["Loaded"] = "loaded";
  ResumesStatus2["Error"] = "error";
})(ResumesStatus || (ResumesStatus = {}));
var resumesAdapter = createEntityAdapter({
  selectId: (resume) => resume.id ? resume.id : "",
  sortComparer: (a, b) => a.personalInfo.fullName.localeCompare(b.personalInfo.fullName)
});
var { selectIds, selectEntities, selectAll, selectTotal } = resumesAdapter.getSelectors();
var initialState = resumesAdapter.getInitialState({
  resumes: [],
  status: ResumesStatus.Init,
  error: null,
  formValue: null,
  generating: false,
  saving: false,
  saveSucceeded: false,
  tailoring: false,
  tailorError: null
});
var resumesReducer = createReducer(initialState, on(createResume, (state) => __spreadProps(__spreadValues({}, state), {
  generating: true,
  error: null
})), on(createResumeSuccess, (state, { resume }) => __spreadProps(__spreadValues({}, state), {
  generating: false,
  error: null,
  generatedText: resume
})), on(createResumeFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  generating: false,
  error
})), on(deleteResume, (state) => __spreadProps(__spreadValues({}, state), {
  error: null
})), on(deleteResumeSuccess, (state, { resumeId }) => resumesAdapter.removeOne(resumeId, __spreadProps(__spreadValues({}, state), {
  error: null
}))), on(saveAIResultSuccess, (state) => __spreadProps(__spreadValues({}, state), {
  error: null
})), on(saveAIResultFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  error
})), on(loadResumes, (state) => __spreadProps(__spreadValues({}, state), {
  status: ResumesStatus.Loading,
  error: null
})), on(loadResumesSuccess, (state, { resumes }) => resumesAdapter.setAll(resumes, __spreadProps(__spreadValues({}, state), {
  status: ResumesStatus.Loaded,
  error: null
}))), on(loadResumesFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  status: ResumesStatus.Error,
  error
})), on(saveResume, (state) => __spreadProps(__spreadValues({}, state), {
  saving: true,
  saveSucceeded: false,
  error: null
})), on(saveResumeSuccess, (state) => __spreadProps(__spreadValues({}, state), {
  saving: false,
  saveSucceeded: true,
  error: null
})), on(saveResumeFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  saving: false,
  saveSucceeded: false,
  error
})), on(tailorResume, (state) => __spreadProps(__spreadValues({}, state), {
  tailoring: true,
  tailorError: null
})), on(tailorResumeSuccess, (state) => __spreadProps(__spreadValues({}, state), {
  tailoring: false,
  tailorError: null
})), on(tailorResumeFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  tailoring: false,
  tailorError: error
})));

export {
  createResume,
  createResumeSuccess,
  createResumeFailure,
  deleteResume,
  deleteResumeSuccess,
  deleteResumeFailure,
  saveAIResultSuccess,
  saveAIResultFailure,
  loadResumes,
  loadResumesSuccess,
  loadResumesFailure,
  saveResume,
  saveResumeSuccess,
  saveResumeFailure,
  tailorResume,
  tailorResumeSuccess,
  tailorResumeFailure,
  ResumesStatus,
  resumesAdapter,
  resumesReducer
};
//# sourceMappingURL=chunk-5VXP3HLW.js.map
