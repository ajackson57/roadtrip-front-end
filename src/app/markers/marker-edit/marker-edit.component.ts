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
    console.log("updating trip!");
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
