# Release Operations Checklist

## Pre-Deploy

- [ ] Confirm target Firebase project and active CLI account.
- [ ] Confirm production domains and DNS are already configured.
- [ ] Confirm required secrets exist in production:
  - [ ] `OPENAI_API_KEY`
  - [ ] `POLAR_ACCESS_TOKEN`
  - [ ] `POLAR_WEBHOOK_SECRET`
- [ ] Confirm Polar checkout products/prices match the hard-coded plan IDs used by the frontend.
- [ ] Confirm Polar webhook endpoint is registered against the deployed functions URL.
- [ ] Confirm the intended production hosting model:
  - [ ] Static hosting only
  - [ ] SSR-capable hosting/runtime
- [ ] Confirm all must-fix items in `docs/release-readiness-audit.md` are resolved or explicitly waived.
- [ ] Run app build.
- [ ] Run functions build.

## Deploy

- [ ] Deploy Functions and Hosting with the approved Firebase project selected.
- [ ] Capture deployed Hosting URL and Functions region/endpoint references.
- [ ] Verify Firestore rules and indexes are current in production.

## Immediate Post-Deploy Smoke

- [ ] Open landing page and confirm primary navigation works.
- [ ] Verify login and signup still work.
- [ ] Verify authenticated dashboard route works.
- [ ] Create or edit a resume.
- [ ] Generate a cover letter.
- [ ] Verify paid upgrade flow can open checkout.
- [ ] Verify settings can open the customer portal for a paid user.
- [ ] Verify one entitlement sync after checkout success.

## Monitoring

- [ ] Review Functions logs for errors after deploy.
- [ ] Review billing and webhook logs for failed subscription sync events.
- [ ] Confirm no spike in unauthenticated, permission-denied, or internal callable failures.
- [ ] Confirm no broken-route or blank-page reports from smoke testers.

## Rollback Trigger

Rollback immediately if any of the following occurs:

- Authenticated users cannot reach the app shell.
- Resume save/edit flows fail for valid users.
- Checkout or portal session creation fails consistently.
- Entitlements do not sync after a successful payment.
- Deployed routing does not match the chosen hosting strategy.

## Rollback Steps

1. Revert to the previous known-good hosting/functions release.
2. Disable active release promotion or announcements.
3. Validate landing page, login, dashboard, and billing entry points on the restored version.
4. Review Functions and Hosting logs to identify the failed release change.
