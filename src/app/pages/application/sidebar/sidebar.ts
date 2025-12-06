import { Component } from '@angular/core';
import { Logo } from '../../logo/logo';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  route: string;
  icon: string;
  id?: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [Logo, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  links: NavLink[] = [
    { label: 'Dashboard', route: 'dashboard', icon: 'grid_view', id: 'dashboard' },
    { label: 'Resumes', route: 'resumes', icon: 'description', id: 'resumes' },
    { label: 'Cover Letters', route: 'cover-letter', icon: 'mail_outline', id: 'cover-letter' },
    {
      label: 'LinkedIn Optimizer',
      route: 'linkedin-optimizer',
      icon: 'badge',
      id: 'linkedin-optimizer',
    },
    {
      label: 'Interview Coach',
      route: 'interview-coach',
      icon: 'chat_bubble',
      id: 'interview-coach',
    },
    { label: 'Job Tracker', route: 'job-tracker', icon: 'work', id: 'job-tracker' },
    { label: 'Settings', route: 'settings', icon: 'settings' },
  ];

  liActive(id: string | undefined) {
    if (id != undefined) {
      document.querySelectorAll('a').forEach((link) => link.classList.remove('active'));
      document.getElementById(id)?.classList.add('active');
    }
  }
}
