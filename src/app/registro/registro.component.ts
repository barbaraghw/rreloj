import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

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

  registrar() {
    if (this.nombre && this.apellido && this.username && this.password) {
    
      this.authService.registrar(this.nombre, this.apellido, this.username, this.password);
      console.log('Registro realizado');
      this.router.navigate(['/login']); 
    } else {
      alert('Por favor completa todos los campos');
    }
  }

  volver() {
    this.router.navigate(['/login']); 
  }
}
