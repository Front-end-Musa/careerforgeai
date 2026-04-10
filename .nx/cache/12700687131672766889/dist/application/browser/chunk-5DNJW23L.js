import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-OFJZEGRZ.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/application/linkedin/linkedin.ts
var Linkedin = class _Linkedin {
  static \u0275fac = function Linkedin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Linkedin)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Linkedin, selectors: [["app-linkedin"]], decls: 2, vars: 0, consts: [[1, "coming-soon"]], template: function Linkedin_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "h1", 0);
      \u0275\u0275text(1, "Coming soon...");
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n.coming-soon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=linkedin.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Linkedin, [{
    type: Component,
    args: [{ selector: "app-linkedin", imports: [], template: '<h1 class="coming-soon">Coming soon...</h1>\r\n', styles: ["/* src/app/pages/application/linkedin/linkedin.scss */\n.coming-soon {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=linkedin.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Linkedin, { className: "Linkedin", filePath: "src/app/pages/application/linkedin/linkedin.ts", lineNumber: 9 });
})();
export {
  Linkedin
};
//# sourceMappingURL=chunk-5DNJW23L.js.map
