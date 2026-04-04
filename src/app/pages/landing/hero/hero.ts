import { Component } from '@angular/core';
import { LandingFacade } from '../data/landing.facade';
import { LandingCta } from '../landing-cta/landing-cta';

@Component({
  selector: 'app-hero',
  imports: [LandingCta],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(private landingFacade: LandingFacade) {}

  scrollTo(sectionId: string) {
    this.landingFacade.scrollTo(sectionId);
  }
}
