import {defineSecret} from "firebase-functions/params";
import OpenAI from "openai";
import {onCall, onRequest, HttpsError} from "firebase-functions/v2/https";
import {logger} from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import {Polar} from "@polar-sh/sdk";
import {validateEvent, WebhookVerificationError} from "@polar-sh/sdk/webhooks";

const openaiSecret = defineSecret("OPENAI_API_KEY");

const polarToken = defineSecret("POLAR_ACCESS_TOKEN");
const polarWebhookSecret = defineSecret("POLAR_WEBHOOK_SECRET");
initializeApp();

export const polarWebhook = onRequest({secrets: [polarWebhookSecret], invoker: "public"}, async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
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

    const event = validateEvent(rawBody, signatureHeaders, webhookSecret);

    logger.info("polarWebhook received", {
      type: event.type,
      id: event.data?.id ?? null,
    });

    // TODO: Handle event types and persist entitlements/subscription state as needed.
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
});

export const createCheckout = onCall({secrets: [polarToken]}, async (req) => {
  const polar = new Polar({
    accessToken: polarToken.value(),
  });

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

    if (
      typeof error === "object" &&
      error !== null &&
      "statusCode" in error &&
      error.statusCode === 422
    ) {
      throw new HttpsError(
        "invalid-argument",
        "Checkout configuration is invalid. Verify product IDs and billing settings.",
      );
    }

    throw new HttpsError("internal", "Unable to create checkout session.");
  }
});

export const createPortalSession = onCall({secrets: [polarToken]}, async (req) => {
  const polar = new Polar({
    accessToken: polarToken.value(),
  });

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
    const polarSession = await polar.customerSessions.create({
      externalCustomerId: uid ? uid : "",
      returnUrl: "https://resume-crafts.com/application/settings",
    });

    logger.info("createPortalSession succeeded", {
      uid,
    });

    return polarSession;
  } catch (error) {
    logger.error("createPortalSession failed", error);

    if (
      typeof error === "object" &&
      error !== null &&
      "statusCode" in error &&
      error.statusCode === 422
    ) {
      throw new HttpsError(
        "invalid-argument",
        "Portal configuration is invalid. Verify product IDs and billing settings.",
      );
    }

    throw new HttpsError("internal", "Unable to create portal session.");
  }
});

export const generateResume = onCall({secrets: [openaiSecret]}, async (request) => {
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
});

export const generateCoverLetter = onCall({secrets: [openaiSecret]}, async (request) => {
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
});

export const downloadResume = onCall(async (request) => {
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
