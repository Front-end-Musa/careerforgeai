import {defineSecret} from "firebase-functions/params";
import OpenAI from "openai";
import {onCall, onRequest, HttpsError} from "firebase-functions/v2/https";
import {logger} from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";
import {Polar} from "@polar-sh/sdk";
import {validateEvent, WebhookVerificationError} from "@polar-sh/sdk/webhooks";

const openaiSecret = defineSecret("OPENAI_API_KEY");

const polarToken = defineSecret("POLAR_ACCESS_TOKEN");
const polarWebhookSecret = defineSecret("POLAR_WEBHOOK_SECRET");
initializeApp();

type PlanTier = "free" | "pro" | "premium";
type SubscriptionStatus = "none" | "active" | "past_due" | "cancelled";

type PlanEntitlements = {
  resumeGenerationsPerPeriod: number;
  coverLettersPerPeriod: number;
  canUseJobTracker: boolean;
  canStoreGeneratedResume: boolean;
  canDownloadResume: boolean;
};

type AppUserDoc = {
  name?: string;
  email?: string;
  plan?: PlanTier;
  entitlements?: PlanEntitlements;
  providerCustomerId?: string;
  providerSubscriptionId?: string;
  providerVariantId?: string;
  subscriptionStatus?: SubscriptionStatus;
  currentPeriodEnd?: Date | null;
  entitlementsUpdatedAt?: number | null;
  resumeGenerationsUsed?: number;
  coverLettersUsed?: number;
  usagePeriodKey?: string | null;
  usagePeriodStartedAt?: Date | null;
  usagePeriodEndsAt?: Date | null;
  fullResumeGenerationsUsed?: number;
};

type UsageQuotaKind = "resume" | "coverLetter";

type UsagePeriodWindow = {
  key: string;
  startedAt: Date;
  endsAt: Date;
};

type ReservedUsage = {
  periodKey: string;
  kind: UsageQuotaKind;
};

type TailorExperienceEntry = {
  company?: string;
  role?: string;
  startDate?: string;
  endDate?: string;
  description?: string[];
};

type ResumeGenerationMode = "full" | "summary" | "experience" | "education";

type ResumeEducationEntry = {
  school?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  description?: string[];
};

type ResumeGenerationDraft = {
  personalInfo?: {
    fullName?: string;
    jobTitle?: string;
  };
  contact?: {
    email?: string;
    phone?: string;
    location?: string;
  };
  summary?: string;
  skills?: string[];
  experience?: TailorExperienceEntry[];
  education?: ResumeEducationEntry[];
  meta?: {
    createdAt?: string;
    updatedAt?: string;
    source?: "ai" | "manual";
    version?: number;
  };
};

const PLAN_ENTITLEMENTS: Record<PlanTier, PlanEntitlements> = {
  free: {
    resumeGenerationsPerPeriod: 1,
    coverLettersPerPeriod: 3,
    canUseJobTracker: false,
    canStoreGeneratedResume: false,
    canDownloadResume: false,
  },
  pro: {
    resumeGenerationsPerPeriod: 5,
    coverLettersPerPeriod: 20,
    canUseJobTracker: false,
    canStoreGeneratedResume: true,
    canDownloadResume: true,
  },
  premium: {
    resumeGenerationsPerPeriod: 10,
    coverLettersPerPeriod: 35,
    canUseJobTracker: true,
    canStoreGeneratedResume: true,
    canDownloadResume: true,
  },
};

type ResumeGenerationRequest = {
  mode?: ResumeGenerationMode;
  resume?: ResumeGenerationDraft;
  targetIndex?: number;
};

type ResumeGenerationResult =
  | {
      mode: "full";
      summary: string;
      skills: string[];
      experienceDescriptions: string[][];
      educationDescriptions: string[][];
      meta: {
        source: "ai";
        version: number;
        updatedAt: string;
      };
    }
  | {
      mode: "summary";
      summary: string;
    }
  | {
      mode: "experience";
      targetIndex: number;
      description: string[];
    }
  | {
      mode: "education";
      targetIndex: number;
      description: string[];
    };

type TailorResumeInput = {
  summary?: string;
  skills?: string[];
  experience?: TailorExperienceEntry[];
  meta?: {
    createdAt?: string;
    updatedAt?: string;
    source?: "ai" | "manual";
    version?: number;
    tailoring?: {
      source?: "job-description";
      companyName?: string;
      position?: string;
      tailoredAt?: string;
    };
  };
  [key: string]: unknown;
};

/**
 * Returns a trimmed string or throws when the value is missing.
 * @param {unknown} value Candidate input value.
 * @param {string} fieldName Field name used in the error message.
 * @return {string} Trimmed string value.
 */
function requireTrimmedString(value: unknown, fieldName: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new HttpsError("invalid-argument", `${fieldName} is required.`);
  }

  return value.trim();
}

/**
 * Normalizes unknown values into a trimmed string.
 * @param {unknown} value Candidate input value.
 * @return {string} Trimmed string or an empty string.
 */
