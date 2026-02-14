import { inject, Injectable } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { createResume, loadResumes, saveResume } from './resumes.actions';
import { selectAll, resumesAdapter } from './resumes.reducer';
import { startWith } from 'rxjs';
import { ResumesState } from './resumes.reducer';
import { selectIsLoading, selectIsSaving, selectResumesError, selectResumesStatus, selectSaveSucceeded } from './resumes.selectors';
import { Resume } from '../../../../core/interfaces/resumes.interface';

@Injectable({
  providedIn: 'root',
})
export class ResumesFacade {
  private store = inject(Store);
  private selectResumesState = createFeatureSelector<ResumesState>('resumes');
  private selectAllResumes = resumesAdapter.getSelectors(this.selectResumesState).selectAll;
  resumes$ = this.store.select(this.selectAllResumes).pipe(startWith([]));
  loading$ = this.store.select(selectIsLoading);
  saving$ = this.store.select(selectIsSaving);
  saveSucceeded$ = this.store.select(selectSaveSucceeded);
  status$ = this.store.select(selectResumesStatus);
  error$ = this.store.select(selectResumesError);

  loadResumes() {
    this.store.dispatch(loadResumes());
  }

  generateResume(resumeText: string) {
    this.store.dispatch(createResume({ resumeText }));
  }

  saveResumeData(resume: Partial<Resume>, resumeId?: string | null) {
    this.store.dispatch(saveResume({ resume, resumeId }));
  }
}
