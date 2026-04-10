import {
  ResumeTemplateModal
} from "./chunk-CYOPCYOW.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from "./chunk-OIA5LSTA.js";
import {
  DirName
} from "./chunk-24PMWE2T.js";
import {
  ResumesCreate
} from "./chunk-IPHUA2QQ.js";
import "./chunk-TPWAKPUQ.js";
import "./chunk-U4HQ5A2X.js";
import {
  ResumesFacade
} from "./chunk-JWEDNJBE.js";
import {
  ResumesStatus
} from "./chunk-5VXP3HLW.js";
import "./chunk-EYC2LAWI.js";
import "./chunk-E7Z7URHS.js";
import "./chunk-TIJC3XQI.js";
import "./chunk-U4YT2HSO.js";
import "./chunk-7YWLATDR.js";
import "./chunk-NJPLYCWR.js";
import "./chunk-IVMNBVY2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-D7OOZPSD.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-JO7F5BXY.js";
import "./chunk-6MBOXXHD.js";
import "./chunk-BL4FRIRM.js";
import "./chunk-SS6OVLD6.js";
import "./chunk-UIUNXKUC.js";
import "./chunk-GTOMM46D.js";
import {
  AuthFacade
} from "./chunk-4TREYFXK.js";
import {
  takeUntilDestroyed
} from "./chunk-G2253GUZ.js";
import {
  RouterLink
} from "./chunk-4QIJMJL3.js";
import "./chunk-5DFGQV6T.js";
import {
  AsyncPipe,
  DatePipe,
  isPlatformBrowser
} from "./chunk-DNRS4C6J.js";
import {
  Component,
  DestroyRef,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  Output,
  PLATFORM_ID,
  ViewChild,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-OFJZEGRZ.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/buttons/create-list-resume-switch/create-list-resume-switch.ts
var CreateListResumeSwitch = class _CreateListResumeSwitch {
  active;
  change = new EventEmitter();
  select(mode) {
    if (this.active === mode)
      return;
    this.change.emit(mode);
  }
  static \u0275fac = function CreateListResumeSwitch_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateListResumeSwitch)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateListResumeSwitch, selectors: [["app-create-list-resume-switch"]], inputs: { active: "active" }, outputs: { change: "change" }, decls: 6, vars: 6, consts: [[1, "view-switch"], [1, "switch-btn", 3, "click"], [1, "switch-indicator"]], template: function CreateListResumeSwitch_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275domListener("click", function CreateListResumeSwitch_Template_button_click_1_listener() {
        return ctx.select("list");
      });
      \u0275\u0275text(2, " List ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "button", 1);
      \u0275\u0275domListener("click", function CreateListResumeSwitch_Template_button_click_3_listener() {
        return ctx.select("create");
      });
      \u0275\u0275text(4, " Create ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(5, "div", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.active === "list");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.active === "create");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("right", ctx.active === "create");
    }
  }, styles: ["\n\n.view-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  background: color-mix(in srgb, var(--mat-sys-primary) 12%, transparent);\n  border-radius: 8px;\n  padding: 8px;\n  gap: 0;\n  -webkit-user-select: none;\n  user-select: none;\n  width: 200px;\n  height: 50px;\n  font-size: 1rem;\n}\n.switch-btn[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  height: 40px;\n  width: 50%;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  font: inherit;\n  font-weight: 500;\n  color: var(--mat-sys-primary);\n  cursor: pointer;\n  text-align: center;\n  transition: color 150ms ease, opacity 150ms ease;\n}\n.switch-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.switch-btn.active[_ngcontent-%COMP%] {\n  color: white;\n  cursor: default;\n}\n.switch-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 1;\n  cursor: default;\n}\n.switch-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: calc(50% - 4px);\n  height: calc(100% - 8px);\n  background: var(--mat-sys-primary);\n  border-radius: 8px;\n  transition: transform 220ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.switch-indicator.right[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n/*# sourceMappingURL=create-list-resume-switch.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateListResumeSwitch, [{
    type: Component,
    args: [{ selector: "app-create-list-resume-switch", imports: [], template: `<div class="view-switch">\r
  <button\r
    class="switch-btn"\r
    [class.active]="active === 'list'"\r
    (click)="select('list')"\r
  >\r
    List\r
  </button>\r
\r
  <button\r
    class="switch-btn"\r
    [class.active]="active === 'create'"\r
    (click)="select('create')"\r
  >\r
    Create\r
  </button>\r
\r
  <div\r
    class="switch-indicator"\r
    [class.right]="active === 'create'"\r
  ></div>\r
</div>\r
`, styles: ["/* src/app/pages/buttons/create-list-resume-switch/create-list-resume-switch.scss */\n.view-switch {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  background: color-mix(in srgb, var(--mat-sys-primary) 12%, transparent);\n  border-radius: 8px;\n  padding: 8px;\n  gap: 0;\n  -webkit-user-select: none;\n  user-select: none;\n  width: 200px;\n  height: 50px;\n  font-size: 1rem;\n}\n.switch-btn {\n  position: relative;\n  z-index: 1;\n  height: 40px;\n  width: 50%;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  font: inherit;\n  font-weight: 500;\n  color: var(--mat-sys-primary);\n  cursor: pointer;\n  text-align: center;\n  transition: color 150ms ease, opacity 150ms ease;\n}\n.switch-btn:hover {\n  opacity: 0.85;\n}\n.switch-btn.active {\n  color: white;\n  cursor: default;\n}\n.switch-btn:disabled {\n  opacity: 1;\n  cursor: default;\n}\n.switch-indicator {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: calc(50% - 4px);\n  height: calc(100% - 8px);\n  background: var(--mat-sys-primary);\n  border-radius: 8px;\n  transition: transform 220ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.switch-indicator.right {\n  transform: translateX(100%);\n}\n/*# sourceMappingURL=create-list-resume-switch.css.map */\n"] }]
  }], null, { active: [{
    type: Input
  }], change: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateListResumeSwitch, { className: "CreateListResumeSwitch", filePath: "src/app/pages/buttons/create-list-resume-switch/create-list-resume-switch.ts", lineNumber: 9 });
})();

