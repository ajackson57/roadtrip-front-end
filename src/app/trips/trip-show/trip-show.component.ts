import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from '../../services/trips/trip.service';

@Component({
  selector: 'app-trip-show',
  templateUrl: './trip-show.component.html',
  styleUrls: ['./trip-show.component.css']
})
export class TripShowComponent implements OnInit {
   id: number = 0
   trip: any;
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              public tripservice: TripService) { }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      this.id = +param;
      this.tripservice.getTrip(this.id);
      this.tripservice.getMarkers()
    }
  }
  onDelete() {
  	console.log("delete trip");
  	this.tripservice.deleteTrip(this.id)
  			.subscribe(response => {
			this._router.navigate(["/trips"])
      },
      err => console.log(err));
  }

}
