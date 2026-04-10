import {
  coverLetterReducer,
  deleteCoverLetter,
  generateCoverLetter,
  generateCoverLetterFailure,
  generateCoverLetterSuccess,
  loadAllCoverLetters,
  loadAllCoverLettersFailure,
  loadAllCoverLettersSuccess
} from "./chunk-SDTOOSX3.js";
import {
  addJob,
  addJobFailure,
  addJobSuccess,
  clearJobsState,
  deleteJob,
  deleteJobFailure,
  deleteJobSuccess,
  jobsReducer,
  loadJobs,
  loadJobsFailure,
  loadJobsSuccess,
  moveJob,
  moveJobFailure,
  moveJobSuccess,
  updateJob,
  updateJobFailure,
  updateJobSuccess
} from "./chunk-466HBO3F.js";
import {
  createResume,
  createResumeFailure,
  createResumeSuccess,
  deleteResume,
  deleteResumeFailure,
  deleteResumeSuccess,
  loadResumes,
  loadResumesFailure,
  loadResumesSuccess,
  resumesReducer,
  saveAIResultFailure,
  saveAIResultSuccess,
  saveResume,
  saveResumeFailure,
  saveResumeSuccess,
  tailorResume,
  tailorResumeFailure,
  tailorResumeSuccess
} from "./chunk-5VXP3HLW.js";
import {
  NotificationType,
  NotificationsService,
  clearAllNotifications,
  hideNotification,
  showNotification
} from "./chunk-EYC2LAWI.js";
import {
  Firestore,
  ResumeService,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  getFirestore,
  orderBy,
  provideFirestore,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch
} from "./chunk-E7Z7URHS.js";
import "./chunk-TIJC3XQI.js";
import "./chunk-U4YT2HSO.js";
import "./chunk-7YWLATDR.js";
import {
  clearBillingError,
  startCheckout,
  startCheckoutFailure,
  startCheckoutSuccess
} from "./chunk-NSBTMR5D.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-JO7F5BXY.js";
import "./chunk-UIUNXKUC.js";
import {
  BillingService,
  CallableService
} from "./chunk-436PNFTE.js";
import {
  Auth,
  Functions,
  authState,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  getFunctions,
  httpsCallable,
  initializeApp,
  provideAuth,
  provideFirebaseApp,
  provideFunctions,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  user
} from "./chunk-GTOMM46D.js";
import {
  AuthFacade,
  AuthStatus,
  authReducer,
  authResolvedNoUser,
  deleteAccount,
  deleteAccountFailure,
  deleteAccountSuccess,
  initUser,
  initUserFailure,
  initUserSuccess,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess
} from "./chunk-4TREYFXK.js";
import {
  ActionsSubject,
  FEATURE_STATE_PROVIDER,
  INIT,
  INITIAL_STATE,
  ROOT_STORE_PROVIDER,
  ReducerManagerDispatcher,
  ReducerObservable,
  ScannedActionsSubject,
  StateObservable,
  Store,
  StoreFeatureModule,
  StoreRootModule,
  UPDATE,
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  provideStore,
  takeUntilDestroyed,
  toSignal
} from "./chunk-G2253GUZ.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
  provideRouter
} from "./chunk-4QIJMJL3.js";
import {
  HTTP_INTERCEPTORS,
  Meta,
  Title,
  bootstrapApplication,
  provideClientHydration,
  provideHttpClient,
  withEventReplay
} from "./chunk-5DFGQV6T.js";
import {
  AsyncPipe,
  CommonModule,
  isPlatformBrowser
} from "./chunk-DNRS4C6J.js";
import {
  Component,
  DOCUMENT,
  DestroyRef,
  EMPTY,
  ErrorHandler,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  NgZone,
  Observable,
  Optional,
  PLATFORM_ID,
  ReplaySubject,
  Subject,
  catchError,
  concatMap,
  debounceTime,
  dematerialize,
  exhaustMap,
  filter,
  firstValueFrom,
  from,
  groupBy,
  ignoreElements,
  inject,
  makeEnvironmentProviders,
  map,
  materialize,
  merge,
  mergeMap,
  observeOn,
  of,
  provideBrowserGlobalErrorListeners,
  provideEnvironmentInitializer,
  provideZonelessChangeDetection,
  queueScheduler,
  scan,
  setClassMetadata,
  share,
  signal,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  timeout,
  timer,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferEnableTimerScheduling,
  ɵɵdeferOnViewport,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OFJZEGRZ.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// src/app/app.routes.ts
var routes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-6SWMCCFI.js").then((c) => c.Landing),
    data: {
      seo: {
        title: "ResumeCrafts AI | AI Resume Builder & Cover Letter Generator",
        description: "Build ATS-ready resumes and personalized cover letters with AI. ResumeCrafts AI helps job seekers create professional applications faster.",
        keywords: "AI resume builder, cover letter generator, ATS resume, job search tools, ResumeCrafts AI",
        robots: "index, follow",
        canonicalPath: "/",
        ogType: "website",
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ResumeCrafts AI",
            url: "https://resume-crafts.com",
            logo: "https://resume-crafts.com/assets/hero-image.png"
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ResumeCrafts AI",
            url: "https://resume-crafts.com"
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ResumeCrafts AI",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            url: "https://resume-crafts.com"
          }
        ]
      }
    }
  }, false ? { \u0275entryName: "src/app/pages/landing/landing.ts" } : {}),
  {
    path: "auth",
    data: {
      seo: {
        title: "Sign In or Sign Up | ResumeCrafts AI",
        description: "Access your ResumeCrafts AI account to manage resumes and cover letters.",
        robots: "noindex, nofollow",
        canonicalPath: "/auth",
        ogType: "website"
      }
    },
    children: [
      __spreadValues({
        path: "login",
        loadComponent: () => import("./chunk-D4BTPDXV.js").then((c) => c.Login),
        data: {
          seo: {
            title: "Log In | ResumeCrafts AI",
            description: "Log in to ResumeCrafts AI to continue building your job application assets.",
            robots: "noindex, nofollow",
            canonicalPath: "/auth/login",
            ogType: "website"
          }
        }
      }, false ? { \u0275entryName: "src/app/pages/auth/login/login.ts" } : {}),
      __spreadValues({
        path: "signup",
        loadComponent: () => import("./chunk-7CAINLOL.js").then((c) => c.Signup),
        data: {
          seo: {
            title: "Create Account | ResumeCrafts AI",
            description: "Create your ResumeCrafts AI account and start generating professional resumes and cover letters.",
            robots: "noindex, nofollow",
            canonicalPath: "/auth/signup",
            ogType: "website"
          }
        }
      }, false ? { \u0275entryName: "src/app/pages/auth/signup/signup.ts" } : {})
    ]
  },
  __spreadValues({
    path: "checkouts",
    loadChildren: () => import("./chunk-ZEDPYCHE.js").then((c) => c.CHECKOUT_ROUTES),
    data: {
      seo: {
        title: "Checkout | ResumeCrafts AI",
        description: "Complete your purchase to unlock ResumeCrafts AI premium features.",
        robots: "noindex, nofollow",
        canonicalPath: "/checkouts",
        ogType: "website"
      }
    }
  }, false ? { \u0275entryName: "src/app/pages/landing/pricing-plans/checkouts/checkouts.routes.ts" } : {}),
  __spreadValues({
    path: "privacy-policy",
    loadComponent: () => import("./chunk-U7MAULP7.js").then((c) => c.PrivacyPolicy),
    data: {
      seo: {
        title: "Privacy Policy | ResumeCrafts AI",
        description: "Read how ResumeCrafts AI collects, uses, and protects your data.",
        robots: "index, follow",
        canonicalPath: "/privacy-policy",
        ogType: "article"
      }
    }
  }, false ? { \u0275entryName: "src/app/pages/landing/legal/privacy-policy/privacy-policy.ts" } : {}),
  __spreadValues({
    path: "terms-of-service",
    loadComponent: () => import("./chunk-SMOH3UOG.js").then((c) => c.TermsOfService),
    data: {
      seo: {
        title: "Terms of Service | ResumeCrafts AI",
        description: "Read the Terms of Service for using ResumeCrafts AI.",
        robots: "index, follow",
        canonicalPath: "/terms-of-service",
        ogType: "article"
      }
    }
  }, false ? { \u0275entryName: "src/app/pages/landing/legal/terms-of-service/terms-of-service.ts" } : {}),
  __spreadValues({
    path: "application/resume-generator",
    loadComponent: () => import("./chunk-K5OLLPKS.js").then((c) => c.ResumesCreate),
    data: {
      seo: {
        title: "Resume Generator | ResumeCrafts AI",
        description: "Generate a resume with AI without signing in.",
        robots: "noindex, nofollow",
        canonicalPath: "/application/resume-generator",
        ogType: "website"
      }
    }
  }, false ? { \u0275entryName: "src/app/pages/application/resumes/resumes-create/resumes-create.ts" } : {}),
  __spreadValues({
    path: "application",
    loadChildren: () => import("./chunk-JCRQXDUZ.js").then((r) => r.APPLICATION_ROUTES),
    data: {
      seo: {
        title: "Dashboard | ResumeCrafts AI",
        description: "Manage your resumes, cover letters, and applications in ResumeCrafts AI.",
        robots: "noindex, nofollow",
        canonicalPath: "/application",
        ogType: "website"
      }
    }
  }, false ? { \u0275entryName: "src/app/pages/application/application.routes.ts" } : {})
];

// src/app/core/interceptors/error.interceptor.ts
var ErrorInterceptor = class _ErrorInterceptor {
  intercept(request, next) {
    return next.handle(request).pipe(catchError((error) => {
      let errorMessage = "An unknown error occurred!";
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 400:
            errorMessage = "Bad Request. Please check your input.";
            break;
          case 401:
            errorMessage = "Unauthorized. Please log in again.";
            break;
          case 403:
            errorMessage = "Forbidden. You do not have permission to perform this action.";
            break;
          case 404:
            errorMessage = "Not Found. The requested resource was not found.";
            break;
          case 500:
            errorMessage = "Internal Server Error. Please try again later.";
            break;
          default:
            errorMessage = `Error Code: ${error.status}
Message: ${error.message}`;
        }
      }
      console.error("HTTP Error:", errorMessage);
      return throwError(() => new Error(errorMessage));
    }));
  }
  static \u0275fac = function ErrorInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErrorInterceptor, factory: _ErrorInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorInterceptor, [{
    type: Injectable
  }], null, null);
})();

