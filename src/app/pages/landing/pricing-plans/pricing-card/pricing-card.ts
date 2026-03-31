import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BillingFacade } from '../data/billing.facade';
import { PaidPlan } from '../data/billing.actions';

@Component({
  selector: 'app-pricing-card',
  imports: [],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.scss',
})
export class PricingCard {
  private readonly billingFacade = inject(BillingFacade);
  private readonly router = inject(Router);

  @Input() plan!: {
    name: string;
    price: number;
    features: { text: string; included: boolean }[];
    button: string;
  };
  @Input() planSlug: PaidPlan | null = null;
  @Input() popular: boolean = false;
  @Input() disabled: boolean | null = false;

  onSelectPlan(): void {
    if (this.disabled) {
      return;
    }

    if (this.planSlug === null) {
      this.router.navigate(['/auth/signup']);
      return;
    }

    this.billingFacade.clearError();
    this.billingFacade.startCheckout(this.planSlug);
  }
}
