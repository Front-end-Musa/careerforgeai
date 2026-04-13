import { FirebaseError } from 'firebase/app';

const callableErrorMessages: Record<string, string> = {
  'functions/invalid-argument': 'The request data is invalid. Please review your resume details and try again.',
  'functions/unauthenticated': 'Please log in to generate resume content.',
  'functions/permission-denied': 'Your plan does not include this action.',
  'functions/resource-exhausted': 'You reached the AI generation limit for your current plan.',
  'functions/failed-precondition':
    'Add more resume details before generating content with AI.',
  'functions/internal': 'Resume generation is temporarily unavailable. Please try again shortly.',
  'functions/unavailable': 'Resume generation is temporarily unavailable. Please try again shortly.',
};

export function toCallableError(error: unknown, fallbackMessage: string): Error {
  if (error instanceof FirebaseError) {
    const backendMessage = extractCallableMessage(error.message);
    return new Error(backendMessage ?? callableErrorMessages[error.code] ?? fallbackMessage);
  }

  if (error instanceof Error) {
    return new Error(error.message || fallbackMessage);
  }

  if (typeof error === 'string' && error.trim()) {
    return new Error(error);
  }

  return new Error(fallbackMessage);
}

function extractCallableMessage(message: string | undefined) {
  const trimmed = message?.trim();
  if (!trimmed) {
    return null;
  }

  const parts = trimmed.split(':');
  const candidate = parts[parts.length - 1]?.trim();

  if (!candidate) {
    return trimmed;
  }

  if (candidate.toLowerCase() === 'internal') {
    return null;
  }

  return candidate;
}
