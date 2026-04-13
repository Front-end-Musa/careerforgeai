import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import {
    deleteCoverLetter,
    generateCoverLetter,
    generateCoverLetterFailure,
    loadAllCoverLetters,
} from "./cover-letter.actions";
import { selectCoverLettersError, selectCoverLettersGenerating, selectGeneratedCoverLetterText } from "./cover-letter.selectors";
import { ResumeService } from "../../../../core/services/resume.service";
import { firstValueFrom } from "rxjs";
import { Resume } from "../../../../core/interfaces/resumes.interface";

type LatestResumeTextResult =
  | { ok: true; resumeText: string }
  | { ok: false; error: string };

@Injectable({
    providedIn: "root"
})
export class CoverLetterFacade {
    store = inject(Store);
    resumeService = inject(ResumeService);
    generatedText$ = this.store.select(selectGeneratedCoverLetterText);
    generating$ = this.store.select(selectCoverLettersGenerating);
    error$ = this.store.select(selectCoverLettersError);
    resumes$ = this.resumeService.getResumesForUser();
    constructor(  ) { }

    loadCoverLetters() {
        this.store.dispatch(loadAllCoverLetters());
    }

    deleteCoverLetter(id: string) {
        this.store.dispatch(deleteCoverLetter({ id }));
    }

    generateCoverLetter(resumeText: string, jobDescription: string, companyName: string, position: string, tone: string) {
        this.store.dispatch(generateCoverLetter({ resumeText, jobDescription, companyName, position, tone }));
    }

    reportGenerationError(error: string) {
        this.store.dispatch(generateCoverLetterFailure({ error }));
    }

    async getResumeTextById(resumeId: string): Promise<LatestResumeTextResult> {
        const trimmedResumeId = resumeId.trim();
        if (!trimmedResumeId) {
            return {
                ok: false,
                error: "Select a resume before generating a cover letter.",
            };
        }

        const resumes = await firstValueFrom(this.resumes$);
        const selectedResume = resumes?.find((resume) => resume.id === trimmedResumeId);
        if (!selectedResume) {
            return {
                ok: false,
                error: "The selected resume could not be found.",
            };
        }

        const resumeText = this.formatResumeAsText(selectedResume);
        if (!resumeText) {
            return {
                ok: false,
                error: "Add some resume details before generating a cover letter.",
            };
        }

        return {
            ok: true,
            resumeText,
        };
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
}
