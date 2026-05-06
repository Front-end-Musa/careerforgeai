import { Timestamp } from '@angular/fire/firestore';
import {
  PlanEntitlements,
  PlanTier,
  SubscriptionStatus,
} from './entitlements.interface';
import { AuthProviderId } from './auth-linking.interface';

export interface AppUser {
  uid?: string;
  name: string;
  email: string;
  password?: string;
  photoURL?: string | null;
  providers?: AuthProviderId[];
  createdAt?: Timestamp | Date;
  updatedAt?: Timestamp | Date;
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
