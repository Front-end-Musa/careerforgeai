import { ResumeTemplateModal } from './resume-template-modal';
import { RESUME_TEMPLATES } from '../data/resume-template-catalog';

describe('ResumeTemplateModal', () => {
  let component: ResumeTemplateModal;

  beforeEach(() => {
    component = new ResumeTemplateModal();
  });

  it('should include all templates from the shared catalog', () => {
    expect(component.templates.length).toBe(RESUME_TEMPLATES.length);
  });

  it('should expose preview sizing from the shared catalog', () => {
    const style = component.getPreviewStyle(RESUME_TEMPLATES[0]);

    expect(style['--preview-scale']).toBeDefined();
    expect(style['--preview-width']).toContain('%');
  });

  it('should lock paid templates for a free user', () => {
    component.user = {
      name: 'Free User',
      email: 'free@example.com',
      role: 'user',
      profileViews: 0,
      plan: 'free',
      subscriptionStatus: 'none',
      currentPeriodEnd: null,
      providerCustomerId: '',
      providerSubscriptionId: '',
      providerVariantId: '',
      freeGenerationsUsed: 0,
    };
    component.resumeCount = 0;

    expect(component.isLocked('basic')).toBeFalse();
    expect(component.isLocked('developer-classic')).toBeFalse();
    expect(component.isLocked('academic-clean')).toBeFalse();
    expect(component.isLocked('simple-outline')).toBeTrue();
    expect(component.isLocked('modern-sidebar')).toBeTrue();
    expect(component.isLocked('centered-professional')).toBeTrue();
    expect(component.isLocked('boardroom-premium')).toBeTrue();
    expect(component.isLocked('clean-modern')).toBeTrue();
    expect(component.isLocked('executive-simple')).toBeTrue();
  });

  it('should lock all new template selections when the free draft limit is already used', () => {
    component.user = {
      name: 'Free User',
      email: 'free@example.com',
      role: 'user',
      profileViews: 0,
      plan: 'free',
      subscriptionStatus: 'none',
      currentPeriodEnd: null,
      providerCustomerId: '',
      providerSubscriptionId: '',
      providerVariantId: '',
      freeGenerationsUsed: 0,
    };
    component.resumeCount = 1;

    expect(component.isLocked('basic')).toBeTrue();
  });

  it('should unlock all templates for an active premium user', () => {
    component.user = {
      name: 'Premium User',
      email: 'premium@example.com',
      role: 'user',
      profileViews: 0,
      plan: 'premium',
      subscriptionStatus: 'active',
      currentPeriodEnd: null,
      providerCustomerId: 'cust_123',
      providerSubscriptionId: 'sub_123',
      providerVariantId: 'variant_123',
      freeGenerationsUsed: 0,
    };
    component.resumeCount = 3;

    for (const template of component.templates) {
      expect(component.isLocked(template.id)).toBeFalse();
    }
  });
});
