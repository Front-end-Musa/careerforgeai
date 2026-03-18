import { Timestamp } from "@angular/fire/firestore";

export interface AppUser {
  uid?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  profileViews: number;
  plan: 'free' | 'pro' | 'premium';
  subscriptionStatus: 'none' | 'active' | 'past_due' | 'cancelled';
  currentPeriodEnd: Timestamp | null;
  providerCustomerId: string;
  providerSubscriptionId: string;
  providerVariantId: string;
  freeGenerationsUsed: number;
  emailVerified?: boolean;
  entitlementsUpdatedAt?: number | null;
};

export interface LoginUser {
  email: string;
  password: string;
}
