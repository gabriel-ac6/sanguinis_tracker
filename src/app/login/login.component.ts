// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginEmail: string = '';
  loginSenha: string = '';

  registerNome: string = '';
  registerEmail: string = '';
  registerSenha: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.loginEmail, this.loginSenha)
      .subscribe(
        response => {
          // Armazena os dados do usuário na variável de sessão
          this.authService.setUserData(response);
  
          // Exemplo: armazenar o token no localStorage (se necessário)
          localStorage.setItem('token', response.token);
  
          console.log("Dados do usuário recebidos e armazenados");
          // Faça o que precisa após o login, por exemplo, redirecione para outra página
           // Redireciona para a rota "/index"

          this.router.navigate(['/']);
        },
        error => {
          console.log("Erro no login");
        }
      );
  }
  
  logout(): void {
    // Limpa os dados do usuário na variável de sessão
    this.authService.clearUserData();
  
    // Exemplo: limpar o token no localStorage (se necessário)
    localStorage.removeItem('token');
  
    // Outras ações de logout, se necessário
  }  

  register(): void {
    this.authService.register(this.registerNome, this.registerEmail, this.registerSenha).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        // Faça o que precisa após o registro, por exemplo, redirecione para outra página
      },
      error => {
        console.log("erro no login");
      }
    );
  }
}
