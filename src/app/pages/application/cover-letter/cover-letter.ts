import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatLabel } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { DirName } from '../dir-name/dir-name';
import { GenerateBtn } from '../../buttons/generate-btn/generate-btn';
import { ToneChoose } from '../../buttons/tone-choose/tone-choose';
import { AuthFacade } from '../../auth/data/auth.facade';
import { Resume } from '../../../core/interfaces/resumes.interface';
import { getAiUsageSummary } from '../../../core/utils/plan-entitlements';
import { CoverLetterFacade } from './data/cover-letter.facade';

@Component({
  selector: 'app-cover-letter',
  imports: [AsyncPipe, TitleCasePipe, MatLabel, DirName, ReactiveFormsModule, GenerateBtn, ToneChoose],
  templateUrl: './cover-letter.html',
  styleUrl: './cover-letter.scss',
})
export class CoverLetter implements OnInit {
  tones = ['Professional', 'Confident', 'Friendly'];
  selectedTone = this.tones[0];
  coverLetterForm: FormGroup;
  coverLetterFacade = inject(CoverLetterFacade);
  authFacade = inject(AuthFacade);
  destroyRef = inject(DestroyRef);
  generatedText$ = this.coverLetterFacade.generatedText$;
  generating$ = this.coverLetterFacade.generating$;
  error$ = this.coverLetterFacade.error$;
  resumes$ = this.coverLetterFacade.resumes$;
  aiUsage$ = this.authFacade.user$.pipe(map((user) => getAiUsageSummary(user)));
  copied = false;

  constructor() {
    this.coverLetterForm = new FormGroup({
      resumeId: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      jobDescription: new FormControl('', Validators.required),
      tone: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.coverLetterForm.controls['tone'].setValue(this.selectedTone);
    this.resumes$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((resumes) => {
        const resumeIdControl = this.coverLetterForm.controls['resumeId'];
        if (resumeIdControl.value || !resumes.length) {
          return;
        }

        resumeIdControl.setValue(resumes[0].id ?? '');
      });
  }

  selectTone(tone: string) {
    this.selectedTone = tone;
    this.coverLetterForm.controls['tone'].setValue(tone);
  }

  async onSubmit() {
    if (!this.coverLetterForm.valid) {
      return;
    }

    const formData = this.coverLetterForm.value;
    const resumeTextResult = await this.coverLetterFacade.getResumeTextById(formData.resumeId ?? '');
    if (!resumeTextResult.ok) {
      this.coverLetterFacade.reportGenerationError(resumeTextResult.error);
      return;
    }

    this.coverLetterFacade.generateCoverLetter(
      resumeTextResult.resumeText,
      formData.jobDescription,
      formData.companyName,
      formData.position,
      formData.tone,
    );
  }

  async copyText(text: string) {
    if (!text?.trim()) {
      return;
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      this.copied = true;
      setTimeout(() => (this.copied = false), 1800);
      return;
    }

    this.copied = false;
  }

  formatError(error: unknown): string {
    if (typeof error === 'string') {
      return error;
    }

    if (error && typeof error === 'object' && 'message' in error) {
      return String((error as { message: unknown }).message);
    }

    return 'Failed to generate cover letter. Please try again.';
  }

  usageMessage(used: number, limit: number, remaining: number) {
    if (remaining === 0) {
      return `You have used ${used} of ${limit} AI generations this month. Upgrade to continue.`;
    }

    return `${remaining} of ${limit} AI generations remaining this month.`;
  }

  formatResumeOptionLabel(resume: Resume) {
    const fullName = resume.personalInfo?.fullName?.trim();
    const jobTitle = resume.personalInfo?.jobTitle?.trim();
    const updatedAt = resume.meta?.updatedAt ? new Date(resume.meta.updatedAt) : null;
    const updatedLabel =
      updatedAt && !Number.isNaN(updatedAt.getTime())
        ? updatedAt.toLocaleDateString()
        : null;

    return [fullName || 'Untitled resume', jobTitle, updatedLabel ? `Updated ${updatedLabel}` : null]
      .filter(Boolean)
      .join(' | ');
  }
}
