import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from './auth.selectors';
import { Observable } from 'rxjs';
import { User } from '../../../core/interfaces/user.interface';
import { registerUser } from './auth.actions';

@Injectable({
    providedIn: 'root'
})
export class AuthFacade {
  store = inject(Store);
  user$: Observable<User | null> = this.store.select(selectUser);

  register(credentials: User) {
    this.store.dispatch(registerUser({ user: credentials }));
  }
}
