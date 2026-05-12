import { CommonModule, Location } from '@angular/common';
import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { auditTime, filter, map, merge, of, skip, take } from 'rxjs';
import {
  AwardSectionEntry,
  CertificationSectionEntry,
  CustomResumeSection,
  CustomSectionEntry,
  EducationEntry,
  ExperienceEntry,
  LanguageSectionEntry,
  ProjectSectionEntry,
  Resume,
  ResumeSection,
  ResumeSectionType,
  ResumeTemplateId,
  VolunteerSectionEntry,
} from '../../../../core/interfaces/resumes.interface';
import {
  ResumeGenerationDraft,
  ResumeGenerationRequest,
  ResumeGenerationResult,
} from '../../../../core/interfaces/resume-generation.interface';
import { AppUser } from '../../../../core/interfaces/user.interface';
import {
  CORE_RESUME_SECTION_TYPES,
  PRESET_RESUME_SECTION_TYPES,
  RESUME_SECTION_LABELS,
  createSectionId,
  normalizeResumeSections,
} from '../../../../core/utils/resume-sections.util';
import { GenerateBtn } from '../../../buttons/generate-btn/generate-btn';
import { ResumesFacade } from '../data/resumes.facade';
import { ResumePreview } from '../resume-preview/resume-preview';
import { EntitlementsService } from '../../../../core/services/entitlements.service';
import { ResumeAccessPolicyService } from '../../../../core/services/resume-access-policy.service';
import { ResumeUpgradeService } from '../../../../core/services/resume-upgrade.service';
import { DateField } from '../../../../lib/date-field/date-field';
import { getSafeTemplateId, getTemplateById, getTemplateLabel } from '../data/resume-template-catalog';
import { ResumesStatus } from '../data/resumes.reducer';

type SectionControl = FormGroup<{
  id: FormControl<string>;
  type: FormControl<ResumeSectionType>;
  title: FormControl<string>;
  enabled: FormControl<boolean>;
  expanded: FormControl<boolean>;
}>;

