import { Injectable, OnDestroy } from '@angular/core';
import { UserService } from '@pet-donations/web/user';
import { ActivatedRoute } from '@angular/router';
import { pluck, Subscription } from 'rxjs';
import { Role, User } from '@pet-donations/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class UserProfileControllerService implements OnDestroy {
  public readonly user$ = this.userService.user$;
  public readonly roles$ = this.ar.data.pipe<Role[]>(pluck('roles'));

  public readonly form = new FormGroup({
    username: new FormControl({ value: null, disabled: true }),
    name: new FormControl(null),
    surname: new FormControl(null),
    email: new FormControl({ value: null, disabled: true }),
    avatarUrl: new FormControl(null),
    role: new FormControl(null, [Validators.required]),
  });

  private readonly subs = new Subscription();

  constructor(
    private readonly userService: UserService,
    private readonly ar: ActivatedRoute
  ) {
    this.subs.add(
      this.user$.subscribe({
        next: (user) => this.setUsersData(user),
      })
    );
  }

  public updateUserInfo() {
    const { name, surname, role, avatarUrl } = this.form.getRawValue();

    this.userService
      .changeUserInfo({ name, surname, role, avatar: avatarUrl })
      ?.subscribe();
  }

  public resetFormData() {
    this.setUsersData(this.userService.getUser());
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private setUsersData(user: User | null) {
    this.form.setValue({
      username: user?.username,
      name: user?.name,
      surname: user?.surname,
      email: user?.email,
      avatarUrl: user?.avatar,
      role: user?.role?.id,
    });
  }
}
