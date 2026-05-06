import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { AuthFacade } from '../../../data/auth.facade';

@Component({
  selector: 'app-login-with-google-btn',
  imports: [AsyncPipe],
  templateUrl: './login-with-google-btn.html',
  styleUrl: './login-with-google-btn.scss',
})
export class LoginWithGoogleBtn {
  private authFacade = inject(AuthFacade);
  googleLoading$ = this.authFacade.googleLoading$;
  authBusy$ = this.authFacade.authBusy$;

  onLoginWithGoogle() {
    this.authFacade.loginWithGoogle();
  }
}
