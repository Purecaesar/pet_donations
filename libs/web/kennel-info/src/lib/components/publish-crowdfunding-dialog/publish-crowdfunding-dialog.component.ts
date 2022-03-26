import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pd-publish-crowdfunding-dialog',
  templateUrl: './publish-crowdfunding-dialog.component.html',
  styleUrls: ['./publish-crowdfunding-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublishCrowdfundingDialogComponent {
  public readonly form = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    description: new FormControl(null),
    limit: new FormControl(null, [Validators.required, Validators.min(1000)]),
  });
}
