import { ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';

export type PlanTier = 'free' | 'pro' | 'premium';
export type ResumeTemplateFamily = 'classic' | 'modern' | 'premium';
export type ResumeTemplateRenderer = ResumeTemplateFamily;
export type ResumeRenderContext = 'picker' | 'editor' | 'export';
export type ResumeTemplateHeader = 'rule' | 'plain' | 'centered' | 'sidebar' | 'warm';
export type ResumeTemplateLayout = 'single-column' | 'two-column' | 'sidebar';

export interface ResumeTemplatePreviewSettings {
  pickerScale: number;
  pickerWidthPercent: number;
  landingScale: number;
  landingWidthPercent: number;
}

export interface ResumeTemplateVisualRecipe {
  layout: ResumeTemplateLayout;
  header: ResumeTemplateHeader;
  accentColor: string;
  hasSidebar: boolean;
}

export interface ResumeTemplateOption {
  id: ResumeTemplateId;
  name: string;
  description: string;
  requiredPlan: PlanTier;
  family: ResumeTemplateFamily;
  renderer: ResumeTemplateRenderer;
  preview: ResumeTemplatePreviewSettings;
  visual: ResumeTemplateVisualRecipe;
}

const PLAN_RANK: Record<PlanTier, number> = {
  free: 1,
  pro: 2,
  premium: 3,
};

export const RESUME_TEMPLATES: readonly ResumeTemplateOption[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Clean, straightforward layout with clear sections.',
    requiredPlan: 'free',
    family: 'classic',
    renderer: 'classic',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218, landingScale: 0.34, landingWidthPercent: 294 },
    visual: { layout: 'single-column', header: 'rule', accentColor: '#f15b2a', hasSidebar: false },
  },
  {
    id: 'ats-simple',
    name: 'ATS-Friendly Simple',
    description: 'Optimized for ATS scanners with minimal styling.',
    requiredPlan: 'free',
    family: 'classic',
    renderer: 'classic',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218, landingScale: 0.34, landingWidthPercent: 294 },
    visual: { layout: 'single-column', header: 'plain', accentColor: '#111827', hasSidebar: false },
  },
  {
    id: 'classic-one-column',
    name: 'Classic One-Column',
    description: 'Traditional single-column resume layout.',
    requiredPlan: 'free',
    family: 'classic',
    renderer: 'classic',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218, landingScale: 0.34, landingWidthPercent: 294 },
    visual: { layout: 'single-column', header: 'centered', accentColor: '#f15b2a', hasSidebar: false },
  },
  {
    id: 'developer-classic',
    name: 'Developer Classic',
    description: 'Structured black-and-white layout with strong rules and technical sections.',
    requiredPlan: 'pro',
    family: 'classic',
    renderer: 'classic',
    preview: { pickerScale: 0.45, pickerWidthPercent: 222, landingScale: 0.335, landingWidthPercent: 299 },
    visual: { layout: 'single-column', header: 'rule', accentColor: '#f15b2a', hasSidebar: false },
  },
  {
    id: 'academic-clean',
    name: 'Academic Clean',
    description: 'Centered one-column format for education-heavy and early-career resumes.',
    requiredPlan: 'pro',
    family: 'classic',
    renderer: 'classic',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218, landingScale: 0.34, landingWidthPercent: 294 },
    visual: { layout: 'single-column', header: 'centered', accentColor: '#f15b2a', hasSidebar: false },
  },
  {
    id: 'simple-outline',
    name: 'Simple Outline',
    description: 'Minimal outline format with blue header details and compact section flow.',
    requiredPlan: 'pro',
    family: 'classic',
    renderer: 'classic',
    preview: { pickerScale: 0.47, pickerWidthPercent: 214, landingScale: 0.345, landingWidthPercent: 290 },
    visual: { layout: 'single-column', header: 'rule', accentColor: '#f15b2a', hasSidebar: false },
  },
  {
    id: 'clean-modern',
    name: 'Clean Modern',
    description: 'Simple two-column layout with a focused profile and scannable sections.',
    requiredPlan: 'pro',
    family: 'modern',
    renderer: 'modern',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228, landingScale: 0.325, landingWidthPercent: 308 },
    visual: { layout: 'sidebar', header: 'sidebar', accentColor: '#173b57', hasSidebar: true },
  },
  {
    id: 'modern-sidebar',
    name: 'Modern Sidebar',
    description: 'Pro layout with a calm sidebar profile and polished achievement cards.',
    requiredPlan: 'pro',
    family: 'modern',
    renderer: 'modern',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228, landingScale: 0.325, landingWidthPercent: 308 },
    visual: { layout: 'sidebar', header: 'sidebar', accentColor: '#173b57', hasSidebar: true },
  },
  {
    id: 'executive-simple',
    name: 'Executive Simple',
    description: 'Premium layout with restrained hierarchy for senior roles.',
    requiredPlan: 'premium',
    family: 'premium',
    renderer: 'premium',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228, landingScale: 0.325, landingWidthPercent: 308 },
    visual: { layout: 'two-column', header: 'warm', accentColor: '#f15b2a', hasSidebar: true },
  },
  {
    id: 'centered-professional',
    name: 'Centered Professional',
    description: 'Polished centered layout with a contact band and restrained section hierarchy.',
    requiredPlan: 'premium',
    family: 'premium',
    renderer: 'premium',
    preview: { pickerScale: 0.43, pickerWidthPercent: 232, landingScale: 0.32, landingWidthPercent: 313 },
    visual: { layout: 'single-column', header: 'warm', accentColor: '#f15b2a', hasSidebar: false },
  },
  {
    id: 'boardroom-premium',
    name: 'Boardroom Premium',
    description: 'Executive layout with formal spacing, warm panels, and senior-level polish.',
    requiredPlan: 'premium',
    family: 'premium',
    renderer: 'premium',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228, landingScale: 0.325, landingWidthPercent: 308 },
    visual: { layout: 'two-column', header: 'warm', accentColor: '#f15b2a', hasSidebar: true },
  },
];

const TEMPLATE_MAP = new Map<ResumeTemplateId, ResumeTemplateOption>(
  RESUME_TEMPLATES.map((template) => [template.id, template]),
);

export function getSafeTemplateId(templateId: unknown): ResumeTemplateId {
  if (typeof templateId !== 'string') {
    return 'basic';
  }

  if (!TEMPLATE_MAP.has(templateId as ResumeTemplateId)) {
    return 'basic';
  }

  return templateId as ResumeTemplateId;
}

export function getTemplateById(templateId: unknown): ResumeTemplateOption {
  return TEMPLATE_MAP.get(getSafeTemplateId(templateId)) ?? TEMPLATE_MAP.get('basic')!;
}

export function getTemplatesForPlan(plan: PlanTier): ResumeTemplateOption[] {
  return RESUME_TEMPLATES.filter((template) => PLAN_RANK[template.requiredPlan] <= PLAN_RANK[plan]);
}

export function isTemplateLocked(plan: PlanTier, templateId: unknown): boolean {
  const template = getTemplateById(templateId);
  return PLAN_RANK[plan] < PLAN_RANK[template.requiredPlan];
}

export function getTemplateLabel(templateId: unknown): string {
  return getTemplateById(templateId).name;
}
