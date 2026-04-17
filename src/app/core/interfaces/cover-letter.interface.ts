export interface CoverLetter {
  id?: string;
  userId: string;
  companyName: string;
  position: string;
  jobDescription: string;
  tone: string;
  text?: string;
  resumeId?: string;
  resumeLabel?: string;
  createdAt: any; // Firestore Timestamp
}
