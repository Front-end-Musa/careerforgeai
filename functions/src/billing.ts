import {getFirestore} from "firebase-admin/firestore";
import {onCall, onRequest, HttpsError} from "firebase-functions/v2/https";
import {logger} from "firebase-functions";
import {validateEvent, WebhookVerificationError} from "@polar-sh/sdk/webhooks";
import {
  ensureAdminUid,
  getPolarClient,
  getUserProfile,
  isApiErrorWithStatus,
  logCallableInvocation,
  logCallableSuccess,
  normalizeSubscriptionStatus,
  polarToken,
  polarWebhookSecret,
  requireAuthUid,
  requireTrimmedString,
  resolvePlanFromProduct,
  rethrowLoggedHttpsError,
  toNullableDate,
} from "./shared.js";
import type {
  BackfillPolarCustomersRequest,
  BackfillPolarCustomersResponse,
  CreateCheckoutRequest,
  DeletePolarCustomerResponse,
  EnsurePolarCustomerResponse,
  PlanTier,
  SubscriptionStatus,
  SyncEntitlementsResponse,
} from "./types.js";

async function ensurePolarCustomerForUid(uid: string) {
  const polar = getPolarClient();
  const {userRef, user} = await getUserProfile(uid);

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

  await db.collection("users").doc(uid).set(
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

async function applyCustomerState(uid: string, data: unknown) {
  const customer = (data ?? {}) as {
    id?: string;
  };

  const db = getFirestore();
  await db.collection("users").doc(uid).set(
    {
      providerCustomerId: customer.id ?? "",
      entitlementsUpdatedAt: Date.now(),
    },
    {merge: true},
  );
}

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

function validateCreateCheckoutRequest(data: unknown): CreateCheckoutRequest {
  const payload = data as CreateCheckoutRequest;
  return {
    priceId: requireTrimmedString(payload?.priceId, "priceId"),
  };
}

function validateBackfillRequest(data: unknown): BackfillPolarCustomersRequest {
  if (typeof data !== "object" || data === null) {
    return {};
  }

  const payload = data as BackfillPolarCustomersRequest;
  return {
    limit: payload.limit,
    dryRun: payload.dryRun,
  };
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
  async (req): Promise<EnsurePolarCustomerResponse> => {
    const uid = requireAuthUid(req.auth);
    logCallableInvocation("ensurePolarCustomer", req.auth);

    try {
      const result = await ensurePolarCustomerForUid(uid);
      const response = {
        providerCustomerId: result.customerId,
        entitlementsUpdatedAt: Date.now(),
      };
      logCallableSuccess("ensurePolarCustomer");
      return response;
    } catch (error) {
      rethrowLoggedHttpsError(
        "ensurePolarCustomer",
        error,
        "Unable to prepare customer billing profile.",
      );
    }
  },
);

export const createCheckout = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req): Promise<string> => {
    const uid = requireAuthUid(req.auth);
    const {priceId} = validateCreateCheckoutRequest(req.data);
    const polar = getPolarClient();

    logCallableInvocation("createCheckout", req.auth, {
      hasPriceId: Boolean(priceId),
    });

    try {
      await ensurePolarCustomerForUid(uid);
      const checkout = await polar.checkouts.create({
        products: [priceId],
        successUrl: "https://resume-crafts.com/checkouts/success",
        returnUrl: "https://resume-crafts.com/#pricing",
        externalCustomerId: uid,
      });

      logCallableSuccess("createCheckout", {
        hasCheckoutUrl: Boolean(checkout.url),
      });
      return checkout.url;
    } catch (error) {
      if (isApiErrorWithStatus(error, 422)) {
        rethrowLoggedHttpsError(
          "createCheckout",
          new HttpsError(
            "invalid-argument",
            "Checkout configuration is invalid. Verify product IDs and billing settings.",
          ),
          "Unable to create checkout session.",
        );
      }

      rethrowLoggedHttpsError("createCheckout", error, "Unable to create checkout session.");
    }
  },
);

