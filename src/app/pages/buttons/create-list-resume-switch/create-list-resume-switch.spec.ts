import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListResumeSwitch } from './create-list-resume-switch';

describe('CreateListResumeSwitch', () => {
  let component: CreateListResumeSwitch;
  let fixture: ComponentFixture<CreateListResumeSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateListResumeSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateListResumeSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
