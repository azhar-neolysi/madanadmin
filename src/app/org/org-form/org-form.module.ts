import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrgFormPageRoutingModule } from './org-form-routing.module';

import { OrgFormPage } from './org-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrgFormPageRoutingModule
  ],
  declarations: [OrgFormPage]
})
export class OrgFormPageModule {}
