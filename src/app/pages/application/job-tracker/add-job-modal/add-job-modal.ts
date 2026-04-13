import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Job } from '../../../../core/interfaces/job.interface';
import { parseIsoDate } from '../../../../core/utils/date-field.util';
import { DateField } from '../../../../lib/date-field/date-field';

@Component({
  selector: 'app-add-job-modal',
  imports: [ReactiveFormsModule, MatIconModule, DateField],
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
    dateApplied: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: { modalMode: 'add' | 'edit'; existingJob?: Job }) {}

  ngOnInit() {
    this.modalMode = this.data.modalMode;
    this.existingJob = this.data.existingJob || null;

    if (this.modalMode === 'edit' && this.existingJob) {
      this.jobForm.patchValue({
        title: this.existingJob.title,
        company: this.existingJob.company,
        status: this.existingJob.status,
        dateApplied: this.normalizeIncomingDate(this.existingJob.dateApplied),
      });
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.jobForm.invalid) {
      return;
    }

    const rawValue = this.jobForm.getRawValue();

    if (this.modalMode === 'add') {
      this.dialogRef.close({ action: 'save', data: rawValue });
      return;
    }

    if (this.existingJob?.id) {
      this.dialogRef.close({
        action: 'save',
        data: { id: this.existingJob.id, ...rawValue },
      });
    }
  }

  private normalizeIncomingDate(value?: string | null) {
    if (!value) {
      return '';
    }

    const isoDate = value.slice(0, 10);
    return parseIsoDate(isoDate) ? isoDate : '';
  }
}
