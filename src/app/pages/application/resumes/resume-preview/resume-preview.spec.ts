import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumePreview } from './resume-preview';

describe('ResumePreview', () => {
  let component: ResumePreview;
  let fixture: ComponentFixture<ResumePreview>;

  const baseResume = {
    userId: 'user-1',
    createdAt: '2026-01-01T00:00:00.000Z',
    personalInfo: { fullName: 'Jane Doe', jobTitle: 'Engineer' },
    contact: { email: 'jane@example.com', location: 'Remote' },
    summary: 'Summary copy',
    experience: [
      {
        company: 'Acme',
        role: 'Engineer',
        startDate: '2023-01',
        endDate: 'Present',
        description: ['Built component library'],
      },
    ],
    education: [],
    skills: ['Angular', 'TypeScript'],
    meta: {
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z',
      source: 'manual' as const,
      version: 1,
    },
  } as Partial<Resume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePreview],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumePreview);
    component = fixture.componentInstance;
  });

  it('renders ordered preset and custom sections from the sections payload', () => {
    component.resume = {
      ...baseResume,
      experience: [],
      skills: ['Angular'],
      sections: [
        { id: 'summary-1', type: 'summary', title: 'Summary', enabled: true },
        {
          id: 'projects-1',
          type: 'projects',
          title: 'Projects',
          enabled: true,
          entries: [{ name: 'Builder', role: 'Lead', link: '', description: ['Shipped section builder'] }],
        },
        {
          id: 'custom-1',
          type: 'custom',
          title: 'Community',
          enabled: true,
          entries: [{ title: 'Mentor', subtitle: 'Frontend Guild', date: '2025', description: ['Monthly coaching'] }],
        },
      ],
    };

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Projects');
    expect(fixture.nativeElement.textContent).toContain('Community');
    expect(fixture.nativeElement.textContent).toContain('Shipped section builder');
    expect(fixture.nativeElement.textContent).toContain('Monthly coaching');
  });

  it('routes classic templates through the classic renderer', () => {
    component.resume = baseResume;
    component.templateId = 'basic';

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-classic-resume-renderer')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('[data-family="classic"]')).not.toBeNull();
  });

  it('routes modern templates through the modern renderer', () => {
    component.resume = baseResume;
    component.templateId = 'clean-modern';

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-modern-resume-renderer')).not.toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Core Skills');
  });

  it('routes premium templates through the premium renderer', () => {
    component.resume = baseResume;
    component.templateId = 'executive-simple';

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-premium-resume-renderer')).not.toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Executive Simple');
  });
});
