import { ResumePreview } from './resume-preview';

describe('ResumePreview', () => {
  let component: ResumePreview;

  beforeEach(() => {
    component = new ResumePreview();
  });

  it('should resolve modern layout for pro templates', () => {
    component.templateId = 'pro-modern';

    expect(component.layoutType).toBe('modern');
  });

  it('should resolve minimal layout for premium templates', () => {
    component.templateId = 'premium-executive';

    expect(component.layoutType).toBe('minimal');
  });

  it('should resolve classic layout for free templates', () => {
    component.templateId = 'basic';

    expect(component.layoutType).toBe('classic');
  });
});
