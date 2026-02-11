export interface CoverLetter {
    id?: string;
    userId: string;
    companyName: string;
    position: string;
    jobDescription: string;
    tone: string;
    createdAt: any; // Firestore Timestamp
}