export const createPortalSession = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req): Promise<string> => {
    const uid = requireAuthUid(req.auth);
    const polar = getPolarClient();
    logCallableInvocation("createPortalSession", req.auth);

    try {
      await ensurePolarCustomerForUid(uid);
      const polarSession = await polar.customerSessions.create({
        externalCustomerId: uid,
        returnUrl: "https://resume-crafts.com/application/settings",
      });

      if (!polarSession.customerPortalUrl) {
        throw new HttpsError("internal", "Unable to create portal session.");
      }

      logCallableSuccess("createPortalSession");
      return polarSession.customerPortalUrl;
    } catch (error) {
      if (isApiErrorWithStatus(error, 422)) {
        rethrowLoggedHttpsError(
          "createPortalSession",
          new HttpsError(
            "invalid-argument",
            "Portal configuration is invalid. Verify product IDs and billing settings.",
          ),
          "Unable to create portal session.",
        );
      }

      rethrowLoggedHttpsError("createPortalSession", error, "Unable to create portal session.");
    }
  },
);

export const deletePolarCustomer = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req): Promise<DeletePolarCustomerResponse> => {
    const uid = requireAuthUid(req.auth);
    const polar = getPolarClient();
    logCallableInvocation("deletePolarCustomer", req.auth);

    try {
      const customerState = await polar.customers.getStateExternal({
        externalId: uid,
      });

      if (customerState.id) {
        await polar.customers.delete({
          id: customerState.id,
        });
      }

      logCallableSuccess("deletePolarCustomer", {
        hadCustomer: Boolean(customerState.id),
      });
      return {success: true};
    } catch (error) {
      if (isApiErrorWithStatus(error, 404)) {
        logger.info("deletePolarCustomer skipped: customer already deleted", {uid});
        return {success: true};
      }

      rethrowLoggedHttpsError("deletePolarCustomer", error, "Unable to delete billing customer.");
    }
  },
);

export const syncEntitlements = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req): Promise<SyncEntitlementsResponse> => {
    const uid = requireAuthUid(req.auth);
    const polar = getPolarClient();
    logCallableInvocation("syncEntitlements", req.auth);

    try {
      await ensurePolarCustomerForUid(uid);
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

      const response = {
        plan,
        subscriptionStatus,
        providerCustomerId: customerState.id,
        providerSubscriptionId,
        providerVariantId,
        currentPeriodEnd: currentPeriodEnd ? currentPeriodEnd.getTime() : null,
        entitlementsUpdatedAt,
      };
      logCallableSuccess("syncEntitlements", {
        plan,
        subscriptionStatus,
      });
      return response;
    } catch (error) {
      rethrowLoggedHttpsError("syncEntitlements", error, "Unable to sync billing entitlements.");
    }
  },
);

export const backfillPolarCustomers = onCall(
  {secrets: [polarToken], invoker: "public"},
  async (req): Promise<BackfillPolarCustomersResponse> => {
    const requesterUid = requireAuthUid(req.auth);
    await ensureAdminUid(requesterUid);

    const input = validateBackfillRequest(req.data);
    const inputLimit =
      typeof input.limit === "number" && Number.isFinite(input.limit) ? input.limit : 50;
    const limit = Math.max(1, Math.min(200, Math.floor(inputLimit)));
    const dryRun = Boolean(input.dryRun);
    const db = getFirestore();

    logCallableInvocation("backfillPolarCustomers", req.auth, {
      dryRun,
      limit,
    });

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
        await ensurePolarCustomerForUid(uid);
        success += 1;
      } catch (error) {
        failed += 1;
        failures.push({
          uid,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    const response = {
      dryRun,
      scanned: usersSnapshot.size,
      success,
      failed,
      failures,
    };
    logCallableSuccess("backfillPolarCustomers", {
      dryRun,
      scanned: usersSnapshot.size,
      success,
      failed,
    });
    return response;
  },
);
