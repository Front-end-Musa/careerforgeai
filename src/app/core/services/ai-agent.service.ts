import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, serverTimestamp } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { from, Observable, take, firstValueFrom, of } from 'rxjs';
import { Resume } from '../interfaces/resumes.interface';
import { AuthFacade } from '../../pages/auth/data/auth.facade';
import { Auth } from '@angular/fire/auth';

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
    const fn = httpsCallable(this.functions, 'generateResume');

    const generatedJson$ = fn({ resumeText }).then((res: any) => JSON.parse(res.data.text));

    return from(generatedJson$);
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

  generateCoverLetter(resumeText: string, jobDescription: string, companyName: string, position: string, tone: string): Observable<string> {
    const fn = httpsCallable(this.functions, 'generateCoverLetter');
    return from(fn({ resumeText, jobDescription, companyName, position, tone }).then((res: any) => res.data.text));
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
    );
  }
}
