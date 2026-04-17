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
    expect(premiumCount).toBe(5);
  });

  it('should support cumulative access by plan', () => {
    expect(getTemplatesForPlan('free').every((template) => template.requiredPlan === 'free')).toBeTrue();
    expect(getTemplatesForPlan('pro').some((template) => template.requiredPlan === 'free')).toBeTrue();
    expect(getTemplatesForPlan('pro').some((template) => template.requiredPlan === 'pro')).toBeTrue();
    expect(getTemplatesForPlan('premium').length).toBe(RESUME_TEMPLATES.length);
  });

  it('should lock and unlock templates based on cumulative tier ranking', () => {
    expect(isTemplateLocked('free', 'pro-modern')).toBeTrue();
    expect(isTemplateLocked('free', 'premium-executive')).toBeTrue();
    expect(isTemplateLocked('pro', 'pro-modern')).toBeFalse();
    expect(isTemplateLocked('pro', 'premium-executive')).toBeTrue();
    expect(isTemplateLocked('premium', 'premium-executive')).toBeFalse();
  });

  it('should safely fallback to basic when template id is unknown', () => {
    expect(getSafeTemplateId('unknown-template')).toBe('basic');
    expect(getTemplateById('unknown-template').id).toBe('basic');
    expect(getTemplateById(undefined).id).toBe('basic');
  });
});
