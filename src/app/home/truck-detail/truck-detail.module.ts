import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TruckDetailPageRoutingModule } from './truck-detail-routing.module';

import { TruckDetailPage } from './truck-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TruckDetailPageRoutingModule
  ],
  declarations: [TruckDetailPage]
})
export class TruckDetailPageModule {}
