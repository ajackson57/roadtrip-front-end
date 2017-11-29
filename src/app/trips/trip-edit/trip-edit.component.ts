import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trips/trip.service';
import { ActivatedRoute, Router }   from '@angular/router';

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
    private tripservice : TripService
  ) { }

  ngOnInit() {
     this.updatedTrip = this.tripservice.trip;
  }

  updateTrip(updatedTrip) {
    console.log("updating trip!");
    this.tripservice.updateTrip(updatedTrip)
    .subscribe(response => {
      console.log(response.json());
      let trip = response.json();
      this.router.navigate(["/trips/" + trip.trip.id]);
    });
  }

}
