import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, from, map, of, tap } from 'rxjs';
import { BillingService } from '../../../../core/services/billing.service';
import { NotificationsService } from '../../../../core/services/notifications.service';
import * as BillingActions from './billing.actions';
import { initUser } from '../../../auth/data/auth.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class BillingEffects {
  actions$ = inject(Actions);
  billingService = inject(BillingService);
  notifications = inject(NotificationsService);
  router = inject(Router);
  store = inject(Store);

  startCheckoutEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(BillingActions.startCheckout),
      exhaustMap(({ plan }) =>
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

  openCustomerPortalEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(BillingActions.openCustomerPortal),
      exhaustMap(() =>
        from(this.billingService.createCustomerPortalSession()).pipe(
          map((portalUrl) => BillingActions.openCustomerPortalSuccess({ portalUrl })),
          catchError((error) =>
            of(
              BillingActions.openCustomerPortalFailure({
                error: error instanceof Error ? error.message : String(error),
              }),
            ),
          ),
        ),
      ),
    ),
  );

  openCustomerPortalRedirectEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BillingActions.openCustomerPortalSuccess),
        tap(({ portalUrl }) => {
          window.location.assign(portalUrl);
        }),
      ),
    { dispatch: false },
  );

  openCustomerPortalFailureEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BillingActions.openCustomerPortalFailure),
        tap(({ error }) => {
          if (error.toLowerCase().includes('log in')) {
            this.notifications.showInfo('Please log in before managing your subscription.');
            this.router.navigate(['/auth/login']);
            return;
          }

          this.notifications.showError('Could not open subscription portal. Please try again.');
        }),
      ),
    { dispatch: false },
  );

  syncEntitlementsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(BillingActions.syncEntitlements),
      exhaustMap(() =>
        from(this.billingService.syncEntitlements()).pipe(
          map((result) => BillingActions.syncEntitlementsSuccess({ result })),
          catchError((error) =>
            of(
              BillingActions.syncEntitlementsFailure({
                error: error instanceof Error ? error.message : String(error),
              }),
            ),
          ),
        ),
      ),
    ),
  );

  syncEntitlementsSuccessEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BillingActions.syncEntitlementsSuccess),
        tap(() => {
          this.store.dispatch(initUser());
        }),
      ),
    { dispatch: false },
  );
}
