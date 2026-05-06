import { createAction, props } from '@ngrx/store';
import { AppUser, LoginUser } from '../../../core/interfaces/user.interface';
import { AuthConflictState, AuthProviderId } from '../../../core/interfaces/auth-linking.interface';

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

export const loginWithGithub = createAction('[Users] Login With Github');
export const loginWithGithubSuccess = createAction(
  '[Users] Login With Github Success',
  props<{ user: AppUser; token: string }>(),
);
export const loginWithGithubFailure = createAction(
  '[Users] Login With Github Failure',
  props<{ error: string }>(),
);

export const authProviderConflictDetected = createAction(
  '[Users] Auth Provider Conflict Detected',
  props<{ conflict: AuthConflictState }>(),
);

export const restoreAuthProviderConflict = createAction('[Users] Restore Auth Provider Conflict');
export const restoreAuthProviderConflictSuccess = createAction(
  '[Users] Restore Auth Provider Conflict Success',
  props<{ conflict: AuthConflictState }>(),
);

export const clearAuthProviderConflict = createAction('[Users] Clear Auth Provider Conflict');

export const continueAuthProviderConflictWithPassword = createAction(
  '[Users] Continue Auth Provider Conflict With Password',
  props<{ user: LoginUser }>(),
);

export const continueAuthProviderConflictWithPopup = createAction(
  '[Users] Continue Auth Provider Conflict With Popup',
  props<{ provider: AuthProviderId }>(),
);

export const linkPendingProvider = createAction('[Users] Link Pending Provider');
export const linkPendingProviderSuccess = createAction(
  '[Users] Link Pending Provider Success',
  props<{ user: AppUser; token: string }>(),
);
export const linkPendingProviderFailure = createAction(
  '[Users] Link Pending Provider Failure',
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

