import {
  createResume,
  deleteResume,
  loadResumes,
  resumesAdapter,
  saveResume,
  tailorResume
} from "./chunk-5VXP3HLW.js";
import {
  NotificationsService
} from "./chunk-EYC2LAWI.js";
import {
  ResumeService
} from "./chunk-E7Z7URHS.js";
import {
  Store,
  createFeatureSelector,
  createSelector
} from "./chunk-G2253GUZ.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  startWith,
  ɵɵdefineInjectable
} from "./chunk-OFJZEGRZ.js";

// src/app/pages/application/resumes/data/resumes.selectors.ts
var selectResumesFeature = createFeatureSelector("resumes");
var { selectIds, selectEntities, selectAll, selectTotal } = resumesAdapter.getSelectors();
var selectResumesStatus = createSelector(selectResumesFeature, (state) => state.status);
var selectIsLoading = createSelector(selectResumesFeature, (state) => state.resumes?.status === "loading");
var selectResumesError = createSelector(selectResumesFeature, (state) => state.error);
var selectResumesFormValue = createSelector(selectResumesFeature, (state) => state.formValue);
var selectResumesGenerating = createSelector(selectResumesFeature, (state) => state.generating);
var selectGeneratedResumeText = createSelector(selectResumesFeature, (state) => state.generatedText);
var selectIsSaving = createSelector(selectResumesFeature, (state) => state.saving);
var selectSaveSucceeded = createSelector(selectResumesFeature, (state) => state.saveSucceeded);
var selectIsTailoring = createSelector(selectResumesFeature, (state) => state.tailoring);
var selectTailorError = createSelector(selectResumesFeature, (state) => state.tailorError);

// src/app/pages/application/resumes/data/resumes.facade.ts
var ResumesFacade = class _ResumesFacade {
  store = inject(Store);
  resumeService = inject(ResumeService);
  notificationsService = inject(NotificationsService);
  selectResumesState = createFeatureSelector("resumes");
  selectAllResumes = resumesAdapter.getSelectors(this.selectResumesState).selectAll;
  resumes$ = this.store.select(this.selectAllResumes).pipe(startWith([]));
  loading$ = this.store.select(selectIsLoading);
  saving$ = this.store.select(selectIsSaving);
  saveSucceeded$ = this.store.select(selectSaveSucceeded);
  tailoring$ = this.store.select(selectIsTailoring);
  tailorError$ = this.store.select(selectTailorError);
  status$ = this.store.select(selectResumesStatus);
  error$ = this.store.select(selectResumesError);
  loadResumes() {
    this.store.dispatch(loadResumes());
  }
  generateResume(resumeText) {
    this.store.dispatch(createResume({ resumeText }));
  }
  saveResumeData(resume, resumeId) {
    this.store.dispatch(saveResume({ resume, resumeId }));
  }
  tailorResumeData(resumeId, resume, companyName, position, jobDescription) {
    this.store.dispatch(tailorResume({ resumeId, resume, companyName, position, jobDescription }));
  }
  getResumeById(id) {
    return this.resumeService.getResumeById(id);
  }
  exportResumeToPdf(formGroup) {
    return this.resumeService.exportToPdf(formGroup);
  }
  deleteResume(resumeId) {
    this.store.dispatch(deleteResume({ resumeId }));
  }
  static \u0275fac = function ResumesFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumesFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ResumesFacade, factory: _ResumesFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumesFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ResumesFacade
};
//# sourceMappingURL=chunk-JWEDNJBE.js.map
