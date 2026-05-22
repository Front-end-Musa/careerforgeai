import { inject, Injectable } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import {
  clearResumeGenerationResult,
  deleteResume,
  downloadResume,
  exportResumeToPdf,
  generateResume,
  loadResumes,
  resetResumeSaveStatus,
  saveResume,
  tailorResume,
} from './resumes.actions';
import { resumesAdapter } from './resumes.reducer';
import { startWith } from 'rxjs';
import { ResumesState, ResumesStatus } from './resumes.reducer';
import {
  selectDownloadError,
  selectDownloadingResumeId,
  selectExportError,
  selectIsExporting,
  selectGeneratedResumeText,
  selectResumesGenerating,
  selectIsLoading,
  selectIsSaving,
  selectResumesError,
  selectResumesStatus,
  selectSaveSucceeded,
  selectIsTailoring,
  selectTailorError,
  selectTailoredResumeId,
  selectResumesStale,
  selectResumeById,
} from './resumes.selectors';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumeGenerationRequest } from '../../../../core/interfaces/resume-generation.interface';
import { ActionTraceService } from '../../../../core/state/debug/action-trace.service';

@Injectable({
  providedIn: 'root',
})
export class ResumesFacade {
  private store = inject(Store);
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
  tailoredResumeId$ = this.store.select(selectTailoredResumeId);
  status$ = this.store.select(selectResumesStatus);
  error$ = this.store.select(selectResumesError);
  downloadingResumeId$ = this.store.select(selectDownloadingResumeId);
  downloadError$ = this.store.select(selectDownloadError);
  exporting$ = this.store.select(selectIsExporting);
  exportError$ = this.store.select(selectExportError);

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

  resetSaveStatus() {
    this.store.dispatch(resetResumeSaveStatus());
  }

  tailorResumeData(
    resumeId: string,
    companyName: string,
    position: string,
    jobDescription: string,
  ) {
    const action = tailorResume({ resumeId, companyName, position, jobDescription });
    this.trace.traceDispatch(action, 'ResumesFacade.tailorResumeData');
    this.store.dispatch(action);
  }

  resumeById$(id: string) {
    return this.store.select(selectResumeById(id));
  }

  exportResumeToPdf(resume: Partial<Resume>, resumeId?: string | null) {
    const action = exportResumeToPdf({ resumeId, resume });
    this.trace.traceDispatch(action, 'ResumesFacade.exportResumeToPdf');
    this.store.dispatch(action);
  }

  downloadResume(resumeId: string) {
    const action = downloadResume({ resumeId });
    this.trace.traceDispatch(action, 'ResumesFacade.downloadResume');
    this.store.dispatch(action);
  }

  deleteResume(resumeId: string) {
    const action = deleteResume({ resumeId });
    this.trace.traceDispatch(action, 'ResumesFacade.deleteResume');
    this.store.dispatch(action);
  }
}
