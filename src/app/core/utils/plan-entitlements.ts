import { AppUser } from '../interfaces/user.interface';

export type PlanTier = 'free' | 'pro' | 'premium';

export interface PlanEntitlements {
  plan: PlanTier;
  monthlyAiLimit: number;
  jobTrackerEnabled: boolean;
}

export interface AiUsageSummary extends PlanEntitlements {
  used: number;
  remaining: number;
  windowKey: string;
}

const PLAN_ENTITLEMENTS: Record<PlanTier, Omit<PlanEntitlements, 'plan'>> = {
  free: {
    monthlyAiLimit: 3,
    jobTrackerEnabled: false,
  },
  pro: {
    monthlyAiLimit: 30,
    jobTrackerEnabled: false,
  },
  premium: {
    monthlyAiLimit: 80,
    jobTrackerEnabled: true,
  },
};

export function getCurrentAiUsageWindowKey(date = new Date()) {
  const year = date.getUTCFullYear();
  const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
  return `${year}-${month}`;
}

export function getPlanEntitlements(plan: PlanTier = 'free'): PlanEntitlements {
  const normalizedPlan = plan in PLAN_ENTITLEMENTS ? plan : 'free';
  return {
    plan: normalizedPlan,
    ...PLAN_ENTITLEMENTS[normalizedPlan],
  };
}

export function getAiUsageSummary(user: Pick<AppUser, 'plan' | 'aiUsageCount' | 'aiUsageWindowKey'> | null | undefined) {
  const plan = user?.plan ?? 'free';
  const entitlements = getPlanEntitlements(plan);
  const currentWindowKey = getCurrentAiUsageWindowKey();
  const storedWindowKey = user?.aiUsageWindowKey ?? null;
  const used = storedWindowKey === currentWindowKey ? user?.aiUsageCount ?? 0 : 0;

  return {
    ...entitlements,
    used,
    remaining: Math.max(0, entitlements.monthlyAiLimit - used),
    windowKey: currentWindowKey,
  } satisfies AiUsageSummary;
}