function getStringOrEmpty(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Normalizes unknown values into an array of trimmed strings.
 * @param {unknown} value Candidate input value.
 * @return {string[]} Filtered string array.
 */
function getStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

/**
 * Normalizes resume experience entries from a callable payload.
 * @param {unknown} value Candidate experience payload.
 * @return {TailorExperienceEntry[]} Normalized experience entries.
 */
function normalizeResumeExperience(value: unknown): TailorExperienceEntry[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((entry) => {
    const item = typeof entry === "object" && entry !== null ? entry : {};
    return {
      company: getStringOrEmpty((item as TailorExperienceEntry).company),
      role: getStringOrEmpty((item as TailorExperienceEntry).role),
      startDate: getStringOrEmpty((item as TailorExperienceEntry).startDate),
      endDate: getStringOrEmpty((item as TailorExperienceEntry).endDate),
      description: getStringArray((item as TailorExperienceEntry).description),
    };
  });
}

/**
 * Normalizes resume education entries from a callable payload.
 * @param {unknown} value Candidate education payload.
 * @return {ResumeEducationEntry[]} Normalized education entries.
 */
function normalizeResumeEducation(value: unknown): ResumeEducationEntry[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((entry) => {
    const item = typeof entry === "object" && entry !== null ? entry : {};
    return {
      school: getStringOrEmpty((item as ResumeEducationEntry).school),
      degree: getStringOrEmpty((item as ResumeEducationEntry).degree),
      startDate: getStringOrEmpty((item as ResumeEducationEntry).startDate),
      endDate: getStringOrEmpty((item as ResumeEducationEntry).endDate),
      description: getStringArray((item as ResumeEducationEntry).description),
    };
  });
}

/**
 * Normalizes the draft payload used for AI resume generation.
 * @param {unknown} value Candidate resume payload.
 * @return {ResumeGenerationDraft} Normalized resume generation draft.
 */
function normalizeResumeGenerationDraft(value: unknown): ResumeGenerationDraft {
  const resume = typeof value === "object" && value !== null ? value : {};
  const personalInfo =
    typeof (resume as ResumeGenerationDraft).personalInfo === "object" &&
    (resume as ResumeGenerationDraft).personalInfo !== null ?
      ((resume as ResumeGenerationDraft).personalInfo ?? {}) :
      {};
  const contact =
    typeof (resume as ResumeGenerationDraft).contact === "object" &&
    (resume as ResumeGenerationDraft).contact !== null ?
      ((resume as ResumeGenerationDraft).contact ?? {}) :
      {};
  const meta =
    typeof (resume as ResumeGenerationDraft).meta === "object" &&
    (resume as ResumeGenerationDraft).meta !== null ?
      ((resume as ResumeGenerationDraft).meta ?? {}) :
      {};

  return {
    personalInfo: {
      fullName: getStringOrEmpty(personalInfo.fullName),
      jobTitle: getStringOrEmpty(personalInfo.jobTitle),
    },
    contact: {
      email: getStringOrEmpty(contact.email),
      phone: getStringOrEmpty(contact.phone),
      location: getStringOrEmpty(contact.location),
    },
    summary: getStringOrEmpty((resume as ResumeGenerationDraft).summary),
    skills: getStringArray((resume as ResumeGenerationDraft).skills),
    experience: normalizeResumeExperience((resume as ResumeGenerationDraft).experience),
    education: normalizeResumeEducation((resume as ResumeGenerationDraft).education),
    meta: {
      createdAt: getStringOrEmpty(meta.createdAt),
      updatedAt: getStringOrEmpty(meta.updatedAt),
      source: meta.source === "manual" ? "manual" : "ai",
      version: typeof meta.version === "number" ? meta.version : 1,
    },
  };
}

/**
 * Validates and normalizes a callable request for resume generation.
 * @param {unknown} data Raw callable payload.
 * @return {Object} Validated generation request.
 */
function validateResumeGenerationRequest(data: unknown): {
  mode: ResumeGenerationMode;
  resume: ResumeGenerationDraft;
  targetIndex?: number;
} {
  const payload = typeof data === "object" && data !== null ? data as ResumeGenerationRequest : {};
  const mode = payload.mode;

  if (
    mode !== "full" &&
    mode !== "summary" &&
    mode !== "experience" &&
    mode !== "education"
  ) {
    throw new HttpsError("invalid-argument", "A valid generation mode is required.");
  }

  const resume = normalizeResumeGenerationDraft(payload.resume);

  if (!resume.personalInfo?.fullName || !resume.personalInfo.jobTitle) {
    throw new HttpsError(
      "failed-precondition",
      "Add your full name and target job title before generating resume content.",
    );
  }

  if (mode === "full") {
    requireTrimmedString(resume.contact?.email, "contact.email");
    requireTrimmedString(resume.contact?.location, "contact.location");
    const hasExperienceSeed = (resume.experience ?? []).some(
      (entry) => Boolean(entry.company && entry.role),
    );
    const hasEducationSeed = (resume.education ?? []).some(
      (entry) => Boolean(entry.school && entry.degree),
    );

    if (!resume.skills?.length && !hasExperienceSeed && !hasEducationSeed) {
      throw new HttpsError(
        "failed-precondition",
        "Add skills, work experience, or education before generating a full resume.",
      );
    }
  }

  if (mode === "experience" || mode === "education") {
    if (
      typeof payload.targetIndex !== "number" ||
      !Number.isInteger(payload.targetIndex) ||
      payload.targetIndex < 0
    ) {
      throw new HttpsError("invalid-argument", "targetIndex must be a valid entry index.");
    }
  }

  return {
    mode,
    resume,
    targetIndex: payload.targetIndex,
  };
}

/**
 * Creates a Polar SDK client using the configured secret token.
 * @return {Polar} Polar SDK client.
 */
function getPolarClient(): Polar {
  return new Polar({
    accessToken: polarToken.value(),
  });
}

/**
 * Returns true when an unknown error object has the given API status code.
 * @param {unknown} error Unknown thrown value.
 * @param {number} statusCode Expected API status code.
 * @return {boolean} Whether the error matches the provided status code.
 */
function isApiErrorWithStatus(error: unknown, statusCode: number): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "statusCode" in error &&
    error.statusCode === statusCode
  );
}

/**
 * Normalizes a date-like value into a Date instance or null.
 * @param {unknown} value Potential date value from API payloads.
 * @return {Date|null} Parsed date or null.
 */
