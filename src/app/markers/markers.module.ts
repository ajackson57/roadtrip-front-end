import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MarkerNewComponent } from './marker-new/marker-new.component';
import { MarkerEditComponent } from './marker-edit/marker-edit.component';
import { MarkerIndexComponent } from './marker-index/marker-index.component';
import { MarkerShowComponent } from './marker-show/marker-show.component';
import { TripService } from '../services/trips/trip.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'markers', component: MarkerIndexComponent },
      { path: 'markers/new', component: MarkerNewComponent },
      { path: 'markers/edit', component: MarkerEditComponent },
      { path: 'markers/:id', component: MarkerShowComponent }
  ]),
    CommonModule,
    FormsModule
  ],
  declarations: [MarkerNewComponent,
                 MarkerEditComponent,
                 MarkerIndexComponent,
                 MarkerShowComponent],
  providers: [TripService]
})
export class MarkersModule { }
