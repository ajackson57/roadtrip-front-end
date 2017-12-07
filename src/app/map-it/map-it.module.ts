import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TripService } from '../services/trips/trip.service';
import { MapItComponent } from './map-it.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmMapDirectionsDirective } from './agm-map-directions.directive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8AK83UPAFaGyDFJv8PZmGnNWr6JkW-Mc',
      libraries: ['places']
    }),
    AgmSnazzyInfoWindowModule,
    RouterModule.forRoot([
        { path: 'mapit', component: MapItComponent }
      ]),
  ],
  declarations: [MapItComponent, AgmMapDirectionsDirective],
  exports: [MapItComponent]
  // providers: [ GoogleMapsAPIWrapper ]
})
export class MapItModule { }
