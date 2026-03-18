import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { hideNotification, NotificationType } from '../../core/state/notifications/notifications.actions';
import { selectVisibleNotifications } from '../../core/state/notifications/notifications.selectors';

@Component({
  selector: 'app-notifications',
  imports: [AsyncPipe],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {
  private readonly store = inject(Store);
  readonly notifications$ = this.store.select(selectVisibleNotifications);
  readonly notificationType = NotificationType;

  close(id: string): void {
    this.store.dispatch(hideNotification({ id }));
  }
}
