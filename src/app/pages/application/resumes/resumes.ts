import { Component } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Resume } from '../../../core/interfaces/resumes.interface';
import { DirName } from '../dir-name/dir-name';
import { MatButton } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { GenerateBtn } from '../../generate-btn/generate-btn';
import { ToneChoose } from '../../tone-choose/tone-choose';

@Component({
  selector: 'app-resumes',
  imports: [DirName, MatButton, ReactiveFormsModule, MatLabel, MatInput, GenerateBtn, ToneChoose],
  templateUrl: './resumes.html',
  styleUrl: './resumes.scss',
})
export class Resumes {
  resumeGroup: FormGroup;
  resumeGenerated: boolean = false;
  tones: string[] = ['Modern', 'Minimal', 'Creative'];
  resumes: Resume[] = [];
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
