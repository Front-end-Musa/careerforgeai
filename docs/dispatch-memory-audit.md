# Dispatch and Memory Audit Matrix

## Auth
| Action | Dispatch Owner | Effect Consumer | Idempotent | Repeat Status |
| --- | --- | --- | --- | --- |
| `initUser` | `App.ngOnInit`, forced refresh in resumes entitlement sync | `AuthEffects.initUserEffect` | Yes | Duplicate route bootstraps are a bug; forced refresh is expected |
| `loginUser` | auth facade from login screen | `AuthEffects.loginEffect` | No | Repeats should be prevented by UI |
| `registerUser` | auth facade from signup screen | `AuthEffects.signupEffect` | No | Repeats should be prevented by UI |
| `logout` | auth facade | `AuthEffects.logoutEffect` | Yes | Repeats are harmless but unnecessary |

## Resumes
| Action | Dispatch Owner | Effect Consumer | Idempotent | Repeat Status |
| --- | --- | --- | --- | --- |
| `loadResumes` | guarded `ResumesFacade.ensureLoaded()` | `ResumeEffects.loadResumes` | Yes | Nested component duplicates were a bug |
| `saveResume` | resume create/edit flows | `ResumeEffects.saveResumeEffect` | No | Repeats should be ignored while saving |
| `tailorResume` | tailor flow only | `ResumeEffects.tailorResumeEffect` | No | Repeats should be ignored while tailoring |
| `deleteResume` | resume card | `ResumeEffects.deleteResumeEffect` | No | Repeats should be ignored while deleting |

## Jobs
| Action | Dispatch Owner | Effect Consumer | Idempotent | Repeat Status |
| --- | --- | --- | --- | --- |
| `loadJobs` | guarded `JobsFacade.ensureLoaded()` | `JobsEffects.loadJobs$` | Yes | Duplicate init loads were a bug |
| `addJob` / `updateJob` / `moveJob` / `deleteJob` | job tracker and job card | corresponding `JobsEffects` handler | No | Repeats should be ignored while saving |

## Cover Letters
| Action | Dispatch Owner | Effect Consumer | Idempotent | Repeat Status |
| --- | --- | --- | --- | --- |
| `loadAllCoverLetters` | guarded `CoverLetterFacade.ensureLoaded()` | `CoverLetterEffects.getCoverLettersEffect` | Yes | Repeat loads should usually be skipped |
| `generateCoverLetter` | cover-letter form submit | `CoverLetterEffects.generateCoverLetterEffect` | No | Repeats should be ignored while generating |
| `deleteCoverLetter` | cover-letter facade consumers | `CoverLetterEffects.deleteCoverLetterEffect` | No | Repeats should be ignored while deleting |

## Billing
| Action | Dispatch Owner | Effect Consumer | Idempotent | Repeat Status |
| --- | --- | --- | --- | --- |
| `startCheckout` | pricing facade | `BillingEffects.startCheckoutEffect` | No | Repeats should be ignored to avoid duplicate checkout sessions |
