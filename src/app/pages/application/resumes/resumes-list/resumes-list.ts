import { Component, inject } from '@angular/core';
import { ResumeCard } from './resume-card/resume-card';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumesFacade } from '../data/resumes.facade';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-resumes-list',
  imports: [ResumeCard, AsyncPipe],
  templateUrl: './resumes-list.html',
  styleUrl: './resumes-list.scss',
})
export class ResumesList {
  private resumesFacade = inject(ResumesFacade);
  resumes: Observable<Resume[]> = this.resumesFacade.resumes$;
  loading: Observable<boolean> = this.resumesFacade.loading$
  // resumes: Resume[] = [
  //   {
  //     id: '1',
  //     userId: 'u1',
  //     email: 'john.doe@example.com',
  //     tone: 'modern',
  //     generatedContent: {
  //       summary: 'Experienced software engineer with a passion for developing innovative programs.',
  //       experience: ['Company A - Software Engineer (2018-2020)', 'Company B - Senior Developer (2020-Present)'],
  //     },
  //     createdAt: '2023-01-01T12:00:00Z',
  //     updatedAt: '2023-06-01T12:00:00Z',
  //     fullName: 'John Doe',
  //     jobTitle: 'Software Engineer',
  //     skills: ['JavaScript', 'TypeScript', 'Angular'],
  //   },
  //   {
  //     id: '2',
  //     userId: 'u2',
  //     email: 'jane.smith@example.com',
  //     tone: 'creative',
  //     generatedContent: {
  //       summary: 'Creative frontend developer with expertise in building responsive web applications.',
  //       experience: ['Company C - Frontend Developer (2019-2021)', 'Company D - Senior Frontend Developer (2021-Present)'],
  //     },
  //     createdAt: '2023-02-01T12:00:00Z',
  //     updatedAt: '2023-07-01T12:00:00Z',
  //     fullName: 'Jane Smith',
  //     jobTitle: 'Frontend Developer',
  //     skills: ['HTML', 'CSS', 'React'],
  //   },
  //   {
  //     id: '3',
  //     userId: 'u3',
  //     email: 'alice.johnson@example.com',
  //     tone: 'minimal',
  //     generatedContent: {
  //       summary: 'Experienced backend developer specializing in scalable server-side applications.',
  //       experience: ['Company E - Backend Developer (2017-2019)', 'Company F - Senior Backend Developer (2019-Present)'],
  //     },
  //     createdAt: '2023-03-01T12:00:00Z',
  //     updatedAt: '2023-08-01T12:00:00Z',
  //     fullName: 'Alice Johnson',
  //     jobTitle: 'Backend Developer',
  //     skills: ['Node.js', 'Express', 'MongoDB'],
  //   },
  // ];

  ngOnInit() {
    this.resumesFacade.loadResumes();

    this.resumes = this.resumesFacade.resumes$;
  }
}
