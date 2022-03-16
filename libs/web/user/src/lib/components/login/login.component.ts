import {ChangeDetectionStrategy, Component, Input, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { LoginForm } from '../../models/login-form.interface';

@Component({
  selector: 'pd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Input() public set form(formData: LoginForm | null) {
    if (!formData) return;

    this.formGroup.setValue(formData);
  }

  public readonly formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  @Output() public formChange = this.formGroup.valueChanges.pipe(
    map<LoginForm, LoginForm | null>((formData) =>
      this.formGroup.valid ? formData : null
    )
  );
}
