import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ResumesFacade } from '../data/resumes.facade';
import { ResumesStatus } from '../data/resumes.reducer';
import { ResumesList } from './resumes-list';

describe('ResumesList', () => {
  let component: ResumesList;
  let fixture: ComponentFixture<ResumesList>;
  let resumesFacade: jasmine.SpyObj<ResumesFacade>;

  beforeEach(async () => {
    resumesFacade = jasmine.createSpyObj(
      'ResumesFacade',
      ['loadResumes'],
      {
        status$: of(ResumesStatus.Loaded),
        resumes$: of([]),
        loading$: of(false),
        error$: of(null),
      },
    );

    await TestBed.configureTestingModule({
      imports: [ResumesList],
      providers: [{ provide: ResumesFacade, useValue: resumesFacade }],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loads resumes on init', () => {
    expect(resumesFacade.loadResumes).toHaveBeenCalled();
  });

  it('renders the empty state when no resumes are available', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.resumes-empty h3')?.textContent).toContain('No resumes yet');
    expect(element.querySelector('.resumes-empty p')?.textContent).toContain(
      'Build your first resume in minutes with our templates.',
    );
  });
});
