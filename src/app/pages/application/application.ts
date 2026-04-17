import { Component, inject, signal } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';

import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStatus } from '../auth/data/auth.reducer';
import { AuthFacade } from '../auth/data/auth.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-application',
  imports: [Sidebar, RouterModule, AsyncPipe],
  templateUrl: './application.html',
  styleUrl: './application.scss',
})
export class Application {
  protected readonly title = signal('application');
  public authFacade = inject(AuthFacade);
  status$ = new Observable<AuthStatus>();
  authStatus = AuthStatus;

  ngOnInit() {
    this.status$ = this.authFacade.status$;
  }
}
