import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trips/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';


@Component({
  selector: 'app-marker-edit',
  templateUrl: './marker-edit.component.html',
  styleUrls: ['./marker-edit.component.css']
})
export class MarkerEditComponent implements OnInit {
  updatedMarker = <any>{};
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private tripservice : TripService,
    private _flashMessagesService: FlashMessagesService )
  { }

  ngOnInit() {
     this.updatedMarker = this.tripservice.marker;
  }

  updateMarker(updatedMarker) {
    if ((parseFloat(updatedMarker.lng) == NaN) || updatedMarker.lng > 180 || updatedMarker.lng < -180) {
      this._flashMessagesService.show(
        'longitude must be in the range of -180 to 180!')
        return;
    } else if ((parseFloat(updatedMarker.lat) == NaN) || updatedMarker.lat > 90 || updatedMarker.lat < -90) {
      this._flashMessagesService.show(
        'latitude must be in the range of -90 to 90!')
        return;
    }

    this.tripservice.updateMarker(updatedMarker)
    .subscribe(response => {
      console.log(response.json());
      let marker = response.json();
      this.router.navigate(["/markers/" + marker.marker.id]);
    },
      err => { this._flashMessagesService.show(
        'Sorry unable to update your trip marker. ' + err) }
    );
  }
}
