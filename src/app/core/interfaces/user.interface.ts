export interface AppUser {
  uid?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  profileViews: number;
  plan: 'free' | 'pro' | 'premium';
  subscriptionStatus: 'none' | 'active' | 'past_due' | 'canceled';
  currentPeriodEnd: Date | null;
  providerCustomerId: string;
  providerToken: string;
  freeGenerationsUsed: number;
  emailVerified?: boolean;
};

export interface LoginUser {
  email: string;
  password: string;
}
