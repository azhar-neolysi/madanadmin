import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TruckDetailPageRoutingModule } from './truck-detail-routing.module';

import { TruckDetailPage } from './truck-detail.page';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from '@awesome-cordova-plugins/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TruckDetailPageRoutingModule
  ],
  providers:[NativeGeocoder],
  declarations: [TruckDetailPage]
})
export class TruckDetailPageModule {}
