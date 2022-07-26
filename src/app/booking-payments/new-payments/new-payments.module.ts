import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPaymentsPageRoutingModule } from './new-payments-routing.module';

import { NewPaymentsPage } from './new-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewPaymentsPageRoutingModule
  ],
  declarations: [NewPaymentsPage]
})
export class NewPaymentsPageModule {}
