import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';

declare var google;

@Injectable()
export class TripService {
  trips: any;
  trip: any;
  markers: any;
  marker: any;

  constructor( private http: Http,
               public auth: AuthService,
               private _flashMessagesService: FlashMessagesService )
               { }

  getTrips() {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    // Make the delete request to URL, and add the token from Config.
    this.http.get(environment.apiOrigin + '/trips', config)
      .subscribe(
        response => {
        this.trips = JSON.parse(response['_body']).trips;
       },
       err => { this._flashMessagesService.show(
         'Error retrieving trips. ' + err); }
      )
  }

  getTrip(id: number) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    // Make the delete request to URL, and add the token from Config.
    this.http.get(environment.apiOrigin + '/trips/' + id, config)
    //.map(response => this.trip = JSON.parse(response['_body']).trip);
      .subscribe(
        response => {
        this.trip = JSON.parse(response['_body']).trip;
       },
       err => { this._flashMessagesService.show('Error retrieving trip. ' + err); }
      )
  }

  createTrip(trip) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    let data = {
    "trip": {
      "name": trip.name,
      "description": trip.description,
      "center_lat": trip.center_lat,
      "center_lng": trip.center_lng,
      "zoom": trip.zoom
    }
    }
    // Make the delete request to URL, and add the token from Config.
    return this.http.post(environment.apiOrigin + '/trips', data, config)
  }

  populateRoute() {
    // Create the route from markers
    let waypoints = []
    for (let i = 1; i < this.markers.length - 1; i++) {
      waypoints.push({
               location: new google.maps.LatLng(this.markers[i].lat,this.markers[i].lng),
               stopover: true
             });
    }
    let route =
    {
      "originlng": this.markers[0].lng,
      "originlat": this.markers[0].lat,
      "destinationlng": this.markers[this.markers.length-1].lng,
      "destinationlat": this.markers[this.markers.length-1].lat,
      "waypoints": waypoints
    }
    return route
  }

  updateTrip(trip) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    let data = {
    "trip": {
      "name": trip.name,
      "description": trip.description,
      "center_lat": trip.center_lat,
      "center_lng": trip.center_lng,
      "zoom": trip.zoom
    }
    }
    // Make the delete request to URL, and add the token from Config.
    return this.http.patch(environment.apiOrigin + '/trips/' + this.trip.id, data, config)
  }

  deleteTrip(id: number) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}

    // Make the delete request to URL, and add the token from Config.
    return this.http.delete(environment.apiOrigin + '/trips/' + id, config)
  }

  createMarker(marker) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    let data = {
    "marker": {
      "name": marker.name,
      "description": marker.description,
      "lng": marker.lng,
      "lat": marker.lat,
      "image_url": marker.image_url,
      "poi_url": marker.site_url,
      "trip_id": this.trip.id
    }
    }
    // Make the delete request to URL, and add the token from Config.
    return this.http.post(environment.apiOrigin + '/markers', data, config)
  }

  updateMarker(marker) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    let data = {
    "marker": {
      "name": marker.name,
      "description": marker.description,
      "lat": marker.lat,
      "lng": marker.lng,
      "image_url": marker.image_url,
      "site_url": marker.site_url
    }
    }
    // Make the delete request to URL, and add the token from Config.
    return this.http.patch(environment.apiOrigin + '/markers/' + this.trip.id, data, config)
  }

  deleteMarker(id: number) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}

    // Make the delete request to URL, and add the token from Config.
    return this.http.delete(environment.apiOrigin + '/markers/' + id, config)
  }

  getMarkers() {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    // Make the delete request to URL, and add the token from Config.
    this.http.get(environment.apiOrigin + '/markers', config)
      .subscribe(
        response => {
        let tripMarkers = JSON.parse(response['_body']).markers;
        this.markers = tripMarkers.filter(marker => marker.trip_id == this.trip.id);
       },
       err => {
         this._flashMessagesService.show('There was a problem retrieving your trips markers. '
          + err);
         }
      )
  }

  getMarker(id: number) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    // Make the delete request to URL, and add the token from Config.
    this.http.get(environment.apiOrigin + '/markers/' + id, config)
    //.map(response => this.trip = JSON.parse(response['_body']).trip);
      .subscribe(
        response => {
        this.marker = JSON.parse(response['_body']).marker;
       },
       err => {
         this._flashMessagesService.show('There was a problem retrieving your trips markers. '
          + err);
        }
      )
  }

}
