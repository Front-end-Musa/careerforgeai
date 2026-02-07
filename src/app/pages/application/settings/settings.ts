import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DirName } from '../dir-name/dir-name';
import { AuthFacade } from '../../auth/data/auth.facade';
import { AppUser } from '../../../core/interfaces/user.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-settings',
  imports: [DirName],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  user = signal<AppUser | null>(null);
  private authFacade = inject(AuthFacade);
  private destroyRef = inject(DestroyRef);

  onSave() {}

  ngOnInit() {
    this.authFacade.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      this.user.set(user);
    });
  }
}
