import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  imports: [],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.scss',
})
export class PricingCard {
  @Input() plan!: {
    name: string;
    price: number;
    features: { text: string; included: boolean }[];
    button: string;
  };
  @Input() popular: boolean = false;
  @Input() disabled: boolean | null = false;
  @Output() planSelected = new EventEmitter<string>();

  onSelectPlan(): void {
    this.planSelected.emit(this.plan.name);
  }
}
