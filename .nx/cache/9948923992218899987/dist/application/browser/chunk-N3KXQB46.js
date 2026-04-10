import {
  MatAnchor
} from "./chunk-D7OOZPSD.js";
import {
  Logo
} from "./chunk-XQA5OULQ.js";
import {
  MatIcon
} from "./chunk-BL4FRIRM.js";
import "./chunk-SS6OVLD6.js";
import "./chunk-UIUNXKUC.js";
import {
  AuthFacade,
  AuthStatus
} from "./chunk-4TREYFXK.js";
import "./chunk-G2253GUZ.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-4QIJMJL3.js";
import "./chunk-5DFGQV6T.js";
import {
  AsyncPipe
} from "./chunk-DNRS4C6J.js";
import {
  Component,
  Observable,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OFJZEGRZ.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/logos/logo-short/logo-short.ts
var LogoShort = class _LogoShort {
  static \u0275fac = function LogoShort_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogoShort)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogoShort, selectors: [["app-logo-short"]], decls: 3, vars: 0, consts: [[1, "logo"], [1, "lightning"]], template: function LogoShort_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-icon", 1);
      \u0275\u0275text(2, "flash_on");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [MatIcon], styles: ["\n\n.logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n.logo[_ngcontent-%COMP%]   .lightning[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n@media (max-width: 576px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .logo[_ngcontent-%COMP%]   .lightning[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=logo-short.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoShort, [{
    type: Component,
    args: [{ selector: "app-logo-short", imports: [MatIcon], template: '<div class="logo">\r\n  <mat-icon class="lightning">flash_on</mat-icon>\r\n</div>\r\n', styles: ["/* src/app/pages/logos/logo-short/logo-short.scss */\n.logo {\n  width: 50px;\n  height: 50px;\n}\n.logo .lightning {\n  font-size: 30px;\n}\n@media (max-width: 576px) {\n  .logo {\n    width: 40px;\n    height: 40px;\n  }\n  .logo .lightning {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=logo-short.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogoShort, { className: "LogoShort", filePath: "src/app/pages/logos/logo-short/logo-short.ts", lineNumber: 10 });
})();

// src/app/pages/application/sidebar/sidebar.ts
var _c0 = () => ({ exact: true });
var _forTrack0 = ($index, $item) => $item.route;
function Sidebar_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 12);
    \u0275\u0275listener("click", function Sidebar_For_7_Template_li_click_0_listener() {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.liActive(link_r2.id);
      return \u0275\u0275resetView(ctx_r2.isSidebarOpen = false);
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r2.route)("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275attribute("id", link_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r2.label);
  }
}
var Sidebar = class _Sidebar {
  isSidebarOpen = false;
  authFacade = inject(AuthFacade);
  links = [
    { label: "Dashboard", route: "dashboard", icon: "grid_view", id: "dashboard" },
    { label: "Resumes", route: "resumes", icon: "description", id: "resumes" },
    { label: "Cover Letters", route: "cover-letter", icon: "mail_outline", id: "cover-letter" },
    { label: "Job Tracker", route: "job-tracker", icon: "work", id: "job-tracker" },
    { label: "Settings", route: "settings", icon: "settings" }
  ];
  liActive(id) {
    if (id != void 0) {
      document.querySelectorAll("a").forEach((link) => link.classList.remove("active"));
      document.getElementById(id)?.classList.add("active");
    }
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  logout() {
    this.authFacade.logout();
  }
  static \u0275fac = function Sidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Sidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sidebar, selectors: [["app-sidebar"]], decls: 15, vars: 2, consts: [[1, "sidebar"], [1, "sidebar-list"], [1, "logo-container"], [1, "app-logo"], [1, "app-logo-short"], [1, "navigation"], ["routerLinkActive", "active", 1, "navigation-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "sidebar-signout"], ["mat-button", "", 1, "signout-btn", 3, "click"], [1, "signout-btn-content"], [1, "material-symbols-outlined", "logout"], [1, "logout-text"], ["routerLinkActive", "active", 1, "navigation-item", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "material-symbols-outlined"], [1, "navigation-link"]], template: function Sidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-logo", 3)(4, "app-logo-short", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 5);
      \u0275\u0275repeaterCreate(6, Sidebar_For_7_Template, 5, 6, "li", 6, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
      \u0275\u0275listener("click", function Sidebar_Template_button_click_9_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12, " logout ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14, "Sign Out");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isSidebarOpen);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.links);
    }
  }, dependencies: [Logo, RouterLink, RouterLinkActive, LogoShort, MatAnchor], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 80px;\n  background-color: var(--surface-card);\n  height: 100%;\n  border-right: 1px solid var(--border);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: width 0.2s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 12px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%], \n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  flex: 1;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  cursor: pointer;\n  border-radius: 8px;\n  font-size: 1rem;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition: color 0.3s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #edf2ff;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  color: var(--mat-sys-primary) !important;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   .navigation-link[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%]   span.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-signout[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-signout[_ngcontent-%COMP%]   .signout-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  border-radius: 8px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-signout[_ngcontent-%COMP%]   .signout-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ffe5e5;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-signout[_ngcontent-%COMP%]   .signout-btn[_ngcontent-%COMP%]   .signout-btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  color: #dc2626;\n  font-size: 1rem;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-signout[_ngcontent-%COMP%]   .signout-btn[_ngcontent-%COMP%]   .logout-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n}\n.active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: var(--mat-sys-primary) !important;\n}\n.app-logo-short[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-logo[_ngcontent-%COMP%] {\n  display: none;\n}\nbody.sidebar-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%]:hover, \n.sidebar.open[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .sidebar-list[_ngcontent-%COMP%], \n.sidebar.open[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .logo-container[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%], \n.sidebar.open[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%] {\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .logo-container[_ngcontent-%COMP%]   .app-logo-short[_ngcontent-%COMP%], \n.sidebar.open[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-logo-short[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .navigation[_ngcontent-%COMP%], \n.sidebar.open[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n.sidebar[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%], \n.sidebar.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding: 20px;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .navigation-link[_ngcontent-%COMP%], \n.sidebar.open[_ngcontent-%COMP%]   .navigation-link[_ngcontent-%COMP%] {\n  display: inline;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .sidebar-signout[_ngcontent-%COMP%], \n.sidebar.open[_ngcontent-%COMP%]   .sidebar-signout[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .sidebar-signout[_ngcontent-%COMP%]   .signout-btn-content[_ngcontent-%COMP%], \n.sidebar.open[_ngcontent-%COMP%]   .sidebar-signout[_ngcontent-%COMP%]   .signout-btn-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 8px;\n}\n.sidebar[_ngcontent-%COMP%]:hover   .sidebar-signout[_ngcontent-%COMP%]   .logout-text[_ngcontent-%COMP%], \n.sidebar.open[_ngcontent-%COMP%]   .sidebar-signout[_ngcontent-%COMP%]   .logout-text[_ngcontent-%COMP%] {\n  display: inline;\n}\n@media (max-width: 576px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .sidebar[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    gap: 2px;\n  }\n  .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 14px;\n    gap: 10px;\n    height: 52px;\n  }\n  .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.material-symbols-outlined[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .sidebar[_ngcontent-%COMP%]:hover, \n   .sidebar.open[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n  .sidebar[_ngcontent-%COMP%]:hover   .sidebar-list[_ngcontent-%COMP%], \n   .sidebar.open[_ngcontent-%COMP%]   .sidebar-list[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .sidebar[_ngcontent-%COMP%]:hover   .sidebar-signout[_ngcontent-%COMP%], \n   .sidebar.open[_ngcontent-%COMP%]   .sidebar-signout[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n  }\n  .sidebar[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%], \n   .sidebar.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    height: 56px;\n  }\n}\n/*# sourceMappingURL=sidebar.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{ selector: "app-sidebar", imports: [Logo, RouterLink, RouterLinkActive, LogoShort, MatAnchor], template: '<div class="sidebar" [class.open]="isSidebarOpen">\r\n  <div class="sidebar-list">\r\n    <div class="logo-container">\r\n      <app-logo class="app-logo"></app-logo>\r\n      <app-logo-short class="app-logo-short"></app-logo-short>\r\n    </div>\r\n    <ul class="navigation">\r\n      @for (link of links; track link.route) {\r\n        <li\r\n          class="navigation-item"\r\n          [routerLink]="link.route"\r\n          routerLinkActive="active"\r\n          [routerLinkActiveOptions]="{ exact: true }"\r\n          (click)="liActive(link.id); isSidebarOpen = false"\r\n          [attr.id]="link.id"\r\n        >\r\n          <span class="material-symbols-outlined">{{ link.icon }}</span>\r\n          <a class="navigation-link">{{ link.label }}</a>\r\n        </li>\r\n      }\r\n    </ul>\r\n  </div>\r\n  <div class="sidebar-signout">\r\n    <button mat-button class="signout-btn" (click)="logout()">\r\n      <div class="signout-btn-content">\r\n        <span class="material-symbols-outlined logout"> logout </span>\r\n        <span class="logout-text">Sign Out</span>\r\n      </div>\r\n    </button>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/pages/application/sidebar/sidebar.scss */\n.sidebar {\n  width: 80px;\n  background-color: var(--surface-card);\n  height: 100%;\n  border-right: 1px solid var(--border);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: width 0.2s ease;\n}\n.sidebar .sidebar-list {\n  width: 100%;\n  padding: 0 12px;\n}\n.sidebar .sidebar-list .sidebar-content {\n  position: fixed;\n}\n.sidebar .sidebar-list .logo-container {\n  padding: 20px 0;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sidebar .sidebar-list .logo-container,\n.sidebar .sidebar-list .navigation {\n  width: 100%;\n}\n.sidebar .sidebar-list .navigation {\n  flex: 1;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n}\n.sidebar .sidebar-list li {\n  width: 100%;\n  padding: 16px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  cursor: pointer;\n  border-radius: 8px;\n  font-size: 1rem;\n}\n.sidebar .sidebar-list li * {\n  color: var(--text-muted);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition: color 0.3s ease;\n}\n.sidebar .sidebar-list li:hover {\n  background-color: #edf2ff;\n}\n.sidebar .sidebar-list li:hover * {\n  color: var(--mat-sys-primary) !important;\n}\n.sidebar .sidebar-list .navigation-link {\n  display: none;\n}\n.sidebar .sidebar-list span.material-symbols-outlined {\n  font-size: 24px;\n}\n.sidebar .sidebar-signout {\n  width: 100%;\n  padding: 10px 12px;\n}\n.sidebar .sidebar-signout .signout-btn {\n  height: 50px;\n  width: 100%;\n  border-radius: 8px;\n}\n.sidebar .sidebar-signout .signout-btn:hover {\n  background-color: #ffe5e5;\n}\n.sidebar .sidebar-signout .signout-btn .signout-btn-content {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  color: #dc2626;\n  font-size: 1rem;\n}\n.sidebar .sidebar-signout .signout-btn .logout-text {\n  display: none;\n}\n.active {\n  background-color: #dbeafe;\n}\n.active * {\n  color: var(--mat-sys-primary) !important;\n}\n.app-logo-short {\n  display: block;\n}\n.app-logo {\n  display: none;\n}\nbody.sidebar-open {\n  overflow: hidden;\n}\n.sidebar:hover,\n.sidebar.open {\n  width: 300px;\n}\n.sidebar:hover .sidebar-list,\n.sidebar.open .sidebar-list {\n  padding: 0 20px;\n}\n.sidebar:hover .logo-container .app-logo,\n.sidebar.open .logo-container .app-logo {\n  display: block;\n}\n.sidebar:hover .logo-container .app-logo-short,\n.sidebar.open .logo-container .app-logo-short {\n  display: none;\n}\n.sidebar:hover .navigation,\n.sidebar.open .navigation {\n  align-items: stretch;\n}\n.sidebar:hover li,\n.sidebar.open li {\n  justify-content: flex-start;\n  padding: 20px;\n}\n.sidebar:hover .navigation-link,\n.sidebar.open .navigation-link {\n  display: inline;\n}\n.sidebar:hover .sidebar-signout,\n.sidebar.open .sidebar-signout {\n  padding: 10px 20px;\n}\n.sidebar:hover .sidebar-signout .signout-btn-content,\n.sidebar.open .sidebar-signout .signout-btn-content {\n  justify-content: center;\n  gap: 8px;\n}\n.sidebar:hover .sidebar-signout .logout-text,\n.sidebar.open .sidebar-signout .logout-text {\n  display: inline;\n}\n@media (max-width: 576px) {\n  .sidebar {\n    width: 60px;\n  }\n  .sidebar .navigation {\n    gap: 2px;\n  }\n  .sidebar li {\n    padding: 12px;\n    font-size: 14px;\n    gap: 10px;\n    height: 52px;\n  }\n  .sidebar li span.material-symbols-outlined {\n    font-size: 18px;\n  }\n  .sidebar:hover,\n  .sidebar.open {\n    width: 240px;\n  }\n  .sidebar:hover .sidebar-list,\n  .sidebar.open .sidebar-list {\n    padding: 0 16px;\n  }\n  .sidebar:hover .sidebar-signout,\n  .sidebar.open .sidebar-signout {\n    padding: 10px 16px;\n  }\n  .sidebar:hover li,\n  .sidebar.open li {\n    padding: 14px 16px;\n    height: 56px;\n  }\n}\n/*# sourceMappingURL=sidebar.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sidebar, { className: "Sidebar", filePath: "src/app/pages/application/sidebar/sidebar.ts", lineNumber: 21 });
})();

// src/app/pages/application/application.ts
function Application_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-sidebar", 2);
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275element(3, "router-outlet", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 5);
    \u0275\u0275elementEnd();
  }
}
function Application_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function Application_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, Application_Conditional_0_Conditional_1_Template, 5, 0, "div", 0)(2, Application_Conditional_0_Conditional_2_Template, 2, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(status_r1 === ctx_r1.authStatus.Loaded || status_r1 === ctx_r1.authStatus.Init || status_r1 === ctx_r1.authStatus.Error ? 1 : 2);
  }
}
var Application = class _Application {
  title = signal("application", ...ngDevMode ? [{ debugName: "title" }] : []);
  authFacade = inject(AuthFacade);
  status$ = new Observable();
  authStatus = AuthStatus;
  ngOnInit() {
    this.authFacade.initAuth();
    this.status$ = this.authFacade.status$;
  }
  static \u0275fac = function Application_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Application)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Application, selectors: [["app-application"]], decls: 2, vars: 3, consts: [[1, "layout"], [1, "loading"], [1, "sidebar"], [1, "main-content"], [1, "main"], [1, "content-dim"]], template: function Application_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Application_Conditional_0_Template, 3, 1, "div");
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.status$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [Sidebar, RouterModule, RouterOutlet, AsyncPipe], styles: ["\n\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  height: 100vh;\n  position: relative;\n}\n.layout[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  flex-shrink: 0;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 20;\n}\n.layout[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  overflow-y: auto;\n  margin-left: 80px;\n  transition: filter 0.2s ease;\n}\n.layout[_ngcontent-%COMP%]   .content-dim[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.28);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s ease;\n  z-index: 10;\n}\n.layout[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover    ~ .content-dim[_ngcontent-%COMP%], \n.layout[_ngcontent-%COMP%]   .sidebar.open[_ngcontent-%COMP%]    ~ .content-dim[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.layout[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover    + .main-content[_ngcontent-%COMP%], \n.layout[_ngcontent-%COMP%]   .sidebar.open[_ngcontent-%COMP%]    + .main-content[_ngcontent-%COMP%] {\n  filter: brightness(0.92);\n}\n/*# sourceMappingURL=application.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Application, [{
    type: Component,
    args: [{ selector: "app-application", imports: [Sidebar, RouterModule, AsyncPipe], template: '@if (status$ | async; as status) {\r\n  <div>\r\n    @if (\r\n      status === authStatus.Loaded || status === authStatus.Init || status === authStatus.Error\r\n    ) {\r\n      <div class="layout">\r\n        <app-sidebar class="sidebar"></app-sidebar>\r\n        <div class="main-content">\r\n          <router-outlet class="main"></router-outlet>\r\n        </div>\r\n        <div class="content-dim"></div>\r\n      </div>\r\n    } @else {\r\n      <div class="loading">Loading...</div>\r\n    }\r\n  </div>\r\n}\r\n', styles: ["/* src/app/pages/application/application.scss */\n.layout {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  height: 100vh;\n  position: relative;\n}\n.layout .sidebar {\n  height: 100vh;\n  flex-shrink: 0;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 20;\n}\n.layout .main-content {\n  flex: 1;\n  height: 100%;\n  overflow-y: auto;\n  margin-left: 80px;\n  transition: filter 0.2s ease;\n}\n.layout .content-dim {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.28);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s ease;\n  z-index: 10;\n}\n.layout .sidebar:hover ~ .content-dim,\n.layout .sidebar.open ~ .content-dim {\n  opacity: 1;\n}\n.layout .sidebar:hover + .main-content,\n.layout .sidebar.open + .main-content {\n  filter: brightness(0.92);\n}\n/*# sourceMappingURL=application.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Application, { className: "Application", filePath: "src/app/pages/application/application.ts", lineNumber: 16 });
})();
export {
  Application
};
//# sourceMappingURL=chunk-N3KXQB46.js.map
