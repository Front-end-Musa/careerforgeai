import { Component } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { User } from '../../../core/interfaces/user.interface';
import { Job } from '../../../core/interfaces/job.interface';
import { Resume } from '../../../core/interfaces/resumes.interface';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  resumes: Resume[] = [];
  applications: Job[] = [];
  interviews: Job[] = [];
  user: User = {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'johndoe',
    role: 'User',
    profileViews: 120,
  };

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    const storedApplications: Job[] = JSON.parse(this.storageService.get('jobs-track') || '{}');
    const storedResumes: Resume[] = JSON.parse(this.storageService.get('resumes') || '{}');
    if (storedApplications) {
      this.applications = storedApplications.filter((job) => job.status === 'applied');
      this.interviews = storedApplications.filter((job) => job.status === 'interviewing');
    }
    if (storedResumes) {
      this.resumes = storedResumes;
    }
  }
}
