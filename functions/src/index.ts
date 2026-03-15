import {defineSecret} from "firebase-functions/params";
import OpenAI from "openai";
import {onCall, HttpsError} from "firebase-functions/v2/https";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import {Polar} from "@polar-sh/sdk";

const openaiSecret = defineSecret("OPENAI_API_KEY");

const polarToken = defineSecret("POLAR_ACCESS_TOKEN");
initializeApp();

export const createCheckout = onCall({secrets: [polarToken]}, async (req) => {
  const polar = new Polar({
    accessToken: await polarToken.value(),
  });

  const uid = req.auth?.uid;
  if (!uid) {
    throw new Error("Unauthorized");
  }

  const priceId = req.data.priceId;
  if (!priceId) {
    throw new Error("Price ID is required");
  }

  const checkout = await polar.checkouts.create({
    products: ["ac58d79e-1d84-4322-bef6-05147be57cc7", "7ad22fce-484d-472c-ad6e-f08e09e3e264"],
    successUrl: "https://resume-crafts.com/checkouts/success",
    returnUrl: "https://resume-crafts.com/#pricing",
    customerId: uid,
  });

  try {
    return checkout.url;
  } catch (error) {
    throw new Error("Failed to create checkout");
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
