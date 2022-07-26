import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LrDetailPageRoutingModule } from './lr-detail-routing.module';

import { LrDetailPage } from './lr-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LrDetailPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [LrDetailPage]
})
export class LrDetailPageModule {}
