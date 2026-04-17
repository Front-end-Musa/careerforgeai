# Release Readiness Audit

## Baseline

- App build: `npm run build` passes.
- Functions build: `npm run build` in `functions/` passes.
- Existing worktree is dirty before this audit. Release work should not overwrite unrelated local changes.
- Current release target is the full exposed product, not an MVP subset.

## Current Release Status

Release is **not ready**. The repo has multiple must-fix blockers across product completeness, backend/frontend contract parity, and deployment configuration.

## Findings By Track

### Product Completeness

| Classification | Owner | Affected surface | Finding | User impact | Acceptance check |
| --- | --- | --- | --- | --- | --- |
| must fix before release | Product + Frontend | `application.routes.ts`, `interview-coach`, `linkedin` | `/application/interview-coach` and `/application/linkedin-optimizer` are routed pages but still render “Coming soon...” only. | Users can navigate to unfinished features in the shipped app. | Route is removed from shipping surface or replaced with production-ready functionality. |
| must fix before release | Product + Frontend | `src/app/pages/landing/pricing-plans/data/plan-options.ts` | Pricing still advertises `Resume tailoring (coming soon)` even though resume tailoring is present in the app. | Product messaging conflicts with shipped functionality and plan value. | Pricing copy matches actual capability and access rules. |
| can ship with mitigation | Product + Content | legal/contact/support surfaces | Contact flow exists, but support ownership/runbook is not documented in release materials. | Users may not know where unresolved billing or entitlement issues should go. | Release docs name the support channel and escalation path. |

### Reliability And Security

| Classification | Owner | Affected surface | Finding | User impact | Acceptance check |
| --- | --- | --- | --- | --- | --- |
| must fix before release | Frontend + Backend | `src/app/core/services/resume.service.ts`, `functions/src/index.ts` | Frontend resume CRUD still calls callable functions `createResume` and `updateResume`, but those exports are not present in the current functions file. | Resume save/update flows can fail against deployed functions due to missing backend endpoints. | Resume create/update use existing deployed contract or matching functions are implemented and deployed. |
| must fix before release | Backend + Frontend | `functions/src/index.ts`, `src/app/core/services/ai-agent.service.ts` | `tailorResumeToJob` does not check `request.auth?.uid`, unlike the other quota-gated AI callables. | Unauthenticated or inconsistent access to a paid AI feature is possible. | Tailor resume callable enforces the intended auth and plan rules and matches frontend gating. |
| must fix before release | Backend + Ops | `functions/src/index.ts` | Billing and webhook flows depend on `POLAR_ACCESS_TOKEN` and `POLAR_WEBHOOK_SECRET`, but production secret provisioning is not documented in release runbooks. | Checkout or entitlement sync can fail after deploy. | Release checklist includes required secrets and verification steps for each. |
| can ship with mitigation | Backend | `functions/src/index.ts` | Several callables use `invoker: "public"` and rely on explicit auth checks in code. | Security depends on code paths staying correct rather than a narrower invoker policy. | Callable auth expectations are reviewed and regression-tested before launch. |

### Performance

| Classification | Owner | Affected surface | Finding | User impact | Acceptance check |
| --- | --- | --- | --- | --- | --- |
| must fix before release | Frontend | app production bundle | Initial browser bundle is `1.49 MB`, exceeding the configured `1.20 MB` budget. | Slower first load and a release gate that already signals bundle regression. | Bundle is reduced under budget or budget is intentionally re-baselined with performance evidence. |
| can ship with mitigation | Frontend | `src/app/core/services/resume.service.ts`, dependency graph | CommonJS optimization bailouts remain from `jspdf`, `canvg`, and Firestore node/grpc dependencies. | Larger bundles and reduced optimization efficiency. | Dependency usage is reduced, deferred, or accepted with documented impact. |

### Operations And Deployment

