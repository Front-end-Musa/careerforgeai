import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthProviderId } from '../../../../core/interfaces/auth-linking.interface';
import { AuthFacade } from '../../data/auth.facade';

@Component({
  selector: 'app-auth-provider-conflict',
  imports: [AsyncPipe, ReactiveFormsModule, MatButtonModule, MatError, MatInputModule, MatLabel],
  templateUrl: './auth-provider-conflict.html',
  styleUrl: './auth-provider-conflict.scss',
})
export class AuthProviderConflict {
  authFacade = inject(AuthFacade);
  conflict$ = this.authFacade.providerConflict$;
  authBusy$ = this.authFacade.authBusy$;

  passwordForm = new FormGroup({
    password: new FormControl('', Validators.required),
  });

  hasPasswordProvider(providers: AuthProviderId[]): boolean {
    return providers.includes('password');
  }

  hasPopupProvider(providers: AuthProviderId[], provider: AuthProviderId): boolean {
    return providers.includes(provider);
  }

  getProviderLabel(provider: AuthProviderId): string {
    switch (provider) {
      case 'google.com':
        return 'Google';
      case 'github.com':
        return 'GitHub';
      case 'password':
        return 'email and password';
    }
  }

  continueWithPassword(email: string) {
    if (!this.passwordForm.valid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    this.authFacade.continueConflictWithPassword({
      email,
      password: this.passwordForm.controls.password.value ?? '',
    });
  }

  continueWithPopup(provider: AuthProviderId) {
    this.authFacade.continueConflictWithPopup(provider);
  }

  clearConflict() {
    this.passwordForm.reset();
    this.authFacade.clearProviderConflict();
  }
}
