import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EntitlementsService } from '../../../core/services/entitlements.service';
import { ResumesFacade } from '../resumes/data/resumes.facade';
import { CoverLetter } from './cover-letter';
import { CoverLetterFacade } from './data/cover-letter.facade';

describe('CoverLetter', () => {
  let component: CoverLetter;
  let fixture: ComponentFixture<CoverLetter>;

  const coverLetterFacadeMock = {
    generatedText$: of(''),
    generating$: of(false),
    error$: of(null),
    getResumeSelectionById: jasmine
      .createSpy('getResumeSelectionById')
      .and.resolveTo({ resumeText: 'Resume text', resumeLabel: 'Jane Doe - Engineer' }),
    generateCoverLetter: jasmine.createSpy('generateCoverLetter'),
  };

  const resumesFacadeMock = {
    resumes$: of([
      {
        id: 'resume-1',
        personalInfo: {
          fullName: 'Jane Doe',
          jobTitle: 'Engineer',
        },
      },
    ]),
    loadResumes: jasmine.createSpy('loadResumes'),
  };

  const entitlementsServiceMock = {
    entitlements$: of({
      resumeGenerationsPerPeriod: 1,
      coverLettersPerPeriod: 3,
      canUseJobTracker: false,
      canStoreGeneratedResume: false,
      canDownloadResume: false,
    }),
    usage$: of({
      resumeGenerationsUsed: 0,
      coverLettersUsed: 0,
      resumeGenerationsRemaining: 1,
      coverLettersRemaining: 3,
      usagePeriodKey: null,
      usagePeriodStartedAt: null,
      usagePeriodEndsAt: null,
    }),
    nextResetLabel$: of('this period'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverLetter],
      providers: [
        { provide: CoverLetterFacade, useValue: coverLetterFacadeMock },
        { provide: ResumesFacade, useValue: resumesFacadeMock },
        { provide: EntitlementsService, useValue: entitlementsServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoverLetter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require a selected resume before the form is valid', () => {
    component.coverLetterForm.patchValue({
      companyName: 'Acme',
      position: 'Frontend Engineer',
      jobDescription: 'Build UI features',
      tone: 'Professional',
    });

    expect(component.coverLetterForm.valid).toBeFalse();

    component.coverLetterForm.patchValue({
      resumeId: 'resume-1',
    });

    expect(component.coverLetterForm.valid).toBeTrue();
  });

  it('should submit the selected resume metadata instead of using the latest resume', async () => {
    component.coverLetterForm.patchValue({
      resumeId: 'resume-1',
      companyName: 'Acme',
      position: 'Frontend Engineer',
      jobDescription: 'Build UI features',
      tone: 'Professional',
    });

    await component.onSubmit();

    expect(coverLetterFacadeMock.getResumeSelectionById).toHaveBeenCalledWith('resume-1');
    expect(coverLetterFacadeMock.generateCoverLetter).toHaveBeenCalledWith(
      'Resume text',
      'Build UI features',
      'Acme',
      'Frontend Engineer',
      'Professional',
      'resume-1',
      'Jane Doe - Engineer',
    );
  });
});
