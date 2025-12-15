import { Component, inject } from '@angular/core';
import { Logo } from '../../logos/logo/logo';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatLabel } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { MatAnchor } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    Logo,
    MatCardModule,
    MatLabel,
    MatAnchor,
    MatIconModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    MatError,
    CommonModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;
  router = inject(Router);

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      // Handle login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      this.router.navigate(['/application']);
    } else {
      console.log('Form is invalid');
    }
  }
}
