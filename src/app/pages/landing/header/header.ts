import { AsyncPipe, ViewportScroller } from '@angular/common';
import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollService } from '../../../core/services/scroll.service';
import { Logo } from '../../logos/logo/logo';
import { RouterLink } from '@angular/router';
import { AppUser } from '../../../core/interfaces/user.interface';
import { AuthFacade } from '../../auth/data/auth.facade';
import { Observable, take } from 'rxjs';
import { AuthStatus } from '../../auth/data/auth.reducer';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, Logo, AsyncPipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @ViewChild('burgerBtn') burgerBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('burgerMenu') burgerMenu!: ElementRef<HTMLDivElement>;
  authStatus = AuthStatus;
  status$ = new Observable<AuthStatus>();

  constructor(
    public scrollService: ScrollService,
    private authFacade: AuthFacade,
  ) { }
  
  ngOnInit() {
    this.status$ = this.authFacade.status$
  }

  toggleMenu() {
    this.burgerBtn.nativeElement.classList.toggle('active');
    this.burgerMenu.nativeElement.classList.toggle('showMenu');
  }
}
