import { createReducer, on } from '@ngrx/store';
import * as BillingActions from './billing.actions';
import type { PaidPlan } from './billing.actions';

export enum BillingStatus {
  Init = 'init',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

export interface BillingState {
  status: BillingStatus;
  loading: boolean;
  error: string | null;
  selectedPlan: PaidPlan | null;
}

const initialState: BillingState = {
  status: BillingStatus.Init,
  loading: false,
  error: null,
  selectedPlan: null,
};

export const billingReducer = createReducer(
  initialState,
  on(BillingActions.startCheckout, (state, { plan }) => ({
    ...state,
    status: BillingStatus.Loading,
    loading: true,
    error: null,
    selectedPlan: plan,
  })),
  on(BillingActions.startCheckoutSuccess, (state) => ({
    ...state,
    status: BillingStatus.Loaded,
    loading: false,
    error: null,
    selectedPlan: null,
  })),
  on(BillingActions.startCheckoutFailure, (state, { error }) => ({
    ...state,
    status: BillingStatus.Error,
    loading: false,
    error,
    selectedPlan: null,
  })),
  on(BillingActions.clearBillingError, (state) => ({
    ...state,
    error: null,
  })),
);
