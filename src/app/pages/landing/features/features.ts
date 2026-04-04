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
      icon: 'book',
      title: 'AI-Powered Generation',
      description:
        'Our advanced AI writes professional resume content tailored to your experience and target job in seconds.',
    },
    {
      id: 1,
      icon: 'insert_drive_file',
      title: 'AI Cover Letters Generator',
      description:
        'Create personalized cover letters that complement your resume and highlight your best qualities for each job.',
    },
    {
      id: 2,
      icon: 'description',
      title: 'Professional Templates',
      description:
        'Choose from expertly designed templates that make you stand out while maintaining professional standards.',
    },
    {
      id: 3,
      icon: 'view_kanban',
      title: 'Job Application Tracker',
      description:
        'Track all your applications in one place with our intuitive kanban board. Never lose track of opportunities.',
    },
  ];

  ctaHelperTexts: string[] = ['Pick a template in seconds', 'Start building for free'];
}
