import { Injectable, inject } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll.service';

@Injectable({
  providedIn: 'root',
})
export class LandingFacade {
  private scrollService = inject(ScrollService);

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
