import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-application',
  imports: [Sidebar, RouterModule],
  templateUrl: './application.html',
  styleUrl: './application.scss',
})
export class Application {

}
