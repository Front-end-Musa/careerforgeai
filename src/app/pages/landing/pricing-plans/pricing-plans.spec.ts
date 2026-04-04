import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { BillingFacade } from './data/billing.facade';

import { PricingPlans } from './pricing-plans';

describe('PricingPlans', () => {
  let component: PricingPlans;
  let fixture: ComponentFixture<PricingPlans>;
  let billingFacade: jasmine.SpyObj<BillingFacade>;

  beforeEach(async () => {
    billingFacade = jasmine.createSpyObj<BillingFacade>('BillingFacade', ['clearError', 'startCheckout'], {
      loading$: of(false),
      error$: of(null),
      selectedPlan$: of(null),
    });

    await TestBed.configureTestingModule({
      imports: [PricingPlans],
      providers: [
        provideRouter([]),
        { provide: BillingFacade, useValue: billingFacade },
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
