import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Feature {
  id: number,
  icon: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-features',
  imports: [MatIconModule],
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
      icon: 'description',
      title: 'Resume Builder + Templates',
      description: 'Edit, preview, and export resumes with flexible templates.',
    },
    {
      id: 3,
      icon: 'view_kanban',
      title: 'Job Tracker',
      description: 'Organize applications in a kanban-style board.',
    },
  ];
}
