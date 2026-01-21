import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthFacade } from './pages/auth/data/auth.facade';
import { CommonModule } from '@angular/common';
import { AuthStatus } from './pages/auth/data/auth.reducer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('application');
  public authFacade = inject(AuthFacade);
  public ready: WritableSignal<boolean> = signal(false);

  ngOnInit() {
    this.authFacade.initAuth();
    this.authFacade.status$.subscribe((status: AuthStatus) => {
      this.ready.set(status !== AuthStatus.Init);
    });
  }
}
