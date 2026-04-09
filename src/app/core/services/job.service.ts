import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
} from '@angular/fire/firestore';
import { catchError, from, map, Observable, of, switchMap, throwError } from 'rxjs';
import { Job, JobStatus } from '../interfaces/job.interface';

export interface CreateJobPayload {
  title: string;
  company: string;
  status: JobStatus;
  dateApplied: string;
  position: number;
}

export interface JobMovePayload {
  id: string;
  status: JobStatus;
  position: number;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(
    private firestore: Firestore,
    private auth: Auth,
  ) {}

  getJobsForUser(): Observable<Job[]> {
    const jobsRef = collection(this.firestore, 'jobs');
    return user(this.auth).pipe(
      switchMap((currentUser) => {
        if (!currentUser) {
          throw new Error('User not authenticated');
        }

        const jobsQuery = query(
          jobsRef,
          where('userId', '==', currentUser.uid),
          orderBy('createdAt', 'desc'),
        );

        return collectionData(jobsQuery, { idField: 'id' }) as Observable<Job[]>;
      }),
      catchError((error) => {
        console.error('Error fetching jobs:', error);
        return of([] as Job[]);
      }),
    );
  }

  createJob(job: CreateJobPayload): Observable<string> {
    const jobsRef = collection(this.firestore, 'jobs');
    return new Observable<string>((observer) => {
      const currentUser = this.auth.currentUser;
      if (!currentUser) {
        observer.error(new Error('User not authenticated'));
        return;
      }

      addDoc(jobsRef, {
        ...job,
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
        .then((docRef) => {
          observer.next(docRef.id);
          observer.complete();
        })
        .catch((error) => {
          console.error('Error creating job:', error);
          observer.error(error);
        });
    });
  }

  updateJob(id: string, changes: Partial<Job>): Observable<void> {
    const jobDoc = doc(this.firestore, 'jobs', id);
    const updatePayload: Record<string, unknown> = {
      ...changes,
      updatedAt: serverTimestamp(),
    };

    return from(updateDoc(jobDoc, updatePayload)).pipe(
      map(() => undefined),
      catchError((error) => {
        console.error('Error updating job:', error);
        return throwError(() => error);
      }),
    );
  }

  deleteJob(id: string): Observable<void> {
    const jobDoc = doc(this.firestore, 'jobs', id);
    return from(deleteDoc(jobDoc)).pipe(
      map(() => undefined),
      catchError((error) => {
        console.error('Error deleting job:', error);
        return throwError(() => error);
      }),
    );
  }

  bulkUpdateJobPositions(jobs: JobMovePayload[]): Observable<void> {
    if (jobs.length === 0) {
      return of(undefined);
    }

    const batch = writeBatch(this.firestore);
    for (const job of jobs) {
      const jobDoc = doc(this.firestore, 'jobs', job.id);
      batch.update(jobDoc, {
        status: job.status,
        position: job.position,
        updatedAt: serverTimestamp(),
      });
    }

    return from(batch.commit()).pipe(
      map(() => undefined),
      catchError((error) => {
        console.error('Error bulk-updating jobs:', error);
        return throwError(() => error);
      }),
    );
  }
}
