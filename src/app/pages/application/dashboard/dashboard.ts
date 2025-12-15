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
  user: User = {
    name: 'John Doe',
    role: 'User',
    resumes: [],
    applications: [],
    interviews: [],
    profileViews: 120,
  };

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    const storedApplications: Job[] = JSON.parse(this.storageService.get('jobs-track') || '{}');
    const storedResumes: Resume[] = JSON.parse(this.storageService.get('resumes') || '{}');
    if (storedApplications) {
      this.user.applications = storedApplications.filter((job) => job.status === 'applied');
      this.user.interviews = storedApplications.filter((job) => job.status === 'interviewing');
    }
    if (storedResumes) {
      this.user.resumes = storedResumes
    }
  }
}
