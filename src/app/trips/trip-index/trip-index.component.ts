import { Component, OnInit } from '@angular/core';
import { TripServiceService } from '../trip-service.service';

@Component({
  selector: 'app-trip-index',
  templateUrl: './trip-index.component.html',
  styleUrls: ['./trip-index.component.css']
})
export class TripIndexComponent implements OnInit {

  constructor( public tripservice: TripServiceService ) { }

  ngOnInit() {
    this.tripservice.getTrips()
  }

}
