import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferencePageRoutingModule } from './reference-routing.module';

import { ReferencePage } from './reference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReferencePageRoutingModule
  ],
  declarations: [ReferencePage]
})
export class ReferencePageModule {}
