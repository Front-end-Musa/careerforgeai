import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BillingState } from './billing.reducer';

export const selectBillingState = createFeatureSelector<BillingState>('billing');

export const selectBillingLoading = createSelector(selectBillingState, (state) => state.loading);
export const selectBillingError = createSelector(selectBillingState, (state) => state.error);
export const selectSelectedPlan = createSelector(selectBillingState, (state) => state.selectedPlan);
export const selectBillingPortalLoading = createSelector(selectBillingState, (state) => state.portalLoading);
export const selectBillingSyncingEntitlements = createSelector(
  selectBillingState,
  (state) => state.syncingEntitlements,
);
export const selectBillingSyncError = createSelector(selectBillingState, (state) => state.syncError);
export const selectBillingSyncResult = createSelector(selectBillingState, (state) => state.syncResult);
