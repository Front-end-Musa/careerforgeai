import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  query,
  where,
  orderBy,
  doc,
  docData,
  updateDoc,
  serverTimestamp,
  deleteDoc,
} from '@angular/fire/firestore';
import { Auth, user } from '@angular/fire/auth';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { Resume, ResumeTemplateId } from '../interfaces/resumes.interface';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ResumePreview } from '../../pages/application/resumes/resume-preview/resume-preview';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor(
    private firestore: Firestore,
    private auth: Auth,
    private functions: Functions,
    private appRef: ApplicationRef,
    private environmentInjector: EnvironmentInjector,
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
    const resumesRef = collection(this.firestore, 'resumes');
    return new Observable<string>((observer) => {
      const currentUser = this.auth.currentUser;
      if (!currentUser) {
        observer.error(new Error('User not authenticated'));
        return;
      }

      addDoc(resumesRef, {
        ...resume,
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
      })
        .then((docRef) => {
          observer.next(docRef.id);
          observer.complete();
        })
        .catch((err) => {
          console.error('Error creating resume:', err);
          observer.error(err);
        });
    });
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

  async exportResumeToPdf(
    resume: Partial<Resume>,
    templateId?: ResumeTemplateId,
  ): Promise<void> {
    if (typeof window === 'undefined') {
      return;
    }

    const renderedPreview = this.createHiddenPreview(
      resume,
      this.resolveTemplateId(templateId ?? resume.templateId),
    );

    try {
      const previewElement = renderedPreview.hostElement.querySelector(
        '.resume-preview',
      ) as HTMLElement | null;

      if (!previewElement) {
        return;
      }

      await this.waitForRender();

      const canvas = await html2canvas(previewElement, {
        scale: Math.max(window.devicePixelRatio, 2),
        backgroundColor: '#ffffff',
        useCORS: true,
      });

      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 0;
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

      pdf.save(this.buildPdfFileName(resume.personalInfo?.fullName));
    } finally {
      this.destroyHiddenPreview(renderedPreview);
    }
  }

  deleteResume(id: string): Observable<void> {
    const resumeRef = doc(this.firestore, 'resumes', id);
    return from(deleteDoc(resumeRef)).pipe(
      map(() => {}),
      catchError((err) => {
        console.error('Error deleting resume:', err);
        throw err;
      }),
    );
  }

  private createHiddenPreview(resume: Partial<Resume>, templateId: ResumeTemplateId) {
    const hostElement = document.createElement('div');
    hostElement.style.position = 'fixed';
    hostElement.style.left = '-10000px';
    hostElement.style.top = '0';
    hostElement.style.pointerEvents = 'none';
    hostElement.style.opacity = '0';
    hostElement.style.zIndex = '-1';
    document.body.appendChild(hostElement);

    const componentRef = createComponent(ResumePreview, {
      environmentInjector: this.environmentInjector,
      hostElement,
    });
    componentRef.setInput('resume', resume);
    componentRef.setInput('templateId', templateId);
    this.appRef.attachView(componentRef.hostView);
    componentRef.changeDetectorRef.detectChanges();

    return { hostElement, componentRef };
  }

  private destroyHiddenPreview(renderedPreview: {
    hostElement: HTMLElement;
    componentRef: ComponentRef<ResumePreview>;
  }) {
    this.appRef.detachView(renderedPreview.componentRef.hostView);
    renderedPreview.componentRef.destroy();
    renderedPreview.hostElement.remove();
  }

  private waitForRender(): Promise<void> {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });
  }

  private resolveTemplateId(templateId?: ResumeTemplateId): ResumeTemplateId {
    return templateId ?? 'basic';
  }

  private buildPdfFileName(fullName?: string): string {
    const sanitizedName = (fullName?.trim() || 'resume').replace(/[^\w\-]+/g, '_');
    return `${sanitizedName}.pdf`;
  }
}
