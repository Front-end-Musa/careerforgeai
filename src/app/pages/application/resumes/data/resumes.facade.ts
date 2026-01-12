import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadResumes } from "./resumes.actions";
import { selectAllResumes, selectResumesLoading } from "./resumes.selectors";

@Injectable({
  providedIn: 'root',
})
export class ResumesFacade {
  private store = inject(Store);
  public resumes$ = this.store.select(selectAllResumes);
  public loading$ = this.store.select(selectResumesLoading);
  public error$ = this.store.select((state) => state.resumes.error);

  loadResumes() {
    this.store.dispatch(loadResumes());
  }
}