// src/environments/environment.ts
var environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAvJWdqhgPO2gqxPmvRhjzj0xK8ay0hp_8",
    authDomain: "ai-job-seeker-ed1d3.firebaseapp.com",
    projectId: "ai-job-seeker-ed1d3",
    storageBucket: "ai-job-seeker-ed1d3.firebasestorage.app",
    messagingSenderId: "987943610256",
    appId: "1:987943610256:web:5146c6fb9364d3aef37515",
    measurementId: "G-XHCDRESMK0"
  }
};

// node_modules/@ngrx/effects/fesm2022/ngrx-effects.mjs
var DEFAULT_EFFECT_CONFIG = {
  dispatch: true,
  functional: false,
  useEffectsErrorHandler: true
};
var CREATE_EFFECT_METADATA_KEY = "__@ngrx/effects_create__";
function createEffect(source, config = {}) {
  const effect = config.functional ? source : source();
  const value = __spreadValues(__spreadValues({}, DEFAULT_EFFECT_CONFIG), config);
  Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
    value
  });
  return effect;
}
function getCreateEffectMetadata(instance) {
  const propertyNames = Object.getOwnPropertyNames(instance);
  const metadata = propertyNames.filter((propertyName) => {
    if (instance[propertyName] && instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY)) {
      const property = instance[propertyName];
      return property[CREATE_EFFECT_METADATA_KEY].hasOwnProperty("dispatch");
    }
    return false;
  }).map((propertyName) => {
    const metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
    return __spreadValues({
      propertyName
    }, metaData);
  });
  return metadata;
}
function getSourceMetadata(instance) {
  return getCreateEffectMetadata(instance);
}
function getSourceForInstance(instance) {
  return Object.getPrototypeOf(instance);
}
function isClassInstance(obj) {
  return !!obj.constructor && obj.constructor.name !== "Object" && obj.constructor.name !== "Function";
}
function isClass(classOrRecord) {
  return typeof classOrRecord === "function";
}
function getClasses(classesAndRecords) {
  return classesAndRecords.filter(isClass);
}
function isToken(tokenOrRecord) {
  return tokenOrRecord instanceof InjectionToken || isClass(tokenOrRecord);
}
function mergeEffects(sourceInstance, globalErrorHandler, effectsErrorHandler) {
  const source = getSourceForInstance(sourceInstance);
  const isClassBasedEffect = !!source && source.constructor.name !== "Object";
  const sourceName = isClassBasedEffect ? source.constructor.name : null;
  const observables$ = getSourceMetadata(sourceInstance).map(({
    propertyName,
    dispatch,
    useEffectsErrorHandler
  }) => {
    const observable$ = typeof sourceInstance[propertyName] === "function" ? sourceInstance[propertyName]() : sourceInstance[propertyName];
    const effectAction$ = useEffectsErrorHandler ? effectsErrorHandler(observable$, globalErrorHandler) : observable$;
    if (dispatch === false) {
      return effectAction$.pipe(ignoreElements());
    }
    const materialized$ = effectAction$.pipe(materialize());
    return materialized$.pipe(map((notification) => ({
      effect: sourceInstance[propertyName],
      notification,
      propertyName,
      sourceName,
      sourceInstance
    })));
  });
  return merge(...observables$);
}
var MAX_NUMBER_OF_RETRY_ATTEMPTS = 10;
function defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft = MAX_NUMBER_OF_RETRY_ATTEMPTS) {
  return observable$.pipe(catchError((error) => {
    if (errorHandler) errorHandler.handleError(error);
    if (retryAttemptLeft <= 1) {
      return observable$;
    }
    return defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft - 1);
  }));
}
var _Actions = class _Actions extends Observable {
  constructor(source) {
    super();
    if (source) {
      this.source = source;
    }
  }
  lift(operator) {
    const observable = new _Actions();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
};
_Actions.\u0275fac = function Actions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Actions)(\u0275\u0275inject(ScannedActionsSubject));
};
_Actions.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Actions,
  factory: _Actions.\u0275fac,
  providedIn: "root"
});
var Actions = _Actions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Actions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Observable,
    decorators: [{
      type: Inject,
      args: [ScannedActionsSubject]
    }]
  }], null);
})();
function ofType(...allowedTypes) {
  return filter((action) => allowedTypes.some((typeOrActionCreator) => {
    if (typeof typeOrActionCreator === "string") {
      return typeOrActionCreator === action.type;
    }
    return typeOrActionCreator.type === action.type;
  }));
}
var _ROOT_EFFECTS_GUARD = new InjectionToken("@ngrx/effects Internal Root Guard");
var USER_PROVIDED_EFFECTS = new InjectionToken("@ngrx/effects User Provided Effects");
var _ROOT_EFFECTS = new InjectionToken("@ngrx/effects Internal Root Effects");
var _ROOT_EFFECTS_INSTANCES = new InjectionToken("@ngrx/effects Internal Root Effects Instances");
var _FEATURE_EFFECTS = new InjectionToken("@ngrx/effects Internal Feature Effects");
var _FEATURE_EFFECTS_INSTANCE_GROUPS = new InjectionToken("@ngrx/effects Internal Feature Effects Instance Groups");
var EFFECTS_ERROR_HANDLER = new InjectionToken("@ngrx/effects Effects Error Handler", {
  providedIn: "root",
  factory: () => defaultEffectsErrorHandler
});
var ROOT_EFFECTS_INIT = "@ngrx/effects/init";
var rootEffectsInit = createAction(ROOT_EFFECTS_INIT);
function reportInvalidActions(output, reporter) {
  if (output.notification.kind === "N") {
    const action = output.notification.value;
    const isInvalidAction = !isAction(action);
    if (isInvalidAction) {
      reporter.handleError(new Error(`Effect ${getEffectName(output)} dispatched an invalid action: ${stringify(action)}`));
    }
  }
}
function isAction(action) {
  return typeof action !== "function" && action && action.type && typeof action.type === "string";
}
function getEffectName({
  propertyName,
  sourceInstance,
  sourceName
}) {
  const isMethod = typeof sourceInstance[propertyName] === "function";
  const isClassBasedEffect = !!sourceName;
  return isClassBasedEffect ? `"${sourceName}.${String(propertyName)}${isMethod ? "()" : ""}"` : `"${String(propertyName)}()"`;
}
function stringify(action) {
  try {
    return JSON.stringify(action);
  } catch {
    return action;
  }
}
var onIdentifyEffectsKey = "ngrxOnIdentifyEffects";
function isOnIdentifyEffects(instance) {
  return isFunction(instance, onIdentifyEffectsKey);
}
var onRunEffectsKey = "ngrxOnRunEffects";
function isOnRunEffects(instance) {
  return isFunction(instance, onRunEffectsKey);
}
var onInitEffects = "ngrxOnInitEffects";
function isOnInitEffects(instance) {
  return isFunction(instance, onInitEffects);
}
function isFunction(instance, functionName) {
  return instance && functionName in instance && typeof instance[functionName] === "function";
}
var _EffectSources = class _EffectSources extends Subject {
  constructor(errorHandler, effectsErrorHandler) {
    super();
    this.errorHandler = errorHandler;
    this.effectsErrorHandler = effectsErrorHandler;
  }
  addEffects(effectSourceInstance) {
    this.next(effectSourceInstance);
  }
  /**
   * @internal
   */
  toActions() {
    return this.pipe(groupBy((effectsInstance2) => isClassInstance(effectsInstance2) ? getSourceForInstance(effectsInstance2) : effectsInstance2), mergeMap((source$) => {
      return source$.pipe(groupBy(effectsInstance));
    }), mergeMap((source$) => {
      const effect$ = source$.pipe(exhaustMap((sourceInstance) => {
        return resolveEffectSource(this.errorHandler, this.effectsErrorHandler)(sourceInstance);
      }), map((output) => {
        reportInvalidActions(output, this.errorHandler);
        return output.notification;
      }), filter((notification) => notification.kind === "N" && notification.value != null), dematerialize());
      const init$ = source$.pipe(take(1), filter(isOnInitEffects), map((instance) => instance.ngrxOnInitEffects()));
      return merge(effect$, init$);
    }));
  }
};
_EffectSources.\u0275fac = function EffectSources_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectSources)(\u0275\u0275inject(ErrorHandler), \u0275\u0275inject(EFFECTS_ERROR_HANDLER));
};
_EffectSources.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _EffectSources,
  factory: _EffectSources.\u0275fac,
  providedIn: "root"
});
var EffectSources = _EffectSources;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectSources, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [EFFECTS_ERROR_HANDLER]
    }]
  }], null);
})();
function effectsInstance(sourceInstance) {
  if (isOnIdentifyEffects(sourceInstance)) {
    return sourceInstance.ngrxOnIdentifyEffects();
  }
  return "";
}
function resolveEffectSource(errorHandler, effectsErrorHandler) {
  return (sourceInstance) => {
    const mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
    if (isOnRunEffects(sourceInstance)) {
      return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
  };
}
var _EffectsRunner = class _EffectsRunner {
  get isStarted() {
    return !!this.effectsSubscription;
  }
  constructor(effectSources, store) {
    this.effectSources = effectSources;
    this.store = store;
    this.effectsSubscription = null;
  }
  start() {
    if (!this.effectsSubscription) {
      this.effectsSubscription = this.effectSources.toActions().subscribe(this.store);
    }
  }
  ngOnDestroy() {
    if (this.effectsSubscription) {
      this.effectsSubscription.unsubscribe();
      this.effectsSubscription = null;
    }
  }
};
_EffectsRunner.\u0275fac = function EffectsRunner_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectsRunner)(\u0275\u0275inject(EffectSources), \u0275\u0275inject(Store));
};
_EffectsRunner.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _EffectsRunner,
  factory: _EffectsRunner.\u0275fac,
  providedIn: "root"
});
var EffectsRunner = _EffectsRunner;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsRunner, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EffectSources
  }, {
    type: Store
  }], null);
})();
var _EffectsRootModule = class _EffectsRootModule {
  constructor(sources, runner, store, rootEffectsInstances, storeRootModule, storeFeatureModule, guard) {
    this.sources = sources;
    runner.start();
    for (const effectsInstance2 of rootEffectsInstances) {
      sources.addEffects(effectsInstance2);
    }
    store.dispatch({
      type: ROOT_EFFECTS_INIT
    });
  }
  addEffects(effectsInstance2) {
    this.sources.addEffects(effectsInstance2);
  }
};
_EffectsRootModule.\u0275fac = function EffectsRootModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectsRootModule)(\u0275\u0275inject(EffectSources), \u0275\u0275inject(EffectsRunner), \u0275\u0275inject(Store), \u0275\u0275inject(_ROOT_EFFECTS_INSTANCES), \u0275\u0275inject(StoreRootModule, 8), \u0275\u0275inject(StoreFeatureModule, 8), \u0275\u0275inject(_ROOT_EFFECTS_GUARD, 8));
};
_EffectsRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _EffectsRootModule
});
_EffectsRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var EffectsRootModule = _EffectsRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsRootModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: EffectSources
  }, {
    type: EffectsRunner
  }, {
    type: Store
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_ROOT_EFFECTS_INSTANCES]
    }]
  }, {
    type: StoreRootModule,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StoreFeatureModule,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [_ROOT_EFFECTS_GUARD]
    }]
  }], null);
})();
var _EffectsFeatureModule = class _EffectsFeatureModule {
  constructor(effectsRootModule, effectsInstanceGroups, storeRootModule, storeFeatureModule) {
    const effectsInstances = effectsInstanceGroups.flat();
    for (const effectsInstance2 of effectsInstances) {
      effectsRootModule.addEffects(effectsInstance2);
    }
  }
};
_EffectsFeatureModule.\u0275fac = function EffectsFeatureModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectsFeatureModule)(\u0275\u0275inject(EffectsRootModule), \u0275\u0275inject(_FEATURE_EFFECTS_INSTANCE_GROUPS), \u0275\u0275inject(StoreRootModule, 8), \u0275\u0275inject(StoreFeatureModule, 8));
};
_EffectsFeatureModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _EffectsFeatureModule
});
_EffectsFeatureModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var EffectsFeatureModule = _EffectsFeatureModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsFeatureModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: EffectsRootModule
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_FEATURE_EFFECTS_INSTANCE_GROUPS]
    }]
  }, {
    type: StoreRootModule,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StoreFeatureModule,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _EffectsModule = class _EffectsModule {
  static forFeature(...featureEffects) {
    const effects = featureEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsFeatureModule,
      providers: [effectsClasses, {
        provide: _FEATURE_EFFECTS,
        multi: true,
        useValue: effects
      }, {
        provide: USER_PROVIDED_EFFECTS,
        multi: true,
        useValue: []
      }, {
        provide: _FEATURE_EFFECTS_INSTANCE_GROUPS,
        multi: true,
        useFactory: createEffectsInstances,
        deps: [_FEATURE_EFFECTS, USER_PROVIDED_EFFECTS]
      }]
    };
  }
  static forRoot(...rootEffects) {
    const effects = rootEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsRootModule,
      providers: [effectsClasses, {
        provide: _ROOT_EFFECTS,
        useValue: [effects]
      }, {
        provide: _ROOT_EFFECTS_GUARD,
        useFactory: _provideForRootGuard
      }, {
        provide: USER_PROVIDED_EFFECTS,
        multi: true,
        useValue: []
      }, {
        provide: _ROOT_EFFECTS_INSTANCES,
        useFactory: createEffectsInstances,
        deps: [_ROOT_EFFECTS, USER_PROVIDED_EFFECTS]
      }]
    };
  }
};
_EffectsModule.\u0275fac = function EffectsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EffectsModule)();
};
_EffectsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _EffectsModule
});
_EffectsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var EffectsModule = _EffectsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
function createEffectsInstances(effectsGroups, userProvidedEffectsGroups) {
  const effects = [];
  for (const effectsGroup of effectsGroups) {
    effects.push(...effectsGroup);
  }
  for (const userProvidedEffectsGroup of userProvidedEffectsGroups) {
    effects.push(...userProvidedEffectsGroup);
  }
  return effects.map((effectsTokenOrRecord) => isToken(effectsTokenOrRecord) ? inject(effectsTokenOrRecord) : effectsTokenOrRecord);
}
function _provideForRootGuard() {
  const runner = inject(EffectsRunner, {
    optional: true,
    skipSelf: true
  });
  const rootEffects = inject(_ROOT_EFFECTS, {
    self: true
  });
  const hasEffects = !(rootEffects.length === 1 && rootEffects[0].length === 0);
  if (hasEffects && runner) {
    throw new TypeError(`EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.`);
  }
  return "guarded";
}
function provideEffects(...effects) {
  const effectsClassesAndRecords = effects.flat();
  const effectsClasses = getClasses(effectsClassesAndRecords);
  return makeEnvironmentProviders([effectsClasses, provideEnvironmentInitializer(() => {
    inject(ROOT_STORE_PROVIDER);
    inject(FEATURE_STATE_PROVIDER, {
      optional: true
    });
    const effectsRunner = inject(EffectsRunner);
    const effectSources = inject(EffectSources);
    const shouldInitEffects = !effectsRunner.isStarted;
    if (shouldInitEffects) {
      effectsRunner.start();
    }
    for (const effectsClassOrRecord of effectsClassesAndRecords) {
      const effectsInstance2 = isClass(effectsClassOrRecord) ? inject(effectsClassOrRecord) : effectsClassOrRecord;
      effectSources.addEffects(effectsInstance2);
    }
    if (shouldInitEffects) {
      const store = inject(Store);
      store.dispatch(rootEffectsInit());
    }
  })]);
}

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  firestore;
  auth = inject(Auth);
  platformId = inject(PLATFORM_ID);
  router = inject(Router);
  callableService = inject(CallableService);
  ensurePolarCustomerFn = this.callableService.callable("ensurePolarCustomer");
  deletePolarCustomerFn = this.callableService.callable("deletePolarCustomer");
  constructor(firestore) {
    this.firestore = firestore;
  }
  noUserRedirect() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.navigate(["/"]);
    }
  }
  login(credentials) {
    return from(signInWithEmailAndPassword(this.auth, credentials.email, credentials.password)).pipe(switchMap((cred) => this.getUser$(cred.user.uid)), catchError((err) => {
      return of(null);
    }));
  }
  registerUser(user2) {
    return from(this.registerUserStrict(user2)).pipe(catchError((err) => {
      console.error("Firebase error:", err.code, err.message);
      throw err;
    }));
  }
  logout() {
    return from(signOut(this.auth)).pipe(catchError((err) => {
      console.error("logout error:", err.message);
      throw err;
    }));
  }
  deleteAccount() {
    const currentUser = this.auth.currentUser;
    if (!currentUser) {
      return of(void 0);
    }
    console.log("Attempting to delete account for user:", currentUser.uid);
    console.trace("deleteAccount called");
    const userRef = doc(this.firestore, "users", currentUser.uid);
    return from(deleteDoc(userRef)).pipe(switchMap(() => {
      console.log("Firestore document deleted, now deleting Polar customer");
      return this.deletePolarCustomerFn();
    }), switchMap(() => {
      console.log("Polar customer deleted, now deleting Firebase Auth user");
      return from(deleteUser(currentUser));
    }), catchError((err) => {
      console.error("delete account error:", err.message);
      return throwError(() => err);
    }));
  }
  initAuth() {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return authState(this.auth).pipe(take(1), switchMap((firebaseUser) => firebaseUser ? this.getUser$(firebaseUser.uid) : of(null)));
  }
  getUser$(uid) {
    const userRef = doc(this.firestore, "users", uid);
    return docData(userRef, { idField: "uid" }).pipe(filter((user2) => !!user2), take(1));
  }
  sendVerification() {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      return from(sendEmailVerification(currentUser));
    }
    throw new Error("No user logged in");
  }
  async registerUserStrict(user2) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, user2.email, user2.password ? user2.password : "");
    const uid = userCredential.user.uid;
    const userRef = doc(this.firestore, "users", uid);
    await setDoc(userRef, {
      name: user2.name,
      email: user2.email,
      createdAt: /* @__PURE__ */ new Date(),
      role: user2.role,
      profileViews: 0,
      plan: "free",
      subscriptionStatus: "none",
      currentPeriodEnd: null,
      providerCustomerId: "",
      providerSubscriptionId: "",
      providerVariantId: "",
      freeGenerationsUsed: 0,
      emailVerified: false,
      entitlementsUpdatedAt: null
    });
    try {
      await this.ensurePolarCustomerFn();
    } catch (error) {
      await this.compensateFailedRegistration(userRef, userCredential.user);
      throw new Error("Unable to complete signup because billing setup failed. Please try again in a moment.");
    }
    return await firstValueFrom(this.getUser$(uid));
  }
  async compensateFailedRegistration(userRef, firebaseUser) {
    try {
      await deleteDoc(userRef);
    } catch (error) {
      console.error("Signup rollback failed to delete Firestore user document", error);
    }
    if (!firebaseUser) {
      return;
    }
    try {
      await deleteUser(firebaseUser);
    } catch (error) {
      console.error("Signup rollback failed to delete Firebase Auth user", error);
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(Firestore));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Firestore }], null);
})();

