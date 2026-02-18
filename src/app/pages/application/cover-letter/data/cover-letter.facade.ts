import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { deleteCoverLetter, generateCoverLetter, loadAllCoverLetters } from "./cover-letter.actions";
import { selectCoverLettersError, selectCoverLettersGenerating, selectGeneratedCoverLetterText } from "./cover-letter.selectors";

@Injectable({
    providedIn: "root"
})
export class CoverLetterFacade {
    store = inject(Store);
    generatedText$ = this.store.select(selectGeneratedCoverLetterText);
    generating$ = this.store.select(selectCoverLettersGenerating);
    error$ = this.store.select(selectCoverLettersError);
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
