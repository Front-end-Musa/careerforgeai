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
        '1 AI Resume Generation',
        'Basic Resume Template',
        'Basic Interview Questions (no scoring)',
        'Community Support',
      ],
      button: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: 7.99,
      features: [
        'Unlimited Resume & Cover Letter Generation',
        'Premium Resume Templates',
        'Job-Specific Resume Optimization',
        'Interview Questions with AI Feedback & Scoring',
        'Priority Support',
      ],
      button: 'Start Pro',
      popular: true,
    },
    {
      name: 'Premium',
      price: 59,
      features: [
        'Everything in Pro',
        'Job Application Tracker',
        'Advanced Interview Analytics',
        'Personalized Career Roadmap',
        'Early Access to New Features',
      ],
      button: 'Start Premium',
      popular: false,
    },
  ];
}
