import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';  

@Component({
  selector: 'app-clock2',
  templateUrl: './clock2.component.html',
  styleUrls: ['./clock2.component.css']
})
export class Clock2Component implements OnInit {
  currentTime: Date = new Date();
  morseTime: string = ''; 

  morseCode: { [key: string]: string } = {
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.'
  };

  morseGuide: { [key: string]: string } = {
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----'
  };

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
      this.updateMorseTime();
    });
  }

  updateMorseTime(): void {
    const hours = this.currentTime.getHours();
    const minutes = this.currentTime.getMinutes();
    const seconds = this.currentTime.getSeconds();

    const hoursInMorse = this.convertToMorse(hours);
    const minutesInMorse = this.convertToMorse(minutes);
    const secondsInMorse = this.convertToMorse(seconds);

    this.morseTime = `Hora: ${hoursInMorse} ${minutesInMorse} ${secondsInMorse}`;
  }

  convertToMorse(num: number): string {
    return num.toString().split('').map(digit => this.morseCode[digit]).join(' ');
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

    this.clockService.setTime(current);
  }
objectKeys(obj: any): string[] {
  return Object.keys(obj);
}

}
