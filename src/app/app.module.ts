import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module.js';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TripService } from './services/trips/trip.service';
import { AuthService } from './services/auth/auth.service';
import { LoginModule } from './login/login.module';
import { MapItModule } from './map-it/map-it.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    MapItModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
