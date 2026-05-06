import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAuthBusy,
  selectAuthError,
  selectAuthProviderConflict,
  selectAuthStatus,
  selectAttemptedProviderLabel,
  selectGithubLoading,
  selectGoogleLoading,
  selectLoginLoading,
  selectRegisterLoading,
  selectUser,
} from './auth.selectors';
import { AppUser, LoginUser } from '../../../core/interfaces/user.interface';
import {
  clearAuthProviderConflict,
  continueAuthProviderConflictWithPassword,
  continueAuthProviderConflictWithPopup,
  deleteAccount,
  initUser,
  loginUser,
  loginWithGithub,
  loginWithGoogle,
  logout,
  registerUser,
  restoreAuthProviderConflict,
} from './auth.actions';
import { AuthStatus } from './auth.reducer';
import { ActionTraceService } from '../../../core/state/debug/action-trace.service';
import { AuthProviderId } from '../../../core/interfaces/auth-linking.interface';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private store = inject(Store);
  private trace = inject(ActionTraceService);
  private status = this.store.selectSignal(selectAuthStatus);

  user$ = this.store.select(selectUser);
  status$ = this.store.select(selectAuthStatus);
  error$ = this.store.select(selectAuthError);
  providerConflict$ = this.store.select(selectAuthProviderConflict);
  attemptedProviderLabel$ = this.store.select(selectAttemptedProviderLabel);
  loginLoading$ = this.store.select(selectLoginLoading);
  registerLoading$ = this.store.select(selectRegisterLoading);
  googleLoading$ = this.store.select(selectGoogleLoading);
  githubLoading$ = this.store.select(selectGithubLoading);
  authBusy$ = this.store.select(selectAuthBusy);

  register(user: AppUser) {
    this.store.dispatch(registerUser({ user }));
  }

  login(user: LoginUser) {
    this.store.dispatch(loginUser({ user }));
  }

  continueConflictWithPassword(user: LoginUser) {
    this.store.dispatch(continueAuthProviderConflictWithPassword({ user }));
  }

  continueConflictWithPopup(provider: AuthProviderId) {
    this.store.dispatch(continueAuthProviderConflictWithPopup({ provider }));
  }

  restoreProviderConflict() {
    this.store.dispatch(restoreAuthProviderConflict());
  }

  clearProviderConflict() {
    this.store.dispatch(clearAuthProviderConflict());
  }

  loginWithGoogle() {
    this.store.dispatch(loginWithGoogle());
  }

  loginWithGithub() {
    this.store.dispatch(loginWithGithub());
  }

  initAuth(options?: { force?: boolean; source?: string }): void {
    const source = options?.source ?? 'AuthFacade.initAuth';
    const currentStatus = this.status();
    if (!options?.force && currentStatus === AuthStatus.Loading) {
      this.trace.traceSkip(initUser.type, source, 'auth init already in flight');
      return;
    }

    const action = initUser();
    this.trace.traceDispatch(action, source, {
      force: options?.force ?? false,
      authStatus: currentStatus,
    });
    this.store.dispatch(action);
  }

  logout() {
    this.store.dispatch(logout());
  }

  deleteAccount() {
    this.logout();
    this.store.dispatch(deleteAccount());
  }
}
