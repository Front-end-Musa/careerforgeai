import seoPages from './seo-pages.json';
import type { SeoMetadata } from '../services/seo.service';

export const SITE_NAME = 'ResumeCrafts AI';
export const BASE_URL = 'https://resume-crafts.com';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/hero-image.png`;

export type SeoSchemaKind = 'home' | 'software' | 'legal';

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
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: BASE_URL,
      },
      buildWebApplicationSchema(page),
    ];
  }

  if (page.schema === 'software') {
    return [buildWebApplicationSchema(page), buildBreadcrumbSchema(page)];
  }

  if (page.schema === 'legal') {
    return buildBreadcrumbSchema(page);
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
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '59',
      priceCurrency: 'USD',
      offerCount: 3,
    },
  };
}

function buildBreadcrumbSchema(page: SeoPageConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BASE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.title.split('|')[0].trim(),
        item: `${BASE_URL}${page.path}`,
      },
    ],
  };
}
