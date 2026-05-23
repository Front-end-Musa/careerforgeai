import { Routes } from '@angular/router';
import { SEO_METADATA } from './core/seo/seo-page.config';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then((c) => c.Landing),
    data: {
      seo: SEO_METADATA['/'],
    },
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/seo-landing/seo-landing').then((c) => c.SeoLanding),
    data: {
      seo: SEO_METADATA['/pricing'],
      seoPage: 'pricing',
    },
  },
  {
    path: 'auth',
    data: {
      seo: SEO_METADATA['/auth'],
    },
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login').then((c) => c.Login),
        data: {
          seo: SEO_METADATA['/auth/login'],
        },
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/auth/signup/signup').then((c) => c.Signup),
        data: {
          seo: SEO_METADATA['/auth/signup'],
        },
      },
    ],
  },
  {
    path: 'upgrade',
    loadComponent: () =>
      import('./pages/landing/pricing-plans/upgrade/upgrade').then((c) => c.Upgrade),
    data: {
      seo: SEO_METADATA['/upgrade'],
    },
  },
  {
    path: 'update',
    loadComponent: () =>
      import('./pages/landing/pricing-plans/upgrade/upgrade').then((c) => c.Upgrade),
    data: {
      seo: SEO_METADATA['/update'],
    },
  },
  {
    path: 'checkouts',
    loadChildren: () =>
      import('./pages/landing/pricing-plans/checkouts/checkouts.routes').then(
        (c) => c.CHECKOUT_ROUTES,
      ),
    data: {
      seo: SEO_METADATA['/checkouts'],
    },
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/landing/legal/privacy-policy/privacy-policy').then((c) => c.PrivacyPolicy),
    data: {
      seo: SEO_METADATA['/privacy-policy'],
    },
  },
  {
    path: 'terms-of-service',
    loadComponent: () =>
      import('./pages/landing/legal/terms-of-service/terms-of-service').then(
        (c) => c.TermsOfService,
      ),
    data: {
      seo: SEO_METADATA['/terms-of-service'],
    },
  },
  {
    path: 'application/resume-generator',
    loadComponent: () =>
      import('./pages/application/resumes/resumes-create/resumes-create').then((c) => c.ResumesCreate),
    data: {
      seo: SEO_METADATA['/application/resume-generator'],
    },
  },
  {
    path: 'application',
    loadChildren: () =>
      import('./pages/application/application.routes').then((r) => r.APPLICATION_ROUTES),
    data: {
      seo: SEO_METADATA['/application'],
    },
  },
];
