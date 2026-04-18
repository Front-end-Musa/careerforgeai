import { createAction, props } from '@ngrx/store';
import { PlanEntitlements } from '../../../../core/interfaces/entitlements.interface';

export type PaidPlan = 'pro' | 'premium';
export type PlanTier = 'free' | 'pro' | 'premium';
export type SubscriptionStatus = 'none' | 'active' | 'past_due' | 'cancelled';

export interface BillingEntitlementsSyncResult {
  plan: PlanTier;
  entitlements: PlanEntitlements;
  subscriptionStatus: SubscriptionStatus;
  providerCustomerId: string;
  providerSubscriptionId: string;
  providerVariantId: string;
  currentPeriodEnd: number | null;
  usagePeriodKey: string | null;
  usagePeriodStartedAt: number | null;
  usagePeriodEndsAt: number | null;
  resumeGenerationsUsed: number;
  coverLettersUsed: number;
  entitlementsUpdatedAt: number;
}

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

export const openCustomerPortal = createAction('[Billing] Open Customer Portal');

export const openCustomerPortalSuccess = createAction(
  '[Billing] Open Customer Portal Success',
  props<{ portalUrl: string }>(),
);

export const openCustomerPortalFailure = createAction(
  '[Billing] Open Customer Portal Failure',
  props<{ error: string }>(),
);

export const syncEntitlements = createAction('[Billing] Sync Entitlements');

export const syncEntitlementsSuccess = createAction(
  '[Billing] Sync Entitlements Success',
  props<{ result: BillingEntitlementsSyncResult }>(),
);

export const syncEntitlementsFailure = createAction(
  '[Billing] Sync Entitlements Failure',
  props<{ error: string }>(),
);
