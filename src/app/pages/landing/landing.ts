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
import { AuthFacade } from '../auth/data/auth.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [Header, Hero, Features, About, PricingPlans, Faq, Contact, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Landing implements AfterViewInit, OnDestroy {
  private readonly hostRef: ElementRef<HTMLElement> = inject(ElementRef);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const root = this.hostRef.nativeElement;
    const revealSelector = [
      '.hero .text',
      '.hero .picture',
      '.features .head',
      '.features .card',
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
    const revealTargets = Array.from(root.querySelectorAll(revealSelector)) as HTMLElement[];

    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${(index % 8) * 90}ms`);
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealTargets.forEach((element) => element.classList.add('is-visible'));
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

    revealTargets.forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
