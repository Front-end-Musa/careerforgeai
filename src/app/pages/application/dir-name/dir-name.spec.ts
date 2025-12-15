import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirName } from './dir-name';

describe('DirName', () => {
  let component: DirName;
  let fixture: ComponentFixture<DirName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
