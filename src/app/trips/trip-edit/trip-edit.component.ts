import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trips/trip.service';
import { ActivatedRoute, Router }   from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent implements OnInit {
  updatedTrip = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private tripservice : TripService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
     this.updatedTrip = this.tripservice.trip;
  }

  updateTrip(updatedTrip) {
    console.log("updating trip!");
    this.tripservice.updateTrip(updatedTrip)
    .subscribe(response => {
      let trip = response.json();
      this.router.navigate(["/trips/" + trip.trip.id]);
      this._flashMessagesService.show('Your trip was succesfully updated.');
    },
      err => {
        this._flashMessagesService.show('There was an issue updatig your trip' + err);
      });
  }

}
