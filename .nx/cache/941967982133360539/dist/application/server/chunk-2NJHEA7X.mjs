import './polyfills.server.mjs';
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-NY67JGEI.mjs";
import {
  GenerateBtn
} from "./chunk-36R5HHHG.mjs";
import {
  ResumesFacade
} from "./chunk-DQLKYMMT.mjs";
import {
  html2canvas_esm_default,
  init_html2canvas_esm,
  require_jspdf_node_min
} from "./chunk-6M7PM7DW.mjs";
import {
  MatInput,
  MatInputModule
} from "./chunk-PCDTW74P.mjs";
import {
  MatButton
} from "./chunk-2L7GWOUP.mjs";
import {
  DefaultValueAccessor,
  FormArray,
  FormArrayName,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  MatFormField,
  MatFormFieldModule,
  MatHint,
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
import {
  takeUntilDestroyed
} from "./chunk-CAWULYCF.mjs";
import {
  Router
} from "./chunk-WXPEJFQQ.mjs";
import {
  AsyncPipe,
  CommonModule,
  Location
} from "./chunk-OUT5J3VW.mjs";
import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  Output,
  filter,
  inject,
  map,
  setClassMetadata,
  skip,
  startWith,
  take,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-AU5YAMHR.mjs";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-TB3YAHZW.mjs";

// src/app/pages/application/resumes/resume-preview/resume-preview.ts
var _c0 = () => [];
function ResumePreview_Case_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.email);
  }
}
function ResumePreview_Case_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.phone);
  }
}
function ResumePreview_Case_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Summary");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.resume == null ? null : ctx_r0.resume.summary);
  }
}
function ResumePreview_Case_1_Conditional_10_For_5_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const point_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(point_r2);
  }
}
function ResumePreview_Case_1_Conditional_10_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, ResumePreview_Case_1_Conditional_10_For_5_Conditional_5_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const exp_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(exp_r3.description);
  }
}
function ResumePreview_Case_1_Conditional_10_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, ResumePreview_Case_1_Conditional_10_For_5_Conditional_5_Template, 3, 0, "ul");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const exp_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r3.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", exp_r3.company, " \xB7 ", exp_r3.startDate, " \u2014 ", exp_r3.endDate);
    \u0275\u0275advance();
    \u0275\u0275conditional((exp_r3.description == null ? null : exp_r3.description.length) ? 5 : -1);
  }
}
function ResumePreview_Case_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Experience");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, ResumePreview_Case_1_Conditional_10_For_5_Template, 6, 5, "div", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx_r0.resume == null ? null : ctx_r0.resume.experience) ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function ResumePreview_Case_1_Conditional_11_For_5_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const point_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(point_r4);
  }
}
function ResumePreview_Case_1_Conditional_11_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, ResumePreview_Case_1_Conditional_11_For_5_Conditional_5_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const edu_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(edu_r5.description);
  }
}
function ResumePreview_Case_1_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, ResumePreview_Case_1_Conditional_11_For_5_Conditional_5_Template, 3, 0, "ul");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const edu_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r5.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", edu_r5.school, " \xB7 ", edu_r5.startDate, " \u2014 ", edu_r5.endDate);
    \u0275\u0275advance();
    \u0275\u0275conditional((edu_r5.description == null ? null : edu_r5.description.length) ? 5 : -1);
  }
}
function ResumePreview_Case_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Education");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, ResumePreview_Case_1_Conditional_11_For_5_Template, 6, 5, "div", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx_r0.resume == null ? null : ctx_r0.resume.education) ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function ResumePreview_Case_1_Conditional_12_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r6);
  }
}
function ResumePreview_Case_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Skills");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 14);
    \u0275\u0275repeaterCreate(4, ResumePreview_Case_1_Conditional_12_For_5_Template, 2, 1, "span", 15, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx_r0.resume == null ? null : ctx_r0.resume.skills) ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function ResumePreview_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 7);
    \u0275\u0275conditionalCreate(7, ResumePreview_Case_1_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(8, ResumePreview_Case_1_Conditional_8_Template, 2, 1, "span");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(9, ResumePreview_Case_1_Conditional_9_Template, 5, 1, "div", 8);
    \u0275\u0275conditionalCreate(10, ResumePreview_Case_1_Conditional_10_Template, 6, 1, "div", 8);
    \u0275\u0275conditionalCreate(11, ResumePreview_Case_1_Conditional_11_Template, 6, 1, "div", 8);
    \u0275\u0275conditionalCreate(12, ResumePreview_Case_1_Conditional_12_Template, 6, 1, "div", 8);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.resume == null ? null : ctx_r0.resume.personalInfo == null ? null : ctx_r0.resume.personalInfo.fullName) || "Your Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.resume == null ? null : ctx_r0.resume.personalInfo == null ? null : ctx_r0.resume.personalInfo.jobTitle) || "Job Title");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.email) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.phone) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.summary) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.experience == null ? null : ctx_r0.resume.experience.length) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.education == null ? null : ctx_r0.resume.education.length) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.skills == null ? null : ctx_r0.resume.skills.length) ? 12 : -1);
  }
}
function ResumePreview_Case_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.email);
  }
}
function ResumePreview_Case_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.phone);
  }
}
function ResumePreview_Case_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Profile");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.resume == null ? null : ctx_r0.resume.summary);
  }
}
function ResumePreview_Case_2_Conditional_13_For_5_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const point_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(point_r7);
  }
}
function ResumePreview_Case_2_Conditional_13_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, ResumePreview_Case_2_Conditional_13_For_5_Conditional_5_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const exp_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(exp_r8.description);
  }
}
function ResumePreview_Case_2_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, ResumePreview_Case_2_Conditional_13_For_5_Conditional_5_Template, 3, 0, "ul");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const exp_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r8.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", exp_r8.company, " \xB7 ", exp_r8.startDate, " \u2014 ", exp_r8.endDate);
    \u0275\u0275advance();
    \u0275\u0275conditional((exp_r8.description == null ? null : exp_r8.description.length) ? 5 : -1);
  }
}
function ResumePreview_Case_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Experience");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, ResumePreview_Case_2_Conditional_13_For_5_Template, 6, 5, "div", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx_r0.resume == null ? null : ctx_r0.resume.experience) ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function ResumePreview_Case_2_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r9);
  }
}
function ResumePreview_Case_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Skills");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 14);
    \u0275\u0275repeaterCreate(4, ResumePreview_Case_2_Conditional_15_For_5_Template, 2, 1, "span", 15, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx_r0.resume == null ? null : ctx_r0.resume.skills) ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function ResumePreview_Case_2_Conditional_16_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const edu_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r10.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", edu_r10.school, " \xB7 ", edu_r10.startDate, " \u2014 ", edu_r10.endDate);
  }
}
function ResumePreview_Case_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Education");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, ResumePreview_Case_2_Conditional_16_For_5_Template, 5, 4, "div", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx_r0.resume == null ? null : ctx_r0.resume.education) ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function ResumePreview_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 4)(2, "div")(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 7);
    \u0275\u0275conditionalCreate(8, ResumePreview_Case_2_Conditional_8_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(9, ResumePreview_Case_2_Conditional_9_Template, 2, 1, "span");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 16)(11, "div", 17);
    \u0275\u0275conditionalCreate(12, ResumePreview_Case_2_Conditional_12_Template, 5, 1, "div", 8);
    \u0275\u0275conditionalCreate(13, ResumePreview_Case_2_Conditional_13_Template, 6, 1, "div", 8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div", 18);
    \u0275\u0275conditionalCreate(15, ResumePreview_Case_2_Conditional_15_Template, 6, 1, "div", 8);
    \u0275\u0275conditionalCreate(16, ResumePreview_Case_2_Conditional_16_Template, 6, 1, "div", 8);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r0.resume == null ? null : ctx_r0.resume.personalInfo == null ? null : ctx_r0.resume.personalInfo.fullName) || "Your Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.resume == null ? null : ctx_r0.resume.personalInfo == null ? null : ctx_r0.resume.personalInfo.jobTitle) || "Job Title");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.email) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.phone) ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.summary) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.experience == null ? null : ctx_r0.resume.experience.length) ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.skills == null ? null : ctx_r0.resume.skills.length) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.education == null ? null : ctx_r0.resume.education.length) ? 16 : -1);
  }
}
function ResumePreview_Case_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.email);
  }
}
function ResumePreview_Case_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.phone);
  }
}
function ResumePreview_Case_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.resume == null ? null : ctx_r0.resume.summary);
  }
}
function ResumePreview_Case_3_Conditional_10_For_5_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const point_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(point_r11);
  }
}
function ResumePreview_Case_3_Conditional_10_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, ResumePreview_Case_3_Conditional_10_For_5_Conditional_5_For_2_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const exp_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(exp_r12.description);
  }
}
function ResumePreview_Case_3_Conditional_10_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, ResumePreview_Case_3_Conditional_10_For_5_Conditional_5_Template, 3, 0, "div", 19);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const exp_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", exp_r12.role, " \xB7 ", exp_r12.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", exp_r12.startDate, " \u2014 ", exp_r12.endDate);
    \u0275\u0275advance();
    \u0275\u0275conditional((exp_r12.description == null ? null : exp_r12.description.length) ? 5 : -1);
  }
}
function ResumePreview_Case_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Experience");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, ResumePreview_Case_3_Conditional_10_For_5_Template, 6, 5, "div", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx_r0.resume == null ? null : ctx_r0.resume.experience) ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function ResumePreview_Case_3_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const edu_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", edu_r13.degree, " \xB7 ", edu_r13.school);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", edu_r13.startDate, " \u2014 ", edu_r13.endDate);
  }
}
function ResumePreview_Case_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Education");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, ResumePreview_Case_3_Conditional_11_For_5_Template, 5, 4, "div", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx_r0.resume == null ? null : ctx_r0.resume.education) ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function ResumePreview_Case_3_Conditional_12_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const skill_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r14);
  }
}
function ResumePreview_Case_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "Skills");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 14);
    \u0275\u0275repeaterCreate(4, ResumePreview_Case_3_Conditional_12_For_5_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx_r0.resume == null ? null : ctx_r0.resume.skills) ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function ResumePreview_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 7);
    \u0275\u0275conditionalCreate(7, ResumePreview_Case_3_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(8, ResumePreview_Case_3_Conditional_8_Template, 2, 1, "span");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(9, ResumePreview_Case_3_Conditional_9_Template, 3, 1, "div", 8);
    \u0275\u0275conditionalCreate(10, ResumePreview_Case_3_Conditional_10_Template, 6, 1, "div", 8);
    \u0275\u0275conditionalCreate(11, ResumePreview_Case_3_Conditional_11_Template, 6, 1, "div", 8);
    \u0275\u0275conditionalCreate(12, ResumePreview_Case_3_Conditional_12_Template, 6, 1, "div", 8);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.resume == null ? null : ctx_r0.resume.personalInfo == null ? null : ctx_r0.resume.personalInfo.fullName) || "Your Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.resume == null ? null : ctx_r0.resume.personalInfo == null ? null : ctx_r0.resume.personalInfo.jobTitle) || "Job Title");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.email) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.contact == null ? null : ctx_r0.resume.contact.phone) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.summary) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.experience == null ? null : ctx_r0.resume.experience.length) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.education == null ? null : ctx_r0.resume.education.length) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.resume == null ? null : ctx_r0.resume.skills == null ? null : ctx_r0.resume.skills.length) ? 12 : -1);
  }
}
var ResumePreview = class _ResumePreview {
  resume;
  templateId = "basic";
  get layoutType() {
    const mapping = {
      "basic": "classic",
      "ats-simple": "classic",
      "classic-one-column": "classic",
      "pro-modern": "modern",
      "cascade": "modern",
      "cubic-pro": "modern",
      "tech-savvy": "modern",
      "modern-executive": "modern",
      "premium-executive": "minimal",
      "executive-edge": "minimal",
      "graphical-genius": "minimal",
      "elite-senior": "minimal",
      "metamorphic-masterpiece": "minimal"
    };
    return mapping[this.templateId] ?? "classic";
  }
  static \u0275fac = function ResumePreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumePreview)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumePreview, selectors: [["app-resume-preview"]], inputs: { resume: "resume", templateId: "templateId" }, decls: 4, vars: 8, consts: [[1, "resume-preview"], [1, "template", "template-classic"], [1, "template", "template-modern"], [1, "template", "template-minimal"], [1, "header"], [1, "name"], [1, "title"], [1, "contact"], [1, "section"], [1, "section-title"], [1, "section-body"], [1, "item"], [1, "item-title"], [1, "item-subtitle"], [1, "section-body", "skills-list"], [1, "pill"], [1, "grid"], [1, "primary"], [1, "secondary"], [1, "inline-points"]], template: function ResumePreview_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ResumePreview_Case_1_Template, 13, 8, "div", 1)(2, ResumePreview_Case_2_Template, 17, 8, "div", 2)(3, ResumePreview_Case_3_Template, 13, 8, "div", 3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275classProp("template-classic", ctx.layoutType === "classic")("template-modern", ctx.layoutType === "modern")("template-minimal", ctx.layoutType === "minimal");
      \u0275\u0275attribute("data-template", ctx.templateId);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_4_0 = ctx.layoutType) === "classic" ? 1 : tmp_4_0 === "modern" ? 2 : tmp_4_0 === "minimal" ? 3 : -1);
    }
  }, dependencies: [CommonModule, MatIconModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 210mm;\n  max-width: 210mm;\n}\n.resume-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 210mm;\n  min-height: 297mm;\n  margin: 0 auto;\n  padding: 16mm 16mm 14mm;\n  background: var(--resume-bg, #ffffff);\n  color: var(--resume-text, #111111);\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  font-family: var(--resume-font, "Times New Roman", Georgia, serif);\n  line-height: 1.35;\n}\n.template[_ngcontent-%COMP%] {\n  display: block;\n}\n.header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--resume-border, #1f2937);\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  line-height: 1.1;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--resume-muted, #222222);\n}\n.contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  font-size: 11px;\n  color: var(--resume-muted, #222222);\n}\n.section[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--resume-text, #111111);\n  margin-bottom: 4px;\n  font-weight: 700;\n}\n.section-body[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.45;\n  white-space: pre-wrap;\n}\n.item[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  border-bottom: none;\n}\n.item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 11.5px;\n  color: var(--resume-text, #111111);\n}\n.item-subtitle[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--resume-muted, #333333);\n  margin-top: 1px;\n}\nul[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  padding-left: 16px;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 11px;\n  line-height: 1.35;\n}\n.skills-list[_ngcontent-%COMP%] {\n  display: block;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline;\n  border: none;\n  border-radius: 0;\n  padding: 0;\n  font-size: 11px;\n  background: transparent;\n  color: var(--resume-text, #111111);\n}\n.pill[_ngcontent-%COMP%]::after {\n  content: ", ";\n}\n.pill[_ngcontent-%COMP%]:last-child::after {\n  content: "";\n}\n.template-modern[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr auto;\n  align-items: end;\n}\n.template-modern[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5fr 1fr;\n  gap: 18px;\n  margin-top: 8px;\n}\n.template-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--resume-text, #111111);\n}\n.template-minimal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-bottom: 4px;\n}\n.template-minimal[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.template-minimal[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding: 8px 0;\n}\n.template-minimal[_ngcontent-%COMP%]   .inline-points[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 4px;\n  font-size: 11px;\n  color: var(--resume-muted, #333333);\n}\n@media (max-width: 900px) {\n  .template-modern[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nrn.resume-preview[data-template=basic][_ngcontent-%COMP%] {\n  --resume-font:\n    "Times New Roman",\n    Georgia,\n    serif;\n  --resume-border: #1f2937;\n}\n.resume-preview[data-template=ats-simple][_ngcontent-%COMP%] {\n  --resume-font:\n    "Arial",\n    "Helvetica",\n    sans-serif;\n  --resume-border: #9ca3af;\n  --resume-muted: #4b5563;\n}\n.resume-preview[data-template=ats-simple][_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  text-transform: none;\n  letter-spacing: 0.4px;\n}\n.resume-preview[data-template=classic-one-column][_ngcontent-%COMP%] {\n  --resume-font:\n    "Georgia",\n    "Times New Roman",\n    serif;\n  --resume-border: #334155;\n  --resume-muted: #475569;\n}\n.resume-preview[data-template=pro-modern][_ngcontent-%COMP%] {\n  --resume-font:\n    "Helvetica Neue",\n    "Arial",\n    sans-serif;\n  --resume-border: #1d4ed8;\n  --resume-muted: #1e3a8a;\n}\n.resume-preview[data-template=cascade][_ngcontent-%COMP%] {\n  --resume-font:\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  --resume-border: #0f766e;\n  --resume-muted: #0f766e;\n  --resume-bg: #f8fafc;\n}\n.resume-preview[data-template=cascade][_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  border-left: 2px solid var(--resume-border);\n  padding-left: 10px;\n}\n.resume-preview[data-template=cubic-pro][_ngcontent-%COMP%] {\n  --resume-font:\n    "Century Gothic",\n    "Trebuchet MS",\n    sans-serif;\n  --resume-border: #111827;\n  --resume-muted: #374151;\n  --resume-bg: #f8fafc;\n}\n.resume-preview[data-template=cubic-pro][_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-bottom: 3px solid var(--resume-border);\n}\n.resume-preview[data-template=cubic-pro][_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  letter-spacing: 1.6px;\n}\n.resume-preview[data-template=tech-savvy][_ngcontent-%COMP%] {\n  --resume-font:\n    "Calibri",\n    "Segoe UI",\n    sans-serif;\n  --resume-border: #0f172a;\n  --resume-muted: #0284c7;\n  --resume-bg: #f1f5f9;\n}\n.resume-preview[data-template=tech-savvy][_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--resume-muted);\n}\n.resume-preview[data-template=tech-savvy][_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.resume-preview[data-template=modern-executive][_ngcontent-%COMP%] {\n  --resume-font:\n    "Palatino Linotype",\n    "Book Antiqua",\n    serif;\n  --resume-border: #0f172a;\n  --resume-muted: #1e293b;\n}\n.resume-preview[data-template=premium-executive][_ngcontent-%COMP%] {\n  --resume-font:\n    "Garamond",\n    "Georgia",\n    serif;\n  --resume-border: #b45309;\n  --resume-muted: #92400e;\n  --resume-bg: #fffbf5;\n}\n.resume-preview[data-template=premium-executive][_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--resume-border);\n}\n.resume-preview[data-template=executive-edge][_ngcontent-%COMP%] {\n  --resume-font:\n    "Didot",\n    "Bodoni MT",\n    "Times New Roman",\n    serif;\n  --resume-border: #7f1d1d;\n  --resume-muted: #991b1b;\n  --resume-bg: #fff5f5;\n}\n.resume-preview[data-template=executive-edge][_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  letter-spacing: 1.4px;\n}\n.resume-preview[data-template=graphical-genius][_ngcontent-%COMP%] {\n  --resume-font:\n    "Gill Sans",\n    "Segoe UI",\n    sans-serif;\n  --resume-border: #0f766e;\n  --resume-muted: #0f766e;\n  --resume-bg: #f0fdfa;\n}\n.resume-preview[data-template=graphical-genius][_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--resume-border);\n}\n.resume-preview[data-template=elite-senior][_ngcontent-%COMP%] {\n  --resume-font:\n    "Cambria",\n    "Georgia",\n    serif;\n  --resume-border: #4b5563;\n  --resume-muted: #6b7280;\n  --resume-bg: #f9fafb;\n}\n.resume-preview[data-template=elite-senior][_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n.resume-preview[data-template=metamorphic-masterpiece][_ngcontent-%COMP%] {\n  --resume-font:\n    "Palatino Linotype",\n    "Book Antiqua",\n    serif;\n  --resume-border: #78350f;\n  --resume-muted: #9a3412;\n  --resume-bg: #fff7ed;\n}\n.resume-preview[data-template=metamorphic-masterpiece][_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--resume-border);\n}\n/*# sourceMappingURL=resume-preview.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumePreview, [{
    type: Component,
    args: [{ selector: "app-resume-preview", standalone: true, imports: [CommonModule, MatIconModule], template: `<div class="resume-preview" [attr.data-template]="templateId" [class.template-classic]="layoutType === 'classic'" [class.template-modern]="layoutType === 'modern'" [class.template-minimal]="layoutType === 'minimal'">\r
  @switch (layoutType) {\r
    @case ('classic') {\r
      <div class="template template-classic">\r
        <div class="header">\r
          <div class="name">{{ resume?.personalInfo?.fullName || 'Your Name' }}</div>\r
          <div class="title">{{ resume?.personalInfo?.jobTitle || 'Job Title' }}</div>\r
          <div class="contact">\r
            @if (resume?.contact?.email) { <span>{{ resume?.contact?.email }}</span> }\r
            @if (resume?.contact?.phone) { <span>{{ resume?.contact?.phone }}</span> }\r
          </div>\r
        </div>\r
\r
        @if (resume?.summary) {\r
          <div class="section">\r
            <div class="section-title">Summary</div>\r
            <div class="section-body">{{ resume?.summary }}</div>\r
          </div>\r
        }\r
\r
        @if (resume?.experience?.length) {\r
          <div class="section">\r
            <div class="section-title">Experience</div>\r
            <div class="section-body">\r
              @for (exp of resume?.experience ?? []; track $index) {\r
                <div class="item">\r
                  <div class="item-title">{{ exp.role }}</div>\r
                  <div class="item-subtitle">{{ exp.company }} \xB7 {{ exp.startDate }} \u2014 {{ exp.endDate }}</div>\r
                  @if (exp.description?.length) {\r
                    <ul>\r
                      @for (point of exp.description; track $index) {\r
                        <li>{{ point }}</li>\r
                      }\r
                    </ul>\r
                  }\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
        @if (resume?.education?.length) {\r
          <div class="section">\r
            <div class="section-title">Education</div>\r
            <div class="section-body">\r
              @for (edu of resume?.education ?? []; track $index) {\r
                <div class="item">\r
                  <div class="item-title">{{ edu.degree }}</div>\r
                  <div class="item-subtitle">{{ edu.school }} \xB7 {{ edu.startDate }} \u2014 {{ edu.endDate }}</div>\r
                  @if (edu.description?.length) {\r
                    <ul>\r
                      @for (point of edu.description; track $index) {\r
                        <li>{{ point }}</li>\r
                      }\r
                    </ul>\r
                  }\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
        @if (resume?.skills?.length) {\r
          <div class="section">\r
            <div class="section-title">Skills</div>\r
            <div class="section-body skills-list">\r
              @for (skill of resume?.skills ?? []; track $index) {\r
                <span class="pill">{{ skill }}</span>\r
              }\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    }\r
\r
    @case ('modern') {\r
      <div class="template template-modern">\r
        <div class="header">\r
          <div>\r
            <div class="name">{{ resume?.personalInfo?.fullName || 'Your Name' }}</div>\r
            <div class="title">{{ resume?.personalInfo?.jobTitle || 'Job Title' }}</div>\r
          </div>\r
          <div class="contact">\r
            @if (resume?.contact?.email) { <span>{{ resume?.contact?.email }}</span> }\r
            @if (resume?.contact?.phone) { <span>{{ resume?.contact?.phone }}</span> }\r
          </div>\r
        </div>\r
\r
        <div class="grid">\r
          <div class="primary">\r
            @if (resume?.summary) {\r
              <div class="section">\r
                <div class="section-title">Profile</div>\r
                <div class="section-body">{{ resume?.summary }}</div>\r
              </div>\r
            }\r
\r
            @if (resume?.experience?.length) {\r
              <div class="section">\r
                <div class="section-title">Experience</div>\r
                <div class="section-body">\r
                  @for (exp of resume?.experience ?? []; track $index) {\r
                    <div class="item">\r
                      <div class="item-title">{{ exp.role }}</div>\r
                      <div class="item-subtitle">{{ exp.company }} \xB7 {{ exp.startDate }} \u2014 {{ exp.endDate }}</div>\r
                      @if (exp.description?.length) {\r
                        <ul>\r
                          @for (point of exp.description; track $index) {\r
                            <li>{{ point }}</li>\r
                          }\r
                        </ul>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
            }\r
          </div>\r
          <div class="secondary">\r
            @if (resume?.skills?.length) {\r
              <div class="section">\r
                <div class="section-title">Skills</div>\r
                <div class="section-body skills-list">\r
                  @for (skill of resume?.skills ?? []; track $index) {\r
                    <span class="pill">{{ skill }}</span>\r
                  }\r
                </div>\r
              </div>\r
            }\r
\r
            @if (resume?.education?.length) {\r
              <div class="section">\r
                <div class="section-title">Education</div>\r
                <div class="section-body">\r
                  @for (edu of resume?.education ?? []; track $index) {\r
                    <div class="item">\r
                      <div class="item-title">{{ edu.degree }}</div>\r
                      <div class="item-subtitle">{{ edu.school }} \xB7 {{ edu.startDate }} \u2014 {{ edu.endDate }}</div>\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
    }\r
\r
    @case ('minimal') {\r
      <div class="template template-minimal">\r
        <div class="header">\r
          <div class="name">{{ resume?.personalInfo?.fullName || 'Your Name' }}</div>\r
          <div class="title">{{ resume?.personalInfo?.jobTitle || 'Job Title' }}</div>\r
          <div class="contact">\r
            @if (resume?.contact?.email) { <span>{{ resume?.contact?.email }}</span> }\r
            @if (resume?.contact?.phone) { <span>{{ resume?.contact?.phone }}</span> }\r
          </div>\r
        </div>\r
\r
        @if (resume?.summary) {\r
          <div class="section">\r
            <div class="section-body">{{ resume?.summary }}</div>\r
          </div>\r
        }\r
\r
        @if (resume?.experience?.length) {\r
          <div class="section">\r
            <div class="section-title">Experience</div>\r
            <div class="section-body">\r
              @for (exp of resume?.experience ?? []; track $index) {\r
                <div class="item">\r
                  <div class="item-title">{{ exp.role }} \xB7 {{ exp.company }}</div>\r
                  <div class="item-subtitle">{{ exp.startDate }} \u2014 {{ exp.endDate }}</div>\r
                  @if (exp.description?.length) {\r
                    <div class="inline-points">\r
                      @for (point of exp.description; track $index) {\r
                        <span>{{ point }}</span>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
        @if (resume?.education?.length) {\r
          <div class="section">\r
            <div class="section-title">Education</div>\r
            <div class="section-body">\r
              @for (edu of resume?.education ?? []; track $index) {\r
                <div class="item">\r
                  <div class="item-title">{{ edu.degree }} \xB7 {{ edu.school }}</div>\r
                  <div class="item-subtitle">{{ edu.startDate }} \u2014 {{ edu.endDate }}</div>\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
        @if (resume?.skills?.length) {\r
          <div class="section">\r
            <div class="section-title">Skills</div>\r
            <div class="section-body skills-list">\r
              @for (skill of resume?.skills ?? []; track $index) {\r
                <span>{{ skill }}</span>\r
              }\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    }\r
  }\r
</div>\r
\r
`, styles: ['/* src/app/pages/application/resumes/resume-preview/resume-preview.scss */\n:host {\n  display: block;\n  width: 210mm;\n  max-width: 210mm;\n}\n.resume-preview {\n  box-sizing: border-box;\n  width: 210mm;\n  min-height: 297mm;\n  margin: 0 auto;\n  padding: 16mm 16mm 14mm;\n  background: var(--resume-bg, #ffffff);\n  color: var(--resume-text, #111111);\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  font-family: var(--resume-font, "Times New Roman", Georgia, serif);\n  line-height: 1.35;\n}\n.template {\n  display: block;\n}\n.header {\n  display: grid;\n  gap: 6px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--resume-border, #1f2937);\n}\n.name {\n  font-size: 30px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  line-height: 1.1;\n}\n.title {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--resume-muted, #222222);\n}\n.contact {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  font-size: 11px;\n  color: var(--resume-muted, #222222);\n}\n.section {\n  margin-top: 10px;\n}\n.section-title {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--resume-text, #111111);\n  margin-bottom: 4px;\n  font-weight: 700;\n}\n.section-body {\n  font-size: 11px;\n  line-height: 1.45;\n  white-space: pre-wrap;\n}\n.item {\n  padding: 6px 0;\n  border-bottom: none;\n}\n.item:last-child {\n  border-bottom: none;\n}\n.item-title {\n  font-weight: 700;\n  font-size: 11.5px;\n  color: var(--resume-text, #111111);\n}\n.item-subtitle {\n  font-size: 10.5px;\n  color: var(--resume-muted, #333333);\n  margin-top: 1px;\n}\nul {\n  margin: 4px 0 0;\n  padding-left: 16px;\n}\nli {\n  margin-bottom: 2px;\n  font-size: 11px;\n  line-height: 1.35;\n}\n.skills-list {\n  display: block;\n}\n.pill {\n  display: inline;\n  border: none;\n  border-radius: 0;\n  padding: 0;\n  font-size: 11px;\n  background: transparent;\n  color: var(--resume-text, #111111);\n}\n.pill::after {\n  content: ", ";\n}\n.pill:last-child::after {\n  content: "";\n}\n.template-modern .header {\n  grid-template-columns: 1fr auto;\n  align-items: end;\n}\n.template-modern .grid {\n  display: grid;\n  grid-template-columns: 1.5fr 1fr;\n  gap: 18px;\n  margin-top: 8px;\n}\n.template-modern .section-title {\n  color: var(--resume-text, #111111);\n}\n.template-minimal .header {\n  border-bottom: none;\n  padding-bottom: 4px;\n}\n.template-minimal .section-title {\n  font-size: 11px;\n}\n.template-minimal .item {\n  border-bottom: none;\n  padding: 8px 0;\n}\n.template-minimal .inline-points {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 4px;\n  font-size: 11px;\n  color: var(--resume-muted, #333333);\n}\n@media (max-width: 900px) {\n  .template-modern .grid {\n    grid-template-columns: 1fr;\n  }\n}\nrn.resume-preview[data-template=basic] {\n  --resume-font:\n    "Times New Roman",\n    Georgia,\n    serif;\n  --resume-border: #1f2937;\n}\n.resume-preview[data-template=ats-simple] {\n  --resume-font:\n    "Arial",\n    "Helvetica",\n    sans-serif;\n  --resume-border: #9ca3af;\n  --resume-muted: #4b5563;\n}\n.resume-preview[data-template=ats-simple] .section-title {\n  text-transform: none;\n  letter-spacing: 0.4px;\n}\n.resume-preview[data-template=classic-one-column] {\n  --resume-font:\n    "Georgia",\n    "Times New Roman",\n    serif;\n  --resume-border: #334155;\n  --resume-muted: #475569;\n}\n.resume-preview[data-template=pro-modern] {\n  --resume-font:\n    "Helvetica Neue",\n    "Arial",\n    sans-serif;\n  --resume-border: #1d4ed8;\n  --resume-muted: #1e3a8a;\n}\n.resume-preview[data-template=cascade] {\n  --resume-font:\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  --resume-border: #0f766e;\n  --resume-muted: #0f766e;\n  --resume-bg: #f8fafc;\n}\n.resume-preview[data-template=cascade] .section {\n  border-left: 2px solid var(--resume-border);\n  padding-left: 10px;\n}\n.resume-preview[data-template=cubic-pro] {\n  --resume-font:\n    "Century Gothic",\n    "Trebuchet MS",\n    sans-serif;\n  --resume-border: #111827;\n  --resume-muted: #374151;\n  --resume-bg: #f8fafc;\n}\n.resume-preview[data-template=cubic-pro] .header {\n  border-bottom: 3px solid var(--resume-border);\n}\n.resume-preview[data-template=cubic-pro] .section-title {\n  letter-spacing: 1.6px;\n}\n.resume-preview[data-template=tech-savvy] {\n  --resume-font:\n    "Calibri",\n    "Segoe UI",\n    sans-serif;\n  --resume-border: #0f172a;\n  --resume-muted: #0284c7;\n  --resume-bg: #f1f5f9;\n}\n.resume-preview[data-template=tech-savvy] .section-title {\n  color: var(--resume-muted);\n}\n.resume-preview[data-template=tech-savvy] .pill {\n  font-weight: 600;\n}\n.resume-preview[data-template=modern-executive] {\n  --resume-font:\n    "Palatino Linotype",\n    "Book Antiqua",\n    serif;\n  --resume-border: #0f172a;\n  --resume-muted: #1e293b;\n}\n.resume-preview[data-template=premium-executive] {\n  --resume-font:\n    "Garamond",\n    "Georgia",\n    serif;\n  --resume-border: #b45309;\n  --resume-muted: #92400e;\n  --resume-bg: #fffbf5;\n}\n.resume-preview[data-template=premium-executive] .header {\n  border-bottom: 2px solid var(--resume-border);\n}\n.resume-preview[data-template=executive-edge] {\n  --resume-font:\n    "Didot",\n    "Bodoni MT",\n    "Times New Roman",\n    serif;\n  --resume-border: #7f1d1d;\n  --resume-muted: #991b1b;\n  --resume-bg: #fff5f5;\n}\n.resume-preview[data-template=executive-edge] .section-title {\n  letter-spacing: 1.4px;\n}\n.resume-preview[data-template=graphical-genius] {\n  --resume-font:\n    "Gill Sans",\n    "Segoe UI",\n    sans-serif;\n  --resume-border: #0f766e;\n  --resume-muted: #0f766e;\n  --resume-bg: #f0fdfa;\n}\n.resume-preview[data-template=graphical-genius] .header {\n  border-bottom: 2px solid var(--resume-border);\n}\n.resume-preview[data-template=elite-senior] {\n  --resume-font:\n    "Cambria",\n    "Georgia",\n    serif;\n  --resume-border: #4b5563;\n  --resume-muted: #6b7280;\n  --resume-bg: #f9fafb;\n}\n.resume-preview[data-template=elite-senior] .section-title {\n  letter-spacing: 1px;\n}\n.resume-preview[data-template=metamorphic-masterpiece] {\n  --resume-font:\n    "Palatino Linotype",\n    "Book Antiqua",\n    serif;\n  --resume-border: #78350f;\n  --resume-muted: #9a3412;\n  --resume-bg: #fff7ed;\n}\n.resume-preview[data-template=metamorphic-masterpiece] .header {\n  border-bottom: 2px solid var(--resume-border);\n}\n/*# sourceMappingURL=resume-preview.css.map */\n'] }]
  }], null, { resume: [{
    type: Input
  }], templateId: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumePreview, { className: "ResumePreview", filePath: "src/app/pages/application/resumes/resume-preview/resume-preview.ts", lineNumber: 13 });
})();