function toNullableDate(value: unknown): Date | null {
  if (!value) {
    return null;
  }

  if (value instanceof Date) {
    return value;
  }

  if (typeof value === "string" || typeof value === "number") {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  return null;
}

/**
 * Maps Polar subscription status values to app-level status values.
 * @param {unknown} status Raw Polar status.
 * @return {SubscriptionStatus} Normalized app subscription status.
 */
function normalizeSubscriptionStatus(status: unknown): SubscriptionStatus {
  const normalized = typeof status === "string" ? status.toLowerCase() : "";
  if (normalized === "active" || normalized === "trialing") {
    return "active";
  }
  if (normalized === "past_due" || normalized === "unpaid") {
    return "past_due";
  }
  if (
    normalized === "canceled" ||
    normalized === "cancelled" ||
    normalized === "incomplete" ||
    normalized === "incomplete_expired" ||
    normalized === "revoked"
  ) {
    return "cancelled";
  }
  return "none";
}

/**
 * Derives plan tier from a product name.
 * @param {unknown} productName Product display name.
 * @return {PlanTier} Resolved plan tier.
 */
function resolvePlanFromProduct(productName: unknown): PlanTier {
  const normalized = typeof productName === "string" ? productName.toLowerCase() : "";
  if (normalized.includes("premium")) {
    return "premium";
  }
  if (normalized.includes("pro")) {
    return "pro";
  }
  return "free";
}

/**
 * Returns entitlements for the provided plan.
 * @param {PlanTier} plan Current plan tier.
 * @return {PlanEntitlements} Plan entitlements.
 */
function getPlanEntitlements(plan: PlanTier): PlanEntitlements {
  return PLAN_ENTITLEMENTS[plan];
}

/**
 * Normalizes a date-like value into a Date instance, or null when unavailable.
 * @param {unknown} value Candidate timestamp value.
 * @return {Date|null} Parsed date or null.
 */
function normalizeStoredDate(value: unknown): Date | null {
  if (!value) {
    return null;
  }

  if (value instanceof Date) {
    return value;
  }

  if (
    typeof value === "object" &&
    value !== null &&
    "toDate" in value &&
    typeof (value as { toDate?: () => Date }).toDate === "function"
  ) {
    return (value as { toDate: () => Date }).toDate();
  }

  return toNullableDate(value);
}

/**
 * Returns the usage period for the current user entitlement state.
 * @param {AppUserDoc} user Current user document.
 * @return {UsagePeriodWindow} Current usage period window.
 */
function getUsagePeriodWindow(user: AppUserDoc): UsagePeriodWindow {
  const plan = user.plan ?? "free";

  if (plan === "free") {
    const now = new Date();
    const startedAt = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    const endsAt = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
    const key = `free:${startedAt.toISOString().slice(0, 7)}`;

    return {key, startedAt, endsAt};
  }

  const currentPeriodEnd = normalizeStoredDate(user.currentPeriodEnd);
  if (!currentPeriodEnd) {
    const now = new Date();
    const startedAt = now;
    const endsAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    const key = `${plan}:${endsAt.toISOString()}`;

    return {key, startedAt, endsAt};
  }

  const storedPeriodKey = typeof user.usagePeriodKey === "string" ? user.usagePeriodKey : null;
  const storedStartedAt = normalizeStoredDate(user.usagePeriodStartedAt);
  const fallbackStartedAt = storedStartedAt ?? new Date();
  const key = `${plan}:${currentPeriodEnd.toISOString()}`;

  return {
    key,
    startedAt: storedPeriodKey === key ? fallbackStartedAt : new Date(),
    endsAt: currentPeriodEnd,
  };
}

/**
 * Returns true when the current stored usage period is stale.
 * @param {AppUserDoc} user Current user document.
 * @param {UsagePeriodWindow} nextWindow Expected active usage window.
 * @return {boolean} Whether counters should reset.
 */
function shouldResetUsageWindow(user: AppUserDoc, nextWindow: UsagePeriodWindow): boolean {
  return user.usagePeriodKey !== nextWindow.key;
}

/**
 * Returns the current usage count for the requested quota kind.
 * @param {AppUserDoc} user Current user document.
 * @param {UsageQuotaKind} kind Quota kind.
 * @param {boolean} resetUsage Whether the current window is stale.
 * @return {number} Current usage count.
 */
function getUsageCount(user: AppUserDoc, kind: UsageQuotaKind, resetUsage: boolean): number {
  if (resetUsage) {
    return 0;
  }

  if (kind === "resume") {
    return typeof user.resumeGenerationsUsed === "number" ?
      user.resumeGenerationsUsed :
      (typeof user.fullResumeGenerationsUsed === "number" ? user.fullResumeGenerationsUsed : 0);
  }

  return typeof user.coverLettersUsed === "number" ? user.coverLettersUsed : 0;
}

/**
 * Returns the error message for a quota kind when the user is at limit.
 * @param {UsageQuotaKind} kind Quota kind.
 * @return {string} User-facing message.
 */
function getQuotaExceededMessage(kind: UsageQuotaKind): string {
  if (kind === "resume") {
    return "You reached your resume generation limit for this period. Upgrade to continue.";
  }

  return "You reached your cover letter generation limit for this period. Upgrade to continue.";
}

/**
 * Reserves one usage slot for a quota-gated action.
 * @param {string} uid Authenticated Firebase user id.
 * @param {UsageQuotaKind} kind Quota kind.
 * @return {Promise<ReservedUsage>} Reserved usage metadata.
 */
async function reserveQuotaUsage(uid: string, kind: UsageQuotaKind): Promise<ReservedUsage> {
  const db = getFirestore();
  const userRef = db.collection("users").doc(uid);

  return db.runTransaction(async (transaction) => {
    const userSnapshot = await transaction.get(userRef);
    if (!userSnapshot.exists) {
      throw new HttpsError("failed-precondition", "User profile does not exist.");
    }

    const user = userSnapshot.data() as AppUserDoc;
    const plan = user.plan ?? "free";
    const entitlements = getPlanEntitlements(plan);
    const usageWindow = getUsagePeriodWindow(user);
    const resetUsage = shouldResetUsageWindow(user, usageWindow);
    const resumeGenerationsUsed = getUsageCount(user, "resume", resetUsage);
    const coverLettersUsed = getUsageCount(user, "coverLetter", resetUsage);

    if (
      kind === "resume" &&
      resumeGenerationsUsed >= entitlements.resumeGenerationsPerPeriod
    ) {
      throw new HttpsError("resource-exhausted", getQuotaExceededMessage(kind));
    }

    if (
      kind === "coverLetter" &&
      coverLettersUsed >= entitlements.coverLettersPerPeriod
    ) {
      throw new HttpsError("resource-exhausted", getQuotaExceededMessage(kind));
    }

    transaction.set(
      userRef,
      {
        entitlements,
        usagePeriodKey: usageWindow.key,
        usagePeriodStartedAt: usageWindow.startedAt,
        usagePeriodEndsAt: usageWindow.endsAt,
        resumeGenerationsUsed: kind === "resume" ? resumeGenerationsUsed + 1 : resumeGenerationsUsed,
        coverLettersUsed: kind === "coverLetter" ? coverLettersUsed + 1 : coverLettersUsed,
        fullResumeGenerationsUsed: kind === "resume" ? resumeGenerationsUsed + 1 : resumeGenerationsUsed,
      },
      {merge: true},
    );

    return {
      periodKey: usageWindow.key,
      kind,
    };
  });
}

/**
 * Releases a reserved usage slot after a failed AI action.
 * @param {string} uid Authenticated Firebase user id.
 * @param {ReservedUsage} reservedUsage Reservation metadata.
 * @return {Promise<void>} Resolves when the quota slot is released.
 */
async function releaseQuotaUsage(uid: string, reservedUsage: ReservedUsage): Promise<void> {
  const db = getFirestore();
  const userRef = db.collection("users").doc(uid);

  await db.runTransaction(async (transaction) => {
    const userSnapshot = await transaction.get(userRef);
    if (!userSnapshot.exists) {
      return;
    }

    const user = userSnapshot.data() as AppUserDoc;
    if (user.usagePeriodKey !== reservedUsage.periodKey) {
      return;
    }

    const resumeGenerationsUsed =
      typeof user.resumeGenerationsUsed === "number" ? user.resumeGenerationsUsed : 0;
    const coverLettersUsed =
      typeof user.coverLettersUsed === "number" ? user.coverLettersUsed : 0;

    transaction.set(
      userRef,
      {
        resumeGenerationsUsed:
          reservedUsage.kind === "resume" ? Math.max(resumeGenerationsUsed - 1, 0) : resumeGenerationsUsed,
        coverLettersUsed:
          reservedUsage.kind === "coverLetter" ? Math.max(coverLettersUsed - 1, 0) : coverLettersUsed,
        fullResumeGenerationsUsed:
          reservedUsage.kind === "resume" ? Math.max(resumeGenerationsUsed - 1, 0) : resumeGenerationsUsed,
      },
      {merge: true},
    );
  });
}

/**
 * Syncs the active usage window and entitlements without consuming quota.
 * @param {string} uid Authenticated Firebase user id.
 * @return {Promise<AppUserDoc>} Updated user document.
 */
async function syncUsageWindowState(uid: string): Promise<AppUserDoc> {
  const db = getFirestore();
  const userRef = db.collection("users").doc(uid);

  return db.runTransaction(async (transaction) => {
    const userSnapshot = await transaction.get(userRef);
    if (!userSnapshot.exists) {
      throw new HttpsError("failed-precondition", "User profile does not exist.");
    }

    const user = userSnapshot.data() as AppUserDoc;
    const plan = user.plan ?? "free";
    const entitlements = getPlanEntitlements(plan);
    const usageWindow = getUsagePeriodWindow(user);
    const resetUsage = shouldResetUsageWindow(user, usageWindow);
    const resumeGenerationsUsed = getUsageCount(user, "resume", resetUsage);
    const coverLettersUsed = getUsageCount(user, "coverLetter", resetUsage);

    const nextUser: AppUserDoc = {
      ...user,
      entitlements,
      usagePeriodKey: usageWindow.key,
      usagePeriodStartedAt: usageWindow.startedAt,
      usagePeriodEndsAt: usageWindow.endsAt,
      resumeGenerationsUsed,
      coverLettersUsed,
      fullResumeGenerationsUsed: resumeGenerationsUsed,
    };

    transaction.set(userRef, nextUser, {merge: true});
    return nextUser;
  });
}

/**
 * Throws when the user cannot store AI-generated resumes.
 * @param {AppUserDoc} user Current user document.
 * @return {void}
 */
function assertGeneratedResumeStorageAllowed(user: AppUserDoc) {
  const plan = user.plan ?? "free";
  const entitlements = user.entitlements ?? getPlanEntitlements(plan);
  if (!entitlements.canStoreGeneratedResume) {
    throw new HttpsError(
      "permission-denied",
      "Upgrade to save AI-generated resumes to your account.",
    );
  }
}

/**
 * Throws when the user cannot download resumes.
 * @param {AppUserDoc} user Current user document.
 * @return {void}
 */
function assertResumeDownloadAllowed(user: AppUserDoc) {
  const plan = user.plan ?? "free";
  const entitlements = user.entitlements ?? getPlanEntitlements(plan);
  if (!entitlements.canDownloadResume) {
    throw new HttpsError(
      "permission-denied",
      "Upgrade to download resumes on your current plan.",
    );
  }
}

/**
 * Ensures a Polar customer exists and is linked to the user document.
 * Idempotent by checking providerCustomerId and external customer ID first.
 * @param {string} uid Firebase auth UID used as external customer ID.
 * @param {Polar} polar Polar SDK client.
 * @return {Promise<{customerId: string}>} Linked Polar customer id.
 */
async function ensurePolarCustomerForUid(
  uid: string,
  polar: Polar,
): Promise<{ customerId: string }> {
  const db = getFirestore();
  const userRef = db.collection("users").doc(uid);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    throw new HttpsError("failed-precondition", "User profile does not exist.");
  }

  const user = userSnapshot.data() as AppUserDoc;
  if (user.providerCustomerId?.trim()) {
    return {customerId: user.providerCustomerId};
  }

  const email = `${user.email ?? ""}`.trim().toLowerCase();
  if (!email) {
    throw new HttpsError(
      "failed-precondition",
      "Your billing profile is not ready yet. Please add a valid email and try again.",
    );
  }

  const name = `${user.name ?? ""}`.trim() || null;
  let customer: { id: string };

  try {
    customer = await polar.customers.getExternal({externalId: uid});
  } catch (error) {
    if (!isApiErrorWithStatus(error, 404)) {
      throw error;
    }

    customer = await polar.customers.create({
      externalId: uid,
      email,
      name,
    });
  }

  await userRef.set(
    {
      providerCustomerId: customer.id,
      entitlementsUpdatedAt: Date.now(),
    },
    {merge: true},
  );

  return {customerId: customer.id};
}

