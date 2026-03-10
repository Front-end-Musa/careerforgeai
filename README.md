# ResumeCrafts AI (AI Job Seek Helper)

ResumeCrafts AI is an Angular + Firebase application for managing a full job-search workflow, including AI-assisted resume and cover letter generation, resume editing, and application tracking.

## Key Features

- Landing site with SEO metadata and legal pages
- Firebase Auth login and signup flows
- Resume builder with multi-step form, live preview, and PDF export
- AI-assisted resume content generation (summary, experience, education)
- Cover letter generator with tone selection and clipboard copy
- Job tracker with kanban-style drag-and-drop columns persisted in local storage
- Dashboard, settings, and marketing/pricing sections

## Architecture

- Frontend: Angular 21 standalone components with SSR build output
- State: NgRx store + effects for auth, resumes, cover letters, and billing
- UI: Angular Material, CDK DragDrop, and custom UI components
- Backend: Firebase Auth, Firestore, Functions, Hosting
- AI: OpenAI Chat Completions (gpt-4o) called from Cloud Functions

## Project Structure

```text
.
|- src/                  # Angular app (standalone components)
|  |- app/
|  |  |- core/           # services, interceptors, interfaces, prompts
|  |  |- pages/          # landing, auth, application features
|  |- environments/      # Firebase configs
|- functions/            # Firebase Cloud Functions (TypeScript)
|- public/               # static assets copied to build output
|- firebase.json         # emulator + hosting config
```

## Prerequisites

- Node.js 22.x (matches Cloud Functions runtime)
- npm
- Firebase CLI (`npm i -g firebase-tools`)

## Installation

```bash
npm install
cd functions && npm install && cd ..
```

## Environment and Secrets

Frontend Firebase config is in:

- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`

Set the OpenAI key for Functions:

```bash
firebase functions:secrets:set OPENAI_API_KEY
```

## Running Locally

### 1) Start the Angular dev server

```bash
npm start
```

App runs at `http://localhost:4200`.

### 2) Start Firebase emulators (functions, firestore, hosting, UI)

In another terminal:

```bash
firebase emulators:start
```

Configured emulator ports:

- Hosting: `5000`
- Functions: `5001`
- Firestore: `8080`
- Emulator UI: `4000`

The Angular app connects to the Functions emulator when running on `localhost`.

## Build and SSR

```bash
npm run build
npm run serve:ssr:application
```

SSR output is generated under `dist/application/`.

## Tests

```bash
npm test
```

## Functions (from `functions/`)

```bash
npm run lint
npm run build
npm run serve
npm run deploy
npm run logs
```

## Deployment

Deploy web hosting and functions with Firebase CLI:

```bash
firebase deploy
```

## Data Storage

- Firestore collections: `resumes`, `coverLetters`
- Local storage: `jobs-track` for the job tracker kanban state

## Notes and Gaps

- Billing is stubbed. `BillingService` throws a configuration error by design.
- Interview Coach, LinkedIn Optimizer, and Resume Tailor routes are currently placeholders.
- The Functions `generateCoverLetter` handler only reads `resumeText` today, even though the UI submits job description, company, position, and tone.
- Only the Functions emulator is wired in the frontend. Auth/Firestore emulators are not connected unless added.
