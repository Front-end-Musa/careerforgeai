import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../core/services/auth.service';
import { catchError, exhaustMap, from, map, of, switchMap, take, tap } from 'rxjs';
import {
  authResolvedNoUser,
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
import { Auth, User } from '@angular/fire/auth';
import { FirebaseError } from '@angular/fire/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  authService$ = inject(AuthService);
  auth = inject(Auth);
  router = inject(Router);

  signupEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      switchMap(({ user }) =>
        this.authService$.registerUser(user).pipe(
          map((user) => registerUserSuccess({ user })),
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
          map((user) => loginUserSuccess({ user })),
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

  logoutSuccessEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutSuccess),
      tap(() => this.authService$.noUserRedirect()),
    ),
  );

  initUserEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(initUser),
      switchMap(() =>
        this.authService$.initAuth().pipe(
          map(
            (user) => (user ? initUserSuccess({ user }) : authResolvedNoUser()), // 👈 NOT logout
          ),
          catchError((err) => of(initUserFailure({ error: err.message }))),
        ),
      ),
    ),
  );
}
