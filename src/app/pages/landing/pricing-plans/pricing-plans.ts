import { Component } from '@angular/core';
import { PricingCard } from './pricing-card/pricing-card';

interface Plan {
  name: string;
  price: number;
  features: string[];
  button: string;
  popular: boolean;
}

@Component({
  selector: 'app-pricing-plans',
  imports: [PricingCard],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.scss',
})
export class PricingPlans {
  plans: Plan[] = [
    {
      name: 'Free',
      price: 0,
      features: [
        '3 AI Resume Generations',
        'Basic Templates',
        'Cover Letter Generator',
        'Community Support',
      ],
      button: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: 15,
      features: [
        'Unlimited AI Generations',
        'Premium Templates',
        'LinkedIn Optimizer',
        'Interview AI Coach',
        'Priority Support',
      ],
      button: 'Start Pro',
      popular: true,
    },
    {
      name: 'Premium',
      price: 29,
      features: [
        'Everything in Pro',
        'Job Application Tracker',
        'Advanced Analytics',
        'Personal Career Coach',
        '1-on-1 Consultation',
      ],
      button: 'Start Premium',
      popular: false,
    },
  ];
}
