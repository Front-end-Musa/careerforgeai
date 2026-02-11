import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResumesCreate } from '../resumes-create/resumes-create';

@Component({
  selector: 'app-resumes-edit',
  imports: [ResumesCreate],
  templateUrl: './resumes-edit.html',
  styleUrl: './resumes-edit.scss',
})
export class ResumesEdit {
  private route = inject(ActivatedRoute);
  resumeId = this.route.snapshot.paramMap.get('id');
}

