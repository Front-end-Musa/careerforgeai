import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumeService } from '../../../../core/services/resume.service';
import { deleteCoverLetter, generateCoverLetter, loadAllCoverLetters } from './cover-letter.actions';
import {
  selectCoverLettersError,
  selectCoverLettersGenerating,
  selectGeneratedCoverLetterText,
  selectCoverLettersStale,
  selectCoverLettersStatus,
} from './cover-letter.selectors';
import { ActionTraceService } from '../../../../core/state/debug/action-trace.service';

@Injectable({
  providedIn: 'root',
})
export class CoverLetterFacade {
  private store = inject(Store);
  private resumeService = inject(ResumeService);
  private trace = inject(ActionTraceService);
  private status = this.store.selectSignal(selectCoverLettersStatus);
  private stale = this.store.selectSignal(selectCoverLettersStale);

  generatedText$ = this.store.select(selectGeneratedCoverLetterText);
  generating$ = this.store.select(selectCoverLettersGenerating);
  error$ = this.store.select(selectCoverLettersError);

  ensureLoaded(source = 'CoverLetterFacade.ensureLoaded', force = false) {
    const status = this.status();
    if (!force && (status === 'loading' || (status === 'loaded' && !this.stale()))) {
      this.trace.traceSkip(loadAllCoverLetters.type, source, 'cover letters already loaded', {
        coverLettersStatus: status,
        coverLettersStale: this.stale(),
      });
      return;
    }

    const action = loadAllCoverLetters();
    this.trace.traceDispatch(action, source, {
      force,
      coverLettersStatus: status,
      coverLettersStale: this.stale(),
    });
    this.store.dispatch(action);
  }

  deleteCoverLetter(id: string) {
    const action = deleteCoverLetter({ id });
    this.trace.traceDispatch(action, 'CoverLetterFacade.deleteCoverLetter');
    this.store.dispatch(action);
  }

  generateCoverLetter(
    resumeText: string,
    jobDescription: string,
    companyName: string,
    position: string,
    tone: string,
    resumeId: string,
    resumeLabel: string,
  ) {
    const action = generateCoverLetter({
      resumeText,
      jobDescription,
      companyName,
      position,
      tone,
      resumeId,
      resumeLabel,
    });
    this.trace.traceDispatch(action, 'CoverLetterFacade.generateCoverLetter');
    this.store.dispatch(action);
  }

  async getResumeSelectionById(
    resumeId: string,
  ): Promise<{ resumeText: string; resumeLabel: string } | null> {
    const resume = await firstValueFrom(this.resumeService.getResumeById(resumeId));
    if (!resume) {
      return null;
    }

    return {
      resumeText: this.formatResumeAsText(resume),
      resumeLabel: this.formatResumeLabel(resume),
    };
  }

  private formatResumeLabel(resume: Resume): string {
    const fullName = resume.personalInfo?.fullName?.trim() ?? '';
    const jobTitle = resume.personalInfo?.jobTitle?.trim() ?? '';

    return [fullName, jobTitle].filter(Boolean).join(' - ') || 'Untitled resume';
  }

  private formatResumeAsText(resume: Resume): string {
    const lines: string[] = [];

    if (resume.personalInfo?.fullName || resume.personalInfo?.jobTitle) {
      lines.push(
        `${resume.personalInfo?.fullName ?? ''} ${resume.personalInfo?.jobTitle ? `- ${resume.personalInfo.jobTitle}` : ''}`.trim(),
      );
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
}
