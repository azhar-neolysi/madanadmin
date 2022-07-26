import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LrDetailPage } from './lr-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LrDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LrDetailPageRoutingModule {}
