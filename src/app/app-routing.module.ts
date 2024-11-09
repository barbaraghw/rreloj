import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { Clock1Component } from './clock1/clock1.component';
import { Clock2Component } from './clock2/clock2.component';
import { Clock3Component } from './clock3/clock3.component';
import { Clock4Component } from './clock4/clock4.component';
import { Clock5Component } from './clock5/clock5.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service'; 
import { AuthGuard } from './auth.guard'; 

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'clock', component: ClockComponent, canActivate: [AuthGuard] },  // Ruta protegida
  { path: 'clock/:clockStyle', component: ClockComponent, canActivate: [AuthGuard] },  
  { path: 'clock1', component: Clock1Component },
  { path: 'clock2', component: Clock2Component },
  { path: 'clock3', component: Clock3Component },
  { path: 'clock4', component: Clock4Component },
  { path: 'clock5', component: Clock5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
