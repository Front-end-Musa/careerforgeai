import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumesCreate } from './resumes-create';

describe('ResumesCreate', () => {
  let component: ResumesCreate;
  let fixture: ComponentFixture<ResumesCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumesCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumesCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
