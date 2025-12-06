import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaItem } from './qa-item';

describe('QaItem', () => {
  let component: QaItem;
  let fixture: ComponentFixture<QaItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
