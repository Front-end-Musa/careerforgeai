import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { startCheckout, clearBillingError, PaidPlan } from './billing.actions';
import { selectBillingError, selectBillingLoading } from './billing.selectors';

@Injectable({
  providedIn: 'root',
})
export class BillingFacade {
  private store = inject(Store);

  loading$ = this.store.select(selectBillingLoading);
  error$ = this.store.select(selectBillingError);

  startCheckout(plan: PaidPlan) {
    this.store.dispatch(startCheckout({ plan }));
  }

  clearError() {
    this.store.dispatch(clearBillingError());
  }
}
