import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedClock: string = 'Clock 1'; 
  clockOptions: string[] = [
    'Clock 1', 'Clock 2', 'Clock 3', 'Clock 4', 'Clock 5',
    'Clock 6', 'Clock 7', 'Clock 8', 'Clock 9', 'Clock 10'
  ]; 
  constructor() { }
}
