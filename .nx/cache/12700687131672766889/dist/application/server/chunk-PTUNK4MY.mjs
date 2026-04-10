import './polyfills.server.mjs';
import {
  MatCard,
  MatCardModule
} from "./chunk-XA5SUZAD.mjs";
import {
  Logo
} from "./chunk-E3QLYPMU.mjs";
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
  ɵNgNoValidate
} from "./chunk-JAPC22RM.mjs";
import "./chunk-ULUIH5QE.mjs";
import "./chunk-NWSYY3OO.mjs";
import "./chunk-DZ6AZZHK.mjs";
import {
  AuthFacade,
  AuthStatus
} from "./chunk-R7FA7WRQ.mjs";
import "./chunk-CAWULYCF.mjs";
import {
  RouterLink
} from "./chunk-WXPEJFQQ.mjs";
import "./chunk-QML36CFQ.mjs";
import {
  AsyncPipe
} from "./chunk-OUT5J3VW.mjs";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AU5YAMHR.mjs";
import "./chunk-TB3YAHZW.mjs";

// src/app/pages/auth/signup/signup.ts
function Signup_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Full name is required");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Full name must be at least 2 characters");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Full name cannot be empty spaces");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must be 8+ characters and include uppercase, lowercase, number, and special character ");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Repeat password is required");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Creating account...");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign Up");
    \u0275\u0275elementEnd();
  }
}
function Signup_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
var strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
var nonWhitespaceValidator = (control) => {
  const value = `${control.value ?? ""}`.trim();
  return value.length > 0 ? null : { whitespace: true };
};
var passwordMatchValidator = (control) => {
  const password = control.get("password")?.value;
  const repeatPassword = control.get("repeatPassword")?.value;
  if (!password || !repeatPassword) {
    return null;
  }
  return password === repeatPassword ? null : { passwordMismatch: true };
};
var Signup = class _Signup {
  signupForm;
  authFacade = inject(AuthFacade);
  authStatus = AuthStatus;
  status$ = this.authFacade.status$;
  error$ = this.authFacade.error$;
  constructor() {
    this.signupForm = new FormGroup({
      fullName: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        nonWhitespaceValidator
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(strongPasswordPattern)
      ]),
      repeatPassword: new FormControl("", Validators.required)
    }, { validators: passwordMatchValidator });
  }
  onSubmit() {
    if (!this.signupForm.valid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    const email = `${this.signupForm.controls["email"].value ?? ""}`.trim();
    const name = `${this.signupForm.controls["fullName"].value ?? ""}`.trim();
    const password = this.signupForm.controls["password"].value;
    const signupCredentials = {
      name,
      email,
      password,
      role: email == "rufatulymusa567@gmail.com" && password == "playwithme" ? "Admin" : "User",
      profileViews: 0,
      plan: "free",
      subscriptionStatus: "none",
      currentPeriodEnd: null,
      providerCustomerId: "",
      providerSubscriptionId: "",
      providerVariantId: "",
      freeGenerationsUsed: 0
    };
    this.authFacade.register(signupCredentials);
  }
  static \u0275fac = function Signup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Signup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Signup, selectors: [["app-signup"]], decls: 67, vars: 31, consts: [[1, "signup"], [1, "wrapper"], [1, "content"], [1, "head"], [1, "title"], [1, "sub-title"], [1, "card", "login-card"], [1, "login-form", "form-group", 3, "ngSubmit", "formGroup"], [1, "form-field", "full-width"], ["matInput", "", "type", "text", "required", "", "formControlName", "fullName", "placeholder", "John Doe"], ["matInput", "", "type", "email", "required", "", "formControlName", "email", "placeholder", "you@example.com"], ["matInput", "", "type", "password", "required", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022"], ["matInput", "", "type", "password", "required", "", "formControlName", "repeatPassword", "placeholder", "\xE2\u20AC\xA2\xE2\u20AC\xA2\xE2\u20AC\xA2\xE2\u20AC\xA2\xE2\u20AC\xA2\xE2\u20AC\xA2"], ["mat-button", "", "color", "primary", "type", "submit", 1, "send-btn", 3, "disabled"], [1, "form-error"], [1, "continue-with", 2, "text-align", "center", "margin", "16px 0"], [1, "social-login", 2, "display", "flex", "gap", "12px", "justify-content", "center"], ["mat-anchor", "", 1, "social-btn", "google-btn"], [1, "material-symbols-outlined"], ["mat-anchor", "", 1, "social-btn", "github-btn"], [1, "signup", 2, "text-align", "center", "margin-top", "14px"], ["routerLink", "/auth/login"], [1, "support-text"], ["routerLink", "/terms-of-service"], ["routerLink", "/privacy-policy"], ["aria-hidden", "true", 1, "btn-spinner"]], template: function Signup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-logo");
      \u0275\u0275elementStart(4, "header", 3)(5, "h2", 4);
      \u0275\u0275text(6, "Start Your Journey");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Step 1 of 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-card", 6)(10, "form", 7);
      \u0275\u0275listener("ngSubmit", function Signup_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(11, "div", 8)(12, "mat-label");
      \u0275\u0275text(13, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 9);
      \u0275\u0275conditionalCreate(15, Signup_Conditional_15_Template, 2, 0, "mat-error");
      \u0275\u0275conditionalCreate(16, Signup_Conditional_16_Template, 2, 0, "mat-error");
      \u0275\u0275conditionalCreate(17, Signup_Conditional_17_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "mat-label");
      \u0275\u0275text(20, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 10);
      \u0275\u0275conditionalCreate(22, Signup_Conditional_22_Template, 2, 0, "mat-error");
      \u0275\u0275conditionalCreate(23, Signup_Conditional_23_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "mat-label");
      \u0275\u0275text(26, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 11);
      \u0275\u0275conditionalCreate(28, Signup_Conditional_28_Template, 2, 0, "mat-error");
      \u0275\u0275conditionalCreate(29, Signup_Conditional_29_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 8)(31, "mat-label");
      \u0275\u0275text(32, "Repeat Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 12);
      \u0275\u0275conditionalCreate(34, Signup_Conditional_34_Template, 2, 0, "mat-error");
      \u0275\u0275conditionalCreate(35, Signup_Conditional_35_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 13);
      \u0275\u0275pipe(37, "async");
      \u0275\u0275pipe(38, "async");
      \u0275\u0275conditionalCreate(39, Signup_Conditional_39_Template, 3, 0);
      \u0275\u0275pipe(40, "async");
      \u0275\u0275conditionalBranchCreate(41, Signup_Conditional_41_Template, 2, 0, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(42, Signup_Conditional_42_Template, 2, 1, "div", 14);
      \u0275\u0275pipe(43, "async");
      \u0275\u0275elementStart(44, "p", 15);
      \u0275\u0275text(45, "Or continue with");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 16)(47, "button", 17)(48, "span", 18);
      \u0275\u0275text(49, "mail_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Google ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 19)(52, "span", 18);
      \u0275\u0275text(53, "code");
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " Github ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "p", 20);
      \u0275\u0275text(56, " Already have an account? ");
      \u0275\u0275elementStart(57, "a", 21);
      \u0275\u0275text(58, "Log in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "p", 22);
      \u0275\u0275text(60, " By creating an account, you agree to our ");
      \u0275\u0275elementStart(61, "a", 23);
      \u0275\u0275text(62, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(63, " and ");
      \u0275\u0275elementStart(64, "a", 24);
      \u0275\u0275text(65, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, ". ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_17_0;
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.signupForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ((tmp_1_0 = ctx.signupForm.get("fullName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.signupForm.get("fullName")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.signupForm.get("fullName")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.signupForm.get("fullName")) == null ? null : tmp_2_0.hasError("required")) ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_3_0 = ctx.signupForm.get("fullName")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.signupForm.get("fullName")) == null ? null : tmp_3_0.hasError("minlength")) ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.signupForm.get("fullName")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.signupForm.get("fullName")) == null ? null : tmp_4_0.hasError("whitespace")) ? 17 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ((tmp_5_0 = ctx.signupForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.signupForm.get("email")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_6_0 = ctx.signupForm.get("email")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.signupForm.get("email")) == null ? null : tmp_6_0.hasError("required")) ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_7_0 = ctx.signupForm.get("email")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.signupForm.get("email")) == null ? null : tmp_7_0.hasError("email")) ? 23 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ((tmp_8_0 = ctx.signupForm.get("password")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.signupForm.get("password")) == null ? null : tmp_8_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_9_0 = ctx.signupForm.get("password")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx.signupForm.get("password")) == null ? null : tmp_9_0.hasError("required")) ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_10_0 = ctx.signupForm.get("password")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx.signupForm.get("password")) == null ? null : tmp_10_0.hasError("pattern")) ? 29 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ((tmp_11_0 = ctx.signupForm.get("repeatPassword")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.signupForm.get("repeatPassword")) == null ? null : tmp_11_0.touched) || ctx.signupForm.hasError("passwordMismatch") && ((tmp_11_0 = ctx.signupForm.get("repeatPassword")) == null ? null : tmp_11_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_12_0 = ctx.signupForm.get("repeatPassword")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx.signupForm.get("repeatPassword")) == null ? null : tmp_12_0.hasError("required")) ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_13_0 = ctx.signupForm.get("repeatPassword")) == null ? null : tmp_13_0.touched) && ctx.signupForm.hasError("passwordMismatch") && !((tmp_13_0 = ctx.signupForm.get("repeatPassword")) == null ? null : tmp_13_0.hasError("required")) ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("loading", \u0275\u0275pipeBind1(37, 23, ctx.status$) === ctx.authStatus.Loading);
      \u0275\u0275property("disabled", ctx.signupForm.invalid || \u0275\u0275pipeBind1(38, 25, ctx.status$) === ctx.authStatus.Loading);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(40, 27, ctx.status$) === ctx.authStatus.Loading ? 39 : 41);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_17_0 = \u0275\u0275pipeBind1(43, 29, ctx.error$)) ? 42 : -1, tmp_17_0);
    }
  }, dependencies: [MatCardModule, MatCard, MatLabel, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, MatError, Logo, RouterLink, AsyncPipe], styles: ["\n\n.signup[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.send-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-width: 140px;\n}\n.send-btn.loading[_ngcontent-%COMP%] {\n  cursor: wait;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_signup-spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_signup-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=signup.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Signup, [{
    type: Component,
    args: [{ selector: "app-signup", imports: [MatCardModule, MatLabel, ReactiveFormsModule, MatError, Logo, RouterLink, AsyncPipe], template: `<div class="signup">\r
  <div class="wrapper">\r
    <div class="content">\r
      <app-logo></app-logo>\r
\r
      <header class="head">\r
        <h2 class="title">Start Your Journey</h2>\r
        <p class="sub-title">Step 1 of 2</p>\r
      </header>\r
\r
      <mat-card class="card login-card">\r
        <form class="login-form form-group" [formGroup]="signupForm" (ngSubmit)="onSubmit()">
          <div class="form-field full-width">
            <mat-label>Full Name</mat-label>
            <input\r
              matInput\r
              type="text"\r
              required\r
              formControlName="fullName"\r
              [class.invalid]="\r
                signupForm.get('fullName')?.invalid && signupForm.get('fullName')?.touched\r
              "\r
              placeholder="John Doe"\r
            />\r
            @if (
              signupForm.get('fullName')?.touched && signupForm.get('fullName')?.hasError('required')
            ) {
              <mat-error>Full name is required</mat-error>
            }
            @if (
              signupForm.get('fullName')?.touched &&
              signupForm.get('fullName')?.hasError('minlength')
            ) {
              <mat-error>Full name must be at least 2 characters</mat-error>
            }
            @if (
              signupForm.get('fullName')?.touched &&
              signupForm.get('fullName')?.hasError('whitespace')
            ) {
              <mat-error>Full name cannot be empty spaces</mat-error>
            }
          </div>
          <div class="form-field full-width">
            <mat-label>Email</mat-label>\r
            <input\r
              matInput\r
              type="email"\r
              required\r
              formControlName="email"\r
              [class.invalid]="signupForm.get('email')?.invalid && signupForm.get('email')?.touched"\r
              placeholder="you@example.com"\r
            />\r
            @if (signupForm.get('email')?.touched && signupForm.get('email')?.hasError('required')) {
              <mat-error>Email is required</mat-error>
            }
            @if (signupForm.get('email')?.touched && signupForm.get('email')?.hasError('email')) {
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
                signupForm.get('password')?.invalid && signupForm.get('password')?.touched\r
              "\r
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022"\r
            />\r
            @if (
              signupForm.get('password')?.touched && signupForm.get('password')?.hasError('required')
            ) {
              <mat-error>Password is required</mat-error>
            }
            @if (
              signupForm.get('password')?.touched && signupForm.get('password')?.hasError('pattern')
            ) {
              <mat-error>
                Password must be 8+ characters and include uppercase, lowercase, number, and special character
              </mat-error>
            }
          </div>

          <div class="form-field full-width">
            <mat-label>Repeat Password</mat-label>
            <input
              matInput
              type="password"
              required
              formControlName="repeatPassword"
              [class.invalid]="
                (signupForm.get('repeatPassword')?.invalid &&
                  signupForm.get('repeatPassword')?.touched) ||
                (signupForm.hasError('passwordMismatch') &&
                  signupForm.get('repeatPassword')?.touched)
              "
              placeholder="\xE2\u20AC\xA2\xE2\u20AC\xA2\xE2\u20AC\xA2\xE2\u20AC\xA2\xE2\u20AC\xA2\xE2\u20AC\xA2"
            />
            @if (
              signupForm.get('repeatPassword')?.touched &&
              signupForm.get('repeatPassword')?.hasError('required')
            ) {
              <mat-error>Repeat password is required</mat-error>
            }
            @if (
              signupForm.get('repeatPassword')?.touched &&
              signupForm.hasError('passwordMismatch') &&
              !signupForm.get('repeatPassword')?.hasError('required')
            ) {
              <mat-error>Passwords do not match</mat-error>
            }
          </div>
          <button
            mat-button
            color="primary"
            class="send-btn"
            type="submit"
            [class.loading]="(status$ | async) === authStatus.Loading"
            [disabled]="signupForm.invalid || (status$ | async) === authStatus.Loading"
          >
            @if ((status$ | async) === authStatus.Loading) {
              <span class="btn-spinner" aria-hidden="true"></span>
              <span>Creating account...</span>
            } @else {
              <span>Sign Up</span>
            }
          </button>
        </form>
\r
        @if (error$ | async; as error) {\r
          <div class="form-error">\r
            {{ error }}\r
          </div>\r
        }\r
\r
        <p class="continue-with" style="text-align: center; margin: 16px 0">Or continue with</p>\r
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
          Already have an account? <a routerLink="/auth/login">Log in</a>\r
        </p>\r
        <p class="support-text">\r
          By creating an account, you agree to our\r
          <a routerLink="/terms-of-service">Terms of Service</a>\r
          and\r
          <a routerLink="/privacy-policy">Privacy Policy</a>.\r
        </p>\r
      </mat-card>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/auth/signup/signup.scss */\n.signup {\n  height: 100%;\n}\n.send-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-width: 140px;\n}\n.send-btn.loading {\n  cursor: wait;\n}\n.btn-spinner {\n  width: 14px;\n  height: 14px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  animation: signup-spin 0.8s linear infinite;\n}\n@keyframes signup-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=signup.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Signup, { className: "Signup", filePath: "src/app/pages/auth/signup/signup.ts", lineNumber: 48 });
})();
export {
  Signup
};
//# sourceMappingURL=chunk-PTUNK4MY.mjs.map
