import { Component } from '@angular/core';
import { PricingCard } from './pricing-card/pricing-card';

interface Plan {
  name: string;
  price: number;
  features: { text: string; included: boolean }[];
  button: string;
  popular: boolean;
}

type FeatureKey =
  | 'everythingInPro'
  | 'aiResumeOne'
  | 'basicTemplate'
  | 'coverLetterOne'
  | 'interviewBasic'
  | 'exportPdf'
  | 'resumeUnlimited'
  | 'templatePremium'
  | 'resumeTailoring'
  | 'interviewScoring'
  | 'prioritySupport'
  | 'jobTracker'
  | 'advancedAnalytics'
  | 'careerRoadmap'
  | 'earlyAccess';

const FEATURE_LABELS: Record<FeatureKey, string> = {
  everythingInPro: 'Everything in Pro',
  aiResumeOne: '1 AI Resume Generation',
  basicTemplate: 'Basic Resume Template',
  coverLetterOne: '1 Cover Letter Generation',
  interviewBasic: 'Basic Interview Questions',
  exportPdf: 'Export to PDF',
  resumeUnlimited: 'Unlimited Resume & Cover Letter Generation',
  templatePremium: 'Premium Resume Templates',
  resumeTailoring: 'Job-Specific Resume Tailoring',
  interviewScoring: 'Interview Questions with AI Feedback & Scoring',
  prioritySupport: 'Priority Support',
  jobTracker: 'Job Application Tracker',
  advancedAnalytics: 'Advanced Interview Analytics',
  careerRoadmap: 'Personalized Career Roadmap',
  earlyAccess: 'Early Access to New Features',
};

const FEATURE_ORDER: FeatureKey[] = [
  'everythingInPro',
  'aiResumeOne',
  'basicTemplate',
  'coverLetterOne',
  'interviewBasic',
  'exportPdf',
  'resumeUnlimited',
  'templatePremium',
  'resumeTailoring',
  'interviewScoring',
  'prioritySupport',
  'jobTracker',
  'advancedAnalytics',
  'careerRoadmap',
  'earlyAccess',
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
  imports: [PricingCard],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.scss',
})
export class PricingPlans {
  plans: Plan[] = [
    {
      name: 'Free',
      price: 0,
      features: buildFeatures(
        ['aiResumeOne', 'basicTemplate', 'coverLetterOne', 'interviewBasic', 'exportPdf'],
        ['resumeUnlimited', 'resumeTailoring', 'interviewScoring', 'jobTracker'],
      ),
      button: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: 7.99,
      features: buildFeatures(
        ['resumeUnlimited', 'templatePremium', 'resumeTailoring', 'interviewScoring', 'prioritySupport'],
        ['jobTracker', 'advancedAnalytics'],
      ),
      button: 'Start Pro',
      popular: true,
    },
    {
      name: 'Premium',
      price: 59,
      features: buildFeatures([
        'everythingInPro',
        'jobTracker',
        'advancedAnalytics',
        'careerRoadmap',
        'earlyAccess',
      ]),
      button: 'Start Premium',
      popular: false,
    },
  ];
}
