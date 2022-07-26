import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferenceFormPage } from './reference-form/reference-form.page';
import { ReferenceListPage } from './reference-list/reference-list.page';

import { ReferencePage } from './reference.page';

const routes: Routes = [
  {
    path: '',
    component: ReferenceListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./reference-form/reference-form.module').then( m => m.ReferenceFormPageModule)
  },
  {
    path: ':id/:type/edit',
    loadChildren: () => import('./reference-form/reference-form.module').then( m => m.ReferenceFormPageModule)
  },
  {
    path: 'reference-list',
    loadChildren: () => import('./reference-list/reference-list.module').then( m => m.ReferenceListPageModule)
  },
  {
    path: 'reference-form',
    loadChildren: () => import('./reference-form/reference-form.module').then( m => m.ReferenceFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferencePageRoutingModule {}
