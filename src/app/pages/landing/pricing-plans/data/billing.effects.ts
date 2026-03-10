import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { BillingService } from '../../../../core/services/billing.service';
import { NotificationsService } from '../../../../core/services/notifications.service';
import * as BillingActions from './billing.actions';

@Injectable()
export class BillingEffects {
  actions$ = inject(Actions);
  billingService = inject(BillingService);
  notifications = inject(NotificationsService);
  router = inject(Router);

  startCheckoutEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(BillingActions.startCheckout),
      switchMap(({ plan }) =>
        from(this.billingService.createCheckout(plan)).pipe(
          map((checkoutUrl) => BillingActions.startCheckoutSuccess({ checkoutUrl })),
          catchError((error) =>
            of(
              BillingActions.startCheckoutFailure({
                error: error instanceof Error ? error.message : String(error),
              }),
            ),
          ),
        ),
      ),
    ),
  );

  checkoutRedirectEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BillingActions.startCheckoutSuccess),
        tap(({ checkoutUrl }) => {
          window.location.assign(checkoutUrl);
        }),
      ),
    { dispatch: false },
  );

  checkoutFailureEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BillingActions.startCheckoutFailure),
        tap(({ error }) => {
          if (error.toLowerCase().includes('log in')) {
            this.notifications.showInfo('Please log in before starting checkout.');
            this.router.navigate(['/auth/login']);
            return;
          }

          this.notifications.showError(error || 'Could not start checkout. Please try again.');
        }),
      ),
    { dispatch: false },
  );
}
