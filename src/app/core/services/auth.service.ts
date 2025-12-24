import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Observable, BehaviorSubject, async, catchError, from, of, switchMap, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

export interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private firestore: Firestore, private auth: Auth) {}

  async login(credentials: LoginCredentials): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, credentials.email, credentials.password);
    } catch (error) {
      throw error;
    }
  }

  registerUser(user: User): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, user.email, user.password)).pipe(
      switchMap((userCredential) => {
        const uid = userCredential.user.uid;
        const userRef = doc(this.firestore, 'users', uid);
        const refreshToken = userCredential.user.refreshToken;
        localStorage.setItem('accessToken', JSON.stringify(refreshToken));
        return from(
          setDoc(userRef, {
            name: user.name,
            email: user.email,
            createdAt: new Date(),
            role: user.role,
          })
        );
      }),
      catchError((err) => {
        console.error('Firebase error:', err.code, err.message);
        throw err;
      })
    );
  }
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
