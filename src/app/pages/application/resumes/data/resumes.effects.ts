import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ResumeService } from '../../../../core/services/resume.service';
import * as resumesActions from './resumes.actions';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { AiAgentService } from '../../../../core/services/ai-agent.service';
import { ActionTraceService } from '../../../../core/state/debug/action-trace.service';

@Injectable()
export class ResumeEffects {
  actions$ = inject(Actions);
  apiService = inject(ResumeService);
  aiService = inject(AiAgentService);
  trace = inject(ActionTraceService);

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
      exhaustMap(({ resumeId, resume, companyName, position, jobDescription }) =>
        this.aiService.tailorResumeToJob(resume, companyName, position, jobDescription).pipe(
          switchMap((tailoredResume) => {
            const { id: _, ...resumeChanges } = tailoredResume;
            const successAction = resumesActions.tailorResumeSuccess({ resumeId, tailoredResume });
            const saveAction = resumesActions.saveResume({ resume: resumeChanges, resumeId });
            this.trace.traceEffect(successAction, 'ResumeEffects.tailorResumeEffect.success');
            this.trace.traceEffect(saveAction, 'ResumeEffects.tailorResumeEffect.followupSave');
            return [successAction, saveAction];
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