// src/app/pages/auth/data/auth.effects.ts
var AuthEffects = class _AuthEffects {
  actions$ = inject(Actions);
  authService$ = inject(AuthService);
  router = inject(Router);
  signupEffect = createEffect(() => this.actions$.pipe(ofType(registerUser), switchMap(({ user: user2 }) => this.authService$.registerUser(user2).pipe(map((user3) => registerUserSuccess({ user: user3 })), catchError((error) => of(registerUserFailure({ error: error.message })))))));
  loginEffect = createEffect(() => this.actions$.pipe(ofType(loginUser), switchMap(({ user: user2 }) => this.authService$.login(user2).pipe(map((user3) => loginUserSuccess({ user: user3 })), catchError((error) => of(loginUserFailure({ error: error.message })))))));
  loginSuccessNavigate$ = createEffect(() => this.actions$.pipe(ofType(loginUserSuccess), tap(() => this.router.navigate(["/application/dashboard"]))), { dispatch: false });
  registerSuccessNavigate$ = createEffect(() => this.actions$.pipe(ofType(registerUserSuccess), tap(() => this.router.navigate(["/application/dashboard"]))), { dispatch: false });
  logoutEffect = createEffect(() => this.actions$.pipe(ofType(logout), switchMap(() => this.authService$.logout().pipe(map(() => logoutSuccess()), catchError((error) => of(logoutFailure({ error: error.message })))))));
  logoutSuccessEffect = createEffect(() => this.actions$.pipe(ofType(logoutSuccess), tap(() => this.authService$.noUserRedirect())), { dispatch: false });
  deleteAccountEffect = createEffect(() => this.actions$.pipe(ofType(deleteAccount), switchMap(() => this.authService$.deleteAccount().pipe(map(() => deleteAccountSuccess()), catchError((error) => of(deleteAccountFailure({ error: error.message })))))));
  deleteAccountSuccessEffect = createEffect(() => this.actions$.pipe(ofType(deleteAccountSuccess), tap(() => this.authService$.noUserRedirect())), { dispatch: false });
  deleteAccountFailureEffect = createEffect(() => this.actions$.pipe(ofType(deleteAccountFailure), tap(({ error }) => {
    console.error("Delete account failed:", error);
  })), { dispatch: false });
  initUserEffect = createEffect(() => this.actions$.pipe(ofType(initUser), switchMap(() => this.authService$.initAuth().pipe(map((user2) => user2 ? initUserSuccess({ user: user2 }) : authResolvedNoUser()), catchError((err) => of(initUserFailure({ error: err.message })))))));
  static \u0275fac = function AuthEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthEffects)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthEffects, factory: _AuthEffects.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthEffects, [{
    type: Injectable
  }], null, null);
})();

