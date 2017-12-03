import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trips/trip.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';


@Component({
  selector: 'app-trip-new',
  templateUrl: './trip-new.component.html',
  styleUrls: ['./trip-new.component.css']
})
export class TripNewComponent implements OnInit {
  newTrip = <any>{};
  constructor(
    private tripService : TripService,
    private router : Router,
    private _flashMessagesService: FlashMessagesService )
  { }

  ngOnInit() {
  }

  saveTrip(newTrip) {
  	if ((parseFloat(newTrip.center_lng) == NaN) || newTrip.center_lng > 180 || newTrip.center_lng < -180) {
      this._flashMessagesService.show(
        'Center longitude must be in the range of -180 to 180!')
        return;
    } else if ((parseFloat(newTrip.center_lat) == NaN) || newTrip.center_lat > 90 || newTrip.center_lat < -90) {
      this._flashMessagesService.show(
        'Center latitude must be in the range of -90 to 90!')
        return;
    } else if (!Number.isInteger(newTrip.zoom) || +newTrip.zoom > 20 || +newTrip.zoom < 1) {
      this._flashMessagesService.show(
        'Zoom must be an integer between 1 and 20!')
        return;
    }

  	this.tripService.createTrip(newTrip)
  			.subscribe(response => {
			console.log(response.json());
			let trip = response.json();
			this.router.navigate(["/trips/" + trip.trip.id]);
		},
      err => { this._flashMessagesService.show(
        'Sorry unable to create your new trip. ' + err)
      })
  }

}
