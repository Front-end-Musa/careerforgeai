import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ResumesCreate } from './resumes-create';
import { ResumesFacade } from '../data/resumes.facade';
import { ResumeGenerationResult } from '../../../../core/interfaces/resume-generation.interface';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { EntitlementsService } from '../../../../core/services/entitlements.service';
import { ResumeAccessPolicyService } from '../../../../core/services/resume-access-policy.service';
import { ResumeUpgradeService } from '../../../../core/services/resume-upgrade.service';
import { ResumesStatus } from '../data/resumes.reducer';

describe('ResumesCreate', () => {
  let component: ResumesCreate;
  let fixture: ComponentFixture<ResumesCreate>;

  const resumesFacadeMock = {
    generating$: new BehaviorSubject(false),
    generatedResult$: new BehaviorSubject<ResumeGenerationResult | null>(null),
    error$: new BehaviorSubject<string | null>(null),
    saving$: new BehaviorSubject(false),
    saveSucceeded$: new BehaviorSubject(false),
    status$: new BehaviorSubject(ResumesStatus.Loaded),
    generateResumeRequest: jasmine.createSpy('generateResumeRequest'),
    clearGeneratedResult: jasmine.createSpy('clearGeneratedResult'),
    saveResumeData: jasmine.createSpy('saveResumeData'),
    exportResumeToPdf: jasmine.createSpy('exportResumeToPdf'),
    ensureLoaded: jasmine.createSpy('ensureLoaded'),
    resumeById$: jasmine.createSpy('resumeById$').and.returnValue(of(null)),
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

  const resumeAccessPolicyMock = {
    upgradeMessage: jasmine.createSpy('upgradeMessage').and.returnValue('Upgrade required.'),
  };

  const resumeUpgradeMock = {
    startUpgrade: jasmine.createSpy('startUpgrade'),
  };

  beforeEach(async () => {
    resumesFacadeMock.generating$.next(false);
    resumesFacadeMock.generatedResult$.next(null);
    resumesFacadeMock.error$.next(null);
    resumesFacadeMock.saving$.next(false);
    resumesFacadeMock.saveSucceeded$.next(false);
    resumesFacadeMock.status$.next(ResumesStatus.Loaded);
    resumesFacadeMock.generateResumeRequest.calls.reset();
    resumesFacadeMock.clearGeneratedResult.calls.reset();
    resumesFacadeMock.saveResumeData.calls.reset();
    resumesFacadeMock.exportResumeToPdf.calls.reset();
    resumesFacadeMock.ensureLoaded.calls.reset();
    resumesFacadeMock.resumeById$.calls.reset();
    resumesFacadeMock.resumeById$.and.returnValue(of(null));
    resumeAccessPolicyMock.upgradeMessage.calls.reset();
    resumeUpgradeMock.startUpgrade.calls.reset();

    await TestBed.configureTestingModule({
      imports: [ResumesCreate],
      providers: [
        { provide: ResumesFacade, useValue: resumesFacadeMock },
        { provide: EntitlementsService, useValue: entitlementsServiceMock },
        { provide: ResumeAccessPolicyService, useValue: resumeAccessPolicyMock },
        { provide: ResumeUpgradeService, useValue: resumeUpgradeMock },
        { provide: Location, useValue: { back: jasmine.createSpy('back') } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
      ],
    }).compileComponents();
  });

  function createComponent() {
    fixture = TestBed.createComponent(ResumesCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function helperTexts() {
    return Array.from(fixture.nativeElement.querySelectorAll('.generate-helper')).map((element) =>
      element.textContent.trim(),
    );
  }

  function buttonLabels() {
    return Array.from(fixture.nativeElement.querySelectorAll('.generate .label')).map((element) =>
      element.textContent.trim(),
    );
  }

  it('renders the default core builder sections', () => {
    createComponent();

    expect(component.orderedSectionControls.map((section) => component.getSectionType(section))).toEqual([
      'personal',
      'summary',
      'experience',
      'education',
      'skills',
    ]);
  });

  it('adds a preset section and a custom section', () => {
    createComponent();

    component.addSection('projects');
    component.addSection('custom');

    expect(component.orderedSectionControls.map((section) => component.getSectionType(section))).toContain('projects');
    expect(component.orderedSectionControls.map((section) => component.getSectionType(section))).toContain('custom');
    expect(component.projectsArray.length).toBe(1);
    expect(component.customSectionsArray.length).toBe(1);
    expect(component.customSectionsArray.at(0).controls.entries.length).toBe(1);
  });

  it('persists ordered sections in the save payload', () => {
    createComponent();
    component.addSection('projects');
    component.addSection('custom');

    component.resumeGroup.patchValue({
      personalInfo: {
        fullName: 'Jane Doe',
        jobTitle: 'Frontend Engineer',
      },
      contact: {
        email: 'jane@example.com',
        location: 'Remote',
      },
      summary: 'Builder summary',
      skills: 'Angular, TypeScript',
    });

    component.projectsArray.at(0).patchValue({
      name: 'Portfolio Redesign',
      role: 'Lead Developer',
      description: 'Built a new portfolio system',
    });

    component.customSectionsArray.at(0).patchValue({
      title: 'Community',
    });
    component.customSectionsArray.at(0).controls.entries.at(0).patchValue({
      title: 'Mentor',
      subtitle: 'Frontend Circle',
      description: 'Mentored junior developers',
    });

    component.saveResume();

    expect(resumesFacadeMock.saveResumeData).toHaveBeenCalled();
    const payload = resumesFacadeMock.saveResumeData.calls.mostRecent().args[0] as Partial<Resume>;
    expect(payload.sections?.map((section) => section.type)).toEqual([
      'personal',
      'summary',
      'experience',
      'education',
      'skills',
      'projects',
      'custom',
    ]);
    expect(payload.sections?.find((section) => section.type === 'projects')).toEqual(
      jasmine.objectContaining({
        type: 'projects',
        entries: [jasmine.objectContaining({ name: 'Portfolio Redesign' })],
      }),
    );
  });

  it('hydrates legacy optional sections in edit mode', () => {
    const legacyResume = {
      id: 'resume-1',
      userId: 'user-1',
      createdAt: '2026-01-01T00:00:00.000Z',
      personalInfo: { fullName: 'Jane Doe', jobTitle: 'Designer' },
      contact: { email: 'jane@example.com', location: 'Remote' },
      summary: '',
      experience: [],
      education: [],
      skills: ['Figma'],
      projects: [
        {
          name: 'Design System',
          role: 'Lead',
          description: 'Scaled a design system',
        },
      ],
      certifications: [],
      meta: {
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
        source: 'manual' as const,
        version: 1,
      },
    } as Resume;

    resumesFacadeMock.resumeById$.and.returnValue(of(legacyResume));
    fixture = TestBed.createComponent(ResumesCreate);
    component = fixture.componentInstance;
    component.mode = 'edit';
    component.resumeId = legacyResume.id ?? '';
    fixture.detectChanges();

    expect(component.projectsArray.length).toBe(1);
    expect(component.orderedSectionControls.map((section) => component.getSectionType(section))).toContain('projects');
  });

  it('dispatches a full resume generation request', () => {
    createComponent();
    component.resumeGroup.patchValue({
      personalInfo: {
        fullName: 'Jane Doe',
        jobTitle: 'Frontend Engineer',
      },
      contact: {
        email: 'jane@example.com',
        location: 'Remote',
      },
      skills: '',
    });
    component.addEntry('experience');
    component.experienceArray.at(0).patchValue({
      company: 'Acme',
      role: 'Engineer',
    });

    component.generateWithAI();

    expect(resumesFacadeMock.generateResumeRequest).toHaveBeenCalledWith(
      jasmine.objectContaining({
        mode: 'full',
      }),
    );
  });

  it('shows exact missing fields for full resume generation and hides them once complete', () => {
    createComponent();

    expect(helperTexts()).toContain(
      'Add full name, job title, email, location, and skills, experience company and role, or education school and degree to generate.',
    );
    expect(buttonLabels()).toContain('Add details');

    component.resumeGroup.patchValue({
      personalInfo: {
        fullName: 'Jane Doe',
        jobTitle: 'Frontend Engineer',
      },
      contact: {
        email: 'jane@example.com',
        location: 'Remote',
      },
      skills: 'Angular, TypeScript',
    });
    fixture.detectChanges();

    expect(helperTexts()).not.toContain(
      'Add full name, job title, email, location, and skills, experience company and role, or education school and degree to generate.',
    );
    expect(buttonLabels()).toContain('Generate Full Resume');
  });

  it('shows summary helper text with exact missing fields', () => {
    createComponent();

    expect(helperTexts()).toContain('Add full name, job title, and skills to generate.');
  });

  it('shows experience helper text with row-specific requirements', () => {
    createComponent();
    component.addEntry('experience');
    fixture.detectChanges();

    expect(helperTexts()).toContain('Add full name, job title, skills, company, and role to generate.');
  });

  it('shows education helper text with row-specific requirements', () => {
    createComponent();
    component.addEntry('education');
    fixture.detectChanges();

    expect(helperTexts()).toContain('Add full name, job title, skills, school, and degree to generate.');
  });

  it('keeps compact button labels short while helper text stays detailed', () => {
    createComponent();

    expect(buttonLabels()).toContain('Add details');
    expect(helperTexts()).toContain('Add full name, job title, and skills to generate.');
  });
});
