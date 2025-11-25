import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Feature {
  id: number,
  icon: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-features',
  imports: [MatIconModule, CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  @ViewChild('features_list') featuresListElem!: ElementRef<HTMLDivElement>;
  features: Feature[] = [
    {
      id: 0,
      icon: 'book',
      title: 'AI Resume Generator',
      description:
        'Create professional resumes tailored to any job with AI-powered content generation.',
    },
    {
      id: 1,
      icon: 'insert_drive_file',
      title: 'AI Cover Letters',
      description: 'Generate compelling cover letters that get you noticed by recruiters.',
    },
    {
      id: 2,
      icon: 'badge',
      title: 'LinkedIn Optimization',
      description: 'Optimize your LinkedIn profile to attract more opportunities.',
    },
    {
      id: 3,
      icon: 'record_voice_over',
      title: 'Interview AI Coach',
      description: 'Practice interviews with AI and get real-time feedback on your answers.',
    },
  ];

  // features: any = {
  //   0: {
  //     id: 0,
  //     icon: 'book',
  //     title: 'AI Resume Generator',
  //     description:
  //       'Create professional resumes tailored to any job with AI-powered content generation.',
  //   },
  // };
}
