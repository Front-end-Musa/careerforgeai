import { inject, Injectable } from '@angular/core';
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

  constructor(private firestore: Firestore) {}

  login(credentials: LoginUser): Observable<any> {
    return from(
      signInWithEmailAndPassword(this.auth, credentials.email, credentials.password)
    ).pipe(
      tap((cred) => console.log('Firebase login successful, UID:', cred.user.uid)),
      switchMap((cred) => this.getUser$(cred.user.uid)),
      tap((user) => console.log('Fetched user data:', user)),
      catchError((err) => {
        console.error('Firebase login error:', err.code, err.message);
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
