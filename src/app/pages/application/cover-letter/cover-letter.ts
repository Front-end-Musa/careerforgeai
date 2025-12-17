import { Component, OnInit } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { DirName } from '../dir-name/dir-name';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenerateBtn } from '../../generate-btn/generate-btn';
import { ToneChoose } from '../../tone-choose/tone-choose';

@Component({
  selector: 'app-cover-letter',
  imports: [MatLabel, DirName, CommonModule, ReactiveFormsModule, GenerateBtn, ToneChoose],
  templateUrl: './cover-letter.html',
  styleUrl: './cover-letter.scss',
})
export class CoverLetter implements OnInit {
  tones = ['Professional', 'Confident', 'Friendly'];
  selectedTone = this.tones[0];
  coverLetterForm: FormGroup;

  constructor() {
    this.coverLetterForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      jobDescription: new FormControl('', Validators.required),
      tone: new FormControl('', Validators.required),
    });
    this.coverLetterForm.controls['tone'].valueChanges.subscribe((value) => {
      console.log('Selected tone:', value);
    });
  }
  
  ngOnInit() {
    this.coverLetterForm.controls['tone'].setValue(this.selectedTone);
  }

  selectTone(tone: string) {
    this.selectedTone = tone;
    this.coverLetterForm.controls['tone'].setValue(tone);
  }

  onSubmit() {
    if (this.coverLetterForm.valid) {
      const formData = this.coverLetterForm.value;
      console.log('Form Data:', formData);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
}
