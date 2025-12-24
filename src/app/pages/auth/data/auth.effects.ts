import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../core/services/auth.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { registerUser, registerUserFailure, registerUserSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  authService$ = inject(AuthService);

  signupEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      switchMap(({ user }) =>
        this.authService$.registerUser(user).pipe(
          map((user) => registerUserSuccess({ user })),
          catchError((error) => of(registerUserFailure({ error })))
        )
      )
    )
  );
}
