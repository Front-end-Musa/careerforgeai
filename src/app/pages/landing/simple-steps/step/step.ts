import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  imports: [NgClass],
  templateUrl: './step.html',
  styleUrl: './step.scss',
})
export class Step {
  @Input() step!: {
    id: number;
    title: string;
    description: string;
    stepIcon: string;
  };
}
