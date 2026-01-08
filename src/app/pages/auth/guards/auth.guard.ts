import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { combineLatest, filter, map, Observable, take } from 'rxjs';
import { AuthFacade } from '../data/auth.facade';
import { AuthStatus } from '../data/auth.reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return combineLatest([this.authFacade.user$, this.authFacade.status$]).pipe(
      // 1. Only allow the stream to continue if status is Loaded/Success
      filter(([user, status]) => status === AuthStatus.Loaded),

      // 2. Take the first value that passes the filter and complete
      take(1),

      // 3. Logic to determine access
      map(([user]) => {
        if (!user) {
          console.log('User not authenticated, redirecting to login.');
          return this.router.createUrlTree(['/auth/login']);
        }
        return true;
      })
    );
  }
}
