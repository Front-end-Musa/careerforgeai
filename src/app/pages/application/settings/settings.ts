import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DirName } from '../dir-name/dir-name';
import { AuthFacade } from '../../auth/data/auth.facade';
import { AppUser } from '../../../core/interfaces/user.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EntitlementsService } from '../../../core/services/entitlements.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BillingFacade } from '../../landing/pricing-plans/data/billing.facade';
import { Router } from '@angular/router';
import { Auth, updateProfile } from '@angular/fire/auth';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { NotificationsService } from '../../../core/services/notifications.service';

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
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private notifications = inject(NotificationsService);
  savingProfile = signal(false);
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

  async onSave(name: string) {
    const currentUser = this.auth.currentUser;
    const normalizedName = name.trim();

    if (this.savingProfile()) {
      return;
    }

    if (!currentUser) {
      this.notifications.showError('Sign in again before saving profile changes.');
      return;
    }

    if (!normalizedName) {
      this.notifications.showError('Enter your full name before saving.');
      return;
    }

    this.savingProfile.set(true);

    try {
      await updateProfile(currentUser, { displayName: normalizedName });
      await updateDoc(doc(this.firestore, 'users', currentUser.uid), {
        name: normalizedName,
        updatedAt: new Date(),
      });

      const currentAppUser = this.user();
      if (currentAppUser) {
        this.user.set({ ...currentAppUser, name: normalizedName, updatedAt: new Date() });
      }

      this.notifications.showSuccess('Profile updated.');
    } catch (error) {
      console.error('Profile update failed:', error);
      this.notifications.showError('Could not save profile changes. Please try again.');
    } finally {
      this.savingProfile.set(false);
    }
  }

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
        },
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
