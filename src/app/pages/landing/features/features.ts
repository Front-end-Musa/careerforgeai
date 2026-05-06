import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LandingCta } from '../landing-cta/landing-cta';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  imports: [MatIconModule, LandingCta],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  @ViewChild('features_list') featuresListElem!: ElementRef<HTMLDivElement>;
  features: Feature[] = [
    {
      id: 0,
      icon: 'auto_fix_high',
      title: 'AI Writing',
      description:
        'Generate summaries, experience bullets, education notes, and complete resume drafts from the details you provide.',
    },
    {
      id: 1,
      icon: 'rule',
      title: 'Role Tailoring',
      description:
        'Paid plans can tailor a saved resume with the target company, position, and job description.',
    },
    {
      id: 2,
      icon: 'mail',
      title: 'Cover Letters',
      description:
        'Create a cover letter from your resume, the job details, company name, position, and preferred tone.',
    },
    {
      id: 3,
      icon: 'view_kanban',
      title: 'Premium Application Pipeline',
      description:
        'Premium users can track companies and application stages in a kanban-style job tracker.',
    },
  ];

  ctaHelperTexts: string[] = ['Start with your resume', 'Build a stronger application'];
}
