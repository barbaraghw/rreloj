import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarios: { username: string, password: string }[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  private isLoggedIn: boolean = false;

  constructor() {}


  registrar(nombre: string, apellido: string, username: string, password: string) {
    const nuevoUsuario = { nombre, apellido, username, password };
    this.usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  login(username: string, password: string): boolean {
    const usuario = this.usuarios.find(
      (user) => user.username === username && user.password === password
    );
    return usuario !== undefined; 
  }
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
