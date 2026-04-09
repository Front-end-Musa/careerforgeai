import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { JobService } from '../../../../core/services/job.service';
import * as JobsActions from './jobs.actions';
import { JobsEffects } from './jobs.effects';

describe('JobsEffects', () => {
  let actions$: Observable<unknown>;
  let effects: JobsEffects;
  let jobsServiceMock: jasmine.SpyObj<JobService>;

  beforeEach(() => {
    jobsServiceMock = jasmine.createSpyObj<JobService>('JobService', [
      'getJobsForUser',
      'createJob',
      'bulkUpdateJobPositions',
      'updateJob',
      'deleteJob',
    ]);

    TestBed.configureTestingModule({
      providers: [
        JobsEffects,
        provideMockActions(() => actions$),
        { provide: JobService, useValue: jobsServiceMock },
      ],
    });

    effects = TestBed.inject(JobsEffects);
  });

  it('should dispatch loadJobsSuccess for realtime load stream', (done) => {
    jobsServiceMock.getJobsForUser.and.returnValue(
      of([
        {
          id: 'job-1',
          userId: 'user-1',
          title: 'Frontend Engineer',
          company: 'Acme',
          status: 'applied',
          dateApplied: '2026-04-01',
          position: 0,
        },
      ]),
    );
    actions$ = of(JobsActions.loadJobs());

    effects.loadJobs$.subscribe({
      next: (action) => {
        expect(action.type).toBe(JobsActions.loadJobsSuccess.type);
        done();
      },
      error: done.fail,
    });
  });

  it('should dispatch addJobFailure when create fails', (done) => {
    jobsServiceMock.createJob.and.returnValue(throwError(() => new Error('create failed')));
    actions$ = of(
      JobsActions.addJob({
        job: {
          title: 'Frontend Engineer',
          company: 'Acme',
          status: 'applied',
          dateApplied: '2026-04-01',
          position: 0,
        },
      }),
    );

    effects.addJob$.subscribe({
      next: (action) => {
        expect(action).toEqual(JobsActions.addJobFailure({ error: 'create failed' }));
        done();
      },
      error: done.fail,
    });
  });
});
