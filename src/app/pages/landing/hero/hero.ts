import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ScrollService } from '../../../lib/scroll.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(public scrollService: ScrollService) {}
}
