import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  showNotification,
  hideNotification,
  clearAllNotifications,
  Notification,
  NotificationType,
} from '../state/notifications/notifications.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private store: Store) {}

  showSuccess(message: string, duration?: number): void {
    this.store.dispatch(
      showNotification({
        notification: {
          id: this.generateId(),
          message,
          type: NotificationType.Success,
          duration,
        },
      }),
    );
  }

  showError(message: string, duration?: number): void {
    this.store.dispatch(
      showNotification({
        notification: {
          id: this.generateId(),
          message,
          type: NotificationType.Error,
          duration,
        },
      }),
    );
  }

  showInfo(message: string, duration?: number): void {
    this.store.dispatch(
      showNotification({
        notification: {
          id: this.generateId(),
          message,
          type: NotificationType.Info,
          duration,
        },
      }),
    );
  }

  showWarning(message: string, duration?: number): void {
    this.store.dispatch(
      showNotification({
        notification: {
          id: this.generateId(),
          message,
          type: NotificationType.Warning,
          duration,
        },
      }),
    );
  }

  hide(id: string): void {
    this.store.dispatch(hideNotification({ id }));
  }

  clearAll(): void {
    this.store.dispatch(clearAllNotifications());
  }

  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
}
