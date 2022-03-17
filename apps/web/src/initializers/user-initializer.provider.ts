import { APP_INITIALIZER, Provider } from '@angular/core';
import { UserService } from '@pet-donations/web/user';

export const USER_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  deps: [UserService],
  useFactory: (userService: UserService) => () => userService.getUserFromStorage(),
};
