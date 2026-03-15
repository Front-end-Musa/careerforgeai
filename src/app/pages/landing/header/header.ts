import { AsyncPipe } from '@angular/common';
import { Component, HostListener, Input, OnDestroy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Logo } from '../../logos/logo/logo';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../auth/data/auth.facade';
import { Observable } from 'rxjs';
import { AuthStatus } from '../../auth/data/auth.reducer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LandingFacade } from '../data/landing.facade';

type HeaderType = 'nav' | 'checkout';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, Logo, AsyncPipe, RouterLink, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  @Input({ required: true }) headerType: HeaderType | null = null;
  authStatus = AuthStatus;
  status$ = new Observable<AuthStatus>();
  menuOpen = signal(false);

  constructor(
    private authFacade: AuthFacade,
    private landingDataFacade: LandingFacade,
  ) { }
  
  ngOnInit() {
    this.status$ = this.authFacade.status$;
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
    this.syncBodyLock();
  }

  closeMenu() {
    if (!this.menuOpen()) {
      return;
    }

    this.menuOpen.set(false);
    this.syncBodyLock();
  }

  onMobileSectionClick(sectionId: string) {
    this.landingDataFacade.scrollTo(sectionId);
    this.closeMenu();
  }

  onMobileRouteClick() {
    this.closeMenu();
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize() {
    if (typeof window !== 'undefined' && window.innerWidth > 915) {
      this.closeMenu();
    }
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('mobile-menu-open');
    }
  }

  private syncBodyLock() {
    if (typeof document === 'undefined') {
      return;
    }

    document.body.classList.toggle('mobile-menu-open', this.menuOpen());
  }

  scrollTo(sectionId: string) {
    this.landingDataFacade.scrollTo(sectionId);
  }
}
