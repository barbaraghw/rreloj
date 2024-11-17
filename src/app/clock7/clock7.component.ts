import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock7',
  templateUrl: './clock7.component.html',
  styleUrls: ['./clock7.component.css']
})
export class Clock7Component implements OnInit {
  time: string = "00:00:00"; 
  binaryTime: string = "00000000:00000000:00000000"; 

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.updateTime(), 1000);
  }


  updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    this.binaryTime = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(num: number): string {
    return num.toString(2).padStart(8, '0'); 
  }

incrementHours() {
  let hours = parseInt(this.time.split(':')[0], 10);
  hours = (hours + 1) % 24;  
  this.updateTimeFromValues(hours, parseInt(this.time.split(':')[1], 10), parseInt(this.time.split(':')[2], 10));
}

decrementHours() {
  let hours = parseInt(this.time.split(':')[0], 10);
  hours = (hours - 1 + 24) % 24;  
  this.updateTimeFromValues(hours, parseInt(this.time.split(':')[1], 10), parseInt(this.time.split(':')[2], 10));
}

incrementMinutes() {
  let [hours, minutes, seconds] = this.time.split(':').map(num => parseInt(num, 10));
  minutes = (minutes + 1) % 60;  
  if (minutes === 0) {
    this.incrementHours();
  } else {
    this.updateTimeFromValues(hours, minutes, seconds);
  }
}

decrementMinutes() {
  let [hours, minutes, seconds] = this.time.split(':').map(num => parseInt(num, 10));
  minutes = (minutes - 1 + 60) % 60;  
  if (minutes === 59) {
    this.decrementHours(); 
  } else {
    this.updateTimeFromValues(hours, minutes, seconds);
  }
}

incrementSeconds() {
  let [hours, minutes, seconds] = this.time.split(':').map(num => parseInt(num, 10));
  seconds = (seconds + 1) % 60;  
  if (seconds === 0) {
    this.incrementMinutes();
  } else {
    this.updateTimeFromValues(hours, minutes, seconds);
  }
}

decrementSeconds() {
  let [hours, minutes, seconds] = this.time.split(':').map(num => parseInt(num, 10));
  seconds = (seconds - 1 + 60) % 60;  
  if (seconds === 59) {
    this.decrementMinutes(); 
  } else {
    this.updateTimeFromValues(hours, minutes, seconds);
  }
}

updateTimeFromValues(hours: number, minutes: number, seconds: number) {
  this.time = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  this.binaryTime = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
}}