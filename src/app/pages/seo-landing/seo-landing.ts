import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer } from '../landing/footer/footer';
import { LandingCta } from '../landing/landing-cta/landing-cta';
import { PricingPlans } from '../landing/pricing-plans/pricing-plans';
import { ResumeTemplates } from '../landing/resume-templates/resume-templates';
import { Logo } from '../logos/logo/logo';

type SeoPageKey =
  | 'ai-resume-builder'
  | 'ats-resume-templates'
  | 'cover-letter-generator'
  | 'job-application-tracker'
  | 'pricing';

interface SeoPageContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  secondaryLink: string;
  secondaryLabel: string;
  proof: string[];
  sections: {
    title: string;
    body: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  showTemplates?: boolean;
  showPricing?: boolean;
}

const PAGE_CONTENT: Record<SeoPageKey, SeoPageContent> = {
  'ai-resume-builder': {
    eyebrow: 'AI resume builder',
    title: 'Build an ATS-friendly resume from real career details',
    description:
      'ResumeCrafts AI helps job seekers turn work history, education, skills, and target roles into editable resume drafts with clean templates and paid PDF export.',
    ctaLabel: 'Build My Resume',
    secondaryLink: '/ats-resume-templates',
    secondaryLabel: 'View templates',
    proof: ['Free plan available', '11 templates', 'AI summaries and bullets'],
    sections: [
      {
        title: 'Start from facts, then improve the wording',
        body:
          'Add your role, experience, education, and skills, then use AI to draft summaries and resume bullets that stay tied to the information you provide.',
      },
      {
        title: 'Keep the resume editable',
        body:
          'Generated content opens in the resume editor, so you can adjust wording, sections, templates, and formatting before sending an application.',
      },
      {
        title: 'Prepare for real applications',
        body:
          'Use free templates to get started, then unlock paid PDF export and additional templates when you are ready to send polished applications.',
      },
    ],
    faqs: [
      {
        question: 'Can I edit the AI-generated resume?',
        answer:
          'Yes. Resume drafts remain editable, including summaries, sections, skills, template choice, and formatting.',
      },
      {
        question: 'Is there a free plan?',
        answer:
          'Yes. The free plan includes the resume builder, a saved draft, free templates, and limited AI generations.',
      },
    ],
  },
  'ats-resume-templates': {
    eyebrow: 'ATS resume templates',
    title: 'Choose resume templates built for clear applications',
    description:
      'Browse ATS-friendly free layouts and polished Pro and Premium templates that work with the ResumeCrafts AI editor and preview tools.',
    ctaLabel: 'Use a Template',
    secondaryLink: '/ai-resume-builder',
    secondaryLabel: 'Explore builder',
    proof: ['ATS-friendly basics', 'Free, Pro, and Premium tiers', 'Live resume preview'],
    showTemplates: true,
    sections: [
      {
        title: 'Start simple when parsing matters',
        body:
          'Clean, structured templates help keep your resume easy to scan and easier to review before submitting through applicant tracking systems.',
      },
      {
        title: 'Upgrade design when presentation matters',
        body:
          'Pro and Premium templates add stronger visual structure for roles where polish, hierarchy, and presentation quality matter.',
      },
    ],
    faqs: [
      {
        question: 'How many templates are available?',
        answer:
          'The current catalog has 11 resume templates across Free, Pro, and Premium tiers.',
      },
      {
        question: 'Can I switch templates after writing my resume?',
        answer:
          'Yes. Resume content and template choice are separate, so you can try layouts before finalizing.',
      },
    ],
  },
  'cover-letter-generator': {
    eyebrow: 'AI cover letter generator',
    title: 'Generate targeted cover letters from your resume and job details',
    description:
      'Use your resume, job description, company name, position, and tone to create a tailored cover letter draft for each application.',
    ctaLabel: 'Create a Cover Letter',
    secondaryLink: '/ai-resume-builder',
    secondaryLabel: 'Build resume first',
    proof: ['Resume-based drafts', 'Job-description context', 'Tone controls'],
    sections: [
      {
        title: 'Tie each letter to the target role',
        body:
          'ResumeCrafts AI uses the target company, position, job description, and your resume text to produce a focused cover letter draft.',
      },
      {
        title: 'Control the tone',
        body:
          'Choose the tone that fits the company and role, then review and adjust the generated letter before sending it.',
      },
      {
        title: 'Keep application assets together',
        body:
          'Use cover letters alongside resumes and job tracking so each application has the right materials in one workspace.',
      },
    ],
    faqs: [
      {
        question: 'What information does the cover letter generator need?',
        answer:
          'It uses a resume, job description, company name, position, and preferred tone.',
      },
      {
        question: 'Can I generate more than one cover letter?',
        answer:
          'Yes. Plan limits vary by tier, with paid plans including higher monthly cover letter quotas.',
      },
    ],
  },
  'job-application-tracker': {
    eyebrow: 'Job application tracker',
    title: 'Track applications in the same workspace as your resumes',
    description:
      'Premium users can organize companies and application stages in a focused tracker built for active job searches.',
    ctaLabel: 'Start Tracking',
    secondaryLink: '/pricing',
    secondaryLabel: 'Compare plans',
    proof: ['Premium tracker', 'Application stages', 'Resume and letter workflow'],
    sections: [
      {
        title: 'See where every application stands',
        body:
          'Track companies and application stages so serious job searches do not disappear into notes, spreadsheets, or inbox threads.',
      },
      {
        title: 'Connect tracking to application assets',
        body:
          'ResumeCrafts AI keeps resumes, cover letters, and application organization close together, reducing context switching during a busy search.',
      },
      {
        title: 'Use it for high-volume searches',
        body:
          'The tracker is designed for job seekers applying to multiple roles and needing a simple pipeline view of active opportunities.',
      },
    ],
    faqs: [
      {
        question: 'Which plan includes the job tracker?',
        answer: 'The job application tracker is included with the Premium plan.',
      },
      {
        question: 'Is the tracker separate from resumes?',
        answer:
          'It is part of the same application workspace, so resumes, cover letters, and tracking live together.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Choose the resume and application plan that fits your search',
    description:
      'Compare Free, Pro, and Premium plans for resume building, AI generations, cover letters, templates, PDF export, and job tracking.',
    ctaLabel: 'Start Free',
    secondaryLink: '/ai-resume-builder',
    secondaryLabel: 'Explore builder',
    proof: ['Free plan available', 'Pro monthly option', 'Premium yearly option'],
    showPricing: true,
    sections: [
      {
        title: 'Start free, upgrade when you need exports',
        body:
          'The free plan helps you draft a resume and try core AI tools. Paid plans add higher quotas, PDF export, and more advanced workflow features.',
      },
      {
        title: 'Pick Pro for resume and cover letter volume',
        body:
          'Pro is designed for job seekers who need more AI generations, cover letters, Pro templates, resume tailoring, and downloadable resumes.',
      },
      {
        title: 'Pick Premium for a fuller search workspace',
        body:
          'Premium adds all templates, higher AI quotas, PDF export, resume tailoring, and the job application tracker.',
      },
    ],
    faqs: [
      {
        question: 'Can I use ResumeCrafts AI for free?',
        answer:
          'Yes. The Free plan includes resume building, free templates, and limited AI usage.',
      },
      {
        question: 'Which plan includes PDF export?',
        answer: 'PDF export is available on paid plans.',
      },
    ],
  },
};

@Component({
  selector: 'app-seo-landing',
  imports: [
    CommonModule,
    RouterLink,
    Logo,
    LandingCta,
    ResumeTemplates,
    PricingPlans,
    Footer,
  ],
  templateUrl: './seo-landing.html',
  styleUrl: './seo-landing.scss',
})
export class SeoLanding {
  private readonly route = inject(ActivatedRoute);
  readonly pageKey = this.route.snapshot.data['seoPage'] as SeoPageKey;
  readonly content = PAGE_CONTENT[this.pageKey];
  readonly relatedLinks = [
    { label: 'AI Resume Builder', path: '/ai-resume-builder' },
    { label: 'ATS Templates', path: '/ats-resume-templates' },
    { label: 'Cover Letter Generator', path: '/cover-letter-generator' },
    { label: 'Job Tracker', path: '/job-application-tracker' },
    { label: 'Pricing', path: '/pricing' },
  ].filter((link) => link.path !== `/${this.pageKey}`);
}
