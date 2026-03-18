import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Header } from '../../../header/header';
import { getPlanBySlug } from '../../data/plan-config';
import type { PaidPlan } from '../../data/billing.actions';
import { BillingFacade } from '../../data/billing.facade';

function isPaidPlan(slug: string | undefined): slug is PaidPlan {
  return slug === 'pro' || slug === 'premium';
}

@Component({
  selector: 'app-checkout',
  imports: [Header, AsyncPipe, NgIf, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  private route = inject(ActivatedRoute);
  private billingFacade = inject(BillingFacade);
  idToken = null;

  billingCycle: 'monthly' | 'yearly' = 'monthly';

  setBillingCycle(cycle: 'monthly' | 'yearly') {
    this.billingCycle = cycle;
  }

  planInfo$ = combineLatest([this.billingFacade.selectedPlan$, this.route.queryParams]).pipe(
    map(([fromStore, params]) => {
      const effectiveSlug: PaidPlan | null = isPaidPlan(params['plan'])
        ? params['plan']
        : (fromStore ?? null);
      return effectiveSlug ? getPlanBySlug(effectiveSlug) : null;
    }),
  );

  ngOnInit() {
    this.billingFacade.selectedPlan$.pipe(take(1)).subscribe((plan) => {
      plan == 'pro' || plan == 'premium' ? (this.plan = plan) : '';
    });
  }

  private plan: PaidPlan = 'pro';

  checkoutCall() {
    this.billingFacade.startCheckout(this.plan);
  }

  planState$ = this.planInfo$.pipe(map((planInfo) => ({ planInfo })));
}
