import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
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
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../data/auth.facade';
import { AuthStatus } from '../data/auth.reducer';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginWithGoogleBtn } from '../libs/login-buttons/login-with-google-btn/login-with-google-btn';

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
    MatProgressSpinnerModule,
    LoginWithGoogleBtn
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;
  authFacade = inject(AuthFacade);
  authStatus = AuthStatus;
  status$ = this.authFacade.status$;
  error$ = this.authFacade.error$;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
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
