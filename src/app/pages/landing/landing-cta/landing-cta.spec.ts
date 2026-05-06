import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterLink } from '@angular/router';

import { LandingCta } from './landing-cta';

describe('LandingCta', () => {
  let component: LandingCta;
  let fixture: ComponentFixture<LandingCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingCta],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingCta);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('renders default label, icon, and helper texts', () => {
    fixture.detectChanges();

    const buttonText = fixture.nativeElement.querySelector('.button-text') as HTMLElement;
    const iconText = fixture.nativeElement.querySelector('.ai-sign') as HTMLElement;
    const helperItems = fixture.nativeElement.querySelectorAll('.benefits span');

    expect(buttonText.textContent?.trim()).toBe('Create My Resume Now');
    expect(iconText.textContent?.trim()).toBe('auto_awesome');
    expect(helperItems.length).toBe(2);
    expect(helperItems[0].textContent?.trim()).toBe('Free plan available');
    expect(helperItems[1].textContent?.trim()).toBe('AI tools included');
  });

  it('renders custom icon and helper texts dynamically', () => {
    component.icon = 'rocket_launch';
    component.helperTexts = ['Used by 10k+ job seekers', 'ATS friendly templates'];
    component.label = 'Start Faster';
    fixture.detectChanges();

    const buttonText = fixture.nativeElement.querySelector('.button-text') as HTMLElement;
    const iconText = fixture.nativeElement.querySelector('.ai-sign') as HTMLElement;
    const helperItems = fixture.nativeElement.querySelectorAll('.benefits span');

    expect(buttonText.textContent?.trim()).toBe('Start Faster');
    expect(iconText.textContent?.trim()).toBe('rocket_launch');
    expect(helperItems.length).toBe(2);
    expect(helperItems[0].textContent?.trim()).toBe('Used by 10k+ job seekers');
    expect(helperItems[1].textContent?.trim()).toBe('ATS friendly templates');
  });

  it('binds router link input', () => {
    component.link = ['/application/dashboard'];
    fixture.detectChanges();

    const routerLink = fixture.debugElement.query(By.directive(RouterLink)).injector.get(RouterLink);
    expect(routerLink.routerLink).toEqual(['/application/dashboard']);
  });
});
