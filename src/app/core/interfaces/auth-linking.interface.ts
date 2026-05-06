export type AuthProviderId = 'password' | 'google.com' | 'github.com';

export interface AuthConflictState {
  email: string;
  attemptedProvider: AuthProviderId;
  existingProviders: AuthProviderId[];
  message: string;
  startedAt: number;
  expiresAt: number;
  credentialAvailable: boolean;
}

export interface AuthLoginResult {
  user: import('./user.interface').AppUser;
  token: string;
}
