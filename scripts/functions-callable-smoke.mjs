import { initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY ?? 'AIzaSyAvJWdqhgPO2gqxPmvRhjzj0xK8ay0hp_8',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? 'ai-job-seeker-ed1d3.firebaseapp.com',
  projectId: process.env.FIREBASE_PROJECT_ID ?? 'ai-job-seeker-ed1d3',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? 'ai-job-seeker-ed1d3.firebasestorage.app',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? '987943610256',
  appId: process.env.FIREBASE_APP_ID ?? '1:987943610256:web:5146c6fb9364d3aef37515',
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, 'us-central1');

const shouldUseEmulator =
  process.argv.includes('--emulator') ||
  (!process.argv.includes('--deployed') && process.env.USE_FUNCTIONS_EMULATOR !== 'false');

if (shouldUseEmulator) {
  const emulatorHost = process.env.FUNCTIONS_EMULATOR_HOST ?? '127.0.0.1';
  const emulatorPort = Number(process.env.FUNCTIONS_EMULATOR_PORT ?? 5001);
  connectFunctionsEmulator(functions, emulatorHost, emulatorPort);
  console.log(`[INFO] Using Functions emulator at ${emulatorHost}:${emulatorPort}`);
} else {
  console.log('[INFO] Using deployed Functions in us-central1');
}

const checks = [
  { name: 'syncEntitlements', data: undefined, expectedCodes: ['functions/unauthenticated'] },
  {
    name: 'createResume',
    data: { resume: { templateId: 'basic', personalInfo: { fullName: 'Smoke Test' } } },
    expectedCodes: ['functions/unauthenticated'],
  },
  {
    name: 'updateResume',
    data: { resumeId: 'demo-resume-id', changes: { summary: 'Smoke test update' } },
    expectedCodes: ['functions/unauthenticated'],
  },
  { name: 'downloadResume', data: { resumeId: 'demo-resume-id' }, expectedCodes: ['functions/unauthenticated'] },
  { name: 'echo', data: { text: 'smoke' }, expectedValue: 'smoke' },
];

let failures = 0;

for (const check of checks) {
  const fn = httpsCallable(functions, check.name);

  try {
    const response = await fn(check.data);
    const responseText = response?.data?.text;

    if (check.expectedValue !== undefined && responseText !== check.expectedValue) {
      failures += 1;
      console.error(
        `[FAIL] ${check.name}: expected text "${check.expectedValue}" but got "${responseText}"`,
      );
      continue;
    }

    console.log(`[PASS] ${check.name}: callable request succeeded`);
  } catch (error) {
    const code = typeof error === 'object' && error !== null && 'code' in error ? error.code : 'unknown';
    const message =
      typeof error === 'object' && error !== null && 'message' in error ?
        String(error.message) :
        'Unknown error';

    if (check.expectedCodes?.includes(String(code))) {
      console.log(`[PASS] ${check.name}: expected callable error (${code})`);
      continue;
    }

    failures += 1;
    console.error(`[FAIL] ${check.name}: unexpected error code=${code} message=${message}`);
  }
}

if (failures > 0) {
  console.error(`Smoke checks failed: ${failures}`);
  process.exit(1);
}

console.log('All callable smoke checks passed.');
