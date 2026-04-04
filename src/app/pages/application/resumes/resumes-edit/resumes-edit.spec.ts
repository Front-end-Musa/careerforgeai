import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ResumesEdit } from './resumes-edit';
import { ResumesFacade } from '../data/resumes.facade';
import { AuthFacade } from '../../../auth/data/auth.facade';

describe('ResumesEdit', () => {
  let component: ResumesEdit;
  let fixture: ComponentFixture<ResumesEdit>;

  beforeEach(async () => {
    TestBed.overrideComponent(ResumesEdit, {
      set: {
        template: '',
      },
    });

    await TestBed.configureTestingModule({
      imports: [ResumesEdit],
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
        {
          provide: ResumesFacade,
          useValue: {
            getResumeById: jasmine.createSpy('getResumeById').and.returnValue(of(null)),
          },
        },
        {
          provide: AuthFacade,
          useValue: {
            user$: of({ plan: 'free' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumesEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open template modal when requested', () => {
    const openModal = jasmine.createSpy('openModal');
    (component as any).templateModal = { openModal };

    component.openTemplateModal();

    expect(openModal).toHaveBeenCalled();
  });
});
