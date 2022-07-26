import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LrPageRoutingModule } from './lr-routing.module';

import { LrPage } from './lr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LrPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LrPage]
})
export class LrPageModule {}
