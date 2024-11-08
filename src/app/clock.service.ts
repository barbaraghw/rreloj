
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private currentTime: string = this.getCurrentTime();

  constructor() {}

  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  setCustomTime(time: string) {
    this.currentTime = time;
  }

  getTime() {
    return this.currentTime;
  }
}
