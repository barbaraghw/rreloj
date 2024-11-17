import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock9',
  templateUrl: './clock9.component.html',
  styleUrls: ['./clock9.component.css']
})
export class Clock9Component implements OnInit, OnDestroy {
  hours: number = new Date().getHours();
  minutes: number = new Date().getMinutes();
  seconds: number = new Date().getSeconds();
  
  time: string = '';
  rgb: string = '';
  backgroundColor: string = '';
  intervalId: any;

  userModifiedTime: boolean = false;

  ngOnInit(): void {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateRealTime(), 1000); 
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); 
  }

  updateRealTime(): void {
    if (!this.userModifiedTime) {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
    }
    this.updateTime(); 
  }

  updateTime(): void {
    this.time = `${this.formatNumber(this.hours)}:${this.formatNumber(this.minutes)}:${this.formatNumber(this.seconds)}`;
    this.rgb = `RGB(${this.hours}, ${this.minutes}, ${this.seconds})`;
    this.backgroundColor = `rgb(${this.hours}, ${this.minutes}, ${this.seconds})`;
  }

  formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

 
  incrementHour(): void {
    this.hours = (this.hours + 1) % 24; 
    this.userModifiedTime = true; 
  }

  decrementHour(): void {
    this.hours = (this.hours - 1 + 24) % 24; 
    this.userModifiedTime = true;
  }

  incrementMinute(): void {
    this.minutes = (this.minutes + 1) % 60; 
    this.userModifiedTime = true;
  }

  decrementMinute(): void {
    this.minutes = (this.minutes - 1 + 60) % 60; 
    this.userModifiedTime = true;
  }

  incrementSecond(): void {
    this.seconds = (this.seconds + 1) % 60; 
    this.userModifiedTime = true;
  }

  decrementSecond(): void {
    this.seconds = (this.seconds - 1 + 60) % 60; 
    this.userModifiedTime = true;
  }
}
