import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ResumeService } from '../../../../core/services/resume.service';
import * as resumesActions from './resumes.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ResumeEffects {
  actions$ = inject(Actions);
  apiService = inject(ResumeService);

  loadResumes = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.loadResumes),
      switchMap(() =>
        this.apiService.getResumesForUser().pipe(
          map((resumes) => resumesActions.loadResumesSuccess({ resumes })),
          catchError((error) => of(resumesActions.loadResumesFailure({ error })))
        )
      )
    )
  );
}
