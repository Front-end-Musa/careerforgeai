import type { PaidPlan } from './billing.actions';

export interface CheckoutPlanInfo {
  name: string;
  price: string;
  billingPeriod: 'month' | 'year';
  slug: PaidPlan;
}

const PLAN_CONFIG: Record<PaidPlan, CheckoutPlanInfo> = {
  pro: {
    name: 'Pro',
    price: '7.90',
    billingPeriod: 'month',
    slug: 'pro',
  },
  premium: {
    name: 'Premium',
    price: '59',
    billingPeriod: 'year',
    slug: 'premium',
  },
};

export function getPlanBySlug(slug: PaidPlan): CheckoutPlanInfo {
  return PLAN_CONFIG[slug];
}
