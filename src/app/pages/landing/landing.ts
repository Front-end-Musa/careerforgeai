import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Features } from './features/features';
import { About } from './about/about';

@Component({
  selector: 'app-landing',
  imports: [
    Header,
    Hero,
    Features,
    About
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

}
