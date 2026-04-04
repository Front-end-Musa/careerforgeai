import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { ResumeTemplateId } from '../../../../core/interfaces/resumes.interface';
import { AuthFacade } from '../../../auth/data/auth.facade';
import { ResumesFacade } from '../data/resumes.facade';
import { ResumesCreate } from '../resumes-create/resumes-create';
import { ResumeTemplateModal } from '../resume-template-modal/resume-template-modal';

@Component({
  selector: 'app-resumes-edit',
  imports: [ResumesCreate, ResumeTemplateModal, AsyncPipe],
  templateUrl: './resumes-edit.html',
  styleUrl: './resumes-edit.scss',
})
export class ResumesEdit implements AfterViewInit {
  @ViewChild('templateModal') templateModal?: ResumeTemplateModal;
  private route = inject(ActivatedRoute);
  private resumesFacade = inject(ResumesFacade);
  private authFacade = inject(AuthFacade);
  resumeId = this.route.snapshot.paramMap.get('id') ?? '';
  selectedTemplateId: ResumeTemplateId | undefined;
  plan$ = this.authFacade.user$.pipe(map((user) => user?.plan ?? 'free'));

  ngAfterViewInit() {
    if (!this.resumeId) {
      return;
    }

    this.resumesFacade
      .getResumeById(this.resumeId)
      .pipe(take(1))
      .subscribe((resume) => {
        this.selectedTemplateId = resume?.templateId;
      });
  }

  openTemplateModal() {
    this.templateModal?.openModal();
  }

  onTemplateSelected(templateId: ResumeTemplateId) {
    this.selectedTemplateId = templateId;
  }
}
