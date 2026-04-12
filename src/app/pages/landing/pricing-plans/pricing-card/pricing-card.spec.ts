import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ResumeUpgradeService } from '../../../../core/services/resume-upgrade.service';

import { PricingCard } from './pricing-card';

describe('PricingCard', () => {
  let component: PricingCard;
  let fixture: ComponentFixture<PricingCard>;
  let router: jasmine.SpyObj<Router>;
  let resumeUpgrade: jasmine.SpyObj<ResumeUpgradeService>;

  beforeEach(async () => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    router.navigate.and.returnValue(Promise.resolve(true));
    resumeUpgrade = jasmine.createSpyObj<ResumeUpgradeService>('ResumeUpgradeService', [
      'startUpgrade',
    ]);

    await TestBed.configureTestingModule({
      imports: [PricingCard],
      providers: [
        { provide: Router, useValue: router },
        { provide: ResumeUpgradeService, useValue: resumeUpgrade },
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
    expect(resumeUpgrade.startUpgrade).not.toHaveBeenCalled();
  });

  it('redirects to the upgrade page for pro plan', () => {
    component.planSlug = 'pro';

    component.onSelectPlan();

    expect(resumeUpgrade.startUpgrade).toHaveBeenCalledWith({
      reason: 'pricing',
      returnTo: '/application/resumes',
      recommendedPlan: 'pro',
    });
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('redirects to the upgrade page for premium plan', () => {
    component.planSlug = 'premium';

    component.onSelectPlan();

    expect(resumeUpgrade.startUpgrade).toHaveBeenCalledWith({
      reason: 'pricing',
      returnTo: '/application/resumes',
      recommendedPlan: 'premium',
    });
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('does nothing when card is disabled', () => {
    component.disabled = true;
    component.planSlug = 'pro';

    component.onSelectPlan();

    expect(router.navigate).not.toHaveBeenCalled();
    expect(resumeUpgrade.startUpgrade).not.toHaveBeenCalled();
  });
});
