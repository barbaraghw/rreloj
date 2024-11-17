import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock10',
  templateUrl: './clock10.component.html',
  styleUrls: ['./clock10.component.css']
})
export class Clock10Component implements OnInit {
  time: string = '';
  hour: number = 12; 
  minute: number = 0; 
  second: number = 0; 

  hourFraction: number = 0;
  minuteFraction: number = 0;
  secondFraction: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime(): void {
    if (this.hour >= 24) this.hour = 0;
    if (this.minute >= 60) this.minute = 0;
    if (this.second >= 60) this.second = 0;

    this.time = `${this.formatTime(this.hour)}:${this.formatTime(this.minute)}:${this.formatTime(this.second)}`;

    this.hourFraction = (this.hour / 24) * 100; 
    this.minuteFraction = (this.minute / 60) * 100; 
    this.secondFraction = (this.second / 60) * 100; 

    this.second++;
    if (this.second === 60) {
      this.second = 0;
      this.minute++;
      if (this.minute === 60) {
        this.minute = 0;
        this.hour++;
      }
    }
  }

  formatTime(unit: number): string {
    return unit < 10 ? '0' + unit : unit.toString(); 
  }

  getOffset(totalSegments: number, fraction: number): number {
    const radius = 45; 
    const circumference = 2 * Math.PI * radius; 
    return circumference - (fraction / 100) * circumference; 
  }

  incrementTime(unit: string): void {
    if (unit === 'hour') {
      this.hour = (this.hour + 1) % 24;
    } else if (unit === 'minute') {
      this.minute = (this.minute + 1) % 60; 
    } else if (unit === 'second') {
      this.second = (this.second + 1) % 60; 
    }
  }

  decrementTime(unit: string): void {
    if (unit === 'hour') {
      this.hour = (this.hour - 1 + 24) % 24; 
    } else if (unit === 'minute') {
      this.minute = (this.minute - 1 + 60) % 60; 
    } else if (unit === 'second') {
      this.second = (this.second - 1 + 60) % 60;
    }
  }
}
