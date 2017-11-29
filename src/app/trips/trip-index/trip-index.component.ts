import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trips/trip.service';

@Component({
  selector: 'app-trip-index',
  templateUrl: './trip-index.component.html',
  styleUrls: ['./trip-index.component.css']
})
export class TripIndexComponent implements OnInit {

  constructor( public tripservice: TripService ) { }

  ngOnInit() {
    this.tripservice.getTrips()
  }

}
