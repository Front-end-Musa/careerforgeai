import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { premiumFeatureGuard } from '../auth/guards/premium-feature.guard';

export const APPLICATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./application').then((c) => c.Application),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then((c) => c.Dashboard),
        data: {
          seo: {
            title: 'Dashboard | ResumeCrafts AI',
            description: 'View your activity, recent resumes, and AI tools at a glance.',
            robots: 'noindex, nofollow',
            canonicalPath: '/application/dashboard',
            ogType: 'website',
          },
        },
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings').then((c) => c.Settings),
        data: {
          seo: {
            title: 'Settings | ResumeCrafts AI',
            description: 'Manage your profile, preferences, and billing for ResumeCrafts AI.',
            robots: 'noindex, nofollow',
            canonicalPath: '/application/settings',
            ogType: 'website',
          },
        },
      },
      {
        path: 'resumes/:id/edit',
        loadComponent: () =>
          import('./resumes/resumes-edit/resumes-edit').then((c) => c.ResumesEdit),
        data: {
          seo: {
            title: 'Edit Resume | ResumeCrafts AI',
            description: 'Edit and refine your resume with AI suggestions and formatting help.',
            robots: 'noindex, nofollow',
            canonicalPath: '/application/resumes',
            ogType: 'website',
          },
        },
      },
      {
        path: 'resumes/:id/tailor',
        loadComponent: () =>
          import('./resumes/resumes-tailor/resumes-tailor').then((c) => c.ResumesTailor),
        data: {
          seo: {
            title: 'Tailor Resume | ResumeCrafts AI',
            description: 'Tailor your resume to a specific job with AI-powered targeting.',
            robots: 'noindex, nofollow',
            canonicalPath: '/application/resumes',
            ogType: 'website',
          },
        },
      },
      {
        path: 'resumes',
        loadComponent: () => import('./resumes/resumes').then((c) => c.Resumes),
        data: {
          seo: {
            title: 'Resumes | ResumeCrafts AI',
            description: 'Create, organize, and manage your resumes in ResumeCrafts AI.',
            robots: 'noindex, nofollow',
            canonicalPath: '/application/resumes',
            ogType: 'website',
          },
        },
      },
      {
        path: 'cover-letter',
        loadComponent: () => import('./cover-letter/cover-letter').then((c) => c.CoverLetter),
        data: {
          seo: {
            title: 'Cover Letter | ResumeCrafts AI',
            description: 'Generate and edit personalized cover letters for your applications.',
            robots: 'noindex, nofollow',
            canonicalPath: '/application/cover-letter',
            ogType: 'website',
          },
        },
      },
      {
        path: 'job-tracker',
        loadComponent: () => import('./job-tracker/job-tracker').then((c) => c.JobTracker),
        canActivate: [premiumFeatureGuard],
        data: {
          seo: {
            title: 'Job Tracker | ResumeCrafts AI',
            description: 'Track applications, statuses, and follow-ups in one place.',
            robots: 'noindex, nofollow',
            canonicalPath: '/application/job-tracker',
            ogType: 'website',
          },
        },
      },
      {
        path: 'interview-coach',
        loadComponent: () =>
          import('./interview-coach/interview-coach').then((c) => c.InterviewCoach),
        data: {
          seo: {
            title: 'Interview Coach | ResumeCrafts AI',
            description: 'Practice interview questions and get AI feedback to improve.',
            robots: 'noindex, nofollow',
            canonicalPath: '/application/interview-coach',
            ogType: 'website',
          },
        },
      },
      {
        path: 'linkedin-optimizer',
        loadComponent: () => import('./linkedin/linkedin').then((c) => c.Linkedin),
        data: {
          seo: {
            title: 'LinkedIn Optimizer | ResumeCrafts AI',
            description: 'Optimize your LinkedIn profile with AI-driven recommendations.',
            robots: 'noindex, nofollow',
            canonicalPath: '/application/linkedin-optimizer',
            ogType: 'website',
          },
        },
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
