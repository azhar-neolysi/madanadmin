import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LrListPageRoutingModule } from './lr-list-routing.module';

import { LrListPage } from './lr-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LrListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LrListPage],
})
export class LrListPageModule {}
