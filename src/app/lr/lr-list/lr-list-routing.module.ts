import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LrListPage } from './lr-list.page';

const routes: Routes = [
  {
    path: '',
    component: LrListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LrListPageRoutingModule {}
