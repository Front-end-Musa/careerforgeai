import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  orderBy,
  docData,
} from '@angular/fire/firestore';
import { Auth, user } from '@angular/fire/auth';
import { catchError, Observable, of, switchMap } from 'rxjs';
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
}
