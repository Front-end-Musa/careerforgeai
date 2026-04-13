# Firebase Functions Testing

## Verification Order
Run the functions checks in this order from the repo root:

```powershell
npm run verify:functions
```

The dedicated emulator automation uses [firebase.testing.json](/C:/Users/frontend_coder/Documents/projects/ai-job-seek-helper/app/careerforgeai/firebase.testing.json) so it does not have to share the default local emulator ports.

That sequence runs:

1. `npm run build`
2. `npm run lint:functions`
3. `npm run build:functions`
4. `npm run test:functions`
5. `npm run test:functions:emulator`
6. `npm run smoke:functions:emulator`

## Test Layers
- `functions/test/*.test.cjs`: unit and callable-handler tests with mocked OpenAI and Polar dependencies
- `functions/test/*.emulator.cjs`: Firestore emulator tests for real document reads and writes
- `scripts/functions-callable-smoke.mjs`: lightweight callable smoke checks through the Functions emulator

Covered exports from `functions/src/index.ts`:

- AI callables: `generateResume`, `generateCoverLetter`, `tailorResumeToJob`, `downloadResume`, `echo`
- Billing callables: `ensurePolarCustomer`, `createCheckout`, `createPortalSession`, `deletePolarCustomer`, `syncEntitlements`, `backfillPolarCustomers`
- HTTP endpoint: `polarWebhook`

## Local Prerequisites
- Use Node 22 in `functions`
- Install dependencies in the repo root and in `functions`
- For deployed smoke checks, verify these secrets exist in the target Firebase project:
  - `OPENAI_API_KEY`
  - `POLAR_ACCESS_TOKEN`
  - `POLAR_WEBHOOK_SECRET`

## Troubleshooting
Start with `firebase-debug.log` if emulator boot or function discovery fails. The current repo log already shows a prior load timeout, so check module initialization first:

- Confirm `functions/src/shared.ts` does not block at import time
- Confirm the local runtime matches `functions/package.json` (`node: 22`)
- Confirm Firebase can read the functions codebase from `functions/`
- Confirm the emulator is not trying to reach production services unintentionally

If emulator tests fail:

- Confirm `FIRESTORE_EMULATOR_HOST` is set during `test:functions:emulator`
- Confirm the Firestore emulator is running and the seeded docs exist
- Confirm `GCLOUD_PROJECT` matches `ai-job-seeker-ed1d3`

If callable tests fail:

- Check whether the failure happened before provider access: auth, payload validation, missing user docs, quota checks
- Check whether `rethrowLoggedHttpsError` translated an external error into the observed `HttpsError`
- Reproduce provider-specific failures with mocks before changing function logic

If billing tests fail:

- Inspect Firestore `users` writes for `providerCustomerId`, `providerSubscriptionId`, `providerVariantId`, `plan`, and `subscriptionStatus`
- Re-run the failing case with mocked Polar 404, 422, 429, and 5xx responses

If webhook tests fail:

- Validate `rawBody` is present
- Validate `webhook-id`, `webhook-signature`, and `webhook-timestamp` headers are present
- Re-check the exact `event.type` branch handled in `polarWebhook`

If deployed smoke checks fail:

- Run `npm --prefix functions run logs`
- Check deployed secrets and provider account status before changing code
- Use a non-production Firebase project before invoking destructive billing paths such as customer deletion
