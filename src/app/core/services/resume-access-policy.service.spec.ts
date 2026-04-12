import { ResumeAccessPolicyService } from './resume-access-policy.service';

describe('ResumeAccessPolicyService', () => {
  let service: ResumeAccessPolicyService;

  beforeEach(() => {
    service = new ResumeAccessPolicyService();
  });

  it('allows one free saved resume', () => {
    const user = {
      name: 'Free User',
      email: 'free@example.com',
      role: 'user',
      profileViews: 0,
      plan: 'free' as const,
      subscriptionStatus: 'none' as const,
      currentPeriodEnd: null,
      providerCustomerId: '',
      providerSubscriptionId: '',
      providerVariantId: '',
      freeGenerationsUsed: 0,
    };

    expect(service.canCreateResume(user, 0)).toBeTrue();
    expect(service.canCreateResume(user, 1)).toBeFalse();
    expect(service.canKeepFreeDraft(user, 1)).toBeTrue();
  });

  it('requires an active paid subscription for downloads and tailoring', () => {
    const cancelledProUser = {
      name: 'Pro User',
      email: 'pro@example.com',
      role: 'user',
      profileViews: 0,
      plan: 'pro' as const,
      subscriptionStatus: 'cancelled' as const,
      currentPeriodEnd: null,
      providerCustomerId: '',
      providerSubscriptionId: '',
      providerVariantId: '',
      freeGenerationsUsed: 0,
    };
    const activeProUser = {
      ...cancelledProUser,
      subscriptionStatus: 'active' as const,
    };

    expect(service.canExportResume(cancelledProUser)).toBeFalse();
    expect(service.canTailorResume(cancelledProUser)).toBeFalse();
    expect(service.canExportResume(activeProUser)).toBeTrue();
    expect(service.canTailorResume(activeProUser)).toBeTrue();
  });
});