/**
 * Applies subscription-derived entitlement state to a user document.
 * @param {string} uid Firebase auth UID.
 * @param {unknown} data Subscription payload from webhook.
 * @return {Promise<void>} Resolves when Firestore state is updated.
 */
async function applySubscriptionState(uid: string, data: unknown) {
  const subscription = (data ?? {}) as {
    id?: string;
    status?: string;
    currentPeriodEnd?: Date | string | null;
    endsAt?: Date | string | null;
    customer?: { id?: string; externalId?: string | null };
    product?: { id?: string; name?: string | null };
    productId?: string;
  };

  const db = getFirestore();
  const now = Date.now();
  const status = normalizeSubscriptionStatus(subscription.status);
  const plan = resolvePlanFromProduct(subscription.product?.name);
  const entitlements = getPlanEntitlements(plan);
  const currentPeriodEnd =
    toNullableDate(subscription.currentPeriodEnd) ?? toNullableDate(subscription.endsAt);

  await db
    .collection("users")
    .doc(uid)
    .set(
      {
        plan,
        entitlements,
        subscriptionStatus: status,
        providerCustomerId: subscription.customer?.id ?? "",
        providerSubscriptionId: subscription.id ?? "",
        providerVariantId: subscription.productId ?? subscription.product?.id ?? "",
        currentPeriodEnd,
        entitlementsUpdatedAt: now,
      },
      {merge: true},
    );
}

/**
 * Applies customer linkage fields to a user document.
 * @param {string} uid Firebase auth UID.
 * @param {unknown} data Customer payload from webhook.
 * @return {Promise<void>} Resolves when Firestore state is updated.
 */
async function applyCustomerState(uid: string, data: unknown) {
  const customer = (data ?? {}) as {
    id?: string;
    externalId?: string | null;
  };

  const db = getFirestore();
  await db
    .collection("users")
    .doc(uid)
    .set(
      {
        providerCustomerId: customer.id ?? "",
        entitlementsUpdatedAt: Date.now(),
      },
      {merge: true},
    );
}

/**
 * Clears billing linkage and resets plan state for a deleted customer.
 * @param {string} uid Firebase auth UID.
 * @return {Promise<void>} Resolves when Firestore state is reset.
 */
async function clearCustomerState(uid: string) {
  const db = getFirestore();
  await db.collection("users").doc(uid).set(
    {
      plan: "free",
      entitlements: getPlanEntitlements("free"),
      subscriptionStatus: "none",
      providerCustomerId: "",
      providerSubscriptionId: "",
      providerVariantId: "",
      currentPeriodEnd: null,
      entitlementsUpdatedAt: Date.now(),
    },
    {merge: true},
  );
}

