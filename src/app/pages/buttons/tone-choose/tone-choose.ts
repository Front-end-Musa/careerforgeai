import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-tone-choose',
  imports: [MatLabel],
  templateUrl: './tone-choose.html',
  styleUrl: './tone-choose.scss',
})
export class ToneChoose {
  @Input() tones!: string[]
  selectedTone: string = ''

  selectTone(tone: string) {
    this.selectedTone = tone
    console.log('Selected tone:', this.selectedTone)
  }

  ngOnInit() {
    this.selectedTone = this.tones[0]
  }
}
