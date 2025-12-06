import { Component, Input } from '@angular/core';
import { QA } from '../faq.interface';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-qa-item',
  imports: [MatExpansionModule],
  templateUrl: './qa-item.html',
  styleUrl: './qa-item.scss',
})
export class QaItem {
  @Input() qa!: QA;
}
