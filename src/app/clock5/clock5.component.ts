import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock5',
  templateUrl: './clock5.component.html',
  styleUrls: ['./clock5.component.css']
})
export class Clock5Component implements OnInit {
  currentTime: Date = new Date();
  pointsForHour: number[] = [];
  pointsForMinute: number[] = [];

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.currentTime = new Date();
    this.pointsForHour = new Array(this.currentTime.getHours()).fill(0);
    this.pointsForMinute = new Array(this.currentTime.getMinutes()).fill(0);
  }
}
