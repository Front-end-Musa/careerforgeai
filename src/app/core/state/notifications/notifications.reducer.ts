import { createReducer, on } from '@ngrx/store';
import {
  Notification,
  showNotification,
  hideNotification,
  clearAllNotifications,
} from './notifications.actions';

export interface NotificationsState {
  notifications: Notification[];
}

export const initialState: NotificationsState = {
  notifications: [],
};

export const notificationsReducer = createReducer(
  initialState,
  on(showNotification, (state, { notification }) => ({
    ...state,
    notifications: [...state.notifications, notification],
  })),
  on(hideNotification, (state, { id }) => ({
    ...state,
    notifications: state.notifications.filter((n) => n.id !== id),
  })),
  on(clearAllNotifications, (state) => ({
    ...state,
    notifications: [],
  })),
);