| Classification | Owner | Affected surface | Finding | User impact | Acceptance check |
| --- | --- | --- | --- | --- | --- |
| must fix before release | Frontend + Ops | `project.json`, `firebase.json`, deployment model | App is built with SSR server output, but Firebase Hosting is configured to serve the static browser bundle via `index.html` rewrite only. The server output is not wired into hosting. | Expected SSR behavior is not what production serves; deployment intent is inconsistent. | Deployment strategy is made explicit: either pure static hosting or hosting integrated with server/runtime support. |
| must fix before release | Ops | Firebase project setup | No release checklist currently confirms project linkage, domain setup, function secrets, or webhook endpoint registration. | Deploy may succeed partially but break critical runtime flows. | A deploy checklist exists and is used in staging/production. |
| can ship with mitigation | DevEx | `nx` workspace | Nx Cloud emits a workspace auth warning during build. | Not user-facing, but noisy in CI and build logs. | Connect workspace or disable Nx Cloud integration intentionally. |

### Analytics And Support Readiness

| Classification | Owner | Affected surface | Finding | User impact | Acceptance check |
| --- | --- | --- | --- | --- | --- |
| must fix before release | Product + Ops | release operations | No documented rollback, post-deploy smoke process, or production monitoring checklist for functions, checkout, and webhook sync. | Failures after launch may be detected late and be slow to recover. | Release runbook defines rollback trigger, smoke steps, and monitored signals. |
| can ship with mitigation | Product + Ops | user support | Settings and checkout success pages mention retry/contact support, but no support workflow is documented in repo docs. | Users can hit dead ends after failed billing sync. | Support path is documented and linked from release materials. |

## Route Audit Summary

### Public Routes

- `/`
- `/auth/login`
- `/auth/signup`
- `/upgrade`
- `/checkouts/*`
- `/privacy-policy`
- `/terms-of-service`
- `/application/resume-generator`

### Authenticated App Routes

- `/application/dashboard`
- `/application/settings`
- `/application/resumes`
- `/application/resumes/:id/edit`
- `/application/resumes/:id/tailor`
- `/application/cover-letter`
- `/application/job-tracker`
- `/application/interview-coach`
- `/application/linkedin-optimizer`

### Route Risks

- Premium gating exists only for `job-tracker`; other advanced features rely on service-level enforcement.
- Placeholder routes remain addressable even if they are not in the sidebar.
- Resume generator is exposed at `/application/resume-generator` without auth while the main app area is auth-protected; this should remain an explicit product decision.

## Backend Contract Audit Summary

### Confirmed callable exports in `functions/src/index.ts`

- `generateResume`
- `generateCoverLetter`
- `tailorResumeToJob`
- `saveGeneratedResume`
- `downloadResume`
- `createCheckout`
- `createPortalSession`
- `syncEntitlements`
- `echo`

### Contract mismatches and risks

- Frontend `ResumeService` still expects callable `createResume`.
- Frontend `ResumeService` still expects callable `updateResume`.
- Tailoring callable does not currently follow the same explicit auth pattern as the other AI callables.
- Cover letter generation enforces `resumeId` and `resumeLabel`; frontend must always provide both or generation fails.

## Firebase And Environment Audit Summary

- `firebase.json` deploys Functions and static Hosting only.
- Firestore rules enforce owner scoping for `users`, `resumes`, `coverLetters`, `applications`, and premium-only `jobs`.
- Production frontend Firebase config is committed in `src/environments/environment.prod.ts`.
- Required runtime secrets observed in functions source:
  - `OPENAI_API_KEY`
  - `POLAR_ACCESS_TOKEN`
  - `POLAR_WEBHOOK_SECRET`

## Recommended Release Sequence

1. Fix callable contract parity for resume CRUD.
2. Decide and implement the actual production deployment model for SSR vs static hosting.
3. Remove or implement incomplete routes.
4. Finish billing verification and document secret/webhook setup.
5. Rework or re-baseline bundle/performance warnings.
6. Run the smoke matrix in `docs/release-smoke-matrix.md`.
7. Execute the deployment and rollback checklist in `docs/release-operations-checklist.md`.
