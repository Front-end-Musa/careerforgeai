import { inject, Injectable } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { createResume, deleteResume, loadResumes, saveResume, tailorResume } from './resumes.actions';
import { selectAll, resumesAdapter } from './resumes.reducer';
import { startWith } from 'rxjs';
import { ResumesState } from './resumes.reducer';
import {
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
import { NotificationsService } from '../../../../core/services/notifications.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ResumesFacade {
  private store = inject(Store);
  private resumeService = inject(ResumeService);
  private notificationsService = inject(NotificationsService);
  private selectResumesState = createFeatureSelector<ResumesState>('resumes');
  private selectAllResumes = resumesAdapter.getSelectors(this.selectResumesState).selectAll;
  resumes$ = this.store.select(this.selectAllResumes).pipe(startWith([]));
  loading$ = this.store.select(selectIsLoading);
  saving$ = this.store.select(selectIsSaving);
  saveSucceeded$ = this.store.select(selectSaveSucceeded);
  tailoring$ = this.store.select(selectIsTailoring);
  tailorError$ = this.store.select(selectTailorError);
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
