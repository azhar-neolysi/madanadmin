import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentListPageRoutingModule } from './payment-list-routing.module';

import { PaymentListPage } from './payment-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PaymentListPageRoutingModule
  ],
  declarations: [PaymentListPage]
})
export class PaymentListPageModule {}
