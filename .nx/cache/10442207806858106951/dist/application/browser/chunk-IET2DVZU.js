import {
  DirName
} from "./chunk-24PMWE2T.js";
import {
  GenerateBtn
} from "./chunk-U4HQ5A2X.js";
import {
  coverLettersAdapter,
  deleteCoverLetter,
  generateCoverLetter,
  loadAllCoverLetters
} from "./chunk-SDTOOSX3.js";
import {
  ResumeService
} from "./chunk-E7Z7URHS.js";
import "./chunk-TIJC3XQI.js";
import "./chunk-U4YT2HSO.js";
import "./chunk-7YWLATDR.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-6MBOXXHD.js";
import "./chunk-SS6OVLD6.js";
import "./chunk-UIUNXKUC.js";
import "./chunk-GTOMM46D.js";
import {
  Store,
  createFeatureSelector,
  createSelector
} from "./chunk-G2253GUZ.js";
import {
  AsyncPipe
} from "./chunk-DNRS4C6J.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  firstValueFrom,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OFJZEGRZ.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/buttons/tone-choose/tone-choose.ts
function ToneChoose_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function ToneChoose_For_4_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTone(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedTone == t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2, " ");
  }
}
var ToneChoose = class _ToneChoose {
  tones;
  toneSelected = new EventEmitter();
  selectedTone = "";
  ngOnInit() {
    this.selectedTone = this.tones[0];
  }
  selectTone(tone) {
    this.selectedTone = tone;
    this.toneSelected.emit(tone);
  }
  static \u0275fac = function ToneChoose_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToneChoose)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToneChoose, selectors: [["app-tone-choose"]], inputs: { tones: "tones" }, outputs: { toneSelected: "toneSelected" }, decls: 5, vars: 0, consts: [[1, "tone-container"], ["type", "button", 1, "tone-btn", 3, "active"], ["type", "button", 1, "tone-btn", 3, "click"]], template: function ToneChoose_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-label");
      \u0275\u0275text(1, "Tone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 0);
      \u0275\u0275repeaterCreate(3, ToneChoose_For_4_Template, 2, 3, "button", 1, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.tones);
    }
  }, dependencies: [MatLabel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToneChoose, [{
    type: Component,
    args: [{ selector: "app-tone-choose", imports: [MatLabel], template: '<mat-label>Tone</mat-label>\r\n<div class="tone-container">\r\n  @for (t of tones; track t) {\r\n  <button class="tone-btn" [class.active]="selectedTone == t" (click)="selectTone(t)" type="button">\r\n    {{ t }}\r\n  </button>\r\n  }\r\n</div>' }]
  }], null, { tones: [{
    type: Input
  }], toneSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToneChoose, { className: "ToneChoose", filePath: "src/app/pages/buttons/tone-choose/tone-choose.ts", lineNumber: 11 });
})();

// src/app/pages/application/cover-letter/data/cover-letter.selectors.ts
var selectCoverLetterFeature = createFeatureSelector("coverLetters");
var { selectAll, selectEntities, selectIds, selectTotal } = coverLettersAdapter.getSelectors();
var selectCoverLettersStatus = createSelector(selectCoverLetterFeature, (state) => state.status);
var selectIsLoading = createSelector(selectCoverLetterFeature, (state) => state.status === "loading");
var selectCoverLettersError = createSelector(selectCoverLetterFeature, (state) => state.error);
var selectCoverLettersFormValue = createSelector(selectCoverLetterFeature, (state) => state.formValue);
var selectCoverLettersGenerating = createSelector(selectCoverLetterFeature, (state) => state.generating);
var selectGeneratedCoverLetterText = createSelector(selectCoverLetterFeature, (state) => state.generatedText ?? "");

