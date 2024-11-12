import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private currentTimeSubject: BehaviorSubject<Date> = new BehaviorSubject(new Date());
  private intervalId: any;

  constructor() {
    this.startClock();
  }

  private startClock(): void {
    // Inicia el reloj que actualiza cada segundo
    this.intervalId = setInterval(() => {
      this.currentTimeSubject.next(new Date(this.currentTimeSubject.getValue().getTime() + 1000)); // Avanza 1 segundo
    }, 1000);
  }

  getCurrentTime(): Observable<Date> {
    return this.currentTimeSubject.asObservable();
  }

  setTime(newTime: Date): void {
    // Detener el reloj actual y ajustar el tiempo
    clearInterval(this.intervalId);
    this.currentTimeSubject.next(newTime);
    this.startClock(); // Reinicia el reloj desde el nuevo tiempo
  }

  modifyTime(minutes: number): void {
    const current = this.currentTimeSubject.getValue();
    current.setMinutes(current.getMinutes() + minutes);
    this.currentTimeSubject.next(current);
  }


  stopClock(): void {
    // Detener el reloj
    clearInterval(this.intervalId);
  }

  startClockAgain(): void {
    // Reiniciar el reloj
    this.startClock();
  }
}
