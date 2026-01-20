import { inject, Injectable } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { loadResumes } from './resumes.actions';
import { selectAll, resumesAdapter } from './resumes.reducer';
import { startWith } from 'rxjs';
import { ResumesState } from './resumes.reducer';

@Injectable({
  providedIn: 'root',
})
export class ResumesFacade {
  private store = inject(Store);
  private selectResumesState = createFeatureSelector<ResumesState>('resumes');
  private selectAllResumes = resumesAdapter.getSelectors(this.selectResumesState).selectAll;
  resumes$ = this.store.select(this.selectAllResumes).pipe(startWith([]));
  loading$ = this.store.select((state: any) => state.resumes?.status === 'loading');
  error$ = this.store.select((state: any) => state.resumes?.error);

  loadResumes() {
    this.store.dispatch(loadResumes());
  }
}
