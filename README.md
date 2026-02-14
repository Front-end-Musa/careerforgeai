# AI Job Seek Helper

AI Job Seek Helper is an Angular application for managing a job search workflow with AI-assisted content generation.

## Features

- Landing page and authentication (Firebase Auth)
- Resume management and editing
- AI-assisted cover letter generation
- Job application tracker (kanban-style states)
- Dashboard and settings pages
- Firebase-backed data storage (Firestore)

## Tech Stack

- Angular 21 (standalone components, SSR build target)
- NgRx (state management for auth, resumes, cover letters)
- Angular Material + CDK
- Firebase (Auth, Firestore, Cloud Functions, Hosting)
- OpenAI API (used from Firebase Functions)

## Project Structure

```text
.
|- src/                 # Angular app
|  |- app/
|  |  |- core/          # services, interfaces, interceptors
|  |  |- pages/         # landing, auth, application modules/pages
|- functions/           # Firebase Cloud Functions (TypeScript)
|- public/              # static assets copied to build output
|- firebase.json        # emulators + hosting/functions config
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

Frontend Firebase config is currently in:

- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`

Cloud Functions use Firebase Secrets for OpenAI:

```bash
firebase functions:secrets:set OPENAI_API_KEY
```

## Running Locally

### 1) Start Angular app

```bash
npm start
```

App runs at `http://localhost:4200`.

### 2) Start Firebase emulators (functions/firestore/hosting/ui)

In another terminal:

```bash
firebase emulators:start
```

Configured emulator ports:

- Hosting: `5000`
- Functions: `5001`
- Firestore: `8080`
- Emulator UI: `4000`

The Angular app is configured to call Functions emulator at `localhost:5001`.

## Build

```bash
npm run build
```

SSR output is generated under `dist/application/`.

## Run SSR Build

```bash
npm run serve:ssr:application
```

## Tests

```bash
npm test
```

## Functions Commands

From `functions/`:

```bash
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
