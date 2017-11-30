import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trips/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marker-new',
  templateUrl: './marker-new.component.html',
  styleUrls: ['./marker-new.component.css']
})
export class MarkerNewComponent implements OnInit {
  newMarker = <any>{};
  constructor(
    private tripService : TripService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  saveMarker(newMarker) {
    console.log("saving marker");
    console.log(newMarker);
    this.tripService.createMarker(newMarker)
        .subscribe(response => {
      console.log(response.json());
      let marker = response.json();
      this.router.navigate(["/markers/" + marker.marker.id]);
    })
  }

}
