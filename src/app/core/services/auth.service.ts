import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
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
  tap,
  map,
  catchError,
  shareReplay,
  throwError,
  EMPTY,
  take,
  filter,
} from 'rxjs';
import { AppUser, LoginUser } from '../interfaces/user.interface';
import { doc, docData, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

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
    return from(
      createUserWithEmailAndPassword(this.auth, user.email, user.password ? user.password : ''),
    ).pipe(
      switchMap((userCredential) => {
        const uid = userCredential.user.uid;
        const userRef = doc(this.firestore, 'users', uid);

        return from(
          setDoc(userRef, {
            name: user.name,
            email: user.email,
            createdAt: new Date(),
            role: user.role,
          }),
        ).pipe(switchMap(() => this.getUser$(uid).pipe(map((user) => user))));
      }),
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
}
