import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PaidPlan } from '../../pages/landing/pricing-plans/data/billing.actions';
import { NotificationsService } from './notifications.service';
import { UpgradeReason } from './resume-access-policy.service';

const PENDING_UPGRADE_PATH_KEY = 'resume-upgrade-path';
const PENDING_UPGRADE_PLAN_KEY = 'resume-upgrade-plan';
const RECENT_UPGRADE_KEY = 'resume-upgrade-recent';
const RECENT_UPGRADE_MAX_AGE_MS = 15 * 60 * 1000;

export interface UpgradeRedirectOptions {
  reason?: UpgradeReason | 'pricing';
  returnTo?: string;
  recommendedPlan?: PaidPlan;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class ResumeUpgradeService {
  constructor(
    private router: Router,
    private notifications: NotificationsService,
  ) {}

  startUpgrade(options: UpgradeRedirectOptions = {}) {
    const returnTo = options.returnTo ?? '/application/resumes';
    const recommendedPlan = options.recommendedPlan ?? 'pro';

    this.rememberPendingPath(returnTo);

    if (options.message) {
      this.notifications.showInfo(options.message);
    }

    void this.router.navigate(['/update'], {
      queryParams: {
        reason: options.reason ?? null,
        returnTo,
        recommendedPlan,
      },
    });
  }

  getPendingPath(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    return window.sessionStorage.getItem(PENDING_UPGRADE_PATH_KEY);
  }

  clearPendingPath() {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.removeItem(PENDING_UPGRADE_PATH_KEY);
  }

  setPendingPlan(plan: PaidPlan) {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem(PENDING_UPGRADE_PLAN_KEY, plan);
  }

  getPendingPlan(): PaidPlan | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const value = window.sessionStorage.getItem(PENDING_UPGRADE_PLAN_KEY);
    return value === 'pro' || value === 'premium' ? value : null;
  }

  clearPendingPlan() {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.removeItem(PENDING_UPGRADE_PLAN_KEY);
  }

  markRecentUpgrade(plan: PaidPlan) {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem(
      RECENT_UPGRADE_KEY,
      JSON.stringify({ plan, completedAt: Date.now() }),
    );
  }

  getRecentUpgradePlan(): PaidPlan | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const raw = window.sessionStorage.getItem(RECENT_UPGRADE_KEY);
    if (!raw) {
      return null;
    }

    try {
      const parsed = JSON.parse(raw) as { plan?: string; completedAt?: number };
      if (
        typeof parsed.completedAt !== 'number' ||
        Date.now() - parsed.completedAt > RECENT_UPGRADE_MAX_AGE_MS
      ) {
        window.sessionStorage.removeItem(RECENT_UPGRADE_KEY);
        return null;
      }

      return parsed.plan === 'pro' || parsed.plan === 'premium' ? parsed.plan : null;
    } catch {
      window.sessionStorage.removeItem(RECENT_UPGRADE_KEY);
      return null;
    }
  }

  clearRecentUpgrade() {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.removeItem(RECENT_UPGRADE_KEY);
  }

  getExpectedPlanForEntitlementRetry() {
    return this.getPendingPlan() ?? this.getRecentUpgradePlan();
  }

  setPendingPath(path: string) {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem(PENDING_UPGRADE_PATH_KEY, path);
  }

  private rememberPendingPath(path: string) {
    this.setPendingPath(path);
  }
}
