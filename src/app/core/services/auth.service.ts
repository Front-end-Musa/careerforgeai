import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { Observable, from, of, switchMap, tap, map, catchError } from 'rxjs';
import { AppUser, LoginUser } from '../interfaces/user.interface';
import { doc, docData, Firestore, getDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private platformId = inject(PLATFORM_ID);

  constructor(private firestore: Firestore) {}

  login(credentials: LoginUser): Observable<any> {
    return from(
      signInWithEmailAndPassword(this.auth, credentials.email, credentials.password)
    ).pipe(
      switchMap((cred) => this.getUser$(cred.user.uid)),
      catchError((err) => {
        return of(null);
      })
    );
  }

  registerUser(user: AppUser): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, user.email, user.password)).pipe(
      switchMap((userCredential) => {
        const uid = userCredential.user.uid;
        const userRef = doc(this.firestore, 'users', uid);

        return from(
          setDoc(userRef, {
            name: user.name,
            email: user.email,
            createdAt: new Date(),
            role: user.role,
          })
        ).pipe(switchMap(() => this.getUser$(uid).pipe(map((user) => user))));
      }),
      catchError((err) => {
        console.error('Firebase error:', err.code, err.message);
        throw err;
      })
    );
  }

  initAuth(): Observable<AppUser | null> {
    if (!isPlatformBrowser(this.platformId)) {
      return of(null);
    }
    return authState(this.auth).pipe(
      switchMap((firebaseUser) => {
        if (!firebaseUser) {
          return of(null);
        }
        return this.getUser$(firebaseUser.uid);
      }),
      catchError((err) => {
        console.error('Auth init error:', err);
        return of(null);
      })
    );
  }

  getUser$(uid: string): Observable<AppUser> {
    const userRef = doc(this.firestore, 'users', uid);
    return docData(userRef, { idField: 'uid' }) as Observable<AppUser>;
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }
}
