import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '@pet-donations/web/user';

@Injectable()
export class UserRoleGuardService implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  public canActivate() {
    const user = this.userService.getUser();
    if (!user) return this.router.navigate(['news']);

    const availableActions =
      user.role.availableActions?.map((action) => action.name) || [];
    if (!availableActions.includes('create kennels'))
      return this.router.navigate(['news']);

    return true;
  }
}
