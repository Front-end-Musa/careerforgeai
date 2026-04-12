import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../../../auth/data/auth.facade';
import { BillingService } from '../../../../../core/services/billing.service';
import { ResumeUpgradeService } from '../../../../../core/services/resume-upgrade.service';

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
    if (pendingPath) {
      this.continuePath.set(pendingPath);
      this.resumeUpgrade.clearPendingPath();
    }

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
