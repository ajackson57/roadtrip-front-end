import { Component, OnInit } from '@angular/core';
import { TripServiceService } from './trip-service.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: any;
  errorMessage: string;

 constructor(public _tripService: TripServiceService) { }

  ngOnInit() {
    this.trips = this._tripService.getTrips()
  }
}
