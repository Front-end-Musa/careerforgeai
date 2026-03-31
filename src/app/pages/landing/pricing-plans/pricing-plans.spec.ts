import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { BillingFacade } from './data/billing.facade';

import { PricingPlans } from './pricing-plans';

describe('PricingPlans', () => {
  let component: PricingPlans;
  let fixture: ComponentFixture<PricingPlans>;
  let billingFacade: jasmine.SpyObj<BillingFacade>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    billingFacade = jasmine.createSpyObj<BillingFacade>('BillingFacade', ['clearError', 'startCheckout'], {
      loading$: of(false),
      error$: of(null),
      selectedPlan$: of(null),
    });
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [PricingPlans],
      providers: [
        { provide: BillingFacade, useValue: billingFacade },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingPlans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
