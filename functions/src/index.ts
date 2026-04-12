import {defineSecret} from "firebase-functions/params";
import OpenAI from "openai";
import {onCall, onRequest, HttpsError} from "firebase-functions/v2/https";
import {logger} from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";
import {Timestamp, getFirestore} from "firebase-admin/firestore";
import {Polar} from "@polar-sh/sdk";
import {validateEvent, WebhookVerificationError} from "@polar-sh/sdk/webhooks";

const openaiSecret = defineSecret("OPENAI_API_KEY");

const polarToken = defineSecret("POLAR_ACCESS_TOKEN");
const polarWebhookSecret = defineSecret("POLAR_WEBHOOK_SECRET");
initializeApp();

type PlanTier = "free" | "pro" | "premium";
type SubscriptionStatus = "none" | "active" | "past_due" | "cancelled";

type AppUserDoc = {
  name?: string;
  email?: string;
  plan?: PlanTier;
  providerCustomerId?: string;
  providerSubscriptionId?: string;
  providerVariantId?: string;
  subscriptionStatus?: SubscriptionStatus;
  currentPeriodEnd?: Date | null;
  entitlementsUpdatedAt?: number | null;
};

type UpgradeReason = "second_resume" | "download" | "tailor" | "template_lock";
type TemplatePlan = "free" | "pro" | "premium";

