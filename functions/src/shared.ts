import {initializeApp} from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";
import {logger} from "firebase-functions";
import {HttpsError} from "firebase-functions/v2/https";
import {defineSecret} from "firebase-functions/params";
import OpenAI from "openai";
import {Polar} from "@polar-sh/sdk";
import type {AppUserDoc, PlanEntitlements, PlanTier, SubscriptionStatus} from "./types.js";

initializeApp();

export const openaiSecret = defineSecret("OPENAI_API_KEY");
export const polarToken = defineSecret("POLAR_ACCESS_TOKEN");
export const polarWebhookSecret = defineSecret("POLAR_WEBHOOK_SECRET");

export function getOpenAiClient(): OpenAI {
  return new OpenAI({apiKey: openaiSecret.value()});
}

export function getPolarClient(): Polar {
  return new Polar({
    accessToken: polarToken.value(),
  });
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function isApiErrorWithStatus(error: unknown, statusCode: number): boolean {
  return (
    isRecord(error) &&
    "statusCode" in error &&
    error.statusCode === statusCode
  );
}

export function toNullableDate(value: unknown): Date | null {
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

export function normalizeSubscriptionStatus(status: unknown): SubscriptionStatus {
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

export function resolvePlanFromProduct(productName: unknown): PlanTier {
  const normalized = typeof productName === "string" ? productName.toLowerCase() : "";
  if (normalized.includes("premium")) {
    return "premium";
  }
  if (normalized.includes("pro")) {
    return "pro";
  }

  return "free";
}

export function getPlanEntitlements(plan: PlanTier): PlanEntitlements {
  if (plan === "premium") {
    return {
      plan,
      monthlyAiLimit: 80,
      jobTrackerEnabled: true,
    };
  }

  if (plan === "pro") {
    return {
      plan,
      monthlyAiLimit: 30,
      jobTrackerEnabled: false,
    };
  }

  return {
    plan: "free",
    monthlyAiLimit: 3,
    jobTrackerEnabled: false,
  };
}

function getCurrentAiUsageWindowKey() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = `${now.getUTCMonth() + 1}`.padStart(2, "0");
  return `${year}-${month}`;
}

export function getAiUsageState(user: AppUserDoc) {
  const plan = user.plan ?? "free";
  const entitlements = getPlanEntitlements(plan);
  const currentWindowKey = getCurrentAiUsageWindowKey();
  const used = user.aiUsageWindowKey === currentWindowKey ? user.aiUsageCount ?? 0 : 0;

  return {
    used,
    windowKey: currentWindowKey,
    entitlements,
  };
}

export function assertAiQuotaAvailable(user: AppUserDoc) {
  const usage = getAiUsageState(user);

  if (usage.used >= usage.entitlements.monthlyAiLimit) {
    throw new HttpsError("resource-exhausted", "Monthly AI limit reached for current plan.");
  }

  return usage;
}

export async function getUserProfile(uid: string) {
  const db = getFirestore();
  const userRef = db.collection("users").doc(uid);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    throw new HttpsError("failed-precondition", "User profile does not exist.");
  }

  return {
    userRef,
    user: userSnapshot.data() as AppUserDoc,
  };
}

export function requireAuthUid(auth: {uid?: string} | null | undefined) {
  const uid = auth?.uid;
  if (!uid) {
    throw new HttpsError("unauthenticated", "Authentication is required.");
  }

  return uid;
}

export async function recordSuccessfulAiUsage(uid: string) {
  const db = getFirestore();
  const userRef = db.collection("users").doc(uid);

  return db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(userRef);
    if (!snapshot.exists) {
      throw new HttpsError("failed-precondition", "User profile does not exist.");
    }

    const user = snapshot.data() as AppUserDoc;
    const usage = assertAiQuotaAvailable(user);
    transaction.set(userRef, {
      aiUsageCount: usage.used + 1,
      aiUsageWindowKey: usage.windowKey,
      entitlementsUpdatedAt: Date.now(),
    }, {merge: true});

    return usage.entitlements;
  });
}

