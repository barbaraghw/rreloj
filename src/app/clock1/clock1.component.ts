import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';  

@Component({
  selector: 'app-clock1',
  templateUrl: './clock1.component.html',
  styleUrls: ['./clock1.component.css']
})
export class Clock1Component implements OnInit {
  currentTime: Date = new Date();
  squares: number[] = [];
  triangles: number[] = [];
  circles: number[] = [];

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
      this.updateTime();
    });
  }

  updateTime() {
    this.squares = Array(this.currentTime.getHours()).fill(0);  
    this.triangles = Array(this.currentTime.getMinutes()).fill(0);  
    this.circles = Array(this.currentTime.getSeconds()).fill(0);  
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

    // Actualizamos el tiempo en el servicio, el cual reiniciará el reloj con el nuevo tiempo
    this.clockService.setTime(current);
  }
}
