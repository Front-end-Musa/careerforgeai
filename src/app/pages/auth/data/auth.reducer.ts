import { User } from '../../../core/interfaces/user.interface';
import { createReducer, on } from '@ngrx/store';
import { registerUser, registerUserFailure, registerUserSuccess } from './auth.actions';

type authStatus = 'init' | 'loading' | 'loaded' | 'error';

export interface AuthState {
  user: User | null;
  status: authStatus;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: 'init',
  error: null,
};

export const authReducer = createReducer(
  initialState,

  on(registerUser, (state) => ({
    ...state,
    status: 'loading',
    error: null,
  })),
  on(registerUserSuccess, (state, { user }) => ({
    ...state,
    user,
    status: 'loaded',
    error: null,
  })),
  on(registerUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    status: 'error',
    error: error,
  }))
);
