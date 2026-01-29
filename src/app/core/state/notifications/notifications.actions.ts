import { createAction, props } from '@ngrx/store';

export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number; // in milliseconds, optional
}

export const showNotification = createAction(
  '[Notifications] Show Notification',
  props<{ notification: Notification }>(),
);

export const hideNotification = createAction(
  '[Notifications] Hide Notification',
  props<{ id: string }>(),
);

export const clearAllNotifications = createAction('[Notifications] Clear All Notifications');
