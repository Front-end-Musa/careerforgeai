const test = require('node:test');
const assert = require('node:assert/strict');

const billing = require('../lib/billing.js');
const shared = require('../lib/shared.js');
const { getFirestore } = require('firebase-admin/firestore');

const emulatorOnly = process.env.FIRESTORE_EMULATOR_HOST ? test : test.skip;

function uniqueId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

emulatorOnly('[emulator] syncEntitlements writes latest subscription state to Firestore', async (t) => {
  const db = getFirestore();
  const uid = uniqueId('billing-user');

  await db.collection('users').doc(uid).set({
    email: `${uid}@example.com`,
    providerCustomerId: 'cust_existing',
    plan: 'free',
  });

  t.mock.method(shared, 'getPolarClient', () => ({
    customers: {
      async getStateExternal() {
        return {
          id: 'cust_existing',
          activeSubscriptions: [
            {
              id: 'sub_old',
              productId: 'prod_old',
              status: 'active',
              currentPeriodEnd: new Date('2026-05-01T00:00:00.000Z'),
            },
            {
              id: 'sub_new',
              productId: 'prod_new',
              status: 'trialing',
              currentPeriodEnd: new Date('2026-06-01T00:00:00.000Z'),
            },
          ],
        };
      },
    },
    subscriptions: {
      async get({ id }) {
        assert.equal(id, 'sub_new');
        return {
          product: {
            name: 'Premium Monthly',
          },
        };
      },
    },
  }));

  const result = await billing.syncEntitlements.run({
    auth: { uid },
    data: {},
  });

  const snapshot = await db.collection('users').doc(uid).get();

  assert.equal(result.plan, 'premium');
  assert.equal(result.subscriptionStatus, 'active');
  assert.equal(snapshot.data().providerSubscriptionId, 'sub_new');
  assert.equal(snapshot.data().providerVariantId, 'prod_new');
});
