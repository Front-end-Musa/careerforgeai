import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthError, selectAuthStatus, selectUser } from './auth.selectors';
import { AppUser, LoginUser } from '../../../core/interfaces/user.interface';
import { deleteAccount, initUser, loginUser, loginWithGoogle, logout, registerUser } from './auth.actions';
import { AuthStatus } from './auth.reducer';
import { ActionTraceService } from '../../../core/state/debug/action-trace.service';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private store = inject(Store);
  private trace = inject(ActionTraceService);
  private status = this.store.selectSignal(selectAuthStatus);

  user$ = this.store.select(selectUser);
  status$ = this.store.select(selectAuthStatus);
  error$ = this.store.select(selectAuthError);

  register(user: AppUser) {
    this.store.dispatch(registerUser({ user }));
  }

  login(user: LoginUser) {
    this.store.dispatch(loginUser({ user }));
  }

  loginWithGoogle() {
    this.store.dispatch(loginWithGoogle());
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
