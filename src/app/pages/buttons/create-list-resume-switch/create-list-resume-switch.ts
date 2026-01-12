import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-list-resume-switch',
  imports: [],
  templateUrl: './create-list-resume-switch.html',
  styleUrl: './create-list-resume-switch.scss',
})
export class CreateListResumeSwitch {
  @Input() active!: string;

  @Output() change = new EventEmitter<string>();

  select(mode: string) {
    if (this.active === mode) return;
    this.change.emit(mode);
  }
}
