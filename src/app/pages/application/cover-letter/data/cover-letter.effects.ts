import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoverLetterService } from '../../../../core/services/cover-letter.service';
import { AiAgentService } from '../../../../core/services/ai-agent.service';
import {
  deleteCoverLetter,
  generateCoverLetter,
  generateCoverLetterFailure,
  generateCoverLetterSuccess,
  loadAllCoverLetters,
  loadAllCoverLettersFailure,
  loadAllCoverLettersSuccess,
} from './cover-letter.actions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { ActionTraceService } from '../../../../core/state/debug/action-trace.service';

@Injectable()
export class CoverLetterEffects {
  actions = inject(Actions);
  apiService = inject(CoverLetterService);
  aiService = inject(AiAgentService);
  trace = inject(ActionTraceService);

  getCoverLettersEffect = createEffect(() =>
    this.actions.pipe(
      ofType(loadAllCoverLetters),
      tap((action) => this.trace.traceEffect(action, 'CoverLetterEffects.getCoverLettersEffect')),
      exhaustMap(() =>
        this.apiService.getAllCoverLetters().pipe(
          map((coverLetters) => {
            const nextAction = loadAllCoverLettersSuccess({ coverLetters });
            this.trace.traceEffect(nextAction, 'CoverLetterEffects.getCoverLettersEffect.success');
            return nextAction;
          }),
          catchError((error) =>
            of(loadAllCoverLettersFailure({ error })).pipe(
              tap((action) =>
                this.trace.traceEffect(action, 'CoverLetterEffects.getCoverLettersEffect.failure'),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  deleteCoverLetterEffect = createEffect(() =>
    this.actions.pipe(
      ofType(deleteCoverLetter),
      tap((action) => this.trace.traceEffect(action, 'CoverLetterEffects.deleteCoverLetterEffect')),
      exhaustMap(({ id }) =>
        this.apiService.deleteCoverLetter(id).pipe(
          map(() => {
            const nextAction = loadAllCoverLetters();
            this.trace.traceEffect(
              nextAction,
              'CoverLetterEffects.deleteCoverLetterEffect.refreshAfterDelete',
            );
            return nextAction;
          }),
          catchError((error) =>
            of(loadAllCoverLettersFailure({ error })).pipe(
              tap((action) =>
                this.trace.traceEffect(
                  action,
                  'CoverLetterEffects.deleteCoverLetterEffect.failure',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  generateCoverLetterEffect = createEffect(() =>
    this.actions.pipe(
      ofType(generateCoverLetter),
      tap((action) => this.trace.traceEffect(action, 'CoverLetterEffects.generateCoverLetterEffect')),
      exhaustMap(({ resumeText, jobDescription, companyName, position, tone, resumeId, resumeLabel }) =>
        this.aiService
          .generateCoverLetter(
            resumeText,
            jobDescription,
            companyName,
            position,
            tone,
            resumeId,
            resumeLabel,
          )
          .pipe(
            map((coverLetter) => {
              const nextAction = generateCoverLetterSuccess({ coverLetter });
              this.trace.traceEffect(
                nextAction,
                'CoverLetterEffects.generateCoverLetterEffect.success',
              );
              return nextAction;
            }),
            catchError((error) =>
              of(generateCoverLetterFailure({ error })).pipe(
                tap((action) =>
                  this.trace.traceEffect(
                    action,
                    'CoverLetterEffects.generateCoverLetterEffect.failure',
                  ),
                ),
              ),
            ),
          ),
      ),
    ),
  );
}
