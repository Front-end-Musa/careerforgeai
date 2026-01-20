import { Component } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { Resume } from '../../../core/interfaces/resumes.interface';
import { DirName } from '../dir-name/dir-name';
import { MatButton } from '@angular/material/button';
import { SafeHtml } from '@angular/platform-browser';
import { CreateListResumeSwitch } from '../../buttons/create-list-resume-switch/create-list-resume-switch';
import { ResumesCreate } from './resumes-create/resumes-create';
import { ResumesList } from './resumes-list/resumes-list';

@Component({
  selector: 'app-resumes',
  imports: [DirName, CreateListResumeSwitch, ResumesCreate, ResumesList],
  templateUrl: './resumes.html',
  styleUrl: './resumes.scss',
})
export class Resumes {
  tones: string[] = ['Modern', 'Minimal', 'Creative'];
  resumes: Resume[] = [];
  viewMode: string = 'create';
  createSwitchHtml: SafeHtml;
  constructor(private storage: StorageService) {
    this.createSwitchHtml = `
    <div class="list-create-switch">
      <button
        mat-button
        matButton="text"
        class="switch-btn"
        [class.active]="viewMode === 'list'"
        (click)="viewMode = 'list'"
      >
        <span class="material-symbols-outlined">view_list</span>
        List View
      </button>
      <button
        mat-button
        matButton="text"
        class="switch-btn"
        [class.active]="viewMode === 'create'"
        (click)="viewMode = 'create'"
      >
        <span class="material-symbols-outlined">add_circle</span>
        Create New
    </button>
  </div>`;
  }

  ngOnInit() {
    this.storage.set('resumes', JSON.stringify(this.resumes));
  }

  setViewMode() {
    this.viewMode = this.viewMode === 'list' ? 'create' : 'list';
  }
}
