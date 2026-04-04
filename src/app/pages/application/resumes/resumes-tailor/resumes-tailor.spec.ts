import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ResumesTailor } from './resumes-tailor';
import { ResumesFacade } from '../data/resumes.facade';
import { Resume } from '../../../../core/interfaces/resumes.interface';

describe('ResumesTailor', () => {
  let component: ResumesTailor;
  let fixture: ComponentFixture<ResumesTailor>;
  let facadeMock: {
    saving$: BehaviorSubject<boolean>;
    tailoring$: BehaviorSubject<boolean>;
    tailorError$: BehaviorSubject<string | null>;
    saveSucceeded$: BehaviorSubject<boolean>;
    getResumeById: jasmine.Spy;
    tailorResumeData: jasmine.Spy;
  };

  const resume: Resume = {
    id: 'resume-1',
    userId: 'user-1',
    createdAt: new Date().toISOString(),
    personalInfo: { fullName: 'John Doe', jobTitle: 'Developer' },
    summary: 'Summary',
    experience: [
      {
        company: 'ACME',
        role: 'Engineer',
        startDate: '2023-01',
        endDate: 'Present',
        description: ['Built features'],
      },
    ],
    education: [
      {
        school: 'Uni',
        degree: 'BSc',
        startDate: '2019-09',
        endDate: '2023-05',
        description: [],
      },
    ],
    skills: ['Angular'],
    contact: { email: 'john@example.com' },
    meta: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      source: 'manual',
      version: 1,
    },
  };

  beforeEach(async () => {
    facadeMock = {
      saving$: new BehaviorSubject(false),
      tailoring$: new BehaviorSubject(false),
      tailorError$: new BehaviorSubject<string | null>(null),
      saveSucceeded$: new BehaviorSubject(false),
      getResumeById: jasmine.createSpy('getResumeById').and.returnValue(of(resume)),
      tailorResumeData: jasmine.createSpy('tailorResumeData'),
    };

    await TestBed.configureTestingModule({
      imports: [ResumesTailor],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'resume-1',
              },
            },
          },
        },
        { provide: ResumesFacade, useValue: facadeMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumesTailor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(facadeMock.getResumeById).toHaveBeenCalledWith('resume-1');
  });

  it('should dispatch tailoring when form is valid', () => {
    component.tailorForm.setValue({
      companyName: 'OpenAI',
      position: 'Frontend Engineer',
      jobDescription:
        'We need a frontend engineer with strong Angular skills and experience building accessible interfaces.',
    });

    component.applyTailoring();

    expect(facadeMock.tailorResumeData).toHaveBeenCalled();
  });

  it('should not dispatch tailoring when form is invalid', () => {
    component.tailorForm.setValue({
      companyName: '',
      position: '',
      jobDescription: 'too short',
    });

    component.applyTailoring();

    expect(facadeMock.tailorResumeData).not.toHaveBeenCalled();
  });
});
