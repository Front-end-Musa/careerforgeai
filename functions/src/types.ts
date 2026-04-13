export type PlanTier = "free" | "pro" | "premium";
export type SubscriptionStatus = "none" | "active" | "past_due" | "cancelled";

export type AppUserDoc = {
  name?: string;
  email?: string;
  plan?: PlanTier;
  providerCustomerId?: string;
  providerSubscriptionId?: string;
  providerVariantId?: string;
  subscriptionStatus?: SubscriptionStatus;
  currentPeriodEnd?: Date | null;
  aiUsageCount?: number;
  aiUsageWindowKey?: string | null;
  entitlementsUpdatedAt?: number | null;
};

export type PlanEntitlements = {
  plan: PlanTier;
  monthlyAiLimit: number;
  jobTrackerEnabled: boolean;
};

export type TailorExperienceEntry = {
  company?: string;
  role?: string;
  startDate?: string;
  endDate?: string;
  description?: string[];
};

export type TailorResumeInput = {
  summary?: string;
  skills?: string[];
  experience?: TailorExperienceEntry[];
  meta?: {
    createdAt?: string;
    updatedAt?: string;
    source?: "ai" | "manual";
    version?: number;
    tailoring?: {
      source?: "job-description";
      companyName?: string;
      position?: string;
      tailoredAt?: string;
    };
  };
  [key: string]: unknown;
};

export type GenerateResumeRequest = {
  resumeText: string;
};

export type GenerateTextResponse = {
  text: string;
};

export type GenerateCoverLetterRequest = {
  resumeText: string;
  jobDescription: string;
  companyName: string;
  position: string;
  tone: string;
};

export type TailorResumeRequest = {
  resume: TailorResumeInput;
  companyName: string;
  position: string;
  jobDescription: string;
};

export type TailorResumeResponse = {
  resume: TailorResumeInput;
};

export type DownloadResumeRequest = {
  resumeId: string;
};

export type DownloadResumeResponse = {
  fileName: string;
  contentType: string;
  content: string;
};

export type EnsurePolarCustomerResponse = {
  providerCustomerId: string;
  entitlementsUpdatedAt: number;
};

export type CreateCheckoutRequest = {
  priceId: string;
};

export type DeletePolarCustomerResponse = {
  success: boolean;
};

export type SyncEntitlementsResponse = {
  plan: PlanTier;
  subscriptionStatus: SubscriptionStatus;
  providerCustomerId: string;
  providerSubscriptionId: string;
  providerVariantId: string;
  currentPeriodEnd: number | null;
  entitlementsUpdatedAt: number;
};

export type BackfillPolarCustomersRequest = {
  limit?: number;
  dryRun?: boolean;
};

export type BackfillPolarCustomersResponse = {
  dryRun: boolean;
  scanned: number;
  success: number;
  failed: number;
  failures: Array<{ uid: string; error: string }>;
};
