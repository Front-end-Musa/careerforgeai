import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { deleteCoverLetter, generateCoverLetter, loadAllCoverLetters } from "./cover-letter.actions";

@Injectable({
    providedIn: "root"
})
export class CoverLetterFacade {
    coverLetters$ = null;
    store = inject(Store);
    constructor(  ) { }

    loadCoverLetters() {
        this.store.dispatch(loadAllCoverLetters());
    }

    deleteCoverLetter(id: string) {
        this.store.dispatch(deleteCoverLetter({ id }));
    }

    generateCoverLetter(resumeText: string, jobDescription: string, companyName: string, position: string, tone: string) {
        this.store.dispatch(generateCoverLetter({ resumeText, jobDescription, companyName, position, tone }));
    }
}