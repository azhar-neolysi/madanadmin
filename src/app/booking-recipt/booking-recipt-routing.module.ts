import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingReciptPage } from './booking-recipt.page';
import { NewReciptPage } from './new-recipt/new-recipt.page';

const routes: Routes = [
  {
    path: '',
    component: BookingReciptPage,
  },
  { path: 'new', component: NewReciptPage },
  { path: 'edit/:reciptId', component: NewReciptPage },
  {
    path: 'new-recipt',
    loadChildren: () =>
      import('./new-recipt/new-recipt.module').then(
        (m) => m.NewReciptPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingReciptPageRoutingModule {}
