import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBtn } from './generate-btn';

describe('GenerateBtn', () => {
  let component: GenerateBtn;
  let fixture: ComponentFixture<GenerateBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
