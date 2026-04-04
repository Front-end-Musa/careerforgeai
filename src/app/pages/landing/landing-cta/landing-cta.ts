import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-cta',
  imports: [RouterLink],
  templateUrl: './landing-cta.html',
  styleUrl: './landing-cta.scss',
})
export class LandingCta {
  @Input() label: string = 'Create My Resume Now';
  @Input() icon: string = 'auto_awesome';
  @Input() helperTexts: string[] = ['No Credit Card Required', 'Ready in 5 Minutes'];
  @Input() link: string | any[] = '/application/dashboard';
  @Input() ariaLabel: string = 'Create My Resume Now';
}
