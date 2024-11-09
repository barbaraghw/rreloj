import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  selectedClockStyle: string = 'clock1'; // Valor por defecto

  constructor(private router: Router, private clockService: ClockService) {}

  ngOnInit(): void {}

  onStyleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedClockStyle = selectElement.value;
    this.router.navigate([`/clock/${this.selectedClockStyle}`]); // Redirige a la ruta seleccionada
  }
}  
