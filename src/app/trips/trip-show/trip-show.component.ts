import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripServiceService } from '../trip-service.service';

@Component({
  selector: 'app-trip-show',
  templateUrl: './trip-show.component.html',
  styleUrls: ['./trip-show.component.css']
})
export class TripShowComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              public tripservice: TripServiceService) { }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.tripservice.getTrip(id);
    }
  }

}
