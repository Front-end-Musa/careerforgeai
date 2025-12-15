import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-job-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './add-job-modal.html',
  styleUrl: './add-job-modal.scss',
})
export class AddJobModal {
  @Output() jobAdded = new EventEmitter<any>();

  isOpen = false;
  jobForm = new FormGroup({
    title: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    dateApplied: new FormControl('', Validators.required),
  });

  constructor() {}

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  onSubmit() {
    if (this.jobForm.invalid) return;
    // Emit the new job to the parent to handle persistence
    this.jobAdded.emit(this.jobForm.value);
    console.log('Job added (emitted):', this.jobForm.value);
    this.closeModal();
    this.jobForm.reset();
  }
}
