import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LandingCta } from '../landing-cta/landing-cta';

interface Mission {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [MatIconModule, LandingCta],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  missions: Mission[] = [
    {
      icon: 'radar',
      title: 'AI Writing Help',
      description: 'Generate resume summaries, experience bullets, education notes, and cover letters.',
    },
    {
      icon: 'account_tree',
      title: 'Saved Resume Versions',
      description: 'Paid plans can save generated resumes and create tailored copies for target roles.',
    },
    {
      icon: 'shield',
      title: 'Account Workspace',
      description: 'Manage resumes, usage, billing, and application records from your account.',
    },
  ];

  ctaHelperTexts: string[] = ['Start with your details', 'Use AI where it helps'];
}
