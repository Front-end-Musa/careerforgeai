import { Component, Input } from '@angular/core';
import { Resume } from '../../../../../core/interfaces/resumes.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-resume-card',
  imports: [DatePipe],
  templateUrl: './resume-card.html',
  styleUrl: './resume-card.scss',
})
export class ResumeCard {
  @Input() resume!: Resume;
}
