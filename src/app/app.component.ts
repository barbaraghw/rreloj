import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Para la navegación

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedClock: string = 'clock1';  // Valor por defecto (Reloj 1)

  constructor(private router: Router) {}

  // Este método cambia la ruta cuando el usuario selecciona un reloj
  onClockChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedClock = selectElement.value;
    this.router.navigate([this.selectedClock]);  // Navegar a la ruta correspondiente
  }
}
