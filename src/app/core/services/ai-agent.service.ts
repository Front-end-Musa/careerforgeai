import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, serverTimestamp } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { catchError, firstValueFrom, from, Observable, of, throwError } from 'rxjs';
import { Resume } from '../interfaces/resumes.interface';
import { Auth } from '@angular/fire/auth';
import { mapCallableError } from '../utils/callable-error';

type GenerateResumeRequest = {
  resumeText: string;
};

type GenerateTextResponse = {
  text: string;
};

type GenerateCoverLetterRequest = {
  resumeText: string;
  jobDescription: string;
  companyName: string;
  position: string;
  tone: string;
};

type TailorResumeRequest = {
  resume: Resume;
  companyName: string;
  position: string;
  jobDescription: string;
};

type TailorResumeResponse = {
  resume: Resume;
};

@Injectable({ providedIn: 'root' })
export class AiAgentService {
  constructor(
    private functions: Functions,
    private firestore: Firestore,
    private auth: Auth,
  ) {}

  /**
   * Persist AI-generated resume JSON into Firestore.
   * Ensures the userId is resolved before writing to avoid storing a Promise.
   */
  async saveAIResult(result: string) {
    const colRef = collection(this.firestore, 'resumes');
    const payload = JSON.parse(result);
    const user = await firstValueFrom(this.auth.currentUser ? of(this.auth.currentUser) : of(null));
    const userId = user?.uid ?? null;

    return addDoc(colRef, {
      ...payload,
      userId,
      createdAt: serverTimestamp(),
    });
  }

  generateResume(resumeText: string): Observable<string> {
    const fn = httpsCallable<GenerateResumeRequest, GenerateTextResponse>(
      this.functions,
      'generateResume',
    );

    const generatedJson$ = fn({ resumeText }).then((res) => JSON.parse(res.data.text));

    return from(generatedJson$).pipe(
      catchError((error) => throwError(() => mapCallableError(error))),
    );
  }

  async saveCoverLetter(result: string) {
    const colRef = collection(this.firestore, 'coverLetters');
    const payload = JSON.parse(result);
    const user = await firstValueFrom(this.auth.currentUser ? of(this.auth.currentUser) : of(null));
    const userId = user?.uid ?? null;

    return addDoc(colRef, {
      ...payload,
      userId,
      createdAt: serverTimestamp(),
    });
  }

  generateCoverLetter(
    resumeText: string,
    jobDescription: string,
    companyName: string,
    position: string,
    tone: string,
  ): Observable<string> {
    const fn = httpsCallable<GenerateCoverLetterRequest, GenerateTextResponse>(
      this.functions,
      'generateCoverLetter',
    );
    return from(
      fn({ resumeText, jobDescription, companyName, position, tone }).then((res) => res.data.text),
    ).pipe(catchError((error) => throwError(() => mapCallableError(error))));
  }

  tailorResumeToJob(
    resume: Resume,
    companyName: string,
    position: string,
    jobDescription: string,
  ): Observable<Resume> {
    const fn = httpsCallable<TailorResumeRequest, TailorResumeResponse>(
      this.functions,
      'tailorResumeToJob',
    );
    return from(
      fn({ resume, companyName, position, jobDescription }).then((res) => res.data.resume),
    ).pipe(catchError((error) => throwError(() => mapCallableError(error))));
  }
}
