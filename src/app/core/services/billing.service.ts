import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FirebaseError } from 'firebase/app';
import { CallableService } from './callable.service';

type PaidPlan = 'pro' | 'premium';
type PlanTier = 'free' | 'pro' | 'premium';
type SubscriptionStatus = 'none' | 'active' | 'past_due' | 'cancelled';

@Injectable({ providedIn: 'root' })
export class BillingService {
  private auth = inject(Auth);
  private callableService = inject(CallableService);
  private proPlanId = 'ac58d79e-1d84-4322-bef6-05147be57cc7';
  private premiumPlanId = '7ad22fce-484d-472c-ad6e-f08e09e3e264';
  private createCheckoutFn = this.callableService.callable<
    { plan: PaidPlan; priceId: string },
    string
  >('createCheckout');
  private createPortalFn = this.callableService.callable<void, string>('createPortalSession');
  private syncEntitlementsFn = this.callableService.callable<
    void,
    {
      plan: PlanTier;
      subscriptionStatus: SubscriptionStatus;
      providerCustomerId: string;
      providerSubscriptionId: string;
      providerVariantId: string;
      currentPeriodEnd: number | null;
      entitlementsUpdatedAt: number;
    }
  >('syncEntitlements');

  async createCheckout(_plan: PaidPlan): Promise<string> {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('Please log in to continue with checkout.');
    }

    try {
      const result = await this.createCheckoutFn({
        plan: _plan,
        priceId: _plan === 'pro' ? this.proPlanId : this.premiumPlanId,
      });
      if (typeof result.data !== 'string' || !result.data.trim()) {
        throw new Error('Checkout URL was not returned by the server.');
      }
      return result.data;
    } catch (err: unknown) {
      throw this.toCheckoutError(err);
    }
  }

  async createCustomerPortalSession(): Promise<string> {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('Please log in to manage your subscription.');
    }

    try {
      const result = await this.createPortalFn();
      if (typeof result.data !== 'string' || !result.data.trim()) {
        throw new Error('Portal URL was not returned by the server.');
      }
      return result.data;
    } catch (err: unknown) {
      throw this.toCheckoutError(err);
    }
  }

  async syncEntitlements() {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('Please log in to refresh your subscription status.');
    }

    await user.getIdToken(true);
    const result = await this.syncEntitlementsFn();
    return result.data;
  }

  private toCheckoutError(error: unknown): Error {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'functions/unauthenticated':
          return new Error('Please log in to continue with checkout.');
        case 'functions/invalid-argument':
          return new Error('Checkout configuration is invalid. Please refresh and try again.');
        case 'functions/internal':
          return new Error(
            'Checkout service is temporarily unavailable. Please try again shortly.',
          );
        case 'functions/permission-denied':
          return new Error('Your plan does not include this feature.');
        case 'functions/resource-exhausted':
          return new Error('You reached your monthly AI limit for your current plan.');
        case 'functions/failed-precondition':
          return new Error(
            'Your billing profile is not ready yet. Please update your account details and try again.',
          );
        default:
          return new Error(`Checkout failed (${error.code}).`);
      }
    }

    if (error instanceof Error) {
      return error;
    }

    return new Error('Checkout failed due to an unknown error.');
  }
}
