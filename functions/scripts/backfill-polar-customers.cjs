/* eslint-disable no-console */
const admin = require('firebase-admin');
const { Polar } = require('@polar-sh/sdk');

if (!process.env.POLAR_ACCESS_TOKEN) {
  console.error('POLAR_ACCESS_TOKEN is required.');
  process.exit(1);
}

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();
const polar = new Polar({ accessToken: process.env.POLAR_ACCESS_TOKEN });
const limit = Number.isFinite(Number(process.env.BACKFILL_LIMIT))
  ? Math.max(1, Math.min(500, Math.floor(Number(process.env.BACKFILL_LIMIT))))
  : 200;
const dryRun = process.env.BACKFILL_DRY_RUN === 'true';

async function ensureCustomer(uid, userData) {
  if (typeof userData.providerCustomerId === 'string' && userData.providerCustomerId.trim()) {
    return { status: 'already_linked', customerId: userData.providerCustomerId };
  }

  const email = `${userData.email ?? ''}`.trim().toLowerCase();
  if (!email) {
    throw new Error('Missing email on user profile');
  }

  let customer;
  try {
    customer = await polar.customers.getExternal({ externalId: uid });
  } catch (error) {
    if (
      !(
        typeof error === 'object' &&
        error !== null &&
        'statusCode' in error &&
        error.statusCode === 404
      )
    ) {
      throw error;
    }

    customer = await polar.customers.create({
      externalId: uid,
      email,
      name: `${userData.name ?? ''}`.trim() || null,
    });
  }

  if (!dryRun) {
    await db.collection('users').doc(uid).set(
      {
        providerCustomerId: customer.id,
        entitlementsUpdatedAt: Date.now(),
      },
      { merge: true },
    );
  }

  return { status: dryRun ? 'linked_dry_run' : 'linked', customerId: customer.id };
}

async function run() {
  const snapshot = await db
    .collection('users')
    .where('providerCustomerId', '==', '')
    .limit(limit)
    .get();

  const summary = {
    scanned: snapshot.size,
    linked: 0,
    alreadyLinked: 0,
    failed: 0,
  };

  for (const doc of snapshot.docs) {
    try {
      const result = await ensureCustomer(doc.id, doc.data());
      if (result.status === 'already_linked') {
        summary.alreadyLinked += 1;
      } else {
        summary.linked += 1;
      }
      console.log(`[OK] ${doc.id}: ${result.status}`);
    } catch (error) {
      summary.failed += 1;
      console.error(
        `[FAIL] ${doc.id}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  console.log(JSON.stringify({ dryRun, ...summary }, null, 2));
}

run().catch((error) => {
  console.error('Backfill failed:', error);
  process.exit(1);
});
