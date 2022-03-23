import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserProfileControllerService } from '../../services/user-profile-controller.service';

@Component({
  selector: 'pd-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [UserProfileControllerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
  public readonly user$ = this.controller.user$;
  public readonly roles$ = this.controller.roles$;
  public readonly form = this.controller.form;

  constructor(private readonly controller: UserProfileControllerService) {}

  public onSaveClick() {
    this.controller.updateUserInfo();
  }

  public onResetClick() {
    this.controller.resetFormData();
  }
}
