export type PlanTier = "free" | "pro" | "premium";

export const POLAR_PLAN_IDS: Record<Exclude<PlanTier, "free">, string[]> = {
  pro: ["ac58d79e-1d84-4322-bef6-05147be57cc7"],
  premium: ["7ad22fce-484d-472c-ad6e-f08e09e3e264"],
};

type PlanResolutionInput = {
  productId?: unknown;
  productName?: unknown;
};

/**
 * Resolves the app plan from Polar product metadata.
 * @param {PlanResolutionInput} input Polar product identifiers.
 * @return {PlanTier} Resolved plan tier.
 */
export function resolvePlanFromPolarProduct(input: PlanResolutionInput): PlanTier {
  const planById = resolvePlanFromProductId(input.productId);
  if (planById !== "free") {
    return planById;
  }

  return resolvePlanFromProductName(input.productName);
}

/**
 * Resolves the app plan from a Polar product or variant id.
 * @param {unknown} productId Polar product or variant id.
 * @return {PlanTier} Resolved plan tier.
 */
export function resolvePlanFromProductId(productId: unknown): PlanTier {
  const normalized = typeof productId === "string" ? productId.trim() : "";
  if (!normalized) {
    return "free";
  }

  if (POLAR_PLAN_IDS.premium.includes(normalized)) {
    return "premium";
  }

  if (POLAR_PLAN_IDS.pro.includes(normalized)) {
    return "pro";
  }

  return "free";
}

/**
 * Resolves the app plan from a Polar product display name.
 * @param {unknown} productName Polar product display name.
 * @return {PlanTier} Resolved plan tier.
 */
export function resolvePlanFromProductName(productName: unknown): PlanTier {
  const normalized = typeof productName === "string" ? productName.toLowerCase() : "";
  if (normalized.includes("premium")) {
    return "premium";
  }

  if (normalized.includes("pro")) {
    return "pro";
  }

  return "free";
}
