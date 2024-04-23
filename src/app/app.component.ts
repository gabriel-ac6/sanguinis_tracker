import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive, DashboardComponent, LoginComponent, IndexComponent, HttpClientModule],
  template: 
  `
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Sanguinis Tracker';
}
