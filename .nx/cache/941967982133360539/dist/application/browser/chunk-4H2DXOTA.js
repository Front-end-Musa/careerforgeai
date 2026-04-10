import {
  BillingService
} from "./chunk-436PNFTE.js";
import "./chunk-GTOMM46D.js";
import {
  AuthFacade
} from "./chunk-4TREYFXK.js";
import "./chunk-G2253GUZ.js";
import {
  RouterLink
} from "./chunk-4QIJMJL3.js";
import "./chunk-5DFGQV6T.js";
import {
  CommonModule
} from "./chunk-DNRS4C6J.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OFJZEGRZ.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/landing/pricing-plans/checkouts/success/success.ts
function Success_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Updating your subscription access...");
    \u0275\u0275elementEnd();
  }
}
function Success_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Your payment completed, but subscription sync failed. Try again from Settings.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function Success_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Your plan is active. You can continue in the app.");
    \u0275\u0275elementEnd();
  }
}
function Success_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Success_Conditional_4_Conditional_0_Template, 4, 1)(1, Success_Conditional_4_Conditional_1_Template, 2, 0, "p");
    \u0275\u0275elementStart(2, "a", 1);
    \u0275\u0275text(3, "Go to application");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.error() ? 0 : 1);
  }
}
var Success = class _Success {
  billing = inject(BillingService);
  authFacade = inject(AuthFacade);
  syncing = signal(true, ...ngDevMode ? [{ debugName: "syncing" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  async ngOnInit() {
    try {
      await this.billing.syncEntitlements();
      this.authFacade.initAuth();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.error.set(message);
    } finally {
      this.syncing.set(false);
    }
  }
  static \u0275fac = function Success_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Success)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Success, selectors: [["app-success"]], decls: 5, vars: 1, consts: [[1, "success"], ["routerLink", "/application/resumes"], [1, "error"]], template: function Success_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Payment received");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, Success_Conditional_3_Template, 2, 0, "p")(4, Success_Conditional_4_Template, 4, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.syncing() ? 3 : 4);
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.success[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  max-width: 40rem;\n  padding: 1.5rem;\n  border: 1px solid #d7dbe2;\n  border-radius: 0.75rem;\n  background: #fff;\n}\n.error[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n/*# sourceMappingURL=success.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Success, [{
    type: Component,
    args: [{ selector: "app-success", imports: [CommonModule, RouterLink], template: '<section class="success">\r\n  <h1>Payment received</h1>\r\n  @if (syncing()) {\r\n    <p>Updating your subscription access...</p>\r\n  } @else {\r\n    @if (error()) {\r\n      <p class="error">{{ error() }}</p>\r\n      <p>Your payment completed, but subscription sync failed. Try again from Settings.</p>\r\n    } @else {\r\n      <p>Your plan is active. You can continue in the app.</p>\r\n    }\r\n    <a routerLink="/application/resumes">Go to application</a>\r\n  }\r\n</section>\r\n', styles: ["/* src/app/pages/landing/pricing-plans/checkouts/success/success.scss */\n.success {\n  margin: 2rem auto;\n  max-width: 40rem;\n  padding: 1.5rem;\n  border: 1px solid #d7dbe2;\n  border-radius: 0.75rem;\n  background: #fff;\n}\n.error {\n  color: #c0392b;\n}\n/*# sourceMappingURL=success.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Success, { className: "Success", filePath: "src/app/pages/landing/pricing-plans/checkouts/success/success.ts", lineNumber: 13 });
})();
export {
  Success
};
//# sourceMappingURL=chunk-4H2DXOTA.js.map
