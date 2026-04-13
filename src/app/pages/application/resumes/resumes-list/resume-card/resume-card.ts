import { Component, Input } from '@angular/core';
import { Resume } from '../../../../../core/interfaces/resumes.interface';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ResumesFacade } from '../../data/resumes.facade';

@Component({
  selector: 'app-resume-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './resume-card.html',
  styleUrl: './resume-card.scss',
})
export class ResumeCard {
  @Input() resume!: Resume;

  constructor(private resumesFacade: ResumesFacade) { }

  downloadResume() {
    return this.resumesFacade.exportResumeToPdf(this.resume, this.resume.templateId);
  }
  
  deleteResume() {
    this.resumesFacade.deleteResume(this.resume.id ? this.resume.id : '');
  }
}
