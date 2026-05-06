import { Component } from '@angular/core';
import { LandingCta } from '../landing-cta/landing-cta';
import { Step } from './step/step';

@Component({
  selector: 'app-simple-steps',
  imports: [LandingCta, Step],
  templateUrl: './simple-steps.html',
  styleUrl: './simple-steps.scss',
})
export class SimpleSteps {
  steps = [
    {
      id: 0,
      title: 'Start with your story',
      description:
        'Import details manually, upload an old resume, or start from a blank page and organize the essentials.',
      stepIcon: 'description',
    },
    {
      id: 1,
      title: 'Let AI do the heavy lifting',
      description:
        'Generate summaries, bullets, education notes, full resumes, or cover letters, then edit the wording.',
      stepIcon: 'auto_fix_high',
    },
    {
      id: 2,
      title: 'Export, apply, and track',
      description:
        'Paid plans can save generated resumes and download PDFs. Premium adds the application tracker.',
      stepIcon: 'send',
    },
  ];
}
