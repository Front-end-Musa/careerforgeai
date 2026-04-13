import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ResumeService } from '../../../../core/services/resume.service';
import * as resumesActions from './resumes.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { AiAgentService } from '../../../../core/services/ai-agent.service';

@Injectable()
export class ResumeEffects {
  actions$ = inject(Actions);
  apiService = inject(ResumeService);
  aiService = inject(AiAgentService);

  generateResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.generateResume),
      switchMap(({ request }) =>
        this.aiService.generateResume(request).pipe(
          map((result) => resumesActions.generateResumeSuccess({ result })),
          catchError((error) =>
            of(
              resumesActions.generateResumeFailure({
                error: this.toErrorMessage(error),
              }),
            ),
          ),
        ),
      ),
    ),
  );

  loadResumes = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.loadResumes),
      switchMap(() =>
        this.apiService.getResumesForUser().pipe(
          map((resumes) => resumesActions.loadResumesSuccess({ resumes })),
          catchError((error) =>
            of(resumesActions.loadResumesFailure({ error: this.toErrorMessage(error) })),
          ),
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

        if (resume.meta?.source === 'ai') {
          return this.aiService.saveGeneratedResume(resume).pipe(
            map((createdResumeId) => resumesActions.saveResumeSuccess({ resumeId: createdResumeId })),
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

  tailorResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.tailorResume),
      switchMap(({ resumeId, resume, companyName, position, jobDescription }) =>
        this.aiService.tailorResumeToJob(resume, companyName, position, jobDescription).pipe(
          switchMap((tailoredResume) => {
            const { id: _, ...resumeChanges } = tailoredResume;
            return [
              resumesActions.tailorResumeSuccess({ resumeId, tailoredResume }),
              resumesActions.saveResume({ resume: resumeChanges, resumeId }),
            ];
          }),
          catchError((error) =>
            of(
              resumesActions.tailorResumeFailure({
                error: error instanceof Error ? error.message : String(error),
              }),
            ),
          ),
        ),
      ),
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

  private toErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }

    if (typeof error === 'string' && error.trim()) {
      return error;
    }

    return 'Failed to complete the request. Please try again.';
  }
}
