import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  currentTime = {
    hour: 0,
    minute: 20,
    second: 0
  };

  squares: number[] = [];  // Para las horas (cuadrados)
  triangles: number[] = [];  // Para los minutos (triángulos)
  circles: number[] = [];  // Para los segundos (círculos)

  selectedClockStyle: string = 'style1';  // Por defecto estilo 1

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => {
      this.updateClock(); // Actualizar cada segundo
    }, 1000);
  }

  updateClock() {
    const now = new Date();
    this.currentTime.hour = now.getHours();
    this.currentTime.minute = now.getMinutes();
    this.currentTime.second = now.getSeconds();

    // Actualizar las figuras basadas en la hora, minuto y segundo
    this.squares = Array(this.currentTime.hour).fill(0);  // Cuadrados según las horas
    this.triangles = Array(this.currentTime.minute).fill(0);  // Triángulos según los minutos
    this.circles = Array(this.currentTime.second).fill(0);  // Círculos según los segundos
  }

  // Métodos de incremento y decremento
  incrementHour() {
    this.currentTime.hour = (this.currentTime.hour + 1) % 24;
    this.updateClock(); // Actualizar las figuras con la nueva hora
  }

  decrementHour() {
    this.currentTime.hour = (this.currentTime.hour - 1 + 24) % 24;
    this.updateClock(); // Actualizar las figuras con la nueva hora
  }

  incrementMinute() {
    this.currentTime.minute = (this.currentTime.minute + 1) % 60;
    this.updateClock(); // Actualizar las figuras con el nuevo minuto
  }

  decrementMinute() {
    this.currentTime.minute = (this.currentTime.minute - 1 + 60) % 60;
    this.updateClock(); // Actualizar las figuras con el nuevo minuto
  }

  incrementSecond() {
    this.currentTime.second = (this.currentTime.second + 1) % 60;
    this.updateClock(); // Actualizar las figuras con el nuevo segundo
  }

  decrementSecond() {
    this.currentTime.second = (this.currentTime.second - 1 + 60) % 60;
    this.updateClock(); // Actualizar las figuras con el nuevo segundo
  }

  onStyleChange() {
    this.updateClock();
  }
}
