import { EnvironmentProviders, Provider } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Functions } from '@angular/fire/functions';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

export function defaultSpecProviders(): Array<Provider | EnvironmentProviders> {
  return [
    provideMockStore({
      initialState: {
        auth: { user: null, status: 'init', error: null },
        resumes: {
          ids: [],
          entities: {},
          resumes: [],
          status: 'init',
          error: null,
          formValue: null,
          generating: false,
          saving: false,
          saveSucceeded: false,
        },
        coverLetters: {
          ids: [],
          entities: {},
          coverLetters: [],
          status: 'init',
          error: null,
          formValue: null,
          generating: false,
        },
        billing: {
          status: 'init',
          loading: false,
          error: null,
          selectedPlan: null,
        },
        notifications: {
          notifications: [],
        },
      },
    }),
    provideRouter([]),
    { provide: Firestore, useValue: {} },
    { provide: Auth, useValue: { currentUser: null } },
    { provide: Functions, useValue: {} },
  ];
}
