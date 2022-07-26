import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgFormPage } from './org-form.page';

const routes: Routes = [
  {
    path: '',
    component: OrgFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgFormPageRoutingModule {}
