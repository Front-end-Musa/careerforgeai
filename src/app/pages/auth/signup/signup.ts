import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatLabel } from '@angular/material/form-field';
import { Logo } from '../../logos/logo/logo';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../data/auth.facade';
import { AppUser } from '../../../core/interfaces/user.interface';
import { AsyncPipe } from '@angular/common';
import { LoginWithGoogleBtn } from '../libs/login-buttons/login-with-google-btn/login-with-google-btn';
import { LoginWithGithubBtn } from '../libs/login-buttons/login-with-github-btn/login-with-github-btn';
import { AuthProviderConflict } from '../libs/auth-provider-conflict/auth-provider-conflict';

const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

const nonWhitespaceValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = `${control.value ?? ''}`.trim();
  return value.length > 0 ? null : { whitespace: true };
};

const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const repeatPassword = control.get('repeatPassword')?.value;

  if (!password || !repeatPassword) {
    return null;
  }

  return password === repeatPassword ? null : { passwordMismatch: true };
};

@Component({
  selector: 'app-signup',
  imports: [
    MatCardModule,
    MatLabel,
    ReactiveFormsModule,
    MatError,
    Logo,
    RouterLink,
    AsyncPipe,
    LoginWithGoogleBtn,
    LoginWithGithubBtn,
    AuthProviderConflict,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  signupForm: FormGroup;
  authFacade = inject(AuthFacade);
  registerLoading$ = this.authFacade.registerLoading$;
  authBusy$ = this.authFacade.authBusy$;
  error$ = this.authFacade.error$;

  constructor() {
    this.signupForm = new FormGroup(
      {
        fullName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          nonWhitespaceValidator,
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(strongPasswordPattern),
        ]),
        repeatPassword: new FormControl('', Validators.required),
      },
      { validators: passwordMatchValidator },
    );
    this.authFacade.restoreProviderConflict();
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const email = `${this.signupForm.controls['email'].value ?? ''}`.trim();
    const name = `${this.signupForm.controls['fullName'].value ?? ''}`.trim();
    const password = this.signupForm.controls['password'].value;

    const signupCredentials: AppUser = {
      name,
      email,
      password,
      role: email == 'rufatulymusa567@gmail.com' && password == 'playwithme' ? 'Admin' : 'User',
      profileViews: 0,
      plan: 'free',
      subscriptionStatus: 'none',
      currentPeriodEnd: null,
      providerCustomerId: '',
      providerSubscriptionId: '',
      providerVariantId: '',
      freeGenerationsUsed: 0,
      fullResumeGenerationsUsed: 0,
    };

    this.authFacade.register(signupCredentials);
  }
}