// src/app/core/services/ai-agent.service.ts
var AiAgentService = class _AiAgentService {
  functions;
  firestore;
  auth;
  constructor(functions, firestore, auth) {
    this.functions = functions;
    this.firestore = firestore;
    this.auth = auth;
  }
  /**
   * Persist AI-generated resume JSON into Firestore.
   * Ensures the userId is resolved before writing to avoid storing a Promise.
   */
  async saveAIResult(result) {
    const colRef = collection(this.firestore, "resumes");
    const payload = JSON.parse(result);
    const user2 = await firstValueFrom(this.auth.currentUser ? of(this.auth.currentUser) : of(null));
    const userId = user2?.uid ?? null;
    return addDoc(colRef, __spreadProps(__spreadValues({}, payload), {
      userId,
      createdAt: serverTimestamp()
    }));
  }
  generateResume(resumeText) {
    const fn = httpsCallable(this.functions, "generateResume");
    const generatedJson$ = fn({ resumeText }).then((res) => JSON.parse(res.data.text));
    return from(generatedJson$);
  }
  async saveCoverLetter(result) {
    const colRef = collection(this.firestore, "coverLetters");
    const payload = JSON.parse(result);
    const user2 = await firstValueFrom(this.auth.currentUser ? of(this.auth.currentUser) : of(null));
    const userId = user2?.uid ?? null;
    return addDoc(colRef, __spreadProps(__spreadValues({}, payload), {
      userId,
      createdAt: serverTimestamp()
    }));
  }
  generateCoverLetter(resumeText, jobDescription, companyName, position, tone) {
    const fn = httpsCallable(this.functions, "generateCoverLetter");
    return from(fn({ resumeText, jobDescription, companyName, position, tone }).then((res) => res.data.text));
  }
  tailorResumeToJob(resume, companyName, position, jobDescription) {
    const fn = httpsCallable(this.functions, "tailorResumeToJob");
    return from(fn({ resume, companyName, position, jobDescription }).then((res) => res.data.resume));
  }
  static \u0275fac = function AiAgentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiAgentService)(\u0275\u0275inject(Functions), \u0275\u0275inject(Firestore), \u0275\u0275inject(Auth));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiAgentService, factory: _AiAgentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiAgentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Functions }, { type: Firestore }, { type: Auth }], null);
})();

// src/app/pages/application/resumes/data/resumes.effects.ts
var ResumeEffects = class _ResumeEffects {
  actions$ = inject(Actions);
  apiService = inject(ResumeService);
  aiService = inject(AiAgentService);
  createResumeEffect = createEffect(() => this.actions$.pipe(ofType(createResume), switchMap(({ resumeText }) => this.aiService.generateResume(resumeText).pipe(map((resume) => createResumeSuccess({ resume })), catchError((error) => of(createResumeFailure({ error })))))));
  saveAIResultEffect = createEffect(() => this.actions$.pipe(ofType(createResumeSuccess), switchMap((action) => this.aiService.saveAIResult(action.resume).then(() => saveAIResultSuccess())), catchError((error) => of(saveAIResultFailure({ error })))));
  loadResumes = createEffect(() => this.actions$.pipe(ofType(loadResumes), switchMap(() => this.apiService.getResumesForUser().pipe(map((resumes) => loadResumesSuccess({ resumes })), catchError((error) => of(loadResumesFailure({ error })))))));
  saveResumeEffect = createEffect(() => this.actions$.pipe(ofType(saveResume), switchMap(({ resume, resumeId }) => {
    if (resumeId) {
      return this.apiService.updateResume(resumeId, resume).pipe(map(() => saveResumeSuccess({ resumeId })), catchError((error) => of(saveResumeFailure({
        error: error instanceof Error ? error.message : String(error)
      }))));
    }
    return this.apiService.createResume(resume).pipe(map((createdResumeId) => saveResumeSuccess({ resumeId: createdResumeId })), catchError((error) => of(saveResumeFailure({
      error: error instanceof Error ? error.message : String(error)
    }))));
  })));
  tailorResumeEffect = createEffect(() => this.actions$.pipe(ofType(tailorResume), switchMap(({ resumeId, resume, companyName, position, jobDescription }) => this.aiService.tailorResumeToJob(resume, companyName, position, jobDescription).pipe(switchMap((tailoredResume) => {
    const _a = tailoredResume, { id: _ } = _a, resumeChanges = __objRest(_a, ["id"]);
    return [
      tailorResumeSuccess({ resumeId, tailoredResume }),
      saveResume({ resume: resumeChanges, resumeId })
    ];
  }), catchError((error) => of(tailorResumeFailure({
    error: error instanceof Error ? error.message : String(error)
  })))))));
  deleteResumeEffect = createEffect(() => this.actions$.pipe(ofType(deleteResume), switchMap(({ resumeId }) => this.apiService.deleteResume(resumeId).pipe(map(() => deleteResumeSuccess({ resumeId })), catchError((error) => of(deleteResumeFailure({
    error: error instanceof Error ? error.message : String(error)
  })))))));
  static \u0275fac = function ResumeEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumeEffects)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ResumeEffects, factory: _ResumeEffects.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumeEffects, [{
    type: Injectable
  }], null, null);
})();

