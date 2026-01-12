import { Component } from '@angular/core';
import { CreateListResumeSwitch } from '../../../buttons/create-list-resume-switch/create-list-resume-switch';
import { ToneChoose } from '../../../buttons/tone-choose/tone-choose';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { GenerateBtn } from '../../../buttons/generate-btn/generate-btn';
import { DirName } from '../../dir-name/dir-name';

@Component({
  selector: 'app-resumes-create',
  imports: [
    MatButton,
    ReactiveFormsModule,
    MatLabel,
    MatInput,
    GenerateBtn,
    ToneChoose,
  ],
  templateUrl: './resumes-create.html',
  styleUrl: './resumes-create.scss',
})
export class ResumesCreate {
  tones: string[] = ['Modern', 'Minimal', 'Creative'];
  selectedTone: string = this.tones[0];
  resumeGroup: FormGroup;
  resumeGenerated: boolean = false;
  constructor() {
    this.resumeGroup = new FormGroup({
      fullName: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      experience: new FormControl('', Validators.required),
      skills: new FormControl('', Validators.required),
    });
  }
}
