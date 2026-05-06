import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ResumeService } from '../../../../core/services/resume.service';
import * as resumesActions from './resumes.actions';
import { catchError, exhaustMap, from, map, of, tap } from 'rxjs';
import { AiAgentService } from '../../../../core/services/ai-agent.service';
import { ActionTraceService } from '../../../../core/state/debug/action-trace.service';
import { NotificationsService } from '../../../../core/services/notifications.service';

@Injectable()
export class ResumeEffects {
  actions$ = inject(Actions);
  apiService = inject(ResumeService);
  aiService = inject(AiAgentService);
  trace = inject(ActionTraceService);
  notifications = inject(NotificationsService);

  generateResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.generateResume),
      tap((action) => this.trace.traceEffect(action, 'ResumeEffects.generateResumeEffect')),
      exhaustMap(({ request }) =>
        this.aiService.generateResume(request).pipe(
          map((result) => {
            const nextAction = resumesActions.generateResumeSuccess({ result });
            this.trace.traceEffect(nextAction, 'ResumeEffects.generateResumeEffect.success');
            return nextAction;
          }),
          catchError((error) =>
            of(resumesActions.generateResumeFailure({ error: this.toErrorMessage(error) })).pipe(
              tap((action) =>
                this.trace.traceEffect(action, 'ResumeEffects.generateResumeEffect.failure'),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  loadResumes = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.loadResumes),
      tap((action) => this.trace.traceEffect(action, 'ResumeEffects.loadResumes')),
      exhaustMap(() =>
        this.apiService.getResumesForUser().pipe(
          map((resumes) => {
            const nextAction = resumesActions.loadResumesSuccess({ resumes });
            this.trace.traceEffect(nextAction, 'ResumeEffects.loadResumes.success');
            return nextAction;
          }),
          catchError((error) =>
            of(resumesActions.loadResumesFailure({ error: this.toErrorMessage(error) })).pipe(
              tap((action) => this.trace.traceEffect(action, 'ResumeEffects.loadResumes.failure')),
            ),
          ),
        ),
      ),
    ),
  );

  saveResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.saveResume),
      tap((action) => this.trace.traceEffect(action, 'ResumeEffects.saveResumeEffect')),
      exhaustMap(({ resume, resumeId }) => {
        if (resumeId) {
          return this.apiService.updateResume(resumeId, resume).pipe(
            map(() => {
              const nextAction = resumesActions.saveResumeSuccess({ resumeId });
              this.trace.traceEffect(nextAction, 'ResumeEffects.saveResumeEffect.success');
              return nextAction;
            }),
            catchError((error) =>
              of(resumesActions.saveResumeFailure({
                error: error instanceof Error ? error.message : String(error),
              })).pipe(
                tap((action) =>
                  this.trace.traceEffect(action, 'ResumeEffects.saveResumeEffect.failure'),
                ),
              ),
            ),
          );
        }

        if (resume.meta?.source === 'ai') {
          return this.aiService.saveGeneratedResume(resume).pipe(
            map((createdResumeId) => {
              const nextAction = resumesActions.saveResumeSuccess({ resumeId: createdResumeId });
              this.trace.traceEffect(nextAction, 'ResumeEffects.saveResumeEffect.success');
              return nextAction;
            }),
            catchError((error) =>
              of(resumesActions.saveResumeFailure({
                error: error instanceof Error ? error.message : String(error),
              })).pipe(
                tap((action) =>
                  this.trace.traceEffect(action, 'ResumeEffects.saveResumeEffect.failure'),
                ),
              ),
            ),
          );
        }

        return this.apiService.createResume(resume).pipe(
          map((createdResumeId) => {
            const nextAction = resumesActions.saveResumeSuccess({ resumeId: createdResumeId });
            this.trace.traceEffect(nextAction, 'ResumeEffects.saveResumeEffect.success');
            return nextAction;
          }),
          catchError((error) =>
            of(resumesActions.saveResumeFailure({
              error: error instanceof Error ? error.message : String(error),
            })).pipe(
              tap((action) =>
                this.trace.traceEffect(action, 'ResumeEffects.saveResumeEffect.failure'),
              ),
            ),
          ),
        );
      }),
    ),
  );

  tailorResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.tailorResume),
      tap((action) => this.trace.traceEffect(action, 'ResumeEffects.tailorResumeEffect')),
      exhaustMap(({ resumeId, companyName, position, jobDescription }) =>
        this.aiService.tailorResumeToJob(resumeId, companyName, position, jobDescription).pipe(
          map((tailoredResumeId) => {
            const successAction = resumesActions.tailorResumeSuccess({
              sourceResumeId: resumeId,
              tailoredResumeId,
            });
            this.trace.traceEffect(successAction, 'ResumeEffects.tailorResumeEffect.success');
            return successAction;
          }),
          catchError((error) =>
            of(resumesActions.tailorResumeFailure({
              error: error instanceof Error ? error.message : String(error),
            })).pipe(
              tap((action) =>
                this.trace.traceEffect(action, 'ResumeEffects.tailorResumeEffect.failure'),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  deleteResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.deleteResume),
      tap((action) => this.trace.traceEffect(action, 'ResumeEffects.deleteResumeEffect')),
      exhaustMap(({ resumeId }) =>
        this.apiService.deleteResume(resumeId).pipe(
          map(() => {
            const nextAction = resumesActions.deleteResumeSuccess({ resumeId });
            this.trace.traceEffect(nextAction, 'ResumeEffects.deleteResumeEffect.success');
            return nextAction;
          }),
          catchError((error) =>
            of(resumesActions.deleteResumeFailure({
              error: error instanceof Error ? error.message : String(error),
            })).pipe(
              tap((action) =>
                this.trace.traceEffect(action, 'ResumeEffects.deleteResumeEffect.failure'),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  refreshAfterWriteEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.saveResumeSuccess, resumesActions.deleteResumeSuccess),
      map(() => resumesActions.loadResumes()),
    ),
  );

  downloadResumeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.downloadResume),
      tap((action) => this.trace.traceEffect(action, 'ResumeEffects.downloadResumeEffect')),
      exhaustMap(({ resumeId }) =>
        this.apiService.downloadResume(resumeId).pipe(
          map((file) => {
            const nextAction = resumesActions.downloadResumeSuccess({ resumeId, file });
            this.trace.traceEffect(nextAction, 'ResumeEffects.downloadResumeEffect.success');
            return nextAction;
          }),
          catchError((error) =>
            of(resumesActions.downloadResumeFailure({
              resumeId,
              error: this.toErrorMessage(error),
            })).pipe(
              tap((action) =>
                this.trace.traceEffect(action, 'ResumeEffects.downloadResumeEffect.failure'),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  downloadResumeSuccessEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(resumesActions.downloadResumeSuccess),
        tap(({ file }) => {
          if (typeof window === 'undefined') {
            return;
          }

          const blob = new Blob([file.content], { type: file.contentType });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = file.fileName;
          link.click();
          window.URL.revokeObjectURL(url);
        }),
      ),
    { dispatch: false },
  );

  downloadResumeFailureEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(resumesActions.downloadResumeFailure),
        tap(() => {
          this.notifications.showError('Unable to download this resume right now.');
        }),
      ),
    { dispatch: false },
  );

  exportResumeToPdfEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(resumesActions.exportResumeToPdf),
      tap((action) => this.trace.traceEffect(action, 'ResumeEffects.exportResumeToPdfEffect')),
      exhaustMap(({ resumeId, resume }) =>
        from(this.apiService.exportToPdf(resumeId, resume)).pipe(
          map(() => {
            const nextAction = resumesActions.exportResumeToPdfSuccess();
            this.trace.traceEffect(nextAction, 'ResumeEffects.exportResumeToPdfEffect.success');
            return nextAction;
          }),
          catchError((error) =>
            of(resumesActions.exportResumeToPdfFailure({ error: this.toErrorMessage(error) })).pipe(
              tap((action) =>
                this.trace.traceEffect(action, 'ResumeEffects.exportResumeToPdfEffect.failure'),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  exportResumeFailureEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(resumesActions.exportResumeToPdfFailure),
        tap(({ error }) => {
          this.notifications.showError(error || 'Unable to export this resume right now.');
        }),
      ),
    { dispatch: false },
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
