import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Header } from '../../landing/header/header';
import { selectSelectedPlan } from '../../landing/pricing-plans/data/billing.selectors';
import { getPlanBySlug } from '../../landing/pricing-plans/data/plan-config';
import type { PaidPlan } from '../../landing/pricing-plans/data/billing.actions';
import { BillingFacade } from '../../landing/pricing-plans/data/billing.facade';

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

  planState$ = this.planInfo$.pipe(map((planInfo) => ({ planInfo })));
}
