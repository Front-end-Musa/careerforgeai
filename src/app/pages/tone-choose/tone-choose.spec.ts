import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneChoose } from './tone-choose';

describe('ToneChoose', () => {
  let component: ToneChoose;
  let fixture: ComponentFixture<ToneChoose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToneChoose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToneChoose);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
