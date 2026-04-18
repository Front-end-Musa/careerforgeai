import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  clearBillingError,
  openCustomerPortal,
  PaidPlan,
  startCheckout,
  syncEntitlements,
} from './billing.actions';
import {
  selectBillingError,
  selectBillingLoading,
  selectBillingPortalLoading,
  selectBillingSyncError,
  selectBillingSyncingEntitlements,
  selectBillingSyncResult,
  selectSelectedPlan,
} from './billing.selectors';

@Injectable({
  providedIn: 'root',
})
export class BillingFacade {
  private store = inject(Store);

  loading$ = this.store.select(selectBillingLoading);
  error$ = this.store.select(selectBillingError);
  selectedPlan$ = this.store.select(selectSelectedPlan);
  portalLoading$ = this.store.select(selectBillingPortalLoading);
  syncingEntitlements$ = this.store.select(selectBillingSyncingEntitlements);
  syncError$ = this.store.select(selectBillingSyncError);
  syncResult$ = this.store.select(selectBillingSyncResult);

  startCheckout(plan: PaidPlan) {
    this.store.dispatch(startCheckout({ plan }));
  }

  openCustomerPortal() {
    this.store.dispatch(openCustomerPortal());
  }

  syncEntitlements() {
    this.store.dispatch(syncEntitlements());
  }

  clearError() {
    this.store.dispatch(clearBillingError());
  }
}
