import { Footer } from './footer/footer';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Features } from './features/features';
import { About } from './about/about';
import { PricingPlans } from './pricing-plans/pricing-plans';
import { Faq } from './faq/faq';
import { Contact } from './contact/contact';
import { SimpleSteps } from './simple-steps/simple-steps';
import { ResumeTemplates } from './resume-templates/resume-templates';

@Component({
  selector: 'app-landing',
  imports: [
    Header,
    Hero,
    Features,
    ResumeTemplates,
    About,
    PricingPlans,
    Faq,
    Contact,
    Footer,
    SimpleSteps,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Landing implements AfterViewInit, OnDestroy {
  private readonly hostRef: ElementRef<HTMLElement> = inject(ElementRef);
  private observer?: IntersectionObserver;
  private mutationObserver?: MutationObserver;
  private revealIndex = 0;
  private readonly revealSelector = [
    '.hero .hero-copy',
    '.hero .product-card',
    '.features .head',
    '.features .card',
    '.templates-section .head',
    '.templates-section .template-card',
    '.about .head',
    '.about .mission-card',
    '.about .feature-card',
    '.pricing .head',
    '.pricing .pricing-card',
    '.questions-section .head',
    '.questions-section .qa',
    '.contact-section .head',
    '.contact-section .contact-us',
  ].join(', ');

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const root = this.hostRef.nativeElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.observeRevealTargets(root, true);
      this.mutationObserver = new MutationObserver(() => this.observeRevealTargets(root, true));
      this.mutationObserver.observe(root, { childList: true, subtree: true });
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    this.observeRevealTargets(root);
    this.mutationObserver = new MutationObserver(() => this.observeRevealTargets(root));
    this.mutationObserver.observe(root, { childList: true, subtree: true });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.mutationObserver?.disconnect();
  }

  private observeRevealTargets(root: HTMLElement, visibleImmediately = false): void {
    const revealTargets = Array.from(root.querySelectorAll(this.revealSelector)) as HTMLElement[];

    revealTargets.forEach((element) => {
      if (element.classList.contains('reveal-item')) {
        return;
      }

      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${(this.revealIndex % 8) * 90}ms`);
      this.revealIndex += 1;

      if (visibleImmediately) {
        element.classList.add('is-visible');
        return;
      }

      this.observer?.observe(element);
    });
  }
}
