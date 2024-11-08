import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  currentTime = { hour: 0, minute: 0, second: 0 };
  squares: number[] = [];
  triangles: number[] = [];
  circles: number[] = [];
  selectedClockStyle: string = 'style1';

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    const now = new Date();
    this.currentTime.hour = now.getHours();
    this.currentTime.minute = now.getMinutes();
    this.currentTime.second = now.getSeconds();

    this.squares = Array(this.currentTime.hour).fill(0);
    this.triangles = Array(this.currentTime.minute).fill(0);
    this.circles = Array(this.currentTime.second).fill(0);
  }

  incrementHour() {
    this.currentTime.hour = (this.currentTime.hour + 1) % 24;
    this.updateClock();
  }

  decrementHour() {
    this.currentTime.hour = (this.currentTime.hour - 1 + 24) % 24;
    this.updateClock();
  }

  incrementMinute() {
    this.currentTime.minute = (this.currentTime.minute + 1) % 60;
    this.updateClock();
  }

  decrementMinute() {
    this.currentTime.minute = (this.currentTime.minute - 1 + 60) % 60;
    this.updateClock();
  }

  incrementSecond() {
    this.currentTime.second = (this.currentTime.second + 1) % 60;
    this.updateClock();
  }

  decrementSecond() {
    this.currentTime.second = (this.currentTime.second - 1 + 60) % 60;
    this.updateClock();
  }

  onStyleChange() {
    this.updateClock();
  }
}
