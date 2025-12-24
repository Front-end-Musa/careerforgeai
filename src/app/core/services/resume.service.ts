import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  orderBy,
  addDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Resume } from '../interfaces/resumes.interface';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private readonly collectionName = 'resumes';

  constructor(private firestore: Firestore, private auth: Auth) {}

  getResumesForUser() {
    const uid = this.auth.currentUser?.uid;
    if (!uid) throw new Error('User not authenticated');

    const resumesRef = collection(this.firestore, this.collectionName);

    const q = query(resumesRef, where('userId', '==', uid), orderBy('createdAt', 'desc'));

    return collectionData(q, { idField: 'id' }) as Observable<Resume[]>;
  }
}