export const polarWebhook = onRequest(
  {secrets: [polarWebhookSecret], invoker: "public"},
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed. Only POST requests are accepted.");
      return;
    }

    try {
      const webhookSecret = polarWebhookSecret.value();
      const rawBody = req.rawBody;

      if (!rawBody || rawBody.length === 0) {
        logger.warn("polarWebhook missing raw body");
        res.status(400).send("Missing request body");
        return;
      }

      const signatureHeaders: Record<string, string> = {};
      for (const [headerName, headerValue] of Object.entries(req.headers)) {
        if (typeof headerValue === "string") {
          signatureHeaders[headerName] = headerValue;
        } else if (Array.isArray(headerValue) && headerValue.length > 0) {
          signatureHeaders[headerName] = headerValue[0];
        }
      }

      const hasRequiredSignatureHeaders = Boolean(
        signatureHeaders["webhook-id"] &&
        signatureHeaders["webhook-signature"] &&
        signatureHeaders["webhook-timestamp"],
      );
      if (!hasRequiredSignatureHeaders) {
        logger.warn("polarWebhook missing signature headers", {
          hasWebhookId: Boolean(signatureHeaders["webhook-id"]),
          hasWebhookSignature: Boolean(signatureHeaders["webhook-signature"]),
          hasWebhookTimestamp: Boolean(signatureHeaders["webhook-timestamp"]),
        });
        res.status(400).send("Missing webhook signature headers");
        return;
      }

      const event = validateEvent(rawBody, signatureHeaders, webhookSecret) as {
        type: string;
        data?: {
          id?: string;
          externalId?: string | null;
          customer?: { externalId?: string | null };
        };
      };

      logger.info("polarWebhook received", {
        type: event.type,
        id: event.data?.id ?? null,
      });

      const userExternalId = event.data?.externalId ?? event.data?.customer?.externalId ?? null;
      if (!userExternalId) {
        logger.info("polarWebhook skipped: no external customer id", {type: event.type});
        res.status(200).send("ok");
        return;
      }

      if (
        event.type === "customer.created" ||
        event.type === "customer.updated" ||
        event.type === "customer.state_changed"
      ) {
        await applyCustomerState(userExternalId, event.data);
      } else if (event.type === "customer.deleted") {
        await clearCustomerState(userExternalId);
      } else if (event.type.startsWith("subscription.")) {
        await applySubscriptionState(userExternalId, event.data);
      } else {
        logger.info("polarWebhook ignored event type", {type: event.type});
      }

      res.status(200).send("ok");
    } catch (error) {
      if (error instanceof WebhookVerificationError) {
        logger.warn("polarWebhook signature verification failed", {
          message: error.message,
        });
        res.status(403).send("Invalid signature");
        return;
      }

      logger.error("polarWebhook processing failed", error);
      res.status(500).send("Webhook handling failed");
    }
  },
);

export const ensurePolarCustomer = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) {
      throw new HttpsError("unauthenticated", "User must be logged in");
    }

    try {
      const polar = getPolarClient();
      const result = await ensurePolarCustomerForUid(uid, polar);
      return {
        providerCustomerId: result.customerId,
        entitlementsUpdatedAt: Date.now(),
      };
    } catch (error) {
      logger.error("ensurePolarCustomer failed", error);
      if (error instanceof HttpsError) {
        throw error;
      }
      throw new HttpsError("internal", "Unable to prepare customer billing profile.");
    }
  },
);

export const createCheckout = onCall({secrets: [polarToken], invoker: "public"}, async (req) => {
  const polar = getPolarClient();
  const uid = req.auth?.uid;
  const priceId = req.data.priceId;

  logger.info("createCheckout invoked", {
    hasAuth: Boolean(uid),
    hasPriceId: Boolean(priceId),
    projectId: process.env.GCLOUD_PROJECT ?? null,
    functionTarget: process.env.FUNCTION_TARGET ?? null,
  });

  if (!uid) {
    throw new HttpsError("unauthenticated", "User must be logged in");
  }

  if (!priceId) {
    throw new HttpsError("invalid-argument", "Price ID is required");
  }

  try {
    await ensurePolarCustomerForUid(uid, polar);
    const checkout = await polar.checkouts.create({
      products: [priceId],
      successUrl: "https://resume-crafts.com/checkouts/success",
      returnUrl: "https://resume-crafts.com/#pricing",
      externalCustomerId: uid,
    });

    logger.info("createCheckout succeeded", {
      uid,
      hasCheckoutUrl: Boolean(checkout.url),
    });
    return checkout.url;
  } catch (error) {
    logger.error("createCheckout failed", error);

    if (error instanceof HttpsError) {
      throw error;
    }

    if (isApiErrorWithStatus(error, 422)) {
      throw new HttpsError(
        "invalid-argument",
        "Checkout configuration is invalid. Verify product IDs and billing settings.",
      );
    }

    throw new HttpsError("internal", "Unable to create checkout session.");
  }
});

export const createPortalSession = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req) => {
    const polar = getPolarClient();
    const uid = req.auth?.uid;

    logger.info("createPortalSession invoked", {
      hasAuth: Boolean(uid),
      projectId: process.env.GCLOUD_PROJECT ?? null,
      functionTarget: process.env.FUNCTION_TARGET ?? null,
    });

    if (!uid) {
      throw new HttpsError("unauthenticated", "User must be logged in");
    }

    try {
      await ensurePolarCustomerForUid(uid, polar);

      const polarSession = await polar.customerSessions.create({
        externalCustomerId: uid,
        returnUrl: "https://resume-crafts.com/application/settings",
      });

      if (!polarSession.customerPortalUrl) {
        throw new HttpsError("internal", "Unable to create portal session.");
      }

      logger.info("createPortalSession succeeded", {uid});
      return polarSession.customerPortalUrl;
    } catch (error) {
      logger.error("createPortalSession failed", error);

      if (error instanceof HttpsError) {
        throw error;
      }

      if (isApiErrorWithStatus(error, 422)) {
        throw new HttpsError(
          "invalid-argument",
          "Portal configuration is invalid. Verify product IDs and billing settings.",
        );
      }

      throw new HttpsError("internal", "Unable to create portal session.");
    }
  },
);

export const deletePolarCustomer = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) {
      throw new HttpsError("unauthenticated", "Authentication is required.");
    }

    const polar = getPolarClient();
    try {
      const customerState = await polar.customers.getStateExternal({
        externalId: uid,
      });

      if (customerState.id) {
        await polar.customers.delete({
          id: customerState.id,
        });

        logger.info("deletePolarCustomer succeeded", {
          uid,
          customerId: customerState.id,
        });
      } else {
        logger.info("deletePolarCustomer skipped: no customer found", {uid});
      }

      return {success: true};
    } catch (error) {
      logger.error("deletePolarCustomer failed", error);
      if (error instanceof HttpsError) {
        throw error;
      }

      if (isApiErrorWithStatus(error, 404)) {
        logger.info("deletePolarCustomer: customer already deleted", {uid});
        return {success: true};
      }

      throw new HttpsError("internal", "Unable to delete billing customer.");
    }
  },
);

