import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KennelInfoComponent } from './containers/kennel-info/kennel-info.component';
import { KennelResolverService } from './services/kennel-resolver.service';
import { UserRoleGuardService } from './services/user-role-guard.service';

const ROUTES: Routes = [
  {
    path: '',
    component: KennelInfoComponent,
    resolve: {
      kennel: KennelResolverService,
    },
    canActivate: [UserRoleGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  providers: [KennelResolverService, UserRoleGuardService],
  exports: [RouterModule],
})
export class KennelInfoRoutingModule {}
