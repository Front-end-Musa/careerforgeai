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
    clearPendingPath: jasmine.createSpy('clearPendingPath'),
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
});
