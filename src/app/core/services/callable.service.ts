import { Injectable, inject } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable({ providedIn: 'root' })
export class CallableService {
  private functions = inject(Functions);

  callable<RequestData = unknown, ResponseData = unknown>(name: string) {
    return httpsCallable<RequestData, ResponseData>(this.functions, name);
  }
}
