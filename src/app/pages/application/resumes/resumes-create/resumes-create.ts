import { Component, OnInit } from '@angular/core';
import { ToneChoose } from '../../../buttons/tone-choose/tone-choose';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { GenerateBtn } from '../../../buttons/generate-btn/generate-btn';
import { CommonModule } from '@angular/common';
import { AIAgentService } from '../../../../core/services/ai-agent.service';
import { ResumeService } from '../../../../core/services/resume.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import OpenAi from 'openai';
import { environment } from '../../../../../environments/environment';

type ResumeEditorMode = 'create' | 'edit';

interface GeneratedResume {
  fullName: string;
  jobTitle: string;
  email: string;
  skills: string;
  content: string;
  tone: string;
}

@Component({
  selector: 'app-resumes-create',
  imports: [
    MatButton,
    ReactiveFormsModule,
    MatLabel,
    MatInput,
    GenerateBtn,
    ToneChoose,
    CommonModule,
    MatProgressSpinner,
  ],
  templateUrl: './resumes-create.html',
  styleUrl: './resumes-create.scss',
})
export class ResumesCreate implements OnInit {
  tones: string[] = ['Modern', 'Minimal', 'Creative'];
  selectedTone: string = this.tones[0];
  resumeGroup: FormGroup;
  resumeGenerated: boolean = false;
  isGenerating: boolean = false;
  generatedResume: GeneratedResume | null = null;

  constructor(
    private aiAgentService: AIAgentService,
    private resumeService: ResumeService,
  ) {
    this.resumeGroup = new FormGroup({
      fullName: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      experience: new FormControl('', Validators.required),
      skills: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    // Initialize any resume data if needed
  }

  onToneSelected(tone: string) {
    this.selectedTone = tone;
  }

  generateResume() {
    if (this.resumeGroup.invalid) {
      Object.keys(this.resumeGroup.controls).forEach((key) => {
        this.resumeGroup.get(key)?.markAsTouched();
      });
      return;
    }

    this.isGenerating = true;
    const formData = this.resumeGroup.value;

    const prompt = `Generate a professional ${this.selectedTone.toLowerCase()} resume with the following information:
    Full Name: ${formData.fullName}
    Job Title: ${formData.jobTitle}
    Email: ${formData.email}
    Experience: ${formData.experience}
    Skills: ${formData.skills}
    
    Format the resume in HTML with proper sections for header, summary, experience, and skills. Make it look professional and ready to export. Use inline CSS for styling.`;

    this.aiAgentService.generateResponse({ prompt }).subscribe({
      next: (response) => {
        this.generatedResume = {
          fullName: formData.fullName,
          jobTitle: formData.jobTitle,
          email: formData.email,
          skills: formData.skills,
          content: response.response,
          tone: this.selectedTone,
        };
        this.resumeGenerated = true;
        this.isGenerating = false;
      },
      error: (error) => {
        console.error('Error generating resume:', error);
        this.isGenerating = false;
        alert('Failed to generate resume. Please try again.');
      },
    });
  }

  exportPDF() {
    if (!this.generatedResume) return;

    const element = document.querySelector('.resume-preview-content');
    if (!element) return;

    // Using a simple approach - can be enhanced with html2pdf library
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write(
        '<html><head><title>' + this.generatedResume.fullName + ' Resume</title></head><body>',
      );
      printWindow.document.write(this.generatedResume.content);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  }

  exportDOCX() {
    if (!this.generatedResume) return;

    const html = this.generatedResume.content;
    const blob = new Blob([html], { type: 'application/msword' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${this.generatedResume.fullName}-resume.doc`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  resetForm() {
    this.resumeGroup.reset();
    this.resumeGenerated = false;
    this.generatedResume = null;
    this.selectedTone = this.tones[0];
  }
}
