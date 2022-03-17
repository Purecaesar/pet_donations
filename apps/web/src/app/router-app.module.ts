import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'news',
    loadChildren: () => import('@pet-donations/web/news').then(m => m.WebNewsModule),
  },
  {
   path: 'crowdfunding',
    loadChildren: () => import('@pet-donations/web/crowdfunding').then(m => m.CrowdfundingRouterModule),
  },
  {
    path: '**',
    redirectTo: 'news',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class RouterAppModule {}
