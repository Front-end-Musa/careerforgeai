import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BillingState } from './billing.reducer';

export const selectBillingState = createFeatureSelector<BillingState>('billing');

export const selectBillingLoading = createSelector(selectBillingState, (state) => state.loading);
export const selectBillingError = createSelector(selectBillingState, (state) => state.error);
