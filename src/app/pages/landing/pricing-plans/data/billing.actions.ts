import { createAction, props } from '@ngrx/store';

export type PaidPlan = 'pro' | 'premium';

export const startCheckout = createAction(
  '[Billing] Start Checkout',
  props<{ plan: PaidPlan }>(),
);

export const startCheckoutSuccess = createAction(
  '[Billing] Start Checkout Success',
  props<{ checkoutUrl: string }>(),
);

export const startCheckoutFailure = createAction(
  '[Billing] Start Checkout Failure',
  props<{ error: string }>(),
);

export const clearBillingError = createAction('[Billing] Clear Error');
