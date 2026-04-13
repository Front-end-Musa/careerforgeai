import type { PaidPlan } from './billing.actions';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlanViewModel {
  name: string;
  price: number;
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
  oneResumeDraft: '1 saved resume draft',
  threeTemplates: '3 free resume templates',
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
  'oneResumeDraft',
  'threeTemplates',
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
    price: 0,
    features: buildFeatures([
      'resumeBuilder',
      'oneResumeDraft',
      'threeTemplates',
      'jobTracker',
      'aiCredits3',
    ]),
    button: 'Start Free',
    popular: false,
    planSlug: null,
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
    planSlug: 'pro',
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
    planSlug: 'premium',
  },
];

export const PAID_PRICING_PLANS = PRICING_PLANS.filter(
  (plan): plan is PricingPlanViewModel & { planSlug: PaidPlan } => plan.planSlug !== null,
);
