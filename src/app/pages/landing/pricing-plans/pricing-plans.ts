import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PricingCard } from './pricing-card/pricing-card';
import { BillingFacade } from './data/billing.facade';
import { PaidPlan } from './data/billing.actions';
import { LandingCta } from '../landing-cta/landing-cta';

interface Plan {
  name: string;
  price: string;
  billingPeriod: 'month' | 'year';
  features: { text: string; included: boolean }[];
  button: string;
  popular: boolean;
  planSlug: PaidPlan | null;
}

type FeatureKey =
  | 'resumeBuilder'
  | 'oneTemplate'
  | 'allTemplates'
  | 'jobTracker'
  | 'resumeQuota1'
  | 'resumeQuota5'
  | 'resumeQuota10'
  | 'coverLetters3'
  | 'coverLetters20'
  | 'coverLetters35'
  | 'aiSummary'
  | 'aiExperience'
  | 'aiEducation'
  | 'aiCoverLetter'
  | 'downloadResume'
  | 'storeGeneratedResume'
  | 'prioritySupport'
  | 'resumeTailoring'
  | 'proTemplates';

const FEATURE_LABELS: Record<FeatureKey, string> = {
  resumeBuilder: 'Resume builder and editor',
  oneTemplate: '3 free resume templates',
  allTemplates: 'All 11 resume templates',
  proTemplates: 'Pro templates',
  jobTracker: 'Job application tracker',
  resumeQuota1: '1 AI resume generation per period',
  resumeQuota5: '5 AI resume generations per month',
  resumeQuota10: '10 AI resume generations per month',
  coverLetters3: '3 AI cover letters per month',
  coverLetters20: '20 AI cover letters per month',
  coverLetters35: '35 AI cover letters per month',
  aiSummary: 'AI summary generation',
  aiExperience: 'AI experience bullets',
  aiEducation: 'AI education bullets',
  aiCoverLetter: 'AI cover letter generator',
  downloadResume: 'Resume download',
  storeGeneratedResume: 'Store AI-generated resumes',
  prioritySupport: 'Priority email support',
  resumeTailoring: 'Resume tailoring',
};

const FEATURE_ORDER: FeatureKey[] = [
  'resumeBuilder',
  'oneTemplate',
  'allTemplates',
  'proTemplates',
  'jobTracker',
  'resumeQuota1',
  'resumeQuota5',
  'resumeQuota10',
  'coverLetters3',
  'coverLetters20',
  'coverLetters35',
  'aiSummary',
  'aiExperience',
  'aiEducation',
  'aiCoverLetter',
  'downloadResume',
  'storeGeneratedResume',
  'prioritySupport',
  'resumeTailoring',
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
  imports: [PricingCard, AsyncPipe, LandingCta],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.scss',
})
export class PricingPlans {
  private readonly billingFacade: BillingFacade;
  loading$;

  constructor(billingFacade: BillingFacade) {
    this.billingFacade = billingFacade;
    this.loading$ = this.billingFacade.loading$;
  }

  plans: Plan[] = [
    {
      name: 'Free',
      price: '0',
      billingPeriod: 'month',
      features: buildFeatures([
        'resumeBuilder',
        'oneTemplate',
        'resumeQuota1',
        'coverLetters3',
      ], ['jobTracker', 'storeGeneratedResume', 'downloadResume']),
      button: 'Start Free',
      popular: false,
      planSlug: null,
    },
    {
      name: 'Pro',
      price: '7.90',
      billingPeriod: 'month',
      features: buildFeatures([
        'resumeBuilder',
        'proTemplates',
        'resumeQuota5',
        'coverLetters20',
        'aiSummary',
        'aiExperience',
        'aiEducation',
        'aiCoverLetter',
        'storeGeneratedResume',
        'downloadResume',
        'resumeTailoring',
      ], ['jobTracker']),
      button: 'Start Pro',
      popular: true,
      planSlug: 'pro',
    },
    {
      name: 'Premium',
      price: '59',
      billingPeriod: 'year',
      features: buildFeatures([
        'resumeBuilder',
        'allTemplates',
        'resumeQuota10',
        'coverLetters35',
        'aiSummary',
        'aiExperience',
        'aiEducation',
        'aiCoverLetter',
        'storeGeneratedResume',
        'downloadResume',
        'jobTracker',
        'resumeTailoring',
      ]),
      button: 'Start Premium',
      popular: false,
      planSlug: 'premium',
    },
  ];

  ctaHelperTexts: string[] = ['Free plan available', 'Upgrade whenever you are ready'];
}
