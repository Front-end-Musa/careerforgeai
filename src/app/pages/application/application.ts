import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-application',
  imports: [Sidebar, CommonModule, RouterModule],
  templateUrl: './application.html',
  styleUrl: './application.scss',
})
export class Application {

}
