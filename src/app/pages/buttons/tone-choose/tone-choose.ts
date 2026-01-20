import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-tone-choose',
  imports: [MatLabel, MatButton],
  templateUrl: './tone-choose.html',
  styleUrl: './tone-choose.scss',
})
export class ToneChoose implements OnInit {
  @Input() tones!: string[];
  @Output() toneSelected = new EventEmitter<string>();
  selectedTone: string = '';

  ngOnInit() {
    this.selectedTone = this.tones[0];
  }

  selectTone(tone: string) {
    this.selectedTone = tone;
    this.toneSelected.emit(tone);
    console.log('Selected tone:', this.selectedTone);
  }
}
