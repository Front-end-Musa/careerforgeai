import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumePreview } from './resume-preview';
import { Resume } from '../../../../core/interfaces/resumes.interface';

describe('ResumePreview', () => {
  let component: ResumePreview;
  let fixture: ComponentFixture<ResumePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePreview],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumePreview);
    component = fixture.componentInstance;
  });

  it('renders ordered preset and custom sections from the sections payload', () => {
    component.resume = {
      userId: 'user-1',
      createdAt: '2026-01-01T00:00:00.000Z',
      personalInfo: { fullName: 'Jane Doe', jobTitle: 'Engineer' },
      contact: { email: 'jane@example.com', location: 'Remote' },
      summary: 'Summary copy',
      experience: [],
      education: [],
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
      meta: {
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
        source: 'manual',
        version: 1,
      },
    } as Partial<Resume>;

    fixture.detectChanges();

    const sectionTitles = Array.from(
      fixture.nativeElement.querySelectorAll('.section-title'),
      (element: Element) => element.textContent?.trim(),
    );

    expect(sectionTitles).toContain('Projects');
    expect(sectionTitles).toContain('Community');
    expect(fixture.nativeElement.textContent).toContain('Shipped section builder');
    expect(fixture.nativeElement.textContent).toContain('Monthly coaching');
  });
});
