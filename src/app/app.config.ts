import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
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

const LOCAL_FUNCTIONS_HOSTNAMES = new Set(['localhost', '127.0.0.1', '[::1]']);

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
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => {
      const functions = getFunctions(undefined, 'us-central1');
      if (typeof window !== 'undefined' && LOCAL_FUNCTIONS_HOSTNAMES.has(window.location.hostname)) {
        const emulatorHost = window.location.hostname === '[::1]' ? '127.0.0.1' : window.location.hostname;
        connectFunctionsEmulator(functions, emulatorHost, 5001);
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
    }),
    provideEffects([AuthEffects, ResumeEffects, CoverLetterEffects, BillingEffects, NotificationsEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
};
