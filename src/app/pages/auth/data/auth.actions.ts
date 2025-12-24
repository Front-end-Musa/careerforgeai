import { createAction, props } from '@ngrx/store';
import { User } from '../../../core/interfaces/user.interface';

export const registerUser = createAction('[Users] Register User', props<{ user: User }>());
export const registerUserSuccess = createAction(
  '[Users] Register User Success',
  props<{ user: any }>()
);
export const registerUserFailure = createAction(
  '[Users] Register User Failure',
  props<{ error: any }>()
);
