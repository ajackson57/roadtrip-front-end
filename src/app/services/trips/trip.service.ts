import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment';


@Injectable()
export class TripService {
  trips: any;
  trip: any;
  markers: any;
  marker: any;

  constructor( private http: Http,  public auth: AuthService ) { }

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
       err => console.log(err)
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
        this.trip = JSON.parse(response['_body']).trip
       },
       err => console.log(err)
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
      // .subscribe(
      //   response => {
      //   this.trip = JSON.parse(response['_body']).trip
      //  },
      //  err => console.log(err)
      // )
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
      "lat": marker.lat,
      "lng": marker.lng,
      "image_url": marker.image_url,
      "site_url": marker.site_url
    }
    }
    // Make the delete request to URL, and add the token from Config.
    return this.http.post(environment.apiOrigin + '/markers', data, config)
      // .subscribe(
      //   response => {
      //   this.trip = JSON.parse(response['_body']).trip
      //  },
      //  err => console.log(err)
      // )
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
      // .subscribe(
      //   response => {
      //   this.trip = JSON.parse(response['_body']).trip
      //  },
      //  err => console.log(err)
      // )
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
      // .subscribe(
      //   response => {
      //   this.trip = JSON.parse(response['_body']).trip
      //  },
      //  err => console.log(err)
      // )
  }

  deleteTrip(id: number) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}

    // Make the delete request to URL, and add the token from Config.
    return this.http.delete(environment.apiOrigin + '/trips/' + id, config)
      // .subscribe(
      //   response => {
      //   this.trip = JSON.parse(response['_body']).trip
      //  },
      //  err => console.log(err)
      // )
  }

  deleteMarker(id: number) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}

    // Make the delete request to URL, and add the token from Config.
    return this.http.delete(environment.apiOrigin + '/markerss/' + id, config)
      // .subscribe(
      //   response => {
      //   this.trip = JSON.parse(response['_body']).trip
      //  },
      //  err => console.log(err)
      // )
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
        this.markers = JSON.parse(response['_body']).markers
       },
       err => console.log(err)
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
        this.trip = JSON.parse(response['_body']).trip
       },
       err => console.log(err)
      )
  }

}
