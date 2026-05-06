import type { PaidPlan } from './billing.actions';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlanViewModel {
  name: string;
  price: string;
  billingPeriod: 'month' | 'year';
  features: PlanFeature[];
  button: string;
  popular: boolean;
  planSlug: PaidPlan | null;
}

type FeatureKey =
  | 'resumeBuilder'
  | 'oneResumeDraft'
  | 'threeTemplates'
  | 'allTemplates'
  | 'jobTracker'
  | 'aiResumeCredit1'
  | 'aiCredits3'
  | 'aiCredits5'
  | 'aiCredits10'
  | 'coverLetters20'
  | 'coverLetters35'
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
  oneResumeDraft: '1 saved resume draft',
  threeTemplates: '5 free resume templates',
  allTemplates: 'All resume templates',
  proTemplates: 'Pro templates',
  jobTracker: 'Job application tracker',
  aiResumeCredit1: '1 AI resume generation per month',
  aiCredits3: '3 cover letters per month',
  aiCredits5: '5 AI resume generations per month',
  aiCredits10: '10 AI resume generations per month',
  coverLetters20: '20 cover letters per month',
  coverLetters35: '35 cover letters per month',
  aiSummary: 'AI summary generation',
  aiExperience: 'AI experience bullets',
  aiEducation: 'AI education bullets',
  aiCoverLetter: 'AI cover letter generator',
  unlimitedResumes: 'Unlimited saved resumes',
  pdfExport: 'PDF export',
  prioritySupport: 'Priority email support',
  resumeTailoringSoon: 'Resume tailoring',
};

const FEATURE_ORDER: FeatureKey[] = [
  'resumeBuilder',
  'oneResumeDraft',
  'threeTemplates',
  'allTemplates',
  'proTemplates',
  'jobTracker',
  'aiResumeCredit1',
  'aiCredits3',
  'aiCredits5',
  'aiCredits10',
  'coverLetters20',
  'coverLetters35',
  'aiSummary',
  'aiExperience',
  'aiEducation',
  'aiCoverLetter',
  'pdfExport',
  'prioritySupport',
  'resumeTailoringSoon',
];

function buildFeatures(included: FeatureKey[], excluded: FeatureKey[] = []): PlanFeature[] {
  const includedSet = new Set(included);
  const excludedSet = new Set(excluded);
  const visibleKeys = FEATURE_ORDER.filter((key) => includedSet.has(key) || excludedSet.has(key));

  return visibleKeys.map((key) => ({
    text: FEATURE_LABELS[key],
    included: includedSet.has(key),
  }));
}

export const PRICING_PLANS: PricingPlanViewModel[] = [
  {
    name: 'Free',
    price: '0',
    billingPeriod: 'month',
    features: buildFeatures([
      'resumeBuilder',
      'oneResumeDraft',
      'threeTemplates',
      'aiResumeCredit1',
      'aiCredits3',
    ]),
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
      'aiCredits5',
      'coverLetters20',
      'aiSummary',
      'aiExperience',
      'aiEducation',
      'aiCoverLetter',
      'pdfExport',
      'resumeTailoringSoon',
    ]),
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
      'aiCredits10',
      'coverLetters35',
      'aiSummary',
      'aiExperience',
      'aiEducation',
      'aiCoverLetter',
      'pdfExport',
      'jobTracker',
      'resumeTailoringSoon',
    ]),
    button: 'Start Premium',
    popular: false,
    planSlug: 'premium',
  },
];

export const PAID_PRICING_PLANS = PRICING_PLANS.filter(
  (plan): plan is PricingPlanViewModel & { planSlug: PaidPlan } => plan.planSlug !== null,
);
