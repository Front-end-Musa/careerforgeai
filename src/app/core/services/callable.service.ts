import { Injectable, inject } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable({ providedIn: 'root' })
export class CallableService {
  private functions = inject(Functions);

  callable<RequestData = unknown, ResponseData = unknown>(name: string) {
    const fn = httpsCallable<RequestData, ResponseData>(this.functions, name);

    return async (data?: RequestData) => {
      try {
        return await fn(data as RequestData);
      } catch (error) {
        this.logCallableError(name, error);
        throw error;
      }
    };
  }

  private logCallableError(name: string, error: unknown) {
    const code =
      typeof error === 'object' && error !== null && 'code' in error ? error.code : 'unknown';
    const message =
      typeof error === 'object' && error !== null && 'message' in error ?
        String(error.message) :
        'Unknown callable error';

    console.error(`Firebase callable "${name}" failed`, { code, message, error });
  }
}
