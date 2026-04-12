import { ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';

export type PlanTier = 'free' | 'pro' | 'premium';
export type ResumeLayoutType = 'classic' | 'modern' | 'minimal' | 'split-accent' | 'executive-grid';

export interface ResumeTemplateOption {
  id: ResumeTemplateId;
  name: string;
  description: string;
  requiredPlan: PlanTier;
  layoutType: ResumeLayoutType;
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
    layoutType: 'classic',
  },
  {
    id: 'ats-simple',
    name: 'ATS-Friendly Simple',
    description: 'Optimized for ATS scanners with minimal styling.',
    requiredPlan: 'free',
    layoutType: 'classic',
  },
  {
    id: 'classic-one-column',
    name: 'Classic One-Column',
    description: 'Traditional single-column resume layout.',
    requiredPlan: 'free',
    layoutType: 'classic',
  },
  {
    id: 'pro-modern',
    name: 'Pro (Professional & Modern)',
    description: 'Modern two-column layout with strong hierarchy.',
    requiredPlan: 'pro',
    layoutType: 'modern',
  },
  {
    id: 'cascade',
    name: 'Cascade (Pro)',
    description: 'Elegant spacing and bold section flow.',
    requiredPlan: 'pro',
    layoutType: 'modern',
  },
  {
    id: 'cubic-pro',
    name: 'Cubic (Pro)',
    description: 'Geometric spacing with crisp block headings.',
    requiredPlan: 'pro',
    layoutType: 'modern',
  },
  {
    id: 'tech-savvy',
    name: 'Tech-Savvy',
    description: 'Sleek tech-forward layout with sharp accents.',
    requiredPlan: 'pro',
    layoutType: 'modern',
  },
  {
    id: 'modern-executive',
    name: 'Modern Executive',
    description: 'Executive-ready layout with confident styling.',
    requiredPlan: 'pro',
    layoutType: 'modern',
  },
  {
    id: 'premium-executive',
    name: 'Premium (Executive & High-End)',
    description: 'High-end executive formatting with luxury detail.',
    requiredPlan: 'premium',
    layoutType: 'minimal',
  },
  {
    id: 'executive-edge',
    name: 'Executive Edge',
    description: 'Polished, premium layout for senior roles.',
    requiredPlan: 'premium',
    layoutType: 'minimal',
  },
  {
    id: 'graphical-genius',
    name: 'Graphical Genius',
    description: 'Premium visual balance with refined typography.',
    requiredPlan: 'premium',
    layoutType: 'minimal',
  },
  {
    id: 'elite-senior',
    name: 'Elite Senior',
    description: 'Senior-level polish with calm hierarchy.',
    requiredPlan: 'premium',
    layoutType: 'minimal',
  },
  {
    id: 'metamorphic-masterpiece',
    name: 'Metamorphic Masterpiece',
    description: 'Luxury serif styling with layered sections.',
    requiredPlan: 'premium',
    layoutType: 'minimal',
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
