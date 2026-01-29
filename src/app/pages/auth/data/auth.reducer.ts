import { AppUser } from '../../../core/interfaces/user.interface';
import { createReducer, on } from '@ngrx/store';
import {
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
}

const initialState: AuthState = {
  user: null,
  status: AuthStatus.Init,
  error: null,
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
    loading: true,
  })),
  on(logoutSuccess, () => ({
    ...initialState, // Reset to initial state on success
  })),
  on(logoutFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);

export const reducerName = 'auth';
