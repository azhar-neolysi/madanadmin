import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateCardListPageRoutingModule } from './rate-card-list-routing.module';

import { RateCardListPage } from './rate-card-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RateCardListPageRoutingModule
  ],
  declarations: [RateCardListPage]
})
export class RateCardListPageModule {}
