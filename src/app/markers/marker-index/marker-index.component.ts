import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trips/trip.service';


@Component({
  selector: 'app-marker-index',
  templateUrl: './marker-index.component.html',
  styleUrls: ['./marker-index.component.css']
})
export class MarkerIndexComponent implements OnInit {

  constructor( public tripservice: TripService ) { }

  ngOnInit() {
    this.tripservice.getMarkers()
  }

}
