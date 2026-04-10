import {
  addJob,
  clearJobsState,
  deleteJob,
  jobsAdapter,
  loadJobs,
  moveJob,
  updateJob
} from "./chunk-466HBO3F.js";
import {
  Store,
  createFeatureSelector,
  createSelector
} from "./chunk-G2253GUZ.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OFJZEGRZ.js";

// src/app/pages/application/job-tracker/data/jobs.selectors.ts
var selectJobsFeature = createFeatureSelector("jobs");
var { selectAll, selectEntities, selectIds, selectTotal } = jobsAdapter.getSelectors(selectJobsFeature);
var selectJobsStatus = createSelector(selectJobsFeature, (state) => state.status);
var selectJobsError = createSelector(selectJobsFeature, (state) => state.error);
var selectJobsSaving = createSelector(selectJobsFeature, (state) => state.saving);
var selectJobsByStatus = (status) => createSelector(selectAll, (jobs) => jobs.filter((job) => job.status === status).sort((a, b) => a.position - b.position));
var selectAppliedJobs = selectJobsByStatus("applied");
var selectInterviewingJobs = selectJobsByStatus("interviewing");
var selectOfferedJobs = selectJobsByStatus("offered");
var selectRejectedJobs = selectJobsByStatus("rejected");

// src/app/pages/application/job-tracker/data/jobs.facade.ts
var JobsFacade = class _JobsFacade {
  store = inject(Store);
  jobs$ = this.store.select(selectAll);
  appliedJobs$ = this.store.select(selectAppliedJobs);
  interviewingJobs$ = this.store.select(selectInterviewingJobs);
  offeredJobs$ = this.store.select(selectOfferedJobs);
  rejectedJobs$ = this.store.select(selectRejectedJobs);
  status$ = this.store.select(selectJobsStatus);
  saving$ = this.store.select(selectJobsSaving);
  error$ = this.store.select(selectJobsError);
  loadJobs() {
    this.store.dispatch(loadJobs());
  }
  addJob(job) {
    this.store.dispatch(addJob({ job }));
  }
  moveJob(jobs) {
    this.store.dispatch(moveJob({ jobs }));
  }
  updateJob(id, changes) {
    this.store.dispatch(updateJob({ id, changes }));
  }
  deleteJob(id) {
    this.store.dispatch(deleteJob({ id }));
  }
  clearState() {
    this.store.dispatch(clearJobsState());
  }
  static \u0275fac = function JobsFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobsFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobsFacade, factory: _JobsFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobsFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  JobsFacade
};
//# sourceMappingURL=chunk-VFRCJ3UL.js.map
