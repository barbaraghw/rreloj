import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock1',
  templateUrl: './clock1.component.html',
  styleUrls: ['./clock1.component.css']
})
export class Clock1Component implements OnInit {
  currentTime: Date = new Date();
  squares: number[] = [];
  triangles: number[] = [];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.currentTime = new Date();
    this.squares = Array(this.currentTime.getHours()).fill(0);  // Cuadrados para horas
    this.triangles = Array(this.currentTime.getMinutes()).fill(0);  // Triángulos para minutos
  }
}
