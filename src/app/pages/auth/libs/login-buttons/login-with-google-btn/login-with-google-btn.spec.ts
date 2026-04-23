import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginWithGoogleBtn } from './login-with-google-btn';

describe('LoginWithGoogleBtn', () => {
  let component: LoginWithGoogleBtn;
  let fixture: ComponentFixture<LoginWithGoogleBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithGoogleBtn]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginWithGoogleBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
