import './polyfills.server.mjs';
import {
  RouterLink
} from "./chunk-WXPEJFQQ.mjs";
import "./chunk-QML36CFQ.mjs";
import "./chunk-OUT5J3VW.mjs";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-AU5YAMHR.mjs";
import "./chunk-TB3YAHZW.mjs";

// src/app/pages/landing/legal/privacy-policy/privacy-policy.ts
var PrivacyPolicy = class _PrivacyPolicy {
  static \u0275fac = function PrivacyPolicy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrivacyPolicy)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyPolicy, selectors: [["app-privacy-policy"]], decls: 58, vars: 0, consts: [[1, "legal-page"], [1, "legal-shell"], [1, "legal-header"], [1, "legal-card"], [1, "legal-actions"], ["routerLink", "/"], ["routerLink", "/terms-of-service"]], template: function PrivacyPolicy_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "h1");
      \u0275\u0275text(4, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Effective date: March 7, 2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "article", 3)(8, "h2");
      \u0275\u0275text(9, "1. Information We Collect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, " We collect account information you provide directly, including your name, email address, and profile data. We also store content you create in the app, such as resumes, cover letters, and application tracking records. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h2");
      \u0275\u0275text(13, "2. How We Use Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, "We use your information to provide and improve the service, including:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ul")(17, "li");
      \u0275\u0275text(18, "Authenticating your account and securing access.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li");
      \u0275\u0275text(20, "Saving and syncing your application data.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "li");
      \u0275\u0275text(22, "Generating AI-assisted resume and cover letter content.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li");
      \u0275\u0275text(24, "Processing paid subscriptions and billing status updates.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "h2");
      \u0275\u0275text(26, "3. Payments and Billing Data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, " Payments are processed by our payment provider. We do not store full payment card details on our servers. Subscription status and related identifiers are stored to manage plan access. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h2");
      \u0275\u0275text(30, "4. Data Sharing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, " We share information only with service providers required to operate the platform, such as Firebase (hosting, authentication, data storage), OpenAI (content generation), and our payment provider (billing). We do not sell your personal information. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h2");
      \u0275\u0275text(34, "5. Data Retention");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p");
      \u0275\u0275text(36, " We retain account and content data while your account is active and as needed for security, compliance, and service continuity. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h2");
      \u0275\u0275text(38, "6. Your Rights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, " You may request account data updates or deletion by contacting us through the contact form in the app. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h2");
      \u0275\u0275text(42, "7. Security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, " We apply reasonable technical and organizational safeguards, but no method of transmission or storage is guaranteed to be fully secure. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h2");
      \u0275\u0275text(46, "8. Policy Updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, " We may update this policy from time to time. Material changes will be reflected by updating the effective date on this page. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "h2");
      \u0275\u0275text(50, "9. Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, " For privacy questions, contact us from the app contact section. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 4)(54, "a", 5);
      \u0275\u0275text(55, "Back to Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "a", 6);
      \u0275\u0275text(57, "Read Terms of Service");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink], styles: ["\n\n.legal-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      180deg,\n      #f8faff 0%,\n      #f2f5fb 100%);\n  padding: 32px 16px 48px;\n}\n.legal-shell[_ngcontent-%COMP%] {\n  width: min(900px, 100%);\n  margin: 0 auto;\n}\n.legal-header[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.legal-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 2.2rem;\n  margin-bottom: 6px;\n  color: var(--text);\n}\n.legal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.legal-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  padding: 24px;\n}\n.legal-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 20px 0 8px;\n  color: var(--text);\n}\n.legal-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.legal-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.legal-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.6rem;\n}\n.legal-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 8px 20px;\n}\n.legal-actions[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.legal-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--mat-sys-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=privacy-policy.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrivacyPolicy, [{
    type: Component,
    args: [{ selector: "app-privacy-policy", imports: [RouterLink], template: '<section class="legal-page">\r\n  <div class="legal-shell">\r\n    <header class="legal-header">\r\n      <h1>Privacy Policy</h1>\r\n      <p>Effective date: March 7, 2026</p>\r\n    </header>\r\n\r\n    <article class="legal-card">\r\n      <h2>1. Information We Collect</h2>\r\n      <p>\r\n        We collect account information you provide directly, including your name, email address, and\r\n        profile data. We also store content you create in the app, such as resumes, cover letters, and\r\n        application tracking records.\r\n      </p>\r\n\r\n      <h2>2. How We Use Information</h2>\r\n      <p>We use your information to provide and improve the service, including:</p>\r\n      <ul>\r\n        <li>Authenticating your account and securing access.</li>\r\n        <li>Saving and syncing your application data.</li>\r\n        <li>Generating AI-assisted resume and cover letter content.</li>\r\n        <li>Processing paid subscriptions and billing status updates.</li>\r\n      </ul>\r\n\r\n      <h2>3. Payments and Billing Data</h2>\r\n      <p>\r\n        Payments are processed by our payment provider. We do not store full payment card details on our\r\n        servers.\r\n        Subscription status and related identifiers are stored to manage plan access.\r\n      </p>\r\n\r\n      <h2>4. Data Sharing</h2>\r\n      <p>\r\n        We share information only with service providers required to operate the platform, such as\r\n        Firebase (hosting, authentication, data storage), OpenAI (content generation), and our payment\r\n        provider (billing). We do not sell your personal information.\r\n      </p>\r\n\r\n      <h2>5. Data Retention</h2>\r\n      <p>\r\n        We retain account and content data while your account is active and as needed for security,\r\n        compliance, and service continuity.\r\n      </p>\r\n\r\n      <h2>6. Your Rights</h2>\r\n      <p>\r\n        You may request account data updates or deletion by contacting us through the contact form in the\r\n        app.\r\n      </p>\r\n\r\n      <h2>7. Security</h2>\r\n      <p>\r\n        We apply reasonable technical and organizational safeguards, but no method of transmission or\r\n        storage is guaranteed to be fully secure.\r\n      </p>\r\n\r\n      <h2>8. Policy Updates</h2>\r\n      <p>\r\n        We may update this policy from time to time. Material changes will be reflected by updating the\r\n        effective date on this page.\r\n      </p>\r\n\r\n      <h2>9. Contact</h2>\r\n      <p>\r\n        For privacy questions, contact us from the app contact section.\r\n      </p>\r\n    </article>\r\n\r\n    <div class="legal-actions">\r\n      <a routerLink="/">Back to Home</a>\r\n      <a routerLink="/terms-of-service">Read Terms of Service</a>\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ["/* src/app/pages/landing/legal/privacy-policy/privacy-policy.scss */\n.legal-page {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      180deg,\n      #f8faff 0%,\n      #f2f5fb 100%);\n  padding: 32px 16px 48px;\n}\n.legal-shell {\n  width: min(900px, 100%);\n  margin: 0 auto;\n}\n.legal-header {\n  margin-bottom: 18px;\n}\n.legal-header h1 {\n  font-size: 2rem;\n  line-height: 2.2rem;\n  margin-bottom: 6px;\n  color: var(--text);\n}\n.legal-header p {\n  color: var(--text-muted);\n}\n.legal-card {\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  padding: 24px;\n}\n.legal-card h2 {\n  font-size: 1.1rem;\n  margin: 20px 0 8px;\n  color: var(--text);\n}\n.legal-card h2:first-child {\n  margin-top: 0;\n}\n.legal-card p,\n.legal-card li {\n  color: var(--text-muted);\n  line-height: 1.6rem;\n}\n.legal-card ul {\n  margin: 8px 0 8px 20px;\n}\n.legal-actions {\n  margin-top: 16px;\n  display: flex;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.legal-actions a {\n  color: var(--mat-sys-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=privacy-policy.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyPolicy, { className: "PrivacyPolicy", filePath: "src/app/pages/landing/legal/privacy-policy/privacy-policy.ts", lineNumber: 10 });
})();
export {
  PrivacyPolicy
};
//# sourceMappingURL=chunk-V6R5GINO.mjs.map
