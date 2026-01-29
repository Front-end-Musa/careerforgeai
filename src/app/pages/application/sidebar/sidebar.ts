import { Component, inject } from '@angular/core';
import { Logo } from '../../logos/logo/logo';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoShort } from '../../logos/logo-short/logo-short';
import { MatAnchor } from "@angular/material/button";
import { AuthFacade } from '../../auth/data/auth.facade';

interface NavLink {
  label: string;
  route: string;
  icon: string;
  id?: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [Logo, RouterLink, RouterLinkActive, LogoShort, MatAnchor],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isSidebarOpen = false;
  authFacade = inject(AuthFacade)

  links: NavLink[] = [
    { label: 'Dashboard', route: 'dashboard', icon: 'grid_view', id: 'dashboard' },
    { label: 'Resumes', route: 'resumes', icon: 'description', id: 'resumes' },
    { label: 'Cover Letters', route: 'cover-letter', icon: 'mail_outline', id: 'cover-letter' },
    { label: 'Job Tracker', route: 'job-tracker', icon: 'work', id: 'job-tracker' },
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
