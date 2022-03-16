import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserApiService } from '@pet-donations/web/endpoints';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationForm } from '../models/registration-form.interface';
import { LoginForm } from '../models/login-form.interface';
import { UserDataDto } from '@pet-donations/interfaces';
import { BehaviorSubject, finalize } from 'rxjs';
import { AuthorizationComponent } from '@pet-donations/web/user';

@Injectable()
export class AuthorizationControllerService {
  private readonly isLoadingTrigger$ = new BehaviorSubject(false);
  public readonly isLoading$ = this.isLoadingTrigger$.asObservable();

  constructor(
    private readonly dialogRef: MatDialogRef<AuthorizationComponent>,
    private readonly userApi: UserApiService,
    private readonly snackBar: MatSnackBar
  ) {}

  public onProceed(
    formData: RegistrationForm | LoginForm | null,
    tabIndex: number
  ) {
    if (!formData) return;
    this.isLoadingTrigger$.next(true);

    const obs =
      tabIndex === 1
        ? this.userApi.createUser(formData as UserDataDto)
        : this.userApi.loginUser(formData as LoginForm);

    obs.pipe(finalize(() => this.isLoadingTrigger$.next(false))).subscribe({
      next: (user) => this.dialogRef.close(user),
      error: (err) => this.snackBar.open(err.message),
    });
  }
}
