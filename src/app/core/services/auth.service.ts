import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private provider = new GoogleAuthProvider();
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private callableService = inject(CallableService);
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

  login(credentials: LoginUser): Observable<any> {
    return from(
      signInWithEmailAndPassword(this.auth, credentials.email, credentials.password),
    ).pipe(
      switchMap((cred) => this.getUser$(cred.user.uid)),
      catchError((err) => {
        return of(null);
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

  loginWithGoogle(): Observable<any> {
    return from(
      signInWithPopup(this.auth, this.provider)
        .then(async (result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          if (!credential) {
            throw new Error('No credential returned from Google sign-in');
          }

          const token = credential.accessToken ?? '';
          const user = await this.ensureGoogleAppUser(result.user);
          return { user, token };
        })
        .catch((err) => {
          console.error('Google login error:', err.code, err.message);
          throw err;
        }),
    );
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
      return appUser;
    }

    if (!this.isGoogleUser(firebaseUser)) {
      return null;
    }

    return this.ensureGoogleAppUser(firebaseUser);
  }

  private async ensureGoogleAppUser(firebaseUser: User): Promise<AppUser> {
    const existingUser = await firstValueFrom(this.getUser$(firebaseUser.uid));
    if (existingUser) {
      return existingUser;
    }

    const userRef = doc(this.firestore, 'users', firebaseUser.uid);
    const email = firebaseUser.email ?? '';
    const name = firebaseUser.displayName?.trim() || email.split('@')[0] || 'Google User';
    const entitlements = getPlanEntitlements('free');

    await setDoc(userRef, {
      name,
      email,
      createdAt: new Date(),
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
      entitlementsUpdatedAt: null,
    });

    try {
      await this.ensurePolarCustomerFn();
    } catch (error) {
      await this.compensateFailedRegistration(userRef, null);
      await signOut(this.auth);
      throw new Error(
        'Unable to complete Google signup because billing setup failed. Please try again in a moment.',
      );
    }

    return await this.requireAppUser(firebaseUser.uid);
  }

  private async requireAppUser(uid: string): Promise<AppUser> {
    const user = await firstValueFrom(this.getUser$(uid));
    if (!user) {
      throw new Error('Unable to load your account profile. Please try again.');
    }

    return user;
  }

  private isGoogleUser(firebaseUser: User): boolean {
    return firebaseUser.providerData.some((profile) => profile.providerId === 'google.com');
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
