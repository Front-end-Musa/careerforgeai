import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Success } from './success';
import { BillingService } from '../../../../../core/services/billing.service';
import { AuthFacade } from '../../../../auth/data/auth.facade';
import { ResumeUpgradeService } from '../../../../../core/services/resume-upgrade.service';

describe('Success', () => {
  let component: Success;
  let fixture: ComponentFixture<Success>;
  const billingServiceMock = {
    syncEntitlements: jasmine.createSpy('syncEntitlements').and.resolveTo({
      plan: 'pro',
      subscriptionStatus: 'active',
      entitlementsUpdatedAt: Date.now(),
    }),
  };
  const authFacadeMock = {
    initAuth: jasmine.createSpy('initAuth'),
  };
  const resumeUpgradeMock = {
    getPendingPath: jasmine.createSpy('getPendingPath').and.returnValue('/application/resumes'),
    getPendingPlan: jasmine.createSpy('getPendingPlan').and.returnValue('pro'),
    clearPendingPath: jasmine.createSpy('clearPendingPath'),
    clearPendingPlan: jasmine.createSpy('clearPendingPlan'),
    markRecentUpgrade: jasmine.createSpy('markRecentUpgrade'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Success],
      providers: [
        provideRouter([]),
        { provide: BillingService, useValue: billingServiceMock },
        { provide: AuthFacade, useValue: authFacadeMock },
        { provide: ResumeUpgradeService, useValue: resumeUpgradeMock },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Success);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('marks recent upgrades and refreshes auth after a successful paid sync', async () => {
    await component.ngOnInit();

    expect(billingServiceMock.syncEntitlements).toHaveBeenCalled();
    expect(authFacadeMock.initAuth).toHaveBeenCalled();
    expect(resumeUpgradeMock.markRecentUpgrade).toHaveBeenCalledWith('pro');
    expect(resumeUpgradeMock.clearPendingPlan).toHaveBeenCalled();
  });

  it('shows an error when checkout succeeds but entitlements still sync as free', async () => {
    billingServiceMock.syncEntitlements.and.resolveTo({
      plan: 'free',
      subscriptionStatus: 'none',
      entitlementsUpdatedAt: Date.now(),
    });

    await component.ngOnInit();

    expect(component.error()).toContain('paid access has not synced yet');
  });
});
