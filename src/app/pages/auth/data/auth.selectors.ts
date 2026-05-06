import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, reducerName } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(reducerName);

export const selectUser = createSelector(selectAuthState, (state) => state.user);

export const selectAuthStatus = createSelector(selectAuthState, (state) => state.status);

export const selectAuthError = createSelector(selectAuthState, (state) => state.error);

export const selectAuthProviderConflict = createSelector(
  selectAuthState,
  (state) => state.providerConflict,
);

export const selectHasAuthProviderConflict = createSelector(
  selectAuthProviderConflict,
  (conflict) => conflict !== null,
);

export const selectExistingSignInMethods = createSelector(
  selectAuthProviderConflict,
  (conflict) => conflict?.existingProviders ?? [],
);

export const selectAttemptedProviderLabel = createSelector(
  selectAuthProviderConflict,
  (conflict) => {
    switch (conflict?.attemptedProvider) {
      case 'google.com':
        return 'Google';
      case 'github.com':
        return 'GitHub';
      case 'password':
        return 'email and password';
      default:
        return '';
    }
  },
);

export const selectAuthPendingOperation = createSelector(
  selectAuthState,
  (state) => state.pendingOperation,
);

export const selectLoginLoading = createSelector(
  selectAuthPendingOperation,
  (pendingOperation) => pendingOperation === 'login',
);

export const selectRegisterLoading = createSelector(
  selectAuthPendingOperation,
  (pendingOperation) => pendingOperation === 'register',
);

export const selectGoogleLoading = createSelector(
  selectAuthPendingOperation,
  (pendingOperation) => pendingOperation === 'google',
);

export const selectGithubLoading = createSelector(
  selectAuthPendingOperation,
  (pendingOperation) => pendingOperation === 'github',
);

export const selectAuthBusy = createSelector(
  selectAuthPendingOperation,
  (pendingOperation) => pendingOperation !== null,
);
