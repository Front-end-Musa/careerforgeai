import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginWithGithubBtn } from './login-with-github-btn';

describe('LoginWithGithubBtn', () => {
  let component: LoginWithGithubBtn;
  let fixture: ComponentFixture<LoginWithGithubBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithGithubBtn]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginWithGithubBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
