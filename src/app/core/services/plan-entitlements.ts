import { PlanEntitlements, PlanTier } from '../interfaces/entitlements.interface';

const PLAN_ENTITLEMENTS: Record<PlanTier, PlanEntitlements> = {
  free: {
    resumeGenerationsPerPeriod: 1,
    coverLettersPerPeriod: 3,
    canUseJobTracker: false,
    canStoreGeneratedResume: false,
    canDownloadResume: false,
  },
  pro: {
    resumeGenerationsPerPeriod: 5,
    coverLettersPerPeriod: 20,
    canUseJobTracker: false,
    canStoreGeneratedResume: true,
    canDownloadResume: true,
  },
  premium: {
    resumeGenerationsPerPeriod: 10,
    coverLettersPerPeriod: 35,
    canUseJobTracker: true,
    canStoreGeneratedResume: true,
    canDownloadResume: true,
  },
};

export function getPlanEntitlements(plan: PlanTier): PlanEntitlements {
  return PLAN_ENTITLEMENTS[plan];
}
