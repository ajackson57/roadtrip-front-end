import { Directive, Input, OnInit } from '@angular/core';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { TripService } from '../services/trips/trip.service';
// import {GoogleMapsAPIWrapper}  from 'angular2-google-maps/core';

declare var google;

@Directive({
  selector: 'agm-map-directions'
})
export class AgmMapDirectionsDirective {
  @Input() origin:any ;
  @Input() destination:any;
  @Input() originPlaceId:any;
  @Input() destinationPlaceId:any;
  @Input() waypoints:any;
  @Input() directionsDisplay:any;
  @Input() estimatedTime : any;
  @Input() estimatedDistance : any;

   constructor (
     public tripservice: TripService,
     private gmapsApi: GoogleMapsAPIWrapper) { console.log('directive running') }

   ngOnInit(){

   }
   updateDirections() {
     this.gmapsApi.getNativeMap().then(map => {
               var directionsService = new google.maps.DirectionsService;
               var directionsDisplay = new google.maps.DirectionsRenderer;
               directionsDisplay.setMap(map);
               let route = this.tripservice.populateRoute()
               directionsService.route({
                       origin: {lat: route.originlat, lng: route.originlng},
                       destination: {lat: route.destinationlat, lng: route.destinationlng},
                       waypoints: route.waypoints,
                       optimizeWaypoints: true,
                       travelMode: 'DRIVING'
                     }, function(response, status) {
                                 if (status === 'OK') {
                                   directionsDisplay.setDirections(response);
                                   directionsDisplay.setPanel(document.getElementById('map-canvas-modal'))
                                 } else {
                                   window.alert('Directions request failed due to ' + status);
                                 }
               });

     });
   }
 }
