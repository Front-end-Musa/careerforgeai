import { Timestamp } from '@angular/fire/firestore';

export type PlanTier = 'free' | 'pro' | 'premium';
export type SubscriptionStatus = 'none' | 'active' | 'past_due' | 'cancelled';

export interface PlanEntitlements {
  resumeGenerationsPerPeriod: number;
  coverLettersPerPeriod: number;
  canUseJobTracker: boolean;
  canStoreGeneratedResume: boolean;
  canDownloadResume: boolean;
}

export interface UsageWindow {
  usagePeriodKey: string | null;
  usagePeriodStartedAt: Timestamp | null;
  usagePeriodEndsAt: Timestamp | null;
  resumeGenerationsUsed: number;
  coverLettersUsed: number;
}
