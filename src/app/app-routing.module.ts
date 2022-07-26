import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'vehicle-details',
    loadChildren: () => import('./vehicle-details/vehicle-details.module').then( m => m.VehicleDetailsPageModule)
  },
  {
    path: 'lr',
    loadChildren: () => import('./lr/lr.module').then( m => m.LrPageModule)
  },
  {
    path: 'rate-card',
    loadChildren: () => import('./rate-card/rate-card.module').then( m => m.RateCardPageModule)
  },
  {
    path: 'booking-recipt',
    loadChildren: () => import('./booking-recipt/booking-recipt.module').then( m => m.BookingReciptPageModule)
  },
  {
    path: 'booking-payments',
    loadChildren: () => import('./booking-payments/booking-payments.module').then( m => m.BookingPaymentsPageModule)
  },
  {
    path: 'reference',
    loadChildren: () => import('./reference/reference.module').then( m => m.ReferencePageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'org',
    loadChildren: () => import('./org/org.module').then( m => m.OrgPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
