import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenceFormPage } from './reference-form.page';

const routes: Routes = [
  {
    path: '',
    component: ReferenceFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenceFormPageRoutingModule {}
