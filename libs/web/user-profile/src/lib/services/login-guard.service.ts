import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { UserService } from '@pet-donations/web/user';
import {map} from "rxjs";

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  public canActivate() {
    return this.userService.user$.pipe(
      map((user) => {
        if (!user) {
          void this.router.navigate(['news']);
          return false;
        }

        return true;
      })
    );
  }
}
