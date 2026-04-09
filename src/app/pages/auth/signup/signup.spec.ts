import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Signup } from './signup';
import { AuthFacade } from '../data/auth.facade';
import { AuthStatus } from '../data/auth.reducer';
import { Observable, of } from 'rxjs';
import { provideRouter } from '@angular/router';

describe('Signup', () => {
  let component: Signup;
  let fixture: ComponentFixture<Signup>;
  let authFacadeMock: {
    status$: Observable<AuthStatus>;
    error$: Observable<null>;
    register: jasmine.Spy;
  };

  beforeEach(async () => {
    authFacadeMock = {
      status$: of(AuthStatus.Init),
      error$: of(null),
      register: jasmine.createSpy('register'),
    };

    await TestBed.configureTestingModule({
      imports: [Signup],
      providers: [{ provide: AuthFacade, useValue: authFacadeMock }, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Signup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is valid when strong password rules pass and passwords match', () => {
    component.signupForm.setValue({
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'StrongPass1!',
      repeatPassword: 'StrongPass1!',
    });

    expect(component.signupForm.valid).toBeTrue();
  });

  it('is invalid when password strength fails', () => {
    component.signupForm.setValue({
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'weak',
      repeatPassword: 'weak',
    });

    expect(component.signupForm.valid).toBeFalse();
    expect(component.signupForm.get('password')?.hasError('pattern')).toBeTrue();
  });

  it('is invalid when repeat password is missing', () => {
    component.signupForm.setValue({
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'StrongPass1!',
      repeatPassword: '',
    });

    expect(component.signupForm.valid).toBeFalse();
    expect(component.signupForm.get('repeatPassword')?.hasError('required')).toBeTrue();
  });

  it('is invalid when repeat password does not match', () => {
    component.signupForm.setValue({
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'StrongPass1!',
      repeatPassword: 'StrongPass2@',
    });

    expect(component.signupForm.valid).toBeFalse();
    expect(component.signupForm.hasError('passwordMismatch')).toBeTrue();
  });

  it('submits only when form is valid', () => {
    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');

    component.signupForm.setValue({
      fullName: '',
      email: '',
      password: '',
      repeatPassword: '',
    });
    fixture.detectChanges();
    form.dispatchEvent(new Event('submit'));
    expect(authFacadeMock.register).not.toHaveBeenCalled();

    component.signupForm.setValue({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      password: 'StrongPass1!',
      repeatPassword: 'StrongPass1!',
    });
    fixture.detectChanges();
    form.dispatchEvent(new Event('submit'));
    expect(authFacadeMock.register).toHaveBeenCalledTimes(1);
    expect(authFacadeMock.register).toHaveBeenCalledWith(
      jasmine.objectContaining({
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'StrongPass1!',
      }),
    );
  });
});
