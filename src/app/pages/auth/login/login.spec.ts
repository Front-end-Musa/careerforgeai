import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { AuthFacade } from '../data/auth.facade';
import { AuthStatus } from '../data/auth.reducer';
import { Observable, of } from 'rxjs';
import { provideRouter } from '@angular/router';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let authFacadeMock: {
    status$: Observable<AuthStatus>;
    error$: Observable<null>;
    login: jasmine.Spy;
  };

  beforeEach(async () => {
    authFacadeMock = {
      status$: of(AuthStatus.Init),
      error$: of(null),
      login: jasmine.createSpy('login'),
    };

    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [{ provide: AuthFacade, useValue: authFacadeMock }, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submits via form submit event when valid', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'Password123!',
    });
    fixture.detectChanges();

    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(authFacadeMock.login).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'Password123!',
    });
  });

  it('prevents submit when form is invalid', () => {
    component.loginForm.setValue({
      email: '',
      password: '',
    });
    fixture.detectChanges();

    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(authFacadeMock.login).not.toHaveBeenCalled();
  });
});
