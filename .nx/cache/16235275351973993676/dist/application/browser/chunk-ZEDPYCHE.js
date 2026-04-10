import {
  __spreadValues
} from "./chunk-46DXP6YY.js";

// src/app/pages/landing/pricing-plans/checkouts/checkouts.routes.ts
var CHECKOUT_ROUTES = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-2Z5BDO4U.js").then((c) => c.Checkouts),
    children: [
      {
        path: "success",
        loadComponent: () => import("./chunk-4H2DXOTA.js").then((c) => c.Success),
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
        loadComponent: () => import("./chunk-PCAPJ4XX.js").then((c) => c.Failure),
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
  }, false ? { \u0275entryName: "src/app/pages/landing/pricing-plans/checkouts/checkouts.ts" } : {})
];
export {
  CHECKOUT_ROUTES
};
//# sourceMappingURL=chunk-ZEDPYCHE.js.map
