import './polyfills.server.mjs';
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-AU5YAMHR.mjs";
import "./chunk-TB3YAHZW.mjs";

// src/app/pages/landing/pricing-plans/checkouts/failure/failure.ts
var Failure = class _Failure {
  static \u0275fac = function Failure_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Failure)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Failure, selectors: [["app-failure"]], decls: 2, vars: 0, template: function Failure_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "failure works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Failure, [{
    type: Component,
    args: [{ selector: "app-failure", imports: [], template: "<p>failure works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Failure, { className: "Failure", filePath: "src/app/pages/landing/pricing-plans/checkouts/failure/failure.ts", lineNumber: 9 });
})();
export {
  Failure
};
//# sourceMappingURL=chunk-N7GUJ3ZF.mjs.map
