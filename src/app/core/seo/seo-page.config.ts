import seoPages from './seo-pages.json';
import type { SeoMetadata } from '../services/seo.service';

export const SITE_NAME = 'ResumeCrafts AI';
export const BASE_URL = 'https://resume-crafts.com';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/hero-image.png`;

export type SeoSchemaKind = 'home' | 'software' | 'legal' | 'faq' | 'product';

export interface SeoPageConfig {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  robots: string;
  ogType: string;
  sitemap: boolean;
  changefreq?: string;
  priority?: number;
  schema?: SeoSchemaKind;
  // For product schema
  ratingValue?: number;
  reviewCount?: number;
  // For FAQ schema
  faqs?: Array<{ question: string; answer: string }>;
}

export const SEO_PAGES = seoPages as SeoPageConfig[];
export const INDEXABLE_SEO_PAGES = SEO_PAGES.filter((page) => page.sitemap);

export const SEO_METADATA: Record<string, SeoMetadata> = SEO_PAGES.reduce(
  (metadata, page) => ({
    ...metadata,
    [page.path]: toSeoMetadata(page),
  }),
  {} as Record<string, SeoMetadata>,
);

function toSeoMetadata(page: SeoPageConfig): SeoMetadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    robots: page.robots,
    canonicalPath: page.path,
    ogType: page.ogType,
    jsonLd: buildJsonLd(page),
  };
}

function buildJsonLd(page: SeoPageConfig): unknown {
  if (page.schema === 'home') {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: BASE_URL,
        logo: DEFAULT_OG_IMAGE,
        sameAs: [
          'https://twitter.com/resumecraftsai',
          'https://linkedin.com/company/resumecraftsai',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'support@resume-crafts.com',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: BASE_URL,
        searchAction: {
          '@type': 'SearchAction',
          target: `${BASE_URL}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      buildWebApplicationSchema(page),
      buildFaqSchema(),
    ];
  }

  if (page.schema === 'software') {
    return [buildProductSchema(page), buildWebApplicationSchema(page), buildBreadcrumbSchema(page)];
  }

  if (page.schema === 'legal') {
    return buildBreadcrumbSchema(page);
  }

  if (page.schema === 'faq') {
    return [buildFaqSchema(), buildBreadcrumbSchema(page)];
  }

  if (page.schema === 'product') {
    return [buildProductSchema(page), buildBreadcrumbSchema(page)];
  }

  return undefined;
}

function buildWebApplicationSchema(page: SeoPageConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: page.description,
    url: `${BASE_URL}${page.path === '/' ? '' : page.path}`,
    image: DEFAULT_OG_IMAGE,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '0',
      highPrice: '59',
      offerCount: 3,
      offers: [
        {
          '@type': 'Offer',
          name: 'Free Plan',
          price: '0',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          name: 'Pro Plan',
          price: '29',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          name: 'Premium Plan',
          price: '59',
          priceCurrency: 'USD',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2500',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

function buildProductSchema(page: SeoPageConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: page.description,
    url: `${BASE_URL}${page.path === '/' ? '' : page.path}`,
    image: DEFAULT_OG_IMAGE,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    ...(page.ratingValue && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: page.ratingValue,
        ratingCount: page.reviewCount || 100,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '0',
      highPrice: '59',
    },
  };
}

function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is ResumeCrafts AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ResumeCrafts AI is an AI-powered resume builder and cover letter generator designed to help job seekers create professional, ATS-optimized applications in minutes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is ResumeCrafts AI free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! ResumeCrafts AI offers a free plan that lets you create and manage resumes. We also have Pro and Premium plans with additional features like unlimited AI generation and advanced templates.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the AI resume generator work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply provide your information and ResumeCrafts AI uses advanced AI to generate professional resume content, suggestions, and cover letters tailored to your industry and job target.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are ResumeCrafts AI resumes ATS-friendly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all ResumeCrafts AI resumes are optimized for Applicant Tracking Systems (ATS). Our templates are designed to pass ATS scanning and improve your chances of getting interviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I export my resume as PDF?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can download your resume as a PDF from the resume editor. PDF export is available on all plans including the free tier.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ResumeCrafts AI help with cover letters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! ResumeCrafts AI includes an AI cover letter generator that creates personalized, compelling cover letters matching your resume and target job.',
        },
      },
    ],
  };
}

function buildBreadcrumbSchema(page: SeoPageConfig) {
  const pathSegments = page.path.split('/').filter((segment) => segment);
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${BASE_URL}/`,
    },
  ];

  pathSegments.forEach((segment, index) => {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: `${BASE_URL}/${pathSegments.slice(0, index + 1).join('/')}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };
}
