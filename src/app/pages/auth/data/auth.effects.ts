import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FirebaseError } from '@angular/fire/app';
import { Router } from '@angular/router';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { ActionTraceService } from '../../../core/state/debug/action-trace.service';
import {
  authResolvedNoUser,
  deleteAccount,
  deleteAccountFailure,
  deleteAccountSuccess,
  initUser,
  initUserFailure,
  initUserSuccess,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess,
} from './auth.actions';

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
          catchError((error: FirebaseError) => of(registerUserFailure({ error: error.message }))),
        ),
      ),
    ),
  );

  loginEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      switchMap(({ user }) =>
        this.authService$.login(user).pipe(
          map((loggedInUser) => loginUserSuccess({ user: loggedInUser })),
          catchError((error: FirebaseError) => of(loginUserFailure({ error: error.message }))),
        ),
      ),
    ),
  );

  loginSuccessNavigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginUserSuccess),
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

  logoutEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      switchMap(() =>
        this.authService$.logout().pipe(
          map(() => logoutSuccess()),
          catchError((error: FirebaseError) => of(logoutFailure({ error: error.message }))),
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
          catchError((error: FirebaseError) => of(deleteAccountFailure({ error: error.message }))),
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
            of(initUserFailure({ error: error.message })).pipe(
              tap((action) => this.trace.traceEffect(action, 'AuthEffects.initUserEffect.failure')),
            ),
          ),
        ),
      ),
    ),
  );
}
