import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PaidPlan } from '../data/billing.actions';
import { ResumeUpgradeService } from '../../../../core/services/resume-upgrade.service';

@Component({
  selector: 'app-pricing-card',
  imports: [],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.scss',
})
export class PricingCard {
  private readonly router = inject(Router);
  private readonly resumeUpgrade = inject(ResumeUpgradeService);

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

    this.resumeUpgrade.startUpgrade({
      reason: 'pricing',
      returnTo: '/application/resumes',
      recommendedPlan: this.planSlug,
    });
  }
}
