import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock4',
  templateUrl: './clock4.component.html',
  styleUrls: ['./clock4.component.css']
})
export class Clock4Component implements OnInit {
  currentTime: Date = new Date();
  colorForHour: string = '';
  colorForMinute: string = '';

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.currentTime = new Date();
    this.colorForHour = this.randomColor();
    this.colorForMinute = this.randomColor();
  }

  randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
