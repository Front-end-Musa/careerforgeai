import {defineSecret} from "firebase-functions/params";
import OpenAI from "openai";
import {onCall, HttpsError} from "firebase-functions/v2/https";

const openaiSecret = defineSecret("OPENAI_API_KEY");

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
