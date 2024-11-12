import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-clock5',
  templateUrl: './clock5.component.html',
  styleUrls: ['./clock5.component.css']
})
export class Clock5Component implements OnInit {
  currentTime: Date = new Date();
  dayPercentage: number = 0; 
  minutePercentage: number = 0; 
  secondPercentage: number = 0;  

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
      this.updateProgress();
    });
  }

  updateProgress(): void {
    const hours = this.currentTime.getHours();
    const minutes = this.currentTime.getMinutes();
    const seconds = this.currentTime.getSeconds();

    this.dayPercentage = (hours / 24) * 100;

 
    this.minutePercentage = (minutes / 60) * 100;

    this.secondPercentage = (seconds / 60) * 100;
  }

  modifyTime(unit: 'hours' | 'minutes' | 'seconds', increment: number): void {
    const newTime = new Date(this.currentTime);  

    if (unit === 'hours') {
      newTime.setHours(newTime.getHours() + increment);
    } else if (unit === 'minutes') {
      newTime.setMinutes(newTime.getMinutes() + increment);
    } else if (unit === 'seconds') {
      newTime.setSeconds(newTime.getSeconds() + increment);
    }

    this.clockService.setTime(newTime); 
  }
}
