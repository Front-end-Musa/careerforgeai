import { Routes } from '@angular/router';

export const CHECKOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./checkouts').then((c) => c.Checkouts),
    children: [
      {
        path: 'success',
        loadComponent: () => import('./success/success').then((c) => c.Success),
        data: {
          seo: {
            title: 'Success | ResumeCrafts AI',
            description: 'Your payment was successful! Thank you for using ResumeCrafts AI.',
            robots: 'noindex, nofollow',
            canonicalPath: '/checkouts/success',
            ogType: 'website',
          },
        },
      },
      {
        path: 'failure',
        loadComponent: () => import('./failure/failure').then((c) => c.Failure),
        data: {
          seo: {
            title: 'Failure | ResumeCrafts AI',
            description: 'Your payment was unsuccessful! Please try again.',
            robots: 'noindex, nofollow',
            canonicalPath: '/checkouts/failure',
            ogType: 'website',
          },
        },
      },
    ],
  },
];



