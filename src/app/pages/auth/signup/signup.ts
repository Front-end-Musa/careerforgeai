import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatLabel } from '@angular/material/form-field';
import { Logo } from '../../logo/logo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [MatCardModule, MatLabel, ReactiveFormsModule, MatError, CommonModule, Logo],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  signupForm: FormGroup;
  router = inject(Router);
  constructor() {
    this.signupForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;
      // Handle login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      this.router.navigate(['/application']);
    } else {
      console.log('Form is invalid');
    }
  }
}
