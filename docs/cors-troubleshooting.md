# CORS Troubleshooting Runbook

This runbook prioritizes CORS troubleshooting in this order:

1. Frontend -> Firebase Functions
2. Frontend -> third-party APIs (Formspree, TrickleDB)
3. Static assets/fonts/PDF resources

## Quick Commands

1. Build inventory and callable parity:

```bash
npm run cors:audit
```

2. Probe third-party endpoint CORS headers:

```bash
npm run cors:probe:thirdparty
```

3. Validate callable behavior in local emulator:

```bash
npm run smoke:functions:local
```

## Runtime Matrix

| Environment | Frontend Origin | Functions Target | Region | Auth Expectations |
| --- | --- | --- | --- | --- |
| Local dev | `http://localhost:*` | Emulator (`connectFunctionsEmulator(..., 5001)`) | `us-central1` | `createCheckout`, `createPortalSession`, `downloadResume` must return unauthenticated when logged out |
| Preview/Prod | `https://resume-crafts.com` | Deployed callable endpoint | `us-central1` | Auth-dependent callables require signed-in user/token |

## Evidence Table Template

Capture one row per failing request.

| Timestamp | Environment | Origin | Request URL | Method | Status | ACAO | ACAM | ACAH | Credentials | Console Error | Classification | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-03-25T00:00:00Z | local | `http://localhost:4200` | `...` | `POST` | `...` | `...` | `...` | `...` | `...` | `...` | `function missing` | `...` |

Field meaning:
- `ACAO`: `access-control-allow-origin`
- `ACAM`: `access-control-allow-methods`
- `ACAH`: `access-control-allow-headers`

## Classification Rules

Use exactly one classification per failing row:

- `function missing`
- `auth/app-check rejected`
- `wrong region/project`
- `network/preflight`
- `actual CORS policy issue`

## Firebase Functions Flow

1. Confirm callable name parity between frontend and `functions/src/index.ts`.
2. Confirm all callables use Firebase SDK invocation (`httpsCallable`) and the app-level configured Functions instance.
3. Verify local requests are routed to emulator and hosted requests to deployed functions in `us-central1`.
4. Re-run the same call logged-out and logged-in to separate auth rejection from transport/CORS failures.

## Third-Party Flow

1. Use `npm run cors:probe:thirdparty` and collect response headers.
2. If a third-party endpoint does not allow your production origin, route it through first-party Firebase callable/proxy.
3. Do not rely on browser-side CORS workarounds for blocked third-party origins.

## Static Asset/Font/PDF Flow

1. In DevTools network, inspect fonts/images used in pages and PDF export paths.
2. If external hosts do not return CORS-allowing headers, host assets under first-party origin.
3. Re-test with cache disabled to avoid stale CORS metadata.

## CI/Pre-Deploy Checklist

1. `npm test -- --watch=false --browsers=ChromeHeadless` (known unrelated failures are tracked separately).
2. `npm run build` (frontend).
3. `npm run build` in `functions/`.
4. `npm run smoke:functions:local` against emulator before deploy.
