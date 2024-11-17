import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock6',
  templateUrl: './clock6.component.html',
  styleUrls: ['./clock6.component.css']
})
export class Clock6Component implements OnInit {
  currentTime: Date = new Date();
  hourDegree: number = (this.currentTime.getHours() % 12) * 30 + (this.currentTime.getMinutes() / 2);
  minuteDegree: number = this.currentTime.getMinutes() * 6;
  secondDegree: number = this.currentTime.getSeconds() * 6;

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
      this.updateClockDegrees();
    }, 1000);
  }

  updateClockDegrees() {
    this.hourDegree = (this.currentTime.getHours() % 12) * 30 + (this.currentTime.getMinutes() / 2);
    this.minuteDegree = this.currentTime.getMinutes() * 6;
    this.secondDegree = this.currentTime.getSeconds() * 6;
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

    this.currentTime = current;
    this.updateClockDegrees();
  }
}
