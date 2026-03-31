import { readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();

async function read(relativePath) {
  return readFile(path.join(ROOT, relativePath), 'utf8');
}

function uniq(items) {
  return [...new Set(items)].sort((a, b) => a.localeCompare(b));
}

function extractCallableNames(source) {
  const matches = [
    ...source.matchAll(/httpsCallable(?:<[^>]*>)?\([^,]+,\s*['"`]([^'"`]+)['"`]\)/g),
    ...source.matchAll(/callable(?:<[^>]*>)?\(\s*['"`]([^'"`]+)['"`]\s*\)/g),
  ];
  return uniq(matches.map((m) => m[1]));
}

function extractFunctionExports(source) {
  const matches = [...source.matchAll(/export const\s+([A-Za-z0-9_]+)\s*=\s*onCall\(/g)];
  return uniq(matches.map((m) => m[1]));
}

function extractUrls(source) {
  const matches = [...source.matchAll(/https?:\/\/[^\s'"`)+}]+/g)];
  return uniq(matches.map((m) => m[0]));
}

function asMarkdownList(items) {
  if (!items.length) {
    return '- (none)';
  }
  return items.map((item) => `- \`${item}\``).join('\n');
}

function classifyUrl(url) {
  if (url.includes('formspree.io') || url.includes('trickledb.com')) return 'third-party';
  if (url.includes('firebaseapp.com') || url.includes('googleapis.com')) return 'firebase';
  if (url.includes('resume-crafts.com')) return 'first-party';
  return 'other';
}

async function main() {
  const appConfig = await read('src/app/app.config.ts');
  const billingService = await read('src/app/core/services/billing.service.ts');
  const aiAgentService = await read('src/app/core/services/ai-agent.service.ts');
  const contactComponent = await read('src/app/pages/landing/contact/contact.ts');
  const functionsIndex = await read('functions/src/index.ts');
  const trickleDbService = await read('src/app/core/services/trickle-db.service.ts');
  const smokeScript = await read('scripts/functions-callable-smoke.mjs');

  const frontendCallableNames = extractCallableNames(
    [appConfig, billingService, aiAgentService, contactComponent].join('\n'),
  );
  const functionExports = extractFunctionExports(functionsIndex);

  const missingInFunctions = frontendCallableNames.filter((name) => !functionExports.includes(name));
  const notUsedByFrontend = functionExports.filter((name) => !frontendCallableNames.includes(name));

  const urls = uniq(
    extractUrls(
      [appConfig, billingService, aiAgentService, contactComponent, trickleDbService, functionsIndex].join(
        '\n',
      ),
    ),
  );

  const byClass = {
    firebase: urls.filter((url) => classifyUrl(url) === 'firebase'),
    firstParty: urls.filter((url) => classifyUrl(url) === 'first-party'),
    thirdParty: urls.filter((url) => classifyUrl(url) === 'third-party'),
    other: urls.filter((url) => classifyUrl(url) === 'other'),
  };
  const smokeCheckNames = uniq(
    [...smokeScript.matchAll(/name:\s*['"`]([^'"`]+)['"`]/g)].map((m) => m[1]),
  );

  const runtimeMatrix = [
    '| Environment | Frontend Origin | Functions Target | Region | Auth Expectations |',
    '| --- | --- | --- | --- | --- |',
    '| Local dev | `http://localhost:*` | Emulator (`connectFunctionsEmulator(..., 5001)`) | `us-central1` | `createCheckout`, `createPortalSession`, `downloadResume` should reject unauthenticated |',
    '| Preview/Prod | `https://resume-crafts.com` | Deployed Firebase callable endpoint | `us-central1` | Auth-dependent callables require signed-in user/token |',
  ].join('\n');

  const report = [
    '# CORS Audit Report',
    '',
    '## Frontend Callable Names',
    asMarkdownList(frontendCallableNames),
    '',
    '## Functions onCall Exports',
    asMarkdownList(functionExports),
    '',
    '## Callable Name Parity',
    `- Missing in functions exports: ${missingInFunctions.length ? missingInFunctions.map((s) => `\`${s}\``).join(', ') : '(none)'}`,
    `- Exported but not referenced by frontend callables: ${notUsedByFrontend.length ? notUsedByFrontend.map((s) => `\`${s}\``).join(', ') : '(none)'}`,
    '',
    '## Endpoint Inventory',
    '### First-party',
    asMarkdownList(byClass.firstParty),
    '',
    '### Firebase',
    asMarkdownList(byClass.firebase),
    '',
    '### Third-party',
    asMarkdownList(byClass.thirdParty),
    '',
    '### Other',
    asMarkdownList(byClass.other),
    '',
    '## Runtime Matrix',
    runtimeMatrix,
    '',
    '## Smoke Script',
    '- Command: `npm run smoke:functions:local`',
    `- Declared checks: ${smokeCheckNames.map((s) => `\`${s}\``).join(', ') || '(none detected)'}`,
  ].join('\n');

  console.log(report);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
