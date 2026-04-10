import {
  MatAnchor
} from "./chunk-D7OOZPSD.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-JO7F5BXY.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-64RSDO76.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MatError,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵInternalFormsSharedModule,
  ɵNgNoValidate
} from "./chunk-6MBOXXHD.js";
import {
  Logo
} from "./chunk-XQA5OULQ.js";
import {
  MatIconModule
} from "./chunk-BL4FRIRM.js";
import "./chunk-SS6OVLD6.js";
import "./chunk-UIUNXKUC.js";
import {
  AuthFacade,
  AuthStatus
} from "./chunk-4TREYFXK.js";
import "./chunk-G2253GUZ.js";
import {
  RouterLink
} from "./chunk-4QIJMJL3.js";
import "./chunk-5DFGQV6T.js";
import {
  AsyncPipe
} from "./chunk-DNRS4C6J.js";
import {
  Component,
  Inject,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-OFJZEGRZ.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/auth/login/login.ts
function Login_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 22);
  }
}
function Login_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Login ");
  }
}
function Login_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Login_Conditional_23_Conditional_0_Template, 1, 0, "mat-progress-spinner", 22)(1, Login_Conditional_23_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx === ctx_r0.authStatus.Loading ? 0 : 1);
  }
}
var Login = class _Login {
  platformId;
  loginForm;
  authFacade = inject(AuthFacade);
  authStatus = AuthStatus;
  status$ = this.authFacade.status$;
  constructor(platformId) {
    this.platformId = platformId;
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    });
  }
  onSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const email = this.loginForm.get("email")?.value;
    const password = this.loginForm.get("password")?.value;
    this.authFacade.login({ email, password });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 48, vars: 11, consts: [[1, "login"], [1, "wrapper"], [1, "content"], [1, "head"], [1, "title"], [1, "sub-title"], [1, "card", "login-card"], [1, "login-form", "form-group", 3, "ngSubmit", "formGroup"], [1, "form-field", "full-width"], ["matInput", "", "type", "email", "required", "", "formControlName", "email", "placeholder", "you@example.com"], ["matInput", "", "type", "password", "required", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022"], ["mat-button", "", "color", "primary", "type", "submit", 1, "send-btn"], [1, "continue-with", 2, "text-align", "center", "margin", "16px 0"], [1, "social-login", 2, "display", "flex", "gap", "12px", "justify-content", "center"], ["mat-anchor", "", 1, "social-btn", "google-btn"], [1, "material-symbols-outlined"], ["mat-anchor", "", 1, "social-btn", "github-btn"], [1, "signup", 2, "text-align", "center", "margin-top", "14px"], ["routerLink", "/auth/signup"], [1, "support-text"], ["routerLink", "/terms-of-service"], ["routerLink", "/privacy-policy"], ["diameter", "24", "mode", "indeterminate", "color", "accent", 1, "custom-color-spinner"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-logo");
      \u0275\u0275elementStart(4, "header", 3)(5, "h2", 4);
      \u0275\u0275text(6, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Login to accelerate your career");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-card", 6)(10, "form", 7);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(11, "div", 8)(12, "mat-label");
      \u0275\u0275text(13, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 9);
      \u0275\u0275conditionalCreate(15, Login_Conditional_15_Template, 2, 0, "mat-error");
      \u0275\u0275conditionalCreate(16, Login_Conditional_16_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 8)(18, "mat-label");
      \u0275\u0275text(19, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 10);
      \u0275\u0275conditionalCreate(21, Login_Conditional_21_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 11);
      \u0275\u0275conditionalCreate(23, Login_Conditional_23_Template, 2, 1);
      \u0275\u0275pipe(24, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "p", 12);
      \u0275\u0275text(26, "Or continue with");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 13)(28, "button", 14)(29, "span", 15);
      \u0275\u0275text(30, "mail_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " Google ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 16)(33, "span", 15);
      \u0275\u0275text(34, "code");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " Github ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "p", 17);
      \u0275\u0275text(37, " Don't have an account? ");
      \u0275\u0275elementStart(38, "a", 18);
      \u0275\u0275text(39, "Sign up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p", 19);
      \u0275\u0275text(41, " By using this app, you agree to our ");
      \u0275\u0275elementStart(42, "a", 20);
      \u0275\u0275text(43, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " and ");
      \u0275\u0275elementStart(45, "a", 21);
      \u0275\u0275text(46, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, ". ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("required")) ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.hasError("email")) ? 16 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.hasError("required")) ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(24, 9, ctx.status$)) ? 23 : -1, tmp_6_0);
    }
  }, dependencies: [
    Logo,
    MatCardModule,
    MatCard,
    MatLabel,
    MatAnchor,
    MatIconModule,
    \u0275InternalFormsSharedModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatError,
    RouterLink,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    AsyncPipe
  ], styles: ["\n\n.login[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .custom-color-spinner[_ngcontent-%COMP%] {\n  --mat-progress-spinner-active-indicator-color: white;\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [
      Logo,
      MatCardModule,
      MatLabel,
      MatAnchor,
      MatIconModule,
      \u0275InternalFormsSharedModule,
      ReactiveFormsModule,
      MatError,
      RouterLink,
      AsyncPipe,
      MatProgressSpinnerModule
    ], template: `<div class="login">\r
  <div class="wrapper">\r
    <div class="content">\r
      <app-logo></app-logo>\r
\r
      <header class="head">\r
        <h2 class="title">Welcome Back</h2>\r
        <p class="sub-title">Login to accelerate your career</p>\r
      </header>\r
\r
      <mat-card class="card login-card">\r
        <form class="login-form form-group" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="form-field full-width">
            <mat-label>Email</mat-label>
            <input\r
              matInput\r
              type="email"\r
              required\r
              formControlName="email"\r
              [class.invalid]="loginForm.get('email')?.invalid && loginForm.get('email')?.touched"\r
              placeholder="you@example.com"\r
            />\r
            @if (loginForm.get('email')?.touched && loginForm.get('email')?.hasError('required')) {
              <mat-error>Email is required</mat-error>
            }
            @if (loginForm.get('email')?.touched && loginForm.get('email')?.hasError('email')) {
              <mat-error>Enter a valid email address</mat-error>
            }
          </div>
\r
          <div class="form-field full-width">\r
            <mat-label>Password</mat-label>\r
            <input\r
              matInput\r
              type="password"\r
              required\r
              formControlName="password"\r
              [class.invalid]="\r
                loginForm.get('password')?.invalid && loginForm.get('password')?.touched\r
              "\r
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022"\r
            />\r
            @if (
              loginForm.get('password')?.touched && loginForm.get('password')?.hasError('required')
            ) {
              <mat-error>Password is required</mat-error>
            }
          </div>

          <button mat-button color="primary" class="send-btn" type="submit">
            @if (status$ | async; as status) {
              @if (status === authStatus.Loading) {
                <mat-progress-spinner
                  diameter="24"
                  mode="indeterminate"
                  class="custom-color-spinner"
                  color="accent"
                ></mat-progress-spinner>
              } @else {
                Login
              }
            }
          </button>
        </form>

        <p class="continue-with" style="text-align: center; margin: 16px 0">Or continue with</p>
\r
        <div class="social-login" style="display: flex; gap: 12px; justify-content: center">\r
          <button mat-anchor class="social-btn google-btn">\r
            <span class="material-symbols-outlined">mail_outline</span>\r
            Google\r
          </button>\r
          <button mat-anchor class="social-btn github-btn">\r
            <span class="material-symbols-outlined">code</span> Github\r
          </button>\r
        </div>\r
\r
        <p class="signup" style="text-align: center; margin-top: 14px">\r
          Don't have an account? <a routerLink="/auth/signup">Sign up</a>\r
        </p>\r
        <p class="support-text">\r
          By using this app, you agree to our\r
          <a routerLink="/terms-of-service">Terms of Service</a>\r
          and\r
          <a routerLink="/privacy-policy">Privacy Policy</a>.\r
        </p>\r
      </mat-card>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/auth/login/login.scss */\n.login {\n  height: 100%;\n}\n.login .wrapper .custom-color-spinner {\n  --mat-progress-spinner-active-indicator-color: white;\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/pages/auth/login/login.ts", lineNumber: 39 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-D4BTPDXV.js.map
