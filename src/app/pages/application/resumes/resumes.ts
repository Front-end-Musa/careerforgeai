import { Component } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Resume } from '../../../core/interfaces/resumes.interface';
import { DirName } from '../dir-name/dir-name';
import { MatButton } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { GenerateBtn } from '../../generate-btn/generate-btn';

@Component({
  selector: 'app-resumes',
  imports: [DirName, MatButton, ReactiveFormsModule, MatLabel, MatInput, GenerateBtn],
  templateUrl: './resumes.html',
  styleUrl: './resumes.scss',
})
export class Resumes {
  resumeGroup: FormGroup;
  resumeGenerated: boolean = false;
  resumes: Resume[] = [
    {
      id: 'res-001',
      name: 'John Doe',
      title: 'Junior Frontend Developer',
      email: 'john.doe@gmail.com',
      phone: '+1 555 234 567',
      location: 'London, UK',
      lastUpdated: '2025-12-10',
      score: 72,
      experienceYears: 1,
      skills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Git'],
      sections: {
        summary: true,
        experience: true,
        education: true,
        projects: false,
        certifications: false,
      },
      ats: {
        keywordMatch: 68,
        formatting: 80,
        readability: 75,
      },
    },
    {
      id: 'res-002',
      name: 'Sarah Ahmed',
      title: 'Frontend Developer',
      email: 'sarah.ahmed@gmail.com',
      phone: '+44 7700 900123',
      location: 'Manchester, UK',
      lastUpdated: '2025-12-12',
      score: 84,
      experienceYears: 3,
      skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'REST APIs'],
      sections: {
        summary: true,
        experience: true,
        education: true,
        projects: true,
        certifications: true,
      },
      ats: {
        keywordMatch: 82,
        formatting: 88,
        readability: 85,
      },
    },
    {
      id: 'res-003',
      name: 'Alex Kim',
      title: 'Entry-Level Web Developer',
      email: 'alex.kim@gmail.com',
      phone: '+49 151 23456789',
      location: 'Berlin, Germany',
      lastUpdated: '2025-12-08',
      score: 61,
      experienceYears: 0,
      skills: ['HTML', 'CSS', 'JavaScript'],
      sections: {
        summary: false,
        experience: false,
        education: true,
        projects: true,
        certifications: false,
      },
      ats: {
        keywordMatch: 55,
        formatting: 70,
        readability: 65,
      },
    },
  ];
  constructor(private storage: StorageService) {
    this.resumeGroup = new FormGroup({
      fullName: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      experience: new FormControl('', Validators.required),
      skills: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.storage.set('resumes', JSON.stringify(this.resumes));
  }
}
