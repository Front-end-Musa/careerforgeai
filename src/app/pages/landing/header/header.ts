import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollService } from '../../../lib/scroll.service';
import { Logo } from '../../logo/logo';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, Logo, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  user: any | null = null;
  @ViewChild('burgerBtn') burgerBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('burgerMenu') burgerMenu!: ElementRef<HTMLDivElement>;

  constructor(public scrollService: ScrollService) {}

  toggleMenu() {
    this.burgerBtn.nativeElement.classList.toggle('active');
    this.burgerMenu.nativeElement.classList.toggle('showMenu');
  }
}
