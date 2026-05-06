import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { Resume } from '../../../../../core/interfaces/resumes.interface';
import { ResumesFacade } from '../../data/resumes.facade';
import { ResumeCard } from './resume-card';
import { EntitlementsService } from '../../../../../core/services/entitlements.service';
import { ResumeAccessPolicyService } from '../../../../../core/services/resume-access-policy.service';
import { ResumeUpgradeService } from '../../../../../core/services/resume-upgrade.service';

describe('ResumeCard', () => {
  let component: ResumeCard;
  let fixture: ComponentFixture<ResumeCard>;
  let resumesFacade: jasmine.SpyObj<ResumesFacade>;
  let resumeAccessPolicy: jasmine.SpyObj<ResumeAccessPolicyService>;
  let resumeUpgrade: jasmine.SpyObj<ResumeUpgradeService>;

  const resume: Resume = {
    id: 'resume-1',
    userId: 'user-1',
    personalInfo: {
      fullName: 'Jane Candidate',
      jobTitle: 'Frontend Developer',
    },
    summary: 'Summary',
    createdAt: '2026-04-10T00:00:00.000Z',
    experience: [],
    education: [],
    skills: ['Angular'],
    contact: {},
    templateId: 'clean-modern',
    meta: {
      createdAt: '2026-04-10T00:00:00.000Z',
      updatedAt: '2026-04-12T00:00:00.000Z',
      source: 'ai',
      version: 2,
      tailoring: {
        source: 'job-description',
        companyName: 'Acme',
        position: 'Frontend Developer',
        tailoredAt: '2026-04-12T00:00:00.000Z',
      },
    },
  };

  beforeEach(async () => {
    resumesFacade = jasmine.createSpyObj<ResumesFacade>('ResumesFacade', ['deleteResume', 'downloadResume'], {
      downloadingResumeId$: of(null),
    });
    resumeAccessPolicy = jasmine.createSpyObj<ResumeAccessPolicyService>('ResumeAccessPolicyService', [
      'canExportResume',
      'upgradeMessage',
    ]);
    resumeUpgrade = jasmine.createSpyObj<ResumeUpgradeService>('ResumeUpgradeService', ['startUpgrade']);
    resumeAccessPolicy.canExportResume.and.returnValue(true);
    resumeAccessPolicy.upgradeMessage.and.returnValue('Resume downloads are available on paid plans.');

    await TestBed.configureTestingModule({
      imports: [ResumeCard],
      providers: [
        { provide: ResumesFacade, useValue: resumesFacade },
        { provide: EntitlementsService, useValue: { user$: of(null) } },
        { provide: ResumeAccessPolicyService, useValue: resumeAccessPolicy },
        { provide: ResumeUpgradeService, useValue: resumeUpgrade },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeCard);
    component = fixture.componentInstance;
    component.resume = resume;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders primary and secondary resume metadata', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.resume-card__title')?.textContent).toContain('Frontend Developer');
    expect(element.querySelector('.resume-card__subtitle')?.textContent).toContain('Jane Candidate');
    expect(element.querySelector('.resume-card__subtitle')?.textContent).toContain('Pro Modern');
    expect(element.querySelector('.resume-card__meta')?.textContent).toContain('AI created');
  });

  it('shows the tailored chip when tailoring metadata exists', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.resume-chip--accent')?.textContent).toContain('Tailored');
  });

  it('keeps edit and tailor routes configured', () => {
    const buttons = Array.from(
      fixture.nativeElement.querySelectorAll('button[ng-reflect-router-link]'),
    ) as HTMLButtonElement[];

    expect(buttons.length).toBe(2);
    expect(buttons[0].getAttribute('ng-reflect-router-link')).toContain('/application/resumes,resume-1,edit');
    expect(buttons[1].getAttribute('ng-reflect-router-link')).toContain('/application/resumes,resume-1,tailor');
  });

  it('downloads the resume when the user has access', () => {
    component.downloadResume();

    expect(resumesFacade.downloadResume).toHaveBeenCalledWith('resume-1');
  });

  it('routes to upgrade when download access is locked', () => {
    resumeAccessPolicy.canExportResume.and.returnValue(false);

    component.downloadResume();

    expect(resumeUpgrade.startUpgrade).toHaveBeenCalled();
    expect(resumesFacade.downloadResume).not.toHaveBeenCalled();
  });

  it('calls the facade when deleting a resume', () => {
    const deleteButton = fixture.nativeElement.querySelector(
      '.resume-card__icon-btn:not(.resume-card__icon-btn--download)',
    ) as HTMLButtonElement | null;

    deleteButton?.click();

    expect(resumesFacade.deleteResume).toHaveBeenCalledWith('resume-1');
  });
});
