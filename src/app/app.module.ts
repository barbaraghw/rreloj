import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ClockComponent } from './clock/clock.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

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
    RouterModule.forRoot(routes), 
    FormsModule, BrowserAnimationsModule                 
  ],
  providers: [AuthService, AuthGuard], 
  bootstrap: [AppComponent]
})
export class AppModule { }
