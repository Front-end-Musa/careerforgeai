# Release Smoke Matrix

## Build Gates

- [ ] `npm run build`
- [ ] `npm run build` in `functions/`

## Landing And Marketing

| Area | Scenario | Expected result |
| --- | --- | --- |
| Landing | Open `/` on desktop and mobile widths | Hero, features, pricing, FAQ, and footer render without layout breakage. |
| SEO | Inspect page title/meta/canonical on `/` | Values match `app.routes.ts` and production domain. |
| Legal | Open `/privacy-policy` and `/terms-of-service` | Pages load and copy is complete. |
| Contact | Submit valid contact form | Success message appears and Formspree receives request. |
| Contact | Submit while network fails | User sees friendly error state. |

## Authentication

| Area | Scenario | Expected result |
| --- | --- | --- |
| Signup | Create new account | User account is created and redirected into app flow. |
| Login | Log in with valid credentials | User enters app successfully. |
| Guarding | Open `/application/dashboard` while logged out | User is redirected to login. |
| Token refresh | Refresh page on authenticated route | Session is preserved and app state reloads correctly. |

## Resume Flows

| Area | Scenario | Expected result |
| --- | --- | --- |
| Resume list | Load `/application/resumes` as existing user | Existing resumes render in descending date order. |
| Resume create | Create a manual resume | Resume saves successfully and appears in list. |
| Resume edit | Edit an existing resume | Changes persist after refresh. |
| Resume AI | Generate summary/experience/education/full content | Generated content fills the expected fields and error states are handled. |
| Resume tailoring | Tailor a resume with valid job description | Tailored output is returned and can be saved as a new resume. |
| PDF export | Export a resume to PDF | PDF downloads and layout is usable across page breaks. |
| Access limits | Attempt restricted paid action on free plan | User is redirected into the upgrade flow with a clear message. |

## Cover Letters

| Area | Scenario | Expected result |
| --- | --- | --- |
| Cover letter create | Generate from a selected resume and valid job details | Letter is generated and persisted in Firestore. |
| Cover letter history | Reload page after generation | Saved letter remains accessible. |
| Validation | Omit job description or resume selection | User sees validation feedback before backend call. |
| Quota | Exceed cover letter limit for plan | Friendly quota message is shown. |

## Job Tracker

| Area | Scenario | Expected result |
| --- | --- | --- |
| Premium access | Open `/application/job-tracker` as premium user | Board loads successfully. |
| Free access | Open `/application/job-tracker` as free user | User is redirected to settings/upgrade path. |
| CRUD | Add, edit, move, and delete jobs | Changes persist after refresh. |

## Billing And Entitlements

| Area | Scenario | Expected result |
| --- | --- | --- |
| Upgrade page | Open `/upgrade` with plan recommendation | Correct plan is preselected and copy matches access reason. |
| Checkout | Start checkout for Pro and Premium | Hosted checkout URL is returned and redirects correctly. |
| Success sync | Open checkout success route after completed purchase | Entitlements sync and user gains paid access. |
| Portal | Open customer portal from settings | Portal URL resolves and opens correctly. |
| Gating | Paid-only resume capabilities after upgrade | Access changes immediately after sync. |
| Failure | Billing provider or sync failure | User sees a recovery path, not a blank/broken state. |

## Deployment And Runtime

| Area | Scenario | Expected result |
| --- | --- | --- |
| Hosting | Open key routes on deployed environment | Routes resolve as intended for the chosen hosting strategy. |
| Functions | Run callable smoke checks against deployed backend | AI, billing, and entitlement callables respond correctly. |
| Firestore | Resume, cover letter, and job data read/write on deployed app | Security rules allow valid access and deny invalid access. |
| Webhook | Send or verify a Polar webhook event | Subscription state updates correctly in Firestore. |

## Sign-Off

- [ ] Product sign-off
- [ ] Frontend sign-off
- [ ] Backend sign-off
- [ ] Ops sign-off
