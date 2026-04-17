import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { Upgrade } from './upgrade';
import { ActivatedRoute } from '@angular/router';
import { BillingFacade } from '../data/billing.facade';
import { ResumeUpgradeService } from '../../../../core/services/resume-upgrade.service';

describe('Upgrade', () => {
  let component: Upgrade;
  let fixture: ComponentFixture<Upgrade>;
  let billingFacade: jasmine.SpyObj<BillingFacade>;
  let resumeUpgrade: jasmine.SpyObj<ResumeUpgradeService>;

  beforeEach(async () => {
    billingFacade = jasmine.createSpyObj<BillingFacade>('BillingFacade', ['startCheckout', 'clearError'], {
      loading$: of(false),
      error$: of(null),
      selectedPlan$: of(null),
    });
    resumeUpgrade = jasmine.createSpyObj<ResumeUpgradeService>('ResumeUpgradeService', [
      'setPendingPath',
      'setPendingPlan',
    ]);

    await TestBed.configureTestingModule({
      imports: [Upgrade],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: of(
              convertToParamMap({
                reason: 'download',
                returnTo: '/application/resumes/resume-1/edit',
                recommendedPlan: 'premium',
              }),
            ),
          },
        },
        { provide: BillingFacade, useValue: billingFacade },
        { provide: ResumeUpgradeService, useValue: resumeUpgrade },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Upgrade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should preselect the recommended plan from the route', () => {
    expect(component.selectedPlan()).toBe('premium');
    expect(resumeUpgrade.setPendingPath).toHaveBeenCalledWith('/application/resumes/resume-1/edit');
  });

  it('should start checkout for the selected plan', () => {
    component.selectPlan('pro');
    component.continueToCheckout();

    expect(resumeUpgrade.setPendingPlan).toHaveBeenCalledWith('pro');
    expect(billingFacade.startCheckout).toHaveBeenCalledWith('pro');
  });
});
