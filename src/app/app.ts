import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthFacade } from './pages/auth/data/auth.facade';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthStatus } from './pages/auth/data/auth.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  protected readonly title = signal('application');
  public authFacade = inject(AuthFacade);
  status$ = new Observable<AuthStatus>();
  authStatus = AuthStatus;

  ngOnInit() {
    this.authFacade.initAuth();
    this.status$ = this.authFacade.status$;
  }
}
