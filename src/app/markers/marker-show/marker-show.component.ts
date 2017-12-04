import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from '../../services/trips/trip.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';


@Component({
  selector: 'app-marker-show',
  templateUrl: './marker-show.component.html',
  styleUrls: ['./marker-show.component.css']
})
export class MarkerShowComponent implements OnInit {
  id: number = 0
  trip: any;
  constructor(private _route: ActivatedRoute,
             private _router: Router,
             public tripservice: TripService,
             private _flashMessagesService: FlashMessagesService )
           { }

  ngOnInit() {
   const param = this._route.snapshot.paramMap.get('id');
   if (param) {
     this.id = +param;
     this.tripservice.getMarker(this.id);
     this.tripservice.getMarkers()
   }
  }
  onDelete() {
   this.tripservice.deleteMarker(this.id)
       .subscribe(response => {
     this._router.navigate(["/markers"])
     },
       err => { this._flashMessagesService.show(
         'Sorry there was an issue deleting the trip marker. ' + err) }
     )
  }

}
