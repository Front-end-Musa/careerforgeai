import {
  ResumePreview
} from "./chunk-IPHUA2QQ.js";
import {
  CommonModule,
  TitleCasePipe
} from "./chunk-DNRS4C6J.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OFJZEGRZ.js";

// src/app/pages/application/resumes/resume-template-modal/resume-template-modal.ts
var _forTrack0 = ($index, $item) => $item.id;
function ResumeTemplateModal_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.upsellMessage);
  }
}
function ResumeTemplateModal_Conditional_0_For_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "Upgrade to unlock");
    \u0275\u0275elementEnd();
  }
}
function ResumeTemplateModal_Conditional_0_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ResumeTemplateModal_Conditional_0_For_14_Template_button_click_0_listener() {
      const template_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTemplate(template_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275element(2, "app-resume-preview", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ResumeTemplateModal_Conditional_0_For_14_Conditional_12_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const template_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("locked", ctx_r1.isLocked(template_r4.id))("selected", ctx_r1.selectedTemplateId === template_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("resume", ctx_r1.demoResume)("templateId", template_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(template_r4.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("locked-badge", ctx_r1.isLocked(template_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 12, ctx_r1.requiredPlanLabel(template_r4.id)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(template_r4.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLocked(template_r4.id) ? 12 : -1);
  }
}
function ResumeTemplateModal_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ResumeTemplateModal_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ResumeTemplateModal_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div")(4, "h2");
    \u0275\u0275text(5, "Choose a Resume Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7, "Pick a starting point before you begin.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275listener("click", function ResumeTemplateModal_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(9, "x");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6);
    \u0275\u0275conditionalCreate(11, ResumeTemplateModal_Conditional_0_Conditional_11_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275repeaterCreate(13, ResumeTemplateModal_Conditional_0_For_14_Template, 13, 14, "button", 9, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.upsellMessage ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.templates);
  }
}
var ResumeTemplateModal = class _ResumeTemplateModal {
  plan = "free";
  selectedTemplateId = null;
  templateSelected = new EventEmitter();
  closed = new EventEmitter();
  isOpen = false;
  upsellMessage = "";
  templates = [
    {
      id: "basic",
      name: "Basic",
      description: "Clean, straightforward layout with clear sections.",
      requiredPlan: "free"
    },
    {
      id: "ats-simple",
      name: "ATS-Friendly Simple",
      description: "Optimized for ATS scanners with minimal styling.",
      requiredPlan: "free"
    },
    {
      id: "classic-one-column",
      name: "Classic One-Column",
      description: "Traditional single-column resume layout.",
      requiredPlan: "free"
    },
    {
      id: "pro-modern",
      name: "Pro (Professional & Modern)",
      description: "Modern two-column layout with strong hierarchy.",
      requiredPlan: "pro"
    },
    {
      id: "cascade",
      name: "Cascade (Pro)",
      description: "Elegant spacing and bold section flow.",
      requiredPlan: "pro"
    },
    {
      id: "cubic-pro",
      name: "Cubic (Pro)",
      description: "Geometric spacing with crisp block headings.",
      requiredPlan: "pro"
    },
    {
      id: "tech-savvy",
      name: "Tech-Savvy",
      description: "Sleek tech-forward layout with sharp accents.",
      requiredPlan: "pro"
    },
    {
      id: "modern-executive",
      name: "Modern Executive",
      description: "Executive-ready layout with confident styling.",
      requiredPlan: "pro"
    },
    {
      id: "premium-executive",
      name: "Premium (Executive & High-End)",
      description: "High-end executive formatting with luxury detail.",
      requiredPlan: "premium"
    },
    {
      id: "executive-edge",
      name: "Executive Edge",
      description: "Polished, premium layout for senior roles.",
      requiredPlan: "premium"
    },
    {
      id: "graphical-genius",
      name: "Graphical Genius",
      description: "Premium visual balance with refined typography.",
      requiredPlan: "premium"
    },
    {
      id: "elite-senior",
      name: "Elite Senior",
      description: "Senior-level polish with calm hierarchy.",
      requiredPlan: "premium"
    },
    {
      id: "metamorphic-masterpiece",
      name: "Metamorphic Masterpiece",
      description: "Luxury serif styling with layered sections.",
      requiredPlan: "premium"
    }
  ];
  demoResume = {
    personalInfo: { fullName: "Alex Morgan", jobTitle: "Product Designer" },
    contact: { email: "alex@email.com", phone: "+1 (555) 123-4567" },
    summary: "Product designer focused on clean UX and measurable impact.",
    experience: [
      {
        company: "Studio North",
        role: "Lead Designer",
        startDate: "2022-03",
        endDate: "Present",
        description: ["Built mobile-first design systems", "Led 0 to 1 UX initiatives"]
      }
    ],
    education: [
      {
        school: "State University",
        degree: "BFA Design",
        startDate: "2018-09",
        endDate: "2022-05",
        description: []
      }
    ],
    skills: ["Figma", "Prototyping", "User Research"]
  };
  openModal() {
    this.isOpen = true;
    this.upsellMessage = "";
  }
  closeModal() {
    this.isOpen = false;
    this.upsellMessage = "";
    this.closed.emit();
  }
  selectTemplate(templateId) {
    if (this.isLocked(templateId)) {
      this.showUpsell(templateId);
      return;
    }
    this.selectedTemplateId = templateId;
    this.templateSelected.emit(templateId);
    this.closeModal();
  }
  isLocked(templateId) {
    const template = this.templates.find((item) => item.id === templateId);
    if (!template) {
      return true;
    }
    return this.planRank(this.plan) < this.planRank(template.requiredPlan);
  }
  requiredPlanLabel(templateId) {
    const template = this.templates.find((item) => item.id === templateId);
    return template?.requiredPlan ?? "free";
  }
  showUpsell(templateId) {
    const requiredPlan = this.requiredPlanLabel(templateId);
    if (requiredPlan === "pro") {
      this.upsellMessage = "Upgrade to Pro to unlock this template.";
      return;
    }
    if (requiredPlan === "premium") {
      this.upsellMessage = "Upgrade to Premium to unlock this template.";
      return;
    }
    this.upsellMessage = "Upgrade your plan to unlock this template.";
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
  static \u0275fac = function ResumeTemplateModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumeTemplateModal)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumeTemplateModal, selectors: [["app-resume-template-modal"]], inputs: { plan: "plan", selectedTemplateId: "selectedTemplateId" }, outputs: { templateSelected: "templateSelected", closed: "closed" }, decls: 1, vars: 1, consts: [[1, "modal-overlay"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-subtitle"], ["aria-label", "Close modal", 1, "close-btn", 3, "click"], [1, "modal-body"], [1, "upsell-banner"], [1, "template-grid"], ["type", "button", 1, "template-card", 3, "locked", "selected"], ["type", "button", 1, "template-card", 3, "click"], [1, "template-preview"], [3, "resume", "templateId"], [1, "template-meta"], [1, "template-header"], [1, "template-name"], [1, "template-badge"], [1, "template-description"], [1, "template-lock"]], template: function ResumeTemplateModal_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ResumeTemplateModal_Conditional_0_Template, 15, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen ? 0 : -1);
    }
  }, dependencies: [CommonModule, ResumePreview, TitleCasePipe], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(9, 12, 18, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 20px 50px rgba(12, 18, 32, 0.2);\n  width: min(980px, 92vw);\n  max-height: 90vh;\n  overflow-y: auto;\n  padding-bottom: 12px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e4e7ee;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5c6473;\n  font-size: 0.95rem;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 6px;\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #1f2937;\n  background: #f3f4f6;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px 8px;\n}\n.upsell-banner[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  color: #9a3412;\n  padding: 12px 14px;\n  border-radius: 8px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.template-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n}\n.template-card[_ngcontent-%COMP%] {\n  text-align: left;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 12px;\n  background: #ffffff;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.template-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);\n  border-color: #c7cfe2;\n}\n.template-card.selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.18);\n}\n.template-card.locked[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  background: #f9fafb;\n}\n.template-preview[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 8px;\n  overflow: hidden;\n  max-height: 220px;\n}\n.template-preview[_ngcontent-%COMP%]   app-resume-preview[_ngcontent-%COMP%] {\n  display: block;\n  transform: scale(0.62);\n  transform-origin: top left;\n  width: 160%;\n}\n.template-meta[_ngcontent-%COMP%] {\n  padding: 12px 4px 4px;\n}\n.template-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.template-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.template-badge[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.template-badge.locked-badge[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.template-description[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n}\n.template-lock[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #b45309;\n}\n@media (max-width: 720px) {\n  .modal-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .template-preview[_ngcontent-%COMP%] {\n    max-height: 190px;\n  }\n  .template-preview[_ngcontent-%COMP%]   app-resume-preview[_ngcontent-%COMP%] {\n    transform: scale(0.55);\n    width: 180%;\n  }\n}\n/*# sourceMappingURL=resume-template-modal.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumeTemplateModal, [{
    type: Component,
    args: [{ selector: "app-resume-template-modal", standalone: true, imports: [CommonModule, ResumePreview], template: '@if (isOpen) {\r\n  <div class="modal-overlay" (click)="closeModal()">\r\n    <div class="modal-container" (click)="$event.stopPropagation()">\r\n      <div class="modal-header">\r\n        <div>\r\n          <h2>Choose a Resume Template</h2>\r\n          <p class="modal-subtitle">Pick a starting point before you begin.</p>\r\n        </div>\r\n        <button class="close-btn" (click)="closeModal()" aria-label="Close modal">x</button>\r\n      </div>\r\n\r\n      <div class="modal-body">\r\n        @if (upsellMessage) {\r\n          <div class="upsell-banner">{{ upsellMessage }}</div>\r\n        }\r\n\r\n        <div class="template-grid">\r\n          @for (template of templates; track template.id) {\r\n            <button\r\n              type="button"\r\n              class="template-card"\r\n              [class.locked]="isLocked(template.id)"\r\n              [class.selected]="selectedTemplateId === template.id"\r\n              (click)="selectTemplate(template.id)"\r\n            >\r\n              <div class="template-preview">\r\n                <app-resume-preview\r\n                  [resume]="demoResume"\r\n                  [templateId]="template.id"\r\n                ></app-resume-preview>\r\n              </div>\r\n              <div class="template-meta">\r\n                <div class="template-header">\r\n                  <div class="template-name">{{ template.name }}</div>\r\n                  <span\r\n                    class="template-badge"\r\n                    [class.locked-badge]="isLocked(template.id)"\r\n                  >\r\n                    {{ requiredPlanLabel(template.id) | titlecase }}\r\n                  </span>\r\n                </div>\r\n                <div class="template-description">{{ template.description }}</div>\r\n                @if (isLocked(template.id)) {\r\n                  <div class="template-lock">Upgrade to unlock</div>\r\n                }\r\n              </div>\r\n            </button>\r\n          }\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n', styles: ["/* src/app/pages/application/resumes/resume-template-modal/resume-template-modal.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(9, 12, 18, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n}\n.modal-container {\n  background-color: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 20px 50px rgba(12, 18, 32, 0.2);\n  width: min(980px, 92vw);\n  max-height: 90vh;\n  overflow-y: auto;\n  padding-bottom: 12px;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e4e7ee;\n}\n.modal-header h2 {\n  margin: 0 0 6px 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.modal-header .modal-subtitle {\n  margin: 0;\n  color: #5c6473;\n  font-size: 0.95rem;\n}\n.modal-header .close-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 6px;\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n}\n.modal-header .close-btn:hover {\n  color: #1f2937;\n  background: #f3f4f6;\n}\n.modal-body {\n  padding: 20px 24px 8px;\n}\n.upsell-banner {\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  color: #9a3412;\n  padding: 12px 14px;\n  border-radius: 8px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.template-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n}\n.template-card {\n  text-align: left;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 12px;\n  background: #ffffff;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.template-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);\n  border-color: #c7cfe2;\n}\n.template-card.selected {\n  border-color: #2563eb;\n  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.18);\n}\n.template-card.locked {\n  opacity: 0.7;\n  background: #f9fafb;\n}\n.template-preview {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 8px;\n  overflow: hidden;\n  max-height: 220px;\n}\n.template-preview app-resume-preview {\n  display: block;\n  transform: scale(0.62);\n  transform-origin: top left;\n  width: 160%;\n}\n.template-meta {\n  padding: 12px 4px 4px;\n}\n.template-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.template-name {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.template-badge {\n  background: #e0f2fe;\n  color: #0369a1;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.template-badge.locked-badge {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.template-description {\n  color: #4b5563;\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n}\n.template-lock {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #b45309;\n}\n@media (max-width: 720px) {\n  .modal-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .template-preview {\n    max-height: 190px;\n  }\n  .template-preview app-resume-preview {\n    transform: scale(0.55);\n    width: 180%;\n  }\n}\n/*# sourceMappingURL=resume-template-modal.css.map */\n"] }]
  }], null, { plan: [{
    type: Input
  }], selectedTemplateId: [{
    type: Input
  }], templateSelected: [{
    type: Output
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumeTemplateModal, { className: "ResumeTemplateModal", filePath: "src/app/pages/application/resumes/resume-template-modal/resume-template-modal.ts", lineNumber: 22 });
})();

export {
  ResumeTemplateModal
};
//# sourceMappingURL=chunk-CYOPCYOW.js.map