type CustomSectionControl = FormGroup<{
  id: FormControl<string>;
  title: FormControl<string>;
  entries: FormArray<FormGroup>;
}>;

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
    MatProgressBarModule,
    GenerateBtn,
    ResumePreview,
    DateField,
  ],
  templateUrl: './resumes-create.html',
  styleUrl: './resumes-create.scss',
})
export class ResumesCreate implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() resumeId: string | null = null;
  @Input() templateId?: ResumeTemplateId;
  @Input() plan: 'free' | 'pro' | 'premium' = 'free';
  @Input() user: AppUser | null = null;
  @Input() resumeCount = 0;
  @Output() changeTemplate = new EventEmitter<void>();
  @Output() saveCompleted = new EventEmitter<void>();

  resumesFacade = inject(ResumesFacade);
  entitlementsService = inject(EntitlementsService);
  resumeAccessPolicy = inject(ResumeAccessPolicyService);
  resumeUpgrade = inject(ResumeUpgradeService);
  destroyRef = inject(DestroyRef);
  location = inject(Location);
  router = inject(Router);

  isGenerating$ = this.resumesFacade.generating$;
  generationError$ = this.resumesFacade.error$;
  isSaving$ = this.resumesFacade.saving$;
  entitlements = toSignal(this.entitlementsService.entitlements$, {
    initialValue: {
      resumeGenerationsPerPeriod: 1,
      coverLettersPerPeriod: 3,
      canUseJobTracker: false,
      canStoreGeneratedResume: false,
      canDownloadResume: false,
    },
  });
  usage = toSignal(this.entitlementsService.usage$, {
    initialValue: {
      resumeGenerationsUsed: 0,
      coverLettersUsed: 0,
      resumeGenerationsRemaining: 1,
      coverLettersRemaining: 3,
      usagePeriodKey: null,
      usagePeriodStartedAt: null,
      usagePeriodEndsAt: null,
    },
  });
  nextResetLabel = toSignal(this.entitlementsService.nextResetLabel$, {
    initialValue: 'this period',
  });

  previewTemplate: ResumeTemplateId = 'basic';
  loadedMeta: Resume['meta'] | null = null;
  showAddSectionMenu = false;
  readonly sectionLabels = RESUME_SECTION_LABELS;
  readonly presetSectionTypes = PRESET_RESUME_SECTION_TYPES.filter((type) => type !== 'custom');

  resumeGroup = new FormGroup({
    personalInfo: new FormGroup({
      fullName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      jobTitle: new FormControl('', { nonNullable: true }),
    }),
    contact: new FormGroup({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      phone: new FormControl('', {
        nonNullable: true,
        validators: [Validators.pattern(/^\+?[0-9\s\-]{7,15}$/)],
      }),
      location: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)],
      }),
      linkedin: new FormControl('', { nonNullable: true }),
      github: new FormControl('', { nonNullable: true }),
      website: new FormControl('', { nonNullable: true }),
    }),
    summary: new FormControl('', { nonNullable: true }),
    skills: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    skillsLanguages: new FormControl('', { nonNullable: true }),
    skillsTools: new FormControl('', { nonNullable: true }),
    experience: new FormArray<FormGroup>([]),
    education: new FormArray<FormGroup>([]),
    projects: new FormArray<FormGroup>([]),
    certifications: new FormArray<FormGroup>([]),
    languages: new FormArray<FormGroup>([]),
    awards: new FormArray<FormGroup>([]),
    volunteerExperience: new FormArray<FormGroup>([]),
    customSections: new FormArray<CustomSectionControl>([]),
    sectionOrder: new FormArray<SectionControl>([]),
    templateId: new FormControl<ResumeTemplateId>('basic', { nonNullable: true }),
    meta: new FormGroup({
      createdAt: new FormControl(new Date().toISOString(), { nonNullable: true }),
      updatedAt: new FormControl(new Date().toISOString(), { nonNullable: true }),
      source: new FormControl<'ai' | 'manual'>('manual', { nonNullable: true }),
      version: new FormControl(1, { nonNullable: true }),
    }),
  });

  preview$ = this.resumeGroupValueChanges();

  constructor() {
    this.resetSectionOrder();
  }

  ngOnInit() {
    this.resumesFacade.ensureLoaded('ResumesCreate.ngOnInit');
    if (this.templateId) {
      this.previewTemplate = getSafeTemplateId(this.templateId);
      this.resumeGroup.controls.templateId.setValue(this.previewTemplate);
    }

    this.resumesFacade.saveSucceeded$
      .pipe(skip(1), filter((saved) => saved), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.saveCompleted.emit();
      });

    this.resumesFacade.generatedResult$
      .pipe(
        filter((result): result is ResumeGenerationResult => result !== null),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((result) => {
        this.applyGenerationResult(result);
        this.resumesFacade.clearGeneratedResult();
      });

    if (this.isEditMode && this.resumeId) {
      this.loadResumeForEdit(this.resumeId);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['templateId']?.currentValue) {
      this.previewTemplate = getSafeTemplateId(changes['templateId'].currentValue);
      this.resumeGroup.controls.templateId.setValue(this.previewTemplate);
    }
  }

  get isEditMode() {
    return this.mode === 'edit';
  }

  get hasAiGeneratedDraft() {
    return this.resumeGroup.get('meta.source')?.value === 'ai';
  }

  get canStoreCurrentResume() {
    return !this.hasAiGeneratedDraft || this.entitlements().canStoreGeneratedResume;
  }

  get canDownloadCurrentResume() {
    return this.entitlements().canDownloadResume;
  }

  get previewHeading() {
    return 'Live Preview';
  }

  get previewDescription() {
    return 'Section order and content update here as you edit.';
  }

  get selectedTemplateName() {
    return getTemplateById(this.previewTemplate).name;
  }

  get resumeUsageLabel() {
    const usage = this.usage();
    return `${usage.resumeGenerationsRemaining}/${this.entitlements().resumeGenerationsPerPeriod} AI resume generations left`;
  }

  get orderedSectionsArray() {
    return this.resumeGroup.get('sectionOrder') as FormArray<SectionControl>;
  }

  get experienceArray() {
    return this.resumeGroup.get('experience') as FormArray<FormGroup>;
  }

  get educationArray() {
    return this.resumeGroup.get('education') as FormArray<FormGroup>;
  }

  get projectsArray() {
    return this.resumeGroup.get('projects') as FormArray<FormGroup>;
  }

  get certificationsArray() {
    return this.resumeGroup.get('certifications') as FormArray<FormGroup>;
  }

  get languagesArray() {
    return this.resumeGroup.get('languages') as FormArray<FormGroup>;
  }

  get awardsArray() {
    return this.resumeGroup.get('awards') as FormArray<FormGroup>;
  }

  get volunteerArray() {
    return this.resumeGroup.get('volunteerExperience') as FormArray<FormGroup>;
  }

  get customSectionsArray() {
    return this.resumeGroup.get('customSections') as FormArray<CustomSectionControl>;
  }

  get orderedSectionControls() {
    return this.orderedSectionsArray.controls;
  }

  get activeSectionCount() {
    return this.orderedSectionsArray.length;
  }

  get completionPercent() {
    const checks = [
      this.resumeGroup.get('personalInfo.fullName')?.value?.trim(),
      this.resumeGroup.get('personalInfo.jobTitle')?.value?.trim(),
      this.resumeGroup.get('contact.email')?.value?.trim(),
      this.resumeGroup.get('contact.location')?.value?.trim(),
      this.resumeGroup.get('summary')?.value?.trim(),
      this.getNormalizedSkillSet(this.resumeGroup.getRawValue()).length ? 'skills' : '',
    ];

    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  }

  get completionLabel() {
    return `${this.completionPercent}% profile complete`;
  }

  get availableSectionTypes() {
    const activeTypes = new Set(
      this.orderedSectionControls.map((control) => control.controls.type.value).filter((type) => type !== 'custom'),
    );

    return this.presetSectionTypes.filter((type) => !activeTypes.has(type));
  }

  get hasAdditionalSectionOptions() {
    return this.availableSectionTypes.length > 0;
  }

  toggleAddSectionMenu() {
    this.showAddSectionMenu = !this.showAddSectionMenu;
  }

  getSectionId(section: SectionControl) {
    return section.controls.id.value;
  }

  getSectionType(section: SectionControl) {
    return section.controls.type.value;
  }

  getSectionTitle(section: SectionControl) {
    return section.controls.title.value || this.sectionLabels[this.getSectionType(section)];
  }

  getSectionCountLabel(section: SectionControl) {
    const type = this.getSectionType(section);
    const count = this.getSectionEntryCount(type, this.getSectionId(section));

    if (type === 'personal') {
      return this.completionPercent >= 50 ? 'Core info ready' : 'Core info needed';
    }
    if (type === 'summary') {
      return this.resumeGroup.get('summary')?.value?.trim() ? 'Ready' : 'Optional';
    }
    if (type === 'skills') {
      const skillsCount = this.getNormalizedSkillSet(this.resumeGroup.getRawValue()).length;
      return skillsCount ? `${skillsCount} skills` : 'Add skills';
    }

    return count ? `${count} item${count === 1 ? '' : 's'}` : 'Empty';
  }

  isSectionExpanded(section: SectionControl) {
    return section.controls.expanded.value;
  }

  toggleSection(section: SectionControl) {
    section.controls.expanded.setValue(!section.controls.expanded.value);
  }

  canRemoveSection(section: SectionControl) {
    return !CORE_RESUME_SECTION_TYPES.includes(this.getSectionType(section));
  }

  canMoveSectionUp(index: number) {
    return index > 0;
  }

  canMoveSectionDown(index: number) {
    return index < this.orderedSectionsArray.length - 1;
  }

  moveSection(index: number, direction: -1 | 1) {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= this.orderedSectionsArray.length) {
      return;
    }

    const control = this.orderedSectionsArray.at(index);
    this.orderedSectionsArray.removeAt(index);
    this.orderedSectionsArray.insert(nextIndex, control);
  }

  addSection(type: ResumeSectionType | 'custom') {
    if (type !== 'custom' && this.hasSectionType(type)) {
      this.showAddSectionMenu = false;
      return;
    }

    if (type === 'custom') {
      const id = createSectionId('custom');
      this.customSectionsArray.push(this.createCustomSectionGroup({ id, title: 'Custom Section', entries: [] }));
      this.orderedSectionsArray.push(
        this.createSectionOrderGroup({
          id,
          type: 'custom',
          title: 'Custom Section',
          enabled: true,
          expanded: true,
        }),
      );
      this.addEntry('custom', id);
      this.showAddSectionMenu = false;
      return;
    }

    this.orderedSectionsArray.push(
      this.createSectionOrderGroup({
        id: createSectionId(type),
        type,
        title: this.sectionLabels[type],
        enabled: true,
        expanded: true,
      }),
    );
    this.addEntry(type);
    this.showAddSectionMenu = false;
  }

  removeSection(section: SectionControl) {
    const type = this.getSectionType(section);
    const sectionId = this.getSectionId(section);
    const index = this.orderedSectionsArray.controls.findIndex((control) => control === section);

    if (index >= 0) {
      this.orderedSectionsArray.removeAt(index);
    }

    if (type === 'custom') {
      const customIndex = this.findCustomSectionIndex(sectionId);
      if (customIndex >= 0) {
        this.customSectionsArray.removeAt(customIndex);
      }
      return;
    }

    this.clearSectionEntries(type);
  }

  isRepeatableSection(type: ResumeSectionType) {
    return !['personal', 'summary', 'skills'].includes(type);
  }

  addEntry(type: ResumeSectionType, sectionId?: string) {
    switch (type) {
      case 'experience':
        this.experienceArray.push(this.createExperienceGroup());
        break;
      case 'education':
        this.educationArray.push(this.createEducationGroup());
        break;
      case 'projects':
        this.projectsArray.push(this.createProjectGroup());
        break;
      case 'certifications':
        this.certificationsArray.push(this.createCertificationGroup());
        break;
      case 'languages':
        this.languagesArray.push(this.createLanguageGroup());
        break;
      case 'awards':
        this.awardsArray.push(this.createAwardGroup());
        break;
      case 'volunteer':
        this.volunteerArray.push(this.createVolunteerGroup());
        break;
      case 'custom':
        this.getCustomSectionGroupById(sectionId ?? '')?.controls.entries.push(this.createCustomEntryGroup());
        break;
    }
  }

  removeEntry(type: ResumeSectionType, index: number, sectionId?: string) {
    switch (type) {
      case 'experience':
        this.experienceArray.removeAt(index);
        break;
      case 'education':
        this.educationArray.removeAt(index);
        break;
      case 'projects':
        this.projectsArray.removeAt(index);
        break;
      case 'certifications':
        this.certificationsArray.removeAt(index);
        break;
      case 'languages':
        this.languagesArray.removeAt(index);
        break;
      case 'awards':
        this.awardsArray.removeAt(index);
        break;
      case 'volunteer':
        this.volunteerArray.removeAt(index);
        break;
      case 'custom':
        this.getCustomSectionGroupById(sectionId ?? '')?.controls.entries.removeAt(index);
        break;
    }
  }

  getEntriesForSection(type: ResumeSectionType, sectionId?: string) {
    switch (type) {
      case 'experience':
        return this.experienceArray.controls;
      case 'education':
        return this.educationArray.controls;
      case 'projects':
        return this.projectsArray.controls;
      case 'certifications':
        return this.certificationsArray.controls;
      case 'languages':
        return this.languagesArray.controls;
      case 'awards':
        return this.awardsArray.controls;
      case 'volunteer':
        return this.volunteerArray.controls;
      case 'custom':
        return this.getCustomSectionGroupById(sectionId ?? '')?.controls.entries.controls ?? [];
      default:
        return [];
    }
  }

  getCustomSectionForm(sectionId: string) {
    return this.getCustomSectionGroupById(sectionId);
  }

  generateWithAI() {
    if (!this.canGenerateFullResume()) {
      this.resumeGroup.get('personalInfo.fullName')?.markAsTouched();
      this.resumeGroup.get('personalInfo.jobTitle')?.markAsTouched();
      this.resumeGroup.get('contact.email')?.markAsTouched();
      this.resumeGroup.get('contact.location')?.markAsTouched();
      return;
    }

    this.dispatchGeneration({ mode: 'full', resume: this.buildGenerationDraft() });
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

    this.dispatchGeneration({
      mode: 'summary',
      resume: this.buildGenerationDraft(this.resumeGroup.getRawValue()),
    });
  }

  canGenerateExperience(index: number) {
    if (!this.hasBasicInfo()) {
      return false;
    }

    const group = this.experienceArray.at(index) as FormGroup;
    return Boolean(group.get('company')?.value?.trim() && group.get('role')?.value?.trim());
  }

  generateExperienceWithAI(index: number) {
    if (!this.canGenerateExperience(index)) {
      const group = this.experienceArray.at(index) as FormGroup;
      group.get('company')?.markAsTouched();
      group.get('role')?.markAsTouched();
      return;
    }

    this.dispatchGeneration({
      mode: 'experience',
      targetIndex: index,
      resume: this.buildGenerationDraft(this.resumeGroup.getRawValue()),
    });
  }

  canGenerateEducation(index: number) {
    if (!this.hasBasicInfo()) {
      return false;
    }

    const group = this.educationArray.at(index) as FormGroup;
    return Boolean(group.get('school')?.value?.trim() && group.get('degree')?.value?.trim());
  }

  generateEducationWithAI(index: number) {
    if (!this.canGenerateEducation(index)) {
      const group = this.educationArray.at(index) as FormGroup;
      group.get('school')?.markAsTouched();
      group.get('degree')?.markAsTouched();
      return;
    }

    this.dispatchGeneration({
      mode: 'education',
      targetIndex: index,
      resume: this.buildGenerationDraft(this.resumeGroup.getRawValue()),
    });
  }

  canGenerateFullResume() {
    const fullName = this.resumeGroup.get('personalInfo.fullName')?.value?.trim();
    const jobTitle = this.resumeGroup.get('personalInfo.jobTitle')?.value?.trim();
    const email = this.resumeGroup.get('contact.email')?.value?.trim();
    const location = this.resumeGroup.get('contact.location')?.value?.trim();
    const skills = this.getNormalizedSkillSet(this.resumeGroup.getRawValue());
    const hasExperienceSeed = this.experienceArray.controls.some((group) => {
      return Boolean(group.get('company')?.value?.trim() && group.get('role')?.value?.trim());
    });
    const hasEducationSeed = this.educationArray.controls.some((group) => {
      return Boolean(group.get('school')?.value?.trim() && group.get('degree')?.value?.trim());
    });

    return Boolean(
      fullName &&
        jobTitle &&
        email &&
        location &&
        (skills.length || hasExperienceSeed || hasEducationSeed),
    );
  }

  getMissingFullResumeParts() {
    const missingParts: string[] = [];

    if (!this.resumeGroup.get('personalInfo.fullName')?.value?.trim()) {
      missingParts.push('full name');
    }
    if (!this.resumeGroup.get('personalInfo.jobTitle')?.value?.trim()) {
      missingParts.push('job title');
    }
    if (!this.resumeGroup.get('contact.email')?.value?.trim()) {
      missingParts.push('email');
    }
    if (!this.resumeGroup.get('contact.location')?.value?.trim()) {
      missingParts.push('location');
    }
    if (!this.hasGenerationSeed()) {
      missingParts.push('skills, experience company and role, or education school and degree');
    }

    return missingParts;
  }

  getMissingSummaryParts() {
    return this.getMissingBasicGenerationParts();
  }

  getMissingExperienceParts(index: number) {
    const missingParts = [...this.getMissingBasicGenerationParts()];
    const group = this.experienceArray.at(index) as FormGroup | undefined;

    if (!group?.get('company')?.value?.trim()) {
      missingParts.push('company');
    }
    if (!group?.get('role')?.value?.trim()) {
      missingParts.push('role');
    }

    return missingParts;
  }

  getMissingEducationParts(index: number) {
    const missingParts = [...this.getMissingBasicGenerationParts()];
    const group = this.educationArray.at(index) as FormGroup | undefined;

    if (!group?.get('school')?.value?.trim()) {
      missingParts.push('school');
    }
    if (!group?.get('degree')?.value?.trim()) {
      missingParts.push('degree');
    }

    return missingParts;
  }

  getGenerateMessage(missingParts: string[]) {
    return missingParts.length ? `Add ${this.formatMissingPartsList(missingParts)} to generate.` : '';
  }

  getGenerateLabel(defaultLabel: string, missingParts: string[], compact: boolean = false) {
    if (!missingParts.length) {
      return defaultLabel;
    }

    if (missingParts.length === 1 && !compact) {
      return `Add ${missingParts[0]}`;
    }

    return 'Add details';
  }

  requestTemplateChange() {
    this.changeTemplate.emit();
  }

  getTemplateLabel(templateId: ResumeTemplateId) {
    return getTemplateLabel(templateId);
  }

  isTemplateLocked(templateId: ResumeTemplateId) {
    return this.planRank(this.plan) < this.planRank(this.requiredPlan(templateId));
  }

  goBack() {
    this.location.back();
  }

  saveResume() {
    if (this.resumeGroup.invalid) {
      this.resumeGroup.markAllAsTouched();
      return;
    }

    if (!this.canStoreCurrentResume) {
      this.redirectToUpgrade('save');
      return;
    }

    const payload = this.buildResumePayload(this.resumeGroup.getRawValue());

    if (this.isEditMode) {
      if (!this.resumeId) {
        return;
      }

      this.resumesFacade.saveResumeData(payload, this.resumeId);
      return;
    }

    this.resumesFacade.saveResumeData({
      ...payload,
      createdAt: new Date().toISOString(),
      meta: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        source: payload.meta?.source ?? 'manual',
        version: payload.meta?.version ?? 1,
      },
    });
  }

  async exportToPdf() {
    if (typeof window === 'undefined') {
      return;
    }

    if (!this.canDownloadCurrentResume) {
      this.redirectToUpgrade('download');
      return;
    }

    await this.resumesFacade.exportResumeToPdf(
      this.buildResumePayload(this.resumeGroup.getRawValue()),
      this.resumeId,
    );
  }

  private requiredPlan(templateId: ResumeTemplateId) {
    return getTemplateById(templateId).requiredPlan;
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

  private redirectToUpgrade(reason: 'save' | 'download' | 'second_resume' | 'template_lock' | 'tailor') {
    const returnTo =
      this.isEditMode && this.resumeId ? `/application/resumes/${this.resumeId}/edit` : '/application/resumes';

    this.resumeUpgrade.startUpgrade({
      reason,
      returnTo,
      recommendedPlan: this.previewTemplate === 'executive-simple' ? 'premium' : 'pro',
      message: this.resumeAccessPolicy.upgradeMessage(reason, this.previewTemplate),
    });
  }

  private resetSectionOrder(sections?: ResumeSection[]) {
    this.orderedSectionsArray.clear();
    const nextSections =
      sections ??
      (CORE_RESUME_SECTION_TYPES.map((type) => ({
        id: createSectionId(type),
        type,
        title: this.sectionLabels[type],
        enabled: true,
      })) as ResumeSection[]);

    nextSections.forEach((section) => {
      this.orderedSectionsArray.push(
        this.createSectionOrderGroup({
          id: section.id,
          type: section.type,
          title: section.title,
          enabled: section.enabled !== false,
          expanded: true,
        }),
      );
    });
  }

  private createSectionOrderGroup(section: {
    id: string;
    type: ResumeSectionType;
    title: string;
    enabled: boolean;
    expanded: boolean;
  }): SectionControl {
    return new FormGroup({
      id: new FormControl(section.id, { nonNullable: true }),
      type: new FormControl(section.type, { nonNullable: true }),
      title: new FormControl(section.title, { nonNullable: true }),
      enabled: new FormControl(section.enabled, { nonNullable: true }),
      expanded: new FormControl(section.expanded, { nonNullable: true }),
    });
  }

  private createExperienceGroup(entry?: Partial<ExperienceEntry>) {
    return new FormGroup({
      company: new FormControl(entry?.company ?? '', { nonNullable: true }),
      role: new FormControl(entry?.role ?? '', { nonNullable: true }),
      startDate: new FormControl(entry?.startDate ?? '', { nonNullable: true }),
      endDate: new FormControl(entry?.endDate ?? '', { nonNullable: true }),
      description: new FormControl((entry?.description ?? []).join('\n'), { nonNullable: true }),
    });
  }

  private createEducationGroup(entry?: Partial<EducationEntry>) {
    return new FormGroup({
      school: new FormControl(entry?.school ?? '', { nonNullable: true }),
      degree: new FormControl(entry?.degree ?? '', { nonNullable: true }),
      startDate: new FormControl(entry?.startDate ?? '', { nonNullable: true }),
      endDate: new FormControl(entry?.endDate ?? '', { nonNullable: true }),
      description: new FormControl((entry?.description ?? []).join('\n'), { nonNullable: true }),
    });
  }

  private createProjectGroup(entry?: Partial<ProjectSectionEntry>) {
    return new FormGroup({
      name: new FormControl(entry?.name ?? '', { nonNullable: true }),
      role: new FormControl(entry?.role ?? '', { nonNullable: true }),
      link: new FormControl(entry?.link ?? '', { nonNullable: true }),
      description: new FormControl((entry?.description ?? []).join('\n'), { nonNullable: true }),
    });
  }

  private createCertificationGroup(entry?: Partial<CertificationSectionEntry>) {
    return new FormGroup({
      name: new FormControl(entry?.name ?? '', { nonNullable: true }),
      issuer: new FormControl(entry?.issuer ?? '', { nonNullable: true }),
      issueDate: new FormControl(entry?.issueDate ?? '', { nonNullable: true }),
      credentialLink: new FormControl(entry?.credentialLink ?? '', { nonNullable: true }),
    });
  }

  private createLanguageGroup(entry?: Partial<LanguageSectionEntry>) {
    return new FormGroup({
      language: new FormControl(entry?.language ?? '', { nonNullable: true }),
      proficiency: new FormControl(entry?.proficiency ?? '', { nonNullable: true }),
    });
  }

  private createAwardGroup(entry?: Partial<AwardSectionEntry>) {
    return new FormGroup({
      title: new FormControl(entry?.title ?? '', { nonNullable: true }),
      issuer: new FormControl(entry?.issuer ?? '', { nonNullable: true }),
      date: new FormControl(entry?.date ?? '', { nonNullable: true }),
      description: new FormControl((entry?.description ?? []).join('\n'), { nonNullable: true }),
    });
  }

  private createVolunteerGroup(entry?: Partial<VolunteerSectionEntry>) {
    return new FormGroup({
      organization: new FormControl(entry?.organization ?? '', { nonNullable: true }),
      role: new FormControl(entry?.role ?? '', { nonNullable: true }),
      startDate: new FormControl(entry?.startDate ?? '', { nonNullable: true }),
      endDate: new FormControl(entry?.endDate ?? '', { nonNullable: true }),
      description: new FormControl((entry?.description ?? []).join('\n'), { nonNullable: true }),
    });
  }

  private createCustomEntryGroup(entry?: Partial<CustomSectionEntry>) {
    return new FormGroup({
      title: new FormControl(entry?.title ?? '', { nonNullable: true }),
      subtitle: new FormControl(entry?.subtitle ?? '', { nonNullable: true }),
      date: new FormControl(entry?.date ?? '', { nonNullable: true }),
      link: new FormControl(entry?.link ?? '', { nonNullable: true }),
      description: new FormControl((entry?.description ?? []).join('\n'), { nonNullable: true }),
    });
  }

  private createCustomSectionGroup(section?: Partial<CustomResumeSection>): CustomSectionControl {
    const entries = new FormArray<FormGroup>([]);
    (section?.entries ?? []).forEach((entry) => entries.push(this.createCustomEntryGroup(entry)));

    return new FormGroup({
      id: new FormControl(section?.id ?? createSectionId('custom'), { nonNullable: true }),
      title: new FormControl(section?.title ?? 'Custom Section', { nonNullable: true }),
      entries,
    });
  }

  private hasSectionType(type: ResumeSectionType) {
    return this.orderedSectionControls.some((control) => control.controls.type.value === type);
  }

  private clearSectionEntries(type: ResumeSectionType) {
    const clearArray = (array: FormArray<FormGroup>) => {
      while (array.length) {
        array.removeAt(array.length - 1);
      }
    };

    if (type === 'projects') {
      clearArray(this.projectsArray);
    } else if (type === 'certifications') {
      clearArray(this.certificationsArray);
    } else if (type === 'languages') {
      clearArray(this.languagesArray);
    } else if (type === 'awards') {
      clearArray(this.awardsArray);
    } else if (type === 'volunteer') {
      clearArray(this.volunteerArray);
    }
  }

  private getSectionEntryCount(type: ResumeSectionType, sectionId: string) {
    return type === 'custom'
      ? this.getCustomSectionGroupById(sectionId)?.controls.entries.length ?? 0
      : this.getEntriesForSection(type, sectionId).length;
  }

  private findCustomSectionIndex(sectionId: string) {
    return this.customSectionsArray.controls.findIndex((group) => group.controls.id.value === sectionId);
  }

  private getCustomSectionGroupById(sectionId: string) {
    const index = this.findCustomSectionIndex(sectionId);
    return index >= 0 ? this.customSectionsArray.at(index) : null;
  }

  private normalizeSkills(input: string) {
    return input
      .split(/[,\n]+/)
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  private buildSkillGroups(raw: { skillsLanguages?: string; skillsTools?: string }) {
    const languages = this.normalizeSkills(raw.skillsLanguages ?? '');
    const tools = this.normalizeSkills(raw.skillsTools ?? '');

    return {
      languages,
      tools,
    };
  }

  private getNormalizedSkillSet(raw: { skills?: string; skillsLanguages?: string; skillsTools?: string }) {
    const skills = this.normalizeSkills(raw.skills ?? '');
    if (skills.length) {
      return skills;
    }

    const groupedSkills = this.buildSkillGroups(raw);
    return [...groupedSkills.languages, ...groupedSkills.tools];
  }

  private normalizeBullets(input?: string | string[]) {
    if (!input) {
      return [];
    }

    if (Array.isArray(input)) {
      return input.map((entry) => entry.trim()).filter(Boolean);
    }

    return input
      .split(/\n+|\u2022\s*|-+\s*/)
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  private hasContent(values: Array<string | undefined>) {
    return values.some((value) => Boolean(value?.trim()));
  }

  private normalizeEndDate(input?: string) {
    return input?.trim() || 'Present';
  }

  private normalizeExperience(raw: Array<Partial<ExperienceEntry>>) {
    return raw
      .map((entry) => ({
        company: entry.company?.trim() ?? '',
        role: entry.role?.trim() ?? '',
        startDate: entry.startDate?.trim() ?? '',
        endDate: this.normalizeEndDate(entry.endDate),
        description: this.normalizeBullets(entry.description),
      }))
      .filter((entry) => this.hasContent([entry.company, entry.role, entry.startDate, entry.endDate, ...entry.description]));
  }

  private normalizeEducation(raw: Array<Partial<EducationEntry>>) {
    return raw
      .map((entry) => ({
        school: entry.school?.trim() ?? '',
        degree: entry.degree?.trim() ?? '',
        startDate: entry.startDate?.trim() ?? '',
        endDate: entry.endDate?.trim() ?? '',
        description: this.normalizeBullets(entry.description),
      }))
      .filter((entry) => this.hasContent([entry.school, entry.degree, entry.startDate, entry.endDate, ...entry.description]));
  }

  private normalizeProjects(raw: Array<Partial<ProjectSectionEntry>>) {
    return raw
      .map((entry) => ({
        name: entry.name?.trim() ?? '',
        role: entry.role?.trim() ?? '',
        link: entry.link?.trim() ?? '',
        description: this.normalizeBullets(entry.description),
      }))
      .filter((entry) => this.hasContent([entry.name, entry.role, entry.link, ...entry.description]));
  }

  private normalizeCertifications(raw: Array<Partial<CertificationSectionEntry>>) {
    return raw
      .map((entry) => ({
        name: entry.name?.trim() ?? '',
        issuer: entry.issuer?.trim() ?? '',
        issueDate: entry.issueDate?.trim() ?? '',
        credentialLink: entry.credentialLink?.trim() ?? '',
      }))
      .filter((entry) => this.hasContent([entry.name, entry.issuer, entry.issueDate, entry.credentialLink]));
  }

  private normalizeLanguages(raw: Array<Partial<LanguageSectionEntry>>) {
    return raw
      .map((entry) => ({
        language: entry.language?.trim() ?? '',
        proficiency: entry.proficiency?.trim() ?? '',
      }))
      .filter((entry) => this.hasContent([entry.language, entry.proficiency]));
  }

  private normalizeAwards(raw: Array<Partial<AwardSectionEntry>>) {
    return raw
      .map((entry) => ({
        title: entry.title?.trim() ?? '',
        issuer: entry.issuer?.trim() ?? '',
        date: entry.date?.trim() ?? '',
        description: this.normalizeBullets(entry.description),
      }))
      .filter((entry) => this.hasContent([entry.title, entry.issuer, entry.date, ...entry.description]));
  }

  private normalizeVolunteer(raw: Array<Partial<VolunteerSectionEntry>>) {
    return raw
      .map((entry) => ({
        organization: entry.organization?.trim() ?? '',
        role: entry.role?.trim() ?? '',
        startDate: entry.startDate?.trim() ?? '',
        endDate: entry.endDate?.trim() ?? '',
        description: this.normalizeBullets(entry.description),
      }))
      .filter((entry) => this.hasContent([entry.organization, entry.role, entry.startDate, entry.endDate, ...entry.description]));
  }

  private normalizeCustomEntries(raw: Array<Partial<CustomSectionEntry>>) {
    return raw
      .map((entry) => ({
        title: entry.title?.trim() ?? '',
        subtitle: entry.subtitle?.trim() ?? '',
        date: entry.date?.trim() ?? '',
        link: entry.link?.trim() ?? '',
        description: this.normalizeBullets(entry.description),
      }))
      .filter((entry) => this.hasContent([entry.title, entry.subtitle, entry.date, entry.link, ...entry.description]));
  }

  private resumeGroupValueChanges() {
    return merge(
      of(this.resumeGroup.getRawValue()),
      this.resumeGroup.valueChanges.pipe(auditTime(50)),
    ).pipe(
      map((raw) => this.buildResumePayload(raw)),
    );
  }

  private hasBasicInfo() {
    return Boolean(
      this.resumeGroup.get('personalInfo.fullName')?.value?.trim() &&
        this.resumeGroup.get('personalInfo.jobTitle')?.value?.trim() &&
        this.getNormalizedSkillSet(this.resumeGroup.getRawValue()).length,
    );
  }

  private buildGenerationDraft(raw = this.resumeGroup.getRawValue()): ResumeGenerationDraft {
    const meta = this.normalizeGenerationMeta({
      ...(this.loadedMeta ?? {}),
      ...(raw.meta ?? {}),
      updatedAt: new Date().toISOString(),
    });

    return {
      personalInfo: {
        fullName: raw.personalInfo?.fullName?.trim() ?? '',
        jobTitle: raw.personalInfo?.jobTitle?.trim() ?? '',
      },
      contact: {
        email: raw.contact?.email?.trim() ?? '',
        phone: raw.contact?.phone?.trim() ?? '',
        location: raw.contact?.location?.trim() ?? '',
        linkedin: raw.contact?.linkedin?.trim() ?? '',
        github: raw.contact?.github?.trim() ?? '',
        website: raw.contact?.website?.trim() ?? '',
      },
      summary: raw.summary?.trim() ?? '',
      skills: this.getNormalizedSkillSet(raw),
      experience: this.normalizeExperience(raw.experience ?? []),
      education: this.normalizeEducation(raw.education ?? []),
      ...(Object.keys(meta).length ? { meta } : {}),
    };
  }

  private normalizeGenerationMeta(meta: Partial<Resume['meta']> | Record<string, unknown>) {
    const normalizedMeta: Record<string, unknown> = {};

    if (meta['createdAt']) {
      normalizedMeta['createdAt'] = this.toIsoString(meta['createdAt']);
    }
    if (meta['updatedAt']) {
      normalizedMeta['updatedAt'] = this.toIsoString(meta['updatedAt']);
    }
    if (meta['source'] === 'ai' || meta['source'] === 'manual') {
      normalizedMeta['source'] = meta['source'];
    }
    if (typeof meta['version'] === 'number' && Number.isFinite(meta['version'])) {
      normalizedMeta['version'] = meta['version'];
    }

    return normalizedMeta;
  }

  private toIsoString(value: unknown) {
    if (typeof value === 'string') {
      return value;
    }
    if (value instanceof Date) {
      return value.toISOString();
    }
    return new Date().toISOString();
  }

  private getMissingBasicGenerationParts() {
    const missingParts: string[] = [];

    if (!this.resumeGroup.get('personalInfo.fullName')?.value?.trim()) {
      missingParts.push('full name');
    }
    if (!this.resumeGroup.get('personalInfo.jobTitle')?.value?.trim()) {
      missingParts.push('job title');
    }
    if (!this.getNormalizedSkillSet(this.resumeGroup.getRawValue()).length) {
      missingParts.push('skills');
    }

    return missingParts;
  }

  private hasGenerationSeed() {
    return Boolean(
      this.getNormalizedSkillSet(this.resumeGroup.getRawValue()).length ||
        this.experienceArray.controls.some((group) => {
          return Boolean(group.get('company')?.value?.trim() && group.get('role')?.value?.trim());
        }) ||
        this.educationArray.controls.some((group) => {
          return Boolean(group.get('school')?.value?.trim() && group.get('degree')?.value?.trim());
        }),
    );
  }

  private formatMissingPartsList(parts: string[]) {
    if (parts.length <= 1) {
      return parts[0] ?? '';
    }
    if (parts.length === 2) {
      return `${parts[0]} and ${parts[1]}`;
    }

    return `${parts.slice(0, -1).join(', ')}, and ${parts[parts.length - 1]}`;
  }

  private dispatchGeneration(request: ResumeGenerationRequest) {
    this.resumesFacade.generateResumeRequest(request);
  }

  private applyGenerationResult(result: ResumeGenerationResult) {
    if (result.mode === 'full') {
      this.resumeGroup.patchValue({
        summary: result.summary,
        skills: result.skills.join(', '),
        meta: {
          ...(this.loadedMeta ?? {}),
          ...(result.meta ?? {}),
          updatedAt: new Date().toISOString(),
        },
      });

      result.experienceDescriptions.forEach((description, index) => {
        this.experienceArray.at(index)?.patchValue({ description: description.join('\n') });
      });
      result.educationDescriptions.forEach((description, index) => {
        this.educationArray.at(index)?.patchValue({ description: description.join('\n') });
      });
      return;
    }

    if (result.mode === 'summary') {
      this.resumeGroup.patchValue({ summary: result.summary });
      return;
    }

    if (result.mode === 'experience') {
      this.experienceArray.at(result.targetIndex)?.patchValue({ description: result.description.join('\n') });
      return;
    }

    this.educationArray.at(result.targetIndex)?.patchValue({ description: result.description.join('\n') });
  }

  private buildResumePayload(raw: any = this.resumeGroup.getRawValue()): Partial<Resume> {
    const projects = this.normalizeProjects(raw.projects ?? []);
    const certifications = this.normalizeCertifications(raw.certifications ?? []);
    const languages = this.normalizeLanguages(raw.languages ?? []);
    const awards = this.normalizeAwards(raw.awards ?? []);
    const volunteerExperience = this.normalizeVolunteer(raw.volunteerExperience ?? []);
    const customSections = this.normalizeCustomSections(raw.customSections ?? []);
    const skillGroups = this.buildSkillGroups(raw);
    const normalizedSkills = this.getNormalizedSkillSet(raw);

    return {
      personalInfo: {
        fullName: raw.personalInfo?.fullName?.trim() ?? '',
        jobTitle: raw.personalInfo?.jobTitle?.trim() ?? '',
      },
      contact: {
        email: raw.contact?.email?.trim() ?? '',
        phone: raw.contact?.phone?.trim() ?? '',
        location: raw.contact?.location?.trim() ?? '',
        linkedin: raw.contact?.linkedin?.trim() ?? '',
        github: raw.contact?.github?.trim() ?? '',
        website: raw.contact?.website?.trim() ?? '',
      },
      summary: raw.summary?.trim() ?? '',
      experience: this.normalizeExperience(raw.experience ?? []),
      education: this.normalizeEducation(raw.education ?? []),
      skills: normalizedSkills,
      skillGroups:
        skillGroups.languages.length || skillGroups.tools.length ?
          skillGroups :
          undefined,
      projects: projects.map((entry) => ({
        name: entry.name,
        role: entry.role,
        description: entry.description.join('\n'),
        link: entry.link,
      })),
      certifications,
      languages,
      awards,
      volunteerExperience,
      sections: this.buildSections(raw.sectionOrder ?? [], {
        projects,
        certifications,
        languages,
        awards,
        volunteerExperience,
        customSections,
      }),
      templateId: this.previewTemplate,
      meta: {
        createdAt:
          raw.meta?.createdAt ??
          this.loadedMeta?.createdAt ??
          new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        source: raw.meta?.source === 'ai' ? 'ai' : (this.loadedMeta?.source ?? 'manual'),
        version:
          typeof raw.meta?.version === 'number' ?
            raw.meta.version :
            (this.loadedMeta?.version ?? 1),
      },
    };
  }

  private normalizeCustomSections(
    raw: Array<{ id?: string; title?: string; entries?: Array<Partial<CustomSectionEntry>> }>,
  ) {
    return raw.map((section) => ({
      id: section.id?.trim() ?? createSectionId('custom'),
      type: 'custom' as const,
      title: section.title?.trim() || 'Custom Section',
      enabled: true,
      entries: this.normalizeCustomEntries(section.entries ?? []),
    }));
  }

  private buildSections(
    order: Array<{ id: string; type: ResumeSectionType; title: string; enabled: boolean }>,
    extras: {
      projects: ReturnType<ResumesCreate['normalizeProjects']>;
      certifications: ReturnType<ResumesCreate['normalizeCertifications']>;
      languages: ReturnType<ResumesCreate['normalizeLanguages']>;
      awards: ReturnType<ResumesCreate['normalizeAwards']>;
      volunteerExperience: ReturnType<ResumesCreate['normalizeVolunteer']>;
      customSections: ReturnType<ResumesCreate['normalizeCustomSections']>;
    },
  ): ResumeSection[] {
    return order.map((section) => {
      const title = section.title?.trim() || this.sectionLabels[section.type];

      if (section.type === 'projects') {
        return { id: section.id, type: 'projects', title, enabled: section.enabled, entries: extras.projects };
      }
      if (section.type === 'certifications') {
        return {
          id: section.id,
          type: 'certifications',
          title,
          enabled: section.enabled,
          entries: extras.certifications,
        };
      }
      if (section.type === 'languages') {
        return { id: section.id, type: 'languages', title, enabled: section.enabled, entries: extras.languages };
      }
      if (section.type === 'awards') {
        return { id: section.id, type: 'awards', title, enabled: section.enabled, entries: extras.awards };
      }
      if (section.type === 'volunteer') {
        return {
          id: section.id,
          type: 'volunteer',
          title,
          enabled: section.enabled,
          entries: extras.volunteerExperience,
        };
      }
      if (section.type === 'custom') {
        return (
          extras.customSections.find((customSection) => customSection.id === section.id) ?? {
            id: section.id,
            type: 'custom',
            title,
            enabled: section.enabled,
            entries: [],
          }
        );
      }

      return { id: section.id, type: section.type, title, enabled: section.enabled } as ResumeSection;
    });
  }

  private getSectionEntries<T extends ResumeSection>(section?: T | null) {
    return section && 'entries' in section ? section.entries : [];
  }

  private loadResumeForEdit(id: string) {
    this.resumesFacade
      .resumeById$(id)
      .pipe(
        filter((resume): resume is Resume => !!resume),
        take(1),
      )
      .subscribe((resume) => {
        const sections = normalizeResumeSections(resume);
        const projectsSection = sections.find((section) => section.type === 'projects');
        const certificationsSection = sections.find((section) => section.type === 'certifications');
        const languagesSection = sections.find((section) => section.type === 'languages');
        const awardsSection = sections.find((section) => section.type === 'awards');
        const volunteerSection = sections.find((section) => section.type === 'volunteer');
        const customSections = sections.filter(
          (section): section is CustomResumeSection => section.type === 'custom',
        );

        this.resumeGroup.patchValue({
          personalInfo: {
            fullName: resume.personalInfo?.fullName ?? '',
            jobTitle: resume.personalInfo?.jobTitle ?? '',
          },
          contact: {
            email: resume.contact?.email ?? '',
            phone: resume.contact?.phone ?? '',
            location: resume.contact?.location ?? '',
            linkedin: resume.contact?.linkedin ?? '',
            github: resume.contact?.github ?? '',
            website: resume.contact?.website ?? '',
          },
          summary: resume.summary ?? '',
          skills: Array.isArray(resume.skills) ? resume.skills.join(', ') : '',
          skillsLanguages: Array.isArray(resume.skillGroups?.languages) ?
            resume.skillGroups.languages.join(', ') :
            '',
          skillsTools: Array.isArray(resume.skillGroups?.tools) ?
            resume.skillGroups.tools.join(', ') :
            '',
          meta: {
            createdAt: resume.meta?.createdAt ?? new Date().toISOString(),
            updatedAt: resume.meta?.updatedAt ?? new Date().toISOString(),
            source: resume.meta?.source ?? 'manual',
            version: resume.meta?.version ?? 1,
          },
        });

        this.previewTemplate = getSafeTemplateId(resume.templateId);
        this.resumeGroup.controls.templateId.setValue(this.previewTemplate);
        this.loadedMeta = resume.meta ?? null;
        this.resetSectionOrder(sections);

        this.replaceArray(this.experienceArray, (resume.experience ?? []).map((entry) => this.createExperienceGroup(entry)));
        this.replaceArray(this.educationArray, (resume.education ?? []).map((entry) => this.createEducationGroup(entry)));
        this.replaceArray(
          this.projectsArray,
          this.getSectionEntries(projectsSection).map((entry) => this.createProjectGroup(entry as any)),
        );
        this.replaceArray(
          this.certificationsArray,
          this.getSectionEntries(certificationsSection).map((entry) =>
            this.createCertificationGroup(entry as any),
          ),
        );
        this.replaceArray(
          this.languagesArray,
          this.getSectionEntries(languagesSection).map((entry) => this.createLanguageGroup(entry as any)),
        );
        this.replaceArray(
          this.awardsArray,
          this.getSectionEntries(awardsSection).map((entry) => this.createAwardGroup(entry as any)),
        );
        this.replaceArray(
          this.volunteerArray,
          this.getSectionEntries(volunteerSection).map((entry) => this.createVolunteerGroup(entry as any)),
        );

        this.customSectionsArray.clear();
        customSections.forEach((section) => {
          this.customSectionsArray.push(this.createCustomSectionGroup(section));
        });
      });

    this.resumesFacade.status$
      .pipe(
        filter((status) => status === ResumesStatus.Loaded || status === ResumesStatus.Error),
        take(1),
      )
      .subscribe(() => {
        const resumeId = this.resumeId;
        if (!resumeId) {
          return;
        }

        this.resumesFacade.resumeById$(resumeId).pipe(take(1)).subscribe((resume) => {
          if (!resume) {
            this.router.navigate(['/application/resumes']);
          }
        });
      });
  }

  private replaceArray(array: FormArray<FormGroup>, controls: FormGroup[]) {
    while (array.length) {
      array.removeAt(array.length - 1);
    }
    controls.forEach((control) => array.push(control));
  }
}
