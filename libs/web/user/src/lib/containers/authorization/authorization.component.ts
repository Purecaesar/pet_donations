import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegistrationForm } from '../../models/registration-form.interface';
import { LoginForm } from '../../models/login-form.interface';
import { AuthorizationControllerService } from '../../services/authorization-controller.service';

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

  constructor(private readonly controller: AuthorizationControllerService) {}

  public onProceed(formData: RegistrationForm | LoginForm | null) {
    this.controller.onProceed(formData, this.tabIndex);
  }
}
