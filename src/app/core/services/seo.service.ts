import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  jsonLd?: unknown;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly baseUrl = 'https://resume-crafts.com';
  private readonly defaultImage = `${this.baseUrl}/assets/hero-image.png`;

  constructor(
    private readonly titleService: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  apply(metadata: SeoMetadata): void {
    const canonicalUrl = this.toCanonicalUrl(metadata.canonicalPath);
    const ogImage = metadata.ogImage ?? this.defaultImage;
    const twitterCard = metadata.twitterCard ?? 'summary_large_image';
    const ogType = metadata.ogType ?? 'website';
    const robots = metadata.robots ?? 'index, follow';

    this.titleService.setTitle(metadata.title);

    this.meta.updateTag({ name: 'description', content: metadata.description });
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ name: 'author', content: 'ResumeCrafts AI' });
    if (metadata.keywords) {
      this.meta.updateTag({ name: 'keywords', content: metadata.keywords });
    }

    this.meta.updateTag({ property: 'og:site_name', content: 'ResumeCrafts AI' });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:title', content: metadata.title });
    this.meta.updateTag({ property: 'og:description', content: metadata.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: ogImage });

    this.meta.updateTag({ name: 'twitter:card', content: twitterCard });
    this.meta.updateTag({ name: 'twitter:title', content: metadata.title });
    this.meta.updateTag({ name: 'twitter:description', content: metadata.description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    this.setCanonical(canonicalUrl);
    this.setJsonLd(metadata.jsonLd);
  }

  private toCanonicalUrl(path?: string): string {
    if (!path || path === '/') {
      return `${this.baseUrl}/`;
    }
    return `${this.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setJsonLd(data: unknown): void {
    const scriptId = 'seo-structured-data';
    const existing = this.document.getElementById(scriptId);
    if (existing) {
      existing.remove();
    }

    if (!data) {
      return;
    }

    const script = this.document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
