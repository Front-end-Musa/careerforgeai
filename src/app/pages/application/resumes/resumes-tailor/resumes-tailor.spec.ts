import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumesTailor } from './resumes-tailor';

describe('ResumesTailor', () => {
  let component: ResumesTailor;
  let fixture: ComponentFixture<ResumesTailor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumesTailor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumesTailor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
