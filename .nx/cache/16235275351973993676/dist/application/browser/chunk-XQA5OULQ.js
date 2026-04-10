import {
  MatIcon,
  MatIconModule
} from "./chunk-BL4FRIRM.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-OFJZEGRZ.js";

// src/app/pages/logos/logo/logo.ts
var Logo = class _Logo {
  static \u0275fac = function Logo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Logo)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Logo, selectors: [["app-logo"]], decls: 6, vars: 0, consts: [[1, "brand"], [1, "logo"], [1, "lightning"], [1, "brand-name"]], template: function Logo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3, "flash_on");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5, "ResumeCrafts AI");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [MatIconModule, MatIcon], styles: ["\n\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n}\n.brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n*[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=logo.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Logo, [{
    type: Component,
    args: [{ selector: "app-logo", imports: [MatIconModule], template: '<div class="brand">\r\n  <div class="logo">\r\n    <mat-icon class="lightning">flash_on</mat-icon>\r\n  </div>\r\n  <h2 class="brand-name">ResumeCrafts AI</h2>\r\n</div>\r\n', styles: ["/* src/app/pages/logos/logo/logo.scss */\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n}\n.brand .brand-name {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n* {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=logo.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Logo, { className: "Logo", filePath: "src/app/pages/logos/logo/logo.ts", lineNumber: 10 });
})();

export {
  Logo
};
//# sourceMappingURL=chunk-XQA5OULQ.js.map
