import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generate-btn',
  standalone: true,
  imports: [],
  templateUrl: './generate-btn.html',
  styleUrl: './generate-btn.scss',
})
export class GenerateBtn {
  @Input() submitForm?: FormGroup;
  @Input() disabled: boolean = false;
  @Input() label: string = 'Generate with AI';
  @Input() compact: boolean = false;
  @Output() generate = new EventEmitter<void>();

  onSubmit() {
    if (this.disabled) {
      return;
    }

    if (this.submitForm && this.submitForm.invalid) {
      Object.keys(this.submitForm.controls).forEach((key) => {
        this.submitForm?.get(key)?.markAsTouched();
      });
      return;
    }

    this.generate.emit();
  }
}
