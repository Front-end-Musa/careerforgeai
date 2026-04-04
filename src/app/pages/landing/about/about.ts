import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LandingCta } from '../landing-cta/landing-cta';

interface Mission {
  icon: string,
  title: string,
  description: string,
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
      icon: 'track_changes',
      title: 'Mission-Driven',
      description: 'Help people land their dream jobs using AI technology',
    },
    {
      icon: 'person',
      title: 'User-Focused',
      description: 'Every feature designed with job seekers in mind',
    },
    {
      icon: 'lock_outline',
      title: 'Privacy First',
      description: 'Your data is secure and never shared',
    },
  ];

  ctaHelperTexts: string[] = ['Trusted by job seekers worldwide', 'Launch your first resume in minutes'];
}
