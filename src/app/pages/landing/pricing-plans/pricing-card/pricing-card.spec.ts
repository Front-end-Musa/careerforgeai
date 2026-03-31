import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BillingFacade } from '../data/billing.facade';

import { PricingCard } from './pricing-card';

describe('PricingCard', () => {
  let component: PricingCard;
  let fixture: ComponentFixture<PricingCard>;
  let router: jasmine.SpyObj<Router>;
  let billingFacade: jasmine.SpyObj<BillingFacade>;

  beforeEach(async () => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    router.navigate.and.returnValue(Promise.resolve(true));
    billingFacade = jasmine.createSpyObj<BillingFacade>('BillingFacade', [
      'clearError',
      'startCheckout',
    ]);

    await TestBed.configureTestingModule({
      imports: [PricingCard],
      providers: [
        { provide: Router, useValue: router },
        { provide: BillingFacade, useValue: billingFacade },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingCard);
    component = fixture.componentInstance;
    component.plan = {
      name: 'Free',
      price: 0,
      features: [],
      button: 'Start Free',
    };
    component.planSlug = null;
    component.disabled = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigates to signup when selecting free plan', () => {
    component.planSlug = null;

    component.onSelectPlan();

    expect(router.navigate).toHaveBeenCalledWith(['/auth/signup']);
    expect(billingFacade.clearError).not.toHaveBeenCalled();
    expect(billingFacade.startCheckout).not.toHaveBeenCalled();
  });

  it('starts checkout for pro plan', () => {
    component.planSlug = 'pro';

    component.onSelectPlan();

    expect(billingFacade.clearError).toHaveBeenCalledTimes(1);
    expect(billingFacade.startCheckout).toHaveBeenCalledWith('pro');
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('starts checkout for premium plan', () => {
    component.planSlug = 'premium';

    component.onSelectPlan();

    expect(billingFacade.clearError).toHaveBeenCalledTimes(1);
    expect(billingFacade.startCheckout).toHaveBeenCalledWith('premium');
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('does nothing when card is disabled', () => {
    component.disabled = true;
    component.planSlug = 'pro';

    component.onSelectPlan();

    expect(router.navigate).not.toHaveBeenCalled();
    expect(billingFacade.clearError).not.toHaveBeenCalled();
    expect(billingFacade.startCheckout).not.toHaveBeenCalled();
  });
});
