import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ResumeService } from '../../../../core/services/resume.service';
import * as resumesActions from './resumes.actions';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { AiAgentService } from '../../../../core/services/ai-agent.service';

@Injectable()
export class ResumeEffects {
  actions$ = inject(Actions);
  apiService = inject(ResumeService);
  aiService = inject(AiAgentService);

  createResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.createResume),
      take(1),
      switchMap(({ resumeText }) =>
        this.aiService.generateResume(resumeText).pipe(
          map((resume) => resumesActions.createResumeSuccess({ resume })),
          catchError((error) => of(resumesActions.createResumeFailure({ error }))),
        ),
      ),
    ), 
  );

  saveAIResultEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.createResumeSuccess),
      switchMap((action) => 
        this.aiService.saveAIResult(action.resume).then(() => resumesActions.saveAIResultSuccess())
      ),
      catchError((error) => of(resumesActions.saveAIResultFailure({ error }))),
    ),
  );

  loadResumes = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.loadResumes),
      switchMap(() =>
        this.apiService.getResumesForUser().pipe(
          map((resumes) => resumesActions.loadResumesSuccess({ resumes })),
          catchError((error) => of(resumesActions.loadResumesFailure({ error }))),
        ),
      ),
    ),
  );

  saveResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.saveResume),
      switchMap(({ resume, resumeId }) => {
        if (resumeId) {
          return this.apiService.updateResume(resumeId, resume).pipe(
            map(() => resumesActions.saveResumeSuccess({ resumeId })),
            catchError((error) =>
              of(
                resumesActions.saveResumeFailure({
                  error: error instanceof Error ? error.message : String(error),
                }),
              ),
            ),
          );
        }

        return this.apiService.createResume(resume).pipe(
          map((createdResumeId) => resumesActions.saveResumeSuccess({ resumeId: createdResumeId })),
          catchError((error) =>
            of(
              resumesActions.saveResumeFailure({
                error: error instanceof Error ? error.message : String(error),
              }),
            ),
          ),
        );
      }),
    ),
  );

  deleteResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.deleteResume),
      switchMap(({ resumeId }) =>
        this.apiService.deleteResume(resumeId).pipe(
          map(() => resumesActions.deleteResumeSuccess({ resumeId })),
          catchError((error) =>
            of(
              resumesActions.deleteResumeFailure({
                error: error instanceof Error ? error.message : String(error),
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