export const syncEntitlements = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) {
      throw new HttpsError("unauthenticated", "Authentication is required.");
    }

    const polar = getPolarClient();
    try {
      await ensurePolarCustomerForUid(uid, polar);

      const customerState = await polar.customers.getStateExternal({
        externalId: uid,
      });

      const activeSubscriptions = Array.isArray(customerState.activeSubscriptions) ?
        customerState.activeSubscriptions :
        [];
      const latestActiveSubscription = activeSubscriptions
        .slice()
        .sort((a, b) => b.currentPeriodEnd.getTime() - a.currentPeriodEnd.getTime())[0];

      let plan: PlanTier = "free";
      let subscriptionStatus: SubscriptionStatus = "none";
      let providerSubscriptionId = "";
      let providerVariantId = "";
      let currentPeriodEnd: Date | null = null;

      if (latestActiveSubscription) {
        providerSubscriptionId = latestActiveSubscription.id;
        providerVariantId = latestActiveSubscription.productId;
        currentPeriodEnd = latestActiveSubscription.currentPeriodEnd;
        subscriptionStatus = normalizeSubscriptionStatus(latestActiveSubscription.status);

        try {
          const subscription = await polar.subscriptions.get({id: latestActiveSubscription.id});
          plan = resolvePlanFromProduct(subscription.product?.name);
        } catch (error) {
          logger.warn("syncEntitlements unable to hydrate subscription product name", {
            uid,
            subscriptionId: latestActiveSubscription.id,
            error,
          });
          plan = "free";
        }
      }

      const entitlementsUpdatedAt = Date.now();
      const entitlements = getPlanEntitlements(plan);
      await getFirestore().collection("users").doc(uid).set(
        {
          plan,
          entitlements,
          subscriptionStatus,
          providerCustomerId: customerState.id,
          providerSubscriptionId,
          providerVariantId,
          currentPeriodEnd,
          entitlementsUpdatedAt,
        },
        {merge: true},
      );

      const syncedUser = await syncUsageWindowState(uid);

      return {
        plan,
        entitlements: syncedUser.entitlements ?? entitlements,
        subscriptionStatus,
        providerCustomerId: customerState.id,
        providerSubscriptionId,
        providerVariantId,
        currentPeriodEnd: currentPeriodEnd ? currentPeriodEnd.getTime() : null,
        usagePeriodKey: syncedUser.usagePeriodKey ?? null,
        usagePeriodStartedAt: syncedUser.usagePeriodStartedAt ?
          syncedUser.usagePeriodStartedAt.getTime() :
          null,
        usagePeriodEndsAt: syncedUser.usagePeriodEndsAt ?
          syncedUser.usagePeriodEndsAt.getTime() :
          null,
        resumeGenerationsUsed: syncedUser.resumeGenerationsUsed ?? 0,
        coverLettersUsed: syncedUser.coverLettersUsed ?? 0,
        entitlementsUpdatedAt,
      };
    } catch (error) {
      logger.error("syncEntitlements failed", error);
      if (error instanceof HttpsError) {
        throw error;
      }
      throw new HttpsError("internal", "Unable to sync billing entitlements.");
    }
  },
);

