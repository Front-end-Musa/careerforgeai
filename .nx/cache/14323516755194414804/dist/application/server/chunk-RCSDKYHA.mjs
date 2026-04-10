import './polyfills.server.mjs';
import {
  DirName
} from "./chunk-ZZV57LDY.mjs";
import {
  NotificationsService
} from "./chunk-N5ETFSPS.mjs";
import {
  BillingService
} from "./chunk-KVHSG5ZY.mjs";
import "./chunk-XZHX3JZA.mjs";
import {
  AuthFacade
} from "./chunk-R7FA7WRQ.mjs";
import {
  takeUntilDestroyed
} from "./chunk-CAWULYCF.mjs";
import {
  Router
} from "./chunk-WXPEJFQQ.mjs";
import "./chunk-QML36CFQ.mjs";
import "./chunk-OUT5J3VW.mjs";
import {
  Component,
  DestroyRef,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AU5YAMHR.mjs";
import "./chunk-TB3YAHZW.mjs";

// src/app/pages/application/settings/settings.ts
var Settings = class _Settings {
  user = signal(null, ...ngDevMode ? [{ debugName: "user" }] : []);
  managingSubscription = signal(false, ...ngDevMode ? [{ debugName: "managingSubscription" }] : []);
  authFacade = inject(AuthFacade);
  destroyRef = inject(DestroyRef);
  billingService = inject(BillingService);
  notifications = inject(NotificationsService);
  router = inject(Router);
  onSave() {
  }
  async onManageSubscription() {
    if (this.managingSubscription()) {
      return;
    }
    this.managingSubscription.set(true);
    try {
      const portalUrl = await this.billingService.createCustomerPortalSession();
      window.location.assign(portalUrl);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (message.toLowerCase().includes("log in")) {
        this.notifications.showInfo("Please log in before managing your subscription.");
        this.router.navigate(["/auth/login"]);
      } else {
        this.notifications.showError("Could not open subscription portal. Please try again.");
      }
    } finally {
      this.managingSubscription.set(false);
    }
  }
  onDeleteAccount() {
    this.authFacade.deleteAccount();
  }
  ngOnInit() {
    this.authFacade.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      this.user.set(user);
    });
  }
  static \u0275fac = function Settings_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Settings)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Settings, selectors: [["app-settings"]], decls: 32, vars: 7, consts: [[1, "settings", "container"], ["title", "Settings"], [1, "app-section"], [1, "profile-info"], [1, "section-title"], [1, "profile-info_form"], [1, "form-item"], ["for", "name"], ["type", "text", "name", "name", 1, "name-input", "input", 3, "value"], ["for", "email"], ["type", "email", "name", "email", 1, "email-input", "input", 3, "value"], ["mat-button", "", 1, "primary-btn", 3, "click"], [1, "subscription"], [1, "plan-info"], [1, "plan"], [1, "plan-name"], ["mat-button", "", 1, "manage-btn", 3, "click", "disabled"], [1, "danger-zone"], [1, "danger-btns"], [1, "delete-account-btn", 3, "click"]], template: function Settings_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-dir-name", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5, "Profile Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 5)(7, "div", 6)(8, "label", 7);
      \u0275\u0275text(9, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "label", 9);
      \u0275\u0275text(13, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "button", 11);
      \u0275\u0275listener("click", function Settings_Template_button_click_15_listener() {
        return ctx.onSave();
      });
      \u0275\u0275text(16, "Save Changes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "h3", 4);
      \u0275\u0275text(20, "Subscription");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "h4", 15);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "button", 16);
      \u0275\u0275listener("click", function Settings_Template_button_click_24_listener() {
        return ctx.onManageSubscription();
      });
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 17)(27, "h3", 4);
      \u0275\u0275text(28, "Danger Zone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 18)(30, "button", 19);
      \u0275\u0275listener("click", function Settings_Template_button_click_30_listener() {
        return ctx.onDeleteAccount();
      });
      \u0275\u0275text(31, "Delete Account");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(10);
      \u0275\u0275property("value", \u0275\u0275interpolate((tmp_0_0 = ctx.user()) == null ? null : tmp_0_0.name));
      \u0275\u0275advance(4);
      \u0275\u0275property("value", \u0275\u0275interpolate((tmp_1_0 = ctx.user()) == null ? null : tmp_1_0.email));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", (tmp_2_0 = ctx.user()) == null ? null : tmp_2_0.plan, " plan");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.managingSubscription());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.managingSubscription() ? "Opening..." : "Manage Subscription", " ");
    }
  }, dependencies: [DirName], styles: ["\n\n.settings.container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.app-section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-info[_ngcontent-%COMP%], \n.subscription[_ngcontent-%COMP%], \n.danger-zone[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.profile-info[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%], \n.subscription[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%], \n.danger-zone[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.profile-info[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], \n.subscription[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], \n.danger-zone[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text);\n}\n.profile-info_form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.profile-info_form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.profile-info_form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--text);\n}\n.profile-info_form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: border-color 0.2s;\n}\n.profile-info_form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-500);\n}\n.subscription[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.subscription[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.subscription[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .plan-cost[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.primary-btn[_ngcontent-%COMP%] {\n  background-color: var(--mat-sys-primary) !important;\n  color: white !important;\n  border-radius: 6px;\n  font-weight: 500;\n  text-transform: none;\n}\n.manage-btn[_ngcontent-%COMP%] {\n  background-color: var(--mat-sys-primary) !important;\n  color: white !important;\n  border-radius: 6px;\n}\n.danger-btns[_ngcontent-%COMP%]   .delete-account-btn[_ngcontent-%COMP%] {\n  background-color: #dc2626;\n  color: white;\n  border: none;\n  padding: 0.6rem 1rem;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.danger-btns[_ngcontent-%COMP%]   .delete-account-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.danger-btns[_ngcontent-%COMP%]   .signout-btn[_ngcontent-%COMP%] {\n  border: 1px solid #dc2626;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n/*# sourceMappingURL=settings.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Settings, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [DirName], template: `<div class="settings container">\r
  <app-dir-name title="Settings"></app-dir-name>\r
  <div class="app-section">\r
    <div class="profile-info">\r
      <h3 class="section-title">Profile Information</h3>\r
      <form class="profile-info_form">\r
        <div class="form-item">\r
          <label for="name">Full Name</label>\r
          <input type="text" class="name-input input" name="name" value="{{ user()?.name }}" />\r
        </div>\r
        <div class="form-item">\r
          <label for="email">Email</label>\r
          <input type="email" class="email-input input" name="email" value="{{ user()?.email }}" />\r
        </div>\r
      </form>\r
      <button mat-button class="primary-btn" (click)="onSave()">Save Changes</button>\r
    </div>\r
    <div class="subscription">\r
      <div class="plan-info">\r
        <h3 class="section-title">Subscription</h3>\r
        <div class="plan">\r
          <h4 class="plan-name">{{ user()?.plan }} plan</h4>\r
        </div>\r
      </div>\r
      <button\r
        mat-button\r
        class="manage-btn"\r
        [disabled]="managingSubscription()"\r
        (click)="onManageSubscription()"\r
      >\r
        {{ managingSubscription() ? 'Opening...' : 'Manage Subscription' }}\r
      </button>\r
    </div>\r
    <div class="danger-zone">\r
      <h3 class="section-title">Danger Zone</h3>\r
      <div class="danger-btns">\r
        <button class="delete-account-btn" (click)="onDeleteAccount()">Delete Account</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/application/settings/settings.scss */\n.settings.container {\n  height: 100vh;\n}\n.app-section {\n  width: 100%;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-info,\n.subscription,\n.danger-zone {\n  background: var(--surface-card);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.profile-info .plan-info,\n.subscription .plan-info,\n.danger-zone .plan-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.profile-info .plan-info .section-title,\n.subscription .plan-info .section-title,\n.danger-zone .plan-info .section-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text);\n}\n.profile-info_form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.profile-info_form .form-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.profile-info_form .form-item label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--text);\n}\n.profile-info_form .form-item .input {\n  padding: 0.6rem 0.8rem;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: border-color 0.2s;\n}\n.profile-info_form .form-item .input:focus {\n  outline: none;\n  border-color: var(--brand-500);\n}\n.subscription {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.subscription .plan .plan-name {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.subscription .plan .plan-cost {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.primary-btn {\n  background-color: var(--mat-sys-primary) !important;\n  color: white !important;\n  border-radius: 6px;\n  font-weight: 500;\n  text-transform: none;\n}\n.manage-btn {\n  background-color: var(--mat-sys-primary) !important;\n  color: white !important;\n  border-radius: 6px;\n}\n.danger-btns .delete-account-btn {\n  background-color: #dc2626;\n  color: white;\n  border: none;\n  padding: 0.6rem 1rem;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.danger-btns .delete-account-btn:hover {\n  opacity: 0.9;\n}\n.danger-btns .signout-btn {\n  border: 1px solid #dc2626;\n}\nbutton {\n  padding: 10px 15px;\n}\n/*# sourceMappingURL=settings.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Settings, { className: "Settings", filePath: "src/app/pages/application/settings/settings.ts", lineNumber: 16 });
})();
export {
  Settings
};
//# sourceMappingURL=chunk-RCSDKYHA.mjs.map
