import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatLabel } from '@angular/material/form-field';
import { DirName } from '../dir-name/dir-name';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenerateBtn } from '../../buttons/generate-btn/generate-btn';
import { ToneChoose } from '../../buttons/tone-choose/tone-choose';
import { CoverLetterFacade } from './data/cover-letter.facade';

@Component({
  selector: 'app-cover-letter',
  imports: [AsyncPipe, MatLabel, DirName, ReactiveFormsModule, GenerateBtn, ToneChoose],
  templateUrl: './cover-letter.html',
  styleUrl: './cover-letter.scss',
})
export class CoverLetter implements OnInit {
  tones = ['Professional', 'Confident', 'Friendly'];
  selectedTone = this.tones[0];
  coverLetterForm: FormGroup;
  coverLetterFacade = inject(CoverLetterFacade);
  generatedText$ = this.coverLetterFacade.generatedText$;
  generating$ = this.coverLetterFacade.generating$;
  error$ = this.coverLetterFacade.error$;
  copied = false;

  constructor() {
    this.coverLetterForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      jobDescription: new FormControl('', Validators.required),
      tone: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.coverLetterForm.controls['tone'].setValue(this.selectedTone);
  }

  selectTone(tone: string) {
    this.selectedTone = tone;
    this.coverLetterForm.controls['tone'].setValue(tone);
  }

  async onSubmit() {
    if (this.coverLetterForm.valid) {
      const formData = this.coverLetterForm.value;
      const resumeText = await this.coverLetterFacade.getLatestResumeText();
      this.coverLetterFacade.generateCoverLetter(
        resumeText,
        formData.jobDescription,
        formData.companyName,
        formData.position,
        formData.tone,
      );
    } else {
    }
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
}
