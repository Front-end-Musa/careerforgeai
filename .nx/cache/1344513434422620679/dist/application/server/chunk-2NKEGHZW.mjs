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

// src/app/pages/application/interview-coach/interview-coach.ts
var InterviewCoach = class _InterviewCoach {
  static \u0275fac = function InterviewCoach_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InterviewCoach)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InterviewCoach, selectors: [["app-interview-coach"]], decls: 2, vars: 0, consts: [[1, "coming-soon"]], template: function InterviewCoach_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "h1", 0);
      \u0275\u0275text(1, "Coming soon...");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InterviewCoach, [{
    type: Component,
    args: [{ selector: "app-interview-coach", imports: [], template: '<h1 class="coming-soon">Coming soon...</h1>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InterviewCoach, { className: "InterviewCoach", filePath: "src/app/pages/application/interview-coach/interview-coach.ts", lineNumber: 9 });
})();
export {
  InterviewCoach
};
//# sourceMappingURL=chunk-2NKEGHZW.mjs.map
