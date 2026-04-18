import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteCoverLetter, generateCoverLetter, loadAllCoverLetters } from './cover-letter.actions';
import {
  selectCoverLettersError,
  selectCoverLettersGenerating,
  selectGeneratedCoverLetterText,
  selectCoverLettersStale,
  selectCoverLettersStatus,
} from './cover-letter.selectors';
import { ActionTraceService } from '../../../../core/state/debug/action-trace.service';

@Injectable({
  providedIn: 'root',
})
export class CoverLetterFacade {
  private store = inject(Store);
  private trace = inject(ActionTraceService);
  private status = this.store.selectSignal(selectCoverLettersStatus);
  private stale = this.store.selectSignal(selectCoverLettersStale);

  generatedText$ = this.store.select(selectGeneratedCoverLetterText);
  generating$ = this.store.select(selectCoverLettersGenerating);
  error$ = this.store.select(selectCoverLettersError);

  ensureLoaded(source = 'CoverLetterFacade.ensureLoaded', force = false) {
    const status = this.status();
    if (!force && (status === 'loading' || (status === 'loaded' && !this.stale()))) {
      this.trace.traceSkip(loadAllCoverLetters.type, source, 'cover letters already loaded', {
        coverLettersStatus: status,
        coverLettersStale: this.stale(),
      });
      return;
    }

    const action = loadAllCoverLetters();
    this.trace.traceDispatch(action, source, {
      force,
      coverLettersStatus: status,
      coverLettersStale: this.stale(),
    });
    this.store.dispatch(action);
  }

  deleteCoverLetter(id: string) {
    const action = deleteCoverLetter({ id });
    this.trace.traceDispatch(action, 'CoverLetterFacade.deleteCoverLetter');
    this.store.dispatch(action);
  }

  generateCoverLetter(
    resumeText: string,
    jobDescription: string,
    companyName: string,
    position: string,
    tone: string,
    resumeId: string,
    resumeLabel: string,
  ) {
    const action = generateCoverLetter({
      resumeText,
      jobDescription,
      companyName,
      position,
      tone,
      resumeId,
      resumeLabel,
    });
    this.trace.traceDispatch(action, 'CoverLetterFacade.generateCoverLetter');
    this.store.dispatch(action);
  }
}