// src/app/pages/application/cover-letter/data/cover-letter.facade.ts
var CoverLetterFacade = class _CoverLetterFacade {
  store = inject(Store);
  resumeService = inject(ResumeService);
  generatedText$ = this.store.select(selectGeneratedCoverLetterText);
  generating$ = this.store.select(selectCoverLettersGenerating);
  error$ = this.store.select(selectCoverLettersError);
  constructor() {
  }
  loadCoverLetters() {
    this.store.dispatch(loadAllCoverLetters());
  }
  deleteCoverLetter(id) {
    this.store.dispatch(deleteCoverLetter({ id }));
  }
  generateCoverLetter(resumeText, jobDescription, companyName, position, tone) {
    this.store.dispatch(generateCoverLetter({ resumeText, jobDescription, companyName, position, tone }));
  }
  async getLatestResumeText() {
    const resumes = await firstValueFrom(this.resumeService.getResumesForUser());
    const latestResume = resumes?.[0];
    if (!latestResume) {
      return "";
    }
    return this.formatResumeAsText(latestResume);
  }
  formatResumeAsText(resume) {
    const lines = [];
    if (resume.personalInfo?.fullName || resume.personalInfo?.jobTitle) {
      lines.push(`${resume.personalInfo?.fullName ?? ""} ${resume.personalInfo?.jobTitle ? `- ${resume.personalInfo.jobTitle}` : ""}`.trim());
    }
    if (resume.summary) {
      lines.push(`Summary: ${resume.summary}`);
    }
    if (resume.skills?.length) {
      lines.push(`Skills: ${resume.skills.join(", ")}`);
    }
    if (resume.experience?.length) {
      lines.push("Experience:");
      for (const item of resume.experience) {
        const header = [item.role, item.company].filter(Boolean).join(" at ");
        if (header) {
          lines.push(`- ${header}`);
        }
        if (item.description?.length) {
          for (const bullet of item.description) {
            lines.push(`  - ${bullet}`);
          }
        }
      }
    }
    if (resume.education?.length) {
      lines.push("Education:");
      for (const item of resume.education) {
        const header = [item.degree, item.school].filter(Boolean).join(", ");
        if (header) {
          lines.push(`- ${header}`);
        }
      }
    }
    if (resume.projects?.length) {
      lines.push("Projects:");
      for (const item of resume.projects) {
        const text = [item.name, item.description].filter(Boolean).join(" - ");
        if (text) {
          lines.push(`- ${text}`);
        }
      }
    }
    if (resume.certifications?.length) {
      lines.push(`Certifications: ${resume.certifications.join(", ")}`);
    }
    return lines.join("\n").trim();
  }
  static \u0275fac = function CoverLetterFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoverLetterFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CoverLetterFacade, factory: _CoverLetterFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoverLetterFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pages/application/cover-letter/cover-letter.ts
function CoverLetter_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function CoverLetter_Conditional_26_Template_button_click_0_listener() {
      const generatedText_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyText(generatedText_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.copied ? "Copied" : "Copy", " ");
  }
}
function CoverLetter_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Generating your cover letter...");
    \u0275\u0275elementEnd();
  }
}
function CoverLetter_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function CoverLetter_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Your generated cover letter will appear here.");
    \u0275\u0275elementEnd();
  }
}
function CoverLetter_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatError(ctx));
  }
}
var CoverLetter = class _CoverLetter {
  tones = ["Professional", "Confident", "Friendly"];
  selectedTone = this.tones[0];
  coverLetterForm;
  coverLetterFacade = inject(CoverLetterFacade);
  generatedText$ = this.coverLetterFacade.generatedText$;
  generating$ = this.coverLetterFacade.generating$;
  error$ = this.coverLetterFacade.error$;
  copied = false;
  constructor() {
    this.coverLetterForm = new FormGroup({
      companyName: new FormControl("", Validators.required),
      position: new FormControl("", Validators.required),
      jobDescription: new FormControl("", Validators.required),
      tone: new FormControl("", Validators.required)
    });
  }
  ngOnInit() {
    this.coverLetterForm.controls["tone"].setValue(this.selectedTone);
  }
  selectTone(tone) {
    this.selectedTone = tone;
    this.coverLetterForm.controls["tone"].setValue(tone);
  }
  async onSubmit() {
    if (this.coverLetterForm.valid) {
      const formData = this.coverLetterForm.value;
      const resumeText = await this.coverLetterFacade.getLatestResumeText();
      this.coverLetterFacade.generateCoverLetter(resumeText, formData.jobDescription, formData.companyName, formData.position, formData.tone);
    } else {
    }
  }
  async copyText(text) {
    if (!text?.trim()) {
      return;
    }
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      this.copied = true;
      setTimeout(() => this.copied = false, 1800);
      return;
    }
    this.copied = false;
  }
  formatError(error) {
    if (typeof error === "string") {
      return error;
    }
    if (error && typeof error === "object" && "message" in error) {
      return String(error.message);
    }
    return "Failed to generate cover letter. Please try again.";
  }
  static \u0275fac = function CoverLetter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoverLetter)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoverLetter, selectors: [["app-cover-letter"]], decls: 35, vars: 14, consts: [[1, "cover-letter", "container"], ["title", "AI Cover Letter Generator"], [1, "wrapper"], [1, "app-section"], [1, "section-title"], [1, "details-form", 3, "formGroup"], [1, "form-field", "company-name-field"], ["matInput", "", "type", "text", "placeholder", "Enter your company name", "formControlName", "companyName", 1, "company-name"], [1, "form-field", "position-field"], ["matInput", "", "type", "text", "placeholder", "Enter the position you are applying for", "formControlName", "position", 1, "position"], [1, "form-field", "job-description-field"], ["matInput", "", "placeholder", "Enter the job description", "formControlName", "jobDescription", 1, "job-description"], [1, "form-field", "tone-field"], [3, "toneSelected", "tones"], [3, "click", "submitForm"], [1, "app-section", "output-section"], [1, "output-head"], ["type", "button", 1, "copy-btn"], [1, "output-state"], [1, "output-content"], [1, "output-error"], ["type", "button", 1, "copy-btn", 3, "click"]], template: function CoverLetter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-dir-name", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5, "Job Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 5)(7, "div", 6)(8, "mat-label");
      \u0275\u0275text(9, "Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "mat-label");
      \u0275\u0275text(13, "Position");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "mat-label");
      \u0275\u0275text(17, "Job Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "textarea", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12)(20, "app-tone-choose", 13);
      \u0275\u0275listener("toneSelected", function CoverLetter_Template_app_tone_choose_toneSelected_20_listener($event) {
        return ctx.selectTone($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "app-generate-btn", 14);
      \u0275\u0275listener("click", function CoverLetter_Template_app_generate_btn_click_21_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "h2", 4);
      \u0275\u0275text(25, "Generated Cover Letter");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(26, CoverLetter_Conditional_26_Template, 2, 1, "button", 17);
      \u0275\u0275pipe(27, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(28, CoverLetter_Conditional_28_Template, 2, 0, "p", 18);
      \u0275\u0275pipe(29, "async");
      \u0275\u0275pipe(30, "async");
      \u0275\u0275conditionalBranchCreate(31, CoverLetter_Conditional_31_Template, 2, 1, "pre", 19)(32, CoverLetter_Conditional_32_Template, 2, 0, "p", 18);
      \u0275\u0275conditionalCreate(33, CoverLetter_Conditional_33_Template, 2, 1, "p", 20);
      \u0275\u0275pipe(34, "async");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.coverLetterForm);
      \u0275\u0275advance(14);
      \u0275\u0275property("tones", ctx.tones);
      \u0275\u0275advance();
      \u0275\u0275property("submitForm", ctx.coverLetterForm);
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_3_0 = \u0275\u0275pipeBind1(27, 6, ctx.generatedText$)) ? 26 : -1, tmp_3_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(29, 8, ctx.generating$) ? 28 : (tmp_4_0 = \u0275\u0275pipeBind1(30, 10, ctx.generatedText$)) ? 31 : 32, tmp_4_0);
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_5_0 = \u0275\u0275pipeBind1(34, 12, ctx.error$)) ? 33 : -1, tmp_5_0);
    }
  }, dependencies: [MatLabel, DirName, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, GenerateBtn, ToneChoose, AsyncPipe], styles: ["\n\n.cover-letter[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cover-letter[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 30px;\n  width: 50%;\n  margin: 0 auto;\n  margin-top: 30px;\n  background-color: var(--surface-card);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.cover-letter[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .details-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.cover-letter[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .details-form[_ngcontent-%COMP%]   .job-description-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 120px;\n  resize: vertical;\n}\n.cover-letter[_ngcontent-%COMP%]   .output-section[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 20px auto 0;\n}\n.cover-letter[_ngcontent-%COMP%]   .output-section[_ngcontent-%COMP%]   .output-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.cover-letter[_ngcontent-%COMP%]   .output-section[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: #fff;\n  color: var(--text);\n  border-radius: 8px;\n  padding: 8px 14px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n}\n.cover-letter[_ngcontent-%COMP%]   .output-section[_ngcontent-%COMP%]   .output-content[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  background: #f8fafc;\n  padding: 16px;\n  white-space: pre-wrap;\n  font-size: 15px;\n  line-height: 1.6;\n  color: var(--text);\n  max-height: 520px;\n  overflow: auto;\n  margin: 0;\n}\n.cover-letter[_ngcontent-%COMP%]   .output-section[_ngcontent-%COMP%]   .output-state[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 15px;\n  margin: 0;\n}\n.cover-letter[_ngcontent-%COMP%]   .output-section[_ngcontent-%COMP%]   .output-error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-size: 14px;\n  margin: 0;\n}\n@media (max-width: 1400px) {\n  .cover-letter[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .cover-letter[_ngcontent-%COMP%]   .output-section[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media (max-width: 1024px) {\n  .cover-letter[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%] {\n    width: 90%;\n    padding: 20px;\n  }\n  .cover-letter[_ngcontent-%COMP%]   .output-section[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-top: 16px;\n  }\n}\n@media (max-width: 768px) {\n  .cover-letter[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cover-letter[_ngcontent-%COMP%]   .output-section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=cover-letter.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoverLetter, [{
    type: Component,
    args: [{ selector: "app-cover-letter", imports: [AsyncPipe, MatLabel, DirName, ReactiveFormsModule, GenerateBtn, ToneChoose], template: `<div class="cover-letter container">\r
  <app-dir-name title="AI Cover Letter Generator"></app-dir-name>\r
  <div class="wrapper">\r
    <div class="app-section">\r
      <h2 class="section-title">Job Details</h2>\r
      <form class="details-form" [formGroup]="coverLetterForm">\r
        <div class="form-field company-name-field">\r
          <mat-label>Company Name</mat-label>\r
          <input\r
            matInput\r
            type="text"\r
            placeholder="Enter your company name"\r
            class="company-name"\r
            formControlName="companyName"\r
          />\r
        </div>\r
\r
        <div class="form-field position-field">\r
          <mat-label>Position</mat-label>\r
          <input\r
            matInput\r
            type="text"\r
            placeholder="Enter the position you are applying for"\r
            class="position"\r
            formControlName="position"\r
          />\r
        </div>\r
\r
        <div class="form-field job-description-field">\r
          <mat-label>Job Description</mat-label>\r
          <textarea\r
            matInput\r
            placeholder="Enter the job description"\r
            class="job-description"\r
            formControlName="jobDescription"\r
          ></textarea>\r
        </div>\r
        <div class="form-field tone-field">\r
          <app-tone-choose [tones]="tones" (toneSelected)="selectTone($event)"></app-tone-choose>\r
        </div>\r
        <app-generate-btn [submitForm]="coverLetterForm" (click)="onSubmit()"></app-generate-btn>\r
      </form>\r
    </div>\r
\r
    <div class="app-section output-section">\r
      <div class="output-head">\r
        <h2 class="section-title">Generated Cover Letter</h2>\r
        @if (generatedText$ | async; as generatedText) {\r
          <button type="button" class="copy-btn" (click)="copyText(generatedText)">\r
            {{ copied ? 'Copied' : 'Copy' }}\r
          </button>\r
        }\r
      </div>\r
\r
      @if (generating$ | async) {\r
        <p class="output-state">Generating your cover letter...</p>\r
      } @else if (generatedText$ | async; as generatedText) {\r
        <pre class="output-content">{{ generatedText }}</pre>\r
      } @else {\r
        <p class="output-state">Your generated cover letter will appear here.</p>\r
      }\r
\r
      @if (error$ | async; as error) {\r
        <p class="output-error">{{ formatError(error) }}</p>\r
      }\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/application/cover-letter/cover-letter.scss */\n.cover-letter {\n  width: 100%;\n}\n.cover-letter .app-section {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 30px;\n  width: 50%;\n  margin: 0 auto;\n  margin-top: 30px;\n  background-color: var(--surface-card);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.cover-letter .app-section .details-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.cover-letter .app-section .details-form .job-description-field textarea {\n  min-height: 120px;\n  resize: vertical;\n}\n.cover-letter .output-section {\n  width: 50%;\n  margin: 20px auto 0;\n}\n.cover-letter .output-section .output-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.cover-letter .output-section .copy-btn {\n  border: 1px solid var(--border);\n  background: #fff;\n  color: var(--text);\n  border-radius: 8px;\n  padding: 8px 14px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n}\n.cover-letter .output-section .output-content {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  background: #f8fafc;\n  padding: 16px;\n  white-space: pre-wrap;\n  font-size: 15px;\n  line-height: 1.6;\n  color: var(--text);\n  max-height: 520px;\n  overflow: auto;\n  margin: 0;\n}\n.cover-letter .output-section .output-state {\n  color: var(--text-muted);\n  font-size: 15px;\n  margin: 0;\n}\n.cover-letter .output-section .output-error {\n  color: #b91c1c;\n  font-size: 14px;\n  margin: 0;\n}\n@media (max-width: 1400px) {\n  .cover-letter .app-section {\n    width: 90%;\n  }\n  .cover-letter .output-section {\n    width: 90%;\n  }\n}\n@media (max-width: 1024px) {\n  .cover-letter .app-section {\n    width: 90%;\n    padding: 20px;\n  }\n  .cover-letter .output-section {\n    width: 90%;\n    margin-top: 16px;\n  }\n}\n@media (max-width: 768px) {\n  .cover-letter .app-section {\n    width: 100%;\n  }\n  .cover-letter .output-section {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=cover-letter.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoverLetter, { className: "CoverLetter", filePath: "src/app/pages/application/cover-letter/cover-letter.ts", lineNumber: 17 });
})();
export {
  CoverLetter
};
//# sourceMappingURL=chunk-IET2DVZU.js.map
