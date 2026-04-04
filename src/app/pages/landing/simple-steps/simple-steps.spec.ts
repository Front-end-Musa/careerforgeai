import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSteps } from './simple-steps';

describe('SimpleSteps', () => {
  let component: SimpleSteps;
  let fixture: ComponentFixture<SimpleSteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSteps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleSteps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
