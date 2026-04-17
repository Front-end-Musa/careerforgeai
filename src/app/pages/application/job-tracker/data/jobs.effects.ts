import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { JobService } from '../../../../core/services/job.service';
import { logoutSuccess } from '../../../auth/data/auth.actions';
import * as JobsActions from './jobs.actions';
import { ActionTraceService } from '../../../../core/state/debug/action-trace.service';

@Injectable()
export class JobsEffects {
  private actions$ = inject(Actions);
  private jobsService = inject(JobService);
  private trace = inject(ActionTraceService);

  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.loadJobs),
      tap((action) => this.trace.traceEffect(action, 'JobsEffects.loadJobs$')),
      exhaustMap(() =>
        this.jobsService.getJobsForUser().pipe(
          map((jobs) => {
            const nextAction = JobsActions.loadJobsSuccess({ jobs });
            this.trace.traceEffect(nextAction, 'JobsEffects.loadJobs$.success');
            return nextAction;
          }),
          catchError((error) =>
            of(JobsActions.loadJobsFailure({ error: this.toError(error) })).pipe(
              tap((action) => this.trace.traceEffect(action, 'JobsEffects.loadJobs$.failure')),
            ),
          ),
        ),
      ),
    ),
  );

  addJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.addJob),
      tap((action) => this.trace.traceEffect(action, 'JobsEffects.addJob$')),
      exhaustMap(({ job }) =>
        this.jobsService.createJob(job).pipe(
          map((id) => {
            const nextAction = JobsActions.addJobSuccess({ id });
            this.trace.traceEffect(nextAction, 'JobsEffects.addJob$.success');
            return nextAction;
          }),
          catchError((error) =>
            of(JobsActions.addJobFailure({ error: this.toError(error) })).pipe(
              tap((action) => this.trace.traceEffect(action, 'JobsEffects.addJob$.failure')),
            ),
          ),
        ),
      ),
    ),
  );

  moveJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.moveJob),
      tap((action) => this.trace.traceEffect(action, 'JobsEffects.moveJob$')),
      exhaustMap(({ jobs }) =>
        this.jobsService.bulkUpdateJobPositions(jobs).pipe(
          map(() => {
            const nextAction = JobsActions.moveJobSuccess();
            this.trace.traceEffect(nextAction, 'JobsEffects.moveJob$.success');
            return nextAction;
          }),
          catchError((error) =>
            of(JobsActions.moveJobFailure({ error: this.toError(error) })).pipe(
              tap((action) => this.trace.traceEffect(action, 'JobsEffects.moveJob$.failure')),
            ),
          ),
        ),
      ),
    ),
  );

  updateJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.updateJob),
      tap((action) => this.trace.traceEffect(action, 'JobsEffects.updateJob$')),
      exhaustMap(({ id, changes }) =>
        this.jobsService.updateJob(id, changes).pipe(
          map(() => {
            const nextAction = JobsActions.updateJobSuccess();
            this.trace.traceEffect(nextAction, 'JobsEffects.updateJob$.success');
            return nextAction;
          }),
          catchError((error) =>
            of(JobsActions.updateJobFailure({ error: this.toError(error) })).pipe(
              tap((action) => this.trace.traceEffect(action, 'JobsEffects.updateJob$.failure')),
            ),
          ),
        ),
      ),
    ),
  );

  deleteJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.deleteJob),
      tap((action) => this.trace.traceEffect(action, 'JobsEffects.deleteJob$')),
      exhaustMap(({ id }) =>
        this.jobsService.deleteJob(id).pipe(
          map((id) => {
            const nextAction = JobsActions.deleteJobSuccess({ id });
            this.trace.traceEffect(nextAction, 'JobsEffects.deleteJob$.success');
            return nextAction;
          }),
          catchError((error) =>
            of(JobsActions.deleteJobFailure({ error: this.toError(error) })).pipe(
              tap((action) => this.trace.traceEffect(action, 'JobsEffects.deleteJob$.failure')),
            ),
          ),
        ),
      ),
    ),
  );

  refreshAfterMutation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        JobsActions.addJobSuccess,
        JobsActions.moveJobSuccess,
        JobsActions.updateJobSuccess,
        JobsActions.deleteJobSuccess,
      ),
      map(() => JobsActions.loadJobs()),
    ),
  );

  clearOnLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutSuccess),
      map(() => JobsActions.clearJobsState()),
    ),
  );

  private toError(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
  }
}
