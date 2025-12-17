import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generate-btn',
  imports: [],
  templateUrl: './generate-btn.html',
  styleUrl: './generate-btn.scss',
})
export class GenerateBtn {
  @Input() submitForm!: FormGroup;

  onSubmit() {
    if (this.submitForm.valid) {
      const formData = this.submitForm.value;
      console.log('Form Data:', formData);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
}