export function assertCallablePayload(
  data: unknown,
  message = "A valid request payload is required.",
) {
  if (!isRecord(data)) {
    throw new HttpsError("invalid-argument", message);
  }

  return data;
}

export function requireTrimmedString(
  value: unknown,
  fieldName: string,
  options?: {
    code?: "invalid-argument" | "failed-precondition";
    message?: string;
  },
) {
  if (typeof value !== "string") {
    throw new HttpsError(
      options?.code ?? "invalid-argument",
      options?.message ?? `${fieldName} is required.`,
    );
  }

  const trimmed = value.trim();
  if (!trimmed) {
    throw new HttpsError(
      options?.code ?? "invalid-argument",
      options?.message ?? `${fieldName} is required.`,
    );
  }

  return trimmed;
}

export function logCallableInvocation(
  functionName: string,
  auth: {uid?: string} | null | undefined,
  details: Record<string, unknown> = {},
) {
  logger.info(`${functionName} invoked`, {
    hasAuth: Boolean(auth?.uid),
    projectId: process.env.GCLOUD_PROJECT ?? null,
    functionTarget: process.env.FUNCTION_TARGET ?? null,
    ...details,
  });
}

export function logCallableSuccess(functionName: string, details: Record<string, unknown> = {}) {
  logger.info(`${functionName} succeeded`, details);
}

function getErrorSummary(error: unknown) {
  if (error instanceof HttpsError) {
    return {
      type: "https-error",
      code: error.code,
      message: error.message,
    };
  }

  if (error instanceof Error) {
    return {
      type: error.name,
      message: error.message,
    };
  }

  return {
    type: typeof error,
    message: String(error),
  };
}

function toErrorStatusCode(error: unknown): number | null {
  if (!isRecord(error)) {
    return null;
  }

  if ("status" in error && typeof error.status === "number") {
    return error.status;
  }

  if ("statusCode" in error && typeof error.statusCode === "number") {
    return error.statusCode;
  }

  return null;
}

function toErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (isRecord(error) && typeof error.message === "string") {
    return error.message;
  }

  return String(error);
}

function toExternalServiceHttpsError(error: unknown): HttpsError | null {
  const statusCode = toErrorStatusCode(error);
  const message = toErrorMessage(error).trim();
  const normalizedMessage = message.toLowerCase();

  if (statusCode === 401 || statusCode === 403) {
    return new HttpsError(
      "failed-precondition",
      "The OpenAI API key is invalid or inactive. Check the deployed OPENAI_API_KEY secret.",
    );
  }

  if (statusCode === 429) {
    if (
      normalizedMessage.includes("account is not active") ||
      normalizedMessage.includes("billing")
    ) {
      return new HttpsError(
        "failed-precondition",
        "The OpenAI account for this function is inactive. Update billing for the deployed OPENAI_API_KEY secret.",
      );
    }

    return new HttpsError(
      "resource-exhausted",
      "OpenAI rejected the request due to rate limiting. Try again in a moment.",
    );
  }

  if (statusCode !== null && statusCode >= 500) {
    return new HttpsError(
      "unavailable",
      "OpenAI is temporarily unavailable. Try again in a moment.",
    );
  }

  return null;
}

export function rethrowLoggedHttpsError(
  functionName: string,
  error: unknown,
  fallbackMessage: string,
  details: Record<string, unknown> = {},
): never {
  logger.error(`${functionName} failed`, {
    ...details,
    error: getErrorSummary(error),
  });

  if (error instanceof HttpsError) {
    throw error;
  }

  const externalServiceError = toExternalServiceHttpsError(error);
  if (externalServiceError) {
    throw externalServiceError;
  }

  throw new HttpsError("internal", fallbackMessage);
}

export async function ensureAdminUid(uid: string) {
  const requester = await getAuth().getUser(uid);
  if (!requester.customClaims?.["admin"]) {
    throw new HttpsError("permission-denied", "Admin role is required.");
  }
}
