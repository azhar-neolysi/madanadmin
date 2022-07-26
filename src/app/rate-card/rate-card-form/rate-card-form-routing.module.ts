import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateCardFormPage } from './rate-card-form.page';

const routes: Routes = [
  {
    path: '',
    component: RateCardFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateCardFormPageRoutingModule {}
