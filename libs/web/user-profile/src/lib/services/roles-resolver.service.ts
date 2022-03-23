import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserApiService } from '@pet-donations/web/endpoints';
import { Role } from '@pet-donations/interfaces';

@Injectable()
export class RolesResolverService implements Resolve<Role[]> {
  constructor(private readonly userApi: UserApiService) {}

  public resolve() {
    return this.userApi.getRoles();
  }
}
