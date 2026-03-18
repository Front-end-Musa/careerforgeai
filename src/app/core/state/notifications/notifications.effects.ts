import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { showNotification, hideNotification } from './notifications.actions';
import { map, mergeMap } from 'rxjs/operators';
import { EMPTY, timer } from 'rxjs';

@Injectable()
export class NotificationsEffects {
  private readonly actions$ = inject(Actions);

  autoHideNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showNotification),
      mergeMap((action) => {
        const duration = action.notification.duration || 5000; // default 5 seconds
        if (duration > 0) {
          return timer(duration).pipe(map(() => hideNotification({ id: action.notification.id })));
        }
        return EMPTY;
      }),
    ),
  );
}
