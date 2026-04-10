import './polyfills.server.mjs';
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-NY67JGEI.mjs";
import {
  ResumesFacade
} from "./chunk-DQLKYMMT.mjs";
import "./chunk-CKPBQAC6.mjs";
import "./chunk-6M7PM7DW.mjs";
import "./chunk-NFQVK2VL.mjs";
import "./chunk-N5ETFSPS.mjs";
import {
  MatInput,
  MatInputModule
} from "./chunk-PCDTW74P.mjs";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-2L7GWOUP.mjs";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-JAPC22RM.mjs";
import {
  MatIcon,
  MatIconModule
} from "./chunk-ULUIH5QE.mjs";
import "./chunk-NWSYY3OO.mjs";
import "./chunk-DZ6AZZHK.mjs";
import "./chunk-XZHX3JZA.mjs";
import {
  takeUntilDestroyed
} from "./chunk-CAWULYCF.mjs";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-WXPEJFQQ.mjs";
import "./chunk-QML36CFQ.mjs";
import {
  AsyncPipe
} from "./chunk-OUT5J3VW.mjs";
import {
  Component,
  DestroyRef,
  combineLatest,
  filter,
  inject,
  map,
  setClassMetadata,
  signal,
  skip,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-AU5YAMHR.mjs";
import "./chunk-TB3YAHZW.mjs";

// src/app/pages/application/resumes/resumes-tailor/resumes-tailor.ts
function ResumesTailor_Conditional_11_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function ResumesTailor_Conditional_11_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Tailoring applied and saved to this resume.");
    \u0275\u0275elementEnd();
  }
}
function ResumesTailor_Conditional_11_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
function ResumesTailor_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div")(2, "span", 6);
    \u0275\u0275text(3, "Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "span", 6);
    \u0275\u0275text(8, "Current role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "form", 8);
    \u0275\u0275listener("ngSubmit", function ResumesTailor_Conditional_11_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyTailoring());
    });
    \u0275\u0275elementStart(12, "mat-form-field", 9)(13, "mat-label");
    \u0275\u0275text(14, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-form-field", 9)(17, "mat-label");
    \u0275\u0275text(18, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 9)(21, "mat-label");
    \u0275\u0275text(22, "Job Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, ResumesTailor_Conditional_11_Conditional_24_Template, 2, 1, "div", 13);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275conditionalCreate(26, ResumesTailor_Conditional_11_Conditional_26_Template, 2, 0, "div", 14);
    \u0275\u0275conditionalCreate(27, ResumesTailor_Conditional_11_Conditional_27_Template, 1, 0, "mat-progress-bar", 4);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementStart(29, "div", 15)(30, "button", 16);
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 17);
    \u0275\u0275pipe(33, "async");
    \u0275\u0275text(34, " Apply Tailoring ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const currentResume_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentResume_r3.personalInfo.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentResume_r3.personalInfo.jobTitle || "Not set");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.tailorForm);
    \u0275\u0275advance(13);
    \u0275\u0275conditional((tmp_5_0 = \u0275\u0275pipeBind1(25, 7, ctx_r1.tailorError$)) ? 24 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.applySuccess() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(28, 9, ctx_r1.submitting$) ? 27 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(33, 11, ctx_r1.submitting$));
  }
}
function ResumesTailor_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
var ResumesTailor = class _ResumesTailor {
  route = inject(ActivatedRoute);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  resumesFacade = inject(ResumesFacade);
  saving$ = this.resumesFacade.saving$;
  tailoring$ = this.resumesFacade.tailoring$;
  tailorError$ = this.resumesFacade.tailorError$;
  submitting$ = combineLatest([this.saving$, this.tailoring$]).pipe(map(([saving, tailoring]) => saving || tailoring));
  resume = signal(null, ...ngDevMode ? [{ debugName: "resume" }] : []);
  applySuccess = signal(false, ...ngDevMode ? [{ debugName: "applySuccess" }] : []);
  tailorForm = new FormGroup({
    companyName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    position: new FormControl("", [Validators.required, Validators.minLength(2)]),
    jobDescription: new FormControl("", [Validators.required, Validators.minLength(30)])
  });
  constructor() {
    const resumeId = this.route.snapshot.paramMap.get("id");
    if (!resumeId) {
      this.router.navigate(["/application/resumes"]);
      return;
    }
    this.resumesFacade.getResumeById(resumeId).pipe(take(1)).subscribe((resume) => {
      if (!resume) {
        this.router.navigate(["/application/resumes"]);
        return;
      }
      this.resume.set(resume);
    });
    this.resumesFacade.saveSucceeded$.pipe(skip(1), filter((saved) => saved), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.applySuccess.set(true);
    });
  }
  applyTailoring() {
    if (this.tailorForm.invalid) {
      this.tailorForm.markAllAsTouched();
      return;
    }
    const currentResume = this.resume();
    if (!currentResume?.id) {
      return;
    }
    const formValue = this.tailorForm.getRawValue();
    this.applySuccess.set(false);
    this.resumesFacade.tailorResumeData(currentResume.id, currentResume, formValue.companyName ?? "", formValue.position ?? "", formValue.jobDescription ?? "");
  }
  static \u0275fac = function ResumesTailor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumesTailor)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumesTailor, selectors: [["app-resumes-tailor"]], decls: 13, vars: 1, consts: [[1, "resumes-tailor-wrapper"], [1, "tailor-card"], [1, "tailor-header"], ["mat-icon-button", "", "type", "button", "routerLink", "/application/resumes", "aria-label", "Back to resumes"], ["mode", "indeterminate"], [1, "resume-context"], [1, "label"], [1, "value"], [1, "tailor-form", 3, "ngSubmit", "formGroup"], [1, "full-width"], ["matInput", "", "formControlName", "companyName", "placeholder", "Acme Inc."], ["matInput", "", "formControlName", "position", "placeholder", "Senior Frontend Engineer"], ["matInput", "", "rows", "8", "formControlName", "jobDescription", "placeholder", "Paste the full job description"], [1, "feedback", "error"], [1, "feedback", "success"], [1, "actions"], ["type", "button", "mat-stroked-button", "", "routerLink", "/application/resumes"], ["type", "submit", "mat-flat-button", "", "color", "primary", 3, "disabled"]], template: function ResumesTailor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3)(4, "mat-icon");
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "h1");
      \u0275\u0275text(8, "AI Tailor Resume");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Adjust summary, experience bullets, and skills for a specific job.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, ResumesTailor_Conditional_11_Template, 35, 13)(12, ResumesTailor_Conditional_12_Template, 1, 0, "mat-progress-bar", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(11);
      \u0275\u0275conditional((tmp_0_0 = ctx.resume()) ? 11 : 12, tmp_0_0);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatIconModule,
    MatIcon,
    MatInputModule,
    MatInput,
    MatProgressBarModule,
    MatProgressBar,
    AsyncPipe
  ], styles: ["\n\n.resumes-tailor-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n  background: #f4f6fb;\n}\n.tailor-card[_ngcontent-%COMP%] {\n  width: min(920px, 100%);\n  background: #ffffff;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  padding: 24px;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);\n}\n.tailor-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 18px;\n}\n.tailor-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  color: #0f172a;\n}\n.tailor-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #64748b;\n}\n.resume-context[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 18px;\n  padding: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n}\n.resume-context[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #64748b;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.resume-context[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n  font-weight: 600;\n}\n.tailor-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.tailor-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.feedback[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.feedback.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fee2e2;\n  border: 1px solid #fecaca;\n}\n.feedback.success[_ngcontent-%COMP%] {\n  color: #166534;\n  background: #dcfce7;\n  border: 1px solid #86efac;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n@media (max-width: 768px) {\n  .resumes-tailor-wrapper[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .tailor-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .resume-context[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=resumes-tailor.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumesTailor, [{
    type: Component,
    args: [{ selector: "app-resumes-tailor", imports: [
      AsyncPipe,
      ReactiveFormsModule,
      RouterLink,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressBarModule
    ], template: `<div class="resumes-tailor-wrapper">\r
  <div class="tailor-card">\r
    <div class="tailor-header">\r
      <button mat-icon-button type="button" routerLink="/application/resumes" aria-label="Back to resumes">\r
        <mat-icon>arrow_back</mat-icon>\r
      </button>\r
      <div>\r
        <h1>AI Tailor Resume</h1>\r
        <p>Adjust summary, experience bullets, and skills for a specific job.</p>\r
      </div>\r
    </div>\r
\r
    @if (resume(); as currentResume) {\r
      <div class="resume-context">\r
        <div>\r
          <span class="label">Resume</span>\r
          <span class="value">{{ currentResume.personalInfo.fullName }}</span>\r
        </div>\r
        <div>\r
          <span class="label">Current role</span>\r
          <span class="value">{{ currentResume.personalInfo.jobTitle || 'Not set' }}</span>\r
        </div>\r
      </div>\r
\r
      <form [formGroup]="tailorForm" (ngSubmit)="applyTailoring()" class="tailor-form">\r
        <mat-form-field   class="full-width">\r
          <mat-label>Company Name</mat-label>\r
          <input matInput formControlName="companyName" placeholder="Acme Inc." />\r
        </mat-form-field>\r
\r
        <mat-form-field   class="full-width">\r
          <mat-label>Position</mat-label>\r
          <input matInput formControlName="position" placeholder="Senior Frontend Engineer" />\r
        </mat-form-field>\r
\r
        <mat-form-field   class="full-width">\r
          <mat-label>Job Description</mat-label>\r
          <textarea\r
            matInput\r
            rows="8"\r
            formControlName="jobDescription"\r
            placeholder="Paste the full job description"\r
          ></textarea>\r
        </mat-form-field>\r
\r
        @if (tailorError$ | async; as error) {\r
          <div class="feedback error">{{ error }}</div>\r
        }\r
\r
        @if (applySuccess()) {\r
          <div class="feedback success">Tailoring applied and saved to this resume.</div>\r
        }\r
\r
        @if (submitting$ | async) {\r
          <mat-progress-bar mode="indeterminate"></mat-progress-bar>\r
        }\r
\r
        <div class="actions">\r
          <button type="button" mat-stroked-button routerLink="/application/resumes">Cancel</button>\r
          <button type="submit" mat-flat-button color="primary" [disabled]="submitting$ | async">\r
            Apply Tailoring\r
          </button>\r
        </div>\r
      </form>\r
    } @else {\r
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/application/resumes/resumes-tailor/resumes-tailor.scss */\n.resumes-tailor-wrapper {\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n  background: #f4f6fb;\n}\n.tailor-card {\n  width: min(920px, 100%);\n  background: #ffffff;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  padding: 24px;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);\n}\n.tailor-header {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 18px;\n}\n.tailor-header h1 {\n  margin: 0;\n  font-size: 24px;\n  color: #0f172a;\n}\n.tailor-header p {\n  margin: 6px 0 0;\n  color: #64748b;\n}\n.resume-context {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 18px;\n  padding: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n}\n.resume-context .label {\n  display: block;\n  font-size: 12px;\n  color: #64748b;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.resume-context .value {\n  font-size: 14px;\n  color: #0f172a;\n  font-weight: 600;\n}\n.tailor-form {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.tailor-form .full-width {\n  width: 100%;\n}\n.feedback {\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.feedback.error {\n  color: #b91c1c;\n  background: #fee2e2;\n  border: 1px solid #fecaca;\n}\n.feedback.success {\n  color: #166534;\n  background: #dcfce7;\n  border: 1px solid #86efac;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n@media (max-width: 768px) {\n  .resumes-tailor-wrapper {\n    padding: 14px;\n  }\n  .tailor-card {\n    padding: 16px;\n  }\n  .resume-context {\n    grid-template-columns: 1fr;\n  }\n  .actions {\n    flex-direction: column-reverse;\n  }\n  .actions button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=resumes-tailor.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumesTailor, { className: "ResumesTailor", filePath: "src/app/pages/application/resumes/resumes-tailor/resumes-tailor.ts", lineNumber: 30 });
})();
export {
  ResumesTailor
};
//# sourceMappingURL=chunk-4I3OPEZO.mjs.map
