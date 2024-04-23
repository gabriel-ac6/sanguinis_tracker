// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://pesquisa-lymphoma.vercel.app/api';
  private userData: any;

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const body = { email, senha };
    const url = `${this.baseUrl}/getTestData?email=${body.email}&senha=${body.senha}`;

    return this.http.get(url).pipe(
      tap(data => {
        this.setUserData(data); // Armazena os dados do usuário na variável de sessão
        console.log('Dados obtidos:', data);
        // Faça qualquer manipulação adicional nos dados, se necessário
      }),
      catchError(this.handleError)
    );
  }

  register(nome: string, email: string, senha: string): Observable<any> {
    const body = { nome, email, senha };
    console.log(body);
    return this.http.post(`${this.baseUrl}/register`, body).pipe(
      catchError(this.handleError)
    );
  }

  // Método para armazenar os dados do usuário na variável de sessão
  setUserData(data: any): void {
    this.userData = data;
  }

  // Método para obter os dados do usuário da variável de sessão
  getUserData(): any {
    return this.userData;
  }

  // Método para limpar os dados do usuário na variável de sessão
  clearUserData(): void {
    this.userData = null;
  }

  private handleError(error: any): Observable<never> {
    console.error('Erro na requisição:', error);
    return throwError(error);
  }
}
