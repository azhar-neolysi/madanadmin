import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TruckDetailPage } from './truck-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TruckDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruckDetailPageRoutingModule {}
