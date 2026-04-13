import { createAction, props } from "@ngrx/store";

export const loadAllCoverLetters = createAction('[Cover Letter] Get All Cover Letters');
export const loadAllCoverLettersSuccess = createAction('[Cover Letter] Get All Cover Letters Success', props<{ coverLetters: any[] }>());
export const loadAllCoverLettersFailure = createAction('[Cover Letter] Get All Cover Letters Failure', props<{ error: unknown }>());

export const deleteCoverLetter = createAction('[Cover Letter] Delete Cover Letter', props<{ id: string }>());
export const deleteCoverLetterSuccess = createAction('[Cover Letter] Delete Cover Letter Success', props<{ id: string }>());
export const deleteCoverLetterFailure = createAction('[Cover Letter] Delete Cover Letter Failure', props<{ error: unknown }>());

export const generateCoverLetter = createAction('[Cover Letter] Generate Cover Letter', props<{ resumeText: string; jobDescription: string, companyName: string, position: string, tone: string }>());
export const generateCoverLetterSuccess = createAction('[Cover Letter] Generate Cover Letter Success', props<{ coverLetter: string }>());
export const generateCoverLetterFailure = createAction('[Cover Letter] Generate Cover Letter Failure', props<{ error: unknown }>());
