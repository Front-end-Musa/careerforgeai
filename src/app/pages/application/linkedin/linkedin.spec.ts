import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linkedin } from './linkedin';

describe('Linkedin', () => {
  let component: Linkedin;
  let fixture: ComponentFixture<Linkedin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linkedin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Linkedin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
