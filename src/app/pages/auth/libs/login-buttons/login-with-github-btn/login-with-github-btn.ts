import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { AuthFacade } from '../../../data/auth.facade';

@Component({
  selector: 'app-login-with-github-btn',
  imports: [AsyncPipe],
  templateUrl: './login-with-github-btn.html',
  styleUrl: './login-with-github-btn.scss',
})
export class LoginWithGithubBtn {
  private authFacade = inject(AuthFacade);
  githubLoading$ = this.authFacade.githubLoading$;
  authBusy$ = this.authFacade.authBusy$;

  onLoginWithGithub() {
    this.authFacade.loginWithGithub();
  }
}
