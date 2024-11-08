// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClockComponent } from './clock/clock.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clock', component: ClockComponent, canActivate: [AuthService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
