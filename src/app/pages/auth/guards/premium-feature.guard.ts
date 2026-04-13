import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { CanActivateFn, Router } from '@angular/router';

export const premiumFeatureGuard: CanActivateFn = async () => {
  const auth = inject(Auth);
  const firestore = inject(Firestore);
  const router = inject(Router);
  const currentUser = auth.currentUser;

  if (!currentUser) {
    return router.createUrlTree(['/auth/login']);
  }

  const userRef = doc(firestore, 'users', currentUser.uid);
  const userSnapshot = await getDoc(userRef);
  const plan = userSnapshot.data()?.['plan'];

  if (plan === 'premium') {
    return true;
  }

  return router.createUrlTree(['/application/settings']);
};
