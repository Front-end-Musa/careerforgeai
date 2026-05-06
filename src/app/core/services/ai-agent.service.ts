import { Injectable, inject } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { Resume } from '../interfaces/resumes.interface';
import {
  ResumeGenerationRequest,
  ResumeGenerationResult,
} from '../interfaces/resume-generation.interface';
import { toCallableError } from './callable-error.util';
import { CallableService } from './callable.service';

@Injectable({ providedIn: 'root' })
export class AiAgentService {
  private callableService = inject(CallableService);
  private generateResumeFn = this.callableService.callable<
    ResumeGenerationRequest,
    { result: ResumeGenerationResult }
  >('generateResume');
  private saveGeneratedResumeFn = this.callableService.callable<
    { resume: Partial<Resume> },
    { resumeId: string }
  >('saveGeneratedResume');
  private generateCoverLetterFn = this.callableService.callable<
    {
      resumeText: string;
      jobDescription: string;
      companyName: string;
      position: string;
      tone: string;
      resumeId: string;
      resumeLabel: string;
    },
    { text: string; coverLetterId: string }
  >('generateCoverLetter');
  private tailorResumeToJobFn = this.callableService.callable<
    { resumeId: string; companyName: string; position: string; jobDescription: string },
    { resumeId: string }
  >('tailorResumeToJob');

  generateResume(request: ResumeGenerationRequest): Observable<ResumeGenerationResult> {
    return from(this.generateResumeFn(request)).pipe(
      map((res) => res.data.result),
      catchError((error) =>
        throwError(() => toCallableError(error, 'Failed to generate resume content. Please try again.')),
      ),
    );
  }

  saveGeneratedResume(resume: Partial<Resume>): Observable<string> {
    return from(
      this.saveGeneratedResumeFn({
        resume: {
          ...resume,
          meta: { ...(resume.meta ?? {}), source: 'ai' },
        } as Partial<Resume>,
      }),
    ).pipe(
      map((res) => res.data.resumeId),
      catchError((error) =>
        throwError(() =>
          toCallableError(error, 'Failed to save generated resume. Please try again.'),
        ),
      ),
    );
  }

  generateCoverLetter(
    resumeText: string,
    jobDescription: string,
    companyName: string,
    position: string,
    tone: string,
    resumeId: string,
    resumeLabel: string,
  ): Observable<string> {
    return from(
      this.generateCoverLetterFn({
        resumeText,
        jobDescription,
        companyName,
        position,
        tone,
        resumeId,
        resumeLabel,
      }).then((res) => res.data.text),
    ).pipe(
      catchError((error) =>
        throwError(() => toCallableError(error, 'Failed to generate cover letter. Please try again.')),
      ),
    );
  }

  tailorResumeToJob(
    resumeId: string,
    companyName: string,
    position: string,
    jobDescription: string,
  ): Observable<string> {
    return from(
      this.tailorResumeToJobFn({ resumeId, companyName, position, jobDescription }).then(
        (res) => res.data.resumeId,
      ),
    ).pipe(
      catchError((error) =>
        throwError(() => toCallableError(error, 'Failed to tailor resume. Please try again.')),
      ),
    );
  }
}
