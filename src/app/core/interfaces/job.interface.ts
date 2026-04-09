export type JobStatus = 'applied' | 'interviewing' | 'offered' | 'rejected';

export interface Job {
  id?: string;
  userId: string;
  title: string;
  company: string;
  status: JobStatus;
  dateApplied: string;
  createdAt?: unknown;
  updatedAt?: unknown;
  position: number;
}
