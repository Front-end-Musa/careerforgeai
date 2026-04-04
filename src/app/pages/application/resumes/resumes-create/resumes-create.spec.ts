import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ResumesCreate } from './resumes-create';
import { ResumesFacade } from '../data/resumes.facade';

describe('ResumesCreate', () => {
  let component: ResumesCreate;
  let fixture: ComponentFixture<ResumesCreate>;

  const resumesFacadeMock = {
    saving$: new BehaviorSubject(false),
    saveSucceeded$: new BehaviorSubject(false),
    generateResume: jasmine.createSpy('generateResume'),
    saveResumeData: jasmine.createSpy('saveResumeData'),
    getResumeById: jasmine.createSpy('getResumeById').and.returnValue(of(null)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumesCreate],
      providers: [
        { provide: ResumesFacade, useValue: resumesFacadeMock },
        { provide: Location, useValue: { back: jasmine.createSpy('back') } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumesCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit changeTemplate in create mode', () => {
    const emitSpy = spyOn(component.changeTemplate, 'emit');

    component.mode = 'create';
    component.requestTemplateChange();

    expect(emitSpy).toHaveBeenCalled();
  });

  it('should emit changeTemplate in edit mode', () => {
    const emitSpy = spyOn(component.changeTemplate, 'emit');

    component.mode = 'edit';
    component.requestTemplateChange();

    expect(emitSpy).toHaveBeenCalled();
  });
});
