import './polyfills.server.mjs';
import {
  ResumeTemplateModal
} from "./chunk-XXOZZNYE.mjs";
import {
  ResumesCreate
} from "./chunk-2NJHEA7X.mjs";
import "./chunk-NY67JGEI.mjs";
import "./chunk-36R5HHHG.mjs";
import {
  ResumesFacade
} from "./chunk-DQLKYMMT.mjs";
import "./chunk-CKPBQAC6.mjs";
import "./chunk-6M7PM7DW.mjs";
import "./chunk-NFQVK2VL.mjs";
import "./chunk-N5ETFSPS.mjs";
import "./chunk-PCDTW74P.mjs";
import "./chunk-2L7GWOUP.mjs";
import "./chunk-JAPC22RM.mjs";
import "./chunk-ULUIH5QE.mjs";
import "./chunk-NWSYY3OO.mjs";
import "./chunk-DZ6AZZHK.mjs";
import "./chunk-XZHX3JZA.mjs";
import {
  AuthFacade
} from "./chunk-R7FA7WRQ.mjs";
import "./chunk-CAWULYCF.mjs";
import {
  ActivatedRoute
} from "./chunk-WXPEJFQQ.mjs";
import "./chunk-QML36CFQ.mjs";
import {
  AsyncPipe
} from "./chunk-OUT5J3VW.mjs";
import {
  Component,
  ViewChild,
  inject,
  map,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵviewQuery
} from "./chunk-AU5YAMHR.mjs";
import "./chunk-TB3YAHZW.mjs";

// src/app/pages/application/resumes/resumes-edit/resumes-edit.ts
var _c0 = ["templateModal"];
var ResumesEdit = class _ResumesEdit {
  templateModal;
  route = inject(ActivatedRoute);
  resumesFacade = inject(ResumesFacade);
  authFacade = inject(AuthFacade);
  resumeId = this.route.snapshot.paramMap.get("id") ?? "";
  selectedTemplateId;
  plan$ = this.authFacade.user$.pipe(map((user) => user?.plan ?? "free"));
  ngAfterViewInit() {
    if (!this.resumeId) {
      return;
    }
    this.resumesFacade.getResumeById(this.resumeId).pipe(take(1)).subscribe((resume) => {
      this.selectedTemplateId = resume?.templateId;
    });
  }
  openTemplateModal() {
    this.templateModal?.openModal();
  }
  onTemplateSelected(templateId) {
    this.selectedTemplateId = templateId;
  }
  static \u0275fac = function ResumesEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumesEdit)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumesEdit, selectors: [["app-resumes-edit"]], viewQuery: function ResumesEdit_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateModal = _t.first);
    }
  }, decls: 5, vars: 9, consts: [["templateModal", ""], [3, "templateSelected", "plan", "selectedTemplateId"], ["mode", "edit", 3, "changeTemplate", "resumeId", "templateId", "plan"]], template: function ResumesEdit_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-resume-template-modal", 1, 0);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275listener("templateSelected", function ResumesEdit_Template_app_resume_template_modal_templateSelected_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTemplateSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-resumes-create", 2);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275listener("changeTemplate", function ResumesEdit_Template_app_resumes_create_changeTemplate_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openTemplateModal());
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("plan", \u0275\u0275pipeBind1(2, 5, ctx.plan$) || "free")("selectedTemplateId", ctx.selectedTemplateId ?? null);
      \u0275\u0275advance(3);
      \u0275\u0275property("resumeId", ctx.resumeId)("templateId", ctx.selectedTemplateId)("plan", \u0275\u0275pipeBind1(4, 7, ctx.plan$) || "free");
    }
  }, dependencies: [ResumesCreate, ResumeTemplateModal, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=resumes-edit.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumesEdit, [{
    type: Component,
    args: [{ selector: "app-resumes-edit", imports: [ResumesCreate, ResumeTemplateModal, AsyncPipe], template: `<app-resume-template-modal\r
  #templateModal\r
  [plan]="(plan$ | async) || 'free'"\r
  [selectedTemplateId]="selectedTemplateId ?? null"\r
  (templateSelected)="onTemplateSelected($event)"\r
></app-resume-template-modal>\r
\r
<app-resumes-create\r
  mode="edit"\r
  [resumeId]="resumeId"\r
  [templateId]="selectedTemplateId"\r
  [plan]="(plan$ | async) || 'free'"\r
  (changeTemplate)="openTemplateModal()"\r
></app-resumes-create>\r
`, styles: ["/* src/app/pages/application/resumes/resumes-edit/resumes-edit.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=resumes-edit.css.map */\n"] }]
  }], null, { templateModal: [{
    type: ViewChild,
    args: ["templateModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumesEdit, { className: "ResumesEdit", filePath: "src/app/pages/application/resumes/resumes-edit/resumes-edit.ts", lineNumber: 17 });
})();
export {
  ResumesEdit
};
//# sourceMappingURL=chunk-ZBESBUTY.mjs.map
