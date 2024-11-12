import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';  

@Component({
  selector: 'app-clock4',
  templateUrl: './clock4.component.html',
  styleUrls: ['./clock4.component.css']
})
export class Clock4Component implements OnInit {
  currentTime: Date = new Date();
  hours: string[] = [];
  minutes: string[] = [];
  seconds: string[] = [];
  
  selectedHour: string = this.padZero(this.currentTime.getHours());
  selectedMinute: string = this.padZero(this.currentTime.getMinutes());
  selectedSecond: string = this.padZero(this.currentTime.getSeconds());

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.generateMaps();
    this.clockService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
      this.updateSelectedTimes();
    });
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  generateMaps() {
    this.hours = Array.from({ length: 24 }, (_, i) => this.padZero(i)); 
    this.minutes = Array.from({ length: 60 }, (_, i) => this.padZero(i)); 
    this.seconds = Array.from({ length: 60 }, (_, i) => this.padZero(i));
  }

  updateSelectedTimes() {
    this.selectedHour = this.padZero(this.currentTime.getHours());
    this.selectedMinute = this.padZero(this.currentTime.getMinutes());
    this.selectedSecond = this.padZero(this.currentTime.getSeconds());
  }

  modifyTime(unit: 'hours' | 'minutes' | 'seconds', increment: number) {
    const current = new Date(this.currentTime);

    if (unit === 'hours') {
      current.setHours(current.getHours() + increment);
    } else if (unit === 'minutes') {
      current.setMinutes(current.getMinutes() + increment);
    } else if (unit === 'seconds') {
      current.setSeconds(current.getSeconds() + increment);
    }

    this.clockService.setTime(current);
  }
}
