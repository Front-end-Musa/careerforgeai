import { createReducer, on } from '@ngrx/store';
import * as BillingActions from './billing.actions';
import type { BillingEntitlementsSyncResult, PaidPlan } from './billing.actions';

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
  portalLoading: boolean;
  syncingEntitlements: boolean;
  syncError: string | null;
  syncResult: BillingEntitlementsSyncResult | null;
}

const initialState: BillingState = {
  status: BillingStatus.Init,
  loading: false,
  error: null,
  selectedPlan: null,
  portalLoading: false,
  syncingEntitlements: false,
  syncError: null,
  syncResult: null,
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
  on(BillingActions.openCustomerPortal, (state) => ({
    ...state,
    portalLoading: true,
    error: null,
  })),
  on(BillingActions.openCustomerPortalSuccess, (state) => ({
    ...state,
    portalLoading: false,
    error: null,
  })),
  on(BillingActions.openCustomerPortalFailure, (state, { error }) => ({
    ...state,
    portalLoading: false,
    error,
  })),
  on(BillingActions.syncEntitlements, (state) => ({
    ...state,
    syncingEntitlements: true,
    syncError: null,
  })),
  on(BillingActions.syncEntitlementsSuccess, (state, { result }) => ({
    ...state,
    syncingEntitlements: false,
    syncError: null,
    syncResult: result,
  })),
  on(BillingActions.syncEntitlementsFailure, (state, { error }) => ({
    ...state,
    syncingEntitlements: false,
    syncError: error,
  })),
);
