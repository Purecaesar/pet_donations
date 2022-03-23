import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { KennelApiService } from '@pet-donations/web/endpoints';
import { UserService } from '@pet-donations/web/user';

@Injectable()
export class KennelResolverService implements Resolve<any> {
  constructor(
    private readonly kennelApi: KennelApiService,
    private readonly userService: UserService
  ) {}

  public resolve() {
    const user = this.userService.getUser();

    if (!user?.kennel) return null;

    return this.kennelApi.getKennelById(user.kennel.id);
  }
}
