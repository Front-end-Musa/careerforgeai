import type { PaidPlan } from './billing.actions';

export interface CheckoutPlanInfo {
  name: string;
  price: number;
  slug: PaidPlan;
}

const PLAN_CONFIG: Record<PaidPlan, CheckoutPlanInfo> = {
  pro: {
    name: 'Pro',
    price: 12,
    slug: 'pro',
  },
  premium: {
    name: 'Premium',
    price: 19,
    slug: 'premium',
  },
};

export function getPlanBySlug(slug: PaidPlan): CheckoutPlanInfo {
  return PLAN_CONFIG[slug];
}
