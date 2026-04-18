import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DirName } from '../dir-name/dir-name';
import { AuthFacade } from '../../auth/data/auth.facade';
import { AppUser } from '../../../core/interfaces/user.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EntitlementsService } from '../../../core/services/entitlements.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BillingFacade } from '../../landing/pricing-plans/data/billing.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [DirName],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  user = signal<AppUser | null>(null);
  private authFacade = inject(AuthFacade);
  private destroyRef = inject(DestroyRef);
  private billingFacade = inject(BillingFacade);
  private entitlementsService = inject(EntitlementsService);
  private router = inject(Router);
  managingSubscription = toSignal(this.billingFacade.portalLoading$, {
    initialValue: false,
  });
  entitlements = toSignal(this.entitlementsService.entitlements$, {
    initialValue: {
      resumeGenerationsPerPeriod: 1,
      coverLettersPerPeriod: 3,
      canUseJobTracker: false,
      canStoreGeneratedResume: false,
      canDownloadResume: false,
    },
  });
  usage = toSignal(this.entitlementsService.usage$, {
    initialValue: {
      resumeGenerationsUsed: 0,
      coverLettersUsed: 0,
      resumeGenerationsRemaining: 1,
      coverLettersRemaining: 3,
      usagePeriodKey: null,
      usagePeriodStartedAt: null,
      usagePeriodEndsAt: null,
    },
  });
  nextResetLabel = toSignal(this.entitlementsService.nextResetLabel$, {
    initialValue: 'this period',
  });

  onSave() {}

  onManageSubscription() {
    if (this.managingSubscription()) {
      return;
    }

    if (this.user()?.plan === 'free') {
      //redirect to billing page if user is on free plan and tries to manage subscription
      this.router.navigate(['/update'], {
        queryParams: {
          reason: 'manage_subscription',
          returnTo: '/settings',
        }
      });
      return;
    }
    this.billingFacade.openCustomerPortal();
  }

  onDeleteAccount() {
    this.authFacade.deleteAccount();
  }

  ngOnInit() {
    this.authFacade.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      this.user.set(user);
    });
  }
}