// src/app/pages/application/resumes/resumes-create/resumes-create.ts
init_html2canvas_esm();
var import_jspdf = __toESM(require_jspdf_node_min());
function ResumesCreate_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.progressPercent);
  }
}
function ResumesCreate_Conditional_22_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint");
    \u0275\u0275text(1, "AI uses only the info you provided. No invented details.");
    \u0275\u0275elementEnd();
  }
}
function ResumesCreate_Conditional_22_Conditional_39_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, " Add your full name, job title, and skills before generating a summary. ");
    \u0275\u0275elementEnd();
  }
}
function ResumesCreate_Conditional_22_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-generate-btn", 45);
    \u0275\u0275listener("generate", function ResumesCreate_Conditional_22_Conditional_39_Template_app_generate_btn_generate_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.generateSummaryWithAI());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, ResumesCreate_Conditional_22_Conditional_39_Conditional_1_Template, 2, 0, "p", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.canGenerateSummary() || ctx_r0.isGenerating)("compact", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.canGenerateSummary() ? 1 : -1);
  }
}
function ResumesCreate_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 33)(2, "div", 34)(3, "div", 35)(4, "mat-form-field", 36)(5, "mat-label");
    \u0275\u0275text(6, "Full Name*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 34)(9, "div", 38)(10, "mat-form-field", 36)(11, "mat-label");
    \u0275\u0275text(12, "Job Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 40)(15, "div", 34)(16, "div", 38)(17, "mat-form-field", 36)(18, "mat-label");
    \u0275\u0275text(19, "Email*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 38)(22, "mat-form-field", 36)(23, "mat-label");
    \u0275\u0275text(24, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 34)(27, "div", 38)(28, "mat-form-field", 36)(29, "mat-label");
    \u0275\u0275text(30, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 34)(33, "div", 35)(34, "mat-form-field", 36)(35, "mat-label");
    \u0275\u0275text(36, "Professional Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "textarea", 44);
    \u0275\u0275conditionalCreate(38, ResumesCreate_Conditional_22_Conditional_38_Template, 2, 0, "mat-hint");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, ResumesCreate_Conditional_22_Conditional_39_Template, 2, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(38);
    \u0275\u0275conditional(!ctx_r0.isEditMode ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isEditMode ? 39 : -1);
  }
}
function ResumesCreate_Conditional_35_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-generate-btn", 45);
    \u0275\u0275listener("generate", function ResumesCreate_Conditional_35_For_2_Conditional_29_Template_app_generate_btn_generate_0_listener() {
      \u0275\u0275restoreView(_r4);
      const \u0275$index_145_r5 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.generateExperienceWithAI(\u0275$index_145_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_145_r5 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.canGenerateExperience(\u0275$index_145_r5) || ctx_r0.isGenerating)("compact", true);
  }
}
function ResumesCreate_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 34)(2, "div", 38)(3, "mat-form-field", 36)(4, "mat-label");
    \u0275\u0275text(5, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "mat-form-field", 36)(9, "mat-label");
    \u0275\u0275text(10, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 34)(13, "div", 38)(14, "mat-form-field", 36)(15, "mat-label");
    \u0275\u0275text(16, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 38)(19, "mat-form-field", 36)(20, "mat-label");
    \u0275\u0275text(21, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 34)(24, "div", 35)(25, "mat-form-field", 36)(26, "mat-label");
    \u0275\u0275text(27, "Responsibilities & Achievements");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, ResumesCreate_Conditional_35_For_2_Conditional_29_Template, 1, 2, "app-generate-btn", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 54);
    \u0275\u0275listener("click", function ResumesCreate_Conditional_35_For_2_Template_button_click_30_listener() {
      const \u0275$index_145_r5 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeWorkExperience(\u0275$index_145_r5));
    });
    \u0275\u0275elementStart(31, "mat-icon");
    \u0275\u0275text(32, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const \u0275$index_145_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", \u0275$index_145_r5);
    \u0275\u0275advance(29);
    \u0275\u0275conditional(!ctx_r0.isEditMode ? 29 : -1);
  }
}
function ResumesCreate_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, ResumesCreate_Conditional_35_For_2_Template, 33, 2, "div", 47, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.workExperiences);
  }
}
function ResumesCreate_Conditional_48_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-generate-btn", 45);
    \u0275\u0275listener("generate", function ResumesCreate_Conditional_48_For_2_Conditional_29_Template_app_generate_btn_generate_0_listener() {
      \u0275\u0275restoreView(_r7);
      const \u0275$index_230_r8 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.generateEducationWithAI(\u0275$index_230_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_230_r8 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.canGenerateEducation(\u0275$index_230_r8) || ctx_r0.isGenerating)("compact", true);
  }
}
function ResumesCreate_Conditional_48_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 34)(2, "div", 38)(3, "mat-form-field", 36)(4, "mat-label");
    \u0275\u0275text(5, "School/University");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "mat-form-field", 36)(9, "mat-label");
    \u0275\u0275text(10, "Degree");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 34)(13, "div", 38)(14, "mat-form-field", 36)(15, "mat-label");
    \u0275\u0275text(16, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 38)(19, "mat-form-field", 36)(20, "mat-label");
    \u0275\u0275text(21, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 34)(24, "div", 35)(25, "mat-form-field", 36)(26, "mat-label");
    \u0275\u0275text(27, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, ResumesCreate_Conditional_48_For_2_Conditional_29_Template, 1, 2, "app-generate-btn", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 54);
    \u0275\u0275listener("click", function ResumesCreate_Conditional_48_For_2_Template_button_click_30_listener() {
      const \u0275$index_230_r8 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeEducation(\u0275$index_230_r8));
    });
    \u0275\u0275elementStart(31, "mat-icon");
    \u0275\u0275text(32, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const \u0275$index_230_r8 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", \u0275$index_230_r8);
    \u0275\u0275advance(29);
    \u0275\u0275conditional(!ctx_r0.isEditMode ? 29 : -1);
  }
}
function ResumesCreate_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, ResumesCreate_Conditional_48_For_2_Template, 33, 2, "div", 55, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.educations);
  }
}
function ResumesCreate_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 34)(2, "div", 35)(3, "mat-form-field", 36)(4, "mat-label");
    \u0275\u0275text(5, "Skills*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "textarea", 59);
    \u0275\u0275elementEnd()()()();
  }
}
function ResumesCreate_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ResumesCreate_Conditional_60_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportToPdf());
    });
    \u0275\u0275text(1, "Export to PDF");
    \u0275\u0275elementEnd();
  }
}
function ResumesCreate_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 21);
  }
}
function ResumesCreate_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ResumesCreate_Conditional_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveResume());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(1, 2, ctx_r0.isSaving$));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Save Changes" : "Save Resume", " ");
  }
}
var ResumesCreate = class _ResumesCreate {
  mode = "create";
  resumeId = null;
  templateId;
  plan = "free";
  changeTemplate = new EventEmitter();
  resumeGroup;
  isGenerating = false;
  resumesFacade = inject(ResumesFacade);
  destroyRef = inject(DestroyRef);
  location = inject(Location);
  router = inject(Router);
  isSaving$ = this.resumesFacade.saving$;
  currentStep = 0;
  progressPercent = 25;
  workExperiences = [];
  educations = [];
  showPersonal = true;
  showWorkExperience = false;
  showEducation = false;
  showSkills = false;
  previewTemplate = "basic";
  preview$;
  showTailoring = false;
  loadedMeta = null;
  constructor() {
    this.resumeGroup = new FormGroup({
      personalInfo: new FormGroup({
        fullName: new FormControl("", Validators.required),
        jobTitle: new FormControl("")
      }),
      contact: new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        phone: new FormControl("", Validators.pattern(/^\+?[0-9\s\-]{7,15}$/)),
        location: new FormControl("", [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ])
      }),
      summary: new FormControl(""),
      skills: new FormControl("", Validators.required),
      experience: new FormArray([]),
      education: new FormArray([]),
      projects: new FormControl([]),
      certifications: new FormControl([]),
      meta: new FormGroup({
        createdAt: new FormControl(/* @__PURE__ */ new Date()),
        updatedAt: new FormControl(/* @__PURE__ */ new Date())
      })
    });
    this.preview$ = this.resumeGroupValueChanges();
  }
  ngOnInit() {
    if (this.templateId) {
      this.previewTemplate = this.templateId;
    }
    this.resumesFacade.saveSucceeded$.pipe(skip(1), filter((saved) => saved), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.router.navigate(["/application/resumes"]);
    });
    if (!this.isEditMode || !this.resumeId) {
      return;
    }
    this.loadResumeForEdit(this.resumeId);
  }
  ngOnChanges(changes) {
    if (changes["templateId"]?.currentValue) {
      this.previewTemplate = changes["templateId"].currentValue;
    }
  }
  get isEditMode() {
    return this.mode === "edit";
  }
  get experienceArray() {
    return this.resumeGroup.get("experience");
  }
  get educationArray() {
    return this.resumeGroup.get("education");
  }
  toggleSection(section) {
    if (section === "personal") {
      this.showPersonal = !this.showPersonal;
    } else if (section === "experience") {
      this.showWorkExperience = !this.showWorkExperience;
    } else if (section === "education") {
      this.showEducation = !this.showEducation;
    } else if (section === "skills") {
      this.showSkills = !this.showSkills;
    }
  }
  addWorkExperience() {
    const group = new FormGroup({
      company: new FormControl(""),
      role: new FormControl(""),
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      description: new FormControl("")
    });
    this.experienceArray.push(group);
    this.workExperiences = this.experienceArray.controls;
  }
  removeWorkExperience(index) {
    this.experienceArray.removeAt(index);
    this.workExperiences = this.experienceArray.controls;
  }
  addEducation() {
    const group = new FormGroup({
      school: new FormControl(""),
      degree: new FormControl(""),
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      description: new FormControl("")
    });
    this.educationArray.push(group);
    this.educations = this.educationArray.controls;
  }
  removeEducation(index) {
    this.educationArray.removeAt(index);
    this.educations = this.educationArray.controls;
  }
  generateWithAI() {
    if (this.resumeGroup.invalid) {
      Object.keys(this.resumeGroup.controls).forEach((key) => {
        this.resumeGroup.get(key)?.markAsTouched();
      });
      return;
    }
    this.isGenerating = true;
    const raw = this.resumeGroup.getRawValue();
    const payload = __spreadProps(__spreadValues({}, raw), {
      experience: this.normalizeExperience(raw.experience),
      education: this.normalizeEducation(raw.education),
      skills: this.normalizeSkills(raw.skills),
      templateId: this.previewTemplate,
      meta: __spreadProps(__spreadValues(__spreadValues({}, this.loadedMeta ?? {}), raw.meta ?? {}), {
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      })
    });
    this.resumesFacade.generateResume(payload);
  }
  canGenerateSummary() {
    return this.hasBasicInfo();
  }
  generateSummaryWithAI() {
    if (!this.canGenerateSummary()) {
      this.resumeGroup.get("personalInfo.fullName")?.markAsTouched();
      this.resumeGroup.get("personalInfo.jobTitle")?.markAsTouched();
      this.resumeGroup.get("skills")?.markAsTouched();
      return;
    }
    const raw = this.resumeGroup.getRawValue();
    const prompt = this.buildSummaryPrompt(raw);
    this.isGenerating = true;
    this.resumesFacade.generateResume(prompt);
  }
  canGenerateExperience(index) {
    if (!this.hasBasicInfo()) {
      return false;
    }
    const group = this.experienceArray.at(index);
    const company = group.get("company")?.value?.trim();
    const role = group.get("role")?.value?.trim();
    return Boolean(company && role);
  }
  generateExperienceWithAI(index) {
    if (!this.canGenerateExperience(index)) {
      const group = this.experienceArray.at(index);
      group.get("company")?.markAsTouched();
      group.get("role")?.markAsTouched();
      return;
    }
    const raw = this.resumeGroup.getRawValue();
    const entry = (raw.experience ?? [])[index] ?? {};
    const prompt = this.buildExperiencePrompt(raw, entry);
    this.isGenerating = true;
    this.resumesFacade.generateResume(prompt);
  }
  canGenerateEducation(index) {
    if (!this.hasBasicInfo()) {
      return false;
    }
    const group = this.educationArray.at(index);
    const school = group.get("school")?.value?.trim();
    const degree = group.get("degree")?.value?.trim();
    return Boolean(school && degree);
  }
  generateEducationWithAI(index) {
    if (!this.canGenerateEducation(index)) {
      const group = this.educationArray.at(index);
      group.get("school")?.markAsTouched();
      group.get("degree")?.markAsTouched();
      return;
    }
    const raw = this.resumeGroup.getRawValue();
    const entry = (raw.education ?? [])[index] ?? {};
    const prompt = this.buildEducationPrompt(raw, entry);
    this.isGenerating = true;
    this.resumesFacade.generateResume(prompt);
  }
  normalizeSkills(input) {
    return input.split(/[,\n]+/).map((entry) => entry.trim()).filter(Boolean);
  }
  normalizeExperience(raw) {
    return raw.map((entry) => ({
      company: entry.company?.trim() ?? "",
      role: entry.role?.trim() ?? "",
      startDate: entry.startDate?.trim() ?? "",
      endDate: this.normalizeEndDate(entry.endDate),
      description: this.normalizeBullets(entry.description)
    }));
  }
  normalizeEducation(raw) {
    return raw.map((entry) => ({
      school: entry.school?.trim() ?? "",
      degree: entry.degree?.trim() ?? "",
      startDate: entry.startDate?.trim() ?? "",
      endDate: entry.endDate?.trim() ?? "",
      description: this.normalizeBullets(entry.description)
    }));
  }
  resumeGroupValueChanges() {
    return this.resumeGroup.valueChanges.pipe(startWith(this.resumeGroup.getRawValue()), map((raw) => __spreadProps(__spreadValues({}, raw), {
      experience: this.normalizeExperience(raw.experience),
      education: this.normalizeEducation(raw.education),
      skills: this.normalizeSkills(raw.skills),
      templateId: this.previewTemplate
    })));
  }
  hasBasicInfo() {
    const fullName = this.resumeGroup.get("personalInfo.fullName")?.value?.trim();
    const jobTitle = this.resumeGroup.get("personalInfo.jobTitle")?.value?.trim();
    const skills = this.resumeGroup.get("skills")?.value?.trim();
    return Boolean(fullName && jobTitle && skills);
  }
  normalizeEndDate(input) {
    const trimmed = input?.trim();
    if (!trimmed) {
      return "Present";
    }
    return trimmed;
  }
  normalizeBullets(input) {
    if (!input) {
      return [];
    }
    return input.split(/\n+|\u2022\s*|-+\s*/).map((entry) => entry.trim()).filter(Boolean);
  }
  buildSummaryPrompt(raw) {
    const experience = this.normalizeExperience(raw.experience ?? []);
    const education = this.normalizeEducation(raw.education ?? []);
    const skills = this.normalizeSkills(raw.skills ?? "");
    return [
      "Write a 2-4 sentence professional summary for a resume.",
      "Use ONLY the facts provided. Do NOT invent employers, degrees, dates, metrics, or locations.",
      "If a detail is missing, omit it.",
      "",
      `Name: ${raw.personalInfo?.fullName ?? ""}`,
      `Job Title: ${raw.personalInfo?.jobTitle ?? ""}`,
      `Location: ${raw.contact?.location ?? ""}`,
      `Skills: ${skills.join(", ")}`,
      "",
      "Experience:",
      ...experience.map((entry) => `- ${entry.role} at ${entry.company} (${entry.startDate} to ${entry.endDate}): ${entry.description.join("; ")}`),
      "",
      "Education:",
      ...education.map((entry) => `- ${entry.degree} at ${entry.school} (${entry.startDate} to ${entry.endDate})`)
    ].join("\n");
  }
  buildExperiencePrompt(raw, entry) {
    const skills = this.normalizeSkills(raw.skills ?? "");
    const description = this.normalizeBullets(entry.description);
    return [
      "Write 3-5 resume bullet points for this role.",
      "Use ONLY the facts provided. Do NOT invent employers, degrees, dates, metrics, or tools.",
      'If no responsibilities are provided, return: "Add responsibilities for this role."',
      "",
      `Name: ${raw.personalInfo?.fullName ?? ""}`,
      `Job Title: ${raw.personalInfo?.jobTitle ?? ""}`,
      `Skills: ${skills.join(", ")}`,
      "",
      `Company: ${entry.company ?? ""}`,
      `Role: ${entry.role ?? ""}`,
      `Dates: ${entry.startDate ?? ""} to ${entry.endDate ?? ""}`,
      `Existing Notes: ${description.join("; ")}`
    ].join("\n");
  }
  buildEducationPrompt(raw, entry) {
    const skills = this.normalizeSkills(raw.skills ?? "");
    const description = this.normalizeBullets(entry.description);
    return [
      "Write 1-3 resume bullet points for the education entry.",
      "Use ONLY the facts provided. Do NOT invent institutions, dates, honors, or activities.",
      'If no notes are provided, return: "Add relevant coursework or achievements."',
      "",
      `Name: ${raw.personalInfo?.fullName ?? ""}`,
      `Job Title: ${raw.personalInfo?.jobTitle ?? ""}`,
      `Skills: ${skills.join(", ")}`,
      "",
      `School: ${entry.school ?? ""}`,
      `Degree: ${entry.degree ?? ""}`,
      `Dates: ${entry.startDate ?? ""} to ${entry.endDate ?? ""}`,
      `Existing Notes: ${description.join("; ")}`
    ].join("\n");
  }
  getTemplateLabel(templateId) {
    const labels = {
      "basic": "Basic",
      "ats-simple": "ATS-Friendly Simple",
      "classic-one-column": "Classic One-Column",
      "pro-modern": "Pro (Professional & Modern)",
      "cascade": "Cascade (Pro)",
      "cubic-pro": "Cubic (Pro)",
      "tech-savvy": "Tech-Savvy",
      "modern-executive": "Modern Executive",
      "premium-executive": "Premium (Executive & High-End)",
      "executive-edge": "Executive Edge",
      "graphical-genius": "Graphical Genius",
      "elite-senior": "Elite Senior",
      "metamorphic-masterpiece": "Metamorphic Masterpiece"
    };
    return labels[templateId] ?? "Basic";
  }
  requestTemplateChange() {
    this.changeTemplate.emit();
  }
  isTemplateLocked(templateId) {
    return this.planRank(this.plan) < this.planRank(this.requiredPlan(templateId));
  }
  requiredPlan(templateId) {
    const proTemplates = [
      "pro-modern",
      "cascade",
      "cubic-pro",
      "tech-savvy",
      "modern-executive"
    ];
    const premiumTemplates = [
      "premium-executive",
      "executive-edge",
      "graphical-genius",
      "elite-senior",
      "metamorphic-masterpiece"
    ];
    if (premiumTemplates.includes(templateId)) {
      return "premium";
    }
    if (proTemplates.includes(templateId)) {
      return "pro";
    }
    return "free";
  }
  planRank(plan) {
    if (plan === "premium") {
      return 3;
    }
    if (plan === "pro") {
      return 2;
    }
    return 1;
  }
  goBack() {
    this.location.back();
  }
  saveResume() {
    console.log(this.isEditMode ? "Updating resume..." : "Creating resume...");
    if (this.resumeGroup.invalid) {
      console.log(this.resumeGroup);
      this.resumeGroup.markAllAsTouched();
      return;
    }
    const raw = this.resumeGroup.getRawValue();
    const payload = __spreadProps(__spreadValues({}, raw), {
      experience: this.normalizeExperience(raw.experience),
      education: this.normalizeEducation(raw.education),
      skills: this.normalizeSkills(raw.skills),
      templateId: this.previewTemplate,
      meta: __spreadProps(__spreadValues(__spreadValues({}, this.loadedMeta ?? {}), raw.meta ?? {}), {
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      })
    });
    if (this.isEditMode) {
      if (!this.resumeId) {
        return;
      }
      this.resumesFacade.saveResumeData(payload, this.resumeId);
      return;
    }
    const createPayload = __spreadProps(__spreadValues({}, payload), {
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      meta: {
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        source: "manual",
        version: 1
      }
    });
    this.resumesFacade.saveResumeData(createPayload);
  }
  async exportToPdf() {
    if (typeof window === "undefined") {
      return;
    }
    const previewElement = document.querySelector(".preview-content .resume-preview");
    if (!previewElement) {
      return;
    }
    const canvas = await html2canvas_esm_default(previewElement, {
      scale: Math.max(window.devicePixelRatio, 2),
      backgroundColor: "#ffffff",
      useCORS: true
    });
    const imageData = canvas.toDataURL("image/png");
    const pdf = new import_jspdf.default("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 0;
    const contentWidth = pageWidth - margin * 2;
    const imageHeight = canvas.height * contentWidth / canvas.width;
    const pageContentHeight = pageHeight - margin * 2;
    let renderedHeight = 0;
    pdf.addImage(imageData, "PNG", margin, margin, contentWidth, imageHeight);
    renderedHeight += pageContentHeight;
    while (renderedHeight < imageHeight) {
      pdf.addPage();
      pdf.addImage(imageData, "PNG", margin, margin - renderedHeight, contentWidth, imageHeight);
      renderedHeight += pageContentHeight;
    }
    const fullName = this.resumeGroup.get("personalInfo.fullName")?.value?.trim();
    const sanitizedName = (fullName || "resume").replace(/[^\w\-]+/g, "_");
    pdf.save(`${sanitizedName}.pdf`);
  }
  loadResumeForEdit(id) {
    this.resumesFacade.getResumeById(id).pipe(take(1)).subscribe((resume) => {
      if (!resume) {
        this.router.navigate(["/application/resumes"]);
        return;
      }
      const contact = resume.contact ?? {};
      this.resumeGroup.patchValue({
        userId: resume.userId,
        personalInfo: {
          fullName: resume.personalInfo?.fullName ?? "",
          jobTitle: resume.personalInfo?.jobTitle ?? ""
        },
        contact: {
          email: contact.email ?? "",
          phone: contact.phone ?? "",
          location: contact.location ?? ""
        },
        summary: resume.summary ?? "",
        skills: Array.isArray(resume.skills) ? resume.skills.join(", ") : "",
        projects: resume.projects ?? [],
        certifications: resume.certifications ?? [],
        meta: {
          createdAt: resume.meta?.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: resume.meta?.updatedAt ?? (/* @__PURE__ */ new Date()).toISOString()
        }
      });
      this.previewTemplate = resume.templateId ?? this.previewTemplate;
      this.loadedMeta = resume.meta ?? null;
      this.experienceArray.clear();
      (resume.experience ?? []).forEach((entry) => {
        this.experienceArray.push(new FormGroup({
          company: new FormControl(entry.company ?? ""),
          role: new FormControl(entry.role ?? ""),
          startDate: new FormControl(entry.startDate ?? ""),
          endDate: new FormControl(entry.endDate ?? ""),
          description: new FormControl((entry.description ?? []).join("\n"))
        }));
      });
      this.workExperiences = this.experienceArray.controls;
      this.educationArray.clear();
      (resume.education ?? []).forEach((entry) => {
        this.educationArray.push(new FormGroup({
          school: new FormControl(entry.school ?? ""),
          degree: new FormControl(entry.degree ?? ""),
          startDate: new FormControl(entry.startDate ?? ""),
          endDate: new FormControl(entry.endDate ?? ""),
          description: new FormControl((entry.description ?? []).join("\n"))
        }));
      });
      this.educations = this.educationArray.controls;
    });
  }
  static \u0275fac = function ResumesCreate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumesCreate)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumesCreate, selectors: [["app-resumes-create"]], inputs: { mode: "mode", resumeId: "resumeId", templateId: "templateId", plan: "plan" }, outputs: { changeTemplate: "changeTemplate" }, features: [\u0275\u0275NgOnChangesFeature], decls: 81, vars: 27, consts: [[1, "resumes-create-wrapper"], [1, "form-container"], [1, "header"], ["mat-icon-button", "", 1, "back-btn", 3, "click"], [1, "header-content"], [1, "title"], [1, "subtitle"], ["mode", "determinate", 1, "progress-bar", 3, "value"], [1, "form-content", 3, "formGroup"], [1, "form-section"], [1, "section-header", 3, "click"], [1, "section-title"], [1, "section-subtitle"], [1, "section-content"], [1, "section-header-content"], [1, "count"], ["type", "button", "mat-icon-button", "", 1, "add-btn", 3, "click"], ["formArrayName", "experience", 1, "section-content"], ["formArrayName", "education", 1, "section-content"], [1, "form-actions"], ["type", "button", "mat-stroked-button", ""], ["mode", "indeterminate"], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "disabled"], [1, "preview-panel"], [1, "preview-header"], [1, "preview-title"], [1, "preview-subtitle"], [1, "template-info"], [1, "template-label"], [1, "template-name"], ["type", "button", 1, "change-template", 3, "click"], [1, "preview-content"], [3, "resume", "templateId"], ["formGroupName", "personalInfo"], [1, "form-row"], [1, "form-field", "full-width"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "fullName", "placeholder", "John Smith"], [1, "form-field"], ["matInput", "", "formControlName", "jobTitle", "placeholder", "Senior Software Engineer"], ["formGroupName", "contact"], ["matInput", "", "formControlName", "email", "placeholder", "john@email.com"], ["matInput", "", "formControlName", "phone", "placeholder", "+1 (555) 123-4567"], ["matInput", "", "formControlName", "location", "placeholder", "San Francisco, CA"], ["matInput", "", "formControlName", "summary", "placeholder", "Brief professional summary...", "rows", "3"], ["label", "Generate with AI", 1, "field-generate-btn", 3, "generate", "disabled", "compact"], [1, "summary-ai-note"], [1, "experience-item", 3, "formGroupName"], ["matInput", "", "formControlName", "company", "placeholder", "Company name"], ["matInput", "", "formControlName", "role", "placeholder", "Job title"], ["matInput", "", "type", "month", "formControlName", "startDate"], ["matInput", "", "type", "month", "formControlName", "endDate"], ["matInput", "", "formControlName", "description", "placeholder", "Describe your responsibilities and achievements in this role", "rows", "4"], ["label", "Generate with AI", 1, "field-generate-btn", 3, "disabled", "compact"], ["type", "button", "mat-icon-button", "", 1, "remove-btn", 3, "click"], [1, "education-item", 3, "formGroupName"], ["matInput", "", "formControlName", "school", "placeholder", "School name"], ["matInput", "", "formControlName", "degree", "placeholder", "Bachelor's/Master's"], ["matInput", "", "formControlName", "description", "placeholder", "Honors, activities, or focus areas", "rows", "3"], ["matInput", "", "formControlName", "skills", "placeholder", "e.g., JavaScript, Python, Project Management", "rows", "3"], ["type", "button", "mat-stroked-button", "", 3, "click"], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "click", "disabled"]], template: function ResumesCreate_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function ResumesCreate_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(4, "mat-icon");
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "h1", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, ResumesCreate_Conditional_11_Template, 1, 1, "mat-progress-bar", 7);
      \u0275\u0275elementStart(12, "form", 8)(13, "div", 9)(14, "div", 10);
      \u0275\u0275listener("click", function ResumesCreate_Template_div_click_14_listener() {
        return ctx.toggleSection("personal");
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "expand_more");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div")(18, "h2", 11);
      \u0275\u0275text(19, "Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 12);
      \u0275\u0275text(21, "Complete personal information to improve your score");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(22, ResumesCreate_Conditional_22_Template, 40, 2, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 9)(24, "div", 10);
      \u0275\u0275listener("click", function ResumesCreate_Template_div_click_24_listener() {
        return ctx.toggleSection("experience");
      });
      \u0275\u0275elementStart(25, "mat-icon");
      \u0275\u0275text(26, "expand_more");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 14)(28, "h2", 11);
      \u0275\u0275text(29, "Work Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 15);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "button", 16);
      \u0275\u0275listener("click", function ResumesCreate_Template_button_click_32_listener($event) {
        ctx.addWorkExperience();
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(33, "mat-icon");
      \u0275\u0275text(34, "add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(35, ResumesCreate_Conditional_35_Template, 3, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 9)(37, "div", 10);
      \u0275\u0275listener("click", function ResumesCreate_Template_div_click_37_listener() {
        return ctx.toggleSection("education");
      });
      \u0275\u0275elementStart(38, "mat-icon");
      \u0275\u0275text(39, "expand_more");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 14)(41, "h2", 11);
      \u0275\u0275text(42, "Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 15);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "button", 16);
      \u0275\u0275listener("click", function ResumesCreate_Template_button_click_45_listener($event) {
        ctx.addEducation();
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(46, "mat-icon");
      \u0275\u0275text(47, "add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(48, ResumesCreate_Conditional_48_Template, 3, 0, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 9)(50, "div", 10);
      \u0275\u0275listener("click", function ResumesCreate_Template_div_click_50_listener() {
        return ctx.toggleSection("skills");
      });
      \u0275\u0275elementStart(51, "mat-icon");
      \u0275\u0275text(52, "expand_more");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 14)(54, "h2", 11);
      \u0275\u0275text(55, "Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 12);
      \u0275\u0275text(57, "Technical and soft skills");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(58, ResumesCreate_Conditional_58_Template, 7, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 19);
      \u0275\u0275conditionalCreate(60, ResumesCreate_Conditional_60_Template, 2, 0, "button", 20);
      \u0275\u0275conditionalCreate(61, ResumesCreate_Conditional_61_Template, 1, 0, "mat-progress-bar", 21);
      \u0275\u0275pipe(62, "async");
      \u0275\u0275conditionalBranchCreate(63, ResumesCreate_Conditional_63_Template, 3, 4, "button", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 23)(65, "div", 24)(66, "div")(67, "h2", 25);
      \u0275\u0275text(68, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p", 26);
      \u0275\u0275text(70, "Live as you type");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 27)(72, "div", 28);
      \u0275\u0275text(73, "Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 29);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "button", 30);
      \u0275\u0275listener("click", function ResumesCreate_Template_button_click_76_listener() {
        return ctx.requestTemplateChange();
      });
      \u0275\u0275text(77, "Change template");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 31);
      \u0275\u0275element(79, "app-resume-preview", 32);
      \u0275\u0275pipe(80, "async");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Resume" : "Create New Resume");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update details and save changes" : "Fill in your details to get started", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isEditMode ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.resumeGroup);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("rotated", ctx.showPersonal);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.showPersonal ? 22 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("rotated", ctx.showWorkExperience);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.workExperiences.length, " positions");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showWorkExperience ? 35 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("rotated", ctx.showEducation);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.educations.length, " degrees");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showEducation ? 48 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("rotated", ctx.showSkills);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.showSkills ? 58 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isEditMode ? 60 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(\u0275\u0275pipeBind1(62, 23, ctx.isSaving$) ? 61 : 63);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.getTemplateLabel(ctx.previewTemplate));
      \u0275\u0275advance(4);
      \u0275\u0275property("resume", \u0275\u0275pipeBind1(80, 25, ctx.preview$) || void 0)("templateId", ctx.previewTemplate);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    FormArrayName,
    MatButton,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatInputModule,
    MatInput,
    MatIconModule,
    MatIcon,
    MatProgressBarModule,
    MatProgressBar,
    GenerateBtn,
    ResumePreview,
    AsyncPipe
  ], styles: ['\n\n.resumes-create-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n  background: #f4f6f9;\n  min-height: 100vh;\n  color: var(--text);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  width: 60%;\n  background: #f7f8fa;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: none;\n  border: 1px solid #dbe3ef;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  background: var(--surface-muted);\n  border-radius: 10px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n  background: #e6ebf4;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .generate-ai-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  border-radius: 100px;\n  padding: 6px 16px;\n  font-weight: 600;\n  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.18);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  height: 4px;\n  border-radius: 999px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #f8fafc;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 14px;\n  background: #f8fafc;\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:hover {\n  background: #f3f6fa;\n  box-shadow: inset 0 0 0 1px #dbe3ef;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  transition: transform 0.3s, color 0.2s;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   mat-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-header-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-header-content[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  display: none;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.25;\n  margin: 0;\n  color: #1d2430;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  color: #4a66e9;\n  background: #eaf0ff;\n  border-radius: 10px;\n  width: auto;\n  min-width: 62px;\n  height: 30px;\n  padding: 0 10px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]::after {\n  content: "Add";\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]:hover {\n  color: #3d58dd;\n  background: #dde8ff;\n  transform: none;\n  box-shadow: none;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  padding: 12px 12px 14px;\n  border-top: 1px solid #dbe3ef;\n  background: #f8fafc;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .form-row.full-width[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-field.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  --mdc-outlined-text-field-container-shape: 12px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-generate-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: inline-flex;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .summary-ai-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 6px 0 0;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%], \n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%] {\n  padding: 12px 10px 8px;\n  background: #f8fafc;\n  border-radius: 10px;\n  margin-bottom: 8px;\n  position: relative;\n  border: 1px solid #dbe3ef;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]:last-child, \n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%], \n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  color: #7b8698;\n  background: #ffffff;\n  border-radius: 999px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:hover, \n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:hover {\n  color: #ff4444;\n  background: #ffecec;\n  transform: none;\n  box-shadow: none;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:active, \n.resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: none;\n  border: 1px solid #dbe3ef;\n  height: fit-content;\n  position: sticky;\n  top: 20px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .preview-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .preview-subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .template-info[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 160px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .template-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .template-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .change-template[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #2563eb;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 999px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .change-template[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.1);\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .template-toggle[_ngcontent-%COMP%] {\n  background: var(--surface-muted);\n  padding: 4px;\n  border-radius: 999px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .template-toggle[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 12px;\n}\n.resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 520px;\n  overflow: auto;\n}\nmat-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  padding: 0 2px;\n}\nmat-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\nmat-form-field[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\nmat-form-field[_ngcontent-%COMP%]   .mdc-notched-outline__leading[_ngcontent-%COMP%], \nmat-form-field[_ngcontent-%COMP%]   .mdc-notched-outline__notch[_ngcontent-%COMP%], \nmat-form-field[_ngcontent-%COMP%]   .mdc-notched-outline__trailing[_ngcontent-%COMP%] {\n  border-color: #d6dfeb;\n}\nmat-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-focus-overlay[_ngcontent-%COMP%] {\n  background: transparent;\n}\nmat-form-field[_ngcontent-%COMP%]:focus-within   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: none;\n}\nmat-form-field[_ngcontent-%COMP%]:focus-within   .mdc-notched-outline__leading[_ngcontent-%COMP%], \nmat-form-field[_ngcontent-%COMP%]:focus-within   .mdc-notched-outline__notch[_ngcontent-%COMP%], \nmat-form-field[_ngcontent-%COMP%]:focus-within   .mdc-notched-outline__trailing[_ngcontent-%COMP%] {\n  border-color: #8ba2c8;\n}\nmat-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 96px;\n  resize: vertical;\n  width: 100%;\n}\n@media (max-width: 1400px) {\n  .resumes-create-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%] {\n    position: static;\n    flex: none;\n  }\n}\n@media (max-width: 768px) {\n  .resumes-create-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n    gap: 18px;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px 18px;\n    max-height: none;\n    overflow: visible;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .generate-ai-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    align-items: flex-start;\n    gap: 10px 14px;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    min-width: 0;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%] {\n    padding: 20px 18px 24px;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .template-info[_ngcontent-%COMP%] {\n    text-align: left;\n    min-width: auto;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .change-template[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .template-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n    justify-content: space-between;\n  }\n  .resumes-create-wrapper[_ngcontent-%COMP%]   .preview-panel[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .template-toggle[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=resumes-create.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumesCreate, [{
    type: Component,
    args: [{ selector: "app-resumes-create", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButton,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatProgressBarModule,
      GenerateBtn,
      ResumePreview
    ], template: `<div class="resumes-create-wrapper">\r
  <div class="form-container">\r
    <!-- Header -->\r
    <div class="header">\r
      <button mat-icon-button class="back-btn" (click)="goBack()">\r
        <mat-icon>arrow_back</mat-icon>\r
      </button>\r
      <div class="header-content">\r
        <h1 class="title">{{ isEditMode ? 'Edit Resume' : 'Create New Resume' }}</h1>\r
        <p class="subtitle">\r
          {{\r
            isEditMode ? 'Update details and save changes' : 'Fill in your details to get started'\r
          }}\r
        </p>\r
      </div>\r
    </div>\r
\r
    <!-- Progress Bar -->\r
    @if (!isEditMode) {\r
      <mat-progress-bar\r
        mode="determinate"\r
        [value]="progressPercent"\r
        class="progress-bar"\r
      ></mat-progress-bar>\r
    }\r
\r
    <!-- Form -->\r
    <form [formGroup]="resumeGroup" class="form-content">\r
      <!-- Personal Information Section -->\r
      <div class="form-section">\r
        <div class="section-header" (click)="toggleSection('personal')">\r
          <mat-icon [class.rotated]="showPersonal">expand_more</mat-icon>\r
          <div>\r
            <h2 class="section-title">Personal Information</h2>\r
            <p class="section-subtitle">Complete personal information to improve your score</p>\r
          </div>\r
        </div>\r
\r
        @if (showPersonal) {\r
          <div class="section-content">\r
            <div formGroupName="personalInfo">\r
              <div class="form-row">\r
                <div class="form-field full-width">\r
                  <mat-form-field appearance="outline" class="full-width">\r
                    <mat-label>Full Name*</mat-label>\r
                    <input matInput formControlName="fullName" placeholder="John Smith" />\r
                  </mat-form-field>\r
                </div>\r
              </div>\r
\r
              <div class="form-row">\r
                <div class="form-field">\r
                  <mat-form-field appearance="outline" class="full-width">\r
                    <mat-label>Job Title</mat-label>\r
                    <input\r
                      matInput\r
                      formControlName="jobTitle"\r
                      placeholder="Senior Software Engineer"\r
                    />\r
                  </mat-form-field>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div formGroupName="contact">\r
              <div class="form-row">\r
                <div class="form-field">\r
                  <mat-form-field appearance="outline" class="full-width">\r
                    <mat-label>Email*</mat-label>\r
                    <input matInput formControlName="email" placeholder="john@email.com" />\r
                  </mat-form-field>\r
                </div>\r
                <div class="form-field">\r
                  <mat-form-field appearance="outline" class="full-width">\r
                    <mat-label>Phone</mat-label>\r
                    <input matInput formControlName="phone" placeholder="+1 (555) 123-4567" />\r
                  </mat-form-field>\r
                </div>\r
              </div>\r
\r
              <div class="form-row">\r
                <div class="form-field">\r
                  <mat-form-field appearance="outline" class="full-width">\r
                    <mat-label>Location</mat-label>\r
                    <input matInput formControlName="location" placeholder="San Francisco, CA" />\r
                  </mat-form-field>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="form-row">\r
              <div class="form-field full-width">\r
                <mat-form-field appearance="outline" class="full-width">\r
                  <mat-label>Professional Summary</mat-label>\r
                  <textarea\r
                    matInput\r
                    formControlName="summary"\r
                    placeholder="Brief professional summary..."\r
                    rows="3"\r
                  ></textarea>\r
                  @if (!isEditMode) {\r
                    <mat-hint>AI uses only the info you provided. No invented details.</mat-hint>\r
                  }\r
                </mat-form-field>\r
                @if (!isEditMode) {\r
                  <app-generate-btn\r
                    class="field-generate-btn"\r
                    [disabled]="!canGenerateSummary() || isGenerating"\r
                    (generate)="generateSummaryWithAI()"\r
                    label="Generate with AI"\r
                    [compact]="true"\r
                  ></app-generate-btn>\r
                  @if (!canGenerateSummary()) {\r
                    <p class="summary-ai-note">\r
                      Add your full name, job title, and skills before generating a summary.\r
                    </p>\r
                  }\r
                }\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Work Experience Section -->\r
      <div class="form-section">\r
        <div class="section-header" (click)="toggleSection('experience')">\r
          <mat-icon [class.rotated]="showWorkExperience">expand_more</mat-icon>\r
          <div class="section-header-content">\r
            <h2 class="section-title">Work Experience</h2>\r
            <span class="count">{{ workExperiences.length }} positions</span>\r
          </div>\r
          <button\r
            type="button"\r
            mat-icon-button\r
            class="add-btn"\r
            (click)="addWorkExperience(); $event.stopPropagation()"\r
          >\r
            <mat-icon>add</mat-icon>\r
          </button>\r
        </div>\r
\r
        @if (showWorkExperience) {\r
          <div class="section-content" formArrayName="experience">\r
            @for (exp of workExperiences; let i = $index; track i) {\r
              <div class="experience-item" [formGroupName]="i">\r
                <div class="form-row">\r
                  <div class="form-field">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>Company</mat-label>\r
                      <input matInput formControlName="company" placeholder="Company name" />\r
                    </mat-form-field>\r
                  </div>\r
                  <div class="form-field">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>Role</mat-label>\r
                      <input matInput formControlName="role" placeholder="Job title" />\r
                    </mat-form-field>\r
                  </div>\r
                </div>\r
                <div class="form-row">\r
                  <div class="form-field">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>Start Date</mat-label>\r
                      <input matInput type="month" formControlName="startDate" />\r
                    </mat-form-field>\r
                  </div>\r
                  <div class="form-field">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>End Date</mat-label>\r
                      <input matInput type="month" formControlName="endDate" />\r
                    </mat-form-field>\r
                  </div>\r
                </div>\r
                <div class="form-row">\r
                  <div class="form-field full-width">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>Responsibilities & Achievements</mat-label>\r
                      <textarea\r
                        matInput\r
                        formControlName="description"\r
                        placeholder="Describe your responsibilities and achievements in this role"\r
                        rows="4"\r
                      ></textarea>\r
                    </mat-form-field>\r
                    @if (!isEditMode) {\r
                      <app-generate-btn\r
                        class="field-generate-btn"\r
                        [disabled]="!canGenerateExperience(i) || isGenerating"\r
                        (generate)="generateExperienceWithAI(i)"\r
                        label="Generate with AI"\r
                        [compact]="true"\r
                      ></app-generate-btn>\r
                    }\r
                  </div>\r
                </div>\r
                <button\r
                  type="button"\r
                  mat-icon-button\r
                  class="remove-btn"\r
                  (click)="removeWorkExperience(i)"\r
                >\r
                  <mat-icon>close</mat-icon>\r
                </button>\r
              </div>\r
            }\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Education Section -->\r
      <div class="form-section">\r
        <div class="section-header" (click)="toggleSection('education')">\r
          <mat-icon [class.rotated]="showEducation">expand_more</mat-icon>\r
          <div class="section-header-content">\r
            <h2 class="section-title">Education</h2>\r
            <span class="count">{{ educations.length }} degrees</span>\r
          </div>\r
          <button\r
            type="button"\r
            mat-icon-button\r
            class="add-btn"\r
            (click)="addEducation(); $event.stopPropagation()"\r
          >\r
            <mat-icon>add</mat-icon>\r
          </button>\r
        </div>\r
\r
        @if (showEducation) {\r
          <div class="section-content" formArrayName="education">\r
            @for (edu of educations; let i = $index; track i) {\r
              <div class="education-item" [formGroupName]="i">\r
                <div class="form-row">\r
                  <div class="form-field">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>School/University</mat-label>\r
                      <input matInput formControlName="school" placeholder="School name" />\r
                    </mat-form-field>\r
                  </div>\r
                  <div class="form-field">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>Degree</mat-label>\r
                      <input matInput formControlName="degree" placeholder="Bachelor's/Master's" />\r
                    </mat-form-field>\r
                  </div>\r
                </div>\r
                <div class="form-row">\r
                  <div class="form-field">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>Start Date</mat-label>\r
                      <input matInput type="month" formControlName="startDate" />\r
                    </mat-form-field>\r
                  </div>\r
                  <div class="form-field">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>End Date</mat-label>\r
                      <input matInput type="month" formControlName="endDate" />\r
                    </mat-form-field>\r
                  </div>\r
                </div>\r
                <div class="form-row">\r
                  <div class="form-field full-width">\r
                    <mat-form-field appearance="outline" class="full-width">\r
                      <mat-label>Notes</mat-label>\r
                      <textarea\r
                        matInput\r
                        formControlName="description"\r
                        placeholder="Honors, activities, or focus areas"\r
                        rows="3"\r
                      ></textarea>\r
                    </mat-form-field>\r
                    @if (!isEditMode) {\r
                      <app-generate-btn\r
                        class="field-generate-btn"\r
                        [disabled]="!canGenerateEducation(i) || isGenerating"\r
                        (generate)="generateEducationWithAI(i)"\r
                        label="Generate with AI"\r
                        [compact]="true"\r
                      ></app-generate-btn>\r
                    }\r
                  </div>\r
                </div>\r
                <button\r
                  type="button"\r
                  mat-icon-button\r
                  class="remove-btn"\r
                  (click)="removeEducation(i)"\r
                >\r
                  <mat-icon>close</mat-icon>\r
                </button>\r
              </div>\r
            }\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Skills Section -->\r
      <div class="form-section">\r
        <div class="section-header" (click)="toggleSection('skills')">\r
          <mat-icon [class.rotated]="showSkills">expand_more</mat-icon>\r
          <div class="section-header-content">\r
            <h2 class="section-title">Skills</h2>\r
            <span class="section-subtitle">Technical and soft skills</span>\r
          </div>\r
        </div>\r
\r
        @if (showSkills) {\r
          <div class="section-content">\r
            <div class="form-row">\r
              <div class="form-field full-width">\r
                <mat-form-field appearance="outline" class="full-width">\r
                  <mat-label>Skills*</mat-label>\r
                  <textarea\r
                    matInput\r
                    formControlName="skills"\r
                    placeholder="e.g., JavaScript, Python, Project Management"\r
                    rows="3"\r
                  ></textarea>\r
                </mat-form-field>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
\r
      <div class="form-actions">\r
        @if (isEditMode) {\r
          <button type="button" mat-stroked-button (click)="exportToPdf()">Export to PDF</button>\r
        }\r
        @if (isSaving$ | async) {\r
          <mat-progress-bar mode="indeterminate"></mat-progress-bar>\r
        } @else {\r
          <button\r
            type="button"\r
            mat-flat-button\r
            color="primary"\r
            (click)="saveResume()"\r
            [disabled]="isSaving$ | async"\r
          >\r
            {{ isEditMode ? 'Save Changes' : 'Save Resume' }}\r
          </button>\r
        }\r
      </div>\r
    </form>\r
  </div>\r
\r
  <!-- Preview Panel -->\r
  <div class="preview-panel">\r
    <div class="preview-header">\r
      <div>\r
        <h2 class="preview-title">Preview</h2>\r
        <p class="preview-subtitle">Live as you type</p>\r
      </div>\r
      <div class="template-info">\r
        <div class="template-label">Template</div>\r
        <div class="template-name">{{ getTemplateLabel(previewTemplate) }}</div>\r
      </div>\r
      <button type="button" class="change-template" (click)="requestTemplateChange()">Change template</button>\r
    </div>\r
    <div class="preview-content">\r
      <app-resume-preview\r
        [resume]="(preview$ | async) || undefined"\r
        [templateId]="previewTemplate"\r
      ></app-resume-preview>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
\r
`, styles: ['/* src/app/pages/application/resumes/resumes-create/resumes-create.scss */\n.resumes-create-wrapper {\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n  background: #f4f6f9;\n  min-height: 100vh;\n  color: var(--text);\n}\n.resumes-create-wrapper .form-container {\n  width: 60%;\n  background: #f7f8fa;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: none;\n  border: 1px solid #dbe3ef;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.resumes-create-wrapper .form-container .header {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.resumes-create-wrapper .form-container .header .back-btn {\n  color: var(--text-muted);\n  background: var(--surface-muted);\n  border-radius: 10px;\n}\n.resumes-create-wrapper .form-container .header .back-btn:hover {\n  color: var(--text);\n  background: #e6ebf4;\n}\n.resumes-create-wrapper .form-container .header .header-content {\n  flex: 1;\n}\n.resumes-create-wrapper .form-container .header .header-content .title {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text);\n}\n.resumes-create-wrapper .form-container .header .header-content .subtitle {\n  margin: 4px 0 0;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.resumes-create-wrapper .form-container .header .generate-ai-btn {\n  white-space: nowrap;\n  border-radius: 100px;\n  padding: 6px 16px;\n  font-weight: 600;\n  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.18);\n}\n.resumes-create-wrapper .form-container .progress-bar {\n  margin-bottom: 16px;\n  height: 4px;\n  border-radius: 999px;\n}\n.resumes-create-wrapper .form-container .form-content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.resumes-create-wrapper .form-container .form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.resumes-create-wrapper .form-container .form-section {\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #f8fafc;\n}\n.resumes-create-wrapper .form-container .form-section .section-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 14px;\n  background: #f8fafc;\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.resumes-create-wrapper .form-container .form-section .section-header:hover {\n  background: #f3f6fa;\n  box-shadow: inset 0 0 0 1px #dbe3ef;\n}\n.resumes-create-wrapper .form-container .form-section .section-header mat-icon {\n  color: var(--text-muted);\n  transition: transform 0.3s, color 0.2s;\n}\n.resumes-create-wrapper .form-container .form-section .section-header mat-icon.rotated {\n  transform: rotate(180deg);\n}\n.resumes-create-wrapper .form-container .form-section .section-header .section-header-content {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.resumes-create-wrapper .form-container .form-section .section-header .section-header-content .count {\n  display: none;\n}\n.resumes-create-wrapper .form-container .form-section .section-header .section-title {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.25;\n  margin: 0;\n  color: #1d2430;\n}\n.resumes-create-wrapper .form-container .form-section .section-header .section-subtitle {\n  display: none;\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.resumes-create-wrapper .form-container .form-section .section-header .add-btn {\n  color: #4a66e9;\n  background: #eaf0ff;\n  border-radius: 10px;\n  width: auto;\n  min-width: 62px;\n  height: 30px;\n  padding: 0 10px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.resumes-create-wrapper .form-container .form-section .section-header .add-btn .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.resumes-create-wrapper .form-container .form-section .section-header .add-btn::after {\n  content: "Add";\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1;\n}\n.resumes-create-wrapper .form-container .form-section .section-header .add-btn:hover {\n  color: #3d58dd;\n  background: #dde8ff;\n  transform: none;\n  box-shadow: none;\n}\n.resumes-create-wrapper .form-container .form-section .section-header .add-btn:active {\n  transform: translateY(1px);\n}\n.resumes-create-wrapper .form-container .form-section .section-content {\n  padding: 12px 12px 14px;\n  border-top: 1px solid #dbe3ef;\n  background: #f8fafc;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .form-row:last-child {\n  margin-bottom: 0;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .form-row.full-width {\n  grid-template-columns: 1fr;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .form-row .form-field.full-width {\n  grid-column: 1/-1;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .form-row .form-field mat-form-field {\n  width: 100%;\n  --mdc-outlined-text-field-container-shape: 12px;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .form-row .form-field .field-generate-btn {\n  margin-top: 8px;\n  display: inline-flex;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .form-row .form-field .summary-ai-note {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 6px 0 0;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .experience-item,\n.resumes-create-wrapper .form-container .form-section .section-content .education-item {\n  padding: 12px 10px 8px;\n  background: #f8fafc;\n  border-radius: 10px;\n  margin-bottom: 8px;\n  position: relative;\n  border: 1px solid #dbe3ef;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .experience-item:last-child,\n.resumes-create-wrapper .form-container .form-section .section-content .education-item:last-child {\n  margin-bottom: 0;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .experience-item .remove-btn,\n.resumes-create-wrapper .form-container .form-section .section-content .education-item .remove-btn {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  color: #7b8698;\n  background: #ffffff;\n  border-radius: 999px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .experience-item .remove-btn:hover,\n.resumes-create-wrapper .form-container .form-section .section-content .education-item .remove-btn:hover {\n  color: #ff4444;\n  background: #ffecec;\n  transform: none;\n  box-shadow: none;\n}\n.resumes-create-wrapper .form-container .form-section .section-content .experience-item .remove-btn:active,\n.resumes-create-wrapper .form-container .form-section .section-content .education-item .remove-btn:active {\n  transform: translateY(1px);\n}\n.resumes-create-wrapper .preview-panel {\n  flex: 1;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: none;\n  border: 1px solid #dbe3ef;\n  height: fit-content;\n  position: sticky;\n  top: 20px;\n}\n.resumes-create-wrapper .preview-panel .preview-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.resumes-create-wrapper .preview-panel .preview-header .preview-title {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text);\n}\n.resumes-create-wrapper .preview-panel .preview-header .preview-subtitle {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.resumes-create-wrapper .preview-panel .preview-header .template-info {\n  text-align: right;\n  min-width: 160px;\n}\n.resumes-create-wrapper .preview-panel .preview-header .template-label {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n}\n.resumes-create-wrapper .preview-panel .preview-header .template-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n}\n.resumes-create-wrapper .preview-panel .preview-header .change-template {\n  background: transparent;\n  border: none;\n  color: #2563eb;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 999px;\n}\n.resumes-create-wrapper .preview-panel .preview-header .change-template:hover {\n  background: rgba(37, 99, 235, 0.1);\n}\n.resumes-create-wrapper .preview-panel .preview-header .template-toggle {\n  background: var(--surface-muted);\n  padding: 4px;\n  border-radius: 999px;\n}\n.resumes-create-wrapper .preview-panel .preview-header .template-toggle mat-button-toggle {\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 12px;\n}\n.resumes-create-wrapper .preview-panel .preview-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 520px;\n  overflow: auto;\n}\nmat-form-field .mat-mdc-form-field-subscript-wrapper {\n  padding: 0 2px;\n}\nmat-form-field .mat-mdc-form-field-infix {\n  min-height: 44px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\nmat-form-field .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  border-radius: 10px;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\nmat-form-field .mdc-notched-outline__leading,\nmat-form-field .mdc-notched-outline__notch,\nmat-form-field .mdc-notched-outline__trailing {\n  border-color: #d6dfeb;\n}\nmat-form-field .mat-mdc-form-field-focus-overlay {\n  background: transparent;\n}\nmat-form-field:focus-within .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  box-shadow: none;\n}\nmat-form-field:focus-within .mdc-notched-outline__leading,\nmat-form-field:focus-within .mdc-notched-outline__notch,\nmat-form-field:focus-within .mdc-notched-outline__trailing {\n  border-color: #8ba2c8;\n}\nmat-form-field textarea {\n  min-height: 96px;\n  resize: vertical;\n  width: 100%;\n}\n@media (max-width: 1400px) {\n  .resumes-create-wrapper {\n    flex-direction: column;\n  }\n  .resumes-create-wrapper .form-container {\n    width: 100%;\n  }\n  .resumes-create-wrapper .preview-panel {\n    position: static;\n    flex: none;\n  }\n}\n@media (max-width: 768px) {\n  .resumes-create-wrapper {\n    padding: 16px;\n    gap: 18px;\n  }\n  .resumes-create-wrapper .form-container {\n    width: 100%;\n    padding: 20px 18px;\n    max-height: none;\n    overflow: visible;\n  }\n  .resumes-create-wrapper .form-container .header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .resumes-create-wrapper .form-container .header .header-content .title {\n    font-size: 22px;\n  }\n  .resumes-create-wrapper .form-container .header .generate-ai-btn {\n    width: 100%;\n  }\n  .resumes-create-wrapper .form-container .form-section .section-header {\n    flex-wrap: wrap;\n    align-items: flex-start;\n    gap: 10px 14px;\n  }\n  .resumes-create-wrapper .form-container .form-section .section-header .section-title {\n    font-size: 16px;\n  }\n  .resumes-create-wrapper .form-container .form-section .section-header > div {\n    flex: 1 1 auto;\n    min-width: 0;\n  }\n  .resumes-create-wrapper .form-container .form-section .section-content .form-row {\n    grid-template-columns: 1fr;\n  }\n  .resumes-create-wrapper .form-container .form-section .section-content .form-row .form-field {\n    grid-column: auto;\n  }\n  .resumes-create-wrapper .form-container .form-actions {\n    width: 100%;\n    flex-direction: column;\n  }\n  .resumes-create-wrapper .form-container .form-actions button {\n    width: 100%;\n  }\n  .resumes-create-wrapper .preview-panel {\n    padding: 20px 18px 24px;\n  }\n  .resumes-create-wrapper .preview-panel .preview-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .resumes-create-wrapper .preview-panel .preview-header .template-info {\n    text-align: left;\n    min-width: auto;\n  }\n  .resumes-create-wrapper .preview-panel .preview-header .change-template {\n    padding-left: 0;\n  }\n  .resumes-create-wrapper .preview-panel .preview-header .template-toggle {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n    justify-content: space-between;\n  }\n  .resumes-create-wrapper .preview-panel .preview-header .template-toggle mat-button-toggle {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=resumes-create.css.map */\n'] }]
  }], () => [], { mode: [{
    type: Input
  }], resumeId: [{
    type: Input
  }], templateId: [{
    type: Input
  }], plan: [{
    type: Input
  }], changeTemplate: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumesCreate, { className: "ResumesCreate", filePath: "src/app/pages/application/resumes/resumes-create/resumes-create.ts", lineNumber: 36 });
})();

export {
  ResumePreview,
  ResumesCreate
};
//# sourceMappingURL=chunk-2NJHEA7X.mjs.map
