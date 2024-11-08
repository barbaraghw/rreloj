import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Simularemos los datos de los usuarios con un arreglo en memoria.
  private usuarios: { username: string, password: string }[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  private isLoggedIn: boolean = false;

  constructor() {}

  // Función para registrar un nuevo usuario
  registrar(nombre: string, apellido: string, username: string, password: string) {
    const nuevoUsuario = { nombre, apellido, username, password };
    this.usuarios.push(nuevoUsuario);
    // Guardar los usuarios en localStorage
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  // Función para loguear un usuario
  login(username: string, password: string): boolean {
    const usuario = this.usuarios.find(
      (user) => user.username === username && user.password === password
    );
    return usuario !== undefined; // Retorna true si el usuario existe
  }
  // Función para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Función para cerrar sesión
  logout(): void {
    this.isLoggedIn = false;
  }
}
