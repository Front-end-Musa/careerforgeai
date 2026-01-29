import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  imports: [CommonModule],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.scss',
})
export class PricingCard {
  @Input() plan!: {
    name: string;
    price: number;
    features: string[];
    button: string;
  };
  @Input() popular: boolean = false;
}
