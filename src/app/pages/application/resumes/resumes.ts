import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';
import { Resume, ResumeTemplateId } from '../../../core/interfaces/resumes.interface';
import { AuthFacade } from '../../auth/data/auth.facade';
import { DirName } from '../dir-name/dir-name';
import { MatButton } from '@angular/material/button';
import { SafeHtml } from '@angular/platform-browser';
import { CreateListResumeSwitch } from '../../buttons/create-list-resume-switch/create-list-resume-switch';
import { ResumesCreate } from './resumes-create/resumes-create';
import { ResumesList } from './resumes-list/resumes-list';
import { ResumeTemplateModal } from './resume-template-modal/resume-template-modal';
import { ApplicationStorageFacade } from '../data/application-storage.facade';

@Component({
  selector: 'app-resumes',
  imports: [DirName, CreateListResumeSwitch, ResumesCreate, ResumesList, ResumeTemplateModal, AsyncPipe],
  templateUrl: './resumes.html',
  styleUrl: './resumes.scss',
})
export class Resumes implements AfterViewInit {
  @ViewChild('templateModal') templateModal?: ResumeTemplateModal;

  private authFacade = inject(AuthFacade);

  tones: string[] = ['Modern', 'Minimal', 'Creative'];
  resumes: Resume[] = [];
  viewMode: 'create' | 'list' = 'list';
  createSwitchHtml: SafeHtml;
  selectedTemplateId: ResumeTemplateId | undefined;
  plan$ = this.authFacade.user$.pipe(map((user) => user?.plan ?? 'free'));

  constructor(private storageFacade: ApplicationStorageFacade) {
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
    this.storageFacade.set('resumes', JSON.stringify(this.resumes));
  }

  ngAfterViewInit() {
    if (this.viewMode === 'create' && !this.selectedTemplateId) {
      this.openTemplateModal();
    }
  }

  handleViewModeChange(viewMode: string) {
    if (viewMode !== 'create' && viewMode !== 'list') {
      return;
    }
    this.viewMode = viewMode;
    if (this.viewMode === 'create' && !this.selectedTemplateId) {
      this.openTemplateModal();
    }
  }

  openTemplateModal() {
    this.templateModal?.openModal();
  }

  onTemplateSelected(templateId: ResumeTemplateId) {
    this.selectedTemplateId = templateId;
    this.viewMode = 'create';
  }

  handleTemplateModalClosed() {
    if (!this.selectedTemplateId) {
      this.viewMode = 'list';
    }
  }

  setViewMode() {
    this.viewMode = this.viewMode === 'list' ? 'create' : 'list';
  }
}


