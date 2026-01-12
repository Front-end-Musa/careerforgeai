import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumesList } from './resumes-list';

describe('ResumesList', () => {
  let component: ResumesList;
  let fixture: ComponentFixture<ResumesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
