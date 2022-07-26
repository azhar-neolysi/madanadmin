import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingPaymentsPage } from './booking-payments.page';
import { NewPaymentsPage } from './new-payments/new-payments.page';
import { PaymentListPage } from './payment-list/payment-list.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentListPage
  },
  { path: 'new', component: NewPaymentsPage },
  { path: 'edit/:paymentId', component: NewPaymentsPage },
  { path: 'lrEdit/:bid', component: NewPaymentsPage },
  {
    path: 'new-payments',
    loadChildren: () => import('./new-payments/new-payments.module').then( m => m.NewPaymentsPageModule)
  },
  {
    path: 'payment-list',
    loadChildren: () => import('./payment-list/payment-list.module').then( m => m.PaymentListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPaymentsPageRoutingModule {}
