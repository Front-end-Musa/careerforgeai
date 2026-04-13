const test = require('node:test');
const assert = require('node:assert/strict');
const { WebhookVerificationError } = require('@polar-sh/sdk/webhooks');

const billing = require('../lib/billing.js');
const shared = require('../lib/shared.js');
const firestore = require('firebase-admin/firestore');
const polarWebhooks = require('@polar-sh/sdk/webhooks');
const { createResponseRecorder } = require('./helpers.cjs');

test('polarWebhook rejects non-POST methods', async () => {
  const response = createResponseRecorder();

  await billing.polarWebhook({ method: 'GET', headers: {}, rawBody: Buffer.from('x') }, response);

  assert.equal(response.statusCode, 405);
  assert.equal(response.body, 'Method Not Allowed. Only POST requests are accepted.');
});

test('polarWebhook rejects requests with missing bodies', async () => {
  const response = createResponseRecorder();

  await billing.polarWebhook({ method: 'POST', headers: {}, rawBody: Buffer.alloc(0) }, response);

  assert.equal(response.statusCode, 400);
  assert.equal(response.body, 'Missing request body');
});

test('polarWebhook rejects requests with missing signature headers', async () => {
  const response = createResponseRecorder();

  await billing.polarWebhook(
    {
      method: 'POST',
      headers: {},
      rawBody: Buffer.from('{}'),
    },
    response,
  );

  assert.equal(response.statusCode, 400);
  assert.equal(response.body, 'Missing webhook signature headers');
});

test('polarWebhook returns 403 when signature verification fails', async (t) => {
  const response = createResponseRecorder();

  t.mock.method(shared.polarWebhookSecret, 'value', () => 'secret');
  t.mock.method(polarWebhooks, 'validateEvent', () => {
    throw new WebhookVerificationError('Invalid signature');
  });

  await billing.polarWebhook(
    {
      method: 'POST',
      headers: {
        'webhook-id': 'id',
        'webhook-signature': 'sig',
        'webhook-timestamp': '123',
      },
      rawBody: Buffer.from('{}'),
    },
    response,
  );

  assert.equal(response.statusCode, 403);
  assert.equal(response.body, 'Invalid signature');
});

test('polarWebhook applies subscription updates for supported event types', async (t) => {
  const writes = [];
  const response = createResponseRecorder();

  t.mock.method(shared.polarWebhookSecret, 'value', () => 'secret');
  t.mock.method(polarWebhooks, 'validateEvent', () => ({
    type: 'subscription.updated',
    data: {
      id: 'sub_1',
      status: 'active',
      currentPeriodEnd: '2026-05-01T00:00:00.000Z',
      customer: {
        id: 'cust_1',
        externalId: 'user-1',
      },
      product: {
        id: 'prod_1',
        name: 'Premium Monthly',
      },
    },
  }));
  t.mock.method(firestore, 'getFirestore', () => ({
    collection: (name) => ({
      doc: (id) => ({
        async set(data, options) {
          writes.push({ name, id, data, options });
        },
      }),
    }),
  }));

  await billing.polarWebhook(
    {
      method: 'POST',
      headers: {
        'webhook-id': 'id',
        'webhook-signature': 'sig',
        'webhook-timestamp': '123',
      },
      rawBody: Buffer.from('{"ok":true}'),
    },
    response,
  );

  assert.equal(response.statusCode, 200);
  assert.equal(response.body, 'ok');
  assert.equal(writes.length, 1);
  assert.equal(writes[0].name, 'users');
  assert.equal(writes[0].id, 'user-1');
  assert.equal(writes[0].data.plan, 'premium');
  assert.equal(writes[0].data.subscriptionStatus, 'active');
  assert.equal(writes[0].data.providerCustomerId, 'cust_1');
  assert.deepEqual(writes[0].options, { merge: true });
});

test('polarWebhook returns 200 without writes when the event has no external id', async (t) => {
  let writeCount = 0;
  const response = createResponseRecorder();

  t.mock.method(shared.polarWebhookSecret, 'value', () => 'secret');
  t.mock.method(polarWebhooks, 'validateEvent', () => ({
    type: 'customer.updated',
    data: {
      id: 'cust_1',
    },
  }));
  t.mock.method(firestore, 'getFirestore', () => ({
    collection: () => ({
      doc: () => ({
        async set() {
          writeCount += 1;
        },
      }),
    }),
  }));

  await billing.polarWebhook(
    {
      method: 'POST',
      headers: {
        'webhook-id': 'id',
        'webhook-signature': 'sig',
        'webhook-timestamp': '123',
      },
      rawBody: Buffer.from('{"ok":true}'),
    },
    response,
  );

  assert.equal(response.statusCode, 200);
  assert.equal(response.body, 'ok');
  assert.equal(writeCount, 0);
});
