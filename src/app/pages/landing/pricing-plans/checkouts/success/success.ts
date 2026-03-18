import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../../../auth/data/auth.facade';
import { BillingService } from '../../../../../core/services/billing.service';

@Component({
  selector: 'app-success',
  imports: [CommonModule, RouterLink],
  templateUrl: './success.html',
  styleUrl: './success.scss',
})
export class Success implements OnInit {
  private billing = inject(BillingService);
  private authFacade = inject(AuthFacade);

  syncing = signal(true);
  error = signal<string | null>(null);

  async ngOnInit() {
    try {
      await this.billing.syncEntitlements();
      this.authFacade.initAuth();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      this.error.set(message);
    } finally {
      this.syncing.set(false);
    }
  }
}
