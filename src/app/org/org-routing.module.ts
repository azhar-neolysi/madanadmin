import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgPage } from './org.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: OrgPage
  // },
  {
    path: '',
    loadChildren: () => import('./org-list/org-list.module').then( m => m.OrgListPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./org-form/org-form.module').then( m => m.OrgFormPageModule)
  },
  {
    path: 'org-list',
    loadChildren: () => import('./org-list/org-list.module').then( m => m.OrgListPageModule)
  },
  {
    path: 'org-form',
    loadChildren: () => import('./org-form/org-form.module').then( m => m.OrgFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgPageRoutingModule {}
