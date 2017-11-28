import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TripComponent } from './trip.component';
import { TripListComponent } from './trip-list.component';
import { MarkerComponent } from './marker.component';
import { MarkerListComponent } from './marker-list.component';
import { TripServiceService } from './trip-service.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: 'trips', component: TripListComponent }
      ]),
    CommonModule,
    FormsModule
  ],
  declarations: [TripComponent, TripListComponent, MarkerComponent, MarkerListComponent],
  providers: [TripServiceService]
})
export class TripsModule { }
