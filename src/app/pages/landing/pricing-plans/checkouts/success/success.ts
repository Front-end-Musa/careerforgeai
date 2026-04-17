import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../../../auth/data/auth.facade';
import { BillingService } from '../../../../../core/services/billing.service';
import { ResumeUpgradeService } from '../../../../../core/services/resume-upgrade.service';
import { PaidPlan } from '../../data/billing.actions';

@Component({
  selector: 'app-success',
  imports: [CommonModule, RouterLink],
  templateUrl: './success.html',
  styleUrl: './success.scss',
})
export class Success implements OnInit {
  private billing = inject(BillingService);
  private authFacade = inject(AuthFacade);
  private resumeUpgrade = inject(ResumeUpgradeService);

  syncing = signal(true);
  error = signal<string | null>(null);
  continuePath = signal('/application/resumes');

  async ngOnInit() {
    const pendingPath = this.resumeUpgrade.getPendingPath();
    const expectedPlan = this.resumeUpgrade.getPendingPlan();
    if (pendingPath) {
      this.continuePath.set(pendingPath);
      this.resumeUpgrade.clearPendingPath();
    }

    try {
      const result = await this.billing.syncEntitlements();
      this.assertExpectedEntitlements(result, expectedPlan);
      if (expectedPlan) {
        this.resumeUpgrade.markRecentUpgrade(expectedPlan);
        this.resumeUpgrade.clearPendingPlan();
      }
      this.authFacade.initAuth({ force: true, source: 'Success.ngOnInit' });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      this.error.set(message);
    } finally {
      this.syncing.set(false);
    }
  }

  private assertExpectedEntitlements(
    result: { plan: 'free' | 'pro' | 'premium'; subscriptionStatus: 'none' | 'active' | 'past_due' | 'cancelled' },
    expectedPlan: PaidPlan | null,
  ) {
    if (!expectedPlan) {
      return;
    }

    const planRank = result.plan === 'premium' ? 3 : result.plan === 'pro' ? 2 : 1;
    const expectedRank = expectedPlan === 'premium' ? 3 : 2;

    if (result.subscriptionStatus !== 'active' || planRank < expectedRank) {
      throw new Error(
        'Your payment completed, but your paid access has not synced yet. Open Settings to retry subscription sync or contact support if it persists.',
      );
    }
  }
}
