import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';  

@Component({
  selector: 'app-clock3',
  templateUrl: './clock3.component.html',
  styleUrls: ['./clock3.component.css']
})
export class Clock3Component implements OnInit {
  currentTime: Date = new Date();
  timeInWords: { word: string, color: string }[] = []; 

  numbersInWords: { [key: number]: string } = {
    0: 'cero', 1: 'uno', 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco', 6: 'seis', 7: 'siete', 8: 'ocho', 9: 'nueve',
    10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince', 16: 'dieciséis', 17: 'diecisiete',
    18: 'dieciocho', 19: 'diecinueve', 20: 'veinte', 21: 'veintiuno', 22: 'veintidós', 23: 'veintitrés',
    24: 'veinticuatro', 25: 'veinticinco', 26: 'veintiséis', 27: 'veintisiete', 28: 'veintiocho', 29: 'veintinueve',
    30: 'treinta', 31: 'treinta y uno', 32: 'treinta y dos', 33: 'treinta y tres', 34: 'treinta y cuatro',
    35: 'treinta y cinco', 36: 'treinta y seis', 37: 'treinta y siete', 38: 'treinta y ocho', 39: 'treinta y nueve',
    40: 'cuarenta', 41: 'cuarenta y uno', 42: 'cuarenta y dos', 43: 'cuarenta y tres', 44: 'cuarenta y cuatro',
    45: 'cuarenta y cinco', 46: 'cuarenta y seis', 47: 'cuarenta y siete', 48: 'cuarenta y ocho', 49: 'cuarenta y nueve',
    50: 'cincuenta', 51: 'cincuenta y uno', 52: 'cincuenta y dos', 53: 'cincuenta y tres', 54: 'cincuenta y cuatro',
    55: 'cincuenta y cinco', 56: 'cincuenta y seis', 57: 'cincuenta y siete', 58: 'cincuenta y ocho', 59: 'cincuenta y nueve'
  };

  numberColors: { [key: string]: string } = {
    'uno': 'yellow', 'dos': 'blue', 'tres': 'green', 'cuatro': 'orange', 'cinco': 'purple', 
    'seis': 'red', 'siete': 'pink', 'ocho': 'brown', 'nueve': 'gray', 'diez': 'violet', 
    'once': 'teal', 'doce': 'indigo', 'trece': 'maroon', 'catorce': 'darkblue', 'quince': 'lime', 
    'dieciséis': 'turquoise', 'diecisiete': 'gold', 'dieciocho': 'silver', 'diecinueve': 'orchid', 
    'veinte': 'peach', 'veintiuno': 'plum', 'veintidós': 'navy', 'veintitrés': 'olive', 
    'veinticuatro': 'chartreuse', 'veinticinco': 'fuchsia', 'veintiséis': 'coral', 
    'veintisiete': 'azure', 'veintiocho': 'mint', 'veintinueve': 'periwinkle', 
    'treinta': 'copper', 'treinta y uno': 'emerald', 'treinta y dos': 'sapphire', 
    'treinta y tres': 'rose', 'treinta y cuatro': 'pearl', 'treinta y cinco': 'peacock', 
    'treinta y seis': 'amethyst', 'treinta y siete': 'cherry', 'treinta y ocho': 'tangerine', 
    'treinta y nueve': 'chartreuse', 'cuarenta': 'lavender', 'cuarenta y uno': 'platinum', 
    'cuarenta y dos': 'scarlet', 'cuarenta y tres': 'ivory', 'cuarenta y cuatro': 'azure', 
    'cuarenta y cinco': 'alabaster', 'cuarenta y seis': 'sienna', 'cuarenta y siete': 'cream', 
    'cuarenta y ocho': 'peach', 'cuarenta y nueve': 'turquoise', 'cincuenta': 'gold', 
    'cincuenta y uno': 'silver', 'cincuenta y dos': 'bronze', 'cincuenta y tres': 'plum', 
    'cincuenta y cuatro': 'ivory', 'cincuenta y cinco': 'emerald', 'cincuenta y seis': 'sunset', 
    'cincuenta y siete': 'magenta', 'cincuenta y ocho': 'orchid', 'cincuenta y nueve': 'pearl'
  };

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
      this.updateTimeInWords();
    });
  }

  updateTimeInWords(): void {
    const hours = this.currentTime.getHours();
    const minutes = this.currentTime.getMinutes();
    const seconds = this.currentTime.getSeconds();

    const hourInWords = this.splitAndColorizeWords(this.numbersInWords[hours]);
    const minuteInWords = this.splitAndColorizeWords(this.numbersInWords[minutes]);
    const secondInWords = this.splitAndColorizeWords(this.numbersInWords[seconds]);

    this.timeInWords = [
      { word: 'Son las', color: 'black' }, 
      ...hourInWords,
      { word: 'y', color: 'black' }, 
      ...minuteInWords,
      { word: 'con', color: 'black' }, 
      ...secondInWords
    ];
  }

  splitAndColorizeWords(input: string): { word: string, color: string }[] {
    const words = input.split(' '); 
    const coloredWords = words.map(word => ({
      word: word,
      color: this.numberColors[word] || 'black' 
    }));
    return coloredWords;
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
}
