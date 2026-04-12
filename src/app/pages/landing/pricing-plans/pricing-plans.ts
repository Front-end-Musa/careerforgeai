import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PricingCard } from './pricing-card/pricing-card';
import { BillingFacade } from './data/billing.facade';
import { LandingCta } from '../landing-cta/landing-cta';
import { PRICING_PLANS } from './data/plan-options';

@Component({
  selector: 'app-pricing-plans',
  imports: [PricingCard, AsyncPipe, LandingCta],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.scss',
})
export class PricingPlans {
  private readonly billingFacade: BillingFacade;
  loading$;

  constructor(billingFacade: BillingFacade) {
    this.billingFacade = billingFacade;
    this.loading$ = this.billingFacade.loading$;
  }

  plans = PRICING_PLANS;

  ctaHelperTexts: string[] = ['No hidden fees', 'Upgrade whenever you are ready'];
}
