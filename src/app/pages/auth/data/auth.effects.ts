import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FirebaseError } from '@angular/fire/app';
import { Router } from '@angular/router';
import { catchError, EMPTY, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { AuthProviderConflictError, AuthService } from '../../../core/services/auth.service';
import { ActionTraceService } from '../../../core/state/debug/action-trace.service';
import {
  authProviderConflictDetected,
  authResolvedNoUser,
  clearAuthProviderConflict,
  continueAuthProviderConflictWithPassword,
  continueAuthProviderConflictWithPopup,
  deleteAccount,
  deleteAccountFailure,
  deleteAccountSuccess,
  initUser,
  initUserFailure,
  initUserSuccess,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  loginWithGithub,
  loginWithGithubFailure,
  loginWithGithubSuccess,
  loginWithGoogle,
  loginWithGoogleFailure,
  loginWithGoogleSuccess,
  linkPendingProvider,
  linkPendingProviderFailure,
  linkPendingProviderSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess,
  restoreAuthProviderConflict,
  restoreAuthProviderConflictSuccess,
} from './auth.actions';
import { mapFirebaseAuthError } from '../libs/firebase-auth-error.mapper';

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  authService$ = inject(AuthService);
  router = inject(Router);
  trace = inject(ActionTraceService);

  signupEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      switchMap(({ user }) =>
        this.authService$.registerUser(user).pipe(
          map((registeredUser) => registerUserSuccess({ user: registeredUser })),
          catchError((error: FirebaseError) =>
            of(registerUserFailure({ error: this.getAuthErrorMessage(error) })),
          ),
        ),
      ),
    ),
  );

  loginEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      switchMap(({ user }) =>
        this.authService$.login(user).pipe(
          map(({ user: loggedInUser }) => loginUserSuccess({ user: loggedInUser })),
          catchError((error: FirebaseError) =>
            of(loginUserFailure({ error: this.getAuthErrorMessage(error) })),
          ),
        ),
      ),
    ),
  );

  loginSuccessNavigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          loginUserSuccess,
          loginWithGoogleSuccess,
          loginWithGithubSuccess,
          linkPendingProviderSuccess,
        ),
        tap(() => this.router.navigate(['/application/dashboard'])),
      ),
    { dispatch: false },
  );

  registerSuccessNavigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerUserSuccess),
        tap(() => this.router.navigate(['/application/dashboard'])),
      ),
    { dispatch: false },
  );

  loginWithGoogleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginWithGoogle),
      switchMap(() =>
        this.authService$.loginWithGoogle().pipe(
          map(({ user, token }) => loginWithGoogleSuccess({ user, token })),
          catchError((error: FirebaseError) => this.handleProviderError(error, 'google')),
        ),
      ),
    ),
  );

  loginWithGithubEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginWithGithub),
      switchMap(() =>
        this.authService$.loginWithGithub().pipe(
          map(({ user, token }) => loginWithGithubSuccess({ user, token })),
          catchError((error: FirebaseError) => this.handleProviderError(error, 'github')),
        ),
      ),
    ),
  );

  continueConflictWithPasswordEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(continueAuthProviderConflictWithPassword),
      switchMap(({ user }) =>
        this.authService$.login(user).pipe(
          map(({ user: loggedInUser, token }) => linkPendingProviderSuccess({ user: loggedInUser, token })),
          catchError((error: FirebaseError) =>
            of(linkPendingProviderFailure({ error: this.getAuthErrorMessage(error) })),
          ),
        ),
      ),
    ),
  );

  continueConflictWithPopupEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(continueAuthProviderConflictWithPopup),
      switchMap(({ provider }) =>
        this.authService$.continueProviderConflictWithPopup(provider).pipe(
          map(({ user, token }) => linkPendingProviderSuccess({ user, token })),
          catchError((error: FirebaseError) =>
            of(linkPendingProviderFailure({ error: this.getAuthErrorMessage(error) })),
          ),
        ),
      ),
    ),
  );

  linkPendingProviderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(linkPendingProvider),
      switchMap(() =>
        this.authService$.linkPendingProvider().pipe(
          map(({ user, token }) => linkPendingProviderSuccess({ user, token })),
          catchError((error: FirebaseError) =>
            of(linkPendingProviderFailure({ error: this.getAuthErrorMessage(error) })),
          ),
        ),
      ),
    ),
  );

  restoreProviderConflictEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(restoreAuthProviderConflict),
      switchMap(() => {
        const conflict = this.authService$.restoreProviderConflict();
        return conflict ? of(restoreAuthProviderConflictSuccess({ conflict })) : EMPTY;
      }),
    ),
  );

  clearProviderConflictEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(clearAuthProviderConflict),
        tap(() => this.authService$.clearProviderConflict()),
      ),
    { dispatch: false },
  );

  logoutEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      switchMap(() =>
        this.authService$.logout().pipe(
          map(() => logoutSuccess()),
          catchError((error: FirebaseError) =>
            of(logoutFailure({ error: this.getAuthErrorMessage(error) })),
          ),
        ),
      ),
    ),
  );

  logoutSuccessEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccess),
        tap(() => this.authService$.noUserRedirect()),
      ),
    { dispatch: false },
  );

  deleteAccountEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAccount),
      switchMap(() =>
        this.authService$.deleteAccount().pipe(
          map(() => deleteAccountSuccess()),
          catchError((error: FirebaseError) =>
            of(deleteAccountFailure({ error: this.getAuthErrorMessage(error) })),
          ),
        ),
      ),
    ),
  );

  deleteAccountSuccessEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteAccountSuccess),
        tap(() => this.authService$.noUserRedirect()),
      ),
    { dispatch: false },
  );

  deleteAccountFailureEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteAccountFailure),
        tap(({ error }) => {
          console.error('Delete account failed:', error);
        }),
      ),
    { dispatch: false },
  );

  traceAuthOutcomesEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          initUserSuccess,
          initUserFailure,
          loginUserSuccess,
          loginUserFailure,
          loginWithGoogleSuccess,
          loginWithGoogleFailure,
          loginWithGithubSuccess,
          loginWithGithubFailure,
          authProviderConflictDetected,
          linkPendingProviderSuccess,
          linkPendingProviderFailure,
          registerUserSuccess,
          registerUserFailure,
          logoutSuccess,
          logoutFailure,
          deleteAccountSuccess,
          deleteAccountFailure,
          authResolvedNoUser,
        ),
        tap((action) => this.trace.traceEffect(action, 'AuthEffects.traceAuthOutcomesEffect')),
      ),
    { dispatch: false },
  );

  initUserEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(initUser),
      tap((action) => this.trace.traceEffect(action, 'AuthEffects.initUserEffect')),
      exhaustMap(() =>
        this.authService$.initAuth().pipe(
          map((user) => {
            const nextAction = user ? initUserSuccess({ user }) : authResolvedNoUser();
            this.trace.traceEffect(nextAction, 'AuthEffects.initUserEffect.success');
            return nextAction;
          }),
          catchError((error) =>
            of(initUserFailure({ error: this.getAuthErrorMessage(error) })).pipe(
              tap((action) => this.trace.traceEffect(action, 'AuthEffects.initUserEffect.failure')),
            ),
          ),
        ),
      ),
    ),
  );

  private handleProviderError(error: FirebaseError, provider: 'google' | 'github') {
    if (error instanceof AuthProviderConflictError) {
      return of(authProviderConflictDetected({ conflict: error.conflict }));
    }

    const failure = provider === 'google' ? loginWithGoogleFailure : loginWithGithubFailure;
    return of(failure({ error: this.getAuthErrorMessage(error) }));
  }

  private getAuthErrorMessage(error: FirebaseError): string {
    return error.code ? mapFirebaseAuthError(error.code) : error.message;
  }
}
