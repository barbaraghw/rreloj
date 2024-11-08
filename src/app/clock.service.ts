// src/app/clock.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private currentTime: string = this.getCurrentTime(); // Hora actual del sistema

  constructor() {}

  // Obtener la hora actual
  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  // Establecer una hora manualmente
  setCustomTime(time: string) {
    this.currentTime = time;
  }

  // Obtener la hora actual del servicio
  getTime() {
    return this.currentTime;
  }
}
