import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoShort } from './logo-short';

describe('LogoShort', () => {
  let component: LogoShort;
  let fixture: ComponentFixture<LogoShort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoShort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoShort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
