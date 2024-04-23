import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet, RouterLink, RouterLinkActive, Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})
export class IndexComponent implements OnInit{

  isUserLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Verifica se o usuário está autenticado
    if (this.authService.getUserData()) {
      this.isUserLoggedIn = true;

    }
  }

}

