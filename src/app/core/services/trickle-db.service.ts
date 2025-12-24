import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job.interface';
import { User } from '../interfaces/user.interface';
import { Resume } from '../interfaces/resumes.interface';

@Injectable({
  providedIn: 'root',
})
export class TrickleDBService {
  private baseUrl = 'https://api.trickledb.com'; // Example API endpoint

  constructor(private http: HttpClient) {}

  // Job operations
  getJobs(userId: string): Observable<Job[]> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<Job[]>(`${this.baseUrl}/jobs`, { params });
  }

  createJob(job: Partial<Job>): Observable<Job> {
    return this.http.post<Job>(`${this.baseUrl}/jobs`, job);
  }

  updateJob(id: string, job: Partial<Job>): Observable<Job> {
    return this.http.put<Job>(`${this.baseUrl}/jobs/${id}`, job);
  }

  deleteJob(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/jobs/${id}`);
  }

  // User operations
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  updateUser(id: string, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${id}`, user);
  }

  // Resume operations
  getResumes(userId: string): Observable<Resume[]> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<Resume[]>(`${this.baseUrl}/resumes`, { params });
  }

  createResume(resume: Partial<Resume>): Observable<Resume> {
    return this.http.post<Resume>(`${this.baseUrl}/resumes`, resume);
  }

  updateResume(id: string, resume: Partial<Resume>): Observable<Resume> {
    return this.http.put<Resume>(`${this.baseUrl}/resumes/${id}`, resume);
  }

  deleteResume(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/resumes/${id}`);
  }
}
