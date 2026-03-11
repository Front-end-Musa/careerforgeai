import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { PricingCard } from './pricing-card/pricing-card';
import { BillingFacade } from './data/billing.facade';

interface Plan {
  name: string;
  price: number;
  features: { text: string; included: boolean }[];
  button: string;
  popular: boolean;
}

type FeatureKey =
  | 'resumeBuilder'
  | 'oneTemplate'
  | 'allTemplates'
  | 'jobTracker'
  | 'aiCredits3'
  | 'aiCredits30'
  | 'aiCredits80'
  | 'aiSummary'
  | 'aiExperience'
  | 'aiEducation'
  | 'aiCoverLetter'
  | 'unlimitedResumes'
  | 'pdfExport'
  | 'prioritySupport'
  | 'resumeTailoringSoon'
  | 'proTemplates';

const FEATURE_LABELS: Record<FeatureKey, string> = {
  resumeBuilder: 'Resume builder and editor',
  oneTemplate: '1 resume template',
  allTemplates: 'All resume templates',
  proTemplates: 'Pro templates',
  jobTracker: 'Job application tracker',
  aiCredits3: '3 AI generations per month',
  aiCredits30: '30 AI generations per month',
  aiCredits80: '80 AI generations per month',
  aiSummary: 'AI summary generation',
  aiExperience: 'AI experience bullets',
  aiEducation: 'AI education bullets',
  aiCoverLetter: 'AI cover letter generator',
  unlimitedResumes: 'Unlimited resumes',
  pdfExport: 'PDF export',
  prioritySupport: 'Priority email support',
  resumeTailoringSoon: 'Resume tailoring (coming soon)',
};

const FEATURE_ORDER: FeatureKey[] = [
  'resumeBuilder',
  'oneTemplate',
  'allTemplates',
  'proTemplates',
  'jobTracker',
  'aiCredits3',
  'aiCredits30',
  'aiCredits80',
  'aiSummary',
  'aiExperience',
  'aiEducation',
  'aiCoverLetter',
  'unlimitedResumes',
  'pdfExport',
  'prioritySupport',
  'resumeTailoringSoon',
];

function buildFeatures(included: FeatureKey[], excluded: FeatureKey[] = []): Plan['features'] {
  const includedSet = new Set(included);
  const excludedSet = new Set(excluded);
  const visibleKeys = FEATURE_ORDER.filter((key) => includedSet.has(key) || excludedSet.has(key));

  return visibleKeys.map((key) => ({
    text: FEATURE_LABELS[key],
    included: includedSet.has(key),
  }));
}

@Component({
  selector: 'app-pricing-plans',
  imports: [PricingCard, AsyncPipe],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.scss',
})
export class PricingPlans {
  private readonly billingFacade: BillingFacade;
  private readonly router: Router;
  loading$;

  constructor(billingFacade: BillingFacade, router: Router) {
    this.billingFacade = billingFacade;
    this.router = router;
    this.loading$ = this.billingFacade.loading$;
  }

  plans: Plan[] = [
    {
      name: 'Free',
      price: 0,
      features: buildFeatures([
        'resumeBuilder',
        'oneTemplate',
        'jobTracker',
        'aiCredits3',
        'pdfExport',
      ]),
      button: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: 12,
      features: buildFeatures([
        'resumeBuilder',
        'proTemplates',
        'aiCredits30',
        'aiSummary',
        'aiExperience',
        'aiEducation',
        'aiCoverLetter',
        'unlimitedResumes',
        'pdfExport',
      ]),
      button: 'Start Pro',
      popular: true,
    },
    {
      name: 'Premium',
      price: 19,
      features: buildFeatures([
        'resumeBuilder',
        'allTemplates',
        'aiCredits80',
        'aiSummary',
        'aiExperience',
        'aiEducation',
        'aiCoverLetter',
        'unlimitedResumes',
        'pdfExport',
        'jobTracker',
        'resumeTailoringSoon',
      ]),
      button: 'Start Premium',
      popular: false,
    },
  ];

  onPlanSelected(planName: string): void {
    if (planName === 'Free') {
      this.router.navigate(['/auth/signup']);
      return;
    }

    const normalized = planName.toLowerCase() as 'pro' | 'premium';
    this.billingFacade.clearError();
    this.billingFacade.startCheckout(normalized);
    this.router
      .navigate([`/checkouts/checkout`], {
        queryParams: { plan: normalized },
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
