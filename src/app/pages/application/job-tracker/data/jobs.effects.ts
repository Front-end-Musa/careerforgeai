import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { JobService } from '../../../../core/services/job.service';
import { logoutSuccess } from '../../../auth/data/auth.actions';
import * as JobsActions from './jobs.actions';

@Injectable()
export class JobsEffects {
  private actions$ = inject(Actions);
  private jobsService = inject(JobService);

  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.loadJobs),
      switchMap(() =>
        this.jobsService.getJobsForUser().pipe(
          map((jobs) => JobsActions.loadJobsSuccess({ jobs })),
          catchError((error) => of(JobsActions.loadJobsFailure({ error: this.toError(error) }))),
        ),
      ),
    ),
  );

  addJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.addJob),
      switchMap(({ job }) =>
        this.jobsService.createJob(job).pipe(
          map((id) => JobsActions.addJobSuccess({ id })),
          catchError((error) => of(JobsActions.addJobFailure({ error: this.toError(error) }))),
        ),
      ),
    ),
  );

  moveJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.moveJob),
      switchMap(({ jobs }) =>
        this.jobsService.bulkUpdateJobPositions(jobs).pipe(
          map(() => JobsActions.moveJobSuccess()),
          catchError((error) => of(JobsActions.moveJobFailure({ error: this.toError(error) }))),
        ),
      ),
    ),
  );

  updateJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.updateJob),
      switchMap(({ id, changes }) =>
        this.jobsService.updateJob(id, changes).pipe(
          map(() => JobsActions.updateJobSuccess()),
          catchError((error) => of(JobsActions.updateJobFailure({ error: this.toError(error) }))),
        ),
      ),
    ),
  );

  deleteJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.deleteJob),
      switchMap(({ id }) =>
        this.jobsService.deleteJob(id).pipe(
          map(() => JobsActions.deleteJobSuccess()),
          catchError((error) => of(JobsActions.deleteJobFailure({ error: this.toError(error) }))),
        ),
      ),
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
