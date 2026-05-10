import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EntitlementsService } from '../../../core/services/entitlements.service';

interface NavLink {
  label: string;
  route: string;
  icon: string;
  id?: string;
  requiresJobTrackerAccess?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isSidebarOpen = false;
  entitlementsService = inject(EntitlementsService);
  entitlements = toSignal(this.entitlementsService.entitlements$, {
    initialValue: {
      resumeGenerationsPerPeriod: 1,
      coverLettersPerPeriod: 3,
      canUseJobTracker: false,
      canStoreGeneratedResume: false,
      canDownloadResume: false,
    },
  });

  links: NavLink[] = [
    { label: 'Dashboard', route: 'dashboard', icon: 'grid_view', id: 'dashboard' },
    { label: 'Resumes', route: 'resumes', icon: 'description', id: 'resumes' },
    { label: 'Cover Letters', route: 'cover-letter', icon: 'mail_outline', id: 'cover-letter' },
    {
      label: 'Job Tracker',
      route: 'job-tracker',
      icon: 'work',
      id: 'job-tracker',
      requiresJobTrackerAccess: true,
    },
  ];
  settingsLink: NavLink = { label: 'Settings', route: 'settings', icon: 'settings', id: 'settings' };

  liActive(id: string | undefined) {
    if (id != undefined) {
      document.querySelectorAll('a').forEach((link) => link.classList.remove('active'));
      document.getElementById(id)?.classList.add('active');
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  isLinkAvailable(link: NavLink) {
    return !link.requiresJobTrackerAccess || this.entitlements().canUseJobTracker;
  }

  onNavClick(event: MouseEvent, link: NavLink) {
    if (!this.isLinkAvailable(link)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.liActive(link.id);
    this.isSidebarOpen = false;
  }

  mobileLinks() {
    return [...this.links, this.settingsLink];
  }
}
