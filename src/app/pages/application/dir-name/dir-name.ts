import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dir-name',
  imports: [CommonModule],
  templateUrl: './dir-name.html',
  styleUrl: './dir-name.scss',
})
export class DirName {
  @Input() title: string = '';
  @Input() additionalElems?: SafeHtml | null = null;
  @Output() additionalElemClicked = new EventEmitter<void>();

  @ViewChild('additionalElemsContainer', { read: ElementRef })
  elemsContainer!: ElementRef<HTMLElement>;
}
