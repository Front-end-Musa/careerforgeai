import {
  JobsFacade
} from "./chunk-VFRCJ3UL.js";
import {
  ResumesFacade
} from "./chunk-JWEDNJBE.js";
import "./chunk-466HBO3F.js";
import "./chunk-5VXP3HLW.js";
import "./chunk-EYC2LAWI.js";
import "./chunk-E7Z7URHS.js";
import "./chunk-TIJC3XQI.js";
import "./chunk-U4YT2HSO.js";
import "./chunk-7YWLATDR.js";
import "./chunk-GTOMM46D.js";
import {
  AuthFacade
} from "./chunk-4TREYFXK.js";
import {
  takeUntilDestroyed
} from "./chunk-G2253GUZ.js";
import {
  RouterLink
} from "./chunk-4QIJMJL3.js";
import "./chunk-5DFGQV6T.js";
import "./chunk-DNRS4C6J.js";
import {
  Component,
  DestroyRef,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OFJZEGRZ.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/application/dashboard/dashboard.ts
var Dashboard = class _Dashboard {
  authFacade = inject(AuthFacade);
  resumesFacade = inject(ResumesFacade);
  jobsFacade = inject(JobsFacade);
  destroyRef = inject(DestroyRef);
  user = signal(null, ...ngDevMode ? [{ debugName: "user" }] : []);
  resumes = signal([], ...ngDevMode ? [{ debugName: "resumes" }] : []);
  applications = signal([], ...ngDevMode ? [{ debugName: "applications" }] : []);
  interviews = signal([], ...ngDevMode ? [{ debugName: "interviews" }] : []);
  offers = signal([], ...ngDevMode ? [{ debugName: "offers" }] : []);
  ngOnInit() {
    this.resumesFacade.loadResumes();
    this.jobsFacade.loadJobs();
    this.resumesFacade.resumes$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((resumes) => {
      this.resumes.set(resumes);
    });
    this.authFacade.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (user) => {
        this.user.set(user);
      }
    });
    this.jobsFacade.jobs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((jobs) => {
      this.applications.set(jobs.filter((job) => job.status === "applied"));
      this.interviews.set(jobs.filter((job) => job.status === "interviewing"));
      this.offers.set(jobs.filter((job) => job.status === "offered"));
    });
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 66, vars: 5, consts: [[1, "dashboard"], [1, "app-section"], [1, "head"], [1, "title"], [1, "sub-title"], [1, "stats"], [1, "resume", "stat"], [1, "stat-head"], [1, "stat-title"], [1, "material-symbols-outlined", "resume-mat", "icon-blue"], [1, "stat-value"], [1, "stat-value-number"], [1, "stat-value-text"], [1, "applications", "stat"], [1, "material-symbols-outlined", "applications-mat", "green-icon"], [1, "interviews", "stat"], [1, "material-symbols-outlined", "interviews-mat", "purple-icon"], [1, "profile-views", "stat"], [1, "material-symbols-outlined", "profile-mat", "orange-icon"], [1, "quick-actions-container"], [1, "quick-actions-title", "section-title"], [1, "quick-actions"], ["routerLink", "/application/resumes", 1, "action"], [1, "material-symbols-outlined", "icon-blue"], [1, "action-title"], ["routerLink", "/application/cover-letter", 1, "action"], [1, "material-symbols-outlined", "green-icon"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Here's your career progress.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "h4", 8);
      \u0275\u0275text(11, "Resumes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13, "description");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 12);
      \u0275\u0275text(18, "Total resumes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 13)(20, "div", 7)(21, "h4", 8);
      \u0275\u0275text(22, "Applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 14);
      \u0275\u0275text(24, "work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "div", 11);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 12);
      \u0275\u0275text(29, "In progress");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 15)(31, "div", 7)(32, "h4", 8);
      \u0275\u0275text(33, "Interviews");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 16);
      \u0275\u0275text(35, "event");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 10)(37, "div", 11);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p", 12);
      \u0275\u0275text(40, "Scheduled");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 17)(42, "div", 7)(43, "h4", 8);
      \u0275\u0275text(44, "Offers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 18);
      \u0275\u0275text(46, "analytics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 10)(48, "div", 11);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 12);
      \u0275\u0275text(51, "Job offers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 19)(53, "h3", 20);
      \u0275\u0275text(54, "Quick Actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 21)(56, "div", 22)(57, "span", 23);
      \u0275\u0275text(58, "description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h4", 24);
      \u0275\u0275text(60, "Generate Resume");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 25)(62, "span", 26);
      \u0275\u0275text(63, "mail_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "h4", 24);
      \u0275\u0275text(65, "Create Cover Letter");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Welcome back, ", (tmp_0_0 = ctx.user()) == null ? null : tmp_0_0.name, "!");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.resumes().length);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.applications().length);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.interviews().length);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.offers().length);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0;\n  letter-spacing: normal;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n  margin: 5px 0 0 0;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  background-color: var(--surface-card);\n  border-radius: 12px;\n  border: 1px solid var(--border);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-head[_ngcontent-%COMP%]   .stat-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]   .stat-value-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .quick-actions-container[_ngcontent-%COMP%] {\n  background-color: var(--surface-card);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .quick-actions-container[_ngcontent-%COMP%]   .quick-actions-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .quick-actions-container[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .quick-actions-container[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  padding: 25px 30px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.2s ease;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .quick-actions-container[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:hover {\n  border-color: var(--mat-sys-primary);\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);\n  transform: translateY(-2px);\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .quick-actions-container[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-top: 20px;\n  font-weight: 500;\n}\n.dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .quick-actions-container[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 1.7rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 592px) {\n  .dashboard[_ngcontent-%COMP%]   .app-section[_ngcontent-%COMP%]   .quick-actions-container[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n}\n.green-icon[_ngcontent-%COMP%] {\n  color: #22c55e;\n  background-color: #dcfce7;\n}\n.purple-icon[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n  background-color: #ede9fe;\n}\n.orange-icon[_ngcontent-%COMP%] {\n  color: #f97316;\n  background-color: #ffedd5;\n}\n@media (max-width: 768px) {\n  .dashboard[_ngcontent-%COMP%]   .quick-actions-container[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dashboard[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n@media (max-width: 580px) {\n  .dashboard[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .dashboard[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .dashboard[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n    padding: 20px;\n    gap: 1vh;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [RouterLink], template: `<div class="dashboard">\r
  <div class="app-section">\r
    <header class="head">\r
      <h1 class="title">Welcome back, {{ user()?.name }}!</h1>\r
      <p class="sub-title">Here's your career progress.</p>\r
    </header>\r
    <div class="stats">\r
      <div class="resume stat">\r
        <div class="stat-head">\r
          <h4 class="stat-title">Resumes</h4>\r
          <span class="material-symbols-outlined resume-mat icon-blue">description</span>\r
        </div>\r
        <div class="stat-value">\r
          <div class="stat-value-number">{{ resumes().length }}</div>\r
          <p class="stat-value-text">Total resumes</p>\r
        </div>\r
      </div>\r
      <div class="applications stat">\r
        <div class="stat-head">\r
          <h4 class="stat-title">Applications</h4>\r
          <span class="material-symbols-outlined applications-mat green-icon">work</span>\r
        </div>\r
        <div class="stat-value">\r
          <div class="stat-value-number">{{ applications().length }}</div>\r
          <p class="stat-value-text">In progress</p>\r
        </div>\r
      </div>\r
      <div class="interviews stat">\r
        <div class="stat-head">\r
          <h4 class="stat-title">Interviews</h4>\r
          <span class="material-symbols-outlined interviews-mat purple-icon">event</span>\r
        </div>\r
        <div class="stat-value">\r
          <div class="stat-value-number">{{ interviews().length }}</div>\r
          <p class="stat-value-text">Scheduled</p>\r
        </div>\r
      </div>\r
      <div class="profile-views stat">\r
        <div class="stat-head">\r
          <h4 class="stat-title">Offers</h4>\r
          <span class="material-symbols-outlined profile-mat orange-icon">analytics</span>\r
        </div>\r
        <div class="stat-value">\r
          <div class="stat-value-number">{{ offers().length }}</div>\r
          <p class="stat-value-text">Job offers</p>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="quick-actions-container">\r
      <h3 class="quick-actions-title section-title">Quick Actions</h3>\r
      <div class="quick-actions">\r
        <div class="action" routerLink="/application/resumes">\r
          <span class="material-symbols-outlined icon-blue">description</span>\r
          <h4 class="action-title">Generate Resume</h4>\r
        </div>\r
        <div class="action" routerLink="/application/cover-letter">\r
          <span class="material-symbols-outlined green-icon">mail_outline</span>\r
          <h4 class="action-title">Create Cover Letter</h4>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/application/dashboard/dashboard.scss */\n.dashboard .app-section {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n.dashboard .app-section .head {\n  text-align: left;\n}\n.dashboard .app-section .head .title {\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 0;\n  letter-spacing: normal;\n}\n.dashboard .app-section .head .sub-title {\n  font-size: 16px;\n  color: var(--text-muted);\n  margin: 5px 0 0 0;\n}\n.dashboard .app-section .stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n}\n.dashboard .app-section .stats .stat {\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  background-color: var(--surface-card);\n  border-radius: 12px;\n  border: 1px solid var(--border);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.dashboard .app-section .stats .stat .stat-head {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.dashboard .app-section .stats .stat .stat-head .stat-title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.dashboard .app-section .stats .stat .stat-head span {\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.dashboard .app-section .stats .stat .stat-value {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dashboard .app-section .stats .stat .stat-value .stat-value-number {\n  font-size: 2rem;\n  font-weight: bold;\n}\n.dashboard .app-section .quick-actions-container {\n  background-color: var(--surface-card);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.dashboard .app-section .quick-actions-container .quick-actions-title {\n  font-size: 1.3rem;\n}\n.dashboard .app-section .quick-actions-container .quick-actions {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.dashboard .app-section .quick-actions-container .quick-actions .action {\n  border: 1px solid var(--border);\n  padding: 25px 30px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.2s ease;\n}\n.dashboard .app-section .quick-actions-container .quick-actions .action:hover {\n  border-color: var(--mat-sys-primary);\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);\n  transform: translateY(-2px);\n}\n.dashboard .app-section .quick-actions-container .quick-actions .action .action-title {\n  font-size: 1rem;\n  margin-top: 20px;\n  font-weight: 500;\n}\n.dashboard .app-section .quick-actions-container .quick-actions .action span {\n  width: 50px;\n  height: 50px;\n  font-size: 1.7rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media (max-width: 592px) {\n  .dashboard .app-section .quick-actions-container {\n    padding: 25px 20px;\n  }\n}\n.green-icon {\n  color: #22c55e;\n  background-color: #dcfce7;\n}\n.purple-icon {\n  color: #8b5cf6;\n  background-color: #ede9fe;\n}\n.orange-icon {\n  color: #f97316;\n  background-color: #ffedd5;\n}\n@media (max-width: 768px) {\n  .dashboard .quick-actions-container .quick-actions {\n    grid-template-columns: 1fr;\n  }\n  .dashboard .head .title {\n    font-size: 1.5rem;\n  }\n}\n@media (max-width: 580px) {\n  .dashboard .head .title {\n    font-size: 1.2rem;\n  }\n  .dashboard .head .sub-title {\n    font-size: 14px;\n  }\n  .dashboard .stats .stat {\n    padding: 20px;\n    gap: 1vh;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/application/dashboard/dashboard.ts", lineNumber: 17 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-IXUFLU2P.js.map
