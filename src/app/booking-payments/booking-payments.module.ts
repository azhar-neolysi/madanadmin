import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPaymentsPageRoutingModule } from './booking-payments-routing.module';

import { BookingPaymentsPage } from './booking-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookingPaymentsPageRoutingModule
  ],
  declarations: [BookingPaymentsPage]
})
export class BookingPaymentsPageModule {}