// node_modules/@ngrx/store-devtools/fesm2022/ngrx-store-devtools.mjs
var PERFORM_ACTION = "PERFORM_ACTION";
var REFRESH = "REFRESH";
var RESET = "RESET";
var ROLLBACK = "ROLLBACK";
var COMMIT = "COMMIT";
var SWEEP = "SWEEP";
var TOGGLE_ACTION = "TOGGLE_ACTION";
var SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE";
var JUMP_TO_STATE = "JUMP_TO_STATE";
var JUMP_TO_ACTION = "JUMP_TO_ACTION";
var IMPORT_STATE = "IMPORT_STATE";
var LOCK_CHANGES = "LOCK_CHANGES";
var PAUSE_RECORDING = "PAUSE_RECORDING";
var PerformAction = class {
  constructor(action, timestamp) {
    this.action = action;
    this.timestamp = timestamp;
    this.type = PERFORM_ACTION;
    if (typeof action.type === "undefined") {
      throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    }
  }
};
var Refresh = class {
  constructor() {
    this.type = REFRESH;
  }
};
var Reset = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = RESET;
  }
};
var Rollback = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = ROLLBACK;
  }
};
var Commit = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = COMMIT;
  }
};
var Sweep = class {
  constructor() {
    this.type = SWEEP;
  }
};
var ToggleAction = class {
  constructor(id) {
    this.id = id;
    this.type = TOGGLE_ACTION;
  }
};
var JumpToState = class {
  constructor(index) {
    this.index = index;
    this.type = JUMP_TO_STATE;
  }
};
var JumpToAction = class {
  constructor(actionId) {
    this.actionId = actionId;
    this.type = JUMP_TO_ACTION;
  }
};
var ImportState = class {
  constructor(nextLiftedState) {
    this.nextLiftedState = nextLiftedState;
    this.type = IMPORT_STATE;
  }
};
var LockChanges = class {
  constructor(status) {
    this.status = status;
    this.type = LOCK_CHANGES;
  }
};
var PauseRecording = class {
  constructor(status) {
    this.status = status;
    this.type = PAUSE_RECORDING;
  }
};
var StoreDevtoolsConfig = class {
  constructor() {
    this.maxAge = false;
  }
};
var STORE_DEVTOOLS_CONFIG = new InjectionToken("@ngrx/store-devtools Options");
var INITIAL_OPTIONS = new InjectionToken("@ngrx/store-devtools Initial Config");
function noMonitor() {
  return null;
}
var DEFAULT_NAME = "NgRx Store DevTools";
function createConfig(optionsInput) {
  const DEFAULT_OPTIONS = {
    maxAge: false,
    monitor: noMonitor,
    actionSanitizer: void 0,
    stateSanitizer: void 0,
    name: DEFAULT_NAME,
    serialize: false,
    logOnly: false,
    autoPause: false,
    trace: false,
    traceLimit: 75,
    // Add all features explicitly. This prevent buggy behavior for
    // options like "lock" which might otherwise not show up.
    features: {
      pause: true,
      // Start/pause recording of dispatched actions
      lock: true,
      // Lock/unlock dispatching actions and side effects
      persist: true,
      // Persist states on page reloading
      export: true,
      // Export history of actions in a file
      import: "custom",
      // Import history of actions from a file
      jump: true,
      // Jump back and forth (time travelling)
      skip: true,
      // Skip (cancel) actions
      reorder: true,
      // Drag and drop actions in the history list
      dispatch: true,
      // Dispatch custom actions or action creators
      test: true
      // Generate tests for the selected actions
    },
    connectInZone: false
  };
  const options = typeof optionsInput === "function" ? optionsInput() : optionsInput;
  const logOnly = options.logOnly ? {
    pause: true,
    export: true,
    test: true
  } : false;
  const features = options.features || logOnly || DEFAULT_OPTIONS.features;
  if (features.import === true) {
    features.import = "custom";
  }
  const config = Object.assign({}, DEFAULT_OPTIONS, {
    features
  }, options);
  if (config.maxAge && config.maxAge < 2) {
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${config.maxAge}`);
  }
  return config;
}
function difference(first, second) {
  return first.filter((item) => second.indexOf(item) < 0);
}
function unliftState(liftedState) {
  const {
    computedStates,
    currentStateIndex
  } = liftedState;
  if (currentStateIndex >= computedStates.length) {
    const {
      state: state2
    } = computedStates[computedStates.length - 1];
    return state2;
  }
  const {
    state
  } = computedStates[currentStateIndex];
  return state;
}
function liftAction(action) {
  return new PerformAction(action, +Date.now());
}
function sanitizeActions(actionSanitizer, actions) {
  return Object.keys(actions).reduce((sanitizedActions, actionIdx) => {
    const idx = Number(actionIdx);
    sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
    return sanitizedActions;
  }, {});
}
function sanitizeAction(actionSanitizer, action, actionIdx) {
  return __spreadProps(__spreadValues({}, action), {
    action: actionSanitizer(action.action, actionIdx)
  });
}
function sanitizeStates(stateSanitizer, states) {
  return states.map((computedState, idx) => ({
    state: sanitizeState(stateSanitizer, computedState.state, idx),
    error: computedState.error
  }));
}
function sanitizeState(stateSanitizer, state, stateIdx) {
  return stateSanitizer(state, stateIdx);
}
function shouldFilterActions(config) {
  return config.predicate || config.actionsSafelist || config.actionsBlocklist;
}
function filterLiftedState(liftedState, predicate, safelist, blocklist) {
  const filteredStagedActionIds = [];
  const filteredActionsById = {};
  const filteredComputedStates = [];
  liftedState.stagedActionIds.forEach((id, idx) => {
    const liftedAction = liftedState.actionsById[id];
    if (!liftedAction) return;
    if (idx && isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) {
      return;
    }
    filteredActionsById[id] = liftedAction;
    filteredStagedActionIds.push(id);
    filteredComputedStates.push(liftedState.computedStates[idx]);
  });
  return __spreadProps(__spreadValues({}, liftedState), {
    stagedActionIds: filteredStagedActionIds,
    actionsById: filteredActionsById,
    computedStates: filteredComputedStates
  });
}
function isActionFiltered(state, action, predicate, safelist, blockedlist) {
  const predicateMatch = predicate && !predicate(state, action.action);
  const safelistMatch = safelist && !action.action.type.match(safelist.map((s) => escapeRegExp(s)).join("|"));
  const blocklistMatch = blockedlist && action.action.type.match(blockedlist.map((s) => escapeRegExp(s)).join("|"));
  return predicateMatch || safelistMatch || blocklistMatch;
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function injectZoneConfig(connectInZone) {
  const ngZone = connectInZone ? inject(NgZone) : null;
  return {
    ngZone,
    connectInZone
  };
}
var _DevtoolsDispatcher = class _DevtoolsDispatcher extends ActionsSubject {
};
_DevtoolsDispatcher.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DevtoolsDispatcher_BaseFactory;
  return function DevtoolsDispatcher_Factory(__ngFactoryType__) {
    return (\u0275DevtoolsDispatcher_BaseFactory || (\u0275DevtoolsDispatcher_BaseFactory = \u0275\u0275getInheritedFactory(_DevtoolsDispatcher)))(__ngFactoryType__ || _DevtoolsDispatcher);
  };
})();
_DevtoolsDispatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DevtoolsDispatcher,
  factory: _DevtoolsDispatcher.\u0275fac
});
var DevtoolsDispatcher = _DevtoolsDispatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsDispatcher, [{
    type: Injectable
  }], null, null);
})();
var ExtensionActionTypes = {
  START: "START",
  DISPATCH: "DISPATCH",
  STOP: "STOP",
  ACTION: "ACTION"
};
var REDUX_DEVTOOLS_EXTENSION = new InjectionToken("@ngrx/store-devtools Redux Devtools Extension");
var _DevtoolsExtension = class _DevtoolsExtension {
  constructor(devtoolsExtension, config, dispatcher) {
    this.config = config;
    this.dispatcher = dispatcher;
    this.zoneConfig = injectZoneConfig(this.config.connectInZone);
    this.devtoolsExtension = devtoolsExtension;
    this.createActionStreams();
  }
  notify(action, state) {
    if (!this.devtoolsExtension) {
      return;
    }
    if (action.type === PERFORM_ACTION) {
      if (state.isLocked || state.isPaused) {
        return;
      }
      const currentState = unliftState(state);
      if (shouldFilterActions(this.config) && isActionFiltered(currentState, action, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) {
        return;
      }
      const sanitizedState = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex) : currentState;
      const sanitizedAction = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, action, state.nextActionId) : action;
      this.sendToReduxDevtools(() => this.extensionConnection.send(sanitizedAction, sanitizedState));
    } else {
      const sanitizedLiftedState = __spreadProps(__spreadValues({}, state), {
        stagedActionIds: state.stagedActionIds,
        actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, state.actionsById) : state.actionsById,
        computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, state.computedStates) : state.computedStates
      });
      this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, sanitizedLiftedState, this.getExtensionConfig(this.config)));
    }
  }
  createChangesObservable() {
    if (!this.devtoolsExtension) {
      return EMPTY;
    }
    return new Observable((subscriber) => {
      const connection = this.zoneConfig.connectInZone ? (
        // To reduce change detection cycles, we need to run the `connect` method
        // outside of the Angular zone. The `connect` method adds a `message`
        // event listener to communicate with an extension using `window.postMessage`
        // and handle message events.
        this.zoneConfig.ngZone.runOutsideAngular(() => this.devtoolsExtension.connect(this.getExtensionConfig(this.config)))
      ) : this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
      this.extensionConnection = connection;
      connection.init();
      connection.subscribe((change) => subscriber.next(change));
      return connection.unsubscribe;
    });
  }
  createActionStreams() {
    const changes$ = this.createChangesObservable().pipe(share());
    const start$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.START));
    const stop$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.STOP));
    const liftedActions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.DISPATCH), map((change) => this.unwrapAction(change.payload)), concatMap((action) => {
      if (action.type === IMPORT_STATE) {
        return this.dispatcher.pipe(filter((action2) => action2.type === UPDATE), timeout(1e3), debounceTime(1e3), map(() => action), catchError(() => of(action)), take(1));
      } else {
        return of(action);
      }
    }));
    const actions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.ACTION), map((change) => this.unwrapAction(change.payload)));
    const actionsUntilStop$ = actions$.pipe(takeUntil(stop$));
    const liftedUntilStop$ = liftedActions$.pipe(takeUntil(stop$));
    this.start$ = start$.pipe(takeUntil(stop$));
    this.actions$ = this.start$.pipe(switchMap(() => actionsUntilStop$));
    this.liftedActions$ = this.start$.pipe(switchMap(() => liftedUntilStop$));
  }
  unwrapAction(action) {
    return typeof action === "string" ? (0, eval)(`(${action})`) : action;
  }
  getExtensionConfig(config) {
    const extensionOptions = {
      name: config.name,
      features: config.features,
      serialize: config.serialize,
      autoPause: config.autoPause ?? false,
      trace: config.trace ?? false,
      traceLimit: config.traceLimit ?? 75
      // The action/state sanitizers are not added to the config
      // because sanitation is done in this class already.
      // It is done before sending it to the devtools extension for consistency:
      // - If we call extensionConnection.send(...),
      //   the extension would call the sanitizers.
      // - If we call devtoolsExtension.send(...) (aka full state update),
      //   the extension would NOT call the sanitizers, so we have to do it ourselves.
    };
    if (config.maxAge !== false) {
      extensionOptions.maxAge = config.maxAge;
    }
    return extensionOptions;
  }
  sendToReduxDevtools(send) {
    try {
      send();
    } catch (err) {
      console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools", err);
    }
  }
};
_DevtoolsExtension.\u0275fac = function DevtoolsExtension_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DevtoolsExtension)(\u0275\u0275inject(REDUX_DEVTOOLS_EXTENSION), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG), \u0275\u0275inject(DevtoolsDispatcher));
};
_DevtoolsExtension.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DevtoolsExtension,
  factory: _DevtoolsExtension.\u0275fac
});
var DevtoolsExtension = _DevtoolsExtension;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsExtension, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REDUX_DEVTOOLS_EXTENSION]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }, {
    type: DevtoolsDispatcher
  }], null);
})();
var INIT_ACTION = {
  type: INIT
};
var RECOMPUTE = "@ngrx/store-devtools/recompute";
var RECOMPUTE_ACTION = {
  type: RECOMPUTE
};
function computeNextEntry(reducer, action, state, error, errorHandler) {
  if (error) {
    return {
      state,
      error: "Interrupted by an error up the chain"
    };
  }
  let nextState = state;
  let nextError;
  try {
    nextState = reducer(state, action);
  } catch (err) {
    nextError = err.toString();
    errorHandler.handleError(err);
  }
  return {
    state: nextState,
    error: nextError
  };
}
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused) {
  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
    return computedStates;
  }
  const nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
  const lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);
  for (let i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
    const actionId = stagedActionIds[i];
    const action = actionsById[actionId].action;
    const previousEntry = nextComputedStates[i - 1];
    const previousState = previousEntry ? previousEntry.state : committedState;
    const previousError = previousEntry ? previousEntry.error : void 0;
    const shouldSkip = skippedActionIds.indexOf(actionId) > -1;
    const entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError, errorHandler);
    nextComputedStates.push(entry);
  }
  if (isPaused) {
    nextComputedStates.push(computedStates[computedStates.length - 1]);
  }
  return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
  return {
    monitorState: monitorReducer(void 0, {}),
    nextActionId: 1,
    actionsById: {
      0: liftAction(INIT_ACTION)
    },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: initialCommittedState,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: false,
    isPaused: false
  };
}
function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler, monitorReducer, options = {}) {
  return (reducer) => (liftedState, liftedAction) => {
    let {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    } = liftedState || initialLiftedState;
    if (!liftedState) {
      actionsById = Object.create(actionsById);
    }
    function commitExcessActions(n) {
      let excess = n;
      let idsToDelete = stagedActionIds.slice(1, excess + 1);
      for (let i = 0; i < idsToDelete.length; i++) {
        if (computedStates[i + 1].error) {
          excess = i;
          idsToDelete = stagedActionIds.slice(1, excess + 1);
          break;
        } else {
          delete actionsById[idsToDelete[i]];
        }
      }
      skippedActionIds = skippedActionIds.filter((id) => idsToDelete.indexOf(id) === -1);
      stagedActionIds = [0, ...stagedActionIds.slice(excess + 1)];
      committedState = computedStates[excess].state;
      computedStates = computedStates.slice(excess);
      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
    }
    function commitChanges() {
      actionsById = {
        0: liftAction(INIT_ACTION)
      };
      nextActionId = 1;
      stagedActionIds = [0];
      skippedActionIds = [];
      committedState = computedStates[currentStateIndex].state;
      currentStateIndex = 0;
      computedStates = [];
    }
    let minInvalidatedStateIndex = 0;
    switch (liftedAction.type) {
      case LOCK_CHANGES: {
        isLocked = liftedAction.status;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case PAUSE_RECORDING: {
        isPaused = liftedAction.status;
        if (isPaused) {
          stagedActionIds = [...stagedActionIds, nextActionId];
          actionsById[nextActionId] = new PerformAction({
            type: "@ngrx/devtools/pause"
          }, +Date.now());
          nextActionId++;
          minInvalidatedStateIndex = stagedActionIds.length - 1;
          computedStates = computedStates.concat(computedStates[computedStates.length - 1]);
          if (currentStateIndex === stagedActionIds.length - 2) {
            currentStateIndex++;
          }
          minInvalidatedStateIndex = Infinity;
        } else {
          commitChanges();
        }
        break;
      }
      case RESET: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        committedState = initialCommittedState;
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case COMMIT: {
        commitChanges();
        break;
      }
      case ROLLBACK: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case TOGGLE_ACTION: {
        const {
          id: actionId
        } = liftedAction;
        const index = skippedActionIds.indexOf(actionId);
        if (index === -1) {
          skippedActionIds = [actionId, ...skippedActionIds];
        } else {
          skippedActionIds = skippedActionIds.filter((id) => id !== actionId);
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
        break;
      }
      case SET_ACTIONS_ACTIVE: {
        const {
          start,
          end,
          active
        } = liftedAction;
        const actionIds = [];
        for (let i = start; i < end; i++) actionIds.push(i);
        if (active) {
          skippedActionIds = difference(skippedActionIds, actionIds);
        } else {
          skippedActionIds = [...skippedActionIds, ...actionIds];
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(start);
        break;
      }
      case JUMP_TO_STATE: {
        currentStateIndex = liftedAction.index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case JUMP_TO_ACTION: {
        const index = stagedActionIds.indexOf(liftedAction.actionId);
        if (index !== -1) currentStateIndex = index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case SWEEP: {
        stagedActionIds = difference(stagedActionIds, skippedActionIds);
        skippedActionIds = [];
        currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
        break;
      }
      case PERFORM_ACTION: {
        if (isLocked) {
          return liftedState || initialLiftedState;
        }
        if (isPaused || liftedState && isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist)) {
          const lastState = computedStates[computedStates.length - 1];
          computedStates = [...computedStates.slice(0, -1), computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler)];
          minInvalidatedStateIndex = Infinity;
          break;
        }
        if (options.maxAge && stagedActionIds.length === options.maxAge) {
          commitExcessActions(1);
        }
        if (currentStateIndex === stagedActionIds.length - 1) {
          currentStateIndex++;
        }
        const actionId = nextActionId++;
        actionsById[actionId] = liftedAction;
        stagedActionIds = [...stagedActionIds, actionId];
        minInvalidatedStateIndex = stagedActionIds.length - 1;
        break;
      }
      case IMPORT_STATE: {
        ({
          monitorState,
          actionsById,
          nextActionId,
          stagedActionIds,
          skippedActionIds,
          committedState,
          currentStateIndex,
          computedStates,
          isLocked,
          isPaused
        } = liftedAction.nextLiftedState);
        break;
      }
      case INIT: {
        minInvalidatedStateIndex = 0;
        if (options.maxAge && stagedActionIds.length > options.maxAge) {
          computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          commitExcessActions(stagedActionIds.length - options.maxAge);
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      case UPDATE: {
        const stateHasErrors = computedStates.filter((state) => state.error).length > 0;
        if (stateHasErrors) {
          minInvalidatedStateIndex = 0;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
            commitExcessActions(stagedActionIds.length - options.maxAge);
            minInvalidatedStateIndex = Infinity;
          }
        } else {
          if (!isPaused && !isLocked) {
            if (currentStateIndex === stagedActionIds.length - 1) {
              currentStateIndex++;
            }
            const actionId = nextActionId++;
            actionsById[actionId] = new PerformAction(liftedAction, +Date.now());
            stagedActionIds = [...stagedActionIds, actionId];
            minInvalidatedStateIndex = stagedActionIds.length - 1;
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          }
          computedStates = computedStates.map((cmp) => __spreadProps(__spreadValues({}, cmp), {
            state: reducer(cmp.state, RECOMPUTE_ACTION)
          }));
          currentStateIndex = stagedActionIds.length - 1;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            commitExcessActions(stagedActionIds.length - options.maxAge);
          }
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      default: {
        minInvalidatedStateIndex = Infinity;
        break;
      }
    }
    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
    monitorState = monitorReducer(monitorState, liftedAction);
    return {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    };
  };
}
var _StoreDevtools = class _StoreDevtools {
  constructor(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler, initialState3, config) {
    const liftedInitialState = liftInitialState(initialState3, config.monitor);
    const liftReducer = liftReducerWith(initialState3, liftedInitialState, errorHandler, config.monitor, config);
    const liftedAction$ = merge(merge(actions$.asObservable().pipe(skip(1)), extension.actions$).pipe(map(liftAction)), dispatcher, extension.liftedActions$).pipe(observeOn(queueScheduler));
    const liftedReducer$ = reducers$.pipe(map(liftReducer));
    const zoneConfig = injectZoneConfig(config.connectInZone);
    const liftedStateSubject = new ReplaySubject(1);
    this.liftedStateSubscription = liftedAction$.pipe(
      withLatestFrom(liftedReducer$),
      // The extension would post messages back outside of the Angular zone
      // because we call `connect()` wrapped with `runOutsideAngular`. We run change
      // detection only once at the end after all the required asynchronous tasks have
      // been processed (for instance, `setInterval` scheduled by the `timeout` operator).
      // We have to re-enter the Angular zone before the `scan` since it runs the reducer
      // which must be run within the Angular zone.
      emitInZone(zoneConfig),
      scan(({
        state: liftedState
      }, [action, reducer]) => {
        let reducedLiftedState = reducer(liftedState, action);
        if (action.type !== PERFORM_ACTION && shouldFilterActions(config)) {
          reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
        }
        extension.notify(action, reducedLiftedState);
        return {
          state: reducedLiftedState,
          action
        };
      }, {
        state: liftedInitialState,
        action: null
      })
    ).subscribe(({
      state,
      action
    }) => {
      liftedStateSubject.next(state);
      if (action.type === PERFORM_ACTION) {
        const unliftedAction = action.action;
        scannedActions.next(unliftedAction);
      }
    });
    this.extensionStartSubscription = extension.start$.pipe(emitInZone(zoneConfig)).subscribe(() => {
      this.refresh();
    });
    const liftedState$ = liftedStateSubject.asObservable();
    const state$ = liftedState$.pipe(map(unliftState));
    Object.defineProperty(state$, "state", {
      value: toSignal(state$, {
        manualCleanup: true,
        requireSync: true
      })
    });
    this.dispatcher = dispatcher;
    this.liftedState = liftedState$;
    this.state = state$;
  }
  ngOnDestroy() {
    this.liftedStateSubscription.unsubscribe();
    this.extensionStartSubscription.unsubscribe();
  }
  dispatch(action) {
    this.dispatcher.next(action);
  }
  next(action) {
    this.dispatcher.next(action);
  }
  error(error) {
  }
  complete() {
  }
  performAction(action) {
    this.dispatch(new PerformAction(action, +Date.now()));
  }
  refresh() {
    this.dispatch(new Refresh());
  }
  reset() {
    this.dispatch(new Reset(+Date.now()));
  }
  rollback() {
    this.dispatch(new Rollback(+Date.now()));
  }
  commit() {
    this.dispatch(new Commit(+Date.now()));
  }
  sweep() {
    this.dispatch(new Sweep());
  }
  toggleAction(id) {
    this.dispatch(new ToggleAction(id));
  }
  jumpToAction(actionId) {
    this.dispatch(new JumpToAction(actionId));
  }
  jumpToState(index) {
    this.dispatch(new JumpToState(index));
  }
  importState(nextLiftedState) {
    this.dispatch(new ImportState(nextLiftedState));
  }
  lockChanges(status) {
    this.dispatch(new LockChanges(status));
  }
  pauseRecording(status) {
    this.dispatch(new PauseRecording(status));
  }
};
_StoreDevtools.\u0275fac = function StoreDevtools_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoreDevtools)(\u0275\u0275inject(DevtoolsDispatcher), \u0275\u0275inject(ActionsSubject), \u0275\u0275inject(ReducerObservable), \u0275\u0275inject(DevtoolsExtension), \u0275\u0275inject(ScannedActionsSubject), \u0275\u0275inject(ErrorHandler), \u0275\u0275inject(INITIAL_STATE), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG));
};
_StoreDevtools.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StoreDevtools,
  factory: _StoreDevtools.\u0275fac
});
var StoreDevtools = _StoreDevtools;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtools, [{
    type: Injectable
  }], () => [{
    type: DevtoolsDispatcher
  }, {
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: DevtoolsExtension
  }, {
    type: ScannedActionsSubject
  }, {
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }], null);
})();
function emitInZone({
  ngZone,
  connectInZone
}) {
  return (source) => connectInZone ? new Observable((subscriber) => source.subscribe({
    next: (value) => ngZone.run(() => subscriber.next(value)),
    error: (error) => ngZone.run(() => subscriber.error(error)),
    complete: () => ngZone.run(() => subscriber.complete())
  })) : source;
}
var IS_EXTENSION_OR_MONITOR_PRESENT = new InjectionToken("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function createIsExtensionOrMonitorPresent(extension, config) {
  return Boolean(extension) || config.monitor !== noMonitor;
}
function createReduxDevtoolsExtension() {
  const extensionKey = "__REDUX_DEVTOOLS_EXTENSION__";
  if (typeof window === "object" && typeof window[extensionKey] !== "undefined") {
    return window[extensionKey];
  } else {
    return null;
  }
}
function createStateObservable(devtools) {
  return devtools.state;
}
function provideStoreDevtools(options = {}) {
  return makeEnvironmentProviders([DevtoolsExtension, DevtoolsDispatcher, StoreDevtools, {
    provide: INITIAL_OPTIONS,
    useValue: options
  }, {
    provide: IS_EXTENSION_OR_MONITOR_PRESENT,
    deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
    useFactory: createIsExtensionOrMonitorPresent
  }, {
    provide: REDUX_DEVTOOLS_EXTENSION,
    useFactory: createReduxDevtoolsExtension
  }, {
    provide: STORE_DEVTOOLS_CONFIG,
    deps: [INITIAL_OPTIONS],
    useFactory: createConfig
  }, {
    provide: StateObservable,
    deps: [StoreDevtools],
    useFactory: createStateObservable
  }, {
    provide: ReducerManagerDispatcher,
    useExisting: DevtoolsDispatcher
  }]);
}
var _StoreDevtoolsModule = class _StoreDevtoolsModule {
  static instrument(options = {}) {
    return {
      ngModule: _StoreDevtoolsModule,
      providers: [provideStoreDevtools(options)]
    };
  }
};
_StoreDevtoolsModule.\u0275fac = function StoreDevtoolsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoreDevtoolsModule)();
};
_StoreDevtoolsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _StoreDevtoolsModule
});
_StoreDevtoolsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var StoreDevtoolsModule = _StoreDevtoolsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtoolsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// src/app/core/services/cover-letter.service.ts
var CoverLetterService = class _CoverLetterService {
  firestore;
  auth;
  constructor(firestore, auth) {
    this.firestore = firestore;
    this.auth = auth;
  }
  getAllCoverLetters() {
    const colRef = collection(this.firestore, "coverLetters");
    return user(this.auth).pipe(switchMap((currentUser) => {
      if (!currentUser) {
        throw new Error("User not authenticated");
      }
      const q = query(colRef, where("userId", "==", currentUser.uid), orderBy("createdAt", "desc"));
      return collectionData(q, { idField: "id" });
    }));
  }
  deleteCoverLetter(id) {
    const docRef = doc(this.firestore, "coverLetters", id);
    return new Observable((observer) => {
      deleteDoc(docRef).then(() => {
        observer.next();
        observer.complete();
      }).catch((err) => observer.error(err));
    });
  }
  static \u0275fac = function CoverLetterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoverLetterService)(\u0275\u0275inject(Firestore), \u0275\u0275inject(Auth));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CoverLetterService, factory: _CoverLetterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoverLetterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Firestore }, { type: Auth }], null);
})();

// src/app/pages/application/cover-letter/data/cover-letter.effects.ts
var CoverLetterEffects = class _CoverLetterEffects {
  actions = inject(Actions);
  apiService = inject(CoverLetterService);
  aiService = inject(AiAgentService);
  getCoverLettersEffect = createEffect(() => this.actions.pipe(ofType(loadAllCoverLetters), switchMap(() => this.apiService.getAllCoverLetters().pipe(map((coverLetters) => loadAllCoverLettersSuccess({ coverLetters })), catchError((error) => of(loadAllCoverLettersFailure({ error })))))));
  deleteCoverLetterEffect = createEffect(() => this.actions.pipe(ofType(deleteCoverLetter), switchMap(({ id }) => this.apiService.deleteCoverLetter(id).pipe(
    map(() => loadAllCoverLetters()),
    // Reload cover letters after deletion
    catchError((error) => of(loadAllCoverLettersFailure({ error })))
  ))));
  generateCoverLetterEffect = createEffect(() => this.actions.pipe(ofType(generateCoverLetter), switchMap(({ resumeText, jobDescription, companyName, position, tone }) => this.aiService.generateCoverLetter(resumeText, jobDescription, companyName, position, tone).pipe(map((coverLetter) => generateCoverLetterSuccess({ coverLetter })), catchError((error) => of(generateCoverLetterFailure({ error })))))));
  static \u0275fac = function CoverLetterEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoverLetterEffects)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CoverLetterEffects, factory: _CoverLetterEffects.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoverLetterEffects, [{
    type: Injectable
  }], null, null);
})();

// src/app/pages/landing/pricing-plans/data/billing.reducer.ts
var BillingStatus;
(function(BillingStatus2) {
  BillingStatus2["Init"] = "init";
  BillingStatus2["Loading"] = "loading";
  BillingStatus2["Loaded"] = "loaded";
  BillingStatus2["Error"] = "error";
})(BillingStatus || (BillingStatus = {}));
var initialState = {
  status: BillingStatus.Init,
  loading: false,
  error: null,
  selectedPlan: null
};
var billingReducer = createReducer(initialState, on(startCheckout, (state, { plan }) => __spreadProps(__spreadValues({}, state), {
  status: BillingStatus.Loading,
  loading: true,
  error: null,
  selectedPlan: plan
})), on(startCheckoutSuccess, (state) => __spreadProps(__spreadValues({}, state), {
  status: BillingStatus.Loaded,
  loading: false,
  error: null,
  selectedPlan: null
})), on(startCheckoutFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  status: BillingStatus.Error,
  loading: false,
  error,
  selectedPlan: null
})), on(clearBillingError, (state) => __spreadProps(__spreadValues({}, state), {
  error: null
})));

// src/app/pages/landing/pricing-plans/data/billing.effects.ts
var BillingEffects = class _BillingEffects {
  actions$ = inject(Actions);
  billingService = inject(BillingService);
  notifications = inject(NotificationsService);
  router = inject(Router);
  startCheckoutEffect = createEffect(() => this.actions$.pipe(ofType(startCheckout), switchMap(({ plan }) => from(this.billingService.createCheckout(plan)).pipe(map((checkoutUrl) => startCheckoutSuccess({ checkoutUrl })), catchError((error) => of(startCheckoutFailure({
    error: error instanceof Error ? error.message : String(error)
  })))))));
  checkoutRedirectEffect = createEffect(() => this.actions$.pipe(ofType(startCheckoutSuccess), tap(({ checkoutUrl }) => {
    window.location.assign(checkoutUrl);
  })), { dispatch: false });
  checkoutFailureEffect = createEffect(() => this.actions$.pipe(ofType(startCheckoutFailure), tap(({ error }) => {
    if (error.toLowerCase().includes("log in")) {
      this.notifications.showInfo("Please log in before starting checkout.");
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.notifications.showError(error || "Could not start checkout. Please try again.");
  })), { dispatch: false });
  static \u0275fac = function BillingEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingEffects)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BillingEffects, factory: _BillingEffects.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingEffects, [{
    type: Injectable
  }], null, null);
})();

// src/app/core/state/notifications/notifications.reducer.ts
var initialState2 = {
  notifications: []
};
var notificationsReducer = createReducer(initialState2, on(showNotification, (state, { notification }) => __spreadProps(__spreadValues({}, state), {
  notifications: [...state.notifications, notification]
})), on(hideNotification, (state, { id }) => __spreadProps(__spreadValues({}, state), {
  notifications: state.notifications.filter((n) => n.id !== id)
})), on(clearAllNotifications, (state) => __spreadProps(__spreadValues({}, state), {
  notifications: []
})));

// src/app/core/state/notifications/notifications.effects.ts
var NotificationsEffects = class _NotificationsEffects {
  actions$ = inject(Actions);
  autoHideNotification$ = createEffect(() => this.actions$.pipe(ofType(showNotification), mergeMap((action) => {
    const duration = action.notification.duration || 5e3;
    if (duration > 0) {
      return timer(duration).pipe(map(() => hideNotification({ id: action.notification.id })));
    }
    return EMPTY;
  })));
  static \u0275fac = function NotificationsEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsEffects)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationsEffects, factory: _NotificationsEffects.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsEffects, [{
    type: Injectable
  }], null, null);
})();

// src/app/core/services/job.service.ts
var JobService = class _JobService {
  firestore;
  auth;
  constructor(firestore, auth) {
    this.firestore = firestore;
    this.auth = auth;
  }
  getJobsForUser() {
    const jobsRef = collection(this.firestore, "jobs");
    return user(this.auth).pipe(switchMap((currentUser) => {
      if (!currentUser) {
        throw new Error("User not authenticated");
      }
      const jobsQuery = query(jobsRef, where("userId", "==", currentUser.uid), orderBy("createdAt", "desc"));
      return collectionData(jobsQuery, { idField: "id" });
    }), catchError((error) => {
      console.error("Error fetching jobs:", error);
      return of([]);
    }));
  }
  createJob(job) {
    const jobsRef = collection(this.firestore, "jobs");
    return new Observable((observer) => {
      const currentUser = this.auth.currentUser;
      if (!currentUser) {
        observer.error(new Error("User not authenticated"));
        return;
      }
      addDoc(jobsRef, __spreadProps(__spreadValues({}, job), {
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      })).then((docRef) => {
        observer.next(docRef.id);
        observer.complete();
      }).catch((error) => {
        console.error("Error creating job:", error);
        observer.error(error);
      });
    });
  }
  updateJob(id, changes) {
    const jobDoc = doc(this.firestore, "jobs", id);
    const updatePayload = __spreadProps(__spreadValues({}, changes), {
      updatedAt: serverTimestamp()
    });
    return from(updateDoc(jobDoc, updatePayload)).pipe(switchMap(() => docData(jobDoc)), catchError((error) => {
      console.error("Error updating job:", error);
      return throwError(() => error);
    }));
  }
  deleteJob(id) {
    const jobDoc = doc(this.firestore, "jobs", id);
    return from(deleteDoc(jobDoc)).pipe(map(() => id), catchError((error) => {
      console.error("Error deleting job:", error);
      return throwError(() => error);
    }));
  }
  bulkUpdateJobPositions(jobs) {
    if (jobs.length === 0) {
      return of(void 0);
    }
    const batch = writeBatch(this.firestore);
    for (const job of jobs) {
      const jobDoc = doc(this.firestore, "jobs", job.id);
      batch.update(jobDoc, {
        status: job.status,
        position: job.position,
        updatedAt: serverTimestamp()
      });
    }
    return from(batch.commit()).pipe(map(() => void 0), catchError((error) => {
      console.error("Error bulk-updating jobs:", error);
      return throwError(() => error);
    }));
  }
  static \u0275fac = function JobService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobService)(\u0275\u0275inject(Firestore), \u0275\u0275inject(Auth));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobService, factory: _JobService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Firestore }, { type: Auth }], null);
})();

// src/app/pages/application/job-tracker/data/jobs.effects.ts
var JobsEffects = class _JobsEffects {
  actions$ = inject(Actions);
  jobsService = inject(JobService);
  loadJobs$ = createEffect(() => this.actions$.pipe(ofType(loadJobs), switchMap(() => this.jobsService.getJobsForUser().pipe(map((jobs) => loadJobsSuccess({ jobs })), catchError((error) => of(loadJobsFailure({ error: this.toError(error) })))))));
  addJob$ = createEffect(() => this.actions$.pipe(ofType(addJob), switchMap(({ job }) => this.jobsService.createJob(job).pipe(map((id) => addJobSuccess({ id })), catchError((error) => of(addJobFailure({ error: this.toError(error) })))))));
  moveJob$ = createEffect(() => this.actions$.pipe(ofType(moveJob), switchMap(({ jobs }) => this.jobsService.bulkUpdateJobPositions(jobs).pipe(map(() => moveJobSuccess()), catchError((error) => of(moveJobFailure({ error: this.toError(error) })))))));
  updateJob$ = createEffect(() => this.actions$.pipe(ofType(updateJob), switchMap(({ id, changes }) => this.jobsService.updateJob(id, changes).pipe(map(() => updateJobSuccess()), catchError((error) => of(updateJobFailure({ error: this.toError(error) })))))));
  deleteJob$ = createEffect(() => this.actions$.pipe(ofType(deleteJob), switchMap(({ id }) => this.jobsService.deleteJob(id).pipe(map((id2) => deleteJobSuccess({ id: id2 })), catchError((error) => of(deleteJobFailure({ error: this.toError(error) })))))));
  clearOnLogout$ = createEffect(() => this.actions$.pipe(ofType(logoutSuccess), map(() => clearJobsState())));
  toError(error) {
    return error instanceof Error ? error.message : String(error);
  }
  static \u0275fac = function JobsEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobsEffects)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobsEffects, factory: _JobsEffects.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobsEffects, [{
    type: Injectable
  }], null, null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    // Angular core
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    // Firebase (MUST be before anything that injects Firestore/Auth)
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions(void 0, "us-central1")),
    // HTTP
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // NgRx
    provideStore({
      auth: authReducer,
      resumes: resumesReducer,
      coverLetters: coverLetterReducer,
      billing: billingReducer,
      notifications: notificationsReducer,
      jobs: jobsReducer
    }),
    provideEffects([
      AuthEffects,
      ResumeEffects,
      CoverLetterEffects,
      BillingEffects,
      NotificationsEffects,
      JobsEffects
    ]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production
    })
  ]
};

// src/app/core/services/seo.service.ts
var SeoService = class _SeoService {
  titleService;
  meta;
  document;
  baseUrl = "https://resume-crafts.com";
  defaultImage = `${this.baseUrl}/assets/hero-image.png`;
  constructor(titleService, meta, document) {
    this.titleService = titleService;
    this.meta = meta;
    this.document = document;
  }
  apply(metadata) {
    const canonicalUrl = this.toCanonicalUrl(metadata.canonicalPath);
    const ogImage = metadata.ogImage ?? this.defaultImage;
    const twitterCard = metadata.twitterCard ?? "summary_large_image";
    const ogType = metadata.ogType ?? "website";
    const robots = metadata.robots ?? "index, follow";
    this.titleService.setTitle(metadata.title);
    this.meta.updateTag({ name: "description", content: metadata.description });
    this.meta.updateTag({ name: "robots", content: robots });
    this.meta.updateTag({ name: "author", content: "ResumeCrafts AI" });
    if (metadata.keywords) {
      this.meta.updateTag({ name: "keywords", content: metadata.keywords });
    }
    this.meta.updateTag({ property: "og:site_name", content: "ResumeCrafts AI" });
    this.meta.updateTag({ property: "og:type", content: ogType });
    this.meta.updateTag({ property: "og:title", content: metadata.title });
    this.meta.updateTag({ property: "og:description", content: metadata.description });
    this.meta.updateTag({ property: "og:url", content: canonicalUrl });
    this.meta.updateTag({ property: "og:image", content: ogImage });
    this.meta.updateTag({ name: "twitter:card", content: twitterCard });
    this.meta.updateTag({ name: "twitter:title", content: metadata.title });
    this.meta.updateTag({ name: "twitter:description", content: metadata.description });
    this.meta.updateTag({ name: "twitter:image", content: ogImage });
    this.setCanonical(canonicalUrl);
    this.setJsonLd(metadata.jsonLd);
  }
  toCanonicalUrl(path) {
    if (!path || path === "/") {
      return `${this.baseUrl}/`;
    }
    return `${this.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  }
  setCanonical(url) {
    let link = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement("link");
      link.setAttribute("rel", "canonical");
      this.document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }
  setJsonLd(data) {
    const scriptId = "seo-structured-data";
    const existing = this.document.getElementById(scriptId);
    if (existing) {
      existing.remove();
    }
    if (!data) {
      return;
    }
    const script = this.document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
  static \u0275fac = function SeoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoService)(\u0275\u0275inject(Title), \u0275\u0275inject(Meta), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Title }, { type: Meta }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();

// src/app/core/state/notifications/notifications.selectors.ts
var selectNotificationsState = createFeatureSelector("notifications");
var selectAllNotifications = createSelector(selectNotificationsState, (state) => state.notifications);
var selectVisibleNotifications = createSelector(selectAllNotifications, (notifications) => notifications);
var selectNotificationCount = createSelector(selectAllNotifications, (notifications) => notifications.length);

// src/app/lib/notifications/notifications.ts
var _forTrack0 = ($index, $item) => $item.id;
function Notifications_Conditional_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "article", 2)(1, "p", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 4);
    \u0275\u0275domListener("click", function Notifications_Conditional_0_Conditional_0_For_2_Template_button_click_3_listener() {
      const notification_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.close(notification_r2.id));
    });
    \u0275\u0275text(4, " \xD7 ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("notification--success", notification_r2.type === ctx_r2.notificationType.Success)("notification--error", notification_r2.type === ctx_r2.notificationType.Error)("notification--info", notification_r2.type === ctx_r2.notificationType.Info)("notification--warning", notification_r2.type === ctx_r2.notificationType.Warning);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r2.message);
  }
}
function Notifications_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, Notifications_Conditional_0_Conditional_0_For_2_Template, 5, 9, "article", 1, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const notifications_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(notifications_r4);
  }
}
function Notifications_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Notifications_Conditional_0_Conditional_0_Template, 3, 0, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length ? 0 : -1);
  }
}
var Notifications = class _Notifications {
  store = inject(Store);
  notifications$ = this.store.select(selectVisibleNotifications);
  notificationType = NotificationType;
  close(id) {
    this.store.dispatch(hideNotification({ id }));
  }
  static \u0275fac = function Notifications_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notifications)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Notifications, selectors: [["app-notifications"]], decls: 2, vars: 3, consts: [["aria-live", "polite", "aria-atomic", "true", 1, "notifications"], ["role", "status", 1, "notification", 3, "notification--success", "notification--error", "notification--info", "notification--warning"], ["role", "status", 1, "notification"], [1, "notification__message"], ["type", "button", "aria-label", "Dismiss notification", 1, "notification__close", 3, "click"]], template: function Notifications_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Notifications_Conditional_0_Template, 1, 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.notifications$)) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [AsyncPipe], styles: ["\n\n.notifications[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1100;\n  display: grid;\n  gap: 0.75rem;\n  width: min(24rem, 100vw - 2rem);\n}\n.notification[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: start;\n  gap: 0.75rem;\n  border-radius: 0.5rem;\n  border: 1px solid transparent;\n  background: #ffffff;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);\n  padding: 0.75rem 0.875rem;\n  color: #0f172a;\n}\n.notification__message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.35;\n}\n.notification__close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #334155;\n  font-size: 1.125rem;\n  line-height: 1;\n  padding: 0.125rem;\n  cursor: pointer;\n}\n.notification--success[_ngcontent-%COMP%] {\n  border-color: #86efac;\n}\n.notification--error[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n}\n.notification--info[_ngcontent-%COMP%] {\n  border-color: #93c5fd;\n}\n.notification--warning[_ngcontent-%COMP%] {\n  border-color: #fcd34d;\n}\n/*# sourceMappingURL=notifications.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Notifications, [{
    type: Component,
    args: [{ selector: "app-notifications", imports: [AsyncPipe], template: '@if (notifications$ | async; as notifications) {\r\n  @if (notifications.length) {\r\n    <div class="notifications" aria-live="polite" aria-atomic="true">\r\n      @for (notification of notifications; track notification.id) {\r\n        <article\r\n          class="notification"\r\n          [class.notification--success]="notification.type === notificationType.Success"\r\n          [class.notification--error]="notification.type === notificationType.Error"\r\n          [class.notification--info]="notification.type === notificationType.Info"\r\n          [class.notification--warning]="notification.type === notificationType.Warning"\r\n          role="status"\r\n        >\r\n          <p class="notification__message">{{ notification.message }}</p>\r\n          <button\r\n            class="notification__close"\r\n            type="button"\r\n            (click)="close(notification.id)"\r\n            aria-label="Dismiss notification"\r\n          >\r\n            &times;\r\n          </button>\r\n        </article>\r\n      }\r\n    </div>\r\n  }\r\n}\r\n\r\n\r\n', styles: ["/* src/app/lib/notifications/notifications.scss */\n.notifications {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1100;\n  display: grid;\n  gap: 0.75rem;\n  width: min(24rem, 100vw - 2rem);\n}\n.notification {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: start;\n  gap: 0.75rem;\n  border-radius: 0.5rem;\n  border: 1px solid transparent;\n  background: #ffffff;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);\n  padding: 0.75rem 0.875rem;\n  color: #0f172a;\n}\n.notification__message {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.35;\n}\n.notification__close {\n  border: none;\n  background: transparent;\n  color: #334155;\n  font-size: 1.125rem;\n  line-height: 1;\n  padding: 0.125rem;\n  cursor: pointer;\n}\n.notification--success {\n  border-color: #86efac;\n}\n.notification--error {\n  border-color: #fca5a5;\n}\n.notification--info {\n  border-color: #93c5fd;\n}\n.notification--warning {\n  border-color: #fcd34d;\n}\n/*# sourceMappingURL=notifications.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Notifications, { className: "Notifications", filePath: "src/app/lib/notifications/notifications.ts", lineNumber: 13 });
})();

// src/app/app.ts
var App_Defer_3_DepsFn = () => [RouterOutlet];
function App_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
function App_DeferLoading_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 1);
  }
}
function App_DeferPlaceholder_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading preview...");
    \u0275\u0275elementEnd();
  }
}
var App = class _App {
  title = signal("application", ...ngDevMode ? [{ debugName: "title" }] : []);
  authFacade = inject(AuthFacade);
  router = inject(Router);
  route = inject(ActivatedRoute);
  seo = inject(SeoService);
  destroyRef = inject(DestroyRef);
  status$ = this.authFacade.status$;
  authStatus = AuthStatus;
  ngOnInit() {
    this.authFacade.initAuth();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), startWith(null), map(() => this.getDeepestSeoData()), takeUntilDestroyed(this.destroyRef)).subscribe((seoData) => {
      if (!seoData) {
        return;
      }
      this.seo.apply(seoData);
    });
  }
  getDeepestSeoData() {
    let current = this.route;
    let latestSeo = null;
    if (current.snapshot.data?.["seo"]) {
      latestSeo = current.snapshot.data["seo"];
    }
    while (current?.firstChild) {
      current = current.firstChild;
      if (current.snapshot.data?.["seo"]) {
        latestSeo = current.snapshot.data["seo"];
      }
    }
    return latestSeo;
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[500, 100], ["mode", "indeterminate", "diameter", "50"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domTemplate(0, App_Defer_0_Template, 1, 0)(1, App_DeferLoading_1_Template, 1, 0)(2, App_DeferPlaceholder_2_Template, 2, 0);
      \u0275\u0275defer(3, 0, App_Defer_3_DepsFn, 1, 2, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275element(5, "app-notifications");
    }
  }, dependencies: [CommonModule, Notifications, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, CommonModule, Notifications, MatProgressSpinnerModule], template: '@defer (on viewport) {\r\n    <router-outlet></router-outlet>\r\n} @loading (after 100ms; minimum 500ms) {\r\n  <mat-progress-spinner\r\n    mode="indeterminate"\r\n    diameter="50"\r\n  ></mat-progress-spinner>\r\n} @placeholder {\r\n  <div>Loading preview...</div>\r\n}\r\n<app-notifications></app-notifications>\r\n', styles: ["/* src/app/app.scss */\n.loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 18 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error("Error during bootstraping the application:", err));
//# sourceMappingURL=main.js.map
