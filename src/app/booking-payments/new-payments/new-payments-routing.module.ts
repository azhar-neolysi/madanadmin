import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPaymentsPage } from './new-payments.page';

const routes: Routes = [
  {
    path: '',
    component: NewPaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPaymentsPageRoutingModule {}
