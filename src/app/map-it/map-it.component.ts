import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../../environments/environment'
import { TripService } from '../services/trips/trip.service';
import { AgmCoreModule } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';

@Component({
  selector: 'app-map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./map-it.component.css']
})
export class MapItComponent implements OnInit {
  apiOrgin = environment.apiOrigin;
  title: string = 'Road Trip';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 8;

  constructor(public tripservice: TripService) { }

  ngOnInit() {
  }

  clickedMarker(label: string) {
    console.log(`clicked the marker: ${label}`)
  }

  mapClicked($event: AGMMouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
  	  {
  		  lat: 51.673858,
  		  lng: 7.815982,
  		  label: 'A',
  		  draggable: true
  	  },
  	  {
  		  lat: 51.373858,
  		  lng: 7.215982,
  		  label: 'B',
  		  draggable: false
  	  },
  	  {
  		  lat: 51.723858,
  		  lng: 7.895982,
  		  label: 'C',
  		  draggable: true
  	  }
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
