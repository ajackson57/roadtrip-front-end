import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trips/trip.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marker-edit',
  templateUrl: './marker-edit.component.html',
  styleUrls: ['./marker-edit.component.css']
})
export class MarkerEditComponent implements OnInit {
  updatedMarker = <any>{};
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private tripservice : TripService
  ) { }

  ngOnInit() {
     this.updatedMarker = this.tripservice.marker;
  }

  updateMarker(updatedMarker) {
    console.log("updating trip!");
    this.tripservice.updateMarker(updatedMarker)
    .subscribe(response => {
      console.log(response.json());
      let marker = response.json();
      this.router.navigate(["/markers/" + marker.marker.id]);
    });
  }
}
