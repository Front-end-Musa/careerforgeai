import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Functions } from '@angular/fire/functions';
import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: Firestore, useValue: {} },
        { provide: Auth, useValue: { currentUser: null } },
        { provide: Functions, useValue: {} },
      ],
    });

    service = TestBed.inject(ResumeService);
  });

  it('should fall back to the basic template when none is provided', () => {
    expect((service as any).resolveTemplateId(undefined)).toBe('basic');
  });

  it('should build a safe pdf file name from the resume full name', () => {
    expect((service as any).buildPdfFileName('Jane Doe / Resume')).toBe('Jane_Doe_Resume.pdf');
  });
});
