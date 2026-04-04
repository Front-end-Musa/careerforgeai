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
      title: 'Enter Your Info',
      description:
        'Just fill in basic details about your work experience and education. Takes 2 minutes.',
      stepIcon: 'create',
    },
    {
      id: 1,
      title: 'AI Creates Your Resume',
      description:
        'Our AI writes professional content, formats everything perfectly, and optimizes for ATS..',
      stepIcon: 'auto_awesome',
    },
    {
      id: 2,
      title: 'Download & Apply',
      description:
        'Download your polished resume and start applying to jobs. Get more interviews guaranteed.',
      stepIcon: 'download',
    },
  ];
}
