import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationsState } from './notifications.reducer';

export const selectNotificationsState = createFeatureSelector<NotificationsState>('notifications');

export const selectAllNotifications = createSelector(
  selectNotificationsState,
  (state) => state.notifications,
);

export const selectVisibleNotifications = createSelector(
  selectAllNotifications,
  (notifications) => notifications, // assuming all are visible, or add logic if needed
);

export const selectNotificationCount = createSelector(
  selectAllNotifications,
  (notifications) => notifications.length,
);
