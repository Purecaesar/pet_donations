import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pd-create-kennel-dialog',
  templateUrl: './create-kennel-dialog.component.html',
  styleUrls: ['./create-kennel-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateKennelDialogComponent {
  public readonly kennelName = new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]);
}
