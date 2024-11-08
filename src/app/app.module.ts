import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes
import { FormsModule } from '@angular/forms';  // Importante para usar ngModel
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ClockComponent } from './clock/clock.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Si tienes un guardia para proteger las rutas

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'clock', component: ClockComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Configuración del enrutamiento
    FormsModule, BrowserAnimationsModule                   // Importa FormsModule para trabajar con formularios
  ],
  providers: [AuthService, AuthGuard],  // Los servicios de autenticación y el guardia
  bootstrap: [AppComponent]
})
export class AppModule { }
