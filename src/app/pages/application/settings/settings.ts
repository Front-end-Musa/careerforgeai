import { Component, signal } from '@angular/core';
import { DirName } from '../dir-name/dir-name';
import { AuthFacade } from '../../auth/data/auth.facade';
import { AppUser } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-settings',
  imports: [DirName],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  user = signal<AppUser | null>(null)
  constructor(private authFacade: AuthFacade) {}

  onSave() { }
  
  ngOnInit() {
    this.authFacade.user$.subscribe((user) => {
      this.user.set(user)
    })
  }
}
