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

// src/app/pages/application/job-tracker/data/jobs.actions.ts
var loadJobs = createAction("[Jobs] Load");
var loadJobsSuccess = createAction("[Jobs] Load Success", props());
var loadJobsFailure = createAction("[Jobs] Load Failure", props());
var addJob = createAction("[Jobs] Add", props());
var addJobSuccess = createAction("[Jobs] Add Success", props());
var addJobFailure = createAction("[Jobs] Add Failure", props());
var moveJob = createAction("[Jobs] Move", props());
var moveJobSuccess = createAction("[Jobs] Move Success");
var moveJobFailure = createAction("[Jobs] Move Failure", props());
var updateJob = createAction("[Jobs] Update", props());
var updateJobSuccess = createAction("[Jobs] Update Success");
var updateJobFailure = createAction("[Jobs] Update Failure", props());
var deleteJob = createAction("[Jobs] Delete", props());
var deleteJobSuccess = createAction("[Jobs] Delete Success", props());
var deleteJobFailure = createAction("[Jobs] Delete Failure", props());
var clearJobsState = createAction("[Jobs] Clear State");

// src/app/pages/application/job-tracker/data/jobs.reducer.ts
var JobsStatus;
(function(JobsStatus2) {
  JobsStatus2["Init"] = "init";
  JobsStatus2["Loading"] = "loading";
  JobsStatus2["Loaded"] = "loaded";
  JobsStatus2["Error"] = "error";
})(JobsStatus || (JobsStatus = {}));
var jobsAdapter = createEntityAdapter({
  selectId: (job) => job.id ?? "",
  sortComparer: (a, b) => a.position - b.position
});
var initialState = jobsAdapter.getInitialState({
  status: JobsStatus.Init,
  error: null,
  saving: false
});
var jobsReducer = createReducer(initialState, on(loadJobs, (state) => __spreadProps(__spreadValues({}, state), {
  status: JobsStatus.Loading,
  error: null
})), on(loadJobsSuccess, (state, { jobs }) => jobsAdapter.setAll(jobs, __spreadProps(__spreadValues({}, state), {
  status: JobsStatus.Loaded,
  error: null
}))), on(loadJobsFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  status: JobsStatus.Error,
  error
})), on(addJob, moveJob, updateJob, deleteJob, (state) => __spreadProps(__spreadValues({}, state), {
  saving: true,
  error: null
})), on(addJobSuccess, moveJobSuccess, updateJobSuccess, deleteJobSuccess, (state) => __spreadProps(__spreadValues({}, state), {
  saving: false,
  error: null
})), on(addJobFailure, moveJobFailure, updateJobFailure, deleteJobFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  saving: false,
  error
})), on(clearJobsState, () => initialState), on(deleteJob, (state) => __spreadProps(__spreadValues({}, state), {
  status: JobsStatus.Loading,
  error: null
})), on(deleteJobSuccess, (state, { id }) => jobsAdapter.removeOne(id, __spreadProps(__spreadValues({}, state), {
  status: JobsStatus.Loaded,
  error: null
}))), on(deleteJobFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  status: JobsStatus.Error,
  error
})));

export {
  loadJobs,
  loadJobsSuccess,
  loadJobsFailure,
  addJob,
  addJobSuccess,
  addJobFailure,
  moveJob,
  moveJobSuccess,
  moveJobFailure,
  updateJob,
  updateJobSuccess,
  updateJobFailure,
  deleteJob,
  deleteJobSuccess,
  deleteJobFailure,
  clearJobsState,
  jobsAdapter,
  jobsReducer
};
//# sourceMappingURL=chunk-466HBO3F.js.map
