import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationForm } from '../models/registration-form.interface';
import { LoginForm } from '../models/login-form.interface';
import { UserDataDto } from '@pet-donations/interfaces';
import { BehaviorSubject, finalize } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AuthorizationControllerService {
  private readonly isLoadingTrigger$ = new BehaviorSubject(false);
  public readonly isLoading$ = this.isLoadingTrigger$.asObservable();

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly userService: UserService
  ) {}

  public onProceed(
    formData: RegistrationForm | LoginForm | null,
    tabIndex: number,
    cb: () => void
  ) {
    if (!formData) return;
    this.isLoadingTrigger$.next(true);

    const obs =
      tabIndex === 1
        ? this.userService.registerUser(formData as UserDataDto)
        : this.userService.login(formData as LoginForm);

    obs.pipe(finalize(() => this.isLoadingTrigger$.next(false))).subscribe({
      next: (user) => cb(),
      error: ({ error }) =>
        this.snackBar.open(error.message, '', { duration: 2000 }),
    });
  }
}
