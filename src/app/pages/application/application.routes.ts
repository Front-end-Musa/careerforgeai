import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';

export const APPLICATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./application').then((c) => c.Application),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then((c) => c.Dashboard),
        canActivate: [AuthGuard],
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings').then((c) => c.Settings),
      },
      {
        path: 'resumes/:id/edit',
        loadComponent: () =>
          import('./resumes/resumes-edit/resumes-edit').then((c) => c.ResumesEdit),
      },
      {
        path: 'resumes',
        loadComponent: () => import('./resumes/resumes').then((c) => c.Resumes),
      },
      {
        path: 'cover-letter',
        loadComponent: () => import('./cover-letter/cover-letter').then((c) => c.CoverLetter),
      },
      {
        path: 'job-tracker',
        loadComponent: () => import('./job-tracker/job-tracker').then((c) => c.JobTracker),
      },
      {
        path: 'interview-coach',
        loadComponent: () =>
          import('./interview-coach/interview-coach').then((c) => c.InterviewCoach),
      },
      {
        path: 'linkedin-optimizer',
        loadComponent: () => import('./linkedin/linkedin').then((c) => c.Linkedin),
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
