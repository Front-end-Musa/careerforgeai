import { Component, Output, EventEmitter, Input, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { Job } from '../../../../core/interfaces/job.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  modalMode: 'add' | 'edit' = 'add';
  existingJob: Job | null = null;

  dialogRef = inject(MatDialogRef<AddJobModal>);

  jobForm = new FormGroup({
    title: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    dateApplied: new FormControl<Date | string | null>(null, Validators.required),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (this.modalMode === 'edit' && this.existingJob) {
      this.jobForm.patchValue({
        title: this.existingJob.title,
        company: this.existingJob.company,
        status: this.existingJob.status,
        dateApplied: this.existingJob.dateApplied,
      });
    }
  }

  ngOnInit() {
    this.modalMode = this.data.modalMode;
    this.existingJob = this.data.existingJob || null;

    if (this.modalMode === 'edit' && this.existingJob) {
      this.jobForm.patchValue({
        title: this.existingJob.title,
        company: this.existingJob.company,
        status: this.existingJob.status,
        dateApplied: this.existingJob.dateApplied,
      });
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.jobForm.invalid) return;
    const rawValue = this.jobForm.getRawValue();
    const dateApplied = rawValue.dateApplied;
    const normalizedDate =
      dateApplied instanceof Date ? dateApplied.toISOString().slice(0, 10) : (dateApplied ?? '');

    if (this.modalMode === 'add') {
      this.dialogRef.close({ action: 'save', data: { ...rawValue, dateApplied: normalizedDate } });
    } else if (this.modalMode === 'edit' && this.existingJob) {
      this.dialogRef.close({
        action: 'save',
        data: { id: this.existingJob.id, ...rawValue, dateApplied: normalizedDate },
      });
    }
  }
}
