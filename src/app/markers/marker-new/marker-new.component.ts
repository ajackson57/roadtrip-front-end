import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trips/trip.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';


@Component({
  selector: 'app-marker-new',
  templateUrl: './marker-new.component.html',
  styleUrls: ['./marker-new.component.css']
})
export class MarkerNewComponent implements OnInit {
  newMarker = <any>{};
  constructor(
    private tripService : TripService,
    private router : Router,
    private _flashMessagesService: FlashMessagesService )
    { }

  ngOnInit() {
  }

  saveMarker(newMarker) {
    console.log("saving marker");
    console.log(newMarker);
    this.tripService.createMarker(newMarker)
        .subscribe(response => {
      let marker = response.json();
      this.router.navigate(["/markers/" + marker.marker.id]);
    },
    err => {
      this._flashMessagesService.show('There was an issue saving your trip marker ' + err);
    });
  }

}
