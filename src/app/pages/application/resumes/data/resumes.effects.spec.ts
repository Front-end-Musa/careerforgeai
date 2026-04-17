import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { ResumeEffects } from './resumes.effects';
import * as resumesActions from './resumes.actions';
import { ResumeService } from '../../../../core/services/resume.service';
import { AiAgentService } from '../../../../core/services/ai-agent.service';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumeGenerationResult } from '../../../../core/interfaces/resume-generation.interface';

describe('ResumeEffects', () => {
  let actions$: Observable<any>;
  let effects: ResumeEffects;
  let aiServiceMock: jasmine.SpyObj<AiAgentService>;

  const resume: Resume = {
    id: 'resume-1',
    userId: 'user-1',
    createdAt: new Date().toISOString(),
    personalInfo: { fullName: 'Jane Doe', jobTitle: 'Frontend Engineer' },
    summary: 'Summary',
    experience: [
      {
        company: 'Acme',
        role: 'Engineer',
        startDate: '2022-01',
        endDate: 'Present',
        description: ['Built features'],
      },
    ],
    education: [
      {
        school: 'Uni',
        degree: 'BS',
        startDate: '2018-09',
        endDate: '2022-06',
        description: [],
      },
    ],
    skills: ['Angular'],
    contact: { email: 'jane@example.com' },
    meta: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      source: 'manual',
      version: 1,
    },
  };

  beforeEach(() => {
    aiServiceMock = jasmine.createSpyObj<AiAgentService>('AiAgentService', [
      'generateResume',
      'saveGeneratedResume',
      'tailorResumeToJob',
    ]);

    TestBed.configureTestingModule({
      providers: [
        ResumeEffects,
        provideMockActions(() => actions$),
        { provide: ResumeService, useValue: {} },
        { provide: AiAgentService, useValue: aiServiceMock },
      ],
    });

    effects = TestBed.inject(ResumeEffects);
  });

  it('should dispatch generate resume success with typed result', (done) => {
    const result: ResumeGenerationResult = {
      mode: 'summary',
      summary: 'Generated summary',
    };

    aiServiceMock.generateResume.and.returnValue(of(result));

    actions$ = of(
      resumesActions.generateResume({
        request: {
          mode: 'summary',
          resume: {
            personalInfo: { fullName: 'Jane Doe', jobTitle: 'Frontend Engineer' },
            skills: ['Angular'],
          },
        },
      }),
    );

    effects.generateResumeEffect.subscribe({
      next: (action) => {
        expect(action).toEqual(resumesActions.generateResumeSuccess({ result }));
        done();
      },
      error: done.fail,
    });
  });

  it('should dispatch generate resume failure with a string error message', (done) => {
    aiServiceMock.generateResume.and.returnValue(throwError(() => ({ code: 'functions/internal' })));

    actions$ = of(
      resumesActions.generateResume({
        request: {
          mode: 'summary',
          resume: {
            personalInfo: { fullName: 'Jane Doe', jobTitle: 'Frontend Engineer' },
            skills: ['Angular'],
          },
        },
      }),
    );

    effects.generateResumeEffect.subscribe({
      next: (action) => {
        expect(action).toEqual(
          resumesActions.generateResumeFailure({
            error: 'Failed to complete the request. Please try again.',
          }),
        );
        done();
      },
      error: done.fail,
    });
  });

  it('should dispatch tailor success and save on tailor success', (done) => {
    const tailoredResume: Resume = {
      ...resume,
      summary: 'Tailored summary',
    };
    const { id: _, ...resumeChanges } = tailoredResume;

    aiServiceMock.tailorResumeToJob.and.returnValue(of(tailoredResume));

    actions$ = of(
      resumesActions.tailorResume({
        resumeId: 'resume-1',
        resume,
        companyName: 'OpenAI',
        position: 'Frontend Engineer',
        jobDescription: 'Role details',
      }),
    );

    const emitted: any[] = [];
    effects.tailorResumeEffect.subscribe({
      next: (action) => {
        emitted.push(action);
        if (emitted.length === 2) {
          expect(emitted[0]).toEqual(
            resumesActions.tailorResumeSuccess({
              resumeId: 'resume-1',
              tailoredResume,
            }),
          );
          expect(emitted[1]).toEqual(
            resumesActions.saveResume({
              resume: resumeChanges,
              resumeId: 'resume-1',
            }),
          );
          done();
        }
      },
      error: done.fail,
    });
  });

  it('should dispatch tailor failure on error', (done) => {
    aiServiceMock.tailorResumeToJob.and.returnValue(
      throwError(() => new Error('Tailoring failed')),
    );

    actions$ = of(
      resumesActions.tailorResume({
        resumeId: 'resume-1',
        resume,
        companyName: 'OpenAI',
        position: 'Frontend Engineer',
        jobDescription: 'Role details',
      }),
    );

    effects.tailorResumeEffect.subscribe({
      next: (action) => {
        expect(action).toEqual(
          resumesActions.tailorResumeFailure({
            error: 'Tailoring failed',
          }),
        );
        done();
      },
      error: done.fail,
    });
  });
});
