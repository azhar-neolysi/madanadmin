import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewReciptPage } from './new-recipt.page';

const routes: Routes = [
  {
    path: '',
    component: NewReciptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewReciptPageRoutingModule {}
