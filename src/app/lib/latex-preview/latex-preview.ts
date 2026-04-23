import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import katex from 'katex';
import { Resume, ResumeTemplateId } from '../../core/interfaces/resumes.interface';
import { getTemplateById } from '../../pages/application/resumes/data/resume-template-catalog';
import { buildLatexPreviewSource } from '../../pages/application/resumes/data/resume-latex-preview';

type LatexSourceLine = {
  number: number;
  value: string;
};

@Component({
  selector: 'cf-latex-preview',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './latex-preview.html',
  styleUrl: './latex-preview.scss',
})
export class LatexPreview {
  @Input() resume?: Partial<Resume>;
  @Input() templateId: ResumeTemplateId = 'overleaf-jake';

  copied = false;

  private readonly sanitizer = inject(DomSanitizer);

  get templateName() {
    return getTemplateById(this.templateId).name;
  }

  get latexWordmark() {
    return this.sanitizer.bypassSecurityTrustHtml(
      katex.renderToString(String.raw`\LaTeX`, {
        throwOnError: false,
      }),
    );
  }

  get source() {
    return buildLatexPreviewSource(this.templateId, this.resume);
  }

  get sourceLines(): LatexSourceLine[] {
    return this.source.split('\n').map((value, index) => ({
      number: index + 1,
      value,
    }));
  }

  async copySource() {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(this.source);
    this.copied = true;

    window.setTimeout(() => {
      this.copied = false;
    }, 1800);
  }
}
