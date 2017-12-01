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
  	console.log("saving trip");
  	console.log(newTrip);
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
