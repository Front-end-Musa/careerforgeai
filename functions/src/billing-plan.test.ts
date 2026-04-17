import test from "node:test";
import assert from "node:assert/strict";
import {
  POLAR_PLAN_IDS,
  resolvePlanFromPolarProduct,
  resolvePlanFromProductName,
} from "./billing-plan";

test("resolves pro subscriptions from known Polar ids when product names are missing", () => {
  assert.equal(
    resolvePlanFromPolarProduct({
      productId: POLAR_PLAN_IDS.pro[0],
      productName: null,
    }),
    "pro",
  );
});

test("resolves premium subscriptions from known Polar ids", () => {
  assert.equal(
    resolvePlanFromPolarProduct({
      productId: POLAR_PLAN_IDS.premium[0],
    }),
    "premium",
  );
});

test("falls back to product names for legacy subscriptions", () => {
  assert.equal(resolvePlanFromProductName("CareerForge Pro Monthly"), "pro");
  assert.equal(resolvePlanFromProductName("CareerForge Premium Monthly"), "premium");
  assert.equal(resolvePlanFromProductName("CareerForge Starter"), "free");
});

test("prefers known ids over ambiguous product names", () => {
  assert.equal(
    resolvePlanFromPolarProduct({
      productId: POLAR_PLAN_IDS.premium[0],
      productName: "Legacy Pro Plan",
    }),
    "premium",
  );
});
