import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatLabel } from '@angular/material/form-field';
import { DirName } from '../dir-name/dir-name';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenerateBtn } from '../../buttons/generate-btn/generate-btn';
import { ToneChoose } from '../../buttons/tone-choose/tone-choose';
import { CoverLetterFacade } from './data/cover-letter.facade';
import { ResumeService } from '../../../core/services/resume.service';
import { firstValueFrom } from 'rxjs';
import { Resume } from '../../../core/interfaces/resumes.interface';

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
  resumeService = inject(ResumeService);
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

  async getResumeText(): Promise<string> {
    const resumes = await firstValueFrom(this.resumeService.getResumesForUser());
    const latestResume = resumes?.[0];
    if (!latestResume) {
      return '';
    }

    return this.formatResumeAsText(latestResume);
  }

  private formatResumeAsText(resume: Resume): string {
    const lines: string[] = [];

    if (resume.personalInfo?.fullName || resume.personalInfo?.jobTitle) {
      lines.push(`${resume.personalInfo?.fullName ?? ''} ${resume.personalInfo?.jobTitle ? `- ${resume.personalInfo.jobTitle}` : ''}`.trim());
    }

    if (resume.summary) {
      lines.push(`Summary: ${resume.summary}`);
    }

    if (resume.skills?.length) {
      lines.push(`Skills: ${resume.skills.join(', ')}`);
    }

    if (resume.experience?.length) {
      lines.push('Experience:');
      for (const item of resume.experience) {
        const header = [item.role, item.company].filter(Boolean).join(' at ');
        if (header) {
          lines.push(`- ${header}`);
        }

        if (item.description?.length) {
          for (const bullet of item.description) {
            lines.push(`  - ${bullet}`);
          }
        }
      }
    }

    if (resume.education?.length) {
      lines.push('Education:');
      for (const item of resume.education) {
        const header = [item.degree, item.school].filter(Boolean).join(', ');
        if (header) {
          lines.push(`- ${header}`);
        }
      }
    }

    if (resume.projects?.length) {
      lines.push('Projects:');
      for (const item of resume.projects) {
        const text = [item.name, item.description].filter(Boolean).join(' - ');
        if (text) {
          lines.push(`- ${text}`);
        }
      }
    }

    if (resume.certifications?.length) {
      lines.push(`Certifications: ${resume.certifications.join(', ')}`);
    }

    return lines.join('\n').trim();
  }

  async onSubmit() {
    if (this.coverLetterForm.valid) {
      const formData = this.coverLetterForm.value;
      const resumeText = await this.getResumeText();
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
