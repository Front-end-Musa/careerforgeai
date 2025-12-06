import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCoach } from './interview-coach';

describe('InterviewCoach', () => {
  let component: InterviewCoach;
  let fixture: ComponentFixture<InterviewCoach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewCoach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewCoach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
