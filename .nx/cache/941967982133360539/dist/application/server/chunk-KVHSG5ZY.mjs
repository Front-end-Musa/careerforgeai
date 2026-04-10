import './polyfills.server.mjs';
import {
  Auth,
  FirebaseError,
  Functions,
  httpsCallable
} from "./chunk-XZHX3JZA.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-AU5YAMHR.mjs";

// src/app/core/services/callable.service.ts
var CallableService = class _CallableService {
  functions = inject(Functions);
  callable(name) {
    return httpsCallable(this.functions, name);
  }
  static \u0275fac = function CallableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CallableService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CallableService, factory: _CallableService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CallableService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/billing.service.ts
var BillingService = class _BillingService {
  auth = inject(Auth);
  callableService = inject(CallableService);
  proPlanId = "ac58d79e-1d84-4322-bef6-05147be57cc7";
  premiumPlanId = "7ad22fce-484d-472c-ad6e-f08e09e3e264";
  createCheckoutFn = this.callableService.callable("createCheckout");
  createPortalFn = this.callableService.callable("createPortalSession");
  syncEntitlementsFn = this.callableService.callable("syncEntitlements");
  async createCheckout(_plan) {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error("Please log in to continue with checkout.");
    }
    try {
      const result = await this.createCheckoutFn({
        plan: _plan,
        priceId: _plan === "pro" ? this.proPlanId : this.premiumPlanId
      });
      if (typeof result.data !== "string" || !result.data.trim()) {
        throw new Error("Checkout URL was not returned by the server.");
      }
      return result.data;
    } catch (err) {
      throw this.toCheckoutError(err);
    }
  }
  async createCustomerPortalSession() {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error("Please log in to manage your subscription.");
    }
    try {
      const result = await this.createPortalFn();
      if (typeof result.data !== "string" || !result.data.trim()) {
        throw new Error("Portal URL was not returned by the server.");
      }
      return result.data;
    } catch (err) {
      throw this.toCheckoutError(err);
    }
  }
  async syncEntitlements() {
    const user = this.auth.currentUser;
    if (!user) {
      throw new Error("Please log in to refresh your subscription status.");
    }
    await user.getIdToken(true);
    const result = await this.syncEntitlementsFn();
    return result.data;
  }
  toCheckoutError(error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "functions/unauthenticated":
          return new Error("Please log in to continue with checkout.");
        case "functions/invalid-argument":
          return new Error("Checkout configuration is invalid. Please refresh and try again.");
        case "functions/internal":
          return new Error("Checkout service is temporarily unavailable. Please try again shortly.");
        case "functions/permission-denied":
          return new Error("Your plan does not include this feature.");
        case "functions/resource-exhausted":
          return new Error("You reached your monthly AI limit for your current plan.");
        case "functions/failed-precondition":
          return new Error("Your billing profile is not ready yet. Please update your account details and try again.");
        default:
          return new Error(`Checkout failed (${error.code}).`);
      }
    }
    if (error instanceof Error) {
      return error;
    }
    return new Error("Checkout failed due to an unknown error.");
  }
  static \u0275fac = function BillingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BillingService, factory: _BillingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CallableService,
  BillingService
};
//# sourceMappingURL=chunk-KVHSG5ZY.mjs.map
