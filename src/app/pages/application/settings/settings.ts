import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DirName } from '../dir-name/dir-name';
import { AuthFacade } from '../../auth/data/auth.facade';
import { AppUser } from '../../../core/interfaces/user.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BillingService } from '../../../core/services/billing.service';
import { NotificationsService } from '../../../core/services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [DirName],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  user = signal<AppUser | null>(null);
  managingSubscription = signal(false);
  private authFacade = inject(AuthFacade);
  private destroyRef = inject(DestroyRef);
  private billingService = inject(BillingService);
  private notifications = inject(NotificationsService);
  private router = inject(Router);

  onSave() {}

  async onManageSubscription() {
    if (this.managingSubscription()) {
      return;
    }

    this.managingSubscription.set(true);
    try {
      const portalUrl = await this.billingService.createCustomerPortalSession();
      window.location.assign(portalUrl);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (message.toLowerCase().includes('log in')) {
        this.notifications.showInfo('Please log in before managing your subscription.');
        this.router.navigate(['/auth/login']);
      } else {
        this.notifications.showError('Could not open subscription portal. Please try again.');
      }
    } finally {
      this.managingSubscription.set(false);
    }
  }

  ngOnInit() {
    this.authFacade.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      this.user.set(user);
    });
  }
}
