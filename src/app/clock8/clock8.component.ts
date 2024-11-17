import { Component } from '@angular/core';

@Component({
  selector: 'app-clock8',
  templateUrl: './clock8.component.html',
  styleUrls: ['./clock8.component.css']
})
export class Clock8Component {
  time: string = this.formatTime(new Date()); 

  constructor() {
  }

  formatTime(date: Date): string {
    return `${this.numberToRoman(date.getHours())}:${this.numberToRoman(date.getMinutes())}:${this.numberToRoman(date.getSeconds())}`;
  }

  numberToRoman(num: number): string {
    const romanNumerals: { [key: number]: string } = {
      1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC',
      100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
    };

    let roman = '';
    const keys = Object.keys(romanNumerals).map(Number).reverse(); 

    for (let i = 0; i < keys.length; i++) {
      while (num >= keys[i]) {
        roman += romanNumerals[keys[i]];
        num -= keys[i];
      }
    }
    return roman;
  }
  getTimeParts(): { hours: number, minutes: number, seconds: number } {
    const [hours, minutes, seconds] = this.time.split(':').map(part => this.romanToNumber(part)); 
    return { hours, minutes, seconds };
  }

  romanToNumber(roman: string): number {
    const romanNumerals: { [key: string]: number } = {
      'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50, 'XC': 90,
      'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M': 1000
    };

    let num = 0;
    let i = 0;
    while (i < roman.length) {
      if (i + 1 < roman.length && romanNumerals[roman[i] + roman[i + 1]]) {
        num += romanNumerals[roman[i] + roman[i + 1]];
        i += 2;
      } else {
        num += romanNumerals[roman[i]];
        i++;
      }
    }
    return num;
  }

  incrementHours(): void {
    let { hours, minutes, seconds } = this.getTimeParts();
    hours = (hours + 1) % 24; 
    this.time = this.formatTime(new Date(new Date().setHours(hours, minutes, seconds)));
  }

  decrementHours(): void {
    let { hours, minutes, seconds } = this.getTimeParts();
    hours = (hours - 1 + 24) % 24; 
    this.time = this.formatTime(new Date(new Date().setHours(hours, minutes, seconds)));
  }

  incrementMinutes(): void {
    let { hours, minutes, seconds } = this.getTimeParts();
    minutes = (minutes + 1) % 60; 
    this.time = this.formatTime(new Date(new Date().setHours(hours, minutes, seconds)));
  }

  decrementMinutes(): void {
    let { hours, minutes, seconds } = this.getTimeParts();
    minutes = (minutes - 1 + 60) % 60; 
    this.time = this.formatTime(new Date(new Date().setHours(hours, minutes, seconds)));
  }

  incrementSeconds(): void {
    let { hours, minutes, seconds } = this.getTimeParts();
    seconds = (seconds + 1) % 60; 
    this.time = this.formatTime(new Date(new Date().setHours(hours, minutes, seconds)));
  }

  decrementSeconds(): void {
    let { hours, minutes, seconds } = this.getTimeParts();
    seconds = (seconds - 1 + 60) % 60; 
    this.time = this.formatTime(new Date(new Date().setHours(hours, minutes, seconds)));
  }
}
