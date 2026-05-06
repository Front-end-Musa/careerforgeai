import { Component } from '@angular/core';
import { LandingCta } from '../landing-cta/landing-cta';

@Component({
  selector: 'app-hero',
  imports: [LandingCta],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
