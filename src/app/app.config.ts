import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { environment } from '../environments/environment';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './pages/auth/data/auth.reducer';
import { AuthEffects } from './pages/auth/data/auth.effects';
import { resumesReducer } from './pages/application/resumes/data/resumes.reducer';
import { ResumeEffects } from './pages/application/resumes/data/resumes.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideFunctions, getFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
import { CoverLetterEffects } from './pages/application/cover-letter/data/cover-letter.effects';
import { coverLetterReducer } from './pages/application/cover-letter/data/cover-letter.reducer';
import { billingReducer } from './pages/landing/pricing-plans/data/billing.reducer';
import { BillingEffects } from './pages/landing/pricing-plans/data/billing.effects';
import { notificationsReducer } from './core/state/notifications/notifications.reducer';
import { NotificationsEffects } from './core/state/notifications/notifications.effects';
import { jobsReducer } from './pages/application/job-tracker/data/jobs.reducer';
import { JobsEffects } from './pages/application/job-tracker/data/jobs.effects';

const storeDevtoolsProviders = environment.production ?
  [] :
  [
    provideStoreDevtools({
      maxAge: 25,
    }),
  ];

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular core
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),

    // Firebase (MUST be before anything that injects Firestore/Auth)
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();

      if (!environment.production) {
        connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
      }

      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();

      if (!environment.production) {
        connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
      }

      return firestore;
    }),
    provideFunctions(() => {
      const functions = getFunctions(undefined, 'us-central1');

      if (!environment.production) {
        connectFunctionsEmulator(functions, '127.0.0.1', 5001);
      }

      return functions;
    }),

    // HTTP
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // NgRx
    provideStore({
      auth: authReducer,
      resumes: resumesReducer,
      coverLetters: coverLetterReducer,
      billing: billingReducer,
      notifications: notificationsReducer,
      jobs: jobsReducer,
    }),
    provideEffects([
      AuthEffects,
      ResumeEffects,
      CoverLetterEffects,
      BillingEffects,
      NotificationsEffects,
      JobsEffects,
    ]),
    ...storeDevtoolsProviders,
  ],
};
