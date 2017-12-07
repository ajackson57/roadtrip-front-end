import { Component, NgModule, OnInit, NgZone, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment'
import { TripService } from '../services/trips/trip.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';
import { AgmMapDirectionsDirective } from './agm-map-directions.directive';


declare var google;

// draggable: boolean;

@Component({
  selector: 'app-map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./map-it.component.css']
})
export class MapItComponent implements OnInit {

      @ViewChild(AgmMapDirectionsDirective) vc = null;

    constructor(
      public tripservice: TripService,
      private _router : Router,
      private _loader: MapsAPILoader,
      private _zone: NgZone,
      private _flashMessagesService: FlashMessagesService)
      { }

    ngOnInit(): void {
      this.autocomplete();
    }

//     ngAfterViewInit(){
//     this.vc.updateDirections();                 ///<<@@@ no need to use nativeElement
// }

    autocomplete() {
      this._loader.load().then(() => {
          let autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocompleteInput"), {});
          google.maps.event.addListener(autocomplete, 'place_changed', () => {
              this._zone.run(() => {
                let place = autocomplete.getPlace();
                let newMarker = {
                    "name": place.name,
                    "lng": place.geometry.location.lng(),
                    "lat": place.geometry.location.lat(),
                    "trip_id": this.tripservice.trip.trip_id
                }
                this.tripservice.createMarker(newMarker)
                    .subscribe(response => {
                  let marker = response.json();
                  this._router.navigate(["/markers/" + marker.marker.id]);
                },
                err => {
                  this._flashMessagesService.show('There was an issue saving your trip marker ' + err);
                });
              });
          });
      });
    }
    updateDirections() {
      this.vc.updateDirections();
    }
  }