export const backfillPolarCustomers = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req) => {
    const requesterUid = req.auth?.uid;
    if (!requesterUid) {
      throw new HttpsError("unauthenticated", "Authentication is required.");
    }

    const requester = await getAuth().getUser(requesterUid);
    if (!requester.customClaims?.["admin"]) {
      throw new HttpsError("permission-denied", "Admin role is required.");
    }

    const inputLimit =
      typeof req.data?.limit === "number" && Number.isFinite(req.data.limit) ? req.data.limit : 50;
    const limit = Math.max(1, Math.min(200, Math.floor(inputLimit)));
    const dryRun = Boolean(req.data?.dryRun);
    const polar = getPolarClient();
    const db = getFirestore();
    const usersSnapshot = await db
      .collection("users")
      .where("providerCustomerId", "==", "")
      .limit(limit)
      .get();

    let success = 0;
    let failed = 0;
    const failures: Array<{ uid: string; error: string }> = [];

    for (const userDoc of usersSnapshot.docs) {
      const uid = userDoc.id;
      if (dryRun) {
        success += 1;
        continue;
      }

      try {
        await ensurePolarCustomerForUid(uid, polar);
        success += 1;
      } catch (error) {
        failed += 1;
        failures.push({
          uid,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    return {
      dryRun,
      scanned: usersSnapshot.size,
      success,
      failed,
      failures,
    };
  },
);

/**
 * Ensures an AI response contains non-empty text.
 * @param {string|null|undefined} responseText Raw AI response text.
 * @param {string} message Error message when the response is empty.
 * @return {string} Trimmed response text.
 */
function requireAiResponseText(responseText: string | null | undefined, message: string): string {
  const trimmed = responseText?.trim();
  if (!trimmed) {
    throw new HttpsError("internal", message);
  }

  return trimmed;
}

/**
 * Parses an AI JSON response or throws an HttpsError.
 * @template T
 * @param {string} responseText Raw AI response text.
 * @param {string} message Error message when parsing fails.
 * @return {T} Parsed JSON payload.
 */
function parseAiJsonResponse<T>(responseText: string, message: string): T {
  const normalizedText = normalizeAiJsonText(responseText);

  try {
    return JSON.parse(normalizedText) as T;
  } catch (error) {
    logger.error("Failed to parse AI JSON response", {responseText, normalizedText, error});
    throw new HttpsError("internal", message);
  }
}

/**
 * Normalizes AI output so wrapped JSON can still be parsed.
 * @param {string} responseText Raw AI response text.
 * @return {string} Extracted JSON text.
 */
function normalizeAiJsonText(responseText: string): string {
  const trimmed = responseText.trim();
  const fencedMatch = trimmed.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
  const withoutFences = fencedMatch ? fencedMatch[1].trim() : trimmed;

  if (withoutFences.startsWith("{") || withoutFences.startsWith("[")) {
    return withoutFences;
  }

  const objectStart = withoutFences.indexOf("{");
  const objectEnd = withoutFences.lastIndexOf("}");
  if (objectStart !== -1 && objectEnd > objectStart) {
    return withoutFences.slice(objectStart, objectEnd + 1);
  }

  const arrayStart = withoutFences.indexOf("[");
  const arrayEnd = withoutFences.lastIndexOf("]");
  if (arrayStart !== -1 && arrayEnd > arrayStart) {
    return withoutFences.slice(arrayStart, arrayEnd + 1);
  }

  return withoutFences;
}

/**
 * Normalizes nested description arrays to the expected result length.
 * @param {unknown} value Candidate nested descriptions payload.
 * @param {number} expectedLength Expected outer array length.
 * @return {Array<Array<string>>} Normalized nested descriptions.
 */
function sanitizeNestedDescriptions(value: unknown, expectedLength: number): string[][] {
  const descriptions = Array.isArray(value) ? value : [];
  const normalized = descriptions.map((entry) => getStringArray(entry));

  while (normalized.length < expectedLength) {
    normalized.push([]);
  }

  return normalized.slice(0, expectedLength);
}

export const generateResume = onCall(
  {secrets: [openaiSecret], invoker: "public"},
  async (request) => {
    const uid = request.auth?.uid;
    if (!uid) {
      throw new HttpsError("unauthenticated", "Authentication is required.");
    }

    const {mode, resume, targetIndex} = validateResumeGenerationRequest(request.data);
    await syncUsageWindowState(uid);
    const reservedUsage = mode === "full" ? await reserveQuotaUsage(uid, "resume") : null;

    try {
      const openaiApiKey = await openaiSecret.value();
      const client = new OpenAI({apiKey: openaiApiKey});
      const experience = resume.experience ?? [];
      const education = resume.education ?? [];
      const skills = resume.skills ?? [];

      let systemPrompt = "";
      let userPrompt = "";

      if (mode === "full") {
        systemPrompt = [
          "You are an expert resume writing assistant.",
          "Use only the facts provided in the input.",
          "Do not invent employers, schools, dates, tools, awards, or metrics.",
          "Return valid JSON only.",
        ].join(" ");
        userPrompt = JSON.stringify(
          {
            task:
              "Complete the missing resume writing fields for this candidate. Generate a concise professional summary, improve or organize the skills list, write experience bullets for each experience entry, and write education notes for each education entry.",
            candidate: resume,
            outputSchema: {
              summary: "string",
              skills: ["string"],
              experienceDescriptions: [["string"]],
              educationDescriptions: [["string"]],
            },
            rules: [
              "Summary should be 2-4 sentences.",
              "Each experience entry should have 3-5 bullet points when enough facts exist.",
              "Each education entry should have 1-3 bullet points when enough facts exist.",
              "If there is not enough information for an entry, return an empty array for that entry.",
            ],
          },
          null,
          2,
        );
      } else if (mode === "summary") {
        systemPrompt = [
          "You write resume summaries using only the facts provided.",
          "Do not invent employers, dates, metrics, or locations.",
          "Return valid JSON only.",
        ].join(" ");
        userPrompt = JSON.stringify(
          {
            task: "Write a 2-4 sentence professional summary for this candidate.",
            candidate: resume,
            outputSchema: {
              summary: "string",
            },
          },
          null,
          2,
        );
      } else if (mode === "experience") {
        const experienceEntry = experience[targetIndex ?? -1];
        if (!experienceEntry || !experienceEntry.company || !experienceEntry.role) {
          throw new HttpsError(
            "failed-precondition",
            "Add the company and role before generating work experience bullets.",
          );
        }

        systemPrompt = [
          "You write resume bullet points for a single work experience entry.",
          "Use only the facts provided.",
          "Do not invent tools, metrics, employers, or dates.",
          "Return valid JSON only.",
        ].join(" ");
        userPrompt = JSON.stringify(
          {
            task: "Write 3-5 concise resume bullet points for this work experience entry.",
            candidate: {
              personalInfo: resume.personalInfo,
              skills,
            },
            experienceEntry,
            outputSchema: {
              description: ["string"],
            },
          },
          null,
          2,
        );
      } else {
        const educationEntry = education[targetIndex ?? -1];
        if (!educationEntry || !educationEntry.school || !educationEntry.degree) {
          throw new HttpsError(
            "failed-precondition",
            "Add the school and degree before generating education notes.",
          );
        }

        systemPrompt = [
          "You write concise resume notes for a single education entry.",
          "Use only the facts provided.",
          "Do not invent institutions, honors, or dates.",
          "Return valid JSON only.",
        ].join(" ");
        userPrompt = JSON.stringify(
          {
            task: "Write 1-3 concise bullet points for this education entry.",
            candidate: {
              personalInfo: resume.personalInfo,
              skills,
            },
            educationEntry,
            outputSchema: {
              description: ["string"],
            },
          },
          null,
          2,
        );
      }

      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
      });

      const responseText = requireAiResponseText(
        completion.choices[0].message?.content,
        "No resume generation response from AI.",
      );

      let result: ResumeGenerationResult;
      if (mode === "full") {
        const parsed = parseAiJsonResponse<{
          summary?: unknown;
          skills?: unknown;
          experienceDescriptions?: unknown;
          educationDescriptions?: unknown;
        }>(responseText, "Failed to parse generated resume response.");

        result = {
          mode,
          summary: getStringOrEmpty(parsed.summary),
          skills: getStringArray(parsed.skills),
          experienceDescriptions: sanitizeNestedDescriptions(parsed.experienceDescriptions, experience.length),
          educationDescriptions: sanitizeNestedDescriptions(parsed.educationDescriptions, education.length),
          meta: {
            source: "ai",
            version: typeof resume.meta?.version === "number" ? resume.meta.version : 1,
            updatedAt: new Date().toISOString(),
          },
        };
      } else if (mode === "summary") {
        const parsed = parseAiJsonResponse<{ summary?: unknown }>(
          responseText,
          "Failed to parse generated summary response.",
        );
        result = {
          mode,
          summary: getStringOrEmpty(parsed.summary),
        };
      } else if (mode === "experience") {
        const parsed = parseAiJsonResponse<{ description?: unknown }>(
          responseText,
          "Failed to parse generated experience response.",
        );
        result = {
          mode,
          targetIndex: targetIndex ?? 0,
          description: getStringArray(parsed.description),
        };
      } else {
        const parsed = parseAiJsonResponse<{ description?: unknown }>(
          responseText,
          "Failed to parse generated education response.",
        );
        result = {
          mode,
          targetIndex: targetIndex ?? 0,
          description: getStringArray(parsed.description),
        };
      }

      return {result};
    } catch (error) {
      if (reservedUsage) {
        await releaseQuotaUsage(uid, reservedUsage);
      }

      throw error;
    }
  },
);

export const generateCoverLetter = onCall(
  {secrets: [openaiSecret], invoker: "public"},
  async (request) => {
    const uid = request.auth?.uid;
    if (!uid) {
      throw new HttpsError("unauthenticated", "Authentication is required.");
    }

    const {resumeText} = request.data as { resumeText?: string };

    if (!resumeText) {
      throw new HttpsError("invalid-argument", "No resume text");
    }

    await syncUsageWindowState(uid);
    const reservedUsage = await reserveQuotaUsage(uid, "coverLetter");

    try {
      const openaiApiKey = await openaiSecret.value();
      const client = new OpenAI({apiKey: openaiApiKey});

      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that helps users write cover letters based on their resumes.",
          },
          {
            role: "user",
            content: resumeText,
          },
        ],
      });

      const responseText = completion.choices[0].message?.content;

      return {
        text: responseText,
      };
    } catch (error) {
      await releaseQuotaUsage(uid, reservedUsage);
      throw error;
    }
  },
);

