import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  orderBy,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { Auth, user } from '@angular/fire/auth';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Resume } from '../interfaces/resumes.interface';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor(
    private firestore: Firestore,
    private auth: Auth,
  ) {}

  getResumesForUser(): Observable<Resume[]> {
    const resumesRef = collection(this.firestore, 'resumes');
    return user(this.auth).pipe(
      switchMap((currentUser) => {
        if (!currentUser) {
          throw new Error('User not authenticated');
        }
        const q = query(
          resumesRef,
          where('userId', '==', currentUser.uid),
          orderBy('createdAt', 'desc'),
        );
        return collectionData(q, { idField: 'id' }) as Observable<Resume[]>;
      }),
      catchError((err) => {
        console.error('Error fetching resumes:', err);
        // Return an empty list on error to keep the observable type consistent.
        return of([] as Resume[]);
      }),
    );
  }

  getResumeById(id: string): Observable<Resume | null> {
    const resumeRef = doc(this.firestore, 'resumes', id);
    return docData(resumeRef, { idField: 'id' }).pipe(
      map((data) => (data as Resume) ?? null),
      catchError((err) => {
        console.error('Error fetching resume by id:', err);
        return of(null);
      }),
    );
  }

  updateResume(id: string, changes: Partial<Resume>): Observable<void> {
    const resumeRef = doc(this.firestore, 'resumes', id);
    return new Observable<void>((observer) => {
      updateDoc(resumeRef, changes as Record<string, unknown>)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((err) => {
          console.error('Error updating resume:', err);
          observer.error(err);
        });
    });
  }
}
