import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrowdfundingComponent } from './containers/crowdfunding/crowdfunding.component';
import { CrowdfundingResolverService } from './services/crowdfunding-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CrowdfundingComponent,
    resolve: {
      crowdfunding: CrowdfundingResolverService,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CrowdfundingResolverService],
})
export class CrowdfundingRouterModule {}
