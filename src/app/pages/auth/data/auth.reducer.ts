import { AppUser } from '../../../core/interfaces/user.interface';
import { AuthConflictState } from '../../../core/interfaces/auth-linking.interface';
import { createReducer, on } from '@ngrx/store';
import {
  authProviderConflictDetected,
  authResolvedNoUser,
  clearAuthProviderConflict,
  continueAuthProviderConflictWithPassword,
  continueAuthProviderConflictWithPopup,
  deleteAccount,
  deleteAccountFailure,
  deleteAccountSuccess,
  initUser,
  initUserFailure,
  initUserSuccess,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  loginWithGithub,
  loginWithGithubFailure,
  loginWithGithubSuccess,
  loginWithGoogle,
  loginWithGoogleFailure,
  loginWithGoogleSuccess,
  linkPendingProvider,
  linkPendingProviderFailure,
  linkPendingProviderSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess,
  restoreAuthProviderConflictSuccess,
} from './auth.actions';

export enum AuthStatus {
  Init = 'init',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

export type AuthPendingOperation =
  | 'login'
  | 'register'
  | 'google'
  | 'github'
  | 'linkProvider'
  | 'providerConflict'
  | 'init'
  | 'logout'
  | 'deleteAccount'
  | null;

export interface AuthState {
  user: AppUser | null;
  status: AuthStatus;
  error: string | null;
  accessToken?: string | null;
  pendingOperation: AuthPendingOperation;
  providerConflict: AuthConflictState | null;
}

const initialState: AuthState = {
  user: null,
  status: AuthStatus.Init,
  error: null,
  accessToken: null,
  pendingOperation: null,
  providerConflict: null,
};

export const authReducer = createReducer(
  initialState,

  on(registerUser, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
    pendingOperation: 'register',
    providerConflict: null,
  })),
  on(registerUserSuccess, (state, { user }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
    pendingOperation: null,
    providerConflict: null,
  })),
  on(registerUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: AuthStatus.Error,
    error: error,
    pendingOperation: null,
  })),
  on(loginUser, (state) => ({
    ...state,
    user: null,
    status: AuthStatus.Loading,
    error: null,
    pendingOperation: 'login',
  })),
  on(loginUserSuccess, (state, { user }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
    pendingOperation: null,
    providerConflict: null,
  })),
  on(loginUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: AuthStatus.Error,
    error,
    pendingOperation: null,
  })),
  on(loginWithGoogle, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    user: null,
    error: null,
    accessToken: null,
    pendingOperation: 'google',
  })),
  on(loginWithGoogleSuccess, (state, { user, token }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
    accessToken: token,
    pendingOperation: null,
    providerConflict: null,
  })),
  on(loginWithGoogleFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: AuthStatus.Error,
    error,
    accessToken: null,
    pendingOperation: null,
  })),
  on(loginWithGithub, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    user: null,
    error: null,
    accessToken: null,
    pendingOperation: 'github',
  })),
  on(loginWithGithubSuccess, (state, { user, token }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
    accessToken: token,
    pendingOperation: null,
    providerConflict: null,
  })),
  on(authProviderConflictDetected, restoreAuthProviderConflictSuccess, (state, { conflict }) => ({
    ...state,
    status: AuthStatus.Error,
    user: null,
    error: conflict.credentialAvailable
      ? conflict.message
      : 'We could not keep the connection request after refresh. Click the provider again to continue.',
    accessToken: null,
    pendingOperation: null,
    providerConflict: conflict,
  })),
  on(clearAuthProviderConflict, (state) => ({
    ...state,
    error: null,
    providerConflict: null,
    pendingOperation: null,
    status: state.user ? AuthStatus.Loaded : AuthStatus.Init,
  })),
  on(continueAuthProviderConflictWithPassword, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
    pendingOperation: 'linkProvider',
  })),
  on(continueAuthProviderConflictWithPopup, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
    pendingOperation: 'providerConflict',
  })),
  on(linkPendingProvider, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
    pendingOperation: 'linkProvider',
  })),
  on(linkPendingProviderSuccess, (state, { user, token }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
    accessToken: token,
    pendingOperation: null,
    providerConflict: null,
  })),
  on(linkPendingProviderFailure, (state, { error }) => ({
    ...state,
    status: AuthStatus.Error,
    error,
    pendingOperation: null,
  })),
  on(loginWithGithubFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: AuthStatus.Error,
    error,
    accessToken: null,
    pendingOperation: null,
  })),
  on(initUser, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
    pendingOperation: 'init',
  })),
  on(initUserSuccess, (state, { user }) => ({
    ...state,
    user,
    status: AuthStatus.Loaded,
    error: null,
    pendingOperation: null,
  })),
  on(initUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: AuthStatus.Error,
    error,
    pendingOperation: null,
  })),
  on(logout, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
    pendingOperation: 'logout',
  })),
  on(logoutSuccess, () => ({
    ...initialState, // Reset to initial state on success
    status: AuthStatus.Init,
  })),
  on(logoutFailure, (state, { error }) => ({
    ...state,
    status: AuthStatus.Error,
    error,
    accessToken: null,
    pendingOperation: null,
  })),
  on(deleteAccount, (state) => ({
    ...state,
    status: AuthStatus.Loading,
    error: null,
    pendingOperation: 'deleteAccount',
  })),
  on(deleteAccountSuccess, () => ({
    ...initialState, // Reset to initial state on success
    status: AuthStatus.Init,
  })),
  on(deleteAccountFailure, (state, { error }) => ({
    ...state,
    status: AuthStatus.Error,
    error,
    pendingOperation: null,
  })),
  on(authResolvedNoUser, (state) => ({
    ...state,
    status: AuthStatus.Init,
    user: null,
    accessToken: null,
    pendingOperation: null,
    providerConflict: null,
  })),
);

export const reducerName = 'auth';
