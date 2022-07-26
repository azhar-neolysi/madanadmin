import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingReciptPageRoutingModule } from './booking-recipt-routing.module';

import { BookingReciptPage } from './booking-recipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookingReciptPageRoutingModule
  ],
  declarations: [BookingReciptPage]
})
export class BookingReciptPageModule {}
