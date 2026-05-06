import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthCredential } from '@angular/fire/auth';
import { AuthConflictState, AuthProviderId } from '../interfaces/auth-linking.interface';

const STORAGE_KEY = 'careerforgeai.authProviderConflict';
const CONFLICT_TTL_MS = 10 * 60 * 1000;

@Injectable({
  providedIn: 'root',
})
export class AuthLinkingService {
  private platformId = inject(PLATFORM_ID);
  private pendingCredential: AuthCredential | null = null;
  private pendingEmail: string | null = null;
  private pendingProvider: AuthProviderId | null = null;

  storeConflict(
    email: string,
    attemptedProvider: AuthProviderId,
    existingProviders: AuthProviderId[],
    credential: AuthCredential | null,
  ): AuthConflictState {
    const now = Date.now();
    this.pendingCredential = credential;
    this.pendingEmail = email;
    this.pendingProvider = attemptedProvider;

    const conflict: AuthConflictState = {
      email,
      attemptedProvider,
      existingProviders,
      message: this.buildConflictMessage(attemptedProvider),
      startedAt: now,
      expiresAt: now + CONFLICT_TTL_MS,
      credentialAvailable: credential !== null,
    };

    this.persistConflict({ ...conflict, credentialAvailable: false });
    return conflict;
  }

  restoreConflict(): AuthConflictState | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const rawConflict = sessionStorage.getItem(STORAGE_KEY);
    if (!rawConflict) {
      return null;
    }

    try {
      const conflict = JSON.parse(rawConflict) as AuthConflictState;
      if (conflict.expiresAt <= Date.now()) {
        this.clearConflict();
        return null;
      }

      return { ...conflict, credentialAvailable: false };
    } catch {
      this.clearConflict();
      return null;
    }
  }

  getPendingCredential(email: string): AuthCredential | null {
    if (this.pendingEmail?.toLowerCase() !== email.toLowerCase()) {
      return null;
    }

    return this.pendingCredential;
  }

  hasPendingCredential(email: string): boolean {
    return this.getPendingCredential(email) !== null;
  }

  clearConflict(): void {
    this.pendingCredential = null;
    this.pendingEmail = null;
    this.pendingProvider = null;

    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  private persistConflict(conflict: AuthConflictState): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(conflict));
  }

  private buildConflictMessage(attemptedProvider: AuthProviderId): string {
    return `This email already exists. Sign in with your existing method to connect ${this.getProviderLabel(
      attemptedProvider,
    )}.`;
  }

  private getProviderLabel(provider: AuthProviderId): string {
    switch (provider) {
      case 'google.com':
        return 'Google';
      case 'github.com':
        return 'GitHub';
      case 'password':
        return 'email and password';
    }
  }
}
