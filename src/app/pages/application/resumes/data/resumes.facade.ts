import { inject, Injectable } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { createResume, loadResumes } from './resumes.actions';
import { selectAll, resumesAdapter } from './resumes.reducer';
import { startWith } from 'rxjs';
import { ResumesState } from './resumes.reducer';
import { selectIsLoading, selectResumesError } from './resumes.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResumesFacade {
  private store = inject(Store);
  private selectResumesState = createFeatureSelector<ResumesState>('resumes');
  private selectAllResumes = resumesAdapter.getSelectors(this.selectResumesState).selectAll;
  resumes$ = this.store.select(this.selectAllResumes).pipe(startWith([]));
  loading$ = this.store.select(selectIsLoading);
  error$ = this.store.select(selectResumesError);

  loadResumes() {
    this.store.dispatch(loadResumes());
  }

  generateResume(resumeText: string) {
    this.store.dispatch(createResume({ resumeText }));
  }
}
