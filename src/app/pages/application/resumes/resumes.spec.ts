import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthFacade } from '../../auth/data/auth.facade';
import { ResumesFacade } from './data/resumes.facade';
import { ApplicationStorageFacade } from '../data/application-storage.facade';
import { BillingFacade } from '../../landing/pricing-plans/data/billing.facade';
import { ResumeUpgradeService } from '../../../core/services/resume-upgrade.service';

import { Resumes } from './resumes';

describe('Resumes', () => {
  let component: Resumes;
  let fixture: ComponentFixture<Resumes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resumes],
      providers: [
        {
          provide: AuthFacade,
          useValue: {
            user$: of({
              name: 'Free User',
              email: 'free@example.com',
              role: 'user',
              profileViews: 0,
              plan: 'free',
              subscriptionStatus: 'none',
              currentPeriodEnd: null,
              providerCustomerId: '',
              providerSubscriptionId: '',
              providerVariantId: '',
              freeGenerationsUsed: 0,
            }),
          },
        },
        {
          provide: ResumesFacade,
          useValue: {
            resumes$: of([]),
            loadResumes: jasmine.createSpy('loadResumes'),
          },
        },
        {
          provide: ApplicationStorageFacade,
          useValue: { set: jasmine.createSpy('set') },
        },
        {
          provide: BillingFacade,
          useValue: jasmine.createSpyObj<BillingFacade>('BillingFacade', ['startCheckout'], {
            loading$: of(false),
            error$: of(null),
            selectedPlan$: of(null),
          }),
        },
        {
          provide: ResumeUpgradeService,
          useValue: { startUpgrade: jasmine.createSpy('startUpgrade') },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resumes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
