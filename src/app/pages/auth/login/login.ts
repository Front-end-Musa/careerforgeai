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
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthFacade } from '../data/auth.facade';
import { AppUser } from '../../../core/interfaces/user.interface';

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
    RouterLink
],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;
  router = inject(Router);
  authFacade = inject(AuthFacade);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authFacade.login({ email, password });
    } else {
      console.log('Form is invalid');
    }
  }
}
