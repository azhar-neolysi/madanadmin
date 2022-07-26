import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeePage } from './employee.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: EmployeeListPage
  // },
  {
    path: '',
    loadChildren: () => import('./employee-list/employee-list.module').then( m => m.EmployeeListPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./employee-form/employee-form.module').then( m => m.EmployeeFormPageModule)
  },
  {
    path: ':employeeId/edit',
    loadChildren: () => import('./employee-form/employee-form.module').then( m => m.EmployeeFormPageModule)
  },
  {
    path: 'employee-list',
    loadChildren: () => import('./employee-list/employee-list.module').then( m => m.EmployeeListPageModule)
  },
  {
    path: 'employee-form',
    loadChildren: () => import('./employee-form/employee-form.module').then( m => m.EmployeeFormPageModule)
  },
  // { path: '', component: EmployeeListComponent },
  // { path: 'new', component: EmployeeFormPage },
  // { path: ':employeeId/edit', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePageRoutingModule {}
