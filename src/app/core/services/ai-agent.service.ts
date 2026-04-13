import { Injectable } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { Resume } from '../interfaces/resumes.interface';
import {
  ResumeGenerationRequest,
  ResumeGenerationResult,
} from '../interfaces/resume-generation.interface';
import { toCallableError } from './callable-error.util';

@Injectable({ providedIn: 'root' })
export class AiAgentService {
  constructor(private functions: Functions) {}

  generateResume(request: ResumeGenerationRequest): Observable<ResumeGenerationResult> {
    const fn = httpsCallable<ResumeGenerationRequest, { result: ResumeGenerationResult }>(
      this.functions,
      'generateResume',
    );

    return from(fn(request)).pipe(
      map((res) => res.data.result),
      catchError((error) =>
        throwError(() => toCallableError(error, 'Failed to generate resume content. Please try again.')),
      ),
    );
  }

  saveGeneratedResume(resume: Partial<Resume>): Observable<string> {
    const fn = httpsCallable<{ resume: Partial<Resume> }, { resumeId: string }>(
      this.functions,
      'saveGeneratedResume',
    );

    return from(
      fn({
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

  generateCoverLetter(resumeText: string, jobDescription: string, companyName: string, position: string, tone: string): Observable<string> {
    const fn = httpsCallable(this.functions, 'generateCoverLetter');
    return from(fn({ resumeText, jobDescription, companyName, position, tone }).then((res: any) => res.data.text)).pipe(
      catchError((error) =>
        throwError(() => toCallableError(error, 'Failed to generate cover letter. Please try again.')),
      ),
    );
  }

  tailorResumeToJob(
    resume: Resume,
    companyName: string,
    position: string,
    jobDescription: string,
  ): Observable<Resume> {
    const fn = httpsCallable(this.functions, 'tailorResumeToJob');
    return from(
      fn({ resume, companyName, position, jobDescription }).then((res: any) => res.data.resume as Resume),
    ).pipe(
      catchError((error) =>
        throwError(() => toCallableError(error, 'Failed to tailor resume. Please try again.')),
      ),
    );
  }
}
