import { AppUser } from '../../../core/interfaces/user.interface';
import { createReducer, on } from '@ngrx/store';
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
  loginWithGoogle,
  loginWithGoogleFailure,
  loginWithGoogleSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess,
} from './auth.actions';

export enum AuthStatus {
  Init = 'init',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

export interface AuthState {
  user: AppUser | null;
  status: AuthStatus;
  error: string | null;
  googleToken?: string | null;
}

const initialState: AuthState = {
  user: null,
  status: AuthStatus.Init,
  error: null,
  googleToken: null,
};

export const authReducer = createReducer(
  initialState,

  on(registerUser, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
  })),
  on(registerUserSuccess, (state, { user }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
  })),
  on(registerUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: AuthStatus.Error,
    error: error,
  })),
  on(loginUser, (state) => ({
    ...state,
    user: null,
    status: AuthStatus.Loading,
    error: null,
  })),
  on(loginUserSuccess, (state, { user }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
  })),
  on(loginUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: AuthStatus.Error,
    error,
  })),
  on(loginWithGoogle, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    user: null,
    error: null,
    googleToken: null,
  })),
  on(loginWithGoogleSuccess, (state, { user, token }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
    googleToken: token,
  })),
  on(loginWithGoogleFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: AuthStatus.Error,
    error,
    googleToken: null,
  })),
  on(initUser, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
  })),
  on(initUserSuccess, (state, { user }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
  })),
  on(initUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: AuthStatus.Error,
    error,
  })),
  on(logout, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
  })),
  on(logoutSuccess, () => ({
    ...initialState, // Reset to initial state on success
    status: AuthStatus.Init,
  })),
  on(logoutFailure, (state, { error }) => ({
    ...state,
    status: AuthStatus.Error,
    error,
  })),
  on(deleteAccount, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
  })),
  on(deleteAccountSuccess, () => ({
    ...initialState, // Reset to initial state on success
    status: AuthStatus.Init,
  })),
  on(deleteAccountFailure, (state, { error }) => ({
    ...state,
    status: AuthStatus.Error,
    error,
  })),
  on(authResolvedNoUser, (state) => ({
    ...state,
    status: AuthStatus.Loaded,
    user: null,
  })),
);

export const reducerName = 'auth';
