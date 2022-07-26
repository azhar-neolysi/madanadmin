import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferenceFormPageRoutingModule } from './reference-form-routing.module';

import { ReferenceFormPage } from './reference-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReferenceFormPageRoutingModule
  ],
  declarations: [ReferenceFormPage]
})
export class ReferenceFormPageModule {}
