import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TripService } from '../services/trips/trip.service';
import { MapItComponent } from './map-it.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8AK83UPAFaGyDFJv8PZmGnNWr6JkW-Mc'
    }),
    RouterModule.forRoot([
        { path: 'mapit', component: MapItComponent }
      ]),
  ],
  declarations: [MapItComponent],
  exports: [MapItComponent]
})
export class MapItModule { }
