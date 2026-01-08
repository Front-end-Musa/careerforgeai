import { Component, inject, signal, WritableSignal } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { AppUser } from '../../../core/interfaces/user.interface';
import { Job } from '../../../core/interfaces/job.interface';
import { Resume } from '../../../core/interfaces/resumes.interface';
import { AuthFacade } from '../../auth/data/auth.facade';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  authFacade = inject(AuthFacade);
  user: WritableSignal<AppUser | null> = signal(null);
  resumes: Resume[] = [];
  applications: Job[] = [];
  interviews: Job[] = [];

  ngOnInit() {
    this.authFacade.user$.subscribe({
      next: (user) => {
        console.log(user);
        this.user.set(user);
      },
    });
  }
}
