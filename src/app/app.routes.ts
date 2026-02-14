import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then((c) => c.Landing),
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login').then((c) => c.Login),
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/auth/signup/signup').then((c) => c.Signup),
      },
    ],
  },
  {
    path: 'application',
    loadChildren: () =>
      import('./pages/application/application.routes').then((r) => r.APPLICATION_ROUTES),
  },
];
