import { inject, Injectable } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { clearResumeGenerationResult, deleteResume, generateResume, loadResumes, saveResume, tailorResume } from './resumes.actions';
import { resumesAdapter } from './resumes.reducer';
import { startWith } from 'rxjs';
import { ResumesState, ResumesStatus } from './resumes.reducer';
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
  selectResumesStale,
} from './resumes.selectors';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumeService } from '../../../../core/services/resume.service';
import { FormGroup } from '@angular/forms';
import { ResumeGenerationRequest } from '../../../../core/interfaces/resume-generation.interface';
import { ActionTraceService } from '../../../../core/state/debug/action-trace.service';

@Injectable({
  providedIn: 'root',
})
export class ResumesFacade {
  private store = inject(Store);
  private resumeService = inject(ResumeService);
  private trace = inject(ActionTraceService);
  private selectResumesState = createFeatureSelector<ResumesState>('resumes');
  private selectAllResumes = resumesAdapter.getSelectors(this.selectResumesState).selectAll;
  private status = this.store.selectSignal(selectResumesStatus);
  private stale = this.store.selectSignal(selectResumesStale);
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

  ensureLoaded(source = 'ResumesFacade.ensureLoaded', force = false) {
    const status = this.status();
    if (!force && (status === ResumesStatus.Loading || (status === ResumesStatus.Loaded && !this.stale()))) {
      this.trace.traceSkip(loadResumes.type, source, 'resumes already loaded', {
        resumesStatus: status,
        resumesStale: this.stale(),
      });
      return;
    }

    const action = loadResumes();
    this.trace.traceDispatch(action, source, {
      force,
      resumesStatus: status,
      resumesStale: this.stale(),
    });
    this.store.dispatch(action);
  }

  generateResumeRequest(request: ResumeGenerationRequest) {
    this.store.dispatch(generateResume({ request }));
  }

  clearGeneratedResult() {
    this.store.dispatch(clearResumeGenerationResult());
  }

  saveResumeData(resume: Partial<Resume>, resumeId?: string | null) {
    const action = saveResume({ resume, resumeId });
    this.trace.traceDispatch(action, 'ResumesFacade.saveResumeData');
    this.store.dispatch(action);
  }

  tailorResumeData(
    resumeId: string,
    resume: Resume,
    companyName: string,
    position: string,
    jobDescription: string,
  ) {
    const action = tailorResume({ resumeId, resume, companyName, position, jobDescription });
    this.trace.traceDispatch(action, 'ResumesFacade.tailorResumeData');
    this.store.dispatch(action);
  }

  getResumeById(id: string) {
    return this.resumeService.getResumeById(id);
  }

  exportResumeToPdf(resumeId: string, formGroup: FormGroup) {
    return this.resumeService.exportToPdf(resumeId, formGroup);
  }

  deleteResume(resumeId: string) {
    const action = deleteResume({ resumeId });
    this.trace.traceDispatch(action, 'ResumesFacade.deleteResume');
    this.store.dispatch(action);
  }
}
