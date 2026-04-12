import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PaidPlan } from '../../pages/landing/pricing-plans/data/billing.actions';
import { NotificationsService } from './notifications.service';
import { UpgradeReason } from './resume-access-policy.service';

const PENDING_UPGRADE_PATH_KEY = 'resume-upgrade-path';

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

    void this.router.navigate(['/upgrade'], {
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
