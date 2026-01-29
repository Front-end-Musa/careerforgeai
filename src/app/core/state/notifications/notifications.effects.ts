import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { showNotification, hideNotification } from './notifications.actions';
import { map, delay, mergeMap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Injectable()
export class NotificationsEffects {
  autoHideNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showNotification),
      mergeMap((action) => {
        const duration = action.notification.duration || 5000; // default 5 seconds
        if (duration > 0) {
          return timer(duration).pipe(map(() => hideNotification({ id: action.notification.id })));
        }
        return [];
      }),
    ),
  );

  constructor(private actions$: Actions) {}
}
