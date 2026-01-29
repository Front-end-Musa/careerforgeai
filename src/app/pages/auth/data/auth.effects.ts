import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../core/services/auth.service';
import { catchError, exhaustMap, from, map, of, switchMap, tap } from 'rxjs';
import {
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

  logoutEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      // Only proceed if Firebase actually thinks we are logged in
      switchMap(() => {
        if (!this.auth.currentUser) {
          return of(logoutSuccess());
        }
        return this.authService$.logout().pipe(
          map(() => logoutSuccess()),
          catchError((error) => of(logoutFailure({ error: error.message }))),
        );
      }),
    ),
  );

  // Optional: Redirect user after successful logout
  logoutSuccessEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccess),
        tap(() => this.router.navigate(['/'])),
      ),
    { dispatch: false },
  );

  initUserEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(initUser),
      switchMap(() =>
        this.authService$.initAuth().pipe(
          map((user) => {
            if (user) {
              return initUserSuccess({ user });
            } else {
              return initUserFailure({ error: 'No user logged in' });
            }
          }),
          catchError((error: FirebaseError) => of(initUserFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}
