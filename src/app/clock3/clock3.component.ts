import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock3',
  templateUrl: './clock3.component.html',
  styleUrls: ['./clock3.component.css']
})
export class Clock3Component implements OnInit {
  currentTime: Date = new Date();
  hoursInWords: string = '';
  minutesInWords: string = '';

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.currentTime = new Date();
    this.hoursInWords = this.numberToWords(this.currentTime.getHours());
    this.minutesInWords = this.numberToWords(this.currentTime.getMinutes());
  }

  numberToWords(num: number): string {
    const words: string[] = ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez', 'Once', 'Doce', 'Trece', 'Catorce', 'Quince', 'Dieciséis', 'Diecisiete', 'Dieciocho', 'Diecinueve', 'Veinte', 'Veintiuno', 'Veintidós', 'Veintitrés', 'Veinticuatro', 'Veinticinco', 'Veintiséis', 'Veintisiete', 'Veintiocho', 'Veintinueve'];
    return words[num] || 'Número no válido';
  }
}
