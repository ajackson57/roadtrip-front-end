import { Component, OnInit } from '@angular/core';
import { TripServiceService } from '../trip-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-new',
  templateUrl: './trip-new.component.html',
  styleUrls: ['./trip-new.component.css']
})
export class TripNewComponent implements OnInit {
  newTrip = <any>{};
  constructor(
    private tripService : TripServiceService,
    private router : Router
  ) { }

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
		})
  }

}
