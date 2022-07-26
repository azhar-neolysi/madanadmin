import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateCardFormPageRoutingModule } from './rate-card-form-routing.module';

import { RateCardFormPage } from './rate-card-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RateCardFormPageRoutingModule
  ],
  declarations: [RateCardFormPage]
})
export class RateCardFormPageModule {}
