import { Injectable, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { doc, docData, Firestore, Timestamp } from '@angular/fire/firestore';
import { map, of, shareReplay, switchMap } from 'rxjs';
import { AppUser } from '../interfaces/user.interface';
import { getPlanEntitlements } from './plan-entitlements';

@Injectable({ providedIn: 'root' })
export class EntitlementsService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  user$ = user(this.auth).pipe(
    switchMap((currentUser) => {
      if (!currentUser) {
        return of(null);
      }

      const userRef = doc(this.firestore, 'users', currentUser.uid);
      return docData(userRef, { idField: 'uid' }).pipe(
        map((snapshot) => (snapshot as AppUser | undefined) ?? null),
      );
    }),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  entitlements$ = this.user$.pipe(
    map((appUser) => getPlanEntitlements(appUser?.plan ?? 'free')),
  );

  usage$ = this.user$.pipe(
    map((appUser) => {
      const entitlements = getPlanEntitlements(appUser?.plan ?? 'free');
      const resumeGenerationsUsed = appUser?.resumeGenerationsUsed ?? 0;
      const coverLettersUsed = appUser?.coverLettersUsed ?? 0;

      return {
        resumeGenerationsUsed,
        coverLettersUsed,
        resumeGenerationsRemaining: Math.max(
          entitlements.resumeGenerationsPerPeriod - resumeGenerationsUsed,
          0,
        ),
        coverLettersRemaining: Math.max(
          entitlements.coverLettersPerPeriod - coverLettersUsed,
          0,
        ),
        usagePeriodKey: appUser?.usagePeriodKey ?? null,
        usagePeriodStartedAt: appUser?.usagePeriodStartedAt ?? null,
        usagePeriodEndsAt: appUser?.usagePeriodEndsAt ?? null,
      };
    }),
  );

  nextResetLabel$ = this.user$.pipe(
    map((appUser) => {
      const endsAt =
        appUser?.usagePeriodEndsAt ??
        appUser?.currentPeriodEnd ??
        this.getFreePlanMonthEnd();

      return this.formatDate(endsAt);
    }),
  );

  private getFreePlanMonthEnd() {
    const now = new Date();
    return new Timestamp(
      Math.floor(new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime() / 1000),
      0,
    );
  }

  private formatDate(value: Timestamp | null) {
    if (!value) {
      return 'this period';
    }

    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(value.toDate());
  }
}
