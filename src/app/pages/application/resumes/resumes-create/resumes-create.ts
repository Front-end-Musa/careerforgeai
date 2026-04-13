import { ProjectEntry, Resume, ResumeTemplateId } from './../../../../core/interfaces/resumes.interface';
import { Component, DestroyRef, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GenerateBtn } from '../../../buttons/generate-btn/generate-btn';
import { ResumesFacade } from '../data/resumes.facade';
import { Location } from '@angular/common';
import { ResumePreview } from '../resume-preview/resume-preview';
import { map, startWith, take, filter, skip } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resumes-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,    GenerateBtn,
    ResumePreview,
  ],
  templateUrl: './resumes-create.html',
  styleUrl: './resumes-create.scss',
})
export class ResumesCreate implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() resumeId: string | null = null;
  @Input() templateId?: ResumeTemplateId;
  @Input() plan: 'free' | 'pro' | 'premium' = 'free';
  @Output() changeTemplate = new EventEmitter<void>();

  resumeGroup: FormGroup;
  isGenerating: boolean = false;
  resumesFacade = inject(ResumesFacade);
  destroyRef = inject(DestroyRef);
  location = inject(Location);
  router = inject(Router);
  isSaving$ = this.resumesFacade.saving$;
  currentStep = 0;
  progressPercent = 25;
  workExperiences: FormGroup[] = [];
  educations: FormGroup[] = [];
  showPersonal = true;
  showWorkExperience = false;
  showEducation = false;
  showSkills = false;
  previewTemplate: ResumeTemplateId = 'basic';
  preview$!: ReturnType<ResumesCreate['resumeGroupValueChanges']>;
  showTailoring = false;
  loadedMeta: Resume['meta'] | null = null;

  constructor() {
    this.resumeGroup = new FormGroup({
      personalInfo: new FormGroup({
        fullName: new FormControl('', Validators.required),
        jobTitle: new FormControl(''),
      }),
      contact: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', Validators.pattern(/^\+?[0-9\s\-]{7,15}$/)),
        location: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ]),
      }),
      summary: new FormControl(''),
      skills: new FormControl('', Validators.required),
      experience: new FormArray<FormGroup>([]),
      education: new FormArray<FormGroup>([]),
      projects: new FormControl([] as ProjectEntry[]),
      certifications: new FormControl([] as string[]),
      meta: new FormGroup({
        createdAt: new FormControl(new Date()),
        updatedAt: new FormControl(new Date()),
      }),
    });

    this.preview$ = this.resumeGroupValueChanges();
  }

  ngOnInit() {
    if (this.templateId) {
      this.previewTemplate = this.templateId;
    }
    this.resumesFacade.saveSucceeded$
      .pipe(
        skip(1),
        filter((saved) => saved),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.router.navigate(['/application/resumes']);
      });

    if (!this.isEditMode || !this.resumeId) {
      return;
    }
    this.loadResumeForEdit(this.resumeId);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['templateId']?.currentValue) {
      this.previewTemplate = changes['templateId'].currentValue;
    }
  }

  get isEditMode() {
    return this.mode === 'edit';
  }

  get experienceArray() {
    return this.resumeGroup.get('experience') as FormArray<FormGroup>;
  }

  get educationArray() {
    return this.resumeGroup.get('education') as FormArray<FormGroup>;
  }

  toggleSection(section: 'personal' | 'experience' | 'education' | 'tailoring' | 'skills') {
    if (section === 'personal') {
      this.showPersonal = !this.showPersonal;
    } else if (section === 'experience') {
      this.showWorkExperience = !this.showWorkExperience;
    } else if (section === 'education') {
      this.showEducation = !this.showEducation;
    } else if (section === 'skills') {
      this.showSkills = !this.showSkills;
    }
  }

  addWorkExperience() {
    const group = new FormGroup({
      company: new FormControl(''),
      role: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      description: new FormControl(''),
    });

    this.experienceArray.push(group);
    this.workExperiences = this.experienceArray.controls;
  }

  removeWorkExperience(index: number) {
    this.experienceArray.removeAt(index);
    this.workExperiences = this.experienceArray.controls;
  }

  addEducation() {
    const group = new FormGroup({
      school: new FormControl(''),
      degree: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      description: new FormControl(''),
    });

    this.educationArray.push(group);
    this.educations = this.educationArray.controls;
  }

  removeEducation(index: number) {
    this.educationArray.removeAt(index);
    this.educations = this.educationArray.controls;
  }

  generateWithAI() {
    if (this.resumeGroup.invalid) {
      Object.keys(this.resumeGroup.controls).forEach((key) => {
        this.resumeGroup.get(key)?.markAsTouched();
      });
      return;
    }

    this.isGenerating = true;
    const raw = this.resumeGroup.getRawValue();
    const payload = {
      ...raw,
      experience: this.normalizeExperience(raw.experience),
      education: this.normalizeEducation(raw.education),
      skills: this.normalizeSkills(raw.skills),
      templateId: this.previewTemplate,
      meta: {
        ...(this.loadedMeta ?? {}),
        ...(raw.meta ?? {}),
        updatedAt: new Date().toISOString(),
      },
    };

    this.resumesFacade.generateResume(payload);
  }

  canGenerateSummary() {
    return this.hasBasicInfo();
  }

  generateSummaryWithAI() {
    if (!this.canGenerateSummary()) {
      this.resumeGroup.get('personalInfo.fullName')?.markAsTouched();
      this.resumeGroup.get('personalInfo.jobTitle')?.markAsTouched();
      this.resumeGroup.get('skills')?.markAsTouched();
      return;
    }

    const raw = this.resumeGroup.getRawValue();
    const prompt = this.buildSummaryPrompt(raw);
    this.isGenerating = true;
    this.resumesFacade.generateResume(prompt);
  }

  canGenerateExperience(index: number) {
    if (!this.hasBasicInfo()) {
      return false;
    }

    const group = this.experienceArray.at(index) as FormGroup;
    const company = group.get('company')?.value?.trim();
    const role = group.get('role')?.value?.trim();
    return Boolean(company && role);
  }

  generateExperienceWithAI(index: number) {
    if (!this.canGenerateExperience(index)) {
      const group = this.experienceArray.at(index) as FormGroup;
      group.get('company')?.markAsTouched();
      group.get('role')?.markAsTouched();
      return;
    }

    const raw = this.resumeGroup.getRawValue();
    const entry = (raw.experience ?? [])[index] ?? {};
    const prompt = this.buildExperiencePrompt(raw, entry);
    this.isGenerating = true;
    this.resumesFacade.generateResume(prompt);
  }

  canGenerateEducation(index: number) {
    if (!this.hasBasicInfo()) {
      return false;
    }

    const group = this.educationArray.at(index) as FormGroup;
    const school = group.get('school')?.value?.trim();
    const degree = group.get('degree')?.value?.trim();
    return Boolean(school && degree);
  }

  generateEducationWithAI(index: number) {
    if (!this.canGenerateEducation(index)) {
      const group = this.educationArray.at(index) as FormGroup;
      group.get('school')?.markAsTouched();
      group.get('degree')?.markAsTouched();
      return;
    }

    const raw = this.resumeGroup.getRawValue();
    const entry = (raw.education ?? [])[index] ?? {};
    const prompt = this.buildEducationPrompt(raw, entry);
    this.isGenerating = true;
    this.resumesFacade.generateResume(prompt);
  }

  private normalizeSkills(input: string) {
    return input
      .split(/[,\n]+/)
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  private normalizeExperience(
    raw: Array<{
      company?: string;
      role?: string;
      startDate?: string;
      endDate?: string;
      description?: string;
    }>,
  ) {
    return raw.map((entry) => ({
      company: entry.company?.trim() ?? '',
      role: entry.role?.trim() ?? '',
      startDate: entry.startDate?.trim() ?? '',
      endDate: this.normalizeEndDate(entry.endDate),
      description: this.normalizeBullets(entry.description),
    }));
  }

  private normalizeEducation(
    raw: Array<{
      school?: string;
      degree?: string;
      startDate?: string;
      endDate?: string;
      description?: string;
    }>,
  ) {
    return raw.map((entry) => ({
      school: entry.school?.trim() ?? '',
      degree: entry.degree?.trim() ?? '',
      startDate: entry.startDate?.trim() ?? '',
      endDate: entry.endDate?.trim() ?? '',
      description: this.normalizeBullets(entry.description),
    }));
  }

  private resumeGroupValueChanges() {
    return this.resumeGroup.valueChanges.pipe(
      startWith(this.resumeGroup.getRawValue()),
      map(
        (raw) =>
          ({
            ...raw,
            experience: this.normalizeExperience(raw.experience),
            education: this.normalizeEducation(raw.education),
            skills: this.normalizeSkills(raw.skills),
            templateId: this.previewTemplate,
          }) as Partial<Resume>,
      ),
    );
  }

  private hasBasicInfo() {
    const fullName = this.resumeGroup.get('personalInfo.fullName')?.value?.trim();
    const jobTitle = this.resumeGroup.get('personalInfo.jobTitle')?.value?.trim();
    const skills = this.resumeGroup.get('skills')?.value?.trim();
    return Boolean(fullName && jobTitle && skills);
  }

  private normalizeEndDate(input?: string) {
    const trimmed = input?.trim();
    if (!trimmed) {
      return 'Present';
    }
    return trimmed;
  }

  private normalizeBullets(input?: string) {
    if (!input) {
      return [];
    }

    return input
      .split(/\n+|\u2022\s*|-+\s*/)
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  private buildSummaryPrompt(raw: {
    personalInfo?: { fullName?: string; jobTitle?: string };
    contact?: { location?: string };
    summary?: string;
    skills?: string;
    experience?: Array<{
      company?: string;
      role?: string;
      startDate?: string;
      endDate?: string;
      description?: string;
    }>;
    education?: Array<{
      school?: string;
      degree?: string;
      startDate?: string;
      endDate?: string;
      description?: string;
    }>;
  }) {
    const experience = this.normalizeExperience(raw.experience ?? []);
    const education = this.normalizeEducation(raw.education ?? []);
    const skills = this.normalizeSkills(raw.skills ?? '');

    return [
      'Write a 2-4 sentence professional summary for a resume.',
      'Use ONLY the facts provided. Do NOT invent employers, degrees, dates, metrics, or locations.',
      'If a detail is missing, omit it.',
      '',
      `Name: ${raw.personalInfo?.fullName ?? ''}`,
      `Job Title: ${raw.personalInfo?.jobTitle ?? ''}`,
      `Location: ${raw.contact?.location ?? ''}`,
      `Skills: ${skills.join(', ')}`,
      '',
      'Experience:',
      ...experience.map(
        (entry) =>
          `- ${entry.role} at ${entry.company} (${entry.startDate} to ${entry.endDate}): ${entry.description.join(
            '; ',
          )}`,
      ),
      '',
      'Education:',
      ...education.map(
        (entry) => `- ${entry.degree} at ${entry.school} (${entry.startDate} to ${entry.endDate})`,
      ),
    ].join('\n');
  }

  private buildExperiencePrompt(
    raw: {
      personalInfo?: { fullName?: string; jobTitle?: string };
      skills?: string;
      experience?: Array<{
        company?: string;
        role?: string;
        startDate?: string;
        endDate?: string;
        description?: string;
      }>;
    },
    entry: {
      company?: string;
      role?: string;
      startDate?: string;
      endDate?: string;
      description?: string;
    },
  ) {
    const skills = this.normalizeSkills(raw.skills ?? '');
    const description = this.normalizeBullets(entry.description);

    return [
      'Write 3-5 resume bullet points for this role.',
      'Use ONLY the facts provided. Do NOT invent employers, degrees, dates, metrics, or tools.',
      'If no responsibilities are provided, return: "Add responsibilities for this role."',
      '',
      `Name: ${raw.personalInfo?.fullName ?? ''}`,
      `Job Title: ${raw.personalInfo?.jobTitle ?? ''}`,
      `Skills: ${skills.join(', ')}`,
      '',
      `Company: ${entry.company ?? ''}`,
      `Role: ${entry.role ?? ''}`,
      `Dates: ${entry.startDate ?? ''} to ${entry.endDate ?? ''}`,
      `Existing Notes: ${description.join('; ')}`,
    ].join('\n');
  }

  private buildEducationPrompt(
    raw: {
      personalInfo?: { fullName?: string; jobTitle?: string };
      skills?: string;
      education?: Array<{
        school?: string;
        degree?: string;
        startDate?: string;
        endDate?: string;
        description?: string;
      }>;
    },
    entry: {
      school?: string;
      degree?: string;
      startDate?: string;
      endDate?: string;
      description?: string;
    },
  ) {
    const skills = this.normalizeSkills(raw.skills ?? '');
    const description = this.normalizeBullets(entry.description);

    return [
      'Write 1-3 resume bullet points for the education entry.',
      'Use ONLY the facts provided. Do NOT invent institutions, dates, honors, or activities.',
      'If no notes are provided, return: "Add relevant coursework or achievements."',
      '',
      `Name: ${raw.personalInfo?.fullName ?? ''}`,
      `Job Title: ${raw.personalInfo?.jobTitle ?? ''}`,
      `Skills: ${skills.join(', ')}`,
      '',
      `School: ${entry.school ?? ''}`,
      `Degree: ${entry.degree ?? ''}`,
      `Dates: ${entry.startDate ?? ''} to ${entry.endDate ?? ''}`,
      `Existing Notes: ${description.join('; ')}`,
    ].join('\n');
  }

  getTemplateLabel(templateId: ResumeTemplateId) {
    const labels: Record<ResumeTemplateId, string> = {
      'basic': 'Basic',
      'ats-simple': 'ATS-Friendly Simple',
      'classic-one-column': 'Classic One-Column',
      'pro-modern': 'Pro (Professional & Modern)',
      'cascade': 'Cascade (Pro)',
      'cubic-pro': 'Cubic (Pro)',
      'tech-savvy': 'Tech-Savvy',
      'modern-executive': 'Modern Executive',
      'premium-executive': 'Premium (Executive & High-End)',
      'executive-edge': 'Executive Edge',
      'graphical-genius': 'Graphical Genius',
      'elite-senior': 'Elite Senior',
      'metamorphic-masterpiece': 'Metamorphic Masterpiece',
    };
    return labels[templateId] ?? 'Basic';
  }

  requestTemplateChange() {
    this.changeTemplate.emit();
  }

  isTemplateLocked(templateId: ResumeTemplateId) {
    return this.planRank(this.plan) < this.planRank(this.requiredPlan(templateId));
  }

  private requiredPlan(templateId: ResumeTemplateId) {
    const proTemplates: ResumeTemplateId[] = [
      'pro-modern',
      'cascade',
      'cubic-pro',
      'tech-savvy',
      'modern-executive',
    ];
    const premiumTemplates: ResumeTemplateId[] = [
      'premium-executive',
      'executive-edge',
      'graphical-genius',
      'elite-senior',
      'metamorphic-masterpiece',
    ];

    if (premiumTemplates.includes(templateId)) {
      return 'premium';
    }
    if (proTemplates.includes(templateId)) {
      return 'pro';
    }
    return 'free';
  }

  private planRank(plan: 'free' | 'pro' | 'premium') {
    if (plan === 'premium') {
      return 3;
    }
    if (plan === 'pro') {
      return 2;
    }
    return 1;
  }

  goBack() {
    this.location.back();
  }

  saveResume() {
    console.log(this.isEditMode ? 'Updating resume...' : 'Creating resume...');
    if (this.resumeGroup.invalid) {
      console.log(this.resumeGroup);
      this.resumeGroup.markAllAsTouched();
      return;
    }

    const raw = this.resumeGroup.getRawValue();
    const payload: Partial<Resume> = {
      ...raw,
      experience: this.normalizeExperience(raw.experience),
      education: this.normalizeEducation(raw.education),
      skills: this.normalizeSkills(raw.skills),
      templateId: this.previewTemplate,
      meta: {
        ...(this.loadedMeta ?? {}),
        ...(raw.meta ?? {}),
        updatedAt: new Date().toISOString(),
      },
    };

    if (this.isEditMode) {
      if (!this.resumeId) {
        // debugger;
        return;
      }

      this.resumesFacade.saveResumeData(payload, this.resumeId);
      return;
    }

    const createPayload: Partial<Resume> = {
      ...payload,
      createdAt: new Date().toISOString(),

      meta: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        source: 'manual',
        version: 1,
      },
    };
    this.resumesFacade.saveResumeData(createPayload);
  }

  async exportToPdf() {
    const raw = this.resumeGroup.getRawValue();
    const payload: Partial<Resume> = {
      ...raw,
      experience: this.normalizeExperience(raw.experience),
      education: this.normalizeEducation(raw.education),
      skills: this.normalizeSkills(raw.skills),
      templateId: this.previewTemplate,
      meta: {
        ...(this.loadedMeta ?? {}),
        ...(raw.meta ?? {}),
        updatedAt: new Date().toISOString(),
      },
    };

    await this.resumesFacade.exportResumeToPdf(payload, this.previewTemplate);
  }

  private loadResumeForEdit(id: string) {
    this.resumesFacade
      .getResumeById(id)
      .pipe(take(1))
      .subscribe((resume) => {
        if (!resume) {
          this.router.navigate(['/application/resumes']);
          return;
        }
        const contact = (resume.contact ?? {}) as {
          email?: string;
          phone?: string;
          location?: string;
        };

        this.resumeGroup.patchValue({
          userId: resume.userId,
          personalInfo: {
            fullName: resume.personalInfo?.fullName ?? '',
            jobTitle: resume.personalInfo?.jobTitle ?? '',
          },
          contact: {
            email: contact.email ?? '',
            phone: contact.phone ?? '',
            location: contact.location ?? '',
          },
          summary: resume.summary ?? '',
          skills: Array.isArray(resume.skills) ? resume.skills.join(', ') : '',
          projects: resume.projects ?? [],
          certifications: resume.certifications ?? [],
          meta: {
            createdAt: resume.meta?.createdAt ?? new Date().toISOString(),
            updatedAt: resume.meta?.updatedAt ?? new Date().toISOString(),
          },
        });

        this.previewTemplate = resume.templateId ?? this.previewTemplate;
        this.loadedMeta = resume.meta ?? null;


        this.experienceArray.clear();
        (resume.experience ?? []).forEach((entry) => {
          this.experienceArray.push(
            new FormGroup({
              company: new FormControl(entry.company ?? ''),
              role: new FormControl(entry.role ?? ''),
              startDate: new FormControl(entry.startDate ?? ''),
              endDate: new FormControl(entry.endDate ?? ''),
              description: new FormControl((entry.description ?? []).join('\n')),
            }),
          );
        });
        this.workExperiences = this.experienceArray.controls;

        this.educationArray.clear();
        (resume.education ?? []).forEach((entry) => {
          this.educationArray.push(
            new FormGroup({
              school: new FormControl(entry.school ?? ''),
              degree: new FormControl(entry.degree ?? ''),
              startDate: new FormControl(entry.startDate ?? ''),
              endDate: new FormControl(entry.endDate ?? ''),
              description: new FormControl((entry.description ?? []).join('\n')),
            }),
          );
        });
        this.educations = this.educationArray.controls;
      });
  }
}



















