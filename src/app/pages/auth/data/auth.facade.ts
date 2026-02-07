import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthError, selectAuthStatus, selectUser } from './auth.selectors';
import { AppUser, LoginUser } from '../../../core/interfaces/user.interface';
import { initUser, loginUser, logout, registerUser } from './auth.actions';
import { AuthStatus } from './auth.reducer';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private store = inject(Store);

  user$ = this.store.select(selectUser);
  status$ = this.store.select(selectAuthStatus);
  error$ = this.store.select(selectAuthError);

  register(user: AppUser) {
    this.store.dispatch(registerUser({ user }));
  }

  login(user: LoginUser) {
    this.store.dispatch(loginUser({ user }));
  }

  initAuth(): void {
    this.store.dispatch(initUser());
  }

  logout() {
    this.store.dispatch(logout());
  }
}
