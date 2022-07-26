import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'truck-detail',
    loadChildren: () => import('./truck-detail/truck-detail.module').then( m => m.TruckDetailPageModule)
  },
  {
    path: ':latlong/:polId/truck-detail',
    loadChildren: () => import('./truck-detail/truck-detail.module').then( m => m.TruckDetailPageModule)
  },
  // {
  //   path: ':latlong/:polId/truck-detail',
  //   component: TruckDetailPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
