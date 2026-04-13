import { inject, Injectable } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { clearResumeGenerationResult, deleteResume, generateResume, loadResumes, saveResume, tailorResume } from './resumes.actions';
import { resumesAdapter } from './resumes.reducer';
import { startWith } from 'rxjs';
import { ResumesState } from './resumes.reducer';
import {
  selectGeneratedResumeText,
  selectResumesGenerating,
  selectIsLoading,
  selectIsSaving,
  selectResumesError,
  selectResumesStatus,
  selectSaveSucceeded,
  selectIsTailoring,
  selectTailorError,
} from './resumes.selectors';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumeService } from '../../../../core/services/resume.service';
import { FormGroup } from '@angular/forms';
import { ResumeGenerationRequest } from '../../../../core/interfaces/resume-generation.interface';

@Injectable({
  providedIn: 'root',
})
export class ResumesFacade {
  private store = inject(Store);
  private resumeService = inject(ResumeService);
  private selectResumesState = createFeatureSelector<ResumesState>('resumes');
  private selectAllResumes = resumesAdapter.getSelectors(this.selectResumesState).selectAll;
  resumes$ = this.store.select(this.selectAllResumes).pipe(startWith([]));
  loading$ = this.store.select(selectIsLoading);
  generating$ = this.store.select(selectResumesGenerating);
  generatedResult$ = this.store.select(selectGeneratedResumeText);
  saving$ = this.store.select(selectIsSaving);
  saveSucceeded$ = this.store.select(selectSaveSucceeded);
  tailoring$ = this.store.select(selectIsTailoring);
  tailorError$ = this.store.select(selectTailorError);
  status$ = this.store.select(selectResumesStatus);
  error$ = this.store.select(selectResumesError);

  loadResumes() {
    this.store.dispatch(loadResumes());
  }

  generateResumeRequest(request: ResumeGenerationRequest) {
    this.store.dispatch(generateResume({ request }));
  }

  clearGeneratedResult() {
    this.store.dispatch(clearResumeGenerationResult());
  }

  saveResumeData(resume: Partial<Resume>, resumeId?: string | null) {
    this.store.dispatch(saveResume({ resume, resumeId }));
  }

  tailorResumeData(
    resumeId: string,
    resume: Resume,
    companyName: string,
    position: string,
    jobDescription: string,
  ) {
    this.store.dispatch(tailorResume({ resumeId, resume, companyName, position, jobDescription }));
  }

  getResumeById(id: string) {
    return this.resumeService.getResumeById(id);
  }

  exportResumeToPdf(formGroup: FormGroup) {
    return this.resumeService.exportToPdf(formGroup);
  }

  deleteResume(resumeId: string) {
    this.store.dispatch(deleteResume({ resumeId }));
  }
}
