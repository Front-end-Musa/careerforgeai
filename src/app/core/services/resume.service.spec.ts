import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { ResumeService } from './resume.service';
import { CallableService } from './callable.service';

describe('ResumeService', () => {
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResumeService,
        { provide: Firestore, useValue: {} },
        { provide: Auth, useValue: {} },
        { provide: CallableService, useValue: { callable: () => () => Promise.resolve({ data: {} }) } },
      ],
    });

    service = TestBed.inject(ResumeService);
  });

  it('rejects PDF export when the preview surface is missing', async () => {
    document.body.innerHTML = '';

    await expectAsync(
      service.exportToPdf('resume-1', {
        personalInfo: { fullName: 'Jane Doe', jobTitle: 'Engineer' },
      }),
    ).toBeRejectedWithError('Resume preview is not ready for export.');
  });
});
