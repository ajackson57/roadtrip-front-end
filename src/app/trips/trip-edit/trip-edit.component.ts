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
    if ((parseFloat(updatedTrip.center_lng) == NaN) || updatedTrip.center_lng > 180 || updatedTrip.center_lng < -180) {
      this._flashMessagesService.show(
        'Center longitude must be in the range of -180 to 180!')
        return;
    } else if ((parseFloat(updatedTrip.center_lat) == NaN) || updatedTrip.center_lat > 90 || updatedTrip.center_lat < -90) {
      this._flashMessagesService.show(
        'Center latitude must be in the range of -90 to 90!')
        return;
    } else if (!Number.isInteger(updatedTrip.zoom) || +updatedTrip.zoom > 20 || +updatedTrip.zoom < 1) {
      this._flashMessagesService.show(
        'Zoom must be an integer between 1 and 20!')
        return;
    }

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
