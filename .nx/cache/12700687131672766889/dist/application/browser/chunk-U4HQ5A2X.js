import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OFJZEGRZ.js";

// src/app/pages/buttons/generate-btn/generate-btn.ts
var GenerateBtn = class _GenerateBtn {
  submitForm;
  disabled = false;
  label = "Generate with AI";
  compact = false;
  generate = new EventEmitter();
  onSubmit() {
    if (this.disabled) {
      return;
    }
    if (this.submitForm && this.submitForm.invalid) {
      Object.keys(this.submitForm.controls).forEach((key) => {
        this.submitForm?.get(key)?.markAsTouched();
      });
      return;
    }
    this.generate.emit();
  }
  static \u0275fac = function GenerateBtn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GenerateBtn)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenerateBtn, selectors: [["app-generate-btn"]], inputs: { submitForm: "submitForm", disabled: "disabled", label: "label", compact: "compact" }, outputs: { generate: "generate" }, decls: 5, vars: 4, consts: [["type", "button", 1, "generate", 3, "click", "disabled"], [1, "badge"], [1, "label"]], template: function GenerateBtn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function GenerateBtn_Template_button_click_0_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275domElementStart(1, "span", 1);
      \u0275\u0275text(2, "AI");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("compact", ctx.compact);
      \u0275\u0275domProperty("disabled", ctx.disabled);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.label);
    }
  }, styles: ["\n\n.generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border: 1px solid #dbe4ff;\n  border-radius: 999px;\n  background: #eef3ff;\n  color: #1d4ed8;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.2px;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    background 0.15s ease,\n    color 0.15s ease;\n}\n.generate[_ngcontent-%COMP%]:hover {\n  background: #e0e7ff;\n  color: #1e40af;\n  box-shadow: 0 6px 14px rgba(37, 99, 235, 0.2);\n  transform: translateY(-1px);\n}\n.generate[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.generate.compact[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 11px;\n}\n.badge[_ngcontent-%COMP%] {\n  background: #1e3a8a;\n  color: #ffffff;\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n}\n.label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=generate-btn.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenerateBtn, [{
    type: Component,
    args: [{ selector: "app-generate-btn", standalone: true, imports: [], template: '<button\r\n  class="generate"\r\n  [class.compact]="compact"\r\n  type="button"\r\n  (click)="onSubmit()"\r\n  [disabled]="disabled"\r\n>\r\n  <span class="badge">AI</span>\r\n  <span class="label">{{ label }}</span>\r\n</button>\r\n', styles: ["/* src/app/pages/buttons/generate-btn/generate-btn.scss */\n.generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border: 1px solid #dbe4ff;\n  border-radius: 999px;\n  background: #eef3ff;\n  color: #1d4ed8;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.2px;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    background 0.15s ease,\n    color 0.15s ease;\n}\n.generate:hover {\n  background: #e0e7ff;\n  color: #1e40af;\n  box-shadow: 0 6px 14px rgba(37, 99, 235, 0.2);\n  transform: translateY(-1px);\n}\n.generate:active {\n  transform: translateY(0);\n}\n.generate:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.generate.compact {\n  padding: 6px 12px;\n  font-size: 11px;\n}\n.badge {\n  background: #1e3a8a;\n  color: #ffffff;\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n}\n.label {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=generate-btn.css.map */\n"] }]
  }], null, { submitForm: [{
    type: Input
  }], disabled: [{
    type: Input
  }], label: [{
    type: Input
  }], compact: [{
    type: Input
  }], generate: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenerateBtn, { className: "GenerateBtn", filePath: "src/app/pages/buttons/generate-btn/generate-btn.ts", lineNumber: 11 });
})();

export {
  GenerateBtn
};
//# sourceMappingURL=chunk-U4HQ5A2X.js.map