export const tailorResumeToJob = onCall(
  {secrets: [openaiSecret], invoker: "public"},
  async (request) => {
    const {resume, companyName, position, jobDescription} = request.data as {
      resume?: TailorResumeInput;
      companyName?: string;
      position?: string;
      jobDescription?: string;
    };

    if (!resume || typeof resume !== "object") {
      throw new HttpsError("invalid-argument", "A valid resume payload is required.");
    }

    if (!companyName?.trim() || !position?.trim() || !jobDescription?.trim()) {
      throw new HttpsError(
        "invalid-argument",
        "companyName, position, and jobDescription are required.",
      );
    }

    const openaiApiKey = await openaiSecret.value();
    const client = new OpenAI({apiKey: openaiApiKey});
    const experience = Array.isArray(resume.experience) ? resume.experience : [];
    const skills = Array.isArray(resume.skills) ? resume.skills : [];

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content: [
            "You are an expert resume tailoring assistant.",
            "Rewrite only these fields for better relevance to the target job:",
            "1) summary",
            "2) experience bullet descriptions",
            "3) skills list",
            "Do not invent employers, dates, degrees, or tools that are not supported by the resume/job description.",
            "Return valid JSON only.",
          ].join(" "),
        },
        {
          role: "user",
          content: JSON.stringify(
            {
              task: "Tailor this resume to the job while preserving identity/history fields.",
              targetJob: {
                companyName,
                position,
                jobDescription,
              },
              resume: {
                summary: resume.summary ?? "",
                skills,
                experience: experience.map((item) => ({
                  company: item.company ?? "",
                  role: item.role ?? "",
                  startDate: item.startDate ?? "",
                  endDate: item.endDate ?? "",
                  description: Array.isArray(item.description) ? item.description : [],
                })),
              },
              outputSchema: {
                summary: "string",
                skills: ["string"],
                experienceDescriptions: [["string"]],
              },
            },
            null,
            2,
          ),
        },
      ],
    });

    const responseText = completion.choices[0].message?.content;
    if (!responseText) {
      throw new HttpsError("internal", "No tailoring response from AI.");
    }

    let parsed: {
      summary?: unknown;
      skills?: unknown;
      experienceDescriptions?: unknown;
    };

    try {
      parsed = JSON.parse(responseText);
    } catch (error) {
      logger.error("Failed to parse tailoring response", {responseText, error});
      throw new HttpsError("internal", "Failed to parse tailoring response.");
    }

    const summary =
      typeof parsed.summary === "string" ? parsed.summary.trim() : (resume.summary ?? "");
    const tailoredSkills = Array.isArray(parsed.skills) ?
      parsed.skills
        .filter((item): item is string => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean) :
      skills;
    const descriptions = Array.isArray(parsed.experienceDescriptions) ?
      parsed.experienceDescriptions :
      [];

    const tailoredResume: TailorResumeInput = {
      ...resume,
      summary,
      skills: tailoredSkills,
      experience: experience.map((item, index) => {
        const rawDescriptions = descriptions[index];
        const nextDescriptions = Array.isArray(rawDescriptions) ?
          rawDescriptions
            .filter((desc): desc is string => typeof desc === "string")
            .map((desc) => desc.trim())
            .filter(Boolean) :
          (item.description ?? []);

        return {
          ...item,
          description: nextDescriptions,
        };
      }),
      meta: {
        createdAt: resume.meta?.createdAt ?? new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        source: resume.meta?.source === "ai" ? "ai" : "manual",
        version: resume.meta?.version ?? 1,
        tailoring: {
          source: "job-description",
          companyName: companyName.trim(),
          position: position.trim(),
          tailoredAt: new Date().toISOString(),
        },
      },
    };

    return {resume: tailoredResume};
  },
);

export const saveGeneratedResume = onCall(
  {secrets: [], invoker: "public"},
  async (request) => {
    const uid = request.auth?.uid;
    const {resume} = request.data as { resume?: Record<string, unknown> };

    if (!uid) {
      throw new HttpsError("unauthenticated", "Authentication is required.");
    }

    if (!resume || typeof resume !== "object") {
      throw new HttpsError("invalid-argument", "A valid resume payload is required.");
    }

    const user = await syncUsageWindowState(uid);
    assertGeneratedResumeStorageAllowed(user);

    const payload = {
      ...resume,
      userId: uid,
      createdAt: new Date(),
      meta: {
        ...(typeof resume["meta"] === "object" && resume["meta"] !== null ? resume["meta"] as object : {}),
        source: "ai",
        updatedAt: new Date().toISOString(),
      },
    };

    const createdResume = await getFirestore().collection("resumes").add(payload);
    return {resumeId: createdResume.id};
  },
);

export const downloadResume = onCall({secrets: [], invoker: "public"}, async (request) => {
  const uid = request.auth?.uid;
  const {resumeId} = request.data as { resumeId?: string };

  if (!uid) {
    throw new HttpsError("unauthenticated", "Authentication is required.");
  }

  if (!resumeId) {
    throw new HttpsError("invalid-argument", "Missing resumeId.");
  }

  const db = getFirestore();
  const user = await syncUsageWindowState(uid);
  assertResumeDownloadAllowed(user);
  const resumeRef = db.collection("resumes").doc(resumeId);
  const resumeSnapshot = await resumeRef.get();

  if (!resumeSnapshot.exists) {
    throw new HttpsError("not-found", "Resume not found.");
  }

  const resume = resumeSnapshot.data() as { userId?: string; personalInfo?: { fullName?: string } };
  if (resume.userId !== uid) {
    throw new HttpsError("permission-denied", "You do not have access to this resume.");
  }

  const safeName = (resume.personalInfo?.fullName || "resume")
    .replace(/[^a-zA-Z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80);
  const fileName = `${safeName || "resume"}-${resumeId}.json`;

  return {
    fileName,
    contentType: "application/json",
    content: JSON.stringify({id: resumeSnapshot.id, ...resumeSnapshot.data()}, null, 2),
  };
});

// For testing
export const echo = onCall(async (request) => {
  const {text} = request.data as { text?: string };
  return {text: text || "No text provided"};
});
