import {
  CdkPortalOutlet,
  PortalModule,
  TemplatePortal
} from "./chunk-HL5J3PQW.js";
import "./chunk-NJPLYCWR.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-IVMNBVY2.js";
import {
  clearBillingError,
  startCheckout
} from "./chunk-NSBTMR5D.js";
import {
  MatButton,
  MatButtonModule,
  _StructuralStylesLoader
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
  MatFormFieldModule,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-6MBOXXHD.js";
import {
  Logo
} from "./chunk-XQA5OULQ.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-BL4FRIRM.js";
import "./chunk-SS6OVLD6.js";
import {
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  MatCommonModule,
  Platform,
  SPACE,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _animationsDisabled,
  hasModifierKey
} from "./chunk-UIUNXKUC.js";
import {
  AuthFacade,
  AuthStatus
} from "./chunk-4TREYFXK.js";
import {
  Store,
  createFeatureSelector,
  createSelector
} from "./chunk-G2253GUZ.js";
import {
  Router,
  RouterLink
} from "./chunk-4QIJMJL3.js";
import "./chunk-5DFGQV6T.js";
import {
  AsyncPipe,
  NgClass,
  ViewportScroller
} from "./chunk-DNRS4C6J.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  QueryList,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  filter,
  inject,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  startWith,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-OFJZEGRZ.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/landing/footer/footer.ts
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 13, vars: 0, consts: [["id", "footer", 1, "footer"], [1, "wrapper"], ["routerLink", "/privacy-policy"], ["routerLink", "/terms-of-service"], ["routerLink", "/", "fragment", "contact"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p");
      \u0275\u0275text(3, "\xA9 2024 ResumeCrafts AI. All rights reserved.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p")(5, "a", 2);
      \u0275\u0275text(6, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " | ");
      \u0275\u0275elementStart(8, "a", 3);
      \u0275\u0275text(9, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " | ");
      \u0275\u0275elementStart(11, "a", 4);
      \u0275\u0275text(12, "Contact Us");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #0f172a;\n  padding: 40px 0;\n}\n.wrapper[_ngcontent-%COMP%] {\n  gap: 10px;\n  color: #ffffff;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: #ffffff;\n}\n/*# sourceMappingURL=footer.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [RouterLink], template: '<section class="footer" id="footer">\r\n  <div class="wrapper">\r\n    <p>&copy; 2024 ResumeCrafts AI. All rights reserved.</p>\r\n    <p>\r\n      <a routerLink="/privacy-policy">Privacy Policy</a> |\r\n      <a routerLink="/terms-of-service">Terms of Service</a> |\r\n      <a routerLink="/" fragment="contact">Contact Us</a>\r\n    </p>\r\n  </div>\r\n</section>\r\n', styles: ["/* src/app/pages/landing/footer/footer.scss */\n.footer {\n  background-color: #0f172a;\n  padding: 40px 0;\n}\n.wrapper {\n  gap: 10px;\n  color: #ffffff;\n  text-align: center;\n}\n.footer a {\n  text-decoration: none;\n  color: #ffffff;\n}\n.footer a:hover {\n  text-decoration: underline;\n}\n.footer * {\n  box-sizing: border-box;\n  color: #ffffff;\n}\n/*# sourceMappingURL=footer.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/pages/landing/footer/footer.ts", lineNumber: 10 });
})();

// node_modules/@angular/material/fesm2022/toolbar.mjs
var _c0 = ["*", [["mat-toolbar-row"]]];
var _c1 = ["*", "mat-toolbar-row"];
var MatToolbarRow = class _MatToolbarRow {
  static \u0275fac = function MatToolbarRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatToolbarRow,
    selectors: [["mat-toolbar-row"]],
    hostAttrs: [1, "mat-toolbar-row"],
    exportAs: ["matToolbarRow"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarRow, [{
    type: Directive,
    args: [{
      selector: "mat-toolbar-row",
      exportAs: "matToolbarRow",
      host: {
        "class": "mat-toolbar-row"
      }
    }]
  }], null, null);
})();
var MatToolbar = class _MatToolbar {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the toolbar. This API is supported in M2 themes only, it has
   * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/toolbar/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Reference to all toolbar row elements that have been projected. */
  _toolbarRows;
  constructor() {
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static \u0275fac = function MatToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatToolbar,
    selectors: [["mat-toolbar"]],
    contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatToolbarRow, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._toolbarRows = _t);
      }
    },
    hostAttrs: [1, "mat-toolbar"],
    hostVars: 6,
    hostBindings: function MatToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matToolbar"],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 0,
    template: function MatToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
      }
    },
    styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbar, [{
    type: Component,
    args: [{
      selector: "mat-toolbar",
      exportAs: "matToolbar",
      host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n',
      styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarModule = class _MatToolbarModule {
  static \u0275fac = function MatToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatToolbarModule,
    imports: [MatCommonModule, MatToolbar, MatToolbarRow],
    exports: [MatToolbar, MatToolbarRow, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatToolbar, MatToolbarRow],
      exports: [MatToolbar, MatToolbarRow, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/core/services/scroll.service.ts
var ScrollService = class _ScrollService {
  scroller;
  constructor(scroller) {
    this.scroller = scroller;
  }
  scrollTo(anchor) {
    if (!anchor)
      return;
    this.scroller.scrollToAnchor(anchor);
  }
  static \u0275fac = function ScrollService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollService)(\u0275\u0275inject(ViewportScroller));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScrollService, factory: _ScrollService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ViewportScroller }], null);
})();

// src/app/pages/landing/data/landing.facade.ts
var LandingFacade = class _LandingFacade {
  scrollService = inject(ScrollService);
  scrollTo(sectionId) {
    this.scrollService.scrollTo(sectionId);
  }
  static \u0275fac = function LandingFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LandingFacade, factory: _LandingFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/landing/header/header.ts
function Header_Conditional_1_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275text(1, " Dashboard ");
    \u0275\u0275elementEnd();
  }
}
function Header_Conditional_1_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 11);
  }
}
function Header_Conditional_1_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275text(2, "Log In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275text(4, " Sign Up ");
    \u0275\u0275elementEnd()();
  }
}
function Header_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Header_Conditional_1_Conditional_19_Conditional_0_Template, 2, 0, "button", 10)(1, Header_Conditional_1_Conditional_19_Conditional_1_Template, 1, 0, "mat-progress-spinner", 11)(2, Header_Conditional_1_Conditional_19_Conditional_2_Template, 5, 0, "div", 12);
  }
  if (rf & 2) {
    const status_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(status_r3 === ctx_r1.authStatus.Loaded ? 0 : status_r3 === ctx_r1.authStatus.Loading ? 1 : 2);
  }
}
function Header_Conditional_1_Conditional_27_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 20);
    \u0275\u0275listener("click", function Header_Conditional_1_Conditional_27_Conditional_19_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMobileRouteClick());
    });
    \u0275\u0275text(2, " Dashboard ");
    \u0275\u0275elementEnd()();
  }
}
function Header_Conditional_1_Conditional_27_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 21);
    \u0275\u0275listener("click", function Header_Conditional_1_Conditional_27_Conditional_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMobileRouteClick());
    });
    \u0275\u0275text(2, " Log In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275listener("click", function Header_Conditional_1_Conditional_27_Conditional_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMobileRouteClick());
    });
    \u0275\u0275text(4, " Sign Up ");
    \u0275\u0275elementEnd()();
  }
}
function Header_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 15)(2, "nav", 16)(3, "ul", 17)(4, "li")(5, "button", 18);
    \u0275\u0275listener("click", function Header_Conditional_1_Conditional_27_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMobileSectionClick("hero"));
    });
    \u0275\u0275text(6, " Home ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "button", 18);
    \u0275\u0275listener("click", function Header_Conditional_1_Conditional_27_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMobileSectionClick("features"));
    });
    \u0275\u0275text(9, " Features ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "button", 18);
    \u0275\u0275listener("click", function Header_Conditional_1_Conditional_27_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMobileSectionClick("simple-steps"));
    });
    \u0275\u0275text(12, " How It Works ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "button", 18);
    \u0275\u0275listener("click", function Header_Conditional_1_Conditional_27_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMobileSectionClick("about"));
    });
    \u0275\u0275text(15, " About ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "button", 18);
    \u0275\u0275listener("click", function Header_Conditional_1_Conditional_27_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMobileSectionClick("contact"));
    });
    \u0275\u0275text(18, " Contact ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, Header_Conditional_1_Conditional_27_Conditional_19_Template, 3, 0, "li");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, Header_Conditional_1_Conditional_27_Conditional_20_Template, 5, 0, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const status_r7 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(status_r7 === ctx_r1.authStatus.Loaded ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(status_r7 !== ctx_r1.authStatus.Loaded ? 20 : -1);
  }
}
function Header_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-logo");
    \u0275\u0275elementStart(2, "nav", 2)(3, "ul", 3)(4, "li")(5, "a", 4);
    \u0275\u0275listener("click", function Header_Conditional_1_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("hero"));
    });
    \u0275\u0275text(6, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 4);
    \u0275\u0275listener("click", function Header_Conditional_1_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("features"));
    });
    \u0275\u0275text(9, "Features");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 4);
    \u0275\u0275listener("click", function Header_Conditional_1_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("simple-steps"));
    });
    \u0275\u0275text(12, "How It Works");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 4);
    \u0275\u0275listener("click", function Header_Conditional_1_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("about"));
    });
    \u0275\u0275text(15, "About");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "a", 4);
    \u0275\u0275listener("click", function Header_Conditional_1_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTo("contact"));
    });
    \u0275\u0275text(18, "Contact");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(19, Header_Conditional_1_Conditional_19_Template, 3, 1);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementStart(21, "button", 5);
    \u0275\u0275listener("click", function Header_Conditional_1_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMenu());
    });
    \u0275\u0275element(22, "span", 6)(23, "span", 6)(24, "span", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 7);
    \u0275\u0275listener("click", function Header_Conditional_1_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 8);
    \u0275\u0275conditionalCreate(27, Header_Conditional_1_Conditional_27_Template, 21, 2, "div", 9);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275conditional((tmp_1_0 = \u0275\u0275pipeBind1(20, 9, ctx_r1.status$)) ? 19 : -1, tmp_1_0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.menuOpen());
    \u0275\u0275attribute("aria-expanded", ctx_r1.menuOpen());
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r1.menuOpen());
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.menuOpen());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(28, 11, ctx_r1.status$)) ? 27 : -1, tmp_6_0);
  }
}
var Header = class _Header {
  authFacade;
  landingDataFacade;
  headerType = null;
  authStatus = AuthStatus;
  status$ = new Observable();
  menuOpen = signal(false, ...ngDevMode ? [{ debugName: "menuOpen" }] : []);
  constructor(authFacade, landingDataFacade) {
    this.authFacade = authFacade;
    this.landingDataFacade = landingDataFacade;
  }
  ngOnInit() {
    this.status$ = this.authFacade.status$;
  }
  toggleMenu() {
    this.menuOpen.update((open) => !open);
    this.syncBodyLock();
  }
  closeMenu() {
    if (!this.menuOpen()) {
      return;
    }
    this.menuOpen.set(false);
    this.syncBodyLock();
  }
  onMobileSectionClick(sectionId) {
    this.landingDataFacade.scrollTo(sectionId);
    this.closeMenu();
  }
  onMobileRouteClick() {
    this.closeMenu();
  }
  onEscapePress() {
    this.closeMenu();
  }
  onResize() {
    if (typeof window !== "undefined" && window.innerWidth > 915) {
      this.closeMenu();
    }
  }
  ngOnDestroy() {
    if (typeof document !== "undefined") {
      document.body.classList.remove("mobile-menu-open");
    }
  }
  syncBodyLock() {
    if (typeof document === "undefined") {
      return;
    }
    document.body.classList.toggle("mobile-menu-open", this.menuOpen());
  }
  scrollTo(sectionId) {
    this.landingDataFacade.scrollTo(sectionId);
  }
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)(\u0275\u0275directiveInject(AuthFacade), \u0275\u0275directiveInject(LandingFacade));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], hostBindings: function Header_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function Header_keydown_escape_HostBindingHandler() {
        return ctx.onEscapePress();
      }, \u0275\u0275resolveDocument)("resize", function Header_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { headerType: "headerType" }, decls: 2, vars: 1, consts: [[1, "header"], [1, "wrapper", "header-wrapper"], [1, "nav"], [1, "nav-list"], [3, "click"], ["id", "burger-btn", "type", "button", "aria-label", "Toggle mobile menu", 1, "burger-toggle", 3, "click"], [1, "bar"], ["type", "button", "aria-label", "Close mobile menu", 1, "menu-backdrop", 3, "click"], [1, "burger-panel"], [1, "wrapper"], ["mat-flat-button", "", "routerLink", "application/dashboard", 1, "desktop-dashboard"], ["diameter", "30", "mode", "indeterminate"], [1, "auth-group"], ["mat-stroked-button", "", "routerLink", "auth/login", 1, "auth-link"], ["mat-flat-button", "", "routerLink", "auth/signup", 1, "auth-btn", "primary"], [1, "mobile-menu"], [1, "nav-burger"], [1, "nav-list", "nav-list-burger"], ["type", "button", 1, "menu-link", 3, "click"], [1, "auth-group-burger"], ["routerLink", "application/dashboard", 1, "menu-link", "dashboard-link", 3, "click"], ["mat-stroked-button", "", "routerLink", "auth/login", 1, "auth-link", "mobile-btn", 3, "click"], ["mat-flat-button", "", "routerLink", "auth/signup", 1, "primary", "mobile-btn", 3, "click"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0);
      \u0275\u0275conditionalCreate(1, Header_Conditional_1_Template, 29, 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.headerType === "nav" ? 1 : -1);
    }
  }, dependencies: [MatIconModule, MatToolbarModule, MatButtonModule, MatButton, Logo, RouterLink, MatProgressSpinnerModule, MatProgressSpinner, AsyncPipe], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1100;\n  width: 100%;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.34);\n  padding: 12px 0;\n  background:\n    linear-gradient(\n      120deg,\n      rgba(248, 250, 252, 0.96),\n      rgba(255, 255, 255, 0.92)),\n    #ffffff;\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n}\n.header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  min-height: 56px;\n}\n.nav[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  background: rgba(255, 255, 255, 0.94);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);\n}\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n}\n.nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-weight: 600;\n  line-height: 1;\n  padding: 10px 14px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  transition:\n    color 0.2s ease,\n    background-color 0.2s ease,\n    transform 0.2s ease;\n}\n.nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  color: #0b3e9f;\n  background: #eff6ff;\n  transform: translateY(-1px);\n  outline: none;\n}\n.auth-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(148, 163, 184, 0.32);\n  border-radius: 999px;\n  padding: 6px;\n}\n.auth-link[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 14px;\n  border-radius: 999px;\n  font-size: 14px;\n  color: #1f2937;\n  font-weight: 600;\n  border-color: #cfd8e6 !important;\n  background: #ffffff !important;\n}\n.auth-btn[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0b62f2) !important;\n  box-shadow: 0 10px 22px rgba(29, 78, 216, 0.24);\n}\n.desktop-dashboard[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 18px;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f766e,\n      #0f9a8f) !important;\n  color: #ffffff !important;\n  border: 1px solid rgba(15, 118, 110, 0.2);\n  box-shadow: 0 12px 24px rgba(15, 118, 110, 0.28);\n}\n.burger-toggle[_ngcontent-%COMP%] {\n  display: none;\n  width: 48px;\n  height: 48px;\n  border: 1px solid rgba(148, 163, 184, 0.38);\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fafc);\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1200;\n  box-shadow: 0 12px 20px rgba(15, 23, 42, 0.12);\n}\n.burger-toggle[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 24px;\n  height: 2.8px;\n  border-radius: 999px;\n  background: #0f172a;\n  transition: transform 0.32s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.22s ease;\n}\n.burger-toggle[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(-6px);\n}\n.burger-toggle[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(6px);\n}\n.burger-toggle.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(0) rotate(45deg);\n}\n.burger-toggle.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.burger-toggle.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(0) rotate(-45deg);\n}\n.menu-backdrop[_ngcontent-%COMP%], \n.burger-panel[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 915px) {\n  .burger-panel[_ngcontent-%COMP%] {\n    --menu-scale: 0.9;\n  }\n  .nav[_ngcontent-%COMP%], \n   .auth-group[_ngcontent-%COMP%], \n   .desktop-dashboard[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .burger-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .menu-backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.4);\n    border: 0;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.28s ease;\n    z-index: 1090;\n  }\n  .menu-backdrop.open[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .burger-panel[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 72px;\n    z-index: 1150;\n    opacity: 0;\n    transform: translateY(-16px) scale(0.97);\n    pointer-events: none;\n    transition: transform 0.34s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.24s ease;\n    will-change: transform, opacity;\n  }\n  .burger-panel.open[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n    pointer-events: auto;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    width: 100%;\n    width: min(620px, 100vw - 18px);\n    margin: 0 auto;\n    background:\n      linear-gradient(\n        180deg,\n        #ffffff,\n        #f8fafc);\n    border: 1px solid rgba(148, 163, 184, 0.35);\n    border-radius: calc(20px * var(--menu-scale));\n    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);\n    padding: calc(18px * var(--menu-scale));\n    display: flex;\n    flex-direction: column;\n    gap: calc(18px * var(--menu-scale));\n  }\n  .nav-list-burger[_ngcontent-%COMP%] {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: calc(6px * var(--menu-scale));\n  }\n  .menu-link[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border: 0;\n    background: #f1f5f9;\n    color: var(--text);\n    border-radius: calc(12px * var(--menu-scale));\n    padding: calc(12px * var(--menu-scale)) calc(14px * var(--menu-scale));\n    font-size: calc(16px * var(--menu-scale));\n    font-weight: 600;\n    text-decoration: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease, color 0.2s ease;\n  }\n  .menu-link[_ngcontent-%COMP%]:hover, \n   .menu-link[_ngcontent-%COMP%]:focus-visible {\n    background: #dbeafe;\n    color: #0b3e9f;\n    outline: none;\n  }\n  .menu-link.dashboard-link[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        135deg,\n        rgba(15, 118, 110, 0.12),\n        rgba(15, 154, 143, 0.2));\n    color: #0f766e;\n    font-weight: 700;\n  }\n  .auth-group-burger[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: calc(10px * var(--menu-scale));\n  }\n  .mobile-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: calc(44px * var(--menu-scale));\n    border-radius: calc(12px * var(--menu-scale));\n    font-size: calc(15px * var(--menu-scale));\n  }\n}\n@media (max-width: 640px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n  .header-wrapper[_ngcontent-%COMP%] {\n    min-height: 50px;\n    gap: 12px;\n  }\n  .burger-toggle[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n    border-radius: 12px;\n  }\n  .burger-panel[_ngcontent-%COMP%] {\n    top: 66px;\n  }\n}\n/*# sourceMappingURL=header.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [MatIconModule, MatToolbarModule, MatButtonModule, Logo, AsyncPipe, RouterLink, MatProgressSpinnerModule, MatIconModule], template: `<header class="header">\r
  @if (headerType === 'nav') {\r
    <div class="wrapper header-wrapper">\r
      <app-logo></app-logo>\r
\r
      <nav class="nav">\r
        <ul class="nav-list">\r
          <li><a (click)="scrollTo('hero')">Home</a></li>\r
          <li><a (click)="scrollTo('features')">Features</a></li>\r
          <li><a (click)="scrollTo('simple-steps')">How It Works</a></li>\r
          <li><a (click)="scrollTo('about')">About</a></li>\r
          <!-- <li><a (click)="scrollTo('pricing')">Pricing</a></li> -->\r
          <li><a (click)="scrollTo('contact')">Contact</a></li>\r
        </ul>\r
      </nav>\r
\r
      <!-- Right: Auth -->\r
      @if (status$ | async; as status) {\r
        @if (status === authStatus.Loaded) {\r
          <button mat-flat-button class="desktop-dashboard" routerLink="application/dashboard">\r
            Dashboard\r
          </button>\r
        } @else if (status === authStatus.Loading) {\r
          <mat-progress-spinner diameter="30" mode="indeterminate"></mat-progress-spinner>\r
        } @else {\r
          <div class="auth-group">\r
            <button mat-stroked-button class="auth-link" routerLink="auth/login">Log In</button>\r
            <button mat-flat-button class="auth-btn primary" routerLink="auth/signup">\r
              Sign Up\r
            </button>\r
          </div>\r
        }\r
      }\r
      <button\r
        id="burger-btn"\r
        class="burger-toggle"\r
        type="button"\r
        [class.active]="menuOpen()"\r
        [attr.aria-expanded]="menuOpen()"\r
        aria-label="Toggle mobile menu"\r
        (click)="toggleMenu()"\r
      >\r
        <span class="bar"></span>\r
        <span class="bar"></span>\r
        <span class="bar"></span>\r
      </button>\r
    </div>\r
\r
    <button\r
      class="menu-backdrop"\r
      type="button"\r
      aria-label="Close mobile menu"\r
      [class.open]="menuOpen()"\r
      (click)="closeMenu()"\r
    ></button>\r
\r
    <div class="burger-panel" [class.open]="menuOpen()">\r
      @if (status$ | async; as status) {\r
        <div class="wrapper">\r
          <div class="mobile-menu">\r
            <nav class="nav-burger">\r
              <ul class="nav-list nav-list-burger">\r
                <li>\r
                  <button type="button" class="menu-link" (click)="onMobileSectionClick('hero')">\r
                    Home\r
                  </button>\r
                </li>\r
                <li>\r
                  <button\r
                    type="button"\r
                    class="menu-link"\r
                    (click)="onMobileSectionClick('features')"\r
                  >\r
                    Features\r
                  </button>\r
                </li>\r
                <li>\r
                  <button\r
                    type="button"\r
                    class="menu-link"\r
                    (click)="onMobileSectionClick('simple-steps')"\r
                  >\r
                    How It Works\r
                  </button>\r
                </li>\r
                <li>\r
                  <button type="button" class="menu-link" (click)="onMobileSectionClick('about')">\r
                    About\r
                  </button>\r
                </li>\r
                <!-- <li>\r
                  <button type="button" class="menu-link" (click)="onMobileSectionClick('pricing')">\r
                    Pricing\r
                  </button>\r
                </li> -->\r
                <li>\r
                  <button type="button" class="menu-link" (click)="onMobileSectionClick('contact')">\r
                    Contact\r
                  </button>\r
                </li>\r
                @if (status === authStatus.Loaded) {\r
                  <li>\r
                    <a\r
                      class="menu-link dashboard-link"\r
                      routerLink="application/dashboard"\r
                      (click)="onMobileRouteClick()"\r
                    >\r
                      Dashboard\r
                    </a>\r
                  </li>\r
                }\r
              </ul>\r
            </nav>\r
\r
            @if (status !== authStatus.Loaded) {\r
              <div class="auth-group-burger">\r
                <button\r
                  mat-stroked-button\r
                  class="auth-link mobile-btn"\r
                  routerLink="auth/login"\r
                  (click)="onMobileRouteClick()"\r
                >\r
                  Log In\r
                </button>\r
                <button\r
                  mat-flat-button\r
                  class="primary mobile-btn"\r
                  routerLink="auth/signup"\r
                  (click)="onMobileRouteClick()"\r
                >\r
                  Sign Up\r
                </button>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  }\r
</header>\r
`, styles: ["/* src/app/pages/landing/header/header.scss */\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1100;\n  width: 100%;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.34);\n  padding: 12px 0;\n  background:\n    linear-gradient(\n      120deg,\n      rgba(248, 250, 252, 0.96),\n      rgba(255, 255, 255, 0.92)),\n    #ffffff;\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n}\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  min-height: 56px;\n}\n.nav {\n  padding: 6px;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  background: rgba(255, 255, 255, 0.94);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);\n}\n.nav-list {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n}\n.nav-list a {\n  color: #1f2937;\n  font-weight: 600;\n  line-height: 1;\n  padding: 10px 14px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  transition:\n    color 0.2s ease,\n    background-color 0.2s ease,\n    transform 0.2s ease;\n}\n.nav-list a:hover,\n.nav-list a:focus-visible {\n  color: #0b3e9f;\n  background: #eff6ff;\n  transform: translateY(-1px);\n  outline: none;\n}\n.auth-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(148, 163, 184, 0.32);\n  border-radius: 999px;\n  padding: 6px;\n}\n.auth-link {\n  min-height: 40px;\n  padding: 0 14px;\n  border-radius: 999px;\n  font-size: 14px;\n  color: #1f2937;\n  font-weight: 600;\n  border-color: #cfd8e6 !important;\n  background: #ffffff !important;\n}\n.auth-btn {\n  min-height: 40px;\n  padding: 0 16px;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0b62f2) !important;\n  box-shadow: 0 10px 22px rgba(29, 78, 216, 0.24);\n}\n.desktop-dashboard {\n  min-height: 42px;\n  padding: 0 18px;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f766e,\n      #0f9a8f) !important;\n  color: #ffffff !important;\n  border: 1px solid rgba(15, 118, 110, 0.2);\n  box-shadow: 0 12px 24px rgba(15, 118, 110, 0.28);\n}\n.burger-toggle {\n  display: none;\n  width: 48px;\n  height: 48px;\n  border: 1px solid rgba(148, 163, 184, 0.38);\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fafc);\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1200;\n  box-shadow: 0 12px 20px rgba(15, 23, 42, 0.12);\n}\n.burger-toggle .bar {\n  position: absolute;\n  width: 24px;\n  height: 2.8px;\n  border-radius: 999px;\n  background: #0f172a;\n  transition: transform 0.32s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.22s ease;\n}\n.burger-toggle .bar:nth-child(1) {\n  transform: translateY(-6px);\n}\n.burger-toggle .bar:nth-child(3) {\n  transform: translateY(6px);\n}\n.burger-toggle.active .bar:nth-child(1) {\n  transform: translateY(0) rotate(45deg);\n}\n.burger-toggle.active .bar:nth-child(2) {\n  opacity: 0;\n}\n.burger-toggle.active .bar:nth-child(3) {\n  transform: translateY(0) rotate(-45deg);\n}\n.menu-backdrop,\n.burger-panel {\n  display: none;\n}\n@media (max-width: 915px) {\n  .burger-panel {\n    --menu-scale: 0.9;\n  }\n  .nav,\n  .auth-group,\n  .desktop-dashboard {\n    display: none;\n  }\n  .burger-toggle {\n    display: inline-flex;\n  }\n  .menu-backdrop {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.4);\n    border: 0;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.28s ease;\n    z-index: 1090;\n  }\n  .menu-backdrop.open {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .burger-panel {\n    display: block;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 72px;\n    z-index: 1150;\n    opacity: 0;\n    transform: translateY(-16px) scale(0.97);\n    pointer-events: none;\n    transition: transform 0.34s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.24s ease;\n    will-change: transform, opacity;\n  }\n  .burger-panel.open {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n    pointer-events: auto;\n  }\n  .mobile-menu {\n    width: 100%;\n    width: min(620px, 100vw - 18px);\n    margin: 0 auto;\n    background:\n      linear-gradient(\n        180deg,\n        #ffffff,\n        #f8fafc);\n    border: 1px solid rgba(148, 163, 184, 0.35);\n    border-radius: calc(20px * var(--menu-scale));\n    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);\n    padding: calc(18px * var(--menu-scale));\n    display: flex;\n    flex-direction: column;\n    gap: calc(18px * var(--menu-scale));\n  }\n  .nav-list-burger {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: calc(6px * var(--menu-scale));\n  }\n  .menu-link {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border: 0;\n    background: #f1f5f9;\n    color: var(--text);\n    border-radius: calc(12px * var(--menu-scale));\n    padding: calc(12px * var(--menu-scale)) calc(14px * var(--menu-scale));\n    font-size: calc(16px * var(--menu-scale));\n    font-weight: 600;\n    text-decoration: none;\n    cursor: pointer;\n    transition: background-color 0.2s ease, color 0.2s ease;\n  }\n  .menu-link:hover,\n  .menu-link:focus-visible {\n    background: #dbeafe;\n    color: #0b3e9f;\n    outline: none;\n  }\n  .menu-link.dashboard-link {\n    background:\n      linear-gradient(\n        135deg,\n        rgba(15, 118, 110, 0.12),\n        rgba(15, 154, 143, 0.2));\n    color: #0f766e;\n    font-weight: 700;\n  }\n  .auth-group-burger {\n    display: flex;\n    flex-direction: column;\n    gap: calc(10px * var(--menu-scale));\n  }\n  .mobile-btn {\n    width: 100%;\n    min-height: calc(44px * var(--menu-scale));\n    border-radius: calc(12px * var(--menu-scale));\n    font-size: calc(15px * var(--menu-scale));\n  }\n}\n@media (max-width: 640px) {\n  .header {\n    padding: 10px 0;\n  }\n  .header-wrapper {\n    min-height: 50px;\n    gap: 12px;\n  }\n  .burger-toggle {\n    width: 44px;\n    height: 44px;\n    border-radius: 12px;\n  }\n  .burger-panel {\n    top: 66px;\n  }\n}\n/*# sourceMappingURL=header.css.map */\n"] }]
  }], () => [{ type: AuthFacade }, { type: LandingFacade }], { headerType: [{
    type: Input,
    args: [{ required: true }]
  }], onEscapePress: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/pages/landing/header/header.ts", lineNumber: 22 });
})();

// src/app/pages/landing/landing-cta/landing-cta.ts
function LandingCta_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const helperText_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(helperText_r1);
  }
}
function LandingCta_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, LandingCta_Conditional_6_For_2_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.helperTexts);
  }
}
var LandingCta = class _LandingCta {
  label = "Create My Resume Now";
  icon = "auto_awesome";
  helperTexts = ["No Credit Card Required", "Ready in 5 Minutes"];
  link = "/application/dashboard";
  ariaLabel = "Create My Resume Now";
  static \u0275fac = function LandingCta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingCta)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingCta, selectors: [["app-landing-cta"]], inputs: { label: "label", icon: "icon", helperTexts: "helperTexts", link: "link", ariaLabel: "ariaLabel" }, decls: 7, vars: 5, consts: [[1, "buttons"], ["color", "primary", "type", "button", 1, "primary", "start-btn", 3, "routerLink"], [1, "ai-sign", "material-symbols-outlined"], [1, "button-text"], [1, "benefits"]], template: function LandingCta_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, LandingCta_Conditional_6_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.link);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.icon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.helperTexts.length > 0 ? 6 : -1);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.start-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 1.25rem 2rem;\n  font-size: 1.25rem;\n  background-color: var(--mat-sys-primary);\n  border-radius: 8px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.start-btn[_ngcontent-%COMP%]:hover {\n  background: #1e4ed8;\n}\n.ai-sign[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.button-text[_ngcontent-%COMP%] {\n  line-height: 1.1;\n}\n.benefits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  color: var(--text-muted);\n}\n@media (max-width: 640px) {\n  .start-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    font-size: 1.05rem;\n    padding: 1rem 1.2rem;\n  }\n  .benefits[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 6px;\n  }\n}\n/*# sourceMappingURL=landing-cta.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingCta, [{
    type: Component,
    args: [{ selector: "app-landing-cta", imports: [RouterLink], template: '<div class="buttons">\r\n  <button\r\n    color="primary"\r\n    class="primary start-btn"\r\n    [routerLink]="link"\r\n    [attr.aria-label]="ariaLabel"\r\n    type="button"\r\n  >\r\n    <span class="ai-sign material-symbols-outlined">{{ icon }}</span>\r\n    <span class="button-text">{{ label }}</span>\r\n  </button>\r\n\r\n  @if (helperTexts.length > 0) {\r\n    <div class="benefits">\r\n      @for (helperText of helperTexts; track helperText) {\r\n        <span>{{ helperText }}</span>\r\n      }\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/pages/landing/landing-cta/landing-cta.scss */\n.buttons {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.start-btn {\n  color: #fff;\n  padding: 1.25rem 2rem;\n  font-size: 1.25rem;\n  background-color: var(--mat-sys-primary);\n  border-radius: 8px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.start-btn:hover {\n  background: #1e4ed8;\n}\n.ai-sign {\n  line-height: 1;\n}\n.button-text {\n  line-height: 1.1;\n}\n.benefits {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  color: var(--text-muted);\n}\n@media (max-width: 640px) {\n  .start-btn {\n    width: 100%;\n    justify-content: center;\n    font-size: 1.05rem;\n    padding: 1rem 1.2rem;\n  }\n  .benefits {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 6px;\n  }\n}\n/*# sourceMappingURL=landing-cta.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], icon: [{
    type: Input
  }], helperTexts: [{
    type: Input
  }], link: [{
    type: Input
  }], ariaLabel: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingCta, { className: "LandingCta", filePath: "src/app/pages/landing/landing-cta/landing-cta.ts", lineNumber: 10 });
})();

// src/app/pages/landing/hero/hero.ts
var _c02 = () => ["/application/dashboard"];
var _c12 = () => ["No Credit Card Required", "Ready in 5 Minutes"];
var Hero = class _Hero {
  landingFacade;
  constructor(landingFacade) {
    this.landingFacade = landingFacade;
  }
  scrollTo(sectionId) {
    this.landingFacade.scrollTo(sectionId);
  }
  static \u0275fac = function Hero_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero)(\u0275\u0275directiveInject(LandingFacade));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero, selectors: [["app-hero"]], decls: 19, vars: 4, consts: [["hero", ""], ["id", "hero", 1, "hero"], [1, "wrapper"], [1, "main-text"], [1, "title"], [1, "blue-text"], [1, "description"], ["icon", "auto_awesome", "label", "Create My Resume Now", "ariaLabel", "Create My Resume Now", 3, "link", "helperTexts"], [1, "picture"], ["src", "assets/photo-1586281380349-632531db7ed4.jpg", "alt", "resume"], ["type", "button", "aria-label", "Scroll down to features section", 1, "scroll-down-btn", 3, "click"], [1, "scroll-down-text"], ["aria-hidden", "true", 1, "scroll-down-arrow"]], template: function Hero_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1, 0)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, " Create Your Perfect Resume ");
      \u0275\u0275element(6, "br");
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "In Just 5 Minutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, " Stop struggling with blank pages. Let AI write your resume based on your experience and target job. Get more interviews, guaranteed. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(11, "app-landing-cta", 7);
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275element(13, "img", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275listener("click", function Hero_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollTo("features"));
      });
      \u0275\u0275elementStart(15, "span", 11);
      \u0275\u0275text(16, "Scroll down!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 12);
      \u0275\u0275text(18, "v");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("link", \u0275\u0275pureFunction0(2, _c02))("helperTexts", \u0275\u0275pureFunction0(3, _c12));
    }
  }, dependencies: [LandingCta], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: var(--section-bg, #ffffff);\n  margin-top: 78px;\n  padding-top: 12px;\n  position: relative;\n  overflow: hidden;\n  min-height: 95vh;\n}\n.hero[_ngcontent-%COMP%]::before, \n.hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  border-radius: 999px;\n  pointer-events: none;\n  filter: blur(55px);\n  opacity: 0.35;\n}\n.hero[_ngcontent-%COMP%]::before {\n  width: 420px;\n  height: 420px;\n  top: -180px;\n  left: -120px;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      #60a5fa 0%,\n      rgba(96, 165, 250, 0) 70%);\n  animation: _ngcontent-%COMP%_driftBlob 12s ease-in-out infinite alternate;\n}\n.hero[_ngcontent-%COMP%]::after {\n  width: 460px;\n  height: 460px;\n  right: -180px;\n  bottom: -220px;\n  background:\n    radial-gradient(\n      circle at 40% 40%,\n      #93c5fd 0%,\n      rgba(147, 197, 253, 0) 72%);\n  animation: _ngcontent-%COMP%_driftBlob 15s ease-in-out infinite alternate-reverse;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: clamp(1.25rem, 3vh, 2.5rem);\n  position: relative;\n  z-index: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 6.8vw, 5rem);\n  font-weight: 800;\n  line-height: 1.1;\n  margin: 0;\n  color: var(--text);\n  text-wrap: balance;\n}\n.wrapper[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .blue-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      90deg,\n      var(--mat-sys-primary),\n      #60a5fa);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  animation: _ngcontent-%COMP%_titleGlow 2.4s ease-in-out infinite alternate;\n}\n.wrapper[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: clamp(1rem, 2.2vw, 1.2rem);\n  line-height: 1.45;\n  max-width: 700px;\n  text-wrap: pretty;\n}\n.wrapper[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1100px;\n  background: var(--surface-card);\n  padding: 1rem;\n  border-radius: 20px;\n  border: 1px solid var(--border);\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);\n  animation: _ngcontent-%COMP%_floatCard 6s ease-in-out infinite;\n}\n.wrapper[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 15px;\n  display: block;\n  object-fit: cover;\n}\n.scroll-down-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: clamp(1rem, 2.4vw, 1.8rem);\n  transform: translateX(-50%);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.95);\n  color: var(--text);\n  border-radius: 999px;\n  padding: 0.5rem 0.9rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  z-index: 2;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);\n  animation: _ngcontent-%COMP%_nudgeDown 1.6s ease-in-out infinite;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease;\n}\n.scroll-down-btn[_ngcontent-%COMP%]:hover {\n  transform: translateX(-50%) translateY(-2px);\n  background: #fff;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18);\n}\n.scroll-down-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid color-mix(in srgb, var(--mat-sys-primary) 35%, transparent);\n  outline-offset: 2px;\n}\n.scroll-down-arrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  line-height: 1;\n}\n@keyframes _ngcontent-%COMP%_floatCard {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@keyframes _ngcontent-%COMP%_driftBlob {\n  0% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  100% {\n    transform: translate3d(40px, 24px, 0) scale(1.08);\n  }\n}\n@keyframes _ngcontent-%COMP%_titleGlow {\n  0% {\n    filter: drop-shadow(0 0 0 rgba(29, 78, 216, 0));\n  }\n  100% {\n    filter: drop-shadow(0 6px 14px rgba(59, 130, 246, 0.25));\n  }\n}\n@keyframes _ngcontent-%COMP%_nudgeDown {\n  0%, 100% {\n    transform: translateX(-50%) translateY(0);\n  }\n  50% {\n    transform: translateX(-50%) translateY(4px);\n  }\n}\n@media (max-width: 1200px) {\n  .hero[_ngcontent-%COMP%]::before, \n   .hero[_ngcontent-%COMP%]::after {\n    filter: blur(48px);\n  }\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    margin-top: 74px;\n  }\n  .wrapper[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: clamp(2rem, 10vw, 2.8rem);\n  }\n  .wrapper[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    max-width: 60ch;\n  }\n}\n@media (max-width: 480px) {\n  .hero[_ngcontent-%COMP%] {\n    margin-top: 70px;\n    padding-top: 8px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: clamp(1.8rem, 11vw, 2.25rem);\n  }\n  .wrapper[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    margin-top: 0.5rem;\n    border-radius: 12px;\n    max-width: 100%;\n    box-shadow: 0 6px 18px rgba(16, 24, 40, 0.03);\n  }\n  .scroll-down-btn[_ngcontent-%COMP%] {\n    bottom: 0.75rem;\n    font-size: 0.88rem;\n    padding: 0.45rem 0.75rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero[_ngcontent-%COMP%]::before, \n   .hero[_ngcontent-%COMP%]::after, \n   .picture[_ngcontent-%COMP%], \n   .main-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .blue-text[_ngcontent-%COMP%], \n   .scroll-down-btn[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=hero.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero, [{
    type: Component,
    args: [{ selector: "app-hero", imports: [LandingCta], template: `<section class="hero" id="hero" #hero>\r
  <div class="wrapper">\r
    <div class="main-text">\r
      <h1 class="title">\r
        Create Your Perfect Resume <br>\r
        <span class="blue-text">In Just 5 Minutes</span>\r
      </h1>\r
\r
      <p class="description">\r
        Stop struggling with blank pages. Let AI write your resume based on your experience and\r
        target job. Get more interviews, guaranteed.\r
      </p>\r
    </div>\r
\r
    <app-landing-cta\r
      [link]="['/application/dashboard']"\r
      icon="auto_awesome"\r
      label="Create My Resume Now"\r
      [helperTexts]="['No Credit Card Required', 'Ready in 5 Minutes']"\r
      ariaLabel="Create My Resume Now"\r
    ></app-landing-cta>\r
\r
    <div class="picture">\r
      <img src="assets/photo-1586281380349-632531db7ed4.jpg" alt="resume" />\r
    </div>\r
  </div>\r
\r
  <button\r
    type="button"\r
    class="scroll-down-btn"\r
    (click)="scrollTo('features')"\r
    aria-label="Scroll down to features section"\r
  >\r
    <span class="scroll-down-text">Scroll down!</span>\r
    <span class="scroll-down-arrow" aria-hidden="true">v</span>\r
  </button>\r
</section>\r
`, styles: ['/* src/app/pages/landing/hero/hero.scss */\n.hero {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: var(--section-bg, #ffffff);\n  margin-top: 78px;\n  padding-top: 12px;\n  position: relative;\n  overflow: hidden;\n  min-height: 95vh;\n}\n.hero::before,\n.hero::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  border-radius: 999px;\n  pointer-events: none;\n  filter: blur(55px);\n  opacity: 0.35;\n}\n.hero::before {\n  width: 420px;\n  height: 420px;\n  top: -180px;\n  left: -120px;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      #60a5fa 0%,\n      rgba(96, 165, 250, 0) 70%);\n  animation: driftBlob 12s ease-in-out infinite alternate;\n}\n.hero::after {\n  width: 460px;\n  height: 460px;\n  right: -180px;\n  bottom: -220px;\n  background:\n    radial-gradient(\n      circle at 40% 40%,\n      #93c5fd 0%,\n      rgba(147, 197, 253, 0) 72%);\n  animation: driftBlob 15s ease-in-out infinite alternate-reverse;\n}\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: clamp(1.25rem, 3vh, 2.5rem);\n  position: relative;\n  z-index: 1;\n}\n.wrapper .main-text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  text-align: center;\n}\n.wrapper .main-text .title {\n  font-size: clamp(2.2rem, 6.8vw, 5rem);\n  font-weight: 800;\n  line-height: 1.1;\n  margin: 0;\n  color: var(--text);\n  text-wrap: balance;\n}\n.wrapper .main-text .title .blue-text {\n  display: inline-block;\n  background:\n    linear-gradient(\n      90deg,\n      var(--mat-sys-primary),\n      #60a5fa);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  animation: titleGlow 2.4s ease-in-out infinite alternate;\n}\n.wrapper .main-text .description {\n  color: var(--text-muted);\n  font-size: clamp(1rem, 2.2vw, 1.2rem);\n  line-height: 1.45;\n  max-width: 700px;\n  text-wrap: pretty;\n}\n.wrapper .picture {\n  width: 100%;\n  max-width: 1100px;\n  background: var(--surface-card);\n  padding: 1rem;\n  border-radius: 20px;\n  border: 1px solid var(--border);\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);\n  animation: floatCard 6s ease-in-out infinite;\n}\n.wrapper .picture img {\n  width: 100%;\n  border-radius: 15px;\n  display: block;\n  object-fit: cover;\n}\n.scroll-down-btn {\n  position: absolute;\n  left: 50%;\n  bottom: clamp(1rem, 2.4vw, 1.8rem);\n  transform: translateX(-50%);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.95);\n  color: var(--text);\n  border-radius: 999px;\n  padding: 0.5rem 0.9rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  z-index: 2;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);\n  animation: nudgeDown 1.6s ease-in-out infinite;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease;\n}\n.scroll-down-btn:hover {\n  transform: translateX(-50%) translateY(-2px);\n  background: #fff;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18);\n}\n.scroll-down-btn:focus-visible {\n  outline: 3px solid color-mix(in srgb, var(--mat-sys-primary) 35%, transparent);\n  outline-offset: 2px;\n}\n.scroll-down-arrow {\n  display: inline-block;\n  font-size: 1rem;\n  line-height: 1;\n}\n@keyframes floatCard {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@keyframes driftBlob {\n  0% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  100% {\n    transform: translate3d(40px, 24px, 0) scale(1.08);\n  }\n}\n@keyframes titleGlow {\n  0% {\n    filter: drop-shadow(0 0 0 rgba(29, 78, 216, 0));\n  }\n  100% {\n    filter: drop-shadow(0 6px 14px rgba(59, 130, 246, 0.25));\n  }\n}\n@keyframes nudgeDown {\n  0%, 100% {\n    transform: translateX(-50%) translateY(0);\n  }\n  50% {\n    transform: translateX(-50%) translateY(4px);\n  }\n}\n@media (max-width: 1200px) {\n  .hero::before,\n  .hero::after {\n    filter: blur(48px);\n  }\n}\n@media (max-width: 768px) {\n  .hero {\n    margin-top: 74px;\n  }\n  .wrapper {\n    gap: 1.5rem;\n  }\n  .wrapper .main-text .title {\n    font-size: clamp(2rem, 10vw, 2.8rem);\n  }\n  .wrapper .main-text .description {\n    max-width: 60ch;\n  }\n}\n@media (max-width: 480px) {\n  .hero {\n    margin-top: 70px;\n    padding-top: 8px;\n  }\n  .wrapper .main-text {\n    gap: 0.75rem;\n  }\n  .wrapper .main-text .title {\n    font-size: clamp(1.8rem, 11vw, 2.25rem);\n  }\n  .wrapper .picture {\n    padding: 0.5rem;\n    margin-top: 0.5rem;\n    border-radius: 12px;\n    max-width: 100%;\n    box-shadow: 0 6px 18px rgba(16, 24, 40, 0.03);\n  }\n  .scroll-down-btn {\n    bottom: 0.75rem;\n    font-size: 0.88rem;\n    padding: 0.45rem 0.75rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero::before,\n  .hero::after,\n  .picture,\n  .main-text .title .blue-text,\n  .scroll-down-btn {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=hero.css.map */\n'] }]
  }], () => [{ type: LandingFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero, { className: "Hero", filePath: "src/app/pages/landing/hero/hero.ts", lineNumber: 11 });
})();

// src/app/pages/landing/features/features.ts
var _c03 = ["features_list"];
var _c13 = () => ["/application/dashboard"];
var _forTrack0 = ($index, $item) => $item.id;
function Features_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "h4", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.description);
  }
}
var Features = class _Features {
  featuresListElem;
  features = [
    {
      id: 0,
      icon: "book",
      title: "AI-Powered Generation",
      description: "Our advanced AI writes professional resume content tailored to your experience and target job in seconds."
    },
    {
      id: 1,
      icon: "insert_drive_file",
      title: "AI Cover Letters Generator",
      description: "Create personalized cover letters that complement your resume and highlight your best qualities for each job."
    },
    {
      id: 2,
      icon: "description",
      title: "Professional Templates",
      description: "Choose from expertly designed templates that make you stand out while maintaining professional standards."
    },
    {
      id: 3,
      icon: "view_kanban",
      title: "Job Application Tracker",
      description: "Track all your applications in one place with our intuitive kanban board. Never lose track of opportunities."
    }
  ];
  ctaHelperTexts = ["Pick a template in seconds", "Start building for free"];
  static \u0275fac = function Features_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Features)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Features, selectors: [["app-features"]], viewQuery: function Features_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.featuresListElem = _t.first);
    }
  }, decls: 13, vars: 3, consts: [["featuresRef", ""], ["features_list", ""], ["id", "features", 1, "features"], [1, "wrapper"], [1, "head"], [1, "title"], [1, "sub-title"], [1, "features-cards"], [1, "card"], ["icon", "bolt", "label", "Build My Resume with AI", "ariaLabel", "Build My Resume with AI", 1, "section-cta", 3, "link", "helperTexts"], [1, "card-icon"], [1, "feature-text"], [1, "card-title"], [1, "card-description"]], template: function Features_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 2, 0)(2, "div", 3)(3, "header", 4)(4, "h2", 5);
      \u0275\u0275text(5, "Why Waste Hours When AI Can Do It Better?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Powerful AI tools to accelerate your career");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7, 1);
      \u0275\u0275repeaterCreate(10, Features_For_11_Template, 8, 3, "div", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "app-landing-cta", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.features);
      \u0275\u0275advance(2);
      \u0275\u0275property("link", \u0275\u0275pureFunction0(2, _c13))("helperTexts", ctx.ctaHelperTexts);
    }
  }, dependencies: [MatIconModule, MatIcon, LandingCta], styles: ["\n\n.features[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--section-bg, transparent);\n}\n.features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.5rem;\n  justify-content: center;\n}\n.features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 1.5rem;\n  background: var(--surface-card);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 1.8rem;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text);\n}\n.features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n}\n.features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  flex: 0 0 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  background-color: var(--surface-muted);\n  color: var(--mat-sys-primary);\n}\n.features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);\n}\n.features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .section-cta[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n@media (max-width: 980px) {\n  .features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .features-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .features[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    padding: 1.2rem;\n  }\n}\n/*# sourceMappingURL=features.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Features, [{
    type: Component,
    args: [{ selector: "app-features", imports: [MatIconModule, LandingCta], template: `<section class="features" id="features" #featuresRef>\r
  <div class="wrapper">\r
    <header class="head">\r
      <h2 class="title">Why Waste Hours When AI Can Do It Better?</h2>\r
      <p class="sub-title">Powerful AI tools to accelerate your career</p>\r
    </header>\r
    <div class="features-cards" #features_list>\r
      @for (feature of features; track feature.id) {\r
        <div class="card">\r
          <mat-icon class="card-icon">{{ feature.icon }}</mat-icon>\r
          <div class="feature-text">\r
            <h4 class="card-title">{{ feature.title }}</h4>\r
            <p class="card-description">{{ feature.description }}</p>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
\r
    <app-landing-cta\r
      class="section-cta"\r
      [link]="['/application/dashboard']"\r
      icon="bolt"\r
      label="Build My Resume with AI"\r
      [helperTexts]="ctaHelperTexts"\r
      ariaLabel="Build My Resume with AI"\r
    ></app-landing-cta>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/landing/features/features.scss */\n.features {\n  width: 100%;\n  background-color: var(--section-bg, transparent);\n}\n.features .wrapper .features-cards {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.5rem;\n  justify-content: center;\n}\n.features .wrapper .card {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 1.5rem;\n  background: var(--surface-card);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 1.8rem;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.features .wrapper .card .feature-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.features .wrapper .card .feature-text .feature-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text);\n}\n.features .wrapper .card .feature-text .feature-description {\n  font-size: 1rem;\n  color: var(--text-secondary);\n}\n.features .wrapper .card .card-icon {\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  flex: 0 0 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  background-color: var(--surface-muted);\n  color: var(--mat-sys-primary);\n}\n.features .wrapper .card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);\n}\n.features .wrapper .section-cta {\n  margin-top: 0.5rem;\n}\n@media (max-width: 980px) {\n  .features .wrapper .features-cards {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .features .wrapper .card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    padding: 1.2rem;\n  }\n}\n/*# sourceMappingURL=features.css.map */\n"] }]
  }], null, { featuresListElem: [{
    type: ViewChild,
    args: ["features_list"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Features, { className: "Features", filePath: "src/app/pages/landing/features/features.ts", lineNumber: 18 });
})();

// src/app/pages/landing/about/about.ts
var _c04 = () => ["/application/dashboard"];
function About_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mission_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mission_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mission_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mission_r1.description);
  }
}
var About = class _About {
  missions = [
    {
      icon: "track_changes",
      title: "Mission-Driven",
      description: "Help people land their dream jobs using AI technology"
    },
    {
      icon: "person",
      title: "User-Focused",
      description: "Every feature designed with job seekers in mind"
    },
    {
      icon: "lock_outline",
      title: "Privacy First",
      description: "Your data is secure and never shared"
    }
  ];
  ctaHelperTexts = ["Trusted by job seekers worldwide", "Launch your first resume in minutes"];
  static \u0275fac = function About_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About, selectors: [["app-about"]], decls: 19, vars: 3, consts: [["about", ""], ["id", "about", 1, "about"], [1, "wrapper"], [1, "head"], [1, "title"], [1, "sub-title"], [1, "mission-card"], [1, "mission-title"], [1, "mission-text"], [1, "features"], [1, "feature-card"], ["icon", "verified", "label", "Create My Resume with Confidence", "ariaLabel", "Create My Resume with Confidence", 1, "section-cta", 3, "link", "helperTexts"], [1, "feature-icon"], [1, "feature-title"], [1, "feature-description"]], template: function About_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1, 0)(2, "div", 2)(3, "header", 3)(4, "h2", 4);
      \u0275\u0275text(5, "About ResumeCrafts AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Empowering job seekers with AI-powered career tools");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "h3", 7);
      \u0275\u0275text(10, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, " CareerForge AI was founded in 2025 with a simple mission: make job searching faster, easier, and more successful using artificial intelligence. We believe everyone deserves access to powerful career tools that help them present their best selves to potential employers. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 8);
      \u0275\u0275text(14, " We believe everyone deserves access to powerful career tools that help them present their best selves to potential employers. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275repeaterCreate(16, About_For_17_Template, 7, 3, "div", 10, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "app-landing-cta", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.missions);
      \u0275\u0275advance(2);
      \u0275\u0275property("link", \u0275\u0275pureFunction0(2, _c04))("helperTexts", ctx.ctaHelperTexts);
    }
  }, dependencies: [MatIconModule, MatIcon, LandingCta], styles: ["\n\n.about[_ngcontent-%COMP%] {\n  background: var(--section-bg, transparent);\n}\n.about[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  max-width: 1150px;\n  margin: 0 auto;\n}\n.about[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--border);\n  padding: 2rem;\n  border-radius: 12px;\n  max-width: 900px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.about[_ngcontent-%COMP%]   .mission-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 0.75rem;\n}\n.about[_ngcontent-%COMP%]   .mission-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-muted);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.about[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 24px;\n  width: 100%;\n  max-width: 960px;\n  margin: 1.5rem auto 0 auto;\n  justify-items: center;\n}\n.about[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--border);\n  padding: 2rem 1.5rem;\n  border-radius: 12px;\n  text-align: center;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-height: 160px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.about[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);\n}\n.about[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  padding: 12px;\n  border-radius: 10px;\n  background: #e8eefc;\n  color: var(--mat-sys-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.about[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text);\n}\n.about[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%] {\n  font-size: 0.93rem;\n  color: var(--text-muted);\n  line-height: 1.45;\n  margin: 0;\n}\n.about[_ngcontent-%COMP%]   .section-cta[_ngcontent-%COMP%] {\n  margin: 2rem auto 0 auto;\n}\n@media (max-width: 960px) {\n  .about[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .about[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n    flex: 1 1 calc(50% - 8px);\n    min-width: 220px;\n    padding: 1.2rem 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .about[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%] {\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n  .about[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .about[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=about.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About, [{
    type: Component,
    args: [{ selector: "app-about", imports: [MatIconModule, LandingCta], template: `<section class="about" id="about" #about>\r
  <div class="wrapper">\r
    <header class="head">\r
      <h2 class="title">About ResumeCrafts AI</h2>\r
      <p class="sub-title">Empowering job seekers with AI-powered career tools</p>\r
    </header>\r
\r
    <!-- Big mission card -->\r
    <div class="mission-card">\r
      <h3 class="mission-title">Our Mission</h3>\r
      <p class="mission-text">\r
        CareerForge AI was founded in 2025 with a simple mission: make job searching faster, easier,\r
        and more successful using artificial intelligence. We believe everyone deserves access to\r
        powerful career tools that help them present their best selves to potential employers.\r
      </p>\r
      <p class="mission-text">\r
        We believe everyone deserves access to powerful career tools that help them present their\r
        best selves to potential employers.\r
      </p>\r
    </div>\r
\r
    <!-- 3 feature cards -->\r
    <div class="features">\r
      @for (mission of missions; track $index) {\r
        <div class="feature-card">\r
          <mat-icon class="feature-icon">{{ mission.icon }}</mat-icon>\r
          <h4 class="feature-title">{{ mission.title }}</h4>\r
          <p class="feature-description">{{ mission.description }}</p>\r
        </div>\r
      }\r
    </div>\r
\r
    <app-landing-cta\r
      class="section-cta"\r
      [link]="['/application/dashboard']"\r
      icon="verified"\r
      label="Create My Resume with Confidence"\r
      [helperTexts]="ctaHelperTexts"\r
      ariaLabel="Create My Resume with Confidence"\r
    ></app-landing-cta>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/landing/about/about.scss */\n.about {\n  background: var(--section-bg, transparent);\n}\n.about .wrapper {\n  max-width: 1150px;\n  margin: 0 auto;\n}\n.about .mission-card {\n  background: var(--surface-card);\n  border: 1px solid var(--border);\n  padding: 2rem;\n  border-radius: 12px;\n  max-width: 900px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.about .mission-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 0.75rem;\n}\n.about .mission-text {\n  font-size: 0.95rem;\n  color: var(--text-muted);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.about .features {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 24px;\n  width: 100%;\n  max-width: 960px;\n  margin: 1.5rem auto 0 auto;\n  justify-items: center;\n}\n.about .feature-card {\n  background: var(--surface-card);\n  border: 1px solid var(--border);\n  padding: 2rem 1.5rem;\n  border-radius: 12px;\n  text-align: center;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-height: 160px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.about .feature-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);\n}\n.about .feature-icon {\n  font-size: 28px;\n  padding: 12px;\n  border-radius: 10px;\n  background: #e8eefc;\n  color: var(--mat-sys-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.about .feature-title {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text);\n}\n.about .feature-description {\n  font-size: 0.93rem;\n  color: var(--text-muted);\n  line-height: 1.45;\n  margin: 0;\n}\n.about .section-cta {\n  margin: 2rem auto 0 auto;\n}\n@media (max-width: 960px) {\n  .about .features {\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .about .feature-card {\n    flex: 1 1 calc(50% - 8px);\n    min-width: 220px;\n    padding: 1.2rem 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .about .features {\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n  .about .mission-card {\n    padding: 1.5rem;\n  }\n  .about .feature-card {\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=about.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About, { className: "About", filePath: "src/app/pages/landing/about/about.ts", lineNumber: 17 });
})();

// src/app/pages/landing/pricing-plans/data/billing.selectors.ts
var selectBillingState = createFeatureSelector("billing");
var selectBillingLoading = createSelector(selectBillingState, (state) => state.loading);
var selectBillingError = createSelector(selectBillingState, (state) => state.error);
var selectSelectedPlan = createSelector(selectBillingState, (state) => state.selectedPlan);

// src/app/pages/landing/pricing-plans/data/billing.facade.ts
var BillingFacade = class _BillingFacade {
  store = inject(Store);
  loading$ = this.store.select(selectBillingLoading);
  error$ = this.store.select(selectBillingError);
  selectedPlan$ = this.store.select(selectSelectedPlan);
  startCheckout(plan) {
    this.store.dispatch(startCheckout({ plan }));
  }
  clearError() {
    this.store.dispatch(clearBillingError());
  }
  static \u0275fac = function BillingFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BillingFacade, factory: _BillingFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/landing/pricing-plans/pricing-card/pricing-card.ts
var _forTrack02 = ($index, $item) => $item.text;
function PricingCard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1, "Most Popular");
    \u0275\u0275domElementEnd();
  }
}
function PricingCard_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "/month");
    \u0275\u0275domElementEnd();
  }
}
function PricingCard_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "/month");
    \u0275\u0275domElementEnd();
  }
}
function PricingCard_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275classProp("excluded", !feature_r1.included)("included", feature_r1.included);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r1.text);
  }
}
var PricingCard = class _PricingCard {
  billingFacade = inject(BillingFacade);
  router = inject(Router);
  plan;
  planSlug = null;
  popular = false;
  disabled = false;
  onSelectPlan() {
    if (this.disabled) {
      return;
    }
    if (this.planSlug === null) {
      this.router.navigate(["/auth/signup"]);
      return;
    }
    this.billingFacade.clearError();
    this.billingFacade.startCheckout(this.planSlug);
  }
  static \u0275fac = function PricingCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingCard, selectors: [["app-pricing-card"]], inputs: { plan: "plan", planSlug: "planSlug", popular: "popular", disabled: "disabled" }, decls: 15, vars: 13, consts: [[1, "pricing"], [1, "card-content"], [1, "card-price"], [1, "badge"], [1, "plan-name"], [1, "price"], [1, "features"], [3, "excluded", "included"], ["type", "button", 3, "click", "disabled"]], template: function PricingCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, PricingCard_Conditional_3_Template, 2, 0, "div", 3);
      \u0275\u0275domElementStart(4, "h3", 4);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275conditionalCreate(8, PricingCard_Conditional_8_Template, 2, 0, "span");
      \u0275\u0275conditionalCreate(9, PricingCard_Conditional_9_Template, 2, 0, "span");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "ul", 6);
      \u0275\u0275repeaterCreate(11, PricingCard_For_12_Template, 2, 5, "li", 7, _forTrack02);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "button", 8);
      \u0275\u0275domListener("click", function PricingCard_Template_button_click_13_listener() {
        return ctx.onSelectPlan();
      });
      \u0275\u0275text(14);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("popular", ctx.popular);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.popular ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.plan.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" $", ctx.plan.price);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.plan.name != "Premium" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.plan.name == "Premium" ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.plan.features);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-filled", ctx.popular)("btn-outline", !ctx.popular);
      \u0275\u0275domProperty("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.plan.button, "\n");
    }
  }, styles: ['@charset "UTF-8";\n\n\n\n.pricing[_ngcontent-%COMP%] {\n  padding: 32px;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  background: #ffffff;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  height: 100%;\n}\n.pricing[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.pricing[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.pricing[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);\n}\n.plan-name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n}\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.6;\n}\n.features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 32px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.features[_ngcontent-%COMP%]   li.included[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  color: #16a34a;\n}\n.features[_ngcontent-%COMP%]   li.excluded[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.features[_ngcontent-%COMP%]   li.excluded[_ngcontent-%COMP%]::before {\n  content: "X";\n  color: #dc2626;\n  font-weight: 700;\n}\n.btn-outline[_ngcontent-%COMP%], \n.btn-filled[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: 0.2s;\n  border: 1px solid var(--border);\n  background: #ffffff;\n}\n.btn-filled[_ngcontent-%COMP%] {\n  background: var(--mat-sys-primary);\n  border-color: var(--mat-sys-primary);\n  color: white;\n}\n.btn-filled[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--surface-muted);\n}\n.popular[_ngcontent-%COMP%] {\n  border: 2px solid var(--mat-sys-primary);\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -14px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--mat-sys-primary);\n  color: white;\n  padding: 6px 18px;\n  border-radius: 999px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=pricing-card.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingCard, [{
    type: Component,
    args: [{ selector: "app-pricing-card", imports: [], template: `<div class="pricing" [class.popular]="popular">\r
  <div class="card-content">\r
    <div class="card-price">\r
      @if (popular) {\r
        <div class="badge">Most Popular</div>\r
      }\r
\r
      <h3 class="plan-name">{{ plan.name }}</h3>\r
\r
      <p class="price">\r
        \${{ plan.price }}@if (plan.name != 'Premium') {\r
        <span>/month</span>\r
      }\r
      @if (plan.name == 'Premium') {\r
        <span>/month</span>\r
      }\r
    </p>\r
  </div>\r
\r
  <ul class="features">\r
    @for (feature of plan.features; track feature.text) {\r
      <li [class.excluded]="!feature.included" [class.included]="feature.included">{{ feature.text }}</li>\r
    }\r
  </ul>\r
</div>\r
\r
<button\r
  type="button"\r
  [class.btn-filled]="popular"\r
  [class.btn-outline]="!popular"\r
  [disabled]="disabled"\r
  (click)="onSelectPlan()"\r
>\r
  {{ plan.button }}\r
</button>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/landing/pricing-plans/pricing-card/pricing-card.scss */\n.pricing {\n  padding: 32px;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  background: #ffffff;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  height: 100%;\n}\n.pricing .card-content {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.pricing .card-content .card-price {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.pricing:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);\n}\n.plan-name {\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.price {\n  font-size: 2rem;\n  font-weight: 700;\n}\n.price span {\n  font-size: 1rem;\n  opacity: 0.6;\n}\n.features {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 32px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.features li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.features li.included::before {\n  content: "\\2713";\n  color: #16a34a;\n}\n.features li.excluded {\n  color: var(--text-muted);\n}\n.features li.excluded::before {\n  content: "X";\n  color: #dc2626;\n  font-weight: 700;\n}\n.btn-outline,\n.btn-filled {\n  width: 100%;\n  padding: 14px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: 0.2s;\n  border: 1px solid var(--border);\n  background: #ffffff;\n}\n.btn-filled {\n  background: var(--mat-sys-primary);\n  border-color: var(--mat-sys-primary);\n  color: white;\n}\n.btn-filled:hover {\n  opacity: 0.9;\n}\n.btn-outline:hover {\n  background: var(--surface-muted);\n}\n.popular {\n  border: 2px solid var(--mat-sys-primary);\n}\n.badge {\n  position: absolute;\n  top: -14px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--mat-sys-primary);\n  color: white;\n  padding: 6px 18px;\n  border-radius: 999px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=pricing-card.css.map */\n'] }]
  }], null, { plan: [{
    type: Input
  }], planSlug: [{
    type: Input
  }], popular: [{
    type: Input
  }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingCard, { className: "PricingCard", filePath: "src/app/pages/landing/pricing-plans/pricing-card/pricing-card.ts", lineNumber: 12 });
})();

// src/app/pages/landing/pricing-plans/pricing-plans.ts
var _c05 = () => ["/application/dashboard"];
var _forTrack03 = ($index, $item) => $item.name;
function PricingPlans_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-pricing-card", 7);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const plan_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plan", plan_r1)("planSlug", plan_r1.planSlug)("popular", plan_r1.popular)("disabled", \u0275\u0275pipeBind1(1, 4, ctx_r1.loading$));
  }
}
var FEATURE_LABELS = {
  resumeBuilder: "Resume builder and editor",
  oneTemplate: "1 resume template",
  allTemplates: "All resume templates",
  proTemplates: "Pro templates",
  jobTracker: "Job application tracker",
  aiCredits3: "3 AI generations per month",
  aiCredits30: "30 AI generations per month",
  aiCredits80: "80 AI generations per month",
  aiSummary: "AI summary generation",
  aiExperience: "AI experience bullets",
  aiEducation: "AI education bullets",
  aiCoverLetter: "AI cover letter generator",
  unlimitedResumes: "Unlimited resumes",
  pdfExport: "PDF export",
  prioritySupport: "Priority email support",
  resumeTailoringSoon: "Resume tailoring (coming soon)"
};
var FEATURE_ORDER = [
  "resumeBuilder",
  "oneTemplate",
  "allTemplates",
  "proTemplates",
  "jobTracker",
  "aiCredits3",
  "aiCredits30",
  "aiCredits80",
  "aiSummary",
  "aiExperience",
  "aiEducation",
  "aiCoverLetter",
  "unlimitedResumes",
  "pdfExport",
  "prioritySupport",
  "resumeTailoringSoon"
];
function buildFeatures(included, excluded = []) {
  const includedSet = new Set(included);
  const excludedSet = new Set(excluded);
  const visibleKeys = FEATURE_ORDER.filter((key) => includedSet.has(key) || excludedSet.has(key));
  return visibleKeys.map((key) => ({
    text: FEATURE_LABELS[key],
    included: includedSet.has(key)
  }));
}
var PricingPlans = class _PricingPlans {
  billingFacade;
  loading$;
  constructor(billingFacade) {
    this.billingFacade = billingFacade;
    this.loading$ = this.billingFacade.loading$;
  }
  plans = [
    {
      name: "Free",
      price: 0,
      features: buildFeatures([
        "resumeBuilder",
        "oneTemplate",
        "jobTracker",
        "aiCredits3",
        "pdfExport"
      ]),
      button: "Start Free",
      popular: false,
      planSlug: null
    },
    {
      name: "Pro",
      price: 12,
      features: buildFeatures([
        "resumeBuilder",
        "proTemplates",
        "aiCredits30",
        "aiSummary",
        "aiExperience",
        "aiEducation",
        "aiCoverLetter",
        "unlimitedResumes",
        "pdfExport"
      ]),
      button: "Start Pro",
      popular: true,
      planSlug: "pro"
    },
    {
      name: "Premium",
      price: 19,
      features: buildFeatures([
        "resumeBuilder",
        "allTemplates",
        "aiCredits80",
        "aiSummary",
        "aiExperience",
        "aiEducation",
        "aiCoverLetter",
        "unlimitedResumes",
        "pdfExport",
        "jobTracker",
        "resumeTailoringSoon"
      ]),
      button: "Start Premium",
      popular: false,
      planSlug: "premium"
    }
  ];
  ctaHelperTexts = ["No hidden fees", "Upgrade whenever you are ready"];
  static \u0275fac = function PricingPlans_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingPlans)(\u0275\u0275directiveInject(BillingFacade));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingPlans, selectors: [["app-pricing-plans"]], decls: 12, vars: 3, consts: [["pricing_plans", ""], ["id", "pricing", 1, "pricing"], [1, "wrapper"], [1, "head"], [1, "title"], [1, "sub-title"], [1, "pricing-cards"], [1, "pricing-card", 3, "plan", "planSlug", "popular", "disabled"], ["icon", "workspace_premium", "label", "Start Building My Resume", "ariaLabel", "Start Building My Resume", 1, "section-cta", 3, "link", "helperTexts"]], template: function PricingPlans_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1, 0)(2, "div", 2)(3, "header", 3)(4, "h2", 4);
      \u0275\u0275text(5, "Complete Pricing Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Everything you need to accelerate your career");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275repeaterCreate(9, PricingPlans_For_10_Template, 2, 6, "app-pricing-card", 7, _forTrack03);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-landing-cta", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.plans);
      \u0275\u0275advance(2);
      \u0275\u0275property("link", \u0275\u0275pureFunction0(2, _c05))("helperTexts", ctx.ctaHelperTexts);
    }
  }, dependencies: [PricingCard, LandingCta, AsyncPipe], styles: ["\n\n.pricing[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.pricing[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .pricing-cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: stretch;\n}\n.pricing[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .pricing-cards[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n  width: 30%;\n  box-sizing: border-box;\n}\n@media (max-width: 1024px) {\n  .pricing[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .pricing-cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n  }\n  .pricing[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .pricing-cards[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n.pricing[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .section-cta[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=pricing-plans.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingPlans, [{
    type: Component,
    args: [{ selector: "app-pricing-plans", imports: [PricingCard, AsyncPipe, LandingCta], template: `<section class="pricing" id="pricing" #pricing_plans>\r
  <div class="wrapper">\r
    <header class="head">\r
      <h2 class="title">Complete Pricing Plans</h2>\r
      <p class="sub-title">Everything you need to accelerate your career</p>\r
    </header>\r
    <div class="pricing-cards">\r
      @for (plan of plans; track plan.name) {\r
      <app-pricing-card\r
        [plan]="plan"\r
        [planSlug]="plan.planSlug"\r
        [popular]="plan.popular"\r
        [disabled]="loading$ | async"\r
        class="pricing-card"\r
      >\r
      </app-pricing-card>\r
      }\r
    </div>\r
\r
    <app-landing-cta\r
      class="section-cta"\r
      [link]="['/application/dashboard']"\r
      icon="workspace_premium"\r
      label="Start Building My Resume"\r
      [helperTexts]="ctaHelperTexts"\r
      ariaLabel="Start Building My Resume"\r
    ></app-landing-cta>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/landing/pricing-plans/pricing-plans.scss */\n.pricing {\n  background-color: #ffffff;\n}\n.pricing .wrapper .pricing-cards {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: stretch;\n}\n.pricing .wrapper .pricing-cards .pricing-card {\n  width: 30%;\n  box-sizing: border-box;\n}\n@media (max-width: 1024px) {\n  .pricing .wrapper .pricing-cards {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n  }\n  .pricing .wrapper .pricing-cards .pricing-card {\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n.pricing .wrapper .section-cta {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=pricing-plans.css.map */\n"] }]
  }], () => [{ type: BillingFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingPlans, { className: "PricingPlans", filePath: "src/app/pages/landing/pricing-plans/pricing-plans.ts", lineNumber: 90 });
})();

// node_modules/@angular/cdk/fesm2022/unique-selection-dispatcher.mjs
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  _listeners = [];
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static \u0275fac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UniqueSelectionDispatcher,
    factory: _UniqueSelectionDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var CdkAccordion = class _CdkAccordion {
  /** Emits when the state of the accordion changes */
  _stateChanges = new Subject();
  /** Stream that emits true/false when openAll/closeAll is triggered. */
  _openCloseAllActions = new Subject();
  /** A readonly id value to use for unique selection coordination. */
  id = inject(_IdGenerator).getId("cdk-accordion-");
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
  multi = false;
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static \u0275fac = function CdkAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordion)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: [2, "multi", "multi", booleanAttribute]
    },
    exportAs: ["cdkAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useExisting: _CdkAccordion
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionItem = class _CdkAccordionItem {
  accordion = inject(CDK_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _expansionDispatcher = inject(UniqueSelectionDispatcher);
  /** Subscription to openAll/closeAll events. */
  _openCloseAllSubscription = Subscription.EMPTY;
  /** Event emitted every time the AccordionItem is closed. */
  closed = new EventEmitter();
  /** Event emitted every time the AccordionItem is opened. */
  opened = new EventEmitter();
  /** Event emitted when the AccordionItem is destroyed. */
  destroyed = new EventEmitter();
  /**
   * Emits whenever the expanded state of the accordion changes.
   * Primarily used to facilitate two-way binding.
   * @docs-private
   */
  expandedChange = new EventEmitter();
  /** The unique AccordionItem id. */
  id = inject(_IdGenerator).getId("cdk-accordion-child-");
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _expanded = false;
  /** Whether the AccordionItem is disabled. */
  get disabled() {
    return this._disabled();
  }
  set disabled(value) {
    this._disabled.set(value);
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  /** Unregister function for _expansionDispatcher. */
  _removeUniqueSelectionListener = () => {
  };
  constructor() {
  }
  ngOnInit() {
    this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static \u0275fac = function CdkAccordionItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: [2, "expanded", "expanded", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: void 0
      }
    ])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: void 0
        }
      ]
    }]
  }], () => [], {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionModule = class _CdkAccordionModule {
  static \u0275fac = function CdkAccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkAccordionModule,
    imports: [CdkAccordion, CdkAccordionItem],
    exports: [CdkAccordion, CdkAccordionItem]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordion, CdkAccordionItem],
      exports: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/expansion.mjs
var _c06 = ["body"];
var _c14 = ["bodyWrapper"];
var _c2 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c3 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_7_Template(rf, ctx) {
}
var _c4 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c5 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 2);
    \u0275\u0275domElement(2, "path", 3);
    \u0275\u0275domElementEnd()();
  }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var MatExpansionPanelContent = class _MatExpansionPanelContent {
  _template = inject(TemplateRef);
  _expansionPanel = inject(MAT_EXPANSION_PANEL, {
    optional: true
  });
  constructor() {
  }
  static \u0275fac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelContent,
    selectors: [["ng-template", "matExpansionPanelContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matExpansionPanelContent]"
    }]
  }], () => [], null);
})();
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = _animationsDisabled();
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = value;
  }
  _hideToggle = false;
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  _togglePosition;
  /** An event emitted after the body's expansion animation happens. */
  afterExpand = new EventEmitter();
  /** An event emitted after the body's collapse animation happens. */
  afterCollapse = new EventEmitter();
  /** Stream that emits for changes in `@Input` properties. */
  _inputChanges = new Subject();
  /** Optionally defined accordion the expansion panel belongs to. */
  accordion = inject(MAT_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  /** Content that will be rendered lazily. */
  _lazyContent;
  /** Element containing the panel's user-provided content. */
  _body;
  /** Element wrapping the panel body. */
  _bodyWrapper;
  /** Portal holding the user's content. */
  _portal;
  /** ID for the associated header element. Used for a11y labelling. */
  _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
  constructor() {
    super();
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    this._expansionDispatcher = inject(UniqueSelectionDispatcher);
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === "default";
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? "expanded" : "collapsed";
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
    this._setupAnimationEvents();
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransitionEnd?.();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  _transitionEndListener = ({
    target,
    propertyName
  }) => {
    if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
      this._ngZone.run(() => {
        if (this.expanded) {
          this.afterExpand.emit();
        } else {
          this.afterCollapse.emit();
        }
      });
    }
  };
  _setupAnimationEvents() {
    this._ngZone.runOutsideAngular(() => {
      if (this._animationsDisabled) {
        this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
        this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
      } else {
        setTimeout(() => {
          const element = this._elementRef.nativeElement;
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
          element.classList.add("mat-expansion-panel-animations-enabled");
        }, 200);
      }
    });
  }
  static \u0275fac = function MatExpansionPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanel,
    selectors: [["mat-expansion-panel"]],
    contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    viewQuery: function MatExpansionPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
        \u0275\u0275viewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._body = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyWrapper = _t.first);
      }
    },
    hostAttrs: [1, "mat-expansion-panel"],
    hostVars: 4,
    hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-expanded", ctx.expanded)("mat-expansion-panel-spacing", ctx._hasSpacing());
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      togglePosition: "togglePosition"
    },
    outputs: {
      afterExpand: "afterExpand",
      afterCollapse: "afterCollapse"
    },
    exportAs: ["matExpansionPanel"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: void 0
      },
      {
        provide: MAT_EXPANSION_PANEL,
        useExisting: _MatExpansionPanel
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 4,
    consts: [["bodyWrapper", ""], ["body", ""], [1, "mat-expansion-panel-content-wrapper"], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
    template: function MatExpansionPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2, 0)(3, "div", 3, 1)(5, "div", 4);
        \u0275\u0275projection(6, 1);
        \u0275\u0275template(7, MatExpansionPanel_ng_template_7_Template, 0, 0, "ng-template", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(8, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("inert", ctx.expanded ? null : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.id);
        \u0275\u0275attribute("aria-labelledby", ctx._headerId);
        \u0275\u0275advance(4);
        \u0275\u0275property("cdkPortalOutlet", ctx._portal);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanel, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel",
      exportAs: "matExpansionPanel",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: void 0
        },
        {
          provide: MAT_EXPANSION_PANEL,
          useExisting: MatExpansionPanel
        }
      ],
      host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      },
      imports: [CdkPortalOutlet],
      template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`,
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], () => [], {
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    togglePosition: [{
      type: Input
    }],
    afterExpand: [{
      type: Output
    }],
    afterCollapse: [{
      type: Output
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: ViewChild,
      args: ["body"]
    }],
    _bodyWrapper: [{
      type: ViewChild,
      args: ["bodyWrapper"]
    }]
  });
})();
var MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
  static \u0275fac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelActionRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelActionRow,
    selectors: [["mat-action-row"]],
    hostAttrs: [1, "mat-action-row"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelActionRow, [{
    type: Directive,
    args: [{
      selector: "mat-action-row",
      host: {
        class: "mat-action-row"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelHeader = class _MatExpansionPanelHeader {
  panel = inject(MatExpansionPanel, {
    host: true
  });
  _element = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parentChangeSubscription = Subscription.EMPTY;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const panel = this.panel;
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
    this.tabIndex = parseInt(tabIndex || "") || 0;
    this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
      return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /** Height of the header while the panel is expanded. */
  expandedHeight;
  /** Height of the header while the panel is collapsed. */
  collapsedHeight;
  /** Tab index of the header. */
  tabIndex = 0;
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe((origin) => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static \u0275fac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanelHeader,
    selectors: [["mat-expansion-panel-header"]],
    hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
    hostVars: 13,
    hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
          return ctx._toggle();
        })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        \u0275\u0275styleProp("height", ctx._getHeaderHeight());
        \u0275\u0275classProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
      }
    },
    inputs: {
      expandedHeight: "expandedHeight",
      collapsedHeight: "collapsedHeight",
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
    template: function MatExpansionPanelHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275domElementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 0, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-content-hide-toggle", !ctx._showToggle());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._showToggle() ? 4 : -1);
      }
    },
    styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelHeader, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      },
      template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
      styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n']
    }]
  }], () => [], {
    expandedHeight: [{
      type: Input
    }],
    collapsedHeight: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatExpansionPanelDescription = class _MatExpansionPanelDescription {
  static \u0275fac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelDescription)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelDescription,
    selectors: [["mat-panel-description"]],
    hostAttrs: [1, "mat-expansion-panel-header-description"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelDescription, [{
    type: Directive,
    args: [{
      selector: "mat-panel-description",
      host: {
        class: "mat-expansion-panel-header-description"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelTitle = class _MatExpansionPanelTitle {
  static \u0275fac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelTitle,
    selectors: [["mat-panel-title"]],
    hostAttrs: [1, "mat-expansion-panel-header-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelTitle, [{
    type: Directive,
    args: [{
      selector: "mat-panel-title",
      host: {
        class: "mat-expansion-panel-header-title"
      }
    }]
  }], null, null);
})();
var MatAccordion = class _MatAccordion extends CdkAccordion {
  _keyManager;
  /** Headers belonging to this accordion. */
  _ownHeaders = new QueryList();
  /** All headers inside the accordion. Includes headers inside nested accordions. */
  _headers;
  /** Whether the expansion indicator should be hidden. */
  hideToggle = false;
  /**
   * Display mode used for all expansion panels in the accordion. Currently two display
   * modes exist:
   *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
   *     panel at a different elevation from the rest of the accordion.
   *  flat - no spacing is placed around expanded panels, showing all panels at the same
   *     elevation.
   */
  displayMode = "default";
  /** The position of the expansion indicator. */
  togglePosition = "after";
  ngAfterContentInit() {
    this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
      this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatAccordion_BaseFactory;
    return function MatAccordion_Factory(__ngFactoryType__) {
      return (\u0275MatAccordion_BaseFactory || (\u0275MatAccordion_BaseFactory = \u0275\u0275getInheritedFactory(_MatAccordion)))(__ngFactoryType__ || _MatAccordion);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAccordion,
    selectors: [["mat-accordion"]],
    contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headers = _t);
      }
    },
    hostAttrs: [1, "mat-accordion"],
    hostVars: 2,
    hostBindings: function MatAccordion_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-accordion-multi", ctx.multi);
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      displayMode: "displayMode",
      togglePosition: "togglePosition"
    },
    exportAs: ["matAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ACCORDION,
      useExisting: _MatAccordion
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAccordion, [{
    type: Directive,
    args: [{
      selector: "mat-accordion",
      exportAs: "matAccordion",
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: "mat-accordion",
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        "[class.mat-accordion-multi]": "this.multi"
      }
    }]
  }], null, {
    _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayMode: [{
      type: Input
    }],
    togglePosition: [{
      type: Input
    }]
  });
})();
var MatExpansionModule = class _MatExpansionModule {
  static \u0275fac = function MatExpansionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatExpansionModule,
    imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
    exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkAccordionModule, PortalModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();

// src/app/pages/landing/faq/qa-item/qa-item.ts
var QaItem = class _QaItem {
  qa;
  isEven = false;
  isOdd = false;
  static \u0275fac = function QaItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QaItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QaItem, selectors: [["app-qa-item"]], inputs: { qa: "qa", isEven: "isEven", isOdd: "isOdd" }, decls: 7, vars: 6, consts: [[1, "faq-accordion"]], template: function QaItem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-accordion", 0)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header")(3, "mat-panel-title");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("even", ctx.isEven)("odd", ctx.isOdd);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.qa.question);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.qa.answer);
    }
  }, dependencies: [MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle], styles: ["\n\n.faq-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid var(--border);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  margin-bottom: 12px;\n  background-color: var(--surface-card);\n}\n.faq-accordion[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  font-size: 1.3em;\n}\n.faq-accordion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n  line-height: 1.6;\n  color: var(--text-muted);\n}\n@media (max-width: 768px) {\n  .faq-accordion[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n    font-size: 1.05em;\n    min-height: 64px;\n  }\n  .faq-accordion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 16px 16px;\n  }\n}\n/*# sourceMappingURL=qa-item.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QaItem, [{
    type: Component,
    args: [{ selector: "app-qa-item", imports: [MatExpansionModule], template: '<mat-accordion class="faq-accordion">\r\n  <mat-expansion-panel [class.even]="isEven" [class.odd]="isOdd">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>{{ qa.question }}</mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <p>{{ qa.answer }}</p>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n', styles: ["/* src/app/pages/landing/faq/qa-item/qa-item.scss */\n.faq-accordion mat-expansion-panel {\n  border-radius: 12px;\n  border: 1px solid var(--border);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  margin-bottom: 12px;\n  background-color: var(--surface-card);\n}\n.faq-accordion mat-expansion-panel-header {\n  padding: 24px 28px;\n  font-size: 1.3em;\n}\n.faq-accordion p {\n  padding: 0 20px 20px;\n  line-height: 1.6;\n  color: var(--text-muted);\n}\n@media (max-width: 768px) {\n  .faq-accordion mat-expansion-panel-header {\n    padding: 18px 16px;\n    font-size: 1.05em;\n    min-height: 64px;\n  }\n  .faq-accordion p {\n    padding: 0 16px 16px;\n  }\n}\n/*# sourceMappingURL=qa-item.css.map */\n"] }]
  }], null, { qa: [{
    type: Input
  }], isEven: [{
    type: Input
  }], isOdd: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QaItem, { className: "QaItem", filePath: "src/app/pages/landing/faq/qa-item/qa-item.ts", lineNumber: 11 });
})();

