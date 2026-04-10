import './polyfills.server.mjs';
import {
  Store,
  createAction,
  props
} from "./chunk-CAWULYCF.mjs";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-AU5YAMHR.mjs";

// src/app/core/state/notifications/notifications.actions.ts
var NotificationType;
(function(NotificationType2) {
  NotificationType2["Success"] = "success";
  NotificationType2["Error"] = "error";
  NotificationType2["Info"] = "info";
  NotificationType2["Warning"] = "warning";
})(NotificationType || (NotificationType = {}));
var showNotification = createAction("[Notifications] Show Notification", props());
var hideNotification = createAction("[Notifications] Hide Notification", props());
var clearAllNotifications = createAction("[Notifications] Clear All Notifications");

// src/app/core/services/notifications.service.ts
var NotificationsService = class _NotificationsService {
  store;
  constructor(store) {
    this.store = store;
  }
  showSuccess(message, duration) {
    this.store.dispatch(showNotification({
      notification: {
        id: this.generateId(),
        message,
        type: NotificationType.Success,
        duration
      }
    }));
  }
  showError(message, duration) {
    this.store.dispatch(showNotification({
      notification: {
        id: this.generateId(),
        message,
        type: NotificationType.Error,
        duration
      }
    }));
  }
  showInfo(message, duration) {
    this.store.dispatch(showNotification({
      notification: {
        id: this.generateId(),
        message,
        type: NotificationType.Info,
        duration
      }
    }));
  }
  showWarning(message, duration) {
    this.store.dispatch(showNotification({
      notification: {
        id: this.generateId(),
        message,
        type: NotificationType.Warning,
        duration
      }
    }));
  }
  hide(id) {
    this.store.dispatch(hideNotification({ id }));
  }
  clearAll() {
    this.store.dispatch(clearAllNotifications());
  }
  generateId() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
  static \u0275fac = function NotificationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsService)(\u0275\u0275inject(Store));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationsService, factory: _NotificationsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Store }], null);
})();

export {
  NotificationType,
  showNotification,
  hideNotification,
  clearAllNotifications,
  NotificationsService
};
//# sourceMappingURL=chunk-N5ETFSPS.mjs.map
