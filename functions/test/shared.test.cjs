const test = require('node:test');
const assert = require('node:assert/strict');
const { HttpsError } = require('firebase-functions/v2/https');
const { getCurrentWindowKey } = require('./helpers.cjs');

const shared = require('../lib/shared.js');

test('normalizeSubscriptionStatus maps external statuses to app statuses', () => {
  assert.equal(shared.normalizeSubscriptionStatus('active'), 'active');
  assert.equal(shared.normalizeSubscriptionStatus('trialing'), 'active');
  assert.equal(shared.normalizeSubscriptionStatus('past_due'), 'past_due');
  assert.equal(shared.normalizeSubscriptionStatus('cancelled'), 'cancelled');
  assert.equal(shared.normalizeSubscriptionStatus('revoked'), 'cancelled');
  assert.equal(shared.normalizeSubscriptionStatus('unknown'), 'none');
});

test('resolvePlanFromProduct detects premium and pro tiers', () => {
  assert.equal(shared.resolvePlanFromProduct('Premium Monthly'), 'premium');
  assert.equal(shared.resolvePlanFromProduct('Pro Annual'), 'pro');
  assert.equal(shared.resolvePlanFromProduct('Starter'), 'free');
});

test('toNullableDate returns dates for valid values and null otherwise', () => {
  const now = new Date('2026-04-13T00:00:00.000Z');

  assert.equal(shared.toNullableDate(now), now);
  assert.equal(
    shared.toNullableDate('2026-04-13T00:00:00.000Z')?.toISOString(),
    '2026-04-13T00:00:00.000Z',
  );
  assert.equal(shared.toNullableDate('not-a-date'), null);
  assert.equal(shared.toNullableDate(undefined), null);
});

test('getAiUsageState resets usage outside the current window', () => {
  const usage = shared.getAiUsageState({
    plan: 'pro',
    aiUsageCount: 10,
    aiUsageWindowKey: '2020-01',
  });

  assert.equal(usage.used, 0);
  assert.equal(usage.windowKey, getCurrentWindowKey());
  assert.equal(usage.entitlements.monthlyAiLimit, 30);
});

test('assertAiQuotaAvailable throws when the plan limit has been reached', () => {
  assert.throws(
    () => shared.assertAiQuotaAvailable({
      plan: 'free',
      aiUsageCount: 3,
      aiUsageWindowKey: getCurrentWindowKey(),
    }),
    (error) => {
      assert.equal(error.code, 'resource-exhausted');
      assert.match(error.message, /Monthly AI limit reached/i);
      return true;
    },
  );
});

test('rethrowLoggedHttpsError preserves HttpsError instances', () => {
  const error = new HttpsError('permission-denied', 'Nope');

  assert.throws(
    () => shared.rethrowLoggedHttpsError('demo', error, 'fallback'),
    (received) => {
      assert.equal(received, error);
      return true;
    },
  );
});

test('rethrowLoggedHttpsError maps provider auth failures to failed-precondition', () => {
  assert.throws(
    () =>
      shared.rethrowLoggedHttpsError(
        'demo',
        { status: 401, message: 'invalid api key' },
        'fallback',
      ),
    (error) => {
      assert.equal(error.code, 'failed-precondition');
      assert.match(error.message, /OPENAI_API_KEY/i);
      return true;
    },
  );
});

test('rethrowLoggedHttpsError maps provider billing-related throttling to failed-precondition', () => {
  assert.throws(
    () =>
      shared.rethrowLoggedHttpsError(
        'demo',
        { statusCode: 429, message: 'Account is not active, billing disabled.' },
        'fallback',
      ),
    (error) => {
      assert.equal(error.code, 'failed-precondition');
      assert.match(error.message, /inactive/i);
      return true;
    },
  );
});

test('rethrowLoggedHttpsError maps provider 5xx responses to unavailable', () => {
  assert.throws(
    () =>
      shared.rethrowLoggedHttpsError('demo', { statusCode: 503, message: 'server error' }, 'x'),
    (error) => {
      assert.equal(error.code, 'unavailable');
      assert.match(error.message, /temporarily unavailable/i);
      return true;
    },
  );
});

test('rethrowLoggedHttpsError falls back to internal for unknown errors', () => {
  assert.throws(
    () => shared.rethrowLoggedHttpsError('demo', new Error('boom'), 'fallback message'),
    (error) => {
      assert.equal(error.code, 'internal');
      assert.match(error.message, /fallback message/i);
      return true;
    },
  );
});
