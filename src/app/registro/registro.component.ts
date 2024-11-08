import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  // Importamos el servicio

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  apellido: string = '';
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Aquí usamos el método "registrar" que definimos en AuthService
  registrar() {
    if (this.nombre && this.apellido && this.username && this.password) {
      // Registrar el usuario en el servicio
      this.authService.registrar(this.nombre, this.apellido, this.username, this.password);
      console.log('Registro realizado');
      this.router.navigate(['/login']); // Redirigir al login después del registro
    } else {
      alert('Por favor completa todos los campos');
    }
  }

  volver() {
    this.router.navigate(['/login']);  // Navega a la página de login
  }
}
