import { Job } from "./job.interface";
import { Resume } from "./resumes.interface";

export interface User {
  name: string;
  role: string;
  resumes: Resume[];
  applications: Job[];
  interviews: Job[];
  profileViews: number;
}
