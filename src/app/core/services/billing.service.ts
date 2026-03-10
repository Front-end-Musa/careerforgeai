import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

type PaidPlan = 'pro' | 'premium';

@Injectable({ providedIn: 'root' })
export class BillingService {
  private auth = inject(Auth);

  async createCheckout(_plan: PaidPlan): Promise<string> {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('Please log in to continue with checkout.');
    }

    throw new Error('Billing is not configured for this environment.');
  }

  async createCustomerPortalSession(): Promise<string> {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('Please log in to manage your subscription.');
    }

    throw new Error('Billing is not configured for this environment.');
  }
}
