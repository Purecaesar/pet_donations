import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { LoginGuardService } from './services/login-guard.service';
import { RolesResolverService } from './services/roles-resolver.service';

const ROUTES: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    canActivate: [LoginGuardService],
    resolve: {
      roles: RolesResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  providers: [LoginGuardService, RolesResolverService],
  exports: [RouterModule],
})
export class UserProfileRouterModule {}
