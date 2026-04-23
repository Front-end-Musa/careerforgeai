import { createAction, props } from '@ngrx/store';
import { AppUser, LoginUser } from '../../../core/interfaces/user.interface';

export const registerUser = createAction('[Users] Register User', props<{ user: AppUser }>());
export const registerUserSuccess = createAction(
  '[Users] Register User Success',
  props<{ user: AppUser }>(),
);
export const registerUserFailure = createAction(
  '[Users] Register User Failure',
  props<{ error: string }>(),
);

export const loginUser = createAction('[Users] Login User', props<{ user: LoginUser }>());
export const loginUserSuccess = createAction(
  '[Users] Login User Success',
  props<{ user: AppUser }>(),
);
export const loginUserFailure = createAction(
  '[Users] Login User Failure',
  props<{ error: string }>(),
);

export const loginWithGoogle = createAction('[Users] Login With Google');
export const loginWithGoogleSuccess = createAction(
  '[Users] Login With Google Success',
  props<{ user: AppUser; token: string }>(),
);
export const loginWithGoogleFailure = createAction(
  '[Users] Login With Google Failure',
  props<{ error: string }>(),
);

export const initUser = createAction('[Users] Init User');
export const initUserSuccess = createAction(
  '[Users] Init User Success',
  props<{ user: AppUser }>(),
);
export const initUserFailure = createAction(
  '[Users] Init User Failure',
  props<{ error: string }>(),
);

export const logout = createAction('[Users] Logout User');
export const logoutSuccess = createAction('[Users] Logout User Success');
export const logoutFailure = createAction(
  '[Users] Logout User Failure',
  props<{ error: string }>(),
);

export const authResolvedNoUser = createAction('[Users] Auth Resolved No User');

export const deleteAccount = createAction('[Users] Delete Account');
export const deleteAccountSuccess = createAction('[Users] Delete Account Success');
export const deleteAccountFailure = createAction(
  '[Users] Delete Account Failure',
  props<{ error: string }>(),
);

