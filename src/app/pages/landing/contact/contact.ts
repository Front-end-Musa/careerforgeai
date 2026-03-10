import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  contactForm: FormGroup;
  readonly isSubmitting = signal(false);
  readonly submitMessage = signal<string | null>(null);
  readonly submitError = signal<string | null>(null);

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid || this.isSubmitting()) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitMessage.set(null);
    this.submitError.set(null);

    try {
      const response = await fetch('https://formspree.io/f/mgolqdrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(this.contactForm.value),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form.');
      }

      this.contactForm.reset({
        name: '',
        email: '',
        message: '',
      });
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
      this.submitMessage.set('Message sent successfully.');
    } catch {
      this.submitError.set('Could not send your message. Please try again.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
