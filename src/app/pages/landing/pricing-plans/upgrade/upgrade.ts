import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { combineLatest, map } from 'rxjs';
import { ResumeUpgradeService } from '../../../../core/services/resume-upgrade.service';
import { BillingFacade } from '../data/billing.facade';
import { PAID_PRICING_PLANS } from '../data/plan-options';
import { PaidPlan } from '../data/billing.actions';
import { ResumeAccessPolicyService, UpgradeReason } from '../../../../core/services/resume-access-policy.service';

type UpgradeQueryReason = UpgradeReason | 'pricing' | null;

@Component({
  selector: 'app-upgrade',
  imports: [CommonModule, AsyncPipe, RouterLink, MatButtonModule, MatProgressBarModule],
  templateUrl: './upgrade.html',
  styleUrl: './upgrade.scss',
})
export class Upgrade {
  private route = inject(ActivatedRoute);
  private billingFacade = inject(BillingFacade);
  private resumeUpgrade = inject(ResumeUpgradeService);
  private resumeAccessPolicy = inject(ResumeAccessPolicyService);

  readonly plans = PAID_PRICING_PLANS;
  readonly selectedPlan = signal<PaidPlan>('pro');
  readonly loading$ = this.billingFacade.loading$;
  readonly error$ = this.billingFacade.error$;

  readonly context$ = combineLatest([this.route.queryParamMap, this.error$]).pipe(
    map(([params]) => {
      const reason = this.toUpgradeReason(params.get('reason'));
      const returnTo = params.get('returnTo') || '/application/resumes';
      const recommendedPlan = this.toPaidPlan(params.get('recommendedPlan')) ?? 'pro';

      this.selectedPlan.set(recommendedPlan);
      this.resumeUpgrade.setPendingPath(returnTo);

      return {
        reason,
        returnTo,
        recommendedPlan,
      };
    }),
  );

  readonly heading = computed(() => {
    const selected = this.selectedPlan();
    return selected === 'premium' ? 'Choose your premium plan' : 'Choose your plan';
  });

  selectPlan(plan: PaidPlan) {
    this.billingFacade.clearError();
    this.selectedPlan.set(plan);
  }

  continueToCheckout() {
    this.billingFacade.clearError();
    const plan = this.selectedPlan();
    this.resumeUpgrade.setPendingPlan(plan);
    this.billingFacade.startCheckout(plan);
  }

  reasonMessage(reason: UpgradeQueryReason) {
    if (!reason || reason === 'pricing') {
      return 'Pick the plan that fits your job search, then continue to checkout.';
    }

    return this.resumeAccessPolicy.upgradeMessage(reason);
  }

  private toPaidPlan(value: string | null): PaidPlan | null {
    return value === 'premium' || value === 'pro' ? value : null;
  }

  private toUpgradeReason(value: string | null): UpgradeQueryReason {
    return value === 'second_resume' ||
      value === 'download' ||
      value === 'tailor' ||
      value === 'template_lock' ||
      value === 'pricing'
      ? value
      : null;
  }
}