// src/app/pages/landing/faq/faq.ts
function Faq_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-qa-item", 5);
  }
  if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const \u0275$index_12_r2 = ctx.$index;
    \u0275\u0275property("qa", question_r1)("isEven", \u0275$index_12_r2 % 2 === 0)("isOdd", \u0275$index_12_r2 % 2 !== 0);
  }
}
var Faq = class _Faq {
  qa = [
    {
      question: "How does the AI resume generator work?",
      answer: "It uses the details you enter to draft resume sections like summaries, experience bullets, and education notes. The AI is instructed to stick to your inputs and not invent details."
    },
    {
      question: "Can I edit my AI-generated resume?",
      answer: "Yes! Every resume generated by ResumeCrafts AI is fully editable, allowing you to tweak content, style, and formatting to match your personal preferences."
    },
    {
      question: "Does ResumeCrafts AI help with cover letters?",
      answer: "Yes. You can generate a cover letter by providing a resume, job description, company name, position, and your preferred tone."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel anytime. No questions asked, no hidden fees."
    }
  ];
  static \u0275fac = function Faq_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Faq)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Faq, selectors: [["app-faq"]], decls: 8, vars: 0, consts: [["id", "FAQ", 1, "questions-section"], [1, "wrapper"], [1, "head"], [1, "title"], [1, "qas"], [1, "qa", 3, "qa", "isEven", "isOdd"]], template: function Faq_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Frequently Asked Questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275repeaterCreate(6, Faq_For_7_Template, 1, 3, "app-qa-item", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.qa);
    }
  }, dependencies: [QaItem], styles: ["\n\n.questions-section[_ngcontent-%COMP%] {\n  background: var(--section-bg, #ffffff);\n}\n.questions-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .qas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.questions-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .qas[_ngcontent-%COMP%]   .qa[_ngcontent-%COMP%] {\n  width: min(100%, 760px);\n}\n@media (max-width: 768px) {\n  .questions-section[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .qas[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n}\n/*# sourceMappingURL=faq.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Faq, [{
    type: Component,
    args: [{ selector: "app-faq", imports: [QaItem], template: '<section class="questions-section" id="FAQ">\r\n    <div class="wrapper">\r\n        <header class="head">\r\n            <h2 class="title">Frequently Asked Questions</h2>\r\n        </header>\r\n        <div class="qas">\r\n            @for (question of qa; track $index; let even = $even; let odd = $odd) {\r\n                <app-qa-item [qa]="question" class="qa" [isEven]="even" [isOdd]="odd"></app-qa-item>\r\n            }\r\n        </div>\r\n    </div>\r\n</section>', styles: ["/* src/app/pages/landing/faq/faq.scss */\n.questions-section {\n  background: var(--section-bg, #ffffff);\n}\n.questions-section .wrapper .qas {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.questions-section .wrapper .qas .qa {\n  width: min(100%, 760px);\n}\n@media (max-width: 768px) {\n  .questions-section .wrapper .qas {\n    gap: 14px;\n  }\n}\n/*# sourceMappingURL=faq.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Faq, { className: "Faq", filePath: "src/app/pages/landing/faq/faq.ts", lineNumber: 11 });
})();

// src/app/pages/landing/contact/contact.ts
function Contact_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Name is required. ");
    \u0275\u0275elementEnd();
  }
}
function Contact_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Valid email is required. ");
    \u0275\u0275elementEnd();
  }
}
function Contact_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Message is required. ");
    \u0275\u0275elementEnd();
  }
}
function Contact_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sending... ");
  }
}
function Contact_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Send Message ");
  }
}
function Contact_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.submitMessage());
  }
}
function Contact_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.submitError());
  }
}
var Contact = class _Contact {
  contactForm;
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  submitMessage = signal(null, ...ngDevMode ? [{ debugName: "submitMessage" }] : []);
  submitError = signal(null, ...ngDevMode ? [{ debugName: "submitError" }] : []);
  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", Validators.required)
    });
  }
  async onSubmit() {
    if (this.contactForm.invalid || this.isSubmitting()) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    this.submitMessage.set(null);
    this.submitError.set(null);
    try {
      const response = await fetch("https://formspree.io/f/mgolqdrv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(this.contactForm.value)
      });
      if (!response.ok) {
        throw new Error("Failed to submit contact form.");
      }
      this.contactForm.reset({
        name: "",
        email: "",
        message: ""
      });
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
      this.submitMessage.set("Message sent successfully.");
    } catch {
      this.submitError.set("Could not send your message. Please try again.");
    } finally {
      this.isSubmitting.set(false);
    }
  }
  static \u0275fac = function Contact_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact, selectors: [["app-contact"]], decls: 30, vars: 8, consts: [["id", "contact", 1, "contact-section"], [1, "wrapper"], [1, "head"], [1, "title"], [1, "sub-title"], [1, "contact-us"], ["novalidate", "", "action", "https://formspree.io/f/mgolqdrv", "method", "POST", 1, "contact-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-field"], ["matInput", "", "formControlName", "name", "name", "name", "required", ""], ["matInput", "", "type", "email", "formControlName", "email", "name", "email", "required", ""], ["matInput", "", "id", "message", "name", "message", "rows", "5", "required", "", "formControlName", "message"], ["type", "submit", 1, "send-btn", 3, "disabled"], [1, "support-text"]], template: function Contact_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Get in Touch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Have questions? We'd love to hear from you.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card", 5)(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function Contact_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "mat-label");
      \u0275\u0275text(12, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 9);
      \u0275\u0275conditionalCreate(14, Contact_Conditional_14_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "mat-label");
      \u0275\u0275text(17, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 10);
      \u0275\u0275conditionalCreate(19, Contact_Conditional_19_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "mat-label");
      \u0275\u0275text(22, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "textarea", 11);
      \u0275\u0275conditionalCreate(24, Contact_Conditional_24_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 12);
      \u0275\u0275conditionalCreate(26, Contact_Conditional_26_Template, 1, 0)(27, Contact_Conditional_27_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(28, Contact_Conditional_28_Template, 2, 1, "p", 13);
      \u0275\u0275conditionalCreate(29, Contact_Conditional_29_Template, 2, 1, "p", 13);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.contactForm);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.touched) ? 14 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.touched) ? 19 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_3_0 = ctx.contactForm.get("message")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.contactForm.get("message")) == null ? null : tmp_3_0.touched) ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSubmitting() ? 26 : 27);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.submitMessage() ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitError() ? 29 : -1);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatLabel,
    MatError,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatCardModule,
    MatCard
  ], styles: ["\n\n.contact-section[_ngcontent-%COMP%] {\n  background-color: var(--section-bg, transparent);\n}\n.contact-us[_ngcontent-%COMP%] {\n  width: min(100%, 760px);\n  background: var(--surface-card);\n  padding: 40px;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n}\n@media (max-width: 768px) {\n  .contact-us[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n}\n@media (max-width: 600px) {\n  .contact-us[_ngcontent-%COMP%] {\n    padding: 22px 14px;\n  }\n}\n.contact-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  margin-bottom: 6px;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  font-size: 15px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  outline: none;\n  transition: 0.2s;\n  background: #fff;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-500);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\nmat-error[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #d64545;\n  margin-top: 4px;\n}\n.send-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 0;\n  background: var(--mat-sys-primary);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.send-btn[_ngcontent-%COMP%]:hover {\n  background: #1e4ed8;\n}\n.support-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: var(--text-muted);\n  margin-top: 10px;\n}\n.support-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--mat-sys-primary);\n  text-decoration: none;\n  font-weight: 600;\n}\n.support-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=contact.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contact, [{
    type: Component,
    args: [{ selector: "app-contact", standalone: true, imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule
    ], template: `<section id="contact" class="contact-section">\r
  <div class="wrapper">\r
    <header class="head">\r
      <h2 class="title">Get in Touch</h2>\r
      <p class="sub-title">Have questions? We'd love to hear from you.</p>\r
    </header>\r
    <mat-card class="contact-us">\r
      <form\r
        class="contact-form"\r
        [formGroup]="contactForm"\r
        (ngSubmit)="onSubmit()"\r
        novalidate\r
        action="https://formspree.io/f/mgolqdrv"\r
        method="POST"\r
      >\r
        <div class="form-group">\r
          <div class="form-field">\r
            <mat-label>Name</mat-label>\r
            <input matInput formControlName="name" name="name" required />\r
            @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {\r
              <mat-error> Name is required. </mat-error>\r
            }\r
          </div>\r
          <div class="form-field">\r
            <mat-label>Email</mat-label>\r
            <input matInput type="email" formControlName="email" name="email" required />\r
            @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {\r
              <mat-error> Valid email is required. </mat-error>\r
            }\r
          </div>\r
          <div class="form-field">\r
            <mat-label>Message</mat-label>\r
            <textarea\r
              matInput\r
              id="message"\r
              name="message"\r
              rows="5"\r
              required\r
              formControlName="message"\r
            ></textarea>\r
            @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {\r
              <mat-error> Message is required. </mat-error>\r
            }\r
          </div>\r
          <button class="send-btn" type="submit" [disabled]="isSubmitting()">\r
            @if (isSubmitting()) {\r
              Sending...\r
            } @else {\r
              Send Message\r
            }\r
          </button>\r
          @if (submitMessage()) {\r
            <p class="support-text">{{ submitMessage() }}</p>\r
          }\r
          @if (submitError()) {\r
            <p class="support-text">{{ submitError() }}</p>\r
          }\r
        </div>\r
      </form>\r
    </mat-card>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/landing/contact/contact.scss */\n.contact-section {\n  background-color: var(--section-bg, transparent);\n}\n.contact-us {\n  width: min(100%, 760px);\n  background: var(--surface-card);\n  padding: 40px;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n}\n@media (max-width: 768px) {\n  .contact-us {\n    padding: 28px 20px;\n  }\n}\n@media (max-width: 600px) {\n  .contact-us {\n    padding: 22px 14px;\n  }\n}\n.contact-form {\n  width: 100%;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.form-field mat-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  margin-bottom: 6px;\n}\n.form-field input,\n.form-field textarea {\n  width: 100%;\n  padding: 14px 16px;\n  font-size: 15px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  outline: none;\n  transition: 0.2s;\n  background: #fff;\n}\n.form-field input:focus,\n.form-field textarea:focus {\n  border-color: var(--brand-500);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\nmat-error {\n  font-size: 13px;\n  color: #d64545;\n  margin-top: 4px;\n}\n.send-btn {\n  width: 100%;\n  padding: 14px 0;\n  background: var(--mat-sys-primary);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.send-btn:hover {\n  background: #1e4ed8;\n}\n.support-text {\n  text-align: center;\n  font-size: 14px;\n  color: var(--text-muted);\n  margin-top: 10px;\n}\n.support-text a {\n  color: var(--mat-sys-primary);\n  text-decoration: none;\n  font-weight: 600;\n}\n.support-text a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=contact.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact, { className: "Contact", filePath: "src/app/pages/landing/contact/contact.ts", lineNumber: 22 });
})();

// src/app/pages/landing/simple-steps/step/step.ts
var _c07 = (a0, a1, a2) => ({ "first-step": a0, "second-step": a1, "third-step": a2 });
var Step = class _Step {
  step;
  static \u0275fac = function Step_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Step)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Step, selectors: [["app-step"]], inputs: { step: "step" }, decls: 11, vars: 9, consts: [[1, "step"], [1, "step-sign", 3, "ngClass"], [1, "material-symbols-outlined"], [1, "step-number"], [1, "step-title"], [1, "step-description"]], template: function Step_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "span");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h3", 4);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c07, ctx.step.id === 0, ctx.step.id === 1, ctx.step.id === 2));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.step.stepIcon);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.step.id + 1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.step.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.step.description);
    }
  }, dependencies: [NgClass], styles: ["\n\n.step[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.6rem;\n  height: 100%;\n  padding: 1.5rem 1.15rem;\n  border-radius: 18px;\n  border: 1px solid #dbe5f3;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(248, 250, 252, 0.98)),\n    #ffffff;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.07);\n}\n.step[_ngcontent-%COMP%]   .step-sign[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n  margin: 0 auto 0.75rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 16px;\n  background-color: rgba(15, 23, 42, 0.04);\n  color: var(--text-primary);\n}\n.step[_ngcontent-%COMP%]   .step-sign[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 1.8rem;\n}\n.step[_ngcontent-%COMP%]   .step-sign.first-step[_ngcontent-%COMP%] {\n  color: var(--mat-sys-primary);\n  background-color: rgba(59, 130, 246, 0.1);\n}\n.step[_ngcontent-%COMP%]   .step-sign.second-step[_ngcontent-%COMP%] {\n  color: #b45309;\n  background-color: #fef3c7;\n}\n.step[_ngcontent-%COMP%]   .step-sign.third-step[_ngcontent-%COMP%] {\n  color: #22c55e;\n  background-color: #dcfce7;\n}\n.step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  background-color: var(--mat-sys-primary);\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  border-radius: 100px;\n}\n.step[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: #0f172a;\n  line-height: 1.25;\n}\n.step[_ngcontent-%COMP%]   .step-description[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: #556070;\n  line-height: 1.55;\n  font-size: 0.98rem;\n}\n/*# sourceMappingURL=step.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Step, [{
    type: Component,
    args: [{ selector: "app-step", imports: [NgClass], template: `<div class="step">\r
  <div\r
    class="step-sign"\r
    [ngClass]="{\r
      'first-step': step.id === 0,\r
      'second-step': step.id === 1,\r
      'third-step': step.id === 2,\r
    }"\r
  >\r
    <span class="material-symbols-outlined">{{ step.stepIcon }}</span>\r
  </div>\r
  <div class="step-number"><span>{{ step.id + 1 }}</span></div>\r
  <h3 class="step-title">{{ step.title }}</h3>\r
  <p class="step-description">{{ step.description }}</p>\r
</div>\r
`, styles: ["/* src/app/pages/landing/simple-steps/step/step.scss */\n.step {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.6rem;\n  height: 100%;\n  padding: 1.5rem 1.15rem;\n  border-radius: 18px;\n  border: 1px solid #dbe5f3;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(248, 250, 252, 0.98)),\n    #ffffff;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.07);\n}\n.step .step-sign {\n  width: 4.5rem;\n  height: 4.5rem;\n  margin: 0 auto 0.75rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 16px;\n  background-color: rgba(15, 23, 42, 0.04);\n  color: var(--text-primary);\n}\n.step .step-sign span {\n  color: inherit;\n  font-size: 1.8rem;\n}\n.step .step-sign.first-step {\n  color: var(--mat-sys-primary);\n  background-color: rgba(59, 130, 246, 0.1);\n}\n.step .step-sign.second-step {\n  color: #b45309;\n  background-color: #fef3c7;\n}\n.step .step-sign.third-step {\n  color: #22c55e;\n  background-color: #dcfce7;\n}\n.step .step-number {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  background-color: var(--mat-sys-primary);\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  border-radius: 100px;\n}\n.step .step-title {\n  margin-top: 0.1rem;\n  color: #0f172a;\n  line-height: 1.25;\n}\n.step .step-description {\n  margin-top: 0.1rem;\n  color: #556070;\n  line-height: 1.55;\n  font-size: 0.98rem;\n}\n/*# sourceMappingURL=step.css.map */\n"] }]
  }], null, { step: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Step, { className: "Step", filePath: "src/app/pages/landing/simple-steps/step/step.ts", lineNumber: 10 });
})();

// src/app/pages/landing/simple-steps/simple-steps.ts
var _c08 = () => ["/application/dashboard"];
var _forTrack04 = ($index, $item) => $item.id;
function SimpleSteps_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step", 7);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275property("step", step_r1);
  }
}
var SimpleSteps = class _SimpleSteps {
  steps = [
    {
      id: 0,
      title: "Enter Your Info",
      description: "Just fill in basic details about your work experience and education. Takes 2 minutes.",
      stepIcon: "create"
    },
    {
      id: 1,
      title: "AI Creates Your Resume",
      description: "Our AI writes professional content, formats everything perfectly, and optimizes for ATS..",
      stepIcon: "auto_awesome"
    },
    {
      id: 2,
      title: "Download & Apply",
      description: "Download your polished resume and start applying to jobs. Get more interviews guaranteed.",
      stepIcon: "download"
    }
  ];
  static \u0275fac = function SimpleSteps_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SimpleSteps)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimpleSteps, selectors: [["app-simple-steps"]], decls: 12, vars: 2, consts: [["simpleStepsRef", ""], ["id", "simple-steps", 1, "simple-steps"], [1, "wrapper"], [1, "head"], [1, "title"], [1, "sub-title"], [1, "steps-grid"], [3, "step"], ["icon", "arrow_forward", "label", "Get Started Now - It's Free", "ariaLabel", "Get Started Now - It's Free", 1, "section-cta", 3, "link"]], template: function SimpleSteps_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1, 0)(2, "div", 2)(3, "header", 3)(4, "h2", 4);
      \u0275\u0275text(5, "How It Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "3 Simple Steps to Get You Hired Faster");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275repeaterCreate(9, SimpleSteps_For_10_Template, 1, 1, "app-step", 7, _forTrack04);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-landing-cta", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.steps);
      \u0275\u0275advance(2);
      \u0275\u0275property("link", \u0275\u0275pureFunction0(1, _c08));
    }
  }, dependencies: [LandingCta, Step], styles: ["\n\n.simple-steps[_ngcontent-%COMP%] {\n  background: var(--section-bg, #ffffff);\n}\n.simple-steps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .steps-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 22px;\n  align-items: stretch;\n  justify-content: center;\n}\n.simple-steps[_ngcontent-%COMP%]   .section-cta[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n@media (max-width: 980px) {\n  .simple-steps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .simple-steps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .steps-grid[_ngcontent-%COMP%]   app-step[_ngcontent-%COMP%]:nth-child(3) {\n    grid-column: 1/-1;\n    justify-self: center;\n  }\n}\n@media (max-width: 640px) {\n  .simple-steps[_ngcontent-%COMP%] {\n    padding-top: 60px;\n    padding-bottom: 60px;\n  }\n  .simple-steps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n    margin-bottom: 26px;\n  }\n  .simple-steps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: clamp(1.85rem, 6.5vw, 2.2rem);\n  }\n  .simple-steps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .simple-steps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n}\n/*# sourceMappingURL=simple-steps.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleSteps, [{
    type: Component,
    args: [{ selector: "app-simple-steps", imports: [LandingCta, Step], template: `<section class="simple-steps" id="simple-steps" #simpleStepsRef>\r
  <div class="wrapper">\r
    <header class="head">\r
      <h2 class="title">How It Works</h2>\r
      <p class="sub-title">3 Simple Steps to Get You Hired Faster</p>\r
    </header>\r
    <div class="steps-grid">\r
        @for (step of steps; track step.id) {\r
            <app-step [step]="step"></app-step>\r
        }\r
    </div>\r
    <app-landing-cta\r
      class="section-cta"\r
      [link]="['/application/dashboard']"\r
      icon="arrow_forward"\r
      label="Get Started Now - It's Free"\r
      ariaLabel="Get Started Now - It's Free"\r
      ></app-landing-cta>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/landing/simple-steps/simple-steps.scss */\n.simple-steps {\n  background: var(--section-bg, #ffffff);\n}\n.simple-steps .wrapper .steps-grid {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 22px;\n  align-items: stretch;\n  justify-content: center;\n}\n.simple-steps .section-cta {\n  margin-top: 12px;\n}\n@media (max-width: 980px) {\n  .simple-steps .wrapper .steps-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .simple-steps .wrapper .steps-grid app-step:nth-child(3) {\n    grid-column: 1/-1;\n    justify-self: center;\n  }\n}\n@media (max-width: 640px) {\n  .simple-steps {\n    padding-top: 60px;\n    padding-bottom: 60px;\n  }\n  .simple-steps .wrapper .head {\n    margin-bottom: 26px;\n  }\n  .simple-steps .wrapper .head .title {\n    font-size: clamp(1.85rem, 6.5vw, 2.2rem);\n  }\n  .simple-steps .wrapper .head .sub-title {\n    font-size: 1rem;\n  }\n  .simple-steps .wrapper .steps-grid {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n}\n/*# sourceMappingURL=simple-steps.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimpleSteps, { className: "SimpleSteps", filePath: "src/app/pages/landing/simple-steps/simple-steps.ts", lineNumber: 11 });
})();

// src/app/pages/landing/landing.ts
var Landing = class _Landing {
  hostRef = inject(ElementRef);
  observer;
  ngAfterViewInit() {
    if (typeof window === "undefined") {
      return;
    }
    const root = this.hostRef.nativeElement;
    const revealSelector = [
      ".hero .text",
      ".hero .picture",
      ".features .head",
      ".features .card",
      ".about .head",
      ".about .mission-card",
      ".about .feature-card",
      ".pricing .head",
      ".pricing .pricing-card",
      ".questions-section .head",
      ".questions-section .qa",
      ".contact-section .head",
      ".contact-section .contact-us"
    ].join(", ");
    const revealTargets = Array.from(root.querySelectorAll(revealSelector));
    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${index % 8 * 90}ms`);
    });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        this.observer?.unobserve(entry.target);
      });
    }, {
      threshold: 0.18,
      rootMargin: "0px 0px -12% 0px"
    });
    revealTargets.forEach((element) => this.observer?.observe(element));
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  static \u0275fac = function Landing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Landing)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Landing, selectors: [["app-landing"]], decls: 9, vars: 1, consts: [[1, "landing"], [3, "headerType"]], template: function Landing_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header", 1)(2, "app-hero")(3, "app-features")(4, "app-simple-steps")(5, "app-about")(6, "app-faq")(7, "app-contact")(8, "app-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("headerType", "nav");
    }
  }, dependencies: [Header, Hero, Features, About, Faq, Contact, Footer, SimpleSteps], styles: ["/* src/app/pages/landing/landing.scss */\n.landing {\n  background: var(--surface);\n  color: var(--text);\n  overflow: clip;\n}\n.landing app-hero {\n  --section-bg: #ffffff;\n}\n.landing app-features {\n  --section-bg: transparent;\n}\n.landing app-simple-steps {\n  --section-bg: #ffffff;\n}\n.landing app-about {\n  --section-bg: transparent;\n}\n.landing app-faq {\n  --section-bg: #ffffff;\n}\n.landing app-contact {\n  --section-bg: transparent;\n}\n.landing .reveal-item {\n  opacity: 0;\n  transform: translate3d(0, 36px, 0) scale(0.98);\n  filter: blur(8px);\n  transition:\n    opacity 0.65s cubic-bezier(0.2, 0.65, 0.2, 1),\n    transform 0.8s cubic-bezier(0.2, 0.65, 0.2, 1),\n    filter 0.65s ease;\n  transition-delay: var(--reveal-delay, 0ms);\n  will-change:\n    transform,\n    opacity,\n    filter;\n}\n.landing .reveal-item.is-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0) scale(1);\n  filter: blur(0);\n}\n.landing .card,\n.landing .feature-card,\n.landing .pricing-card,\n.landing .contact-us,\n.landing .mission-card {\n  transform-style: preserve-3d;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.landing .card:hover,\n.landing .feature-card:hover,\n.landing .pricing-card:hover,\n.landing .contact-us:hover,\n.landing .mission-card:hover {\n  transform: translateY(-6px) scale(1.01);\n}\n@media (prefers-reduced-motion: reduce) {\n  .landing .reveal-item,\n  .landing .reveal-item.is-visible {\n    opacity: 1;\n    transform: none;\n    filter: none;\n    transition: none;\n  }\n}\n/*# sourceMappingURL=landing.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Landing, [{
    type: Component,
    args: [{ selector: "app-landing", imports: [Header, Hero, Features, About, PricingPlans, Faq, Contact, Footer, SimpleSteps], encapsulation: ViewEncapsulation.None, template: `<div class="landing">\r
  <app-header [headerType]="'nav'"></app-header>\r
  <app-hero></app-hero>\r
  <app-features></app-features>\r
  <app-simple-steps></app-simple-steps>\r
  <app-about></app-about>\r
  <!-- <app-pricing-plans></app-pricing-plans> -->\r
  <app-faq></app-faq>\r
  <app-contact></app-contact>\r
  <app-footer></app-footer>\r
</div>\r
`, styles: ["/* src/app/pages/landing/landing.scss */\n.landing {\n  background: var(--surface);\n  color: var(--text);\n  overflow: clip;\n}\n.landing app-hero {\n  --section-bg: #ffffff;\n}\n.landing app-features {\n  --section-bg: transparent;\n}\n.landing app-simple-steps {\n  --section-bg: #ffffff;\n}\n.landing app-about {\n  --section-bg: transparent;\n}\n.landing app-faq {\n  --section-bg: #ffffff;\n}\n.landing app-contact {\n  --section-bg: transparent;\n}\n.landing .reveal-item {\n  opacity: 0;\n  transform: translate3d(0, 36px, 0) scale(0.98);\n  filter: blur(8px);\n  transition:\n    opacity 0.65s cubic-bezier(0.2, 0.65, 0.2, 1),\n    transform 0.8s cubic-bezier(0.2, 0.65, 0.2, 1),\n    filter 0.65s ease;\n  transition-delay: var(--reveal-delay, 0ms);\n  will-change:\n    transform,\n    opacity,\n    filter;\n}\n.landing .reveal-item.is-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0) scale(1);\n  filter: blur(0);\n}\n.landing .card,\n.landing .feature-card,\n.landing .pricing-card,\n.landing .contact-us,\n.landing .mission-card {\n  transform-style: preserve-3d;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.landing .card:hover,\n.landing .feature-card:hover,\n.landing .pricing-card:hover,\n.landing .contact-us:hover,\n.landing .mission-card:hover {\n  transform: translateY(-6px) scale(1.01);\n}\n@media (prefers-reduced-motion: reduce) {\n  .landing .reveal-item,\n  .landing .reveal-item.is-visible {\n    opacity: 1;\n    transform: none;\n    filter: none;\n    transition: none;\n  }\n}\n/*# sourceMappingURL=landing.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Landing, { className: "Landing", filePath: "src/app/pages/landing/landing.ts", lineNumber: 26 });
})();
export {
  Landing
};
//# sourceMappingURL=chunk-6SWMCCFI.js.map
