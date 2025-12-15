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
export class DirName implements AfterViewInit {
  @Input() title: string = '';
  @Input() additionalElems?: SafeHtml | null = null;
  @Output() addJobClicked = new EventEmitter<void>();

  @ViewChild('additionalElemsContainer', { read: ElementRef })
  elemsContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.elemsContainer && this.elemsContainer.nativeElement) {
        this.elemsContainer.nativeElement.addEventListener('click', (e: Event) => {
          const target = e.target as HTMLElement;
          if (target.closest('.add-job-btn')) {
            this.addJobClicked.emit();
          }
        });
      }
    }, 100);
  }
}
