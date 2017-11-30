import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from '../../services/trips/trip.service';

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
             public tripservice: TripService) { }

  ngOnInit() {
   const param = this._route.snapshot.paramMap.get('id');
   if (param) {
     this.id = +param;
     this.tripservice.getMarker(this.id);
     this.tripservice.getMarkers()
   }
  }
  onDelete() {
   console.log("delete marker");
   this.tripservice.deleteMarker(this.id)
       .subscribe(response => {
     this._router.navigate(["/markers"])
     },
     err => console.log(err));
  }

}
