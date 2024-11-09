import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock2',
  templateUrl: './clock2.component.html',
  styleUrls: ['./clock2.component.css']
})
export class Clock2Component implements OnInit {
  currentTime: Date = new Date();
  letterForHour: string = '';
  letterForMinute: string = '';

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.currentTime = new Date();
    this.letterForHour = String.fromCharCode(65 + this.currentTime.getHours() % 26);  // Letras A-Z para las horas
    this.letterForMinute = String.fromCharCode(65 + this.currentTime.getMinutes() % 26);  // Letras A-Z para los minutos
  }
}
