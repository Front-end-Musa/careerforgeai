import {
  AuthFacade,
  AuthStatus
} from "./chunk-4TREYFXK.js";
import "./chunk-G2253GUZ.js";
import {
  Router
} from "./chunk-4QIJMJL3.js";
import "./chunk-5DFGQV6T.js";
import "./chunk-DNRS4C6J.js";
import {
  Injectable,
  combineLatest,
  filter,
  map,
  setClassMetadata,
  take,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OFJZEGRZ.js";
import {
  __spreadValues
} from "./chunk-46DXP6YY.js";

// src/app/pages/auth/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  authFacade;
  router;
  constructor(authFacade, router) {
    this.authFacade = authFacade;
    this.router = router;
  }
  canActivate() {
    return combineLatest([this.authFacade.user$, this.authFacade.status$]).pipe(
      // 1. Only allow the stream to continue if status is Loaded or Error (auth check complete)
      filter(([user, status]) => status === AuthStatus.Loaded || status === AuthStatus.Error),
      // 2. Take the first value that passes the filter and complete
      take(1),
      // 3. Logic to determine access
      map(([user]) => {
        if (!user) {
          console.log("User not authenticated, redirecting to login.");
          return this.router.createUrlTree(["/auth/login"]);
        }
        return true;
      })
    );
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthFacade), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthFacade }, { type: Router }], null);
})();

// src/app/pages/application/application.routes.ts
var APPLICATION_ROUTES = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-N3KXQB46.js").then((c) => c.Application),
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-IXUFLU2P.js").then((c) => c.Dashboard),
        data: {
          seo: {
            title: "Dashboard | ResumeCrafts AI",
            description: "View your activity, recent resumes, and AI tools at a glance.",
            robots: "noindex, nofollow",
            canonicalPath: "/application/dashboard",
            ogType: "website"
          }
        }
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-GAYAAV7S.js").then((c) => c.Settings),
        data: {
          seo: {
            title: "Settings | ResumeCrafts AI",
            description: "Manage your profile, preferences, and billing for ResumeCrafts AI.",
            robots: "noindex, nofollow",
            canonicalPath: "/application/settings",
            ogType: "website"
          }
        }
      },
      {
        path: "resumes/:id/edit",
        loadComponent: () => import("./chunk-GXAGIPJZ.js").then((c) => c.ResumesEdit),
        data: {
          seo: {
            title: "Edit Resume | ResumeCrafts AI",
            description: "Edit and refine your resume with AI suggestions and formatting help.",
            robots: "noindex, nofollow",
            canonicalPath: "/application/resumes",
            ogType: "website"
          }
        }
      },
      {
        path: "resumes/:id/tailor",
        loadComponent: () => import("./chunk-AJZWZEJ6.js").then((c) => c.ResumesTailor),
        data: {
          seo: {
            title: "Tailor Resume | ResumeCrafts AI",
            description: "Tailor your resume to a specific job with AI-powered targeting.",
            robots: "noindex, nofollow",
            canonicalPath: "/application/resumes",
            ogType: "website"
          }
        }
      },
      {
        path: "resumes",
        loadComponent: () => import("./chunk-6VSCT3KV.js").then((c) => c.Resumes),
        data: {
          seo: {
            title: "Resumes | ResumeCrafts AI",
            description: "Create, organize, and manage your resumes in ResumeCrafts AI.",
            robots: "noindex, nofollow",
            canonicalPath: "/application/resumes",
            ogType: "website"
          }
        }
      },
      {
        path: "cover-letter",
        loadComponent: () => import("./chunk-IET2DVZU.js").then((c) => c.CoverLetter),
        data: {
          seo: {
            title: "Cover Letter | ResumeCrafts AI",
            description: "Generate and edit personalized cover letters for your applications.",
            robots: "noindex, nofollow",
            canonicalPath: "/application/cover-letter",
            ogType: "website"
          }
        }
      },
      {
        path: "job-tracker",
        loadComponent: () => import("./chunk-GJMGSCCG.js").then((c) => c.JobTracker),
        data: {
          seo: {
            title: "Job Tracker | ResumeCrafts AI",
            description: "Track applications, statuses, and follow-ups in one place.",
            robots: "noindex, nofollow",
            canonicalPath: "/application/job-tracker",
            ogType: "website"
          }
        }
      },
      {
        path: "interview-coach",
        loadComponent: () => import("./chunk-WULIYFTR.js").then((c) => c.InterviewCoach),
        data: {
          seo: {
            title: "Interview Coach | ResumeCrafts AI",
            description: "Practice interview questions and get AI feedback to improve.",
            robots: "noindex, nofollow",
            canonicalPath: "/application/interview-coach",
            ogType: "website"
          }
        }
      },
      {
        path: "linkedin-optimizer",
        loadComponent: () => import("./chunk-5DNJW23L.js").then((c) => c.Linkedin),
        data: {
          seo: {
            title: "LinkedIn Optimizer | ResumeCrafts AI",
            description: "Optimize your LinkedIn profile with AI-driven recommendations.",
            robots: "noindex, nofollow",
            canonicalPath: "/application/linkedin-optimizer",
            ogType: "website"
          }
        }
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "**",
        redirectTo: "dashboard"
      }
    ]
  }, false ? { \u0275entryName: "src/app/pages/application/application.ts" } : {})
];
export {
  APPLICATION_ROUTES
};
//# sourceMappingURL=chunk-M6LVKNQ7.js.map
