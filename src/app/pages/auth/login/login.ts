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
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../data/auth.facade';
import { LoginWithGoogleBtn } from '../libs/login-buttons/login-with-google-btn/login-with-google-btn';
import { LoginWithGithubBtn } from '../libs/login-buttons/login-with-github-btn/login-with-github-btn';
import { AuthProviderConflict } from '../libs/auth-provider-conflict/auth-provider-conflict';

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
    RouterLink,
    AsyncPipe,
    LoginWithGoogleBtn,
    LoginWithGithubBtn,
    AuthProviderConflict,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;
  authFacade = inject(AuthFacade);
  loginLoading$ = this.authFacade.loginLoading$;
  authBusy$ = this.authFacade.authBusy$;
  error$ = this.authFacade.error$;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    this.authFacade.restoreProviderConflict();
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authFacade.login({ email, password });
  }
}
