import { Component, inject, signal, OnInit } from '@angular/core';
import { ResumeCard } from './resume-card/resume-card';
import { Resume } from '../../../../core/interfaces/resumes.interface';
import { ResumesFacade } from '../data/resumes.facade';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resumes-list',
  imports: [ResumeCard],
  templateUrl: './resumes-list.html',
  styleUrl: './resumes-list.scss',
})
export class ResumesList implements OnInit {
  private resumesFacade = inject(ResumesFacade);
  // resumes = toSignal(this.resumesFacade.resumes$, { initialValue: [] });
  resumes = signal<Resume[]>([]);
  loading$: Observable<boolean> = this.resumesFacade.loading$;
  error$: Observable<string | null> = this.resumesFacade.error$;

  ngOnInit(): void {
    this.resumesFacade.loadResumes();
    this.resumesFacade.resumes$.subscribe((resumes: Resume[]) => {
      this.resumes.set(resumes ?? []);
      console.log('Data arriving from Facade:', resumes); // Check if this is undefined
    });
    console.log('Resumes Signal after subscription:', this.resumes()); // Check the signal value
  }
}
