import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then((c) => c.Landing),
    data: {
      seo: {
        title: 'ResumeCrafts AI | AI Resume Builder & Cover Letter Generator',
        description:
          'Build ATS-ready resumes and personalized cover letters with AI. ResumeCrafts AI helps job seekers create professional applications faster.',
        keywords:
          'AI resume builder, cover letter generator, ATS resume, job search tools, ResumeCrafts AI',
        robots: 'index, follow',
        canonicalPath: '/',
        ogType: 'website',
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ResumeCrafts AI',
            url: 'https://resume-crafts.com',
            logo: 'https://resume-crafts.com/assets/hero-image.png',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'ResumeCrafts AI',
            url: 'https://resume-crafts.com',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'ResumeCrafts AI',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            url: 'https://resume-crafts.com',
          },
        ],
      },
    },
  },
  {
    path: 'auth',
    data: {
      seo: {
        title: 'Sign In or Sign Up | ResumeCrafts AI',
        description: 'Access your ResumeCrafts AI account to manage resumes and cover letters.',
        robots: 'noindex, nofollow',
        canonicalPath: '/auth',
        ogType: 'website',
      },
    },
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login').then((c) => c.Login),
        data: {
          seo: {
            title: 'Log In | ResumeCrafts AI',
            description:
              'Log in to ResumeCrafts AI to continue building your job application assets.',
            robots: 'noindex, nofollow',
            canonicalPath: '/auth/login',
            ogType: 'website',
          },
        },
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/auth/signup/signup').then((c) => c.Signup),
        data: {
          seo: {
            title: 'Create Account | ResumeCrafts AI',
            description:
              'Create your ResumeCrafts AI account and start generating professional resumes and cover letters.',
            robots: 'noindex, nofollow',
            canonicalPath: '/auth/signup',
            ogType: 'website',
          },
        },
      },
    ],
  },
  {
    path: 'upgrade',
    loadComponent: () =>
      import('./pages/landing/pricing-plans/upgrade/upgrade').then((c) => c.Upgrade),
    data: {
      seo: {
        title: 'Choose Your Plan | ResumeCrafts AI',
        description: 'Choose a paid plan before continuing to secure checkout.',
        robots: 'noindex, nofollow',
        canonicalPath: '/upgrade',
        ogType: 'website',
      },
    },
  },
  {
    path: 'checkouts',
    loadChildren: () =>
      import('./pages/landing/pricing-plans/checkouts/checkouts.routes').then(
        (c) => c.CHECKOUT_ROUTES,
      ),
    data: {
      seo: {
        title: 'Checkout | ResumeCrafts AI',
        description: 'Complete your purchase to unlock ResumeCrafts AI premium features.',
        robots: 'noindex, nofollow',
        canonicalPath: '/checkouts',
        ogType: 'website',
      },
    },
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/landing/legal/privacy-policy/privacy-policy').then((c) => c.PrivacyPolicy),
    data: {
      seo: {
        title: 'Privacy Policy | ResumeCrafts AI',
        description: 'Read how ResumeCrafts AI collects, uses, and protects your data.',
        robots: 'index, follow',
        canonicalPath: '/privacy-policy',
        ogType: 'article',
      },
    },
  },
  {
    path: 'terms-of-service',
    loadComponent: () =>
      import('./pages/landing/legal/terms-of-service/terms-of-service').then(
        (c) => c.TermsOfService,
      ),
    data: {
      seo: {
        title: 'Terms of Service | ResumeCrafts AI',
        description: 'Read the Terms of Service for using ResumeCrafts AI.',
        robots: 'index, follow',
        canonicalPath: '/terms-of-service',
        ogType: 'article',
      },
    },
  },
  {
    path: 'application/resume-generator',
    loadComponent: () =>
      import('./pages/application/resumes/resumes-create/resumes-create').then((c) => c.ResumesCreate),
    data: {
      seo: {
        title: 'Resume Generator | ResumeCrafts AI',
        description: 'Generate a resume with AI without signing in.',
        robots: 'noindex, nofollow',
        canonicalPath: '/application/resume-generator',
        ogType: 'website',
      },
    },
  },
  {
    path: 'application',
    loadChildren: () =>
      import('./pages/application/application.routes').then((r) => r.APPLICATION_ROUTES),
    data: {
      seo: {
        title: 'Dashboard | ResumeCrafts AI',
        description: 'Manage your resumes, cover letters, and applications in ResumeCrafts AI.',
        robots: 'noindex, nofollow',
        canonicalPath: '/application',
        ogType: 'website',
      },
    },
  },
];
