import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateCardListPage } from './rate-card-list.page';

const routes: Routes = [
  {
    path: '',
    component: RateCardListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateCardListPageRoutingModule {}
