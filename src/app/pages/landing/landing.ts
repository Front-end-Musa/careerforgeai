import { Footer } from './footer/footer';
import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Features } from './features/features';
import { About } from './about/about';
import { PricingPlans } from './pricing-plans/pricing-plans';
import { Faq } from './faq/faq';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-landing',
  imports: [
    Header,
    Hero,
    Features,
    About,
    PricingPlans,
    Faq,
    Contact,
    Footer
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

}
