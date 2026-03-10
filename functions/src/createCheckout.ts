import {defineSecret} from "firebase-functions/params";
import {Polar} from "@polar-sh/sdk";
import {onCall} from "firebase-functions/https";

const polarToken = defineSecret("POLAR_ACCESS_TOKEN");

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

  try {
    return await polar.checkouts.create({
      products: [
        "7ad22fce-484d-472c-ad6e-f08e09e3e264",
        "ac58d79e-1d84-4322-bef6-05147be57cc7",
      ],
    });
  } catch (error) {
    throw new Error("Failed to create checkout");
  }
});
