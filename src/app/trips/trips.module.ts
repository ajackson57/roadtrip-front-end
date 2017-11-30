import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TripShowComponent } from './trip-show/trip-show.component';
import { TripIndexComponent } from './trip-index/trip-index.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';
import { TripNewComponent } from './trip-new/trip-new.component';
import { TripService } from '../services/trips/trip.service';
import { MapItModule } from '../map-it/map-it.module';
import { MarkersModule } from '../markers/markers.module';

@NgModule({
  imports: [
    MapItModule,
    MarkersModule,
    // RouterModule.forRoot([
    //     { path: 'trips', component: TripListComponent }
    //   ]),
      RouterModule.forChild([
        { path: 'trips', component: TripIndexComponent },
        { path: 'trips/new', component: TripNewComponent },
        { path: 'trips/edit', component: TripEditComponent },
        { path: 'trips/delete', component: TripEditComponent },
        { path: 'trips/:id', component: TripShowComponent }

    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [TripIndexComponent,
                 TripShowComponent,
                 TripEditComponent,
                 TripNewComponent],
  providers: [TripService]
})
export class TripsModule { }
