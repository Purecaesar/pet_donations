import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { RegistrationForm } from '../../models/registration-form.interface';

@Component({
  selector: 'pd-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  @Input() public set form(formData: RegistrationForm | null) {
    if (!formData) return;

    this.formGroup.setValue({ ...formData, passwordAgain: formData.password });
  }

  public readonly formGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      this.validatePasswords('passwordAgain'),
      Validators.minLength(5),
    ]),
    passwordAgain: new FormControl('', [
      Validators.required,
      this.validatePasswords('password'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @Output() public formChange = this.formGroup.valueChanges.pipe(
    map<RegistrationForm, RegistrationForm | null>(
      ({ username, password, email }) =>
        this.formGroup.valid ? { username, password, email } : null
    )
  );

  private validatePasswords(oppositeFiled: string) {
    return (control: FormControl) => {
      const parent = control.parent as FormGroup;
      if (!parent) return null;

      const oppositeControl = parent.controls[oppositeFiled];
      const isValid = control.value === oppositeControl.value;
      const oppositeControlErrors = oppositeControl?.errors || {};
      if (!isValid)
        oppositeControl.setErrors(
          { ...oppositeControlErrors, notEqual: true },
          { emitEvent: true }
        );
      else if ('notEqual' in oppositeControlErrors) {
        delete oppositeControlErrors['notEqual'];
        const errors = Object.keys(oppositeControlErrors).length
          ? oppositeControlErrors
          : null;
        oppositeControl.setErrors(errors, { emitEvent: true });
      }

      return isValid ? null : { notEqual: true };
    };
  }
}
