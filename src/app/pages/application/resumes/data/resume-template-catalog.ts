import { ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';

export type PlanTier = 'free' | 'pro' | 'premium';
export type ResumeTemplateFamily = 'classic' | 'modern' | 'premium' | 'latex';
export type ResumeTemplateRenderer = ResumeTemplateFamily;
export type ResumeRenderContext = 'picker' | 'editor' | 'export';

export interface ResumeTemplatePreviewSettings {
  pickerScale: number;
  pickerWidthPercent: number;
}

export interface ResumeTemplateOption {
  id: ResumeTemplateId;
  name: string;
  description: string;
  requiredPlan: PlanTier;
  family: ResumeTemplateFamily;
  renderer: ResumeTemplateRenderer;
  preview: ResumeTemplatePreviewSettings;
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
    preview: { pickerScale: 0.46, pickerWidthPercent: 218 },
  },
  {
    id: 'ats-simple',
    name: 'ATS-Friendly Simple',
    description: 'Optimized for ATS scanners with minimal styling.',
    requiredPlan: 'free',
    family: 'classic',
    renderer: 'classic',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218 },
  },
  {
    id: 'classic-one-column',
    name: 'Classic One-Column',
    description: 'Traditional single-column resume layout.',
    requiredPlan: 'free',
    family: 'classic',
    renderer: 'classic',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218 },
  },
  {
    id: 'overleaf-compact',
    name: 'Harshibar Creator',
    description: 'Compact Overleaf-style LaTeX resume with sharp section rules and mono contact details.',
    requiredPlan: 'free',
    family: 'latex',
    renderer: 'latex',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218 },
  },
  {
    id: 'overleaf-jake',
    name: "Jake's Resume",
    description: 'Classic Overleaf-inspired one-column LaTeX resume with ATS-friendly structure.',
    requiredPlan: 'free',
    family: 'latex',
    renderer: 'latex',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218 },
  },
  {
    id: 'overleaf-academic',
    name: 'Overleaf Academic',
    description: 'Research-forward LaTeX template with publication-style spacing and credential-heavy sections.',
    requiredPlan: 'pro',
    family: 'latex',
    renderer: 'latex',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218 },
  },
  {
    id: 'overleaf-executive',
    name: 'Overleaf Executive',
    description: 'Executive LaTeX layout with premium typography, leadership summary, and formal hierarchy.',
    requiredPlan: 'premium',
    family: 'latex',
    renderer: 'latex',
    preview: { pickerScale: 0.46, pickerWidthPercent: 218 },
  },
  {
    id: 'pro-modern',
    name: 'Pro (Professional & Modern)',
    description: 'Modern two-column layout with strong hierarchy.',
    requiredPlan: 'pro',
    family: 'modern',
    renderer: 'modern',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
  },
  {
    id: 'cascade',
    name: 'Cascade (Pro)',
    description: 'Elegant spacing and bold section flow.',
    requiredPlan: 'pro',
    family: 'modern',
    renderer: 'modern',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
  },
  {
    id: 'cubic-pro',
    name: 'Cubic (Pro)',
    description: 'Geometric spacing with crisp block headings.',
    requiredPlan: 'pro',
    family: 'modern',
    renderer: 'modern',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
  },
  {
    id: 'tech-savvy',
    name: 'Tech-Savvy',
    description: 'Sleek tech-forward layout with sharp accents.',
    requiredPlan: 'pro',
    family: 'modern',
    renderer: 'modern',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
  },
  {
    id: 'modern-executive',
    name: 'Modern Executive',
    description: 'Executive-ready layout with confident styling.',
    requiredPlan: 'pro',
    family: 'modern',
    renderer: 'modern',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
  },
  {
    id: 'premium-executive',
    name: 'Premium (Executive & High-End)',
    description: 'High-end executive formatting with luxury detail.',
    requiredPlan: 'premium',
    family: 'premium',
    renderer: 'premium',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
  },
  {
    id: 'executive-edge',
    name: 'Executive Edge',
    description: 'Polished, premium layout for senior roles.',
    requiredPlan: 'premium',
    family: 'premium',
    renderer: 'premium',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
  },
  {
    id: 'graphical-genius',
    name: 'Graphical Genius',
    description: 'Premium visual balance with refined typography.',
    requiredPlan: 'premium',
    family: 'premium',
    renderer: 'premium',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
  },
  {
    id: 'elite-senior',
    name: 'Elite Senior',
    description: 'Senior-level polish with calm hierarchy.',
    requiredPlan: 'premium',
    family: 'premium',
    renderer: 'premium',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
  },
  {
    id: 'metamorphic-masterpiece',
    name: 'Metamorphic Masterpiece',
    description: 'Luxury serif styling with layered sections.',
    requiredPlan: 'premium',
    family: 'premium',
    renderer: 'premium',
    preview: { pickerScale: 0.44, pickerWidthPercent: 228 },
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

export function isLatexTemplate(templateId: unknown): boolean {
  return getTemplateById(templateId).family === 'latex';
}
