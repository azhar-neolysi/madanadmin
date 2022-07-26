import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateCardFormPage } from './rate-card-form/rate-card-form.page';
import { RateCardListPage } from './rate-card-list/rate-card-list.page';

import { RateCardPage } from './rate-card.page';

const routes: Routes = [

  // { path: '', component: RateCardListPage },
  // { path: 'new', component: RateCardFormPage },
  // { path: ':id/edit', component: RateCardFormPage },
  {
    path: '',
    loadChildren: () => import('./rate-card-list/rate-card-list.module').then( m => m.RateCardListPageModule)
  },
  {
    path: ':id/edit',
    loadChildren: () => import('./rate-card-form/rate-card-form.module').then( m => m.RateCardFormPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./rate-card-form/rate-card-form.module').then( m => m.RateCardFormPageModule)
  },
  {
    path: 'rate-card-form',
    loadChildren: () => import('./rate-card-form/rate-card-form.module').then( m => m.RateCardFormPageModule)
  },
  {
    path: 'rate-card-list',
    loadChildren: () => import('./rate-card-list/rate-card-list.module').then( m => m.RateCardListPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateCardPageRoutingModule {}
