import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewReciptPageRoutingModule } from './new-recipt-routing.module';

import { NewReciptPage } from './new-recipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewReciptPageRoutingModule
  ],
  declarations: [NewReciptPage]
})
export class NewReciptPageModule {}
