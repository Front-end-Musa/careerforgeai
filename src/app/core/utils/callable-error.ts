import { FirebaseError } from 'firebase/app';

function getFirebaseMessage(error: FirebaseError, fallback: string) {
  const message = error.message
    .replace(/^Firebase:\s*/i, '')
    .replace(/\s*\(functions\/[a-z-]+\)\.?$/i, '')
    .trim();

  return message || fallback;
}

export function mapCallableError(error: unknown) {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'functions/unauthenticated':
        return new Error('Please log in to continue.');
      case 'functions/invalid-argument':
        return new Error(
          getFirebaseMessage(error, 'Please complete the required fields and try again.'),
        );
      case 'functions/permission-denied':
        return new Error('Your plan does not include this feature.');
      case 'functions/resource-exhausted':
        return new Error('You reached your monthly AI limit for your current plan.');
      case 'functions/failed-precondition':
        return new Error(
          getFirebaseMessage(
            error,
            'A required account or resume prerequisite is missing. Please try again shortly.',
          ),
        );
      default:
        return new Error(error.message || `Request failed (${error.code}).`);
    }
  }

  if (error instanceof Error) {
    return error;
  }

  return new Error('Request failed due to an unknown error.');
}
