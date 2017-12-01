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

  constructor(public tripservice: TripService) { }

  ngOnInit() {
  }
