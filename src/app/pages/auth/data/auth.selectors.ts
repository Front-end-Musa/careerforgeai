import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, reducerName } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(reducerName);

export const selectUser = createSelector(selectAuthState, (state) => state.user);

export const selectAuthStatus = createSelector(selectAuthState, (state) => state.status);

export const selectAuthError = createSelector(selectAuthState, (state) => state.error);
