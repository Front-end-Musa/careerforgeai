import OpenAI from 'openai';
import { onRequest } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import { setGlobalOptions } from 'firebase-functions/options';

const openaiKey = defineSecret('OPENAI_API_KEY');

setGlobalOptions({ maxInstances: 10 });

export const generateResume = onRequest({ secrets: [openaiKey] }, async (req, res) => {
  try {
    const client = new OpenAI({
      apiKey: openaiKey.value(),
    });

    const completion = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: JSON.stringify(req.body) },
      ],
    });

    res.json({ ok: true, completion });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
});
