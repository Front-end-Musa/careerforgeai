import {
  RESUME_TEMPLATES,
  getSafeTemplateId,
  getTemplateById,
  getTemplatesForPlan,
  isTemplateLocked,
} from './resume-template-catalog';

describe('resume-template-catalog', () => {
  it('should define unique template ids with required metadata', () => {
    const ids = RESUME_TEMPLATES.map((template) => template.id);
    const uniqueCount = new Set(ids).size;

    expect(uniqueCount).toBe(ids.length);
    expect(RESUME_TEMPLATES.every((template) => Boolean(template.name && template.description))).toBeTrue();
    expect(
      RESUME_TEMPLATES.every(
        (template) =>
          Boolean(template.family && template.renderer) &&
          template.preview.pickerScale > 0 &&
          template.preview.pickerWidthPercent > 0,
      ),
    ).toBeTrue();
  });

  it('should keep expected tier counts after expansion', () => {
    const freeCount = RESUME_TEMPLATES.filter((template) => template.requiredPlan === 'free').length;
    const proCount = RESUME_TEMPLATES.filter((template) => template.requiredPlan === 'pro').length;
    const premiumCount = RESUME_TEMPLATES.filter((template) => template.requiredPlan === 'premium').length;

    expect(freeCount).toBe(3);
    expect(proCount).toBe(5);
    expect(premiumCount).toBe(3);
  });

  it('should support cumulative access by plan', () => {
    expect(getTemplatesForPlan('free').every((template) => template.requiredPlan === 'free')).toBeTrue();
    expect(getTemplatesForPlan('pro').some((template) => template.requiredPlan === 'free')).toBeTrue();
    expect(getTemplatesForPlan('pro').some((template) => template.requiredPlan === 'pro')).toBeTrue();
    expect(getTemplatesForPlan('premium').length).toBe(RESUME_TEMPLATES.length);
  });

  it('should lock and unlock templates based on cumulative tier ranking', () => {
    expect(isTemplateLocked('free', 'clean-modern')).toBeTrue();
    expect(isTemplateLocked('free', 'developer-classic')).toBeTrue();
    expect(isTemplateLocked('free', 'academic-clean')).toBeTrue();
    expect(isTemplateLocked('free', 'simple-outline')).toBeTrue();
    expect(isTemplateLocked('free', 'modern-sidebar')).toBeTrue();
    expect(isTemplateLocked('free', 'centered-professional')).toBeTrue();
    expect(isTemplateLocked('free', 'executive-simple')).toBeTrue();
    expect(isTemplateLocked('pro', 'clean-modern')).toBeFalse();
    expect(isTemplateLocked('pro', 'developer-classic')).toBeFalse();
    expect(isTemplateLocked('pro', 'academic-clean')).toBeFalse();
    expect(isTemplateLocked('pro', 'simple-outline')).toBeFalse();
    expect(isTemplateLocked('pro', 'modern-sidebar')).toBeFalse();
    expect(isTemplateLocked('pro', 'centered-professional')).toBeTrue();
    expect(isTemplateLocked('pro', 'boardroom-premium')).toBeTrue();
    expect(isTemplateLocked('pro', 'executive-simple')).toBeTrue();
    expect(isTemplateLocked('premium', 'executive-simple')).toBeFalse();
    expect(isTemplateLocked('premium', 'centered-professional')).toBeFalse();
    expect(isTemplateLocked('premium', 'boardroom-premium')).toBeFalse();
  });

  it('should safely fallback to basic when template id is unknown', () => {
    expect(getSafeTemplateId('unknown-template')).toBe('basic');
    expect(getTemplateById('unknown-template').id).toBe('basic');
    expect(getTemplateById(undefined).id).toBe('basic');
  });
});
