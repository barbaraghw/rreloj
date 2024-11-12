
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClockService } from '../clock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  clockSubscription: Subscription | undefined;
  timeToAdd: number = 0;

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockSubscription = this.clockService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
    });
  }

  ngOnDestroy(): void {
    this.clockSubscription?.unsubscribe();
  }

  increaseTime(minutes: number): void {
    this.timeToAdd += minutes;
    const newTime = new Date(this.currentTime.getTime());
    newTime.setMinutes(newTime.getMinutes() + minutes);
    this.clockService.setTime(newTime);
  }

  modifyTime(minutes: number): void {
    this.clockService.modifyTime(minutes);
  }

  stopClock(): void {
    this.clockService.stopClock();
  }

  startClock(): void {
    this.clockService.startClockAgain();
  }
}
