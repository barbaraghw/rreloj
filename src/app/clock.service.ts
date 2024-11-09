import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private currentTimeSubject = new BehaviorSubject<Date>(new Date());
  public currentTime$ = this.currentTimeSubject.asObservable();

  constructor() {
    setInterval(() => {
      this.currentTimeSubject.next(new Date());
    }, 1000);
  }

  getTime(): Date {
    return this.currentTimeSubject.getValue();
  }
}
