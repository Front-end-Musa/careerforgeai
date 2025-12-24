import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AIRequest {
  prompt: string;
  model?: string;
  temperature?: number;
}

export interface AIResponse {
  response: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AIAgentService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // Example API endpoint
  private apiKey = 'your-api-key-here'; // Should be from environment

  constructor(private http: HttpClient) {}

  generateResponse(request: AIRequest): Observable<AIResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: request.model || 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: request.prompt }],
      temperature: request.temperature || 0.7,
    };

    return this.http.post<AIResponse>(this.apiUrl, body, { headers });
  }

  // Additional methods for specific AI tasks
  generateCoverLetter(jobDescription: string, userProfile: any): Observable<AIResponse> {
    const prompt = `Generate a cover letter for the following job: ${jobDescription}. User profile: ${JSON.stringify(
      userProfile
    )}`;
    return this.generateResponse({ prompt });
  }

  generateInterviewQuestions(jobTitle: string): Observable<AIResponse> {
    const prompt = `Generate interview questions for the position of ${jobTitle}`;
    return this.generateResponse({ prompt });
  }
}
