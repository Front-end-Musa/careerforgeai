import { Injectable, inject } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationStorageFacade {
  private storage = inject(StorageService);

  get(key: string) {
    return this.storage.get(key);
  }

  set(key: string, value: string) {
    this.storage.set(key, value);
  }
}