type TailorExperienceEntry = {
  company?: string;
  role?: string;
  startDate?: string;
  endDate?: string;
  description?: string[];
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
 * Returns true when the user has an active paid subscription.
 * @param {AppUserDoc} user App user billing state.
 * @return {boolean} Whether paid resume features are enabled.
 */
function canUsePaidResumeFeatures(user: AppUserDoc): boolean {
  const hasPaidPlan = user.plan === "pro" || user.plan === "premium";
  return hasPaidPlan && user.subscriptionStatus === "active";
}

/**
 * Returns the minimum plan required for a resume template.
 * @param {unknown} templateId Requested template id.
 * @return {TemplatePlan} Required template plan.
 */
function requiredPlanForTemplate(templateId: unknown): TemplatePlan {
  if (
    templateId === "premium-executive" ||
    templateId === "executive-edge" ||
    templateId === "graphical-genius" ||
    templateId === "elite-senior" ||
    templateId === "metamorphic-masterpiece"
  ) {
    return "premium";
  }

  if (
    templateId === "pro-modern" ||
    templateId === "cascade" ||
    templateId === "cubic-pro" ||
    templateId === "tech-savvy" ||
    templateId === "modern-executive"
  ) {
    return "pro";
  }

  return "free";
}

/**
 * Returns true when the user's plan can use the requested template.
 * @param {AppUserDoc} user User billing state.
 * @param {unknown} templateId Requested template id.
 * @return {boolean} Whether template access is allowed.
 */
function canUseTemplate(user: AppUserDoc, templateId: unknown): boolean {
  const requiredPlan = requiredPlanForTemplate(templateId);
  const effectivePlan = canUsePaidResumeFeatures(user) ? user.plan ?? "free" : "free";
  const rank: Record<TemplatePlan, number> = {free: 1, pro: 2, premium: 3};
  return rank[effectivePlan] >= rank[requiredPlan];
}

/**
 * Reads and validates the current user's profile document.
 * @param {string} uid Firebase auth UID.
 * @return {Promise<AppUserDoc>} User document data.
 */
async function getUserProfile(uid: string): Promise<AppUserDoc> {
  const userSnapshot = await getFirestore().collection("users").doc(uid).get();
  if (!userSnapshot.exists) {
    throw new HttpsError("failed-precondition", "User profile does not exist.");
  }

  return userSnapshot.data() as AppUserDoc;
}

/**
 * Counts the current user's resumes up to the provided limit.
 * @param {string} uid Firebase auth UID.
 * @param {number} limit Maximum number of resumes to scan.
 * @return {Promise<number>} Resume count up to limit.
 */
async function countUserResumes(uid: string, limit = 2): Promise<number> {
  const snapshot = await getFirestore()
    .collection("resumes")
    .where("userId", "==", uid)
    .limit(limit)
    .get();

  return snapshot.size;
}

/**
 * Throws when the user cannot create another resume.
 * @param {string} uid Firebase auth UID.
 * @return {Promise<void>} Resolves when creation is allowed.
 */
async function assertCanCreateResume(uid: string): Promise<void> {
  const user = await getUserProfile(uid);
  if (canUsePaidResumeFeatures(user)) {
    return;
  }

  const resumeCount = await countUserResumes(uid);
  if (user.plan === "free" && resumeCount === 0) {
    return;
  }

  throw new HttpsError(
    "permission-denied",
    "Your free plan includes one saved resume. Upgrade to create another.",
    {reason: "second_resume"},
  );
}

/**
 * Throws when the user cannot access paid resume actions.
 * @param {string} uid Firebase auth UID.
 * @param {UpgradeReason} reason Why access is being checked.
 * @return {Promise<void>} Resolves when action is allowed.
 */
async function assertHasPaidResumeAccess(uid: string, reason: UpgradeReason): Promise<void> {
  const user = await getUserProfile(uid);
  if (canUsePaidResumeFeatures(user)) {
    return;
  }

  const messages: Record<UpgradeReason, string> = {
    second_resume: "Your free plan includes one saved resume. Upgrade to create another.",
    download: "Resume downloads are available on paid plans.",
    tailor: "AI tailoring is available on paid plans.",
    template_lock: "Upgrade your plan to unlock this template.",
  };

  throw new HttpsError("permission-denied", messages[reason], {reason});
}

/**
 * Throws when the requested template is not available on the user's plan.
 * @param {string} uid Firebase auth UID.
 * @param {unknown} templateId Requested template id.
 * @return {Promise<void>} Resolves when template access is allowed.
 */
async function assertCanUseTemplate(uid: string, templateId: unknown): Promise<void> {
  const user = await getUserProfile(uid);
  if (canUseTemplate(user, templateId)) {
    return;
  }

  throw new HttpsError(
    "permission-denied",
    "Upgrade your plan to unlock this template.",
    {reason: "template_lock"},
  );
}

/**
 * Throws when the user tries to move a resume onto a locked template.
 * Existing locked templates may remain unchanged after downgrade.
 * @param {string} uid Firebase auth UID.
 * @param {unknown} currentTemplateId Existing template id.
 * @param {unknown} nextTemplateId Requested template id.
 * @return {Promise<void>} Resolves when template transition is allowed.
 */
async function assertCanPersistTemplateChange(
  uid: string,
  currentTemplateId: unknown,
  nextTemplateId: unknown,
): Promise<void> {
  if (currentTemplateId === nextTemplateId) {
    return;
  }

  await assertCanUseTemplate(uid, nextTemplateId);
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
  const currentPeriodEnd =
    toNullableDate(subscription.currentPeriodEnd) ?? toNullableDate(subscription.endsAt);

  await db
    .collection("users")
    .doc(uid)
    .set(
      {
        plan,
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
      await getFirestore().collection("users").doc(uid).set(
        {
          plan,
          subscriptionStatus,
          providerCustomerId: customerState.id,
          providerSubscriptionId,
          providerVariantId,
          currentPeriodEnd,
          entitlementsUpdatedAt,
        },
        {merge: true},
      );

      return {
        plan,
        subscriptionStatus,
        providerCustomerId: customerState.id,
        providerSubscriptionId,
        providerVariantId,
        currentPeriodEnd: currentPeriodEnd ? currentPeriodEnd.getTime() : null,
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

export const generateResume = onCall(
  {secrets: [openaiSecret], invoker: "public"},
  async (request) => {
    const {resumeText} = request.data as { resumeText?: string };

    if (!resumeText) {
      throw new HttpsError("invalid-argument", "No resume text");
    }

    const openaiApiKey = await openaiSecret.value();
    const client = new OpenAI({apiKey: openaiApiKey});

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that helps users improve their resumes.",
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
  },
);

export const createResume = onCall({secrets: [], invoker: "public"}, async (request) => {
  const uid = request.auth?.uid;
  const {resume} = request.data as { resume?: Record<string, unknown> };

  if (!uid) {
    throw new HttpsError("unauthenticated", "Authentication is required.");
  }

  if (!resume || typeof resume !== "object") {
    throw new HttpsError("invalid-argument", "A valid resume payload is required.");
  }

  await assertCanCreateResume(uid);
  await assertCanPersistTemplateChange(uid, undefined, resume.templateId);

  const docRef = await getFirestore().collection("resumes").add({
    ...resume,
    userId: uid,
    createdAt: Timestamp.now(),
  });

  return {resumeId: docRef.id};
});

export const updateResume = onCall({secrets: [], invoker: "public"}, async (request) => {
  const uid = request.auth?.uid;
  const {resumeId, changes} = request.data as {
    resumeId?: string;
    changes?: Record<string, unknown>;
  };

  if (!uid) {
    throw new HttpsError("unauthenticated", "Authentication is required.");
  }

  if (!resumeId || !changes || typeof changes !== "object") {
    throw new HttpsError("invalid-argument", "resumeId and changes are required.");
  }

  const resumeRef = getFirestore().collection("resumes").doc(resumeId);
  const resumeSnapshot = await resumeRef.get();
  if (!resumeSnapshot.exists) {
    throw new HttpsError("not-found", "Resume not found.");
  }

  const currentResume = resumeSnapshot.data() as {userId?: string; templateId?: unknown};
  if (currentResume.userId !== uid) {
    throw new HttpsError("permission-denied", "You do not have access to this resume.");
  }

  await assertCanPersistTemplateChange(uid, currentResume.templateId, changes.templateId ?? currentResume.templateId);
  await resumeRef.update(changes);

  return {success: true};
});

export const generateCoverLetter = onCall(
  {secrets: [openaiSecret], invoker: "public"},
  async (request) => {
    const {resumeText} = request.data as { resumeText?: string };

    if (!resumeText) {
      throw new HttpsError("invalid-argument", "No resume text");
    }

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
  },
);

export const tailorResumeToJob = onCall(
  {secrets: [openaiSecret], invoker: "public"},
  async (request) => {
    const uid = request.auth?.uid;
    const {resume, companyName, position, jobDescription} = request.data as {
      resume?: TailorResumeInput;
      companyName?: string;
      position?: string;
      jobDescription?: string;
    };

    if (!uid) {
      throw new HttpsError("unauthenticated", "Authentication is required.");
    }

    await assertHasPaidResumeAccess(uid, "tailor");

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
  const resumeRef = db.collection("resumes").doc(resumeId);
  const resumeSnapshot = await resumeRef.get();

  if (!resumeSnapshot.exists) {
    throw new HttpsError("not-found", "Resume not found.");
  }

  const resume = resumeSnapshot.data() as { userId?: string; personalInfo?: { fullName?: string } };
  if (resume.userId !== uid) {
    throw new HttpsError("permission-denied", "You do not have access to this resume.");
  }

  await assertHasPaidResumeAccess(uid, "download");

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
