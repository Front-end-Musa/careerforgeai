import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { getFunctions, httpsCallable } from '@angular/fire/functions';
import { Observable } from 'rxjs';

type PaidPlan = 'pro' | 'premium';

@Injectable({ providedIn: 'root' })
export class BillingService {
  private auth = inject(Auth);
  private functions = getFunctions();
  private createCheckoutFn = httpsCallable(this.functions, 'createCheckout');

  async createCheckout(_plan: PaidPlan) {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('Please log in to continue with checkout.');
    }

    this.createCheckoutFn({ plan: _plan })
      .then((result) => {
        console.log('checkout created', result.data);
        return result;
      })
      .catch((err) => {
        console.log('Checkout error:', err);
        return err;
      });
  }

  async createCustomerPortalSession(): Promise<string> {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error('Please log in to manage your subscription.');
    }

    throw new Error('Billing is not configured for this environment.');
  }
}
