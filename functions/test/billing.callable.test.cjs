const test = require('node:test');
const assert = require('node:assert/strict');
const { HttpsError } = require('firebase-functions/v2/https');

const billing = require('../lib/billing.js');
const shared = require('../lib/shared.js');
const firestore = require('firebase-admin/firestore');

function createUser(overrides = {}) {
  return {
    name: 'Test User',
    email: 'test@example.com',
    providerCustomerId: '',
    ...overrides,
  };
}

test('ensurePolarCustomer rejects unauthenticated requests', async () => {
  await assert.rejects(
    () => billing.ensurePolarCustomer.run({ auth: null, data: {} }),
    (error) => {
      assert.equal(error.code, 'unauthenticated');
      return true;
    },
  );
});

test('ensurePolarCustomer returns existing provider ids without calling Polar', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({
    user: createUser({ providerCustomerId: 'cust_existing' }),
    userRef: { set: async () => assert.fail('userRef.set should not be called') },
  }));
  t.mock.method(shared, 'getPolarClient', () => ({
    customers: {
      async getExternal() {
        assert.fail('customers.getExternal should not be called');
      },
      async create() {
        assert.fail('customers.create should not be called');
      },
    },
  }));

  const result = await billing.ensurePolarCustomer.run({ auth: { uid: 'user-1' }, data: {} });

  assert.equal(result.providerCustomerId, 'cust_existing');
  assert.equal(typeof result.entitlementsUpdatedAt, 'number');
});

test('ensurePolarCustomer requires an email before creating customers', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({
    user: createUser({ email: '   ' }),
    userRef: { set: async () => {} },
  }));

  await assert.rejects(
    () => billing.ensurePolarCustomer.run({ auth: { uid: 'user-1' }, data: {} }),
    (error) => {
      assert.equal(error.code, 'failed-precondition');
      assert.match(error.message, /billing profile is not ready/i);
      return true;
    },
  );
});

test('ensurePolarCustomer creates missing customers after a 404 lookup', async (t) => {
  const writes = [];

  t.mock.method(shared, 'getUserProfile', async () => ({
    user: createUser(),
    userRef: {
      async set(data, options) {
        writes.push({ data, options });
      },
    },
  }));
  t.mock.method(shared, 'getPolarClient', () => ({
    customers: {
      async getExternal() {
        throw { statusCode: 404, message: 'not found' };
      },
      async create(payload) {
        assert.equal(payload.externalId, 'user-1');
        return { id: 'cust_new' };
      },
    },
  }));

  const result = await billing.ensurePolarCustomer.run({ auth: { uid: 'user-1' }, data: {} });

  assert.equal(result.providerCustomerId, 'cust_new');
  assert.equal(writes.length, 1);
  assert.equal(writes[0].data.providerCustomerId, 'cust_new');
  assert.deepEqual(writes[0].options, { merge: true });
});

test('createCheckout validates missing priceId', async () => {
  await assert.rejects(
    () => billing.createCheckout.run({ auth: { uid: 'user-1' }, data: {} }),
    (error) => {
      assert.equal(error.code, 'invalid-argument');
      assert.match(error.message, /priceId is required/i);
      return true;
    },
  );
});

test('createCheckout maps Polar 422 errors to invalid-argument', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({
    user: createUser({ providerCustomerId: 'cust_existing' }),
    userRef: { set: async () => {} },
  }));
  t.mock.method(shared, 'getPolarClient', () => ({
    checkouts: {
      async create() {
        throw { statusCode: 422, message: 'invalid configuration' };
      },
    },
  }));

  await assert.rejects(
    () =>
      billing.createCheckout.run({
        auth: { uid: 'user-1' },
        data: { priceId: 'price_123' },
      }),
    (error) => {
      assert.equal(error.code, 'invalid-argument');
      assert.match(error.message, /Checkout configuration is invalid/i);
      return true;
    },
  );
});

test('createCheckout returns the checkout URL on success', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({
    user: createUser({ providerCustomerId: 'cust_existing' }),
    userRef: { set: async () => {} },
  }));
  t.mock.method(shared, 'getPolarClient', () => ({
    checkouts: {
      async create(payload) {
        assert.deepEqual(payload.products, ['price_123']);
        return { url: 'https://polar.example/checkout' };
      },
    },
  }));

  const result = await billing.createCheckout.run({
    auth: { uid: 'user-1' },
    data: { priceId: 'price_123' },
  });

  assert.equal(result, 'https://polar.example/checkout');
});

