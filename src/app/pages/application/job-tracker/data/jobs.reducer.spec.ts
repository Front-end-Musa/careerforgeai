import { Job } from '../../../../core/interfaces/job.interface';
import * as JobsActions from './jobs.actions';
import { jobsReducer, JobsStatus, initialState } from './jobs.reducer';

describe('jobsReducer', () => {
  const jobs: Job[] = [
    {
      id: 'job-1',
      userId: 'user-1',
      title: 'Frontend Engineer',
      company: 'Acme',
      status: 'applied',
      dateApplied: '2026-04-01',
      position: 0,
    },
    {
      id: 'job-2',
      userId: 'user-1',
      title: 'UI Engineer',
      company: 'Globex',
      status: 'interviewing',
      dateApplied: '2026-04-02',
      position: 0,
    },
  ];

  it('should set loading state on loadJobs', () => {
    const state = jobsReducer(initialState, JobsActions.loadJobs());

    expect(state.status).toBe(JobsStatus.Loading);
    expect(state.error).toBeNull();
  });

  it('should set all jobs on loadJobsSuccess', () => {
    const loadingState = jobsReducer(initialState, JobsActions.loadJobs());
    const state = jobsReducer(loadingState, JobsActions.loadJobsSuccess({ jobs }));

    expect(state.status).toBe(JobsStatus.Loaded);
    expect(state.ids.length).toBe(2);
    expect(state.entities['job-1']?.title).toBe('Frontend Engineer');
  });

  it('should set error on loadJobsFailure', () => {
    const state = jobsReducer(initialState, JobsActions.loadJobsFailure({ error: 'boom' }));

    expect(state.status).toBe(JobsStatus.Error);
    expect(state.error).toBe('boom');
  });

  it('should toggle saving on moveJob and moveJobSuccess', () => {
    const movingState = jobsReducer(
      initialState,
      JobsActions.moveJob({ jobs: [{ id: 'job-1', status: 'offered', position: 0 }] }),
    );
    const savedState = jobsReducer(movingState, JobsActions.moveJobSuccess());

    expect(movingState.saving).toBeTrue();
    expect(savedState.saving).toBeFalse();
  });

  it('should reset to initial state on clearJobsState', () => {
    const loadedState = jobsReducer(initialState, JobsActions.loadJobsSuccess({ jobs }));
    const resetState = jobsReducer(loadedState, JobsActions.clearJobsState());

    expect(resetState).toEqual(initialState);
  });
});
