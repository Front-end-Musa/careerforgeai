import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then((c) => c.Landing),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login').then((c) => c.Login),
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/auth/signup/signup').then((c) => c.Signup),
  },
  {
    path: 'application',
    loadComponent: () => import('./pages/application/application').then((c) => c.Application),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/application/dashboard/dashboard').then((c) => c.Dashboard),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/application/settings/settings').then((c) => c.Settings),
      },
      {
        path: 'resumes',
        loadComponent: () => import('./pages/application/resumes/resumes').then((c) => c.Resumes),
      },
      {
        path: 'cover-letter',
        loadComponent: () =>
          import('./pages/application/cover-letter/cover-letter').then((c) => c.CoverLetter),
      },
      {
        path: 'job-tracker',
        loadComponent: () =>
          import('./pages/application/job-tracker/job-tracker').then((c) => c.JobTracker),
      },
      {
        path: 'interview-coach',
        loadComponent: () =>
          import('./pages/application/interview-coach/interview-coach').then(
            (c) => c.InterviewCoach
          ),
      },
      {
        path: 'linkedin-optimizer',
        loadComponent: () =>
          import('./pages/application/linkedin/linkedin').then((c) => c.Linkedin),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];
