import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ResumeCard } from './resume-card';
import { ResumesFacade } from '../../data/resumes.facade';
import { Resume } from '../../../../../core/interfaces/resumes.interface';

describe('ResumeCard', () => {
  let component: ResumeCard;
  let fixture: ComponentFixture<ResumeCard>;
  let resumesFacade: jasmine.SpyObj<ResumesFacade>;

  const resume: Resume = {
    id: 'resume-1',
    userId: 'user-1',
    personalInfo: {
      fullName: 'John Smith',
      jobTitle: 'Frontend Developer',
    },
    summary: 'Builds UI.',
    createdAt: '2026-04-12T00:00:00.000Z',
    experience: [],
    education: [],
    skills: ['Angular'],
    contact: {
      email: 'john@example.com',
    },
    templateId: 'basic',
    meta: {
      createdAt: '2026-04-12T00:00:00.000Z',
      updatedAt: '2026-04-12T00:00:00.000Z',
      source: 'manual',
      version: 1,
    },
  };

  beforeEach(async () => {
    resumesFacade = jasmine.createSpyObj<ResumesFacade>('ResumesFacade', [
      'deleteResume',
      'exportResumeToPdf',
    ]);

    await TestBed.configureTestingModule({
      imports: [ResumeCard],
      providers: [
        provideRouter([]),
        {
          provide: ResumesFacade,
          useValue: resumesFacade,
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeCard);
    component = fixture.componentInstance;
    component.resume = resume;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should export the current resume when download is clicked', () => {
    const button = fixture.nativeElement.querySelector('.download-btn') as HTMLButtonElement;

    button.click();

    expect(resumesFacade.exportResumeToPdf).toHaveBeenCalledWith(resume, 'basic');
  });
});
