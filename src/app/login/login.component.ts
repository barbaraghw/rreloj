import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Asegúrate de importar AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  // Función para iniciar sesión
  login() {
    if (this.authService.login(this.username, this.password)) {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/clock']); // Redirigir al reloj después de iniciar sesión
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
