import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../core/services/auth.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  initUser,
  initUserFailure,
  initUserSuccess,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess,
} from './auth.actions';
import { Auth, User } from '@angular/fire/auth';
import { FirebaseError } from '@angular/fire/app';

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  authService$ = inject(AuthService);
  auth = inject(Auth);

  signupEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      switchMap(({ user }) =>
        this.authService$.registerUser(user).pipe(
          map((user) => registerUserSuccess({ user })),
          catchError((error: FirebaseError) => of(registerUserFailure({ error: error.message })))
        )
      )
    )
  );
  loginEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      switchMap(({ user }) =>
        this.authService$.login(user).pipe(
          map((user) => loginUserSuccess({ user })),
          catchError((error: FirebaseError) => of(loginUserFailure({ error: error.message })))
        )
      )
    )
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
          catchError((error: FirebaseError) => of(initUserFailure({ error: error.message })))
        )
      )
    )
  );
}
