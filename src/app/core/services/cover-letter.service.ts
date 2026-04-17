import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  orderBy,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable, switchMap } from 'rxjs';
import { CoverLetter } from '../interfaces/cover-letter.interface';

@Injectable({
  providedIn: 'root',
})
export class CoverLetterService {
  constructor(
    private firestore: Firestore,
    private auth: Auth,
  ) {}

  getAllCoverLetters(): Observable<CoverLetter[]> {
    const colRef = collection(this.firestore, 'coverLetters');
    return user(this.auth).pipe(
      switchMap((currentUser) => {
        if (!currentUser) {
          throw new Error('User not authenticated');
        }
        const q = query(
          colRef,
          where('userId', '==', currentUser.uid),
          orderBy('createdAt', 'desc'),
        );
        return collectionData(q, { idField: 'id' }) as Observable<CoverLetter[]>;
      }),
    );
  }

  deleteCoverLetter(id: string) {
    const docRef = doc(this.firestore, 'coverLetters', id);
    return new Observable<void>((observer) => {
      deleteDoc(docRef)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((err) => observer.error(err));
    });
  }
}
