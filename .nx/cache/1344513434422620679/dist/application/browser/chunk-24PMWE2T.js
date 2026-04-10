import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-OFJZEGRZ.js";

// src/app/pages/application/dir-name/dir-name.ts
var _c0 = ["additionalElemsContainer"];
var _c1 = ["*"];
var DirName = class _DirName {
  title = "";
  additionalElems = null;
  additionalElemClicked = new EventEmitter();
  elemsContainer;
  static \u0275fac = function DirName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DirName)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirName, selectors: [["app-dir-name"]], viewQuery: function DirName_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elemsContainer = _t.first);
    }
  }, inputs: { title: "title", additionalElems: "additionalElems" }, outputs: { additionalElemClicked: "additionalElemClicked" }, ngContentSelectors: _c1, decls: 6, vars: 1, consts: [[1, "dir-name-container"], [1, "app-section"], [1, "dir-name"], [1, "additional-items"]], template: function DirName_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 3);
      \u0275\u0275projection(5);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title);
    }
  }, styles: ["\n\n.dir-name-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border-bottom: 1px solid #e0e0e0;\n  background-color: #fff;\n  width: 100%;\n  height: 80px;\n}\n.dir-name-container[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.dir-name-container[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .additional-items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=dir-name.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirName, [{
    type: Component,
    args: [{ selector: "app-dir-name", imports: [], template: '<div class="dir-name-container">\r\n  <div class="app-section">\r\n    <div class="dir-name">{{ title }}</div>\r\n\r\n    <div class="additional-items">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/pages/application/dir-name/dir-name.scss */\n.dir-name-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border-bottom: 1px solid #e0e0e0;\n  background-color: #fff;\n  width: 100%;\n  height: 80px;\n}\n.dir-name-container .app-section {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.dir-name-container .app-section .additional-items {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=dir-name.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], additionalElems: [{
    type: Input
  }], additionalElemClicked: [{
    type: Output
  }], elemsContainer: [{
    type: ViewChild,
    args: ["additionalElemsContainer", { read: ElementRef }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirName, { className: "DirName", filePath: "src/app/pages/application/dir-name/dir-name.ts", lineNumber: 19 });
})();

export {
  DirName
};
//# sourceMappingURL=chunk-24PMWE2T.js.map