// src/app/pages/application/resumes/resumes-list/resume-card/resume-card.ts
var _c0 = (a0) => ["/application/resumes", a0, "edit"];
var _c1 = (a0) => ["/application/resumes", a0, "tailor"];
var ResumeCard = class _ResumeCard {
  resumesFacade;
  resume;
  constructor(resumesFacade) {
    this.resumesFacade = resumesFacade;
  }
  deleteResume() {
    this.resumesFacade.deleteResume(this.resume.id ? this.resume.id : "");
  }
  static \u0275fac = function ResumeCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumeCard)(\u0275\u0275directiveInject(ResumesFacade));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumeCard, selectors: [["app-resume-card"]], inputs: { resume: "resume" }, decls: 18, vars: 11, consts: [[1, "resume-card"], [1, "resume-info-wrapper"], [1, "material-symbols-outlined", "icon-blue"], [1, "resume-info-text"], [1, "resume-title"], [1, "updatedat"], [1, "resume-btns"], [1, "edit-btn", 3, "routerLink"], [1, "tailor-btn", 3, "routerLink"], [1, "delete-btn", 3, "click"], [1, "material-symbols-outlined", "resume-mat", "delete-btn"]], template: function ResumeCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275text(12, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275text(14, "AI Tailor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function ResumeCard_Template_button_click_15_listener() {
        return ctx.deleteResume();
      });
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17, "Delete");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.resume.personalInfo.jobTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Updated at ", \u0275\u0275pipeBind2(9, 4, ctx.resume.meta.updatedAt, "dd.MM.yyyy"));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, ctx.resume.id));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c1, ctx.resume.id));
    }
  }, dependencies: [RouterLink, DatePipe], styles: ["\n\n.resume-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1rem;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #ffffff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  min-width: 300px;\n  width: 100%;\n  padding: 20px;\n}\n.resume-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.resume-card[_ngcontent-%COMP%]   .resume-info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-info-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-info-wrapper[_ngcontent-%COMP%]   .resume-info-text[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-image[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50vh;\n  object-fit: cover;\n}\n@media (max-width: 1800px) {\n  .resume-card[_ngcontent-%COMP%]   .resume-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 30vh;\n  }\n}\n@media (max-width: 1000px) {\n  .resume-card[_ngcontent-%COMP%]   .resume-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 20vh;\n  }\n}\n.resume-card[_ngcontent-%COMP%]   .resume-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.4;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  line-height: 1.4;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  background: #f5f5f5;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  background: #ffffff;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #efefef;\n  border-color: #999;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .resume-mat[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-btns[_ngcontent-%COMP%]   button.delete-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #ff9999;\n  color: #ff9999;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-btns[_ngcontent-%COMP%]   button.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #ffcccc;\n  border-color: #ff6666;\n  color: #ff6666;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-btns[_ngcontent-%COMP%]   button.edit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.resume-card[_ngcontent-%COMP%]   .resume-btns[_ngcontent-%COMP%]   button.edit-btn[_ngcontent-%COMP%]:hover {\n  background: #cce6ff;\n  border-color: #3399ff;\n  color: #3399ff;\n}\n/*# sourceMappingURL=resume-card.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumeCard, [{
    type: Component,
    args: [{ selector: "app-resume-card", imports: [DatePipe, RouterLink], template: `<div class="resume-card">\r
  <div class="resume-info-wrapper">\r
    <span class="material-symbols-outlined icon-blue">description</span>\r
    <div class="resume-info-text">\r
      <div class="resume-title">{{ resume.personalInfo.jobTitle }}</div>\r
    </div>\r
  </div>\r
  <div class="updatedat">Updated at {{ resume.meta.updatedAt | date : 'dd.MM.yyyy' }}</div>\r
  <div class="resume-btns">\r
    <button class="edit-btn" [routerLink]="['/application/resumes', resume.id, 'edit']">Edit</button>\r
    <button class="tailor-btn" [routerLink]="['/application/resumes', resume.id, 'tailor']">AI Tailor</button>\r
    <button class="delete-btn" (click)="deleteResume()">\r
      <span class="material-symbols-outlined resume-mat delete-btn">Delete</span>\r
    </button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/application/resumes/resumes-list/resume-card/resume-card.scss */\n.resume-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1rem;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #ffffff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  min-width: 300px;\n  width: 100%;\n  padding: 20px;\n}\n.resume-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.resume-card .resume-info-wrapper {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n}\n.resume-card .resume-info-wrapper span {\n  width: 50px;\n  height: 50px;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.resume-card .resume-info-wrapper .resume-info-text {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.resume-card .resume-image {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.resume-card .resume-image img {\n  width: 100%;\n  height: 50vh;\n  object-fit: cover;\n}\n@media (max-width: 1800px) {\n  .resume-card .resume-image img {\n    height: 30vh;\n  }\n}\n@media (max-width: 1000px) {\n  .resume-card .resume-image img {\n    height: 20vh;\n  }\n}\n.resume-card .resume-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.4;\n}\n.resume-card .resume-info {\n  font-size: 12px;\n  color: #666;\n  line-height: 1.4;\n}\n.resume-card .resume-btns {\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n}\n.resume-card .resume-btns button {\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  background: #f5f5f5;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  background: #ffffff;\n}\n.resume-card .resume-btns button:hover {\n  background: #efefef;\n  border-color: #999;\n}\n.resume-card .resume-btns button .resume-mat {\n  font-size: 16px;\n}\n.resume-card .resume-btns button.delete-btn {\n  background: #ffffff;\n  border-color: #ff9999;\n  color: #ff9999;\n}\n.resume-card .resume-btns button.delete-btn:hover {\n  background: #ffcccc;\n  border-color: #ff6666;\n  color: #ff6666;\n}\n.resume-card .resume-btns button.edit-btn {\n  width: 100%;\n}\n.resume-card .resume-btns button.edit-btn:hover {\n  background: #cce6ff;\n  border-color: #3399ff;\n  color: #3399ff;\n}\n/*# sourceMappingURL=resume-card.css.map */\n"] }]
  }], () => [{ type: ResumesFacade }], { resume: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumeCard, { className: "ResumeCard", filePath: "src/app/pages/application/resumes/resumes-list/resume-card/resume-card.ts", lineNumber: 13 });
})();

// src/app/pages/application/resumes/resumes-list/resumes-list.ts
function ResumesList_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Initializing resumes...");
    \u0275\u0275elementEnd();
  }
}
function ResumesList_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 0);
  }
}
function ResumesList_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h3");
    \u0275\u0275text(2, "No resumes yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Build your first resume in minutes with our templates.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function ResumesList_Conditional_0_Conditional_2_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestCreate());
    });
    \u0275\u0275text(6, " Create your first resume ");
    \u0275\u0275elementEnd()();
  }
}
function ResumesList_Conditional_0_Conditional_2_Conditional_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-resume-card", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resume_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("resume", resume_r3);
  }
}
function ResumesList_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "cdk-virtual-scroll-viewport", 4);
    \u0275\u0275template(2, ResumesList_Conditional_0_Conditional_2_Conditional_1_div_2_Template, 2, 1, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("cdkVirtualForOf", ctx_r1.resumes());
  }
}
function ResumesList_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResumesList_Conditional_0_Conditional_2_Conditional_0_Template, 7, 0, "div", 1)(1, ResumesList_Conditional_0_Conditional_2_Conditional_1_Template, 3, 1, "div", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.resumes().length ? 0 : 1);
  }
}
function ResumesList_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Error loading resumes.");
    \u0275\u0275elementEnd();
  }
}
function ResumesList_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResumesList_Conditional_0_Conditional_0_Template, 2, 0, "p");
    \u0275\u0275conditionalCreate(1, ResumesList_Conditional_0_Conditional_1_Template, 1, 0, "mat-progress-spinner", 0);
    \u0275\u0275conditionalCreate(2, ResumesList_Conditional_0_Conditional_2_Template, 2, 1);
    \u0275\u0275conditionalCreate(3, ResumesList_Conditional_0_Conditional_3_Template, 2, 0, "p");
  }
  if (rf & 2) {
    const status_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(status_r4 === ctx_r1.resumesStatus.Init ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(status_r4 === ctx_r1.resumesStatus.Loading ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(status_r4 === ctx_r1.resumesStatus.Loaded ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(status_r4 === ctx_r1.resumesStatus.Error ? 3 : -1);
  }
}
var ResumesList = class _ResumesList {
  createRequested = new EventEmitter();
  resumesFacade = inject(ResumesFacade);
  destroyRef = inject(DestroyRef);
  resumesStatus = ResumesStatus;
  status$ = this.resumesFacade.status$;
  resumes = signal([], ...ngDevMode ? [{ debugName: "resumes" }] : []);
  loading$ = this.resumesFacade.loading$;
  error$ = this.resumesFacade.error$;
  ngOnInit() {
    this.resumesFacade.loadResumes();
    this.resumesFacade.resumes$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((resumes) => {
      this.resumes.set(resumes ?? []);
    });
  }
  requestCreate() {
    this.createRequested.emit();
  }
  static \u0275fac = function ResumesList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumesList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumesList, selectors: [["app-resumes-list"]], outputs: { createRequested: "createRequested" }, decls: 2, vars: 3, consts: [["diameter", "30", "mode", "indeterminate"], [1, "resumes-empty"], [1, "resumes-list-wrapper"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["itemSize", "200", 1, "viewport"], ["class", "resume-card-wrapper", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "resume-card-wrapper"], [3, "resume"]], template: function ResumesList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ResumesList_Conditional_0_Template, 4, 4);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.status$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [ResumeCard, ScrollingModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, MatProgressSpinnerModule, MatProgressSpinner, MatButtonModule, MatButton, AsyncPipe], styles: ["\n\n.resumes-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.resumes-list-wrapper[_ngcontent-%COMP%]   .viewport[_ngcontent-%COMP%] {\n  height: 70vh;\n  width: 100%;\n}\n.resumes-list-wrapper[_ngcontent-%COMP%]   .resume-card-wrapper[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.resumes-list-wrapper[_ngcontent-%COMP%]   .resume-card[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.resumes-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 60px 24px;\n  background: #f8fafc;\n  border: 1px dashed #cbd5f5;\n  border-radius: 16px;\n  color: #1f2937;\n}\n.resumes-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0 0 8px;\n}\n.resumes-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #6b7280;\n}\n/*# sourceMappingURL=resumes-list.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumesList, [{
    type: Component,
    args: [{ selector: "app-resumes-list", imports: [ResumeCard, ScrollingModule, AsyncPipe, MatProgressSpinnerModule, MatButtonModule], template: '@if (status$ | async; as status) {\r\n  @if (status === resumesStatus.Init) {\r\n    <p>Initializing resumes...</p>\r\n  }\r\n  @if (status === resumesStatus.Loading) {\r\n    <mat-progress-spinner diameter="30" mode="indeterminate"></mat-progress-spinner>\r\n  }\r\n  @if (status === resumesStatus.Loaded) {\r\n    @if (!resumes().length) {\r\n      <div class="resumes-empty">\r\n        <h3>No resumes yet</h3>\r\n        <p>Build your first resume in minutes with our templates.</p>\r\n        <button mat-flat-button color="primary" (click)="requestCreate()">\r\n          Create your first resume\r\n        </button>\r\n      </div>\r\n    } @else {\r\n      <div class="resumes-list-wrapper">\r\n        <cdk-virtual-scroll-viewport itemSize="200" class="viewport">\r\n          <div *cdkVirtualFor="let resume of resumes()" class="resume-card-wrapper">\r\n            <app-resume-card [resume]="resume"></app-resume-card>\r\n          </div>\r\n        </cdk-virtual-scroll-viewport>\r\n      </div>\r\n    }\r\n  }\r\n  @if (status === resumesStatus.Error) {\r\n    <p>Error loading resumes.</p>\r\n  }\r\n}\r\n', styles: ["/* src/app/pages/application/resumes/resumes-list/resumes-list.scss */\n.resumes-list-wrapper {\n  display: flex;\n  gap: 16px;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.resumes-list-wrapper .viewport {\n  height: 70vh;\n  width: 100%;\n}\n.resumes-list-wrapper .resume-card-wrapper {\n  height: 200px;\n}\n.resumes-list-wrapper .resume-card {\n  box-sizing: border-box;\n}\n.resumes-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 60px 24px;\n  background: #f8fafc;\n  border: 1px dashed #cbd5f5;\n  border-radius: 16px;\n  color: #1f2937;\n}\n.resumes-empty h3 {\n  font-size: 20px;\n  margin: 0 0 8px;\n}\n.resumes-empty p {\n  margin: 0 0 18px;\n  color: #6b7280;\n}\n/*# sourceMappingURL=resumes-list.css.map */\n"] }]
  }], null, { createRequested: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumesList, { className: "ResumesList", filePath: "src/app/pages/application/resumes/resumes-list/resumes-list.ts", lineNumber: 19 });
})();

// src/app/core/services/storage.service.ts
var StorageService = class _StorageService {
  platformId;
  constructor(platformId) {
    this.platformId = platformId;
  }
  get(key) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    }
    return null;
  }
  set(key, value) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }
  static \u0275fac = function StorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageService)(\u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

// src/app/pages/application/data/application-storage.facade.ts
var ApplicationStorageFacade = class _ApplicationStorageFacade {
  storage = inject(StorageService);
  get(key) {
    return this.storage.get(key);
  }
  set(key, value) {
    this.storage.set(key, value);
  }
  static \u0275fac = function ApplicationStorageFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicationStorageFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicationStorageFacade, factory: _ApplicationStorageFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationStorageFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/application/resumes/resumes.ts
var _c02 = ["templateModal"];
function Resumes_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-resumes-create", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("changeTemplate", function Resumes_Conditional_7_Template_app_resumes_create_changeTemplate_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTemplateModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("templateId", ctx_r2.selectedTemplateId)("plan", \u0275\u0275pipeBind1(1, 2, ctx_r2.plan$) || "free");
  }
}
function Resumes_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-resumes-list", 8);
    \u0275\u0275listener("createRequested", function Resumes_Conditional_8_Template_app_resumes_list_createRequested_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleViewModeChange("create"));
    });
    \u0275\u0275elementEnd();
  }
}
var Resumes = class _Resumes {
  storageFacade;
  templateModal;
  authFacade = inject(AuthFacade);
  tones = ["Modern", "Minimal", "Creative"];
  resumes = [];
  viewMode = "list";
  createSwitchHtml;
  selectedTemplateId;
  plan$ = this.authFacade.user$.pipe(map((user) => user?.plan ?? "free"));
  constructor(storageFacade) {
    this.storageFacade = storageFacade;
    this.createSwitchHtml = `
    <div class="list-create-switch">
      <button
        mat-button
        matButton="text"
        class="switch-btn"
        [class.active]="viewMode === 'list'"
        (click)="viewMode = 'list'"
      >
        <span class="material-symbols-outlined">view_list</span>
        List View
      </button>
      <button
        mat-button
        matButton="text"
        class="switch-btn"
        [class.active]="viewMode === 'create'"
        (click)="viewMode = 'create'"
      >
        <span class="material-symbols-outlined">add_circle</span>
        Create New
    </button>
  </div>`;
  }
  ngOnInit() {
    this.storageFacade.set("resumes", JSON.stringify(this.resumes));
  }
  ngAfterViewInit() {
    if (this.viewMode === "create" && !this.selectedTemplateId) {
      this.openTemplateModal();
    }
  }
  handleViewModeChange(viewMode) {
    if (viewMode !== "create" && viewMode !== "list") {
      return;
    }
    this.viewMode = viewMode;
    if (this.viewMode === "create" && !this.selectedTemplateId) {
      this.openTemplateModal();
    }
  }
  openTemplateModal() {
    this.templateModal?.openModal();
  }
  onTemplateSelected(templateId) {
    this.selectedTemplateId = templateId;
    this.viewMode = "create";
  }
  handleTemplateModalClosed() {
    if (!this.selectedTemplateId) {
      this.viewMode = "list";
    }
  }
  setViewMode() {
    this.viewMode = this.viewMode === "list" ? "create" : "list";
  }
  static \u0275fac = function Resumes_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Resumes)(\u0275\u0275directiveInject(ApplicationStorageFacade));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Resumes, selectors: [["app-resumes"]], viewQuery: function Resumes_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateModal = _t.first);
    }
  }, decls: 9, vars: 6, consts: [["templateModal", ""], [1, "resumes"], [3, "templateSelected", "closed", "plan", "selectedTemplateId"], ["title", "AI Resume Generator"], [3, "change", "active"], [1, "app-section"], [3, "templateId", "plan"], [3, "changeTemplate", "templateId", "plan"], [3, "createRequested"]], template: function Resumes_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-resume-template-modal", 2, 0);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275listener("templateSelected", function Resumes_Template_app_resume_template_modal_templateSelected_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTemplateSelected($event));
      })("closed", function Resumes_Template_app_resume_template_modal_closed_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleTemplateModalClosed());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-dir-name", 3)(5, "app-create-list-resume-switch", 4);
      \u0275\u0275listener("change", function Resumes_Template_app_create_list_resume_switch_change_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleViewModeChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275conditionalCreate(7, Resumes_Conditional_7_Template, 2, 4, "app-resumes-create", 6)(8, Resumes_Conditional_8_Template, 1, 0, "app-resumes-list");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("plan", \u0275\u0275pipeBind1(3, 4, ctx.plan$) || "free")("selectedTemplateId", ctx.selectedTemplateId ?? null);
      \u0275\u0275advance(4);
      \u0275\u0275property("active", ctx.viewMode);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.viewMode === "create" ? 7 : 8);
    }
  }, dependencies: [DirName, CreateListResumeSwitch, ResumesCreate, ResumesList, ResumeTemplateModal, AsyncPipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=resumes.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Resumes, [{
    type: Component,
    args: [{ selector: "app-resumes", imports: [DirName, CreateListResumeSwitch, ResumesCreate, ResumesList, ResumeTemplateModal, AsyncPipe], template: `<div class="resumes">\r
  <app-resume-template-modal\r
    #templateModal\r
    [plan]="(plan$ | async) || 'free'"\r
    [selectedTemplateId]="selectedTemplateId ?? null"\r
    (templateSelected)="onTemplateSelected($event)"\r
    (closed)="handleTemplateModalClosed()"\r
  ></app-resume-template-modal>\r
  <app-dir-name title="AI Resume Generator">\r
    <app-create-list-resume-switch\r
      [active]="viewMode"\r
      (change)="handleViewModeChange($event)"\r
    ></app-create-list-resume-switch>\r
  </app-dir-name>\r
  <div class="app-section">\r
    @if (viewMode === 'create') {\r
      <app-resumes-create\r
        [templateId]="selectedTemplateId"\r
        [plan]="(plan$ | async) || 'free'"\r
        (changeTemplate)="openTemplateModal()"\r
      ></app-resumes-create>\r
    } @else {\r
      <app-resumes-list (createRequested)="handleViewModeChange('create')"></app-resumes-list>\r
    }\r
  </div>\r
</div>\r
\r
\r
`, styles: ["/* src/app/pages/application/resumes/resumes.scss */\nbutton {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=resumes.css.map */\n"] }]
  }], () => [{ type: ApplicationStorageFacade }], { templateModal: [{
    type: ViewChild,
    args: ["templateModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Resumes, { className: "Resumes", filePath: "src/app/pages/application/resumes/resumes.ts", lineNumber: 21 });
})();
export {
  Resumes
};
//# sourceMappingURL=chunk-6VSCT3KV.js.map