test('createPortalSession throws when Polar does not return a portal URL', async (t) => {
  t.mock.method(shared, 'getUserProfile', async () => ({
    user: createUser({ providerCustomerId: 'cust_existing' }),
    userRef: { set: async () => {} },
  }));
  t.mock.method(shared, 'getPolarClient', () => ({
    customerSessions: {
      async create() {
        return { customerPortalUrl: '' };
      },
    },
  }));

  await assert.rejects(
    () => billing.createPortalSession.run({ auth: { uid: 'user-1' }, data: {} }),
    (error) => {
      assert.equal(error.code, 'internal');
      assert.match(error.message, /Unable to create portal session/i);
      return true;
    },
  );
});

test('deletePolarCustomer treats already-deleted customers as success', async (t) => {
  t.mock.method(shared, 'getPolarClient', () => ({
    customers: {
      async getStateExternal() {
        throw { statusCode: 404, message: 'missing' };
      },
    },
  }));

  const result = await billing.deletePolarCustomer.run({ auth: { uid: 'user-1' }, data: {} });

  assert.deepEqual(result, { success: true });
});

test('syncEntitlements writes merged free-tier state when there are no active subscriptions', async (t) => {
  const writes = [];

  t.mock.method(shared, 'getUserProfile', async () => ({
    user: createUser({ providerCustomerId: 'cust_existing' }),
    userRef: { set: async () => {} },
  }));
  t.mock.method(shared, 'getPolarClient', () => ({
    customers: {
      async getStateExternal() {
        return {
          id: 'cust_existing',
          activeSubscriptions: [],
        };
      },
    },
    subscriptions: {
      async get() {
        throw new Error('subscriptions.get should not run without active subscriptions');
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

  const result = await billing.syncEntitlements.run({ auth: { uid: 'user-1' }, data: {} });

  assert.equal(result.plan, 'free');
  assert.equal(result.subscriptionStatus, 'none');
  assert.equal(writes.length, 1);
  assert.equal(writes[0].name, 'users');
  assert.equal(writes[0].id, 'user-1');
  assert.deepEqual(writes[0].options, { merge: true });
});

test('backfillPolarCustomers denies non-admin callers', async (t) => {
  t.mock.method(shared, 'ensureAdminUid', async () => {
    throw new HttpsError('permission-denied', 'Admin role is required.');
  });

  await assert.rejects(
    () =>
      billing.backfillPolarCustomers.run({
        auth: { uid: 'user-1' },
        data: { dryRun: true },
      }),
    (error) => {
      assert.equal(error.code, 'permission-denied');
      return true;
    },
  );
});

test('backfillPolarCustomers clamps limit and reports dry-run counts', async (t) => {
  let receivedLimit = null;

  t.mock.method(shared, 'ensureAdminUid', async () => {});
  t.mock.method(firestore, 'getFirestore', () => ({
    collection: () => ({
      where: () => ({
        limit(value) {
          receivedLimit = value;
          return {
            async get() {
              return {
                size: 2,
                docs: [{ id: 'user-a' }, { id: 'user-b' }],
              };
            },
          };
        },
      }),
    }),
  }));

  const result = await billing.backfillPolarCustomers.run({
    auth: { uid: 'admin-1' },
    data: { limit: 500, dryRun: true },
  });

  assert.equal(receivedLimit, 200);
  assert.deepEqual(result, {
    dryRun: true,
    scanned: 2,
    success: 2,
    failed: 0,
    failures: [],
  });
});

test('backfillPolarCustomers aggregates mixed success and failure results', async (t) => {
  t.mock.method(shared, 'ensureAdminUid', async () => {});
  t.mock.method(firestore, 'getFirestore', () => ({
    collection: () => ({
      where: () => ({
        limit() {
          return {
            async get() {
              return {
                size: 2,
                docs: [{ id: 'user-a' }, { id: 'user-b' }],
              };
            },
          };
        },
      }),
    }),
  }));
  t.mock.method(shared, 'getUserProfile', async (uid) => ({
    user: createUser({ providerCustomerId: '', email: `${uid}@example.com` }),
    userRef: { set: async () => {} },
  }));
  t.mock.method(shared, 'getPolarClient', () => ({
    customers: {
      async getExternal({ externalId }) {
        throw { statusCode: 404, message: `missing ${externalId}` };
      },
      async create({ externalId }) {
        if (externalId === 'user-b') {
          throw new Error('create failed');
        }

        return { id: `cust_${externalId}` };
      },
    },
  }));

  const result = await billing.backfillPolarCustomers.run({
    auth: { uid: 'admin-1' },
    data: { limit: 2, dryRun: false },
  });

  assert.equal(result.scanned, 2);
  assert.equal(result.success, 1);
  assert.equal(result.failed, 1);
  assert.deepEqual(result.failures, [{ uid: 'user-b', error: 'create failed' }]);
});
