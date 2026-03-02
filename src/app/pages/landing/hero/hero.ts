import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LandingFacade } from '../data/landing.facade';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(private landingFacade: LandingFacade) {}

  scrollTo(sectionId: string) {
    this.landingFacade.scrollTo(sectionId);
  }
}
