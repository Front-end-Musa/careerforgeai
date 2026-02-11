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
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class CoverLetterEffects {
  actions = inject(Actions);
  apiService = inject(CoverLetterService);
  aiService = inject(AiAgentService);

  getCoverLettersEffect = createEffect(() =>
    this.actions.pipe(
      ofType(loadAllCoverLetters),
      switchMap(() =>
        this.apiService.getAllCoverLetters().pipe(
          map((coverLetters) => loadAllCoverLettersSuccess({ coverLetters })),
          catchError((error) => of(loadAllCoverLettersFailure({ error }))),
        ),
      ),
    ),
  );

  deleteCoverLetterEffect = createEffect(() =>
    this.actions.pipe(
      ofType(deleteCoverLetter),
      switchMap(({ id }) =>
        this.apiService.deleteCoverLetter(id).pipe(
          map(() => loadAllCoverLetters()), // Reload cover letters after deletion
          catchError((error) => of(loadAllCoverLettersFailure({ error }))),
        ),
      ),
    ),
  );

  generateCoverLetterEffect = createEffect(() =>
    this.actions.pipe(
      ofType(generateCoverLetter),
      switchMap(({ resumeText, jobDescription, companyName, position, tone }) =>
        this.aiService
          .generateCoverLetter(resumeText, jobDescription, companyName, position, tone)
          .pipe(
            map((coverLetter) => generateCoverLetterSuccess({ coverLetter })),
            catchError((error) => of(generateCoverLetterFailure({ error }))),
          ),
      ),
    ),
  );
}
