import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatLabel } from '@angular/material/form-field';
import { Logo } from '../../logos/logo/logo';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { AuthFacade } from '../data/auth.facade';
import { User } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-signup',
  imports: [MatCardModule, MatLabel, ReactiveFormsModule, MatError, CommonModule, Logo],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  signupForm: FormGroup;
  router = inject(Router);
  authFacade = inject(AuthFacade);
  constructor() {
    this.signupForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const signupCredentials: User = {
      name: this.signupForm.controls['fullName'].value,
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value,
      role:
        this.signupForm.controls['email'].value == 'rufatulymusa567@gmail.com' &&
        this.signupForm.controls['password'].value == 'playwithme'
          ? 'Admin'
          : 'User',
      profileViews: 0,
    };
    this.authFacade.register(signupCredentials);
    this.authFacade.user$.subscribe({
      next: (user) => {
        console.log(user)
      }
    })
  }

  ngOnInit() {
    this.authFacade.user$.subscribe({
      next: (user) => {
        console.log(user);
      },
    }).unsubscribe();
  }
}
