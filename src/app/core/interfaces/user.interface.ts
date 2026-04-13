import { Timestamp } from '@angular/fire/firestore';
import {
  PlanEntitlements,
  PlanTier,
  SubscriptionStatus,
} from './entitlements.interface';

export interface AppUser {
  uid?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  profileViews: number;
  plan: PlanTier;
  subscriptionStatus: SubscriptionStatus;
  currentPeriodEnd: Timestamp | null;
  providerCustomerId: string;
  providerSubscriptionId: string;
  providerVariantId: string;
  entitlements?: PlanEntitlements;
  resumeGenerationsUsed?: number;
  coverLettersUsed?: number;
  usagePeriodKey?: string | null;
  usagePeriodStartedAt?: Timestamp | null;
  usagePeriodEndsAt?: Timestamp | null;
  freeGenerationsUsed?: number;
  fullResumeGenerationsUsed?: number;
  emailVerified?: boolean;
  entitlementsUpdatedAt?: number | null;
}

export interface LoginUser {
  email: string;
  password: string;
}
