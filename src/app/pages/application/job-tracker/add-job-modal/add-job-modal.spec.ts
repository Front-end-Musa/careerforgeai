import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobModal } from './add-job-modal';

describe('AddJobModal', () => {
  let component: AddJobModal;
  let fixture: ComponentFixture<AddJobModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJobModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
