import { Component, inject } from '@angular/core';
import { Logo } from '../../logos/logo/logo';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoShort } from '../../logos/logo-short/logo-short';
import { AsyncPipe } from '@angular/common';
import { MatAnchor } from "@angular/material/button";
import { AuthFacade } from '../../auth/data/auth.facade';
import { map } from 'rxjs';
import { getPlanEntitlements } from '../../../core/utils/plan-entitlements';

interface NavLink {
  label: string;
  route: string;
  icon: string;
  id?: string;
  premiumOnly?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [Logo, RouterLink, RouterLinkActive, LogoShort, MatAnchor, AsyncPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isSidebarOpen = false;
  authFacade = inject(AuthFacade);
  jobTrackerEnabled$ = this.authFacade.user$.pipe(
    map((user) => getPlanEntitlements(user?.plan ?? 'free').jobTrackerEnabled),
  );

  links: NavLink[] = [
    { label: 'Dashboard', route: 'dashboard', icon: 'grid_view', id: 'dashboard' },
    { label: 'Resumes', route: 'resumes', icon: 'description', id: 'resumes' },
    { label: 'Cover Letters', route: 'cover-letter', icon: 'mail_outline', id: 'cover-letter' },
    { label: 'Job Tracker', route: 'job-tracker', icon: 'work', id: 'job-tracker', premiumOnly: true },
    { label: 'Settings', route: 'settings', icon: 'settings' },
  ];

  liActive(id: string | undefined) {
    if (id != undefined) {
      document.querySelectorAll('a').forEach((link) => link.classList.remove('active'));
      document.getElementById(id)?.classList.add('active');
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    this.authFacade.logout();
  }
}
