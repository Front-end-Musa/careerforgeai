import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FirebaseError } from '@angular/fire/app';
import {
  Auth,
  AuthCredential,
  AuthProvider,
  authState,
  createUserWithEmailAndPassword,
  deleteUser,
  fetchSignInMethodsForEmail,
  GithubAuthProvider,
  GoogleAuthProvider,
  linkWithCredential,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';
import {
  Observable,
  from,
  of,
  switchMap,
  catchError,
  EMPTY,
  take,
  firstValueFrom,
  throwError,
  map,
} from 'rxjs';
import { AppUser, LoginUser } from '../interfaces/user.interface';
import {
  deleteDoc,
  doc,
  DocumentReference,
  Firestore,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CallableService } from './callable.service';
import { getPlanEntitlements } from './plan-entitlements';
import { AuthLinkingService } from './auth-linking.service';
import {
  AuthConflictState,
  AuthLoginResult,
  AuthProviderId,
} from '../interfaces/auth-linking.interface';

export class AuthProviderConflictError extends Error {
  constructor(public conflict: AuthConflictState) {
    super(conflict.message);
    this.name = 'AuthProviderConflictError';
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private googleProvider = new GoogleAuthProvider();
  private githubProvider = new GithubAuthProvider();
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private callableService = inject(CallableService);
  private authLinkingService = inject(AuthLinkingService);
  private ensurePolarCustomerFn = this.callableService.callable<
    void,
    { providerCustomerId: string }
  >('ensurePolarCustomer');

  private deletePolarCustomerFn = this.callableService.callable<void, { success: boolean }>(
    'deletePolarCustomer',
  );

  constructor(private firestore: Firestore) {}

  noUserRedirect() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.navigate(['/']);
    }
  }

  login(credentials: LoginUser): Observable<AuthLoginResult> {
    return from(
      signInWithEmailAndPassword(
        this.auth,
        credentials.email.trim(),
        credentials.password,
      ).then(async (cred) => {
        const user = await this.completePendingLinkIfAvailable(cred.user);
        return { user, token: '' };
      }),
    ).pipe(
      catchError((error) => {
        this.logAuthError('email login', error);
        return throwError(() => error);
      }),
    );
  }

  registerUser(user: AppUser): Observable<any> {
    return from(this.registerUserStrict(user)).pipe(
      catchError((err) => {
        console.error('Firebase error:', err.code, err.message);
        throw err;
      }),
    );
  }

  loginWithGoogle(): Observable<AuthLoginResult> {
    return from(this.loginWithProvider('google.com'));
  }

  loginWithGithub(): Observable<AuthLoginResult> {
    return from(this.loginWithProvider('github.com'));
  }

  continueProviderConflictWithPopup(providerId: AuthProviderId): Observable<AuthLoginResult> {
    return from(
      signInWithPopup(this.auth, this.getProvider(providerId)).then(async (result) => {
        const user = await this.completePendingLinkIfAvailable(result.user);
        const credential = this.getCredentialFromResult(providerId, result);
        return { user, token: this.getCredentialAccessToken(credential) };
      }),
    );
  }

  linkPendingProvider(): Observable<AuthLoginResult> {
    const currentUser = this.auth.currentUser;
    if (!currentUser) {
      return throwError(() => new Error('Sign in before connecting this provider.'));
    }

    return from(
      this.completePendingLinkIfAvailable(currentUser).then((user) => ({ user, token: '' })),
    );
  }

  restoreProviderConflict(): AuthConflictState | null {
    return this.authLinkingService.restoreConflict();
  }

  clearProviderConflict(): void {
    this.authLinkingService.clearConflict();
  }

  logout(): Observable<unknown> {
    return from(signOut(this.auth)).pipe(
      catchError((err) => {
        console.error('logout error:', err.message);
        throw err;
      }),
    );
  }

  deleteAccount(): Observable<void> {
    const currentUser = this.auth.currentUser;
    if (!currentUser) {
      return of(undefined);
    }

    console.log('Attempting to delete account for user:', currentUser.uid);

    console.trace('deleteAccount called');

    const userRef = doc(this.firestore, 'users', currentUser.uid);

    return from(deleteDoc(userRef)).pipe(
      switchMap(() => {
        console.log('Firestore document deleted, now deleting Polar customer');
        return this.deletePolarCustomerFn();
      }),
      switchMap(() => {
        console.log('Polar customer deleted, now deleting Firebase Auth user');
        return from(deleteUser(currentUser));
      }),
      catchError((err) => {
        console.error('delete account error:', err.message);
        return throwError(() => err);
      }),
    );
  }

  initAuth(): Observable<AppUser | null> {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }

    return authState(this.auth).pipe(
      take(1),
      switchMap((firebaseUser) => {
        if (!firebaseUser) {
          return of(null);
        }

        return from(this.resolveCurrentAppUser(firebaseUser));
      }),
    );
  }

  getUser$(uid: string): Observable<AppUser | null> {
    const userRef = doc(this.firestore, 'users', uid);

    return from(getDoc(userRef)).pipe(
      map((snapshot) => {
        if (!snapshot.exists()) {
          return null;
        }

        return {
          ...(snapshot.data() as AppUser),
          uid: snapshot.id,
        };
      }),
    );
  }

  sendVerification(): Observable<void> {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      return from(sendEmailVerification(currentUser));
    }
    throw new Error('No user logged in');
  }

  private async registerUserStrict(user: AppUser): Promise<AppUser> {
    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      user.email,
      user.password ? user.password : '',
    );
    const uid = userCredential.user.uid;
    const userRef = doc(this.firestore, 'users', uid);

    const entitlements = getPlanEntitlements('free');

    await setDoc(userRef, {
      name: user.name,
      email: user.email,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: user.role,
      profileViews: 0,
      plan: 'free',
      subscriptionStatus: 'none',
      currentPeriodEnd: null,
      providerCustomerId: '',
      providerSubscriptionId: '',
      providerVariantId: '',
      entitlements,
      resumeGenerationsUsed: 0,
      coverLettersUsed: 0,
      usagePeriodKey: null,
      usagePeriodStartedAt: null,
      usagePeriodEndsAt: null,
      freeGenerationsUsed: 0,
      fullResumeGenerationsUsed: 0,
      emailVerified: false,
      providers: ['password'],
      photoURL: null,
      entitlementsUpdatedAt: null,
    });

    try {
      await this.ensurePolarCustomerFn();
    } catch (error) {
      await this.compensateFailedRegistration(userRef, userCredential.user);
      throw new Error(
        'Unable to complete signup because billing setup failed. Please try again in a moment.',
      );
    }

    return await this.requireAppUser(uid);
  }

  private async resolveCurrentAppUser(firebaseUser: User): Promise<AppUser | null> {
    const appUser = await firstValueFrom(this.getUser$(firebaseUser.uid));
    if (appUser) {
      await this.mergeUserProviderData(firebaseUser, appUser);
      return appUser;
    }

    if (!this.hasSupportedProvider(firebaseUser)) {
      return null;
    }

    return this.ensureProviderAppUser(firebaseUser);
  }

  private async loginWithProvider(providerId: AuthProviderId): Promise<AuthLoginResult> {
    try {
      const result = await signInWithPopup(this.auth, this.getProvider(providerId));
      const credential = this.getCredentialFromResult(providerId, result);
      if (!credential) {
        throw new Error(`No credential returned from ${this.getProviderLabel(providerId)} sign-in`);
      }

      const token = this.getCredentialAccessToken(credential);
      const user = await this.completePendingLinkIfAvailable(result.user);
      return { user, token };
    } catch (error) {
      if (this.isProviderConflictError(error)) {
        throw await this.createProviderConflict(providerId, error);
      }

      throw error;
    }
  }

  private async ensureProviderAppUser(firebaseUser: User): Promise<AppUser> {
    const existingUser = await firstValueFrom(this.getUser$(firebaseUser.uid));
    if (existingUser) {
      return this.mergeUserProviderData(firebaseUser, existingUser);
    }

    const userRef = doc(this.firestore, 'users', firebaseUser.uid);
    const email = firebaseUser.email ?? '';
    if (!email) {
      throw new Error('This provider did not return an email address. Try another sign-in method.');
    }

    const name = firebaseUser.displayName?.trim() || email.split('@')[0] || 'User';
    const entitlements = getPlanEntitlements('free');

    await setDoc(userRef, {
      name,
      email,
      photoURL: firebaseUser.photoURL ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'User',
      profileViews: 0,
      plan: 'free',
      subscriptionStatus: 'none',
      currentPeriodEnd: null,
      providerCustomerId: '',
      providerSubscriptionId: '',
      providerVariantId: '',
      entitlements,
      resumeGenerationsUsed: 0,
      coverLettersUsed: 0,
      usagePeriodKey: null,
      usagePeriodStartedAt: null,
      usagePeriodEndsAt: null,
      freeGenerationsUsed: 0,
      fullResumeGenerationsUsed: 0,
      emailVerified: firebaseUser.emailVerified,
      providers: this.getProviderIds(firebaseUser),
      entitlementsUpdatedAt: null,
    });

    try {
      await this.ensurePolarCustomerFn();
    } catch (error) {
      await this.compensateFailedRegistration(userRef, null);
      await signOut(this.auth);
      throw new Error(
        'Unable to complete signup because billing setup failed. Please try again in a moment.',
      );
    }

    return await this.requireAppUser(firebaseUser.uid);
  }

  private async completePendingLinkIfAvailable(firebaseUser: User): Promise<AppUser> {
    const email = firebaseUser.email ?? '';
    const pendingCredential = email ? this.authLinkingService.getPendingCredential(email) : null;
    let linkedUser = firebaseUser;

    if (pendingCredential) {
      try {
        const result = await linkWithCredential(firebaseUser, pendingCredential);
        linkedUser = result.user;
        await linkedUser.reload();
      } catch (error) {
        if (!this.isProviderAlreadyLinkedError(error)) {
          throw error;
        }
      }

      this.authLinkingService.clearConflict();
    }

    return this.ensureProviderAppUser(linkedUser);
  }

  private async mergeUserProviderData(firebaseUser: User, existingUser: AppUser): Promise<AppUser> {
    const userRef = doc(this.firestore, 'users', firebaseUser.uid);
    const providers = this.getProviderIds(firebaseUser);
    const fallbackName =
      firebaseUser.displayName?.trim() || firebaseUser.email?.split('@')[0] || existingUser.name;
    const shouldUpdateName = !existingUser.name || existingUser.name === 'Google User';
    const nextName = shouldUpdateName ? fallbackName : existingUser.name;
    const nextPhotoURL = existingUser.photoURL || firebaseUser.photoURL || null;

    await setDoc(
      userRef,
      {
        email: existingUser.email || firebaseUser.email || '',
        name: nextName,
        photoURL: nextPhotoURL,
        providers,
        emailVerified: firebaseUser.emailVerified,
        updatedAt: new Date(),
      },
      { merge: true },
    );

    return await this.requireAppUser(firebaseUser.uid);
  }

  private async createProviderConflict(
    attemptedProvider: AuthProviderId,
    error: unknown,
  ): Promise<AuthProviderConflictError> {
    const email = this.getErrorEmail(error);
    const credential = this.getCredentialFromError(attemptedProvider, error);

    if (!email) {
      throw new Error('This provider did not return an email address. Try another sign-in method.');
    }

    if (!credential) {
      throw new Error('Unable to continue provider linking. Please try again.');
    }

    const methods = await fetchSignInMethodsForEmail(this.auth, email);
    const existingProviders = this.normalizeProviders(methods);
    const conflict = this.authLinkingService.storeConflict(
      email,
      attemptedProvider,
      existingProviders,
      credential,
    );

    return new AuthProviderConflictError(conflict);
  }

  private getProvider(providerId: AuthProviderId): AuthProvider {
    switch (providerId) {
      case 'google.com':
        return this.googleProvider;
      case 'github.com':
        return this.githubProvider;
      case 'password':
        throw new Error('Password accounts do not use popup sign-in.');
    }
  }

  private getCredentialFromResult(
    providerId: AuthProviderId,
    result: UserCredential,
  ): AuthCredential | null {
    switch (providerId) {
      case 'google.com':
        return GoogleAuthProvider.credentialFromResult(result);
      case 'github.com':
        return GithubAuthProvider.credentialFromResult(result);
      case 'password':
        return null;
    }
  }

  private getCredentialFromError(
    providerId: AuthProviderId,
    error: unknown,
  ): AuthCredential | null {
    switch (providerId) {
      case 'google.com':
        return GoogleAuthProvider.credentialFromError(error as FirebaseError);
      case 'github.com':
        return GithubAuthProvider.credentialFromError(error as FirebaseError);
      case 'password':
        return null;
    }
  }

  private getProviderIds(firebaseUser: User): AuthProviderId[] {
    const providers = firebaseUser.providerData
      .map((profile) => profile.providerId)
      .filter((provider): provider is AuthProviderId => this.isSupportedProviderId(provider));

    return providers.length > 0 ? providers : ['password'];
  }

  private getCredentialAccessToken(credential: AuthCredential | null): string {
    if (!credential || !('accessToken' in credential)) {
      return '';
    }

    const accessToken = (credential as { accessToken?: unknown }).accessToken;
    return typeof accessToken === 'string' ? accessToken : '';
  }

  private normalizeProviders(methods: string[]): AuthProviderId[] {
    return methods
      .map((method) => (method === 'password' ? 'password' : method))
      .filter((provider): provider is AuthProviderId => this.isSupportedProviderId(provider));
  }

  private isSupportedProviderId(provider: string): provider is AuthProviderId {
    return provider === 'password' || provider === 'google.com' || provider === 'github.com';
  }

  private hasSupportedProvider(firebaseUser: User): boolean {
    return this.getProviderIds(firebaseUser).length > 0;
  }

  private isProviderConflictError(error: unknown): boolean {
    return this.getErrorCode(error) === 'auth/account-exists-with-different-credential';
  }

  private isProviderAlreadyLinkedError(error: unknown): boolean {
    const code = this.getErrorCode(error);
    return code === 'auth/provider-already-linked' || code === 'auth/credential-already-in-use';
  }

  private getErrorCode(error: unknown): string | undefined {
    return typeof error === 'object' && error !== null && 'code' in error
      ? String((error as { code?: unknown }).code)
      : undefined;
  }

  private getErrorEmail(error: unknown): string | null {
    if (typeof error !== 'object' || error === null || !('customData' in error)) {
      return null;
    }

    const customData = (error as { customData?: { email?: unknown } }).customData;
    return typeof customData?.email === 'string' ? customData.email : null;
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

  private logAuthError(action: string, error: unknown) {
    const code =
      typeof error === 'object' && error !== null && 'code' in error ? error.code : 'unknown';
    const message =
      typeof error === 'object' && error !== null && 'message' in error ?
        String(error.message) :
        'Unknown auth error';

    console.error(`Firebase Auth ${action} failed`, { code, message, error });
  }

  private async requireAppUser(uid: string): Promise<AppUser> {
    const user = await firstValueFrom(this.getUser$(uid));
    if (!user) {
      throw new Error('Unable to load your account profile. Please try again.');
    }

    return user;
  }

  private async compensateFailedRegistration(
    userRef: DocumentReference,
    firebaseUser: User | null,
  ) {
    try {
      await deleteDoc(userRef);
    } catch (error) {
      console.error('Signup rollback failed to delete Firestore user document', error);
    }

    if (!firebaseUser) {
      return;
    }

    try {
      await deleteUser(firebaseUser);
    } catch (error) {
      console.error('Signup rollback failed to delete Firebase Auth user', error);
    }
  }
}
