import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  deleteUser,
  sendEmailVerification,
  signInWithEmailAndPassword,
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
  filter,
  firstValueFrom,
  throwError,
} from 'rxjs';
import { AppUser, LoginUser } from '../interfaces/user.interface';
import {
  deleteDoc,
  doc,
  docData,
  DocumentReference,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CallableService } from './callable.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private callableService = inject(CallableService);
  private ensurePolarCustomerFn = this.callableService.callable<
    void,
    { providerCustomerId: string }
  >('ensurePolarCustomer');

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

    return from(deleteUser(currentUser)).pipe(
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
      switchMap((firebaseUser) => (firebaseUser ? this.getUser$(firebaseUser.uid) : of(null))),
    );
  }

  getUser$(uid: string): Observable<AppUser> {
    const userRef = doc(this.firestore, 'users', uid);

    return docData(userRef, { idField: 'uid' }).pipe(
      filter((user): user is AppUser => !!user),
      take(1),
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
      freeGenerationsUsed: 0,
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

    return await firstValueFrom(this.getUser$(uid));
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
