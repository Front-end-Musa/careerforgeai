import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Resume } from '../../../../core/interfaces/resumes.interface';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './resume-preview.html',
  styleUrl: './resume-preview.scss',
})
export class ResumePreview {
  @Input() resume?: Partial<Resume>;
  @Input() templateId: 'classic' | 'modern' | 'minimal' = 'classic';
}
