import { Resume } from '../../../../core/interfaces/resumes.interface';

export function buildCoverLetterResumeSelection(resume: Resume) {
  return {
    resumeText: formatResumeAsText(resume),
    resumeLabel: formatResumeLabel(resume),
  };
}

function formatResumeLabel(resume: Resume): string {
  const fullName = resume.personalInfo?.fullName?.trim() ?? '';
  const jobTitle = resume.personalInfo?.jobTitle?.trim() ?? '';

  return [fullName, jobTitle].filter(Boolean).join(' - ') || 'Untitled resume';
}

function formatResumeAsText(resume: Resume): string {
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
