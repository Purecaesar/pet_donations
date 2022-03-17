import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegistrationForm } from '../../models/registration-form.interface';
import { LoginForm } from '../../models/login-form.interface';
import { AuthorizationControllerService } from '../../services/authorization-controller.service';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'pd-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: [AuthorizationControllerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent {
  public readonly isLoading$ = this.controller.isLoading$;

  public tabIndex = 0;
  public registrationData: RegistrationForm | null = null;
  public loginData: LoginForm | null = null;

  constructor(
    private readonly controller: AuthorizationControllerService,
    private readonly dialog: MatDialogRef<AuthorizationComponent>,
    private readonly snackBar: MatSnackBar,
  ) {}

  public onProceed(formData: RegistrationForm | LoginForm | null) {
    this.controller.onProceed(formData, this.tabIndex, () => {
      switch (this.tabIndex) {
        case 1:
          this.tabIndex = 0;
          this.snackBar.open('User successful registered. Login now.', '', {
            duration: 2000,
          });
          break;
        case 0:
          this.dialog.close();
          break;
      }
    });
  }
}
