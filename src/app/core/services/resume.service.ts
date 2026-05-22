import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  orderBy,
  doc,
  docData,
  deleteDoc,
} from '@angular/fire/firestore';
import { Auth, user } from '@angular/fire/auth';
import { catchError, from, map, Observable, of, switchMap, throwError } from 'rxjs';
import { FirebaseError } from 'firebase/app';
import { Resume } from '../interfaces/resumes.interface';
import { CallableService } from './callable.service';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private callableService = inject(CallableService);
  private saveGeneratedResumeFn = this.callableService.callable<
    { resume: Partial<Resume> },
    { resumeId: string }
  >('saveGeneratedResume');
  private updateResumeFn = this.callableService.callable<
    { resumeId: string; changes: Partial<Resume> },
    { success: boolean }
  >('updateResume');
  private downloadResumeFn = this.callableService.callable<
    { resumeId: string },
    { fileName: string; contentType: string; content: string }
  >('downloadResume');
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

  createResume(resume: Partial<Resume>): Observable<string> {
    return from(this.saveGeneratedResumeFn({ resume })).pipe(
      map((result) => result.data.resumeId),
      catchError((err) => {
        console.error('Error creating resume:', err);
        return throwError(() => this.toResumeCallableError(err, 'create'));
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
    return from(this.updateResumeFn({ resumeId: id, changes })).pipe(
      map(() => undefined),
      catchError((err) => {
        console.error('Error updating resume:', err);
        return throwError(() => this.toResumeCallableError(err, 'update'));
      }),
    );
  }

  async exportToPdf(resumeId: string | null | undefined, resume: Partial<Resume>): Promise<void> {
    if (typeof window === 'undefined') {
      throw new Error('PDF export is only supported in a browser environment.');
    }

    const previewElement = await this.waitForExportPreview();

    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import('html2canvas'),
      import('jspdf'),
    ]);

    const canvas = await html2canvas(previewElement, {
      scale: Math.max(window.devicePixelRatio, 2),
      backgroundColor: '#ffffff',
      useCORS: true,
    });

    const imageData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 8;
    const contentWidth = pageWidth - margin * 2;
    const imageHeight = (canvas.height * contentWidth) / canvas.width;
    const pageContentHeight = pageHeight - margin * 2;

    let renderedHeight = 0;
    pdf.addImage(imageData, 'PNG', margin, margin, contentWidth, imageHeight);
    renderedHeight += pageContentHeight;

    while (renderedHeight < imageHeight) {
      pdf.addPage();
      pdf.addImage(imageData, 'PNG', margin, margin - renderedHeight, contentWidth, imageHeight);
      renderedHeight += pageContentHeight;
    }

    const fullName = resume.personalInfo?.fullName?.trim();
    const sanitizedName = (fullName || 'resume').replace(/[^\w\-]+/g, '_');
    pdf.save(`${sanitizedName}.pdf`);
  }

  downloadResume(resumeId: string) {
    return from(this.downloadResumeFn({ resumeId })).pipe(map((result) => result.data));
  }

  deleteResume(id: string): Observable<void> {
    const resumeRef = doc(this.firestore, 'resumes', id);
    return from(deleteDoc(resumeRef)).pipe(
      map(() => {}),
      catchError((err) => {
        console.error('Error deleting resume:', err);
        return throwError(() => err);
      }),
    );
  }

  private toResumeCallableError(error: unknown, action: 'create' | 'update') {
    if (error instanceof FirebaseError) {
      const actionLabel = action === 'create' ? 'save' : 'update';

      if (error.code === 'functions/not-found') {
        return new Error(
          `Resume ${actionLabel} is unavailable because the deployed Cloud Function is missing. Rebuild and redeploy Firebase Functions.`,
        );
      }

      if (error.code === 'functions/unauthenticated') {
        return new Error('Sign in again before saving your resume.');
      }

      if (error.code === 'functions/internal') {
        return new Error(
          `Resume ${actionLabel} failed in Cloud Functions. Check the deployed function logs and confirm the backend matches the current source.`,
        );
      }

      if (error.message) {
        return new Error(error.message);
      }
    }

    if (error instanceof Error) {
      return error;
    }

    return new Error(`Unable to ${action} your resume.`);
  }

  private waitForExportPreview(maxAttempts = 30): Promise<HTMLElement> {
    return new Promise((resolve, reject) => {
      const attempt = (tries: number) => {
        const previewElement = document.querySelector(
          '.resume-export-surface .resume-preview',
        ) as HTMLElement | null;

        if (previewElement) {
          resolve(previewElement);
          return;
        }

        if (tries >= maxAttempts) {
          reject(new Error('Resume preview is not ready for export.'));
          return;
        }

        requestAnimationFrame(() => attempt(tries + 1));
      };

      requestAnimationFrame(() => attempt(0));
    });
  }
}
