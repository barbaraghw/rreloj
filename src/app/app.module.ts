import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ClockComponent } from './clock/clock.component';
import { Clock2Component } from './clock2/clock2.component';
import { Clock3Component } from './clock3/clock3.component';
import { Clock4Component } from './clock4/clock4.component';
import { Clock5Component } from './clock5/clock5.component';
import { Clock1Component } from './clock1/clock1.component'; 
import { AppRoutingModule } from './app-routing.module';
import { Clock6Component } from './clock6/clock6.component';
import { Clock7Component } from './clock7/clock7.component';
import { Clock8Component } from './clock8/clock8.component';
import { Clock9Component } from './clock9/clock9.component';
import { Clock10Component } from './clock10/clock10.component';  // Importar el módulo de enrutamiento

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ClockComponent,
    Clock2Component,
    Clock3Component,
    Clock4Component,
    Clock5Component,
    Clock1Component,
    Clock6Component,
    Clock7Component,
    Clock8Component,
    Clock9Component,
    Clock10Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,  // Importar el módulo de enrutamiento aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
