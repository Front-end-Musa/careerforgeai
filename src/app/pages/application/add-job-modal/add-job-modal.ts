import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-job-modal',
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
  ],
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
    dateApplied: new FormControl<Date | string | null>(null, Validators.required),
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
    const rawValue = this.jobForm.getRawValue();
    const dateApplied = rawValue.dateApplied;
    const normalizedDate =
      dateApplied instanceof Date ? dateApplied.toISOString().slice(0, 10) : (dateApplied ?? '');

    // Emit the new job to the parent to handle persistence
    this.jobAdded.emit({ ...rawValue, dateApplied: normalizedDate });
    this.closeModal();
    this.jobForm.reset();
  }
}
