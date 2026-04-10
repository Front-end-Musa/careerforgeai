import './polyfills.server.mjs';
import {
  __spreadValues
} from "./chunk-TB3YAHZW.mjs";

// src/app/pages/landing/pricing-plans/checkouts/checkouts.routes.ts
var CHECKOUT_ROUTES = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-73EH7V3P.mjs").then((c) => c.Checkouts),
    children: [
      {
        path: "success",
        loadComponent: () => import("./chunk-KUPGWBYG.mjs").then((c) => c.Success),
        data: {
          seo: {
            title: "Success | ResumeCrafts AI",
            description: "Your payment was successful! Thank you for using ResumeCrafts AI.",
            robots: "noindex, nofollow",
            canonicalPath: "/checkouts/success",
            ogType: "website"
          }
        }
      },
      {
        path: "failure",
        loadComponent: () => import("./chunk-N7GUJ3ZF.mjs").then((c) => c.Failure),
        data: {
          seo: {
            title: "Failure | ResumeCrafts AI",
            description: "Your payment was unsuccessful! Please try again.",
            robots: "noindex, nofollow",
            canonicalPath: "/checkouts/failure",
            ogType: "website"
          }
        }
      }
    ]
  }, true ? { \u0275entryName: "src/app/pages/landing/pricing-plans/checkouts/checkouts.ts" } : {})
];
export {
  CHECKOUT_ROUTES
};
//# sourceMappingURL=chunk-WQE7OUCD.mjs.map
