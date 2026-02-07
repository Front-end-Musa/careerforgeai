import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, serverTimestamp } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { from, Observable, take, firstValueFrom } from 'rxjs';
import { Resume } from '../interfaces/resumes.interface';
import { AuthFacade } from '../../pages/auth/data/auth.facade';

@Injectable({ providedIn: 'root' })
export class AiAgentService {
  constructor(
    private functions: Functions,
    private firestore: Firestore,
    private authFacade: AuthFacade,
  ) {}

  /**
   * Persist AI-generated resume JSON into Firestore.
   * Ensures the userId is resolved before writing to avoid storing a Promise.
   */
  async saveAIResult(result: string) {
    const colRef = collection(this.firestore, 'resumes');
    const payload = JSON.parse(result);
    const user = await firstValueFrom(this.authFacade.user$);
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
}
