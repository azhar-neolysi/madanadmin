import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LrDetailPage } from './lr-detail/lr-detail.page';
import { LrListPage } from './lr-list/lr-list.page';

import { LrPage } from './lr.page';

const routes: Routes = [
  {
    path: '',
    component: LrListPage
  },
  // { path: 'new', component: LrDetailPage },
  // { path: 'edit/:bookingId', component: LrDetailPage },
  {
    path: 'lr-list',
    loadChildren: () => import('./lr-list/lr-list.module').then( m => m.LrListPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./lr-detail/lr-detail.module').then( m => m.LrDetailPageModule)
  },
  {
    path: 'edit/:bookingId',
    loadChildren: () => import('./lr-detail/lr-detail.module').then( m => m.LrDetailPageModule)
  },
  {
    path: 'lr-detail',
    loadChildren: () => import('./lr-detail/lr-detail.module').then( m => m.LrDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LrPageRoutingModule {